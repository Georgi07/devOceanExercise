import { useNavigate } from "react-router-dom";
import logo from "../../assets/devOceanLogo.png";
import "./Header.scss";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <img src={logo} onClick={() => navigate("/")} />
    </div>
  );
};
export default Header;
