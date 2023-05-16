import { loginMutation } from "@/api/functions/user.api";
import Seo from "@/components/Seo/Seo";
import useNotiStack from "@/hooks/useNotistack";
import assest from "@/json/assest";
import validationText from "@/json/messages/validationText";
import Wrapper from "@/layout/wrapper/Wrapper";
import { setLoginData } from "@/reduxtoolkit/slices/userSlice";
import styles from "@/styles/pages/login.module.scss";
import { userData } from "@/types/common.type";
import CustomButton from "@/ui/Buttons/CustomButton";
import CustomInput from "@/ui/Inputs/CustomInput";
import { yupResolver } from "@hookform/resolvers/yup";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import * as yup from "yup";

//=== TYPES ====
interface IFormInput {
  email: string;
  password: string;
}

interface loginData {
  message: string;
  status?: Number;
  type?: string;
  error?: {
    status?: Number;
    errorType?: string;
  };
  data: userData;
  token: string;
}

const schema = yup.object().shape({
  email: yup
    .string()
    .email(validationText.error.email_format)
    .required(validationText.error.enter_email),
  password: yup
    .string()
    .min(8)
    .max(32)
    .required(validationText.error.enter_password),
});

const Login = () => {
  const {
    handleSubmit,
    control,
    register,
    reset,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });


  const router = useRouter();
  const { isLoading, mutate, isError } = useMutation(loginMutation);
  const { toastSuccess, toastError } = useNotiStack();
  //   const dispatch=useAppDispatch();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    mutate(data, {
      onSuccess: (data: loginData) => {
        if (data?.status === 200) {
          toastSuccess(data?.message);

          router.push("/");
        } else {
          toastError(data?.message);
        }
      },
    });

    // dispatch(setLoginData(data));
    // toastSuccess("Login success");
    // reset();
    console.log(data);

  };

  return (
    <>
      <Seo title="Login Page" />
      <Wrapper>
        <Container className={styles.Container}>
          <Paper className={styles.loginBox}>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className={styles.formContainer}
            >
              <Box className={styles.varLogo}>
                <Image src={assest.logo} alt="img" width={99} height={34} />
                <h1 className={styles.heading}>Login</h1>
              </Box>

              <label>Email:</label>
              <Controller
                control={control}
                {...register("email")}
                render={({ field: { onChange, value } }) => (
                  <CustomInput

                    type="text"
                    value={value}
                    onChange={onChange}
                    placeholder="Enter username"
                    error={Boolean(errors?.email)}
                    helperText={errors?.email?.message}
                  />
                )}
              />
              <label>Password:</label>
              <Controller
                control={control}
                {...register("password")}
                render={({ field: { onChange, value } }) => (
                  <CustomInput

                    value={value}
                    type="password"
                    onChange={onChange}
                    placeholder="Enter password"
                    error={Boolean(errors?.password)}
                    helperText={errors?.password?.message}
                  />
                )}
              />

              <button type="submit" className={styles.btn}>
                submit
              </button>
              <p style={{ textAlign: "center" }}>
                Don't have an account ?<Link href="/signup"><span style={{ color: "blue" }}> Signup</span></Link>
              </p>

            </form>
          </Paper>
        </Container>
      </Wrapper>
    </>
  );
};

export default Login;
