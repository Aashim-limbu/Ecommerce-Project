import createAction from "../../utils/reducer/reducer.utils";
import { USER_ACTION_TYPE } from "./user.types";
export default function setUser(user) {
	return (createAction(USER_ACTION_TYPE.SET_CURRENT_USER, user));
}
