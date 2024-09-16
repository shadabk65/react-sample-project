import {axiosInstance} from './axiosInstance'

export const postRequest = async (endPoint, body, headers) => {
  return axiosInstance.post(`${endPoint}`, body, {
    headers: {...headers}
  }).then(function (response) {
    return response
  }).catch(function (error) {
    if (error.response.status === 500) {
      let res = error.response
      res.data = {
        errors: {
          server: ['Internal Server Error']
        }
      }
      return res
    } else if (error?.response?.status === 401) {
      localStorage.removeItem("accessToken");
      window.location.href = '/'
      return
    } else {
      return error.response
    }
  })
}

export const getRequest = async (endPoint, headers, params) => {
  return axiosInstance.get(`${endPoint}`, {
    headers: {...headers},
    params: params ?? {}
  }).then(function (response) {
    return response?.data
  }).catch(function (error) {
    if (error?.response?.status === 401) {
      localStorage.removeItem("accessToken");
      window.location.href = '/'
      return
    } else {
      return error?.response?.data
    }
  })
}

export const putRequest = async (endPoint, body, headers) => {
  return axiosInstance.put(`${endPoint}`, body, {
    headers: {...headers}
  }).then(function (response) {
    return response
  }).catch(function (error) {
    if (error.response.status === 500) {
      let res = error.response
      res.data = {
        errors: {
          server: ['Internal Server Error']
        }
      }
      return res
    } else if (error?.response?.status === 401) {
      localStorage.removeItem("accessToken");
      window.location.href = '/'
      return
    } else {
      return error.response
    }
  })
}

export const patchRequest = async (endPoint, body, headers) => {
  return axiosInstance.patch(`${endPoint}`, body, {
    headers: {...headers}
  }).then(function (response) {
    return response
  }).catch(function (error) {
    if (error.response.status === 500) {
      let res = error.response
      res.data = {
        errors: {
          server: ['Internal Server Error']
        }
      }

      return res
    } else if (error?.response?.status === 401) {
      localStorage.removeItem("accessToken");
      window.location.href = '/'
      return
    } else {
      return error.response
    }
  })
}

export const deleteRequest = async (endPoint, headers) => {
  return axiosInstance.delete(`${endPoint}`, {
    headers: { ...headers },
  }).then((response) => {
    return response;
  }).catch((error) => {
    if (error?.response?.status === 500) {
      let res = error.response;
      res.data = {
        errors: {
          server: ['Internal Server Error'],
        },
      };
      return res;
    } else if (error?.response?.status === 401) {
      localStorage.removeItem('accessToken');
      window.location.href = '/';
      return;
    } else {
      return error.response;
    }
  });
};

export const fetchWithToken = (path, dispatch, action) => {
  const token = localStorage.getItem("accessToken");

  getRequest(path, {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  }).then((res) => {
    dispatch(action(res));
  });
};

export const postWithToken = (path, data, dispatch, action) => {
  const token = localStorage.getItem("accessToken");

  postRequest(path, data, {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  }).then((res) => {
    dispatch(action(res));
  });
};

export const patchWithToken = (path, data, dispatch, action) => {
  const token = localStorage.getItem("accessToken");

  patchRequest(path, data, {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  }).then((res) => {
    dispatch(action(res));
  });
};

export const deleteWithToken = (path, dispatch, action) => {
  const token = localStorage.getItem("accessToken");
  deleteRequest(path, {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  }).then((res) => {
    dispatch(action(res));
  });
};
