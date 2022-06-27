import React from "react";
import "./App.css";
import TimelineWheel from "./Components/timelineWheel.js";
import Intro from "./Components/intro.js";
import Project from "./Components/project.js";
import Footer from "./Components/footer.js";
import Skill from "./Components/skill.js";
import Language from "./Components/language.js";

function App() {
	return (
		<div className="body">
			<Intro />
			<TimelineWheel />
			<Skill />
			<Language />
			<Project />
			<Footer />
		</div>
	);
}

export default App;
