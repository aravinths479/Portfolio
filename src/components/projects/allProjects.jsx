import React from "react";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProjects.css";

const truncateText = (text, limit) => {
	const words = text.split(" ");
	if (words.length > limit) {
		return words.slice(0, limit).join(" ") + "..."; // Add ellipsis if text is truncated
	}
	return text;
};

const AllProjects = () => {
	const descriptionLimit = 20;
	return (
		<div className="all-projects-container">
			{INFO.projects.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						logo={project.logo}
						title={project.title}
						description={truncateText(
							project.description,
							descriptionLimit
						)}
						linkText={project.linkText}
						link={project.link}
					/>
				</div>
			))}
		</div>
	);
};

export default AllProjects;
