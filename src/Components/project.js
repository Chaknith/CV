import React from "react";
import "./Style/timelineWheel.css";
import "./Style/project.css";

import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function timelineWheel() {
	let projectIconStyles = { background: "#2cc7ff" };

	return (
		<div className="projectSection">
			<br></br>
			<h1 className="title">Project</h1>
			<br></br>
			<div className="fadingEffect"></div>
			<VerticalTimeline className="makeItCurve">
				<VerticalTimelineElement
					date={""}
					dateClassName="date"
					iconStyle={projectIconStyles}
				>
					<h3 className="vertical-timeline-element-title">Tree in Tree</h3>
					<p id="description">
						Working with a frontend development team. I worked on arranging the
						data and show it in a tree manner.
					</p>
					<p id="programWithButton">React | Javascript</p>
					<a
						className={`button projectButton`}
						target="_blank"
						rel="noopener noreferrer"
						href="https://chaknith.github.io/Tree-in-tree/"
					>
						View Project
					</a>
					<a
						className={`button codeButton`}
						target="_blank"
						rel="noopener noreferrer"
						href="https://github.com/Chaknith/Tree-in-tree/tree/master"
					>
						View Project code
					</a>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					date={""}
					dateClassName="date"
					iconStyle={projectIconStyles}
				>
					<h3 className="vertical-timeline-element-title">Game Development</h3>
					<p id="description">
						Working in a group of 3 people to build a game.
					</p>
					<p id="program">Arsa Framework</p>
					{/*<a
						className={`button projectButton`}
						target="_blank"
						rel="noopener noreferrer"
						href="/"
					>
						View Project
					</a>*/}
				</VerticalTimelineElement>
				<VerticalTimelineElement
					date={""}
					dateClassName="date"
					iconStyle={projectIconStyles}
				>
					<h3 className="vertical-timeline-element-title">
						Health monitoring for Covid-19 patient
					</h3>
					<p id="description">
						A senior project that consist of wearable and stationary devices.
						Wearable has thermistor and heart rate sensor. Stationary has load
						cell sensor to measure pinch strength and two layered ballon to
						measure lung capacity.
					</p>
					<p id="program">Arduino&IoT | Modules | Firebase | React</p>
					{/*<a className={`button projectButton`} href="/">
						View Project
					</a>*/}
				</VerticalTimelineElement>
				<VerticalTimelineElement
					date={"March 2022 - May 2022"}
					dateClassName="date"
					iconStyle={projectIconStyles}
				>
					<h3 className="vertical-timeline-element-title">
						Apartment management website
					</h3>
					<p id="description">
						Working with a friend to create apartment management website. We
						built a database system using MySQL to store data. A website is
						consist of two users. A customer could register, check for available
						room, book the room, send prove of payment, and require for
						maintenance. A staff could view the payment prove and mark the
						status of maintenance.
					</p>
					<p id="program">HTML | CSS | PHP | MySQL</p>
					{/*<a className={`button projectButton`} href="/">
						View Project
					</a>*/}
				</VerticalTimelineElement>
			</VerticalTimeline>
			<br></br>
			<br></br>
			<hr></hr>
			<br></br>
			<br></br>
		</div>
	);
}

export default timelineWheel;
