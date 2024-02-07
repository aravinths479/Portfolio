import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAAAAABWESUoAAAA4ElEQVR4AcXTIQyDMBRF0e8VahJLMonPDF5OYidnpqbwkmQKhw8GT+pdZWUTXPV3FW8ZhIaWDtx27TtJW1HCQb8GWth9QCR3wUg5DkCzD0CtqMs8Kyr5DbgKjgCTpuQat0CnVzdfI0eY5O72DuhtCE71Mt8Y4EoEoHtm83xRgE5qVQUga+dZArYiKnD2gS0/N7wrAM0kQT7ghsreArzchBPrATAAiJKWdM4+AA8PWqVyGwLyUikCAOkBXWwAujWQLwfiojcRAOH2W48YAC/vrE0cAPo5Ad77F6MczP++Xqw3+TolvlpexasAAAAASUVORK5CYII="
								alt="Nutz Technovation Private Limited"
								className="work-image"
							/>
							<div className="work-title">
								Nutz Technovation Private Limited
							</div>
							<div className="work-subtitle">
								Junior Web Developer
							</div>
							<div className="work-duration">
								June, 2023 - September, 2023
							</div>
						</div>

						<div className="work">
							<img
								src="https://static.vecteezy.com/system/resources/thumbnails/018/717/077/small/laptop-coding-line-gradient-icon-vector.jpg"
								alt="Freelance web developer"
								className="work-image"
							/>
							<div className="work-title">
								Freelance Web Developer
							</div>
							<div className="work-subtitle">Web Developer</div>
							<div className="work-duration">2022 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};


export default Works;
