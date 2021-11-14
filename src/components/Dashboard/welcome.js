import { useSelector } from "react-redux";

const Welcome = (props) => {
  const cred = useSelector((state) => state.output);

  return (
    <main className="P-5">
      <div className="p-5">
        <div className="row justify-content-center text-center align-items-center">
          <div>
            <img src="images/admin.png" alt="" className="img-fluid w-50" />
          </div>
          <div className="col fs-1 fw-bold">
            WELCOME{" "}
            {cred && cred.login.data.data
              ? cred.login.data.data.user.name.toUpperCase()
              : ""}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Welcome;
