import Navigation from "./components/navigation/navigation.component";
import Authentication from "./routes/Authentication/Authenticaton.component";
import Home from "./routes/Home_Page/Home.component";
import "./index.scss";
import { Routes, Route } from "react-router-dom";
export default function App() {
  function Store() {
    return <h1>Store Page</h1>;
  }
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="store" element={<Store />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
}
