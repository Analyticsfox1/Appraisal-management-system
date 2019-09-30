import { post, get } from "./httpInterceptor";

//get User list API
export const getUserList = () => {
  return get(`/uprise/authentication/getAllUsers`).then(res => {
    console.log("RESPONSE :: UserList ::: ", res);
    return res;
  });
};

// get user details by unique id
export const getUserById = data => {
  return get(`/uprise/authentication/getUserByUniqueId?uniqueId=${data}`).then(
    res => {
      console.log("RESPONSE :: User Details ::: ", res);
      return res;
    }
  );
};

// add User API
export const addUser = data => {
  return post(`/uprise/authentication/addUser`, data).then(res => {
    console.log("RESPONSE :: Add User ::: ", res);
    return res;
  });
};

//get Role list API
export const getRoleList = () => {
  return get(`/uprise/access/getAllRoles`).then(res => {
    console.log("RESPONSE :: RoleList ::: ", res);
    return res;
  });
};

// get role details by name
export const getRoleByName = data => {
  return get(`/uprise/access/getRoleByName?roleName=${data}`).then(res => {
    console.log("RESPONSE :: Role Details ::: ", res);
    return res;
  });
};

// add Role API
export const addRole = data => {
  return post(`/uprise/access/addRole`, data).then(res => {
    console.log("RESPONSE :: Add Role ::: ", res);
    return res;
  });
};

// delete Role by ID API
export const deleteRole = data => {
  return post(`/uprise/access/deleteRoleById?roleId=${data}`).then(res => {
    console.log("RESPONSE :: Delete Role ::: ", res);
    return res;
  });
};

// get all Team list API
export const getTeamList = () => {
  return get(`/uprise/kra/getAllTeams`).then(res => {
    console.log("RESPONSE :: Team List ::: ", res);
    return res;
  });
};

// add Team API
export const addTeam = data => {
  return post(`/uprise/kra/addTeam`, data).then(res => {
    console.log("RESPONSE :: Add Team ::: ", res);
    return res;
  });
};

// get all Manager list API
export const getManagerList = () => {
  return get(`/uprise/kra/getAllManagers`).then(res => {
    console.log("RESPONSE :: Manager List ::: ", res);
    return res;
  });
};

// get all Employee list API
export const getEmployeeList = () => {
  return get(`/uprise/kra/getAllEmployees`).then(res => {
    console.log("RESPONSE :: Employee List ::: ", res);
    return res;
  });
};

//admin Dashboard API
export const getAdminDashboard = () => {
  return get(`/uprise/access/getHrDashboard`).then(res => {
    console.log("RESPONSE :: Admin Dashboard ::: ", res);
    return res;
  });
};

// get all members assigned list API
export const getMemberAssignedList = () => {
  return get(`/uprise/access/getAssignedMembers`).then(res => {
    console.log("RESPONSE :: Member Assigned List ::: ", res);
    return res;
  });
};

// get all members not assigned list API
export const getMemberNotAssignedList = () => {
  return get(`/uprise/access/getNotAssignedMembers`).then(res => {
    console.log("RESPONSE :: Member Not Assigned List ::: ", res);
    return res;
  });
};

// get all new registered list API
export const getNewRegisteredList = () => {
  return get(`/uprise/authentication/getAllUserTests`).then(res => {
    console.log("RESPONSE :: New Registerd user List ::: ", res);
    return res;
  });
};

// get all page list API
export const getAllPageList = () => {
  return get(`/uprise/access/getAllPages`).then(res => {
    console.log("RESPONSE :: Page List ::: ", res);
    return res;
  });
};

// add Access API
export const addAccess = data => {
  return post(`/uprise/access/addAccess`, data).then(res => {
    console.log("RESPONSE :: Add Access ::: ", res);
    return res;
  });
};

// get access by ID API
export const getAccessById = data => {
  return get(`/uprise/access/getAccessByRoleId?roleId=${data}`).then(res => {
    console.log("RESPONSE :: Access details ::: ", res);
    return res;
  });
};

// get new register details by id
export const getUserTestById = data => {
  return get(`/uprise/authentication/getUserTestById?userTestId=${data}`).then(
    res => {
      console.log("RESPONSE :: New Register User Details ::: ", res);
      return res;
    }
  );
};

// verify new register user API
export const transferToUser = data => {
  return post(`/uprise/authentication/transferToUser`, data).then(res => {
    console.log("RESPONSE :: Verify Users ::: ", res);
    return res;
  });
};

// add push notification
export const pushNotifcation = data => {
  return post(`/uprise/access/addPushNotification`, data).then(res => {
    console.log("RESPONSE :: Push Notification ::: ", res);
    return res;
  });
};

// get Push Notification
export const getNotifcation = data => {
  return get(`/uprise/access/getPushNotification`, data).then(res => {
    console.log("RESPONSE :: Push Notification ::: ", res);
    return res;
  });
};
