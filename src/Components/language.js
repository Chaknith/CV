import React from "react";
import "./Style/language.css";

const language = (props) => {
	return (
		<div>
			<h1 className="title">Language</h1>
			<br></br>
			<br></br>
			{props.language.map((element, index) => {
				let dots = [];
				for (let i = 0; i < props.level[index]; i++) {
					dots.push(<span className={"dot fill"}></span>);
				}
				if (props.level[index] < props.max) {
					for (let i = 0; i < props.max - props.level[index]; i++) {
						dots.push(<span className="dot"></span>);
					}
				}
				return (
					<div className="languageBlock">
						<div className="language">
							<p>{element}</p>
							<p className="description">{props.description[index]}</p>
						</div>
						{dots}
					</div>
				);
			})}
			<div className="languageBlock">
				<p className="description">IELTS 7.5 overall</p>
			</div>
			<br></br>
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

export default language;
