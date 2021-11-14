import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./contact.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = (props) => {
  const [shrink, setShrink] = useState({
    mail: "",
    name: "",
    Num: "",
    proj: "",
    brief: "",
  });
  const [loading, setLoading] = useState(false);

  const ShrinkMail = () => {
    setShrink({ mail: "shrink", name: "", Num: "", proj: "", brief: "" });
  };
  const ShrinkName = () => {
    setShrink({ mail: "", name: "shrink", Num: "", proj: "", brief: "" });
  };
  const ShrinkNum = () => {
    setShrink({ mail: "", name: "", Num: "shrink", proj: "", brief: "" });
  };
  const ShrinkProj = () => {
    setShrink({ mail: "", name: "", Num: "", proj: "shrink", brief: "" });
  };
  const ShrinkBrief = () => {
    setShrink({ mail: "", name: "", Num: "", proj: "", brief: "shrink" });
  };

  const Enlarge = () => {
    setShrink("");
  };

  const [brief, setBrief] = useState();
  const [name, setName] = useState();
  const [category, setCategory] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [briefTxt, setBriefTxt] = useState();
  const [cat, setCat] = useState();
  // const [file, setFile] = useState();
  // const [alert, setAlert] = useState();

  useEffect(() => {
    const timer = setTimeout(() => {
      Options();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  let token = "";
  const Tokena = useSelector((state) => state.output);
  if (Tokena) {
    token = Tokena.token;
  }

  const Options = () => {
    axios.get("https://qeola-api.herokuapp.com/api/v1/categories").then(
      (response) => {
        // console.log(response);
        const tration = response.data.data.map((item) => {
          return (
            item && (
              <option value={item.id} key={item.id}>
                {item.name}
              </option>
            )
          );
        });
        setCat(tration);
      },
      (error) => {
        // console.log(error);
      }
    );
  };
  // console.log({ brief, name, category, email, phone, briefTxt });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    let formData = new FormData();
    formData.append("briefFile", brief, brief.name);
    formData.append("name", name);
    formData.append("category", category);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("briefText", briefTxt);

    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formData,
      redirect: "follow",
    };

    async function postImage() {
      const res = await fetch(
        "https://qeola-api.herokuapp.com/api/v1/briefs",
        requestOptions
      );
      const result = await res.json();
      // console.log(result);
      if (result.status === "success") {
        setLoading(false);
        toast.success("You submitted a new brief", {
          position: "top-right",
          autoClose: 8000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else if (result.status !== "success") {
        setLoading(false);
        toast.error("Something went wrong please try again", {
          position: "top-right",
          autoClose: 8000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      return result;
    }

    await postImage();
  };

  return (
    <main>
      <section id="contact" className="py-3">
        <div className="container">
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />{" "}
          <div className="contact-header py-3 mx-auto">
            <h1 className="fs-1 fw-bold mt-5 text-center">{props.title}</h1>
          </div>
          <div className="contact-form mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="row pt-4 pb-2">
                <div
                  className={`col-12 col-md-6 my-3`}
                  onFocus={ShrinkMail}
                  onBlur={Enlarge}
                >
                  <label
                    htmlFor="email"
                    className={
                      shrink.mail === "shrink"
                        ? `fs-6 fw-bold ${shrink.mail}`
                        : `fs-6 fw-bold `
                    }
                  >
                    Email Address*
                  </label>
                  <br />
                  <input
                    type="email"
                    name="email"
                    placeholder="youremail@domain.com"
                    className="w-100 p-2 my-1 border-0 border-2 border-bottom"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div
                  className="col-12 col-md-6 my-3"
                  onFocus={ShrinkName}
                  onBlur={Enlarge}
                >
                  <label
                    htmlFor="name"
                    className={
                      shrink.name === "shrink"
                        ? `fs-6 fw-bold ${shrink.name}`
                        : `fs-6 fw-bold`
                    }
                  >
                    Name*
                  </label>
                  <br />
                  <input
                    type="name"
                    name="name"
                    placeholder="Chukuema Adekunle"
                    className="w-100 p-2 my-1 border-0 border-2 border-bottom"
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div
                  className="col-12 col-md-6 my-3"
                  onFocus={ShrinkNum}
                  onBlur={Enlarge}
                >
                  <label
                    htmlFor="number"
                    className={
                      shrink.Num === "shrink"
                        ? `fs-6 fw-bold ${shrink.Num}`
                        : `fs-6 fw-bold`
                    }
                  >
                    Phone Number*
                  </label>
                  <br />
                  <input
                    type="text"
                    name="text"
                    placeholder="0801 234 5678"
                    className="w-100 p-2 my-1 border-0 border-2 border-bottom"
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <div
                  className="col-12 col-md-6 my-3"
                  onFocus={ShrinkProj}
                  onBlur={Enlarge}
                >
                  <label
                    htmlFor="project-type"
                    className={
                      shrink.proj === "shrink"
                        ? `fs-6 fw-bold ${shrink.proj}`
                        : `fs-6 fw-bold`
                    }
                  >
                    Project Type*
                  </label>
                  <br />
                  <select
                    id="project-type"
                    name="project-type"
                    defaultValue="DEFAULT"
                    className="w-100 p-2 my-2 border-0 border-2 border-bottom"
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="DEFAULT" disabled>
                      Choose a category
                    </option>
                    {cat}
                  </select>
                </div>

                <div
                  className="col-12 col-md-12 my-3"
                  onFocus={ShrinkBrief}
                  onBlur={Enlarge}
                >
                  <label
                    htmlFor="project-brief"
                    className={
                      shrink.brief === "shrink"
                        ? `fs-6 fw-bold ${shrink.brief}`
                        : `fs-6 fw-bold `
                    }
                  >
                    Project Brief*
                  </label>
                  <br />
                  <div className="input-group my-1">
                    <input
                      type="text"
                      id="project-brief"
                      className="form-control rounded-0"
                      placeholder={`Tell us about your project, the more details the better or attach a file containing your brief`}
                      aria-label="Text input with attach button "
                      onChange={(e) => setBriefTxt(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      className="btn attach-button rounded-0  shadow-none"
                    >
                      <label>
                        <i className="material-icons attach-btn fs-2">
                          attach_file
                        </i>{" "}
                        <input
                          type="file"
                          name="myfile"
                          style={{ display: "none" }}
                          onChange={(e) => setBrief(e.target.files[0])}
                          // onChange={(e) => setFile(e.target.files[0].name)}
                        />
                      </label>
                    </button>
                  </div>
                </div>

                <div className="col-12 col-md-12 my-2">
                  <button
                    type="submit"
                    className="contact-submit shadow-none btn rounded-pill py-3 my-4 w-100"
                  >
                    {loading ? (
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                    ) : (
                      "Send us a brief"
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
