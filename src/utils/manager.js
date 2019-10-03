import { post, get } from "./httpInterceptor";

//manager Dashboard API
export const getManagerDashboard = data => {
  return get(`/uprise/access/getManagerDashboard?managerId=${data}`).then(
    res => {
      console.log("RESPONSE :: Manager Dashboard ::: ", res);
      return res;
    }
  );
};

//get all teams under manager API
export const getManagerTeams = data => {
  return get(`/uprise/access/getManagerTeams?managerId=${data}`).then(res => {
    console.log("RESPONSE :: Manager Teams ::: ", res);
    return res;
  });
};

//get all In probation employee API
export const getAllInProbationEmployees = data => {
  return get(
    `/uprise/access/getAllInProbationEmployees?managerId=${data}`
  ).then(res => {
    console.log("RESPONSE :: Manager Probation Employees ::: ", res);
    return res;
  });
};

//get all employee under manger performance
export const getAllPerfApprUnderManager = data => {
  return get(`/uprise/kra/getAllPerfApprUnderManager?managerId=${data}`).then(
    res => {
      console.log("RESPONSE :: Performance Of Employee ::: ", res);
      return res;
    }
  );
};
