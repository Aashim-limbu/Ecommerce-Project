import createAction from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPE } from "./category.types";
export function setCategoriesMap (categoriesArray){
return createAction(CATEGORIES_ACTION_TYPE.SETCATEGORIES, categoriesArray);
}
