import experienceContent from "../../data/experience";

const Experience = () => {
  return (
    <ul class="resumeall">
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <img src="img/about/briefcase.png" alt="icon" />
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <ul class="experience">
            {Object.keys(val.details).map((list, i) => (
                <li key={i}>
                    {val.details[list]}
                </li>
            ))} 
          </ul>         
        </li>
      ))}
    </ul>
  );
};

export default Experience;
