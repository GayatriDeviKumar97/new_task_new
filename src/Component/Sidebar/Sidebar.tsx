import { Col, Container, Row } from "react-bootstrap";
import profile from "../../assets/images/profile.png";
import roundpro from "../../assets/images/round_profile.png";
import setting from "../../assets/images/setting.png";
import info from "../../assets/images/info.png";
import document from "../../assets/images/document.png";
import history from "../../assets/images/history.png";
import "./Sidebar.scss";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="p-3 side_main d-flex flex-column justify-content-between">
      <Row className="d-flex gap-5 sidebar">
        <Link to="/">
          <img src={document} className="setting_image1 cursor-pointer" />
        </Link>
        <Link to="/">
          <img src={profile} className="setting_image1" />
        </Link>
        <Link to="/">
          <img src={history} className="setting_image1" />
        </Link>
      </Row>

      <Row className="d-flex gap-5 sidebar">
        <Link to="/">
          <img src={setting} className="setting_image1" />
        </Link>
        <Link to="/">
          <img src={info} className="setting_image1" />
        </Link>
        <Link to="/">
          <img src={roundpro} className="setting_image1" />
        </Link>
      </Row>
    </div>
  );
};

export default Sidebar;
