// import experienceContent from "../../data/experience";
import { useState, useEffect } from 'react';

function split(v){
    var x = v[0].split('./').filter(r => r !== '')
    console.log(x)
    return x
}
function compare (a, b) {
  const yearA = parseInt(a.year, 10);// convert string to integer
  const yearB = parseInt(b.year, 10);// convert string to integer
  // console.log(yearA);
  return yearB - yearA;// compare
}
const Experience = () => {
  const [data, setData] = useState([]);
  useEffect(()=> {
      experienceMDB()
  }, [])

  const experienceMDB = async () => {
      const response = await fetch('https://cover-letter-mern-back.onrender.com/api/v1/experience');

      setData(await response.json())
  }

  console.log(data?.data?.docs);  
  return (
    <ul class="resumeall">
      {data?.data?.docs.slice().sort(compare).map((val) => (
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
            {val.details.map((data) => {
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
