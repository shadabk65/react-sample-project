import {createSlice} from '@reduxjs/toolkit'
import { getRequest, postRequest, putRequest } from '../../config/apiRequests';
import { toast } from "react-toastify";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        isLoading: false,
        success: false,
        message: "",
        endPoint: "",
        profile: {},
    },

    reducers: {
        loginUpdate: (state, action) => {
        	state.profile =  action.payload;
            // if(action.payload.status === 200) {
            //     state.success = true
            //     state.endPoint = 'auth/users/login'
            //     state.message = 'Logged In Successfully'
            //     state.profile =  action.payload;
            //     state.isLoading = false
            // }else{
            //     state.success = false
            //     state.endPoint = 'auth/users/login'
            //     state.message = action.payload?.data?.errors[keys[0]][0]
            //     state.isLoading = false
            // }
        },

        setLoading: (state, action) => {
            state.isLoading = action.payload
        }
    }
});

export const {
    loginUpdate,
} = userSlice.actions;

export const selectUser = (state) => state.user;

export const logInRequest = (body) => (dispatch) => {
    // postRequest('auth/users/login', body, {
    //     "Content-Type": "application/json",
    // }).then((res) => {
    //     dispatch(loginUpdate(res))
    // });
    dispatch(loginUpdate({ name: "shadab khan" }))
    toast.success("User saved successfully");
}


// export function getSingleSbCollectible() {
  
//   return async () => {
//     try {
//       const {data} = await axios.get(`${slug}/get_nft_detail?asset_id=${id}`,
//         {
//           headers: {
//             ...authHeader(token, slug),
//             'Content-Type': 'application/json',
//             'DOMAIN': DomainName
//           }
//         }
//       );
//       dispatch(collectibles.actions.fetchSingleCollectibles(data));
//     } catch (error) {
//       dispatch(collectibles.actions.hasError(error));
//     }
//   };
// }


export default userSlice.reducer;