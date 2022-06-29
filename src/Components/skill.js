import React from "react";
import "./Style/skill.css";

const skill = (props) => {
	return (
		<div>
			<h1 className="title">Skill</h1>
			<br></br>
			<div className="skills">
				{props.skill.map((element, index) => {
					let des = [];
					for (let i = 0; i < props.description[index].length; i++) {
						des.push(
							<p className="skillDescription">{props.description[index][i]}</p>
						);
					}
					return (
						<div className="skillBlock">
							<p className="skillTitle">{element}</p>
							{des}
						</div>
					);
				})}
			</div>
			<br></br>
			<br></br>
			<hr></hr>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
		</div>
	);
};

export default skill;
