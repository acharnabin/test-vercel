import {
  getCategoryListQuery,
  getPriceListQuery,
  getToolDetails,
  getToolFeatureListQuery,
  getToolListQuery,
  IgetToolListQueryPayload,
} from "@/api/functions/cms.api";
import {
  IgetCategoryListQuery,
  IgetToolListQuery,
  ItoolDetails,
} from "@/interface/apiresponse.interface";
import React from "react";
import { useQuery } from "react-query";

const useTools = (initialData: IgetCategoryListQuery) => {
  const res = useQuery("getCategoryList", getCategoryListQuery, {
    initialData,
  });

  return res;
};

export const useToolsWithFilters = (
  initialData: IgetToolListQuery,
  payload: IgetToolListQueryPayload
) => {
  const res = useQuery(["ToolsWithFilters", payload?.categorySlug], {
    queryFn: () => getToolListQuery(payload),
    initialData,
    refetchOnMount: false,
  });

  return res;
};

export const useToolFeatureList = () => {
  const res = useQuery("useToolFeatureList", getToolFeatureListQuery, {
    refetchOnMount: false,
  });

  return res;
};

export const usegetPriceListQuery = () => {
  const res = useQuery("usegetPriceListQuery", getPriceListQuery, {
    refetchOnMount: false,
  });

  return res;
};

export const useToolsDetails = (initialData: ItoolDetails, payload) => {
  const res = useQuery({
    queryKey: "toolDetails",
    queryFn: () => getToolDetails(payload),
  });

  return res;
};

export default useTools;
