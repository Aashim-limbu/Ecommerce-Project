import createAction from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPE } from "./category.types";
export function setCategoriesMap (categoriesMap){
return  createAction(CATEGORIES_ACTION_TYPE.SETCATEGORYMAP,categoriesMap)
}
