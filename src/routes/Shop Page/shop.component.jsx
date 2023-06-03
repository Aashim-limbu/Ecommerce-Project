import {Routes,Route} from 'react-router-dom'
import "./shop.style.scss";
import CategoriesPreview from '../categories-preview/categories-preview.component';
export default function Shop() {
  return (
   <Routes>
    <Route index element={<CategoriesPreview/>} />
   </Routes>
  );
}
