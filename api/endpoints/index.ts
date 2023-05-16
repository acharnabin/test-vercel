export const baseUrl = process.env.NEXT_APP_BASE_URL;
export const baseUrlApi = `${process.env.NEXT_APP_BASE_URL}/api/`;
export const baseUrlMedia = process.env.NEXT_APP_BASE_URL;

// api doc => https://militarymoves-admin.dedicateddevelopers.us/apidoc

export const mediaUrl=(url:string)=>{
  return `${baseUrlMedia}/uploads/${url}`
}

export const endpoints = {
  auth: {
    signup: "user/signup",
    login:"user/login",
    profileUpdate: "user/profile/update",
    verifyOtp:'user/verify-otp'
  },
  cms: {
    about: "aboutpolicy/details",
  },
  tool:{
    getCategoryList:'tool/category/list',
    getToolList:'tool/list',
    details:'tool/details',
    fetureList:'tool/feature/list',
    pricing:'tool/pricing/list'
  },
  news:{
    categorylist:'news/category/list',
    list:'news/list'
  }
};

export const sucessNotificationEndPoints = [];
