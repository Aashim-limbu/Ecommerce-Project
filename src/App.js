import Navigation from "./components/navigation/navigation.component";
import Authentication from "./routes/Authentication/Authenticaton.component";
import Home from "./routes/Home_Page/Home.component";
import Shop from "./routes/Shop Page/shop.component";
import "./index.scss";
import { Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
}
