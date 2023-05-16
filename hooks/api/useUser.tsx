import React from "react";
import { useMutation } from "react-query";
import { signUpMutation } from "@/api/functions/user.api";
const useUser = () => {
  // const sign up
  const useSignUpMutation = useMutation("useSignUpuser", signUpMutation);

  return { useSignUpMutation };
};

export default useUser;
