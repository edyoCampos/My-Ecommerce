import { Routes, Route,} from "react-router-dom";
import { Home } from "./routes/home/home.component";
import Navigation from './routes/navigation/navigation.component.jsx'
import Authentication from "./routes/authentication/authentication.component";

const App = () => {

  const Shop = () => {
    return <h1>Eu sou uma página de compras</h1>;
  };
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home/>} />
        <Route path="shop" element={<Shop/>} />
        <Route path="auth" element={<Authentication/>} />
      </Route>
    </Routes>
  );
};

export default App;