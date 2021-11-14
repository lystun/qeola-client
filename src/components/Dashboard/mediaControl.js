import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import Add from "./add";
import Edit from "./edit";

const MediaControl = (props) => {
  // const output = useSelector((state) => state.output);
  const dispatch = useDispatch();

  const { showMedia, addMedia } = bindActionCreators(actionCreators, dispatch);
  return (
    <main className="P-5">
      <div className="p-5 py-3">
        <div className="row justify-content-center mb-4">
          <div className="col-12 col-sm-6 mx-auto" onClick={() => showMedia()}>
            <Edit icon={"app_registration"} label={"Show media mentions"} />
          </div>
          <div className="col-12 col-sm-6" onClick={() => addMedia()}>
            <Add icon={"playlist_add"} label={"Add new media mention"} />
          </div>
        </div>
        {props.output}
      </div>
    </main>
  );
};
export default MediaControl;
