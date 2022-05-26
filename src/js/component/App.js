import { counter } from "@fortawesome/fontawesome-svg-core";
import React, { useState } from "react";
import { Counter } from "./Counter";

export const App = () => {
	const [time, setTime] = useState(0);
	let seconds = 0;
	setInterval(() => {
		seconds++;
		setTime(seconds);
		console.log(time);
	}, 1000);

	return <Counter seconds={seconds} />;
};
