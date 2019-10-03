import { post, get } from "./httpInterceptor";

//user login API
export const login = data => {
  return post(
    `/uprise/authentication/authenticate?username=${data.email}&password=${data.password}`
  ).then(res => {
    console.log("RESPONSE :: login ::: ", res);
    return res;
  });
};

//user register API
export const register = data => {
  return post(`/uprise/authentication/registration`, data).then(res => {
    console.log("RESPONSE :: Register ::: ", res);
    return res;
  });
};

export const logout = () => {
  return get(`/uprise/authentication/logout`).then(res => {
    console.log("RESPONSE :: logout ::: ", res);
    return res;
  });
};

//user Forgot Password API
export const forgotPassword = data => {
  return post(
    `/uprise/authentication/forgotPassword?username=${data.email}`
  ).then(res => {
    console.log("RESPONSE :: Forgot Password ::: ", res);
    return res;
  });
};

//user Update Password API
export const updatePassword = data => {
  return post(
    `/uprise/authentication/updatePassword?newPassword=${data.newPassword}&oldPassword=${data.oldPassword}&username=${data.username}`
  ).then(res => {
    console.log("RESPONSE :: Update Password ::: ", res);
    return res;
  });
};

//user Dashboard API
export const getUserDashboard = () => {
  return get(`/uprise/authentication/getUserDashboard`).then(res => {
    console.log("RESPONSE :: User Dashboard ::: ", res);
    return res;
  });
};

//Add probation form API
export const addProbationForm = data => {
  return post(`/uprise/kra/addProbationForm`, data).then(res => {
    console.log("RESPONSE :: Add Probation form ::: ", res);
    return res;
  });
};

//get probation form from user ID API
export const getProbationFormByUniqueId = data => {
  return get(
    `/uprise/kra/getProbationFormByUniqueId?userUniqueId=${data}`
  ).then(res => {
    console.log("RESPONSE ::get Probation form ::: ", res);
    return res;
  });
};

// Add Performance from API
export const addPerformance = data => {
  return post(`/uprise/kra/addPerformanceAppraisal`, data).then(res => {
    console.log("RESPONSE :: Add Performance ::: ", res);
    return res;
  });
};

// get Performance from API
export const getPerformance = data => {
  return get(
    `/uprise/kra/getPerformanceAppraisalByUniqueId?userUniqueId=${data}`
  ).then(res => {
    console.log("RESPONSE ::get Performance ::: ", res);
    return res;
  });
};
