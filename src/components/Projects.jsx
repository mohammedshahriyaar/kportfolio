// src/components/Projects.jsx
import React from 'react';
import Project from './Project';

const Projects = () => {
  const projectList = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website to showcase my projects and skills.',
      link: 'https://github.com/yourusername/portfolio',
    },
    {
      title: 'Task Manager App',
      description: 'A web application to manage daily tasks and improve productivity.',
      link: 'https://github.com/yourusername/task-manager',
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-list">
        {projectList.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
