import { getCategoryListQuery, getNewsListQuery } from "@/api/functions/cms.api";
import { IgetCategoryListQuery, IgetNewsListQuery } from "@/interface/apiresponse.interface";
import { useQuery } from "react-query";

export const useNewsList = (initialData: IgetNewsListQuery) => {
    const res = useQuery("getCategoryList", getNewsListQuery, {
      initialData,
    });
  
    return res;
  };