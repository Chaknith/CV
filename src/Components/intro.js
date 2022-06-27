import React from "react";
import "./Style/intro.css";
import ReactTypingEffect from "react-typing-effect";

function intro() {
	return (
		<div className="intro">
			<div className="nameBlock">
				<ReactTypingEffect
					className="name"
					text={["I'm Chaknith Bin"]}
					cursorRenderer={(cursor) => <h1>{cursor}</h1>}
					speed="100"
					eraseDelay="3500"
					typingDelay="1500"
					displayTextRenderer={(text, i) => {
						return (
							<h1>
								{text.split("").map((char, i) => {
									const key = `${i}`;
									return <span key={key}>{char}</span>;
								})}
							</h1>
						);
					}}
				/>
			</div>
		</div>
	);
}

export default intro;
