import React from 'react';
import MentalHealthInitiative from './MentalHealthInitiative';
import civi from '../images/civi-dep-logo.png'
import sat from '../images/satyarth.png'
import sld from '../images/SLD.jpg'

const initiatives = [
  {
    text: "[italic] CiviDep[\italic]Cividep India is committed to worker's rights and corporate accountability. We partner with workers, collectives and other stakeholders to undertake in-depth research, awareness creation and stakeholder engagement. Our focus is on low wage workers in export-oriented sectors. Through our work we aim to safeguard worker's rights and change the way corporates work in global supply chains.",
    image: civi,
    link: "https://cividep.org/#:~:text=Cividep%20India%20is%20committed%20to,work%20in%20global%20supply%20chains.",

  },
  {
    text: "[italic]Satyarthi[\italic]Best NGO for Children in India working against Child labour, Child Trafficking, Child Education, Child Sexual Abuse etc.",
    image: sat,
    link: "https://satyarthi.org.in/",    
  },
  {
    text: "[italic]SLD India[\italic]SLD recognizes the significance of enhancing the skills and capabilities of workers and its own staff. As a result, there is a strong emphasis on engaging communities in a collaborative manner during capacity-building activities, with specific attention given to topics such as gender, leadership, labor laws, and addressing gender-based violence and harassment (GBVH). ",
    image: sld,
    link: "https://www.sld-india.org/",
  },
];
const backgroundColors = [
  "#e8dff5", 
    "#fce1e4", 
    "#daeaf6",
    "#fcf4dd",
    "#ddedea"
];

const Initiatives = () => {
  return (
    <div className="initiatives-container" style={{ width: '100%' }}>
      <h1>NGO</h1>
      {initiatives.map((initiative, index) => (
        <MentalHealthInitiative
          key={index}
          text={initiative.text}
          image={initiative.image}
          alt={initiative.text} 
          link={initiative.link}
          backgroundColor={backgroundColors[index % backgroundColors.length]}
        />
      ))}
    </div>
  );
};

export default Initiatives;
