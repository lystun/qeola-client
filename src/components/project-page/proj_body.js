const ProjBody = (props) => {
  // const proj = useSelector((state) => state.output);
  // const [body, setBody] = useState();

  const createMarkup = () => {
    return { __html: props.content };
  };

  return (
    <section id="project-body" className="project-body">
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="text-Justify pt-5 pb-3 mt-md-4 proj-body"
            dangerouslySetInnerHTML={createMarkup()}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjBody;
