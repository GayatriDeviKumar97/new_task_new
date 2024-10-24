import { useParams, useLocation, Link } from "react-router-dom";
import "./Employee.scss";
import back from "../../assets/images/back.png";

const EmployeeDetail = () => {
  const { empid } = useParams();
  console.log(empid);
  const location = useLocation(); // Access the passed state
  const employee = location.state;
  console.log(employee.imgprofile);

  if (!employee) {
    return <p>Employee not found</p>;
  }

  return (
    <>
      <div className="employee_container">
        <Link to="/" className="m-2 pl-2">
          <img src={back} alt="back" className="back_btn" />
        </Link>
        <>
          <div className="d-flex flex-column text-center p-2 ">
            <h1 className="pb-2">Employee Details</h1>

            <table>
              <tr>
                <th>Profile</th>
                <th>Employee ID </th>
                <th>Name </th>
                <th>Department </th>
                <th>Last Updated</th>
                <th>Date of Joining</th>
                <th>Avaiable Leave</th>
              </tr>
              <tr>
                <td>
                  <img
                    className="setting_image1"
                    src={employee.imgprofile}
                    alt="images"
                  />
                </td>
                <td>{employee.empid}</td>
                <td>{employee.empname}</td>
                <td>{employee.department}</td>
                <td>{employee.update}</td>
                <td>{employee.dateofjoining}</td>
                <td>{employee.avaibaleLeave}</td>
              </tr>
            </table>
          </div>
        </>
      </div>
    </>
  );
};

export default EmployeeDetail;
