import skills from "../data/skills.json"
import {getImageUrl} from '../utils'
const Skills = () => {
  return (
    <section  className="skill-container" id="skills">
      <h2 className="skill-title heading" >Skills</h2>
      <div className="skill-content">
      <div className="skill-items">
        {
            skills.map((skill, id) => {
                return <div className="skill-item" key ={id}>
                    <div className="skill-image"> <img src={getImageUrl(skill.imageSrc)} alt={skill.title} /></div>
                    <p>{skill.title}</p>
                </div>
            })
        }
      </div>
      </div>
      
    </section>
  );
};

export default Skills
