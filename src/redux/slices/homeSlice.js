import { createSlice } from "@reduxjs/toolkit";
import { fetchWithToken, postWithToken, patchWithToken } from "../../config/apiRequests";
import { toast } from "react-toastify";

export const homeSlice = createSlice({
  name: "home",
  initialState: {
    teamName: '',
    isLoading: false,
    success: false,
    error: null,
    message: "",
    endPoint: "",
  },

  reducers: {
    updateServices: (state, action) => {
      if (action.payload) {
        state.success = true;
        state.endPoint = "api/v1/personal/services";
        state.message = "Services fetched successfully";
        state.servicesData = action.payload; 
        state.isLoading = false;
      } else {
        state.success = false;
        state.endPoint = "api/v1/personal/services";
        state.isLoading = false;
      }
    },
    // createRequestComment: (state, action) => {
    //   const { status, id, ...payload } = action.payload;
    //   state.endPoint = "api/v1/personal/requests/{id}/comment";
    //   state.isLoading = false;

    //   switch (status) {
    //     case 201:
    //       state.success = true;
    //       state.message = "Request comment created successfully";
    //       toast.success(state.message);
    //       state.requestCommentData = {
    //         ...state.requestCommentData,
    //         [id]: payload,
    //       };
    //       break;
    //     case 400:
    //       state.success = false;
    //       state.message = "Bad Request: Invalid data provided";
    //       toast.error(state.message);
    //       break;
    //     case 401:
    //       state.success = false;
    //       state.message = "Unauthorized: Please authenticate";
    //       toast.error(state.message);
    //       break;
    //     case 403:
    //       state.success = false;
    //       state.message =
    //         "Forbidden: You do not have permission to perform this action";
    //       toast.error(state.message);
    //       break;
    //     case 500:
    //       state.success = false;
    //       state.message = "Internal Server Error: Something went wrong";
    //       toast.error(state.message);
    //       break;
    //     default:
    //       state.success = false;
    //       state.message = "Request comment creation failed";
    //       toast.error(state.message);
    //   }
    // },

    // updaterequestData: (state, action) => {
    //   const { status, id, ...payload } = action.payload;

    //   state.endPoint = "api/v1/personal/requests/:id";
    //   state.isLoading = false;

    //   switch (status) {
    //     case 201:
    //       state.success = true;
    //       state.message = "Request updated successfully";
    //       toast.success(state.message);
    //       state.requestDetailsData = {
    //         ...state.requestDetailsData,
    //         [id]: payload,
    //       };
    //       break;
    //     case 400:
    //       state.success = false;
    //       state.message = "Bad Request: Invalid data provided";
    //       toast.error(state.message);
    //       break;
    //     case 401:
    //       state.success = false;
    //       state.message = "Unauthorized: Please authenticate";
    //       toast.error(state.message);
    //       break;
    //     case 403:
    //       state.success = false;
    //       state.message =
    //         "Forbidden: You do not have permission to perform this action";
    //       toast.error(state.message);
    //       break;
    //     case 500:
    //       state.success = false;
    //       state.message = "Internal Server Error: Something went wrong";
    //       toast.error(state.message);
    //       break;
    //     default:
    //       state.success = false;
    //       state.message = "Update Request failed";
    //       toast.error(state.message);
    //   }
    // },

  },
});

export const {
  updateServices,
} = homeSlice.actions;

export const selectHome = (state) => state.home;

// export const getEmployeesRequest = (userId) => (dispatch) => {
//   fetchWithToken(`/api/v1/personal/users/${userId}/employees`, dispatch, updateEmployees);
// };


// export const createRequestComments = (id, requestData) => (dispatch) => {
//   postWithToken(`api/v1/personal/requests/${id}/comment`, requestData, dispatch, createRequestComment);
// };





export default homeSlice.reducer;
