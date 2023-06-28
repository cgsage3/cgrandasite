// import experienceContent from "../../data/experience";
import { useState, useEffect } from 'react';

function split(v){
    var x = v[0].split('./').filter(r => r !== '')
    console.log(x)
    return x
}
const Experience = () => {
  const [name, setName] = useState([]);
  useEffect(()=> {
      experienceMDB()
  }, [])

  const experienceMDB = async () => {
      const response = await fetch('https://resume-mern.onrender.com/xp');

      setName(await response.json())
  }
  console.log(name);  
  return (
    <ul class="resumeall">
      {name.map((val) => (
        <li key={val._id}>
          <div className="icon">
            <img src="img/about/briefcase.png" alt="icon" />
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.companyName}</span>
          </h5>
          <ul class="experience">
            {split(val.details).map((data) => {
              return (
                <li key={data._id}>{data}.</li>
              )
            })}
          </ul>         
        </li>
      ))}
    </ul>
  );
};

export default Experience;
