import "./admin.css";
import Aside from "./aside";
import Main from "./main";

const Admin = ({ setToken }) => {
  return (
    <div className="row m-0 addmin">
      <div className=" lefty  col-12 col-lg-2 m-0 p-0 ">
        <Aside setToken={setToken} />
      </div>
      {/* <div className=" lefty col-12 col-lg-1 m-0 p-0 ">
        <Aside setToken={setToken} />
      </div> */}
      <div className="col-12 col-lg-10 m-0 p-0">
        <Main setToken={setToken} />
      </div>
    </div>
  );
};

export default Admin;
