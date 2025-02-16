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

  
const noteSlice = createSlice({
    name: 'note',
    initialState: {
      topic: null,
      pageNumber: null
    },
    reducers: {
      setNoteData: (state, action) => {
        console.log(action)
        state.topic = action.payload.topic;
        state.pageNumber = action.payload.pageNumber;
        // AsyncStorage.removeItem('user');
        // AsyncStorage.removeItem('userToken');
      }
    },
    extraReducers: (builder) => {
        
    },
  });
  
  export const { setNoteData } = noteSlice.actions;
  
  export default noteSlice.reducer;