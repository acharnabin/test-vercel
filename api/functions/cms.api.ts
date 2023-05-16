import {
  IgetCategoryListQuery,
  IgetNewsListQuery,
  IgetPriceListQuery,
  IgetToolDetails,
  IgetToolFeatureListQuery,
  IgetToolListQuery,
} from "@/interface/apiresponse.interface";
import ApiRequest from "../axiosInstance/request";
import { endpoints } from "../endpoints";

export const fetchAboutUs = async () => {
  try {
    const res = await ApiRequest.get(endpoints.cms.about);
    return res;
  } catch (error) {
    return error;
  }
};

export const getCategoryListQuery = async () => {
  const res: Promise<IgetCategoryListQuery> = ApiRequest.get(
    endpoints.tool.getCategoryList
  );

  return res;
};
export const getToolFeatureListQuery = async () => {
  const res: Promise<IgetToolFeatureListQuery> = ApiRequest.get(
    endpoints.tool.fetureList
  );

  return res;
};

export const getPriceListQuery = async () => {
  const res: Promise<IgetPriceListQuery> = ApiRequest.get(
    endpoints.tool.pricing
  );

  return res;
};

export const getToolDetails = async (data) => {
  const res: Promise<IgetToolDetails> = ApiRequest.post(
    endpoints.tool.details,
    data
  );

  return res;
};

export interface IgetToolListQueryPayload {
  categorySlug?: string;
}
export const getToolListQuery = async (data: IgetToolListQueryPayload) => {
  const res: Promise<IgetToolListQuery> = ApiRequest.post(
    endpoints.tool.getToolList,
    data
  );

  return res;
};

export const getNewsListQuery = async () => {
  const res: Promise<IgetNewsListQuery> = ApiRequest.post(
    endpoints.news.list,
    {}
  );

  return res;
};

export const getNewsCategoryListQuery = async () => {
  const res: Promise<IgetToolListQuery> = ApiRequest.post(
    endpoints.news.categorylist,
    {}
  );

  return res;
};
