import { Col, Container, Row } from "react-bootstrap";
import connect from "../../assets/images/connect.png";
import setting from "../../assets/images/setting.png";
import down from "../../assets/images/downarr.png";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Container fluid>
      <Row className="d-flex">
        <Col xs={1} className="p-3 border-bottom logo_border">
          <Link to="/">
            <img src={connect} alt="connect" className="setting_image1" />
          </Link>
        </Col>
        <Col className="d-flex align-items-center">
          <div className="px-3">
            <Link to="/">
              <img src={setting} alt="setting" className="setting_image" />
            </Link>
          </div>
          <div className="d-flex">
            <div className="d-flex flex-column p-3">
              <p className="title">Project</p>
              <p className="d-flex align-items-center gap-3 justify-content-center title_innerhead">
                BigBank
                <img src={down} alt="" className="setting_image" />
              </p>
            </div>

            <div className="position-relative">
              <div className="d-inline-block"></div>
              <div className="position-absolute slash_class">/</div>
            </div>

            <div className="d-flex flex-column p-3">
              <p className="title">Environment</p>
              <p className="d-flex align-items-center gap-3 justify-content-center title_innerhead">
                blueprint
                <img src={down} alt="" className="setting_image" />
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Navbar;
