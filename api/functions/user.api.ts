import { IFormInput } from "@/interface/common.interface";
import { userData } from "@/types/common.type";
import ApiRequest from "../axiosInstance/request";
import { endpoints } from "../endpoints";

export const signUpMutation = async (body: IFormInput) => {
  try {
    const res = await ApiRequest.post(endpoints.auth.signup, body);

    return res;
  } catch (error) {
    return error;
  }
};
export const loginMutation = async (body: IFormInput) => {
  try {
    const res = await ApiRequest.post(endpoints.auth.login, body);

    return res;
  } catch (error) {
    return error;
  }
};
export const verifyOtpMutation = async (body: IFormInput) => {
  const res = await ApiRequest.post(endpoints.auth.verifyOtp, body);

  return res;
};

export const ProfileUpdateMutation = async (body: userData) => {
  try {
    const res = await ApiRequest.post(endpoints.auth.profileUpdate, body);

    return res;
  } catch (error) {
    return error;
  }
};
