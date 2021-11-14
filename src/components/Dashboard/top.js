import { useSelector } from "react-redux";

const Top = () => {
  const cred = useSelector((state) => state.output);

  return (
    <div className="">
      <div className=" top p-4">
        <div className="row justify-content-center text-center text-lg-end align-items-end">
          <div className="col fw-bold fs-4 ">
            <p>
              {cred && cred.login.data.data
                ? cred.login.data.data.user.name
                : ""}
              <i className="fas fa-user mx-3"></i>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
