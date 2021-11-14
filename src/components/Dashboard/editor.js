import { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
// import htmlToDraft from "html-to-draftjs";
import { EditorState, convertToRaw } from "draft-js";
import axios from "axios";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import "./contact.css";

const Editorial = (props) => {
  const [shrink, setShrink] = useState({
    mail: "",
    name: "",
    Num: "",
    proj: "",
    brief: "",
  });
  const [author, setAuthor] = useState();
  const [title, setTitle] = useState();
  const [category, setCategory] = useState();
  const [image, setImage] = useState();
  const [cat, setCat] = useState();
  // const [catId, setCatId] = useState();
  // const [editorContent, setEditorContent] = useState();
  // const [Alert, setAlert] = useState();
  const [loading, setLoading] = useState(false);

  const ShrinkName = () => {
    setShrink({ mail: "", name: "shrink", Num: "", proj: "", brief: "" });
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

  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };
  // const editorCont = editorState.getCurrentContent().getPlainText();
  const content = draftToHtml(convertToRaw(editorState.getCurrentContent()));
  useEffect(() => {
    const timer = setTimeout(() => {
      Options();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

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
  // console.log(author, title, category, image, content);
  let token = "";
  const Tokena = useSelector((state) => state.output);
  if (Tokena) {
    token = Tokena.token;
  }
  // function uploadImageCallBack(file) {
  //   return new Promise((resolve, reject) => {
  //     const xhr = new XMLHttpRequest();
  //     xhr.open("POST", "https://api.imgur.com/3/image");
  //     xhr.setRequestHeader("Authorization", "Client-ID ##clientid##");
  //     const data = new FormData();
  //     data.append("image", file);
  //     xhr.send(data);
  //     xhr.addEventListener("load", () => {
  //       const response = JSON.parse(xhr.responseText);
  //       console.log(response);
  //       resolve(response);
  //     });
  //     xhr.addEventListener("error", () => {
  //       const error = JSON.parse(xhr.responseText);
  //       console.log(error);
  //       reject(error);
  //     });
  //   });
  // }
  const uploadImageCallBack = (file) => {
    return new Promise((resolve, reject) => {
      if (file) {
        let reader = new FileReader();
        reader.onload = (e) => {
          resolve({ data: { link: e.target.result } });
        };
        reader.readAsDataURL(file);
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("image", image, image.file);
    formData.append("title", title);
    formData.append("content", content);
    formData.append("category", category);
    formData.append("author", author);

    // console.log(JSON.stringify(formData));

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
        "https://qeola-api.herokuapp.com/api/v1/posts",
        requestOptions
      );
      const result = await res.json();
      // console.log(result);
      if (result.status === "success") {
        setLoading(false);
        toast.success("New blog post added successfully", {
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
    <main className="P-5">
      <section id="contact">
        <div className="contact-header"></div>
        <div className="contact-body"></div>
      </section>
      <section id="contact">
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
        <div className="p-5 py-3">
          <div className="row justify-content-center mb-4">
            <div className="contact-header py-3">
              <h1 className="text-center mt-5 fw-bold">{props.title}</h1>
            </div>

            <div className="contact-form mx-auto">
              <form onSubmit={handleSubmit}>
                <div className="row pt-4 pb-2">
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
                      Author*
                    </label>
                    <br />
                    <input
                      type="name"
                      name="name"
                      placeholder="Name of Author"
                      className="w-100 p-2 my-1 border-0 border-2 border-bottom"
                      onChange={(e) => setAuthor(e.target.value)}
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
                      Category
                    </label>
                    <br />
                    <select
                      id="project-type"
                      name="project-type"
                      defaultValue="DEFAULT"
                      className="w-100 p-2 my-2 border-0 border-2 border-bottom"
                      onChange={(e) => setCategory(e.target.value)}
                      required
                    >
                      <option value="DEFAULT" disabled>
                        Choose a category
                      </option>
                      {cat}
                    </select>
                  </div>
                  <div
                    className="col-12 my-3"
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
                      Title*
                    </label>
                    <br />
                    <input
                      type="name"
                      name="name"
                      placeholder="Title of the post"
                      className="w-100 p-2 my-1 border-0 border-2 border-bottom"
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    />
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
                      Image
                    </label>
                    <br />
                    <div className="input-group my-1">
                      <input
                        type="text"
                        id="project-brief"
                        className="form-control rounded-0"
                        placeholder={`Attach the client's logo here `}
                        aria-label="Text input with attach button "
                        onChange={(e) => setImage(e.target.value)}
                        disabled
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
                            onChange={(e) => setImage(e.target.files[0])}
                            required
                          />
                        </label>
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <Editor
                    editorState={editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={onEditorStateChange}
                    toolbar={{
                      inline: { inDropdown: true },
                      list: { inDropdown: true },
                      textAlign: { inDropdown: true },
                      link: { inDropdown: true },
                      history: { inDropdown: true },
                      image: {
                        uploadCallback: uploadImageCallBack,
                        alt: { present: true, mandatory: false },
                      },
                    }}
                  />
                </div>

                <div className="col-12 col-md-12 my-2 text-center">
                  <button
                    type="submit"
                    className="contact-submit shadow-none btn rounded-pill py-3 my-4 w-50 fw-bold"
                  >
                    {loading ? (
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                    ) : (
                      "Post article"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* {props.output} */}
        </div>
      </section>
    </main>
  );
};

export default Editorial;
