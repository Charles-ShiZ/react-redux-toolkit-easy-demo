import { combineReducers } from "redux";

import roleManagementReducer from "../pages/shein/authorityManagement/roleManagement/slice";

const reducer = combineReducers({
  roleManagement:roleManagementReducer
});
export type RootState = ReturnType<typeof reducer>
export default reducer;