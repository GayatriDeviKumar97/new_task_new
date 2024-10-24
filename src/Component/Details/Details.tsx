import { Col, Container, Row } from "react-bootstrap";
import document from "../../assets/images/document.png";
import right from "../../assets/images/rightarr.png";
import down from "../../assets/images/downarr.png";
import checkmark from "../../assets/images/checkmark.png";
import settings from "../../assets/images/setting.png";
import woman from "../../assets/images/woman.png";
import men from "../../assets/images/Men.png";
import branch from "../../assets/images/branch.png";
import "./Details.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

const Details = () => {
  const List_data = [
    {
      empid: 1,
      check: checkmark,
      file: document,
      empname: "Gayatri Devi",
      update: "2 hours ago",
      arrow: right,
      darrow: down,
      Version: "5a44cdde",
      vicon: branch,
      department: "Front-End",
      dateofjoining: "12/01/2022",
      avaibaleLeave: "15",
      imgprofile: woman,
    },
    {
      empid: 2,
      check: checkmark,
      file: document,
      empname: "Narmadha",
      update: "2 hours ago",
      arrow: right,
      darrow: down,
      Version: "5a44cdde",
      vicon: branch,
      department: "Front-End",
      dateofjoining: "02/02/2020",
      avaibaleLeave: "18",
      imgprofile: woman,
    },
    {
      empid: 3,
      check: checkmark,
      file: document,
      empname: "Sanjana",
      update: "2 hours ago",
      arrow: right,
      darrow: down,
      Version: "5a44cdde",
      vicon: branch,
      department: "Project Manager",
      dateofjoining: "12/01/2024",
      avaibaleLeave: "20",
      imgprofile: woman,
    },
    {
      empid: 4,
      check: checkmark,
      file: document,
      empname: "Thenmozhi",
      update: "2 hours ago",
      arrow: right,
      darrow: down,
      Version: "5a44cdde",
      vicon: branch,
      department: "Front-End",
      dateofjoining: "08/05/2021",
      avaibaleLeave: "15",
      imgprofile: woman,
    },
    {
      empid: 5,
      check: checkmark,
      file: document,
      empname: "Harshiv",
      update: "2 hours ago",
      arrow: right,
      darrow: down,
      Version: "5a44cdde",
      vicon: branch,
      department: "Back-End",
      dateofjoining: "07/05/2021",
      avaibaleLeave: "18",
      imgprofile: men,
    },
    {
      empid: 6,
      check: checkmark,
      file: document,
      empname: "Nandhini",
      update: "2 hours ago",
      arrow: right,
      darrow: down,
      Version: "5a44cdde",
      vicon: branch,
      department: "Devops",
      dateofjoining: "07/05/2021",
      avaibaleLeave: "18",
      imgprofile: woman,
    },
    {
      empid: 7,
      check: checkmark,
      file: document,
      empname: "Tamizh",
      update: "2 hours ago",
      arrow: right,
      darrow: down,
      Version: "5a44cdde",
      vicon: branch,
      department: "Senior Tester",
      dateofjoining: "07/05/2021",
      avaibaleLeave: "18",
      imgprofile: men,
    },
    {
      empid: 8,
      check: checkmark,
      file: document,
      empname: "Senthil",
      update: "2 hours ago",
      arrow: right,
      darrow: down,
      Version: "5a44cdde",
      vicon: branch,
      department: "Devops",
      dateofjoining: "07/05/2021",
      avaibaleLeave: "18",
      imgprofile: men,
    },
    {
      empid: 9,
      check: checkmark,
      file: document,
      empname: "Ashwini",
      update: "2 hours ago",
      arrow: right,
      darrow: down,
      Version: "5a44cdde",
      vicon: branch,
      department: "Back-End",
      dateofjoining: "07/05/2021",
      avaibaleLeave: "18",
      imgprofile: woman,
    },
    {
      empid: 10,
      check: checkmark,
      file: document,
      empname: "sandhosh",
      update: "2 hours ago",
      arrow: right,
      darrow: down,
      Version: "5a44cdde",
      vicon: branch,
      department: "Front-End",
      dateofjoining: "07/05/2021",
      avaibaleLeave: "18",
      imgprofile: men,
    },
    {
      empid: 11,
      check: checkmark,
      file: document,
      empname: "sam",
      update: "2 hours ago",
      arrow: right,
      darrow: down,
      Version: "5a44cdde",
      vicon: branch,
      department: "Office Admin",
      dateofjoining: "07/05/2021",
      avaibaleLeave: "18",
      imgprofile: men,
    },
    {
      empid: 12,
      check: checkmark,
      file: document,
      empname: "Bheem",
      update: "2 hours ago",
      arrow: right,
      darrow: down,
      Version: "5a44cdde",
      vicon: branch,
      department: "Back-End",
      dateofjoining: "07/05/2021",
      avaibaleLeave: "18",
      imgprofile: men,
    },
  ];

  const [activeTab, setactiveTab] = useState("Services");

  const handleClick = (Services: any) => {
    setactiveTab(Services);
  };

  return (
    <Container fluid>
      <div className="main-container p-2">
        <div className="inner_container">
          <div className="d-flex p-3">
            <div className="d-flex align-items-center">
              <img src={document} alt="document" />
            </div>
            <div className="d-flex flex-column ">
              <div>
                <p className="blue_title">blueprint</p>
              </div>
              <div className="d-flex align-items-center justify-content-evenly border rounded">
                <button className="btn_style d-flex gap-2 align-items-center p-2 logo_border">
                  <img src={right} className="icon" alt="pause" />
                  <img src={down} className="icon" alt="down" />
                </button>

                <button className="btn_style d-flex gap-2 align-items-center p-2">
                  <img src={document} className="icon" alt="pause" />
                  <img src={down} className="icon" alt="down" />
                </button>
              </div>
            </div>
            <div>
              <div className="d-inline-block"></div>
              <div className="btn_dev d-flex gap-2">
                <button className="btn_style border rounder p-2 pt-0 pb-0 title dev_title rounded">
                  Dev
                </button>
                <button className="btn_style d-flex align-items-center gap-2 border rounded p-2 pb-0 pt-0 title">
                  <img src={document} className="icon1" alt="document" />
                  Demo Cluster
                </button>
              </div>
            </div>
          </div>
          <div className="mt-2">
            <div className="border-bottom"></div>
          </div>
          <div className="d-flex justify-content-between p-2">
            <div className="d-flex">
              <div
                className="d-flex align-items-center gap-2 flex-row m-2 handle"
                onClick={() => handleClick("Services")}
              >
                <img src={checkmark} alt="services" className="setting_image" />
                Services
              </div>
              <div
                className="d-flex align-items-center gap-2 m-2 handle"
                onClick={() => handleClick("Developments")}
              >
                <img
                  src={checkmark}
                  alt="development"
                  className="setting_image"
                />
                Developments
              </div>
              <div
                className="d-flex align-items-center gap-2 m-2 handle"
                onClick={() => handleClick("Settings")}
              >
                <img src={settings} alt="services" className="setting_image" />
                Settings
              </div>
            </div>
            <div className="d-flex">
              <button className="d-flex align-items-center gap-2 justify-content-center p-2 pt-0 pb-0 bg-primary title">
                NEW SERVICES
                <img src={settings} alt="setting" className="setting_image" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="main-container p-2 pt-0 pb-0 rounded">
        <div className="inner_container">
          <>
            {activeTab === "Services" && (
              <>
                <Col className="p-3 d-flex justify-content-between align-items-center">
                  {/* Header Row */}

                  <Col className="d-flex align-items-center">
                    <span className="title_innerhead">Employee Name</span>
                    <img src={down} alt="comp" className="setting_image ml-2" />
                  </Col>

                  <Col className="title_innerhead">Update ↓</Col>
                  <Col className="title_innerhead">Version</Col>
                  <Col className="title_innerhead">Department</Col>
                </Col>

                {List_data.map((item, index) => (
                  <Row
                    key={index}
                    className="p-2 d-flex justify-content-between align-items-center border-bottom"
                  >
                    {/* Employee Name + Icons */}
                    <Col xs={3} className="d-flex align-items-center gap-2">
                      <img
                        src={item.check}
                        alt="check"
                        className="setting_image mr-2"
                      />
                      <img
                        src={item.file}
                        alt="file"
                        className="setting_image mr-2"
                      />

                      <Link
                        to={`/employee/${item.empid}`}
                        state={item}
                        className="title add-on"
                      >
                        {item.empname}
                      </Link>
                    </Col>

                    {/* Update + Action Buttons */}
                    <Col xs={3} className="d-flex gap-2 align-items-end">
                      <p className="title">{item.update}</p>

                      <div className="d-flex align-items-center justify-content-evenly border rounded">
                        <button className="btn_style d-flex gap-2 align-items-center p-2 logo_border">
                          <img src={item.arrow} className="icon" alt="pause" />
                          <img src={item.darrow} className="icon" alt="down" />
                        </button>

                        <div className="logo_border"></div>
                        <button className="btn_style d-flex gap-2 align-items-center p-2">
                          <img src={item.file} className="icon" alt="pause" />
                          <img src={item.darrow} className="icon" alt="down" />
                        </button>
                      </div>
                    </Col>

                    {/* Version */}
                    <Col xs={3} className="d-flex">
                      <div className="d-flex align-items-center justify-content-evenly border rounded">
                        <button className="btn_style d-flex gap-2 align-items-center p-2 logo_border">
                          <img src={item.vicon} className="icon" alt="pause" />
                          <p className="title">{item.Version}</p>
                        </button>
                      </div>
                    </Col>

                    {/* Department */}
                    <Col xs={3} className="d-flex">
                      <p className="title">{item.department}</p>
                    </Col>
                  </Row>
                ))}
              </>
            )}
            {activeTab === "Developments" && (
              <>
                <div className="p-3 d-flex justify-content-between align-items-center">
                  This is developemnt page
                </div>
              </>
            )}
            {activeTab === "Settings" && (
              <>
                <div className="p-3 d-flex justify-content-between align-items-center">
                  This is Settings page
                </div>
              </>
            )}
          </>
        </div>
      </div>
    </Container>
  );
};

export default Details;
