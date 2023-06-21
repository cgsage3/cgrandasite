import experienceContent from "../../data/experience";
import { useState, useEffect } from 'react';
function ExperienceDb() {
const [name, setName] = useState([]);
useEffect(()=> {
    experienceMDB()
}, [])

const experienceMDB = async () => {
    const response = await fetch('https://resume-mern.onrender.com/xp');

    setName(await response.json())
}
console.log(name);
function split(v){
    var x = v[0].split('./').filter(r => r !== '')
    console.log(x)
    return x
}
const Experience = () => {
  return (
    <ul class="resumeall">
      {name.map((val, i) => (
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
            {split(val.details).map((list, i) => (
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
