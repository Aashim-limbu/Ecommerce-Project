import { createContext, useState, useEffect } from "react";
import {getCategoriesAndDocuments} from "../utils/firebase/firebase.utils";

const CategoriesContext = createContext();

export function CategoriesProvider({ children }) {
  const [categoriesMap, setcategoriesMap] = useState([]);
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setcategoriesMap(categoryMap);
    };
    getCategoriesMap(); 

   },[]);
  const valueToShare = {
    categoriesMap,
    setcategoriesMap,
  };
  return (
    <CategoriesContext.Provider value={valueToShare}>
      {children}
    </CategoriesContext.Provider>
  );
}
export default CategoriesContext;
