import React from "react";

function ProjectItem({ name, about, technologies }) {
  const spans = technologies.map((tech,index) => (
    <span key = {index}>{tech}</span>
  ));
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
      </div>
      <div className="technologies">{spans}</div>
    </div>
  );
}

export default ProjectItem;
