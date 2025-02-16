import apiRequest from '../utils/api';
import { USER_DETAILS } from '../utils/apiRoutes'

const userDetails = async (userData) => {
    return await apiRequest(USER_DETAILS, 'POST', userData);
};

const authService = {
  userDetails
};

export default authService;
