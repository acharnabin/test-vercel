import { signUpMutation, verifyOtpMutation } from "@/api/functions/user.api";
import Seo from "@/components/Seo/Seo";
import useNotiStack from "@/hooks/useNotistack";
import useTheme from "@/hooks/useTheme";
import assest from "@/json/assest";
import validationText from "@/json/messages/validationText";
import Wrapper from "@/layout/wrapper/Wrapper";
import { setCookieClient } from "@/lib/functions/storage.lib";
import { setLoginData } from "@/reduxtoolkit/slices/userSlice";
import styles from "@/styles/pages/signup.module.scss";
import { userData } from "@/types/common.type";
import CustomButton from "@/ui/Buttons/CustomButton";
import CustomButtonWithIcon from "@/ui/Buttons/CustomButtonWithIcon";
import CustomInput from "@/ui/Inputs/CustomInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import * as yup from "yup";

//=== interface ====
interface IFormInput {
  email: string;
  password: string;
  fullName: string;
  username: string;
  phone: Number;
  bio: string;
}

interface signUpData {
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

  first_name: yup.string().required(validationText.error.first_name),
  last_name: yup.string().required(validationText.error.last_name),
});

const otpschma = yup.object().shape({
  emailOTP: yup.string().required(validationText.error.emailOTP),
  email: yup
    .string()
    .email(validationText.error.email_format)
    .required(validationText.error.enter_email),
  password: yup
    .string()
    .min(8)
    .max(32)
    .required(validationText.error.enter_password)
});

const SignUp = () => {
  const {
    handleSubmit,
    control,
    register,
    reset,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const {
    handleSubmit: handleSubmitOtp,
    control: controlOtp,
    register: otpRegister,
    reset: reset2,
    formState: { errors: errors2 },
  } = useForm<IFormInput>({
    resolver: yupResolver(otpschma),
  });

  const { toastSuccess, toastError } = useNotiStack();
  const { isLoading, mutate, isError } = useMutation(signUpMutation);
  const {
    isLoading: isOtpLoading,
    mutate: verifyOtpMutate,
    isError: isVerifyError,
  } = useMutation(verifyOtpMutation);

  const dispatch = useDispatch();
  const router = useRouter();
  const [step, setStep] = useState(1);

  //   const dispatch=useAppDispatch();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    mutate(data, {
      onSuccess: (data: signUpData) => {
        if (data?.status === 200) {
          toastSuccess(data?.message);
          setStep(2);
          

          // router.push("/");
        } else {
          toastError(data?.message);
        }
      },
    });


  };
  const onSubmitVerifyOtp: SubmitHandler<IFormInput> = (data) => {
    const body = {
      ...data,
    };
    verifyOtpMutate(data, {
      onSuccess: (data: signUpData) => {
        if (data?.status === 200) {
          toastSuccess(data?.message);
          setStep(2);
          reset();
          dispatch(setLoginData(data?.data));
          setCookieClient(process.env.NEXT_APP_TOKEN_NAME, data.token);
          setCookieClient("user", JSON.stringify(data.data));
          router.push("/");
        } else {
          toastError(data?.message);
          // console.log(data?.message);

        }
      },
    });
    console.log(data);

  };

  const { theme } = useTheme();

  return (
    <>
      <Seo title="Create Account" />
      <Wrapper>
        <Box className={styles.createBoxWrap}>
          <Container maxWidth="md">
            <Paper className={styles.signupBox}>
              <Box className={styles.varLogo}>
                {theme === "dark-mode" ? (
                  <Image src={assest.logo} alt="img" width={99} height={34} />
                ) : (
                  <Image src={assest.logo2} alt="img" width={99} height={34} />
                )}
                <h1>Create Account</h1>
              </Box>

              {step === 1 && (
                <form autoSave="true" onSubmit={handleSubmit(onSubmit)}>
                  <label >Enter first name *</label>
                  <Controller
                    control={control}
                    {...register("first_name")}
                    render={({ field: { onChange, value } }) => (
                      <CustomInput
                        type="text"
                        value={value}
                        onChange={onChange}
                        placeholder="Enter name"
                        error={Boolean(errors?.first_name)}
                        helperText={errors?.first_name?.message}
                      />
                    )}
                  />
                  <label >Enter last name  *</label>
                  <Controller
                    control={control}
                    {...register("last_name")}
                    render={({ field: { onChange, value } }) => (
                      <CustomInput
                        type="text"
                        value={value}
                        onChange={onChange}
                        placeholder="Enter last_name"
                        error={Boolean(errors?.last_name)}
                        helperText={errors?.last_name?.message}
                      />
                    )}
                  />
                  <label >Enter email  *</label>
                  <Controller
                    control={control}
                    {...register("email")}
                    render={({ field: { onChange, value } }) => (
                      <CustomInput

                        type="email"
                        value={value}
                        onChange={onChange}
                        placeholder="Enter username"
                        error={Boolean(errors?.email)}
                        helperText={errors?.email?.message}
                      />
                    )}
                  />
                  <label >Enter password *</label>
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

                  {/* <CustomButton loading={isLoading} type="submit" disabled={false}>
                <span>Submit</span>
              </CustomButton> */}
                  <Box className={styles.dialogFooter}>
                    <button type="submit" className={styles.btn}>
                      Create an Account
                    </button>
                    <Typography variant="body1">
                      Already have an account? <Link href="/login">Sign in</Link>
                    </Typography>
                    <Typography variant="body2">
                      By proceeding, you agree to our{" "}
                      <Link href="/">Terms of Use</Link> and{" "}
                      <Link href="/">Privacy Policy</Link>
                    </Typography>
                  </Box>
                </form>
              )}

              {step === 2 && (
                <form
                  autoSave="true"
                  onSubmit={handleSubmitOtp(onSubmitVerifyOtp)}
                >
                  <Controller
                    control={controlOtp}
                    {...otpRegister("emailOTP")}
                    render={({ field: { onChange, value } }) => (
                      <CustomInput
                        label="Enter Code *"
                        type="text"
                        value={value}
                        onChange={onChange}
                        placeholder="Enter Code"
                        error={Boolean(errors2?.emailOTP)}
                        helperText={errors2?.emailOTP?.message}
                      />
                    )}
                  />
                  <label>Email:</label>
                  <Controller
                    control={controlOtp}
                    {...otpRegister("email")}
                    render={({ field: { onChange, value } }) => (
                      <CustomInput

                        type="text"
                        value={value}
                        onChange={onChange}
                        placeholder="Enter username"
                        error={Boolean(errors2?.email)}
                        helperText={errors2?.email?.message}
                      />
                    )}
                  />
                  <label>Password:</label>
                  <Controller
                    control={controlOtp}
                    {...otpRegister("password")}
                    render={({ field: { onChange, value } }) => (
                      <CustomInput

                        value={value}
                        type="password"
                        onChange={onChange}
                        placeholder="Enter password"
                        error={Boolean(errors2?.password)}
                        helperText={errors2?.password?.message}
                      />
                    )}
                  />

                  <Box className={styles.dialogFooter}>
                    <CustomButtonWithIcon loading={isLoading} type="submit">
                      <Typography variant="body1"> Verify</Typography>
                    </CustomButtonWithIcon>

                    <Typography variant="body2">
                      By proceeding, you agree to our{" "}
                      <Link href="/">Terms of Use</Link> and{" "}
                      <Link href="/">Privacy Policy</Link>
                    </Typography>
                  </Box>
                </form>
              )}
            </Paper>
          </Container>
        </Box>
      </Wrapper>
    </>
  );
};

export default SignUp;
