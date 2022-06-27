import React from "react";
import "./Style/timelineWheel.css";

import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function timelineWheel() {
	let projectIconStyles = { background: "#2cc7ff" };

	return (
		<div className="timeline">
			<h1 className="title">Project</h1>
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
					<p id="description">React Native | Javascript</p>
					<a className={`button projectButton`} href="/">
						View Project
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
					<p id="description">Arsa Framework</p>
					<a className={`button projectButton`} href="/">
						View Project
					</a>
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
						Working in a group of 3 people to build a game.
					</p>
					<p id="description">Arsa Framework</p>
					<a className={`button projectButton`} href="/">
						View Project
					</a>
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
					<p id="description">HTML | CSS | PHP | MySQL</p>
					<a className={`button projectButton`} href="/">
						View Project
					</a>
				</VerticalTimelineElement>
			</VerticalTimeline>
			<br></br>
			<hr></hr>
		</div>
	);
}

export default timelineWheel;
