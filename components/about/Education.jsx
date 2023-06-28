// import educationContent from "../../data/education";
import { useState, useEffect } from 'react';

const Education = () => {
  const [edu, setEdu] = useState([]);
  useEffect(()=> {
    eduMDB()
  }, [])

  const eduMDB = async () => {
    const response = await fetch('https://resume-mern.onrender.com/fetch-edu');
    setEdu(await response.json())
  }
  function compare( a, b ) {
    if ( a.year < b.year ){
      return 1;
    }
    if ( a.year > b.year ){
      return -1;
    }
    return 0;
  }
  edu.sort(compare)  
  return (
    <ul>
      {edu.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <img src="img/about/book.png" alt="icon" />
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institution}</span>
          </h5>
          <p className="open-sans-font">{val.field}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
