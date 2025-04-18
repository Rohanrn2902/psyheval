import React from 'react';
import img1 from '../images/ross.png'; // Ross's image
import img2 from '../images/joey.png'; // Joey's image (make sure to import this)
import img3 from '../images/chandler.png'; // Chandler's image (make sure to import this)
import img4 from '../images/scott.png'; // Michael's image (make sure to import this)

const founders = [
  {
    name: 'Dr. Ross Geller',
    role: 'Specialty: Paleontology and Relationship Recovery',
    image: img1,
    contact: '828282828',
  },
  {
    name: 'Dr. Joey Tribbiani',
    role: 'Specialty: Professional Advice Giver & Emotional Support Pizza Enthusiast',
    image: img2, 
    contact: '1234567890', 
  },
  {
    name: 'Dr. Chandler Bing',
    role: 'Specialty: Sarcasm Therapy & Stress Relief Through Humor',
    image: img3, 
    contact: '0987654321',
  },
  {
    name: 'Dr.Michael Scott',
    role: 'Specialty: Over-enthusiastic Leadership & Awkward Motivational Speaking',
    image: img4, 
    contact: '1122334455',
  },
];

const Volunteer = () => {
  return (
    <div className="about-us">
      <h2>Consult</h2>
      <div className="founders">
        {founders.map((founder, index) => (
          <div key={index} className="founder">
            <div className="founder-image">
              <img src={founder.image} alt={founder.name} />
            </div>
            <div className="founder-details">
              <h3>{founder.name}</h3>
              <p>{founder.role}</p>
              {founder.contact && <p>Contact: {founder.contact}</p>} 
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Volunteer;
