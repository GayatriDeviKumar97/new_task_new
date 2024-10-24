import { Col, Row } from "react-bootstrap";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

function MainComponent({ children }: any) {
  return (
    <div>
      <>
        <Row className="layout_resp">
          <Col xs={12} className="header-wrapper">
            <Navbar />
          </Col>
        </Row>
        <Row className="layout_resp">
          <Col xs={{ span: 1 }} className="sidebar-wrapper">
            <Sidebar />
          </Col>
          <Col
            md={{ span: 10 }}
            xs={{ span: 11 }}
            className="page-content-wrapper"
          >
            <div>{children}</div>
          </Col>
        </Row>
      </>
    </div>
  );
}

export default MainComponent;
