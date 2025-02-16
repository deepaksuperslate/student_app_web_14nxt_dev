import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from '../services/userService';
import { handleAuthApiCall } from '../utils/apiUtils';

/*export const checkLoginStatus = createAsyncThunk('auth/checkLoginStatus', async () => {
    try {
      // Get token from AsyncStorage
      const user = JSON.parse(await AsyncStorage.getItem('user'));
      const userToken = await AsyncStorage.getItem('userToken');
      return user
    } catch (error) {
      console.error('Error checking login status:', error);
      return null;
    }
  });
*/
export const userDetails = createAsyncThunk('auth/userDetails', async (user, thunkAPI) => {
    return handleAuthApiCall(authService.userDetails, user, thunkAPI);
});

  
const userSlice = createSlice({
    name: 'user',
    initialState: {
      user:  null,
      isAuthenticated: false,
      loading: false,
      error: null,
      mobileNumber: null,
      userToken: null,
      todayLoginData: null,
      notiCount: 0,
      notifications: null
    },
    reducers: {
      logout: (state) => {
        state.user = null;
        state.isAuthenticated = false;
        // AsyncStorage.removeItem('user');
        // AsyncStorage.removeItem('userToken');
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(userDetails.pending, (state, action) => {
            state.loading = true
          })
        .addCase(userDetails.fulfilled, (state, action) => {
            console.log(action.payload)
            if(action.payload.success) {

                state.loading = false
                // state.userToken = action.payload.access_token
                state.user = action.payload.data
                state.isAuthenticated = true
                console.log("am inside ac")
                // await AsyncStorage.setItem('userToken', action.payload.access_token)
                AsyncStorage.setItem('user', JSON.stringify(action.payload.data))
            } else {
                state.loading = false
            }
        })
        .addCase(userDetails.rejected, (state, action) => {
        state.loading = false
        })
        
    },
  });
  
  export const { logout } = userSlice.actions;
  
  export default userSlice.reducer;