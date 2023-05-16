import { BaseApiResponse } from "./common.interface";

export interface IgetCategoryListQueryItem {
  _id: string;
  name: string;
  logo: string;
  slug: string;
  logo_inverse: string;
}

export interface IgetCategoryListQuery extends BaseApiResponse {
  data: IgetCategoryListQueryItem[];
}

export interface IToolFeatureType {
  _id: string;
  name: string;
  logo: string;
}

export interface IToolPricingype {
  _id: string;
  name: string;
  logo: string;
}

export interface IToolCategory {
  _id: string;
  name: string;
  slug: string;
  logo: string;
}

export interface IgetToolListQueryItem {
  _id: string;
  image: string;
  isFeatured: boolean;
  like_count: number;
  price: number;
  price_duration: string;
  star: number;
  name: string;
  short_description: string;
  isVerified: boolean;
  toolFeatureTypes: IToolFeatureType[];
  toolFeatureTypesCount: number;
  toolPricingypes: IToolPricingype[];
  toolCategories: IToolCategory[];
  website_link: string;
  recommended: boolean;
  favouriteCount: number;
  status: string;
  isDeleted: boolean;
  createdAt: string;
  slug: string;
}

export interface IgetToolListQuery extends BaseApiResponse {
  data: IgetToolListQueryItem[];
}

export interface INewsCategoryItem {
  _id: string;
  name: string;
}
export interface IgetNewsListQueryItem {
  _id: string;
  name: string;
  short_description: string;
  status: string;
  isDeleted: boolean;
  createdAt: string;
  newsCategories: INewsCategoryItem[];
  website_link: string;
  favouriteCount: number;
  creator: any;
  isVerified: boolean;
  recommended: boolean;
}

export interface IgetNewsListQuery extends BaseApiResponse {
  data: IgetNewsListQueryItem[];
}

export interface ISocialTypes {
  _id: string;
  name: string;
  logo: string;
}

export interface ISocialLink {
  type: string;
  link: string;
  _id: string;
  SocialTypes: ISocialTypes;
}

export interface IReviewer {
  _id: string;
  full_name: string;
  profile_pic: string;
}
export interface IReview {
  _id: string;
  reviewer: IReviewer;
  createdAt: string;
  likeCount: number;
  dislikeCount: number;
  star: number;
  message: string;
  email: string;
}

export interface IRelated {
  _id: string;
  image: string;
  isFeatured: boolean;
  like_count: number;
  price: number;
  price_duration: string;
  star: number;
  name: string;
  slug: string;
  short_description: string;
  isVerified: boolean;
  toolFeatureTypes: IToolFeatureType[];
  toolFeatureTypesCount: number;
  toolPricingypes: IToolPricingype[];
  toolCategories: IToolCategory[];
  website_link: string;
  recommended: boolean;
  favouriteCount: number;
  status: string;
  isDeleted: boolean;
  createdAt: string;
}

export interface ItoolDetails {
  _id: string;
  name: string;
  slug: string;
  toolCategories: IToolCategory[];
  website_link: string;
  favouriteCount: number;
  image: string;
  short_description: string;
  createdAt: string;
  toolFeatureTypes: IToolFeatureType[];
  toolPricingypes: IToolPricingype[];
  price: number;
  price_duration: string;
  isFeatured: boolean;
  embaded_code: string;
  description: string;
  isVerified: boolean;
  social_link: ISocialLink[];
  like_count: any;
  reviews: any[];
  star: number;
  review_count: number;
  toolFeatureTypesCount: number;
  recommended: boolean;
}
export interface ITopThreeCategory {
  _id: string;
  name: string;
  slug: string;
  type: string;
  toolCount: number;
  logo?: string;
}
export interface IgetToolDetails extends BaseApiResponse {
  data: ItoolDetails;
  related: IRelated[];
  topThreeCategory: ITopThreeCategory[];
}

export interface IgetToolFeatureListQuery extends BaseApiResponse {
  data: IToolCategory[];
}
export interface IgetPriceListQuery extends BaseApiResponse {
  data: IToolCategory[];
}
