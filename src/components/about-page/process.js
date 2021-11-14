import ProcessCard from "../Reusable-components/process_card";

const Process = () => {
  return (
    <section id="process" className="py-5">
      <div className="container py-3 py-md-5">
        <div className="process-header text-center mx-auto pt-5">
          <h2 className="fw-bold fs-1">Our Process</h2>
          <p>
            We combine strategic planning, design craftmanship, marketing
            expertise, and coding mastery to create online properties with a
            strong foundation and an eye for innovation.
          </p>
        </div>
        <div className="row pb-5 pt-3">
          <div className="col-12 col-lg-3 col-md-6">
            <ProcessCard
              image={"brief.png"}
              image2={"brief_hover.png"}
              title={"Your Brief"}
              text={"We combine strategic planning, design craftmanship"}
            />
          </div>
          <div className="col-12 col-lg-3 col-md-6">
            <ProcessCard
              image={"build.png"}
              image2={"build_hover.png"}
              title={"We Build"}
              text={"We combine strategic planning, design craftmanship"}
            />
          </div>
          <div className="col-12 col-lg-3 col-md-6">
            <ProcessCard
              image={"approve.png"}
              image2={"approve_hover.png"}
              title={"You Approve"}
              text={"We combine strategic planning, design craftmanship"}
            />
          </div>
          <div className="col-12 col-lg-3 col-md-6">
            <ProcessCard
              image={"launch.png"}
              image2={"launch_hover.png"}
              title={"Ready to Launch"}
              text={"We combine strategic planning, design craftmanship"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
