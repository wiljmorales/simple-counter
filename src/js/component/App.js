import React, { useState } from "react";
import { Counter } from "./Counter";

export const App = () => {
	const [time, setTime] = useState(0);
	// let seconds = 0; variable muerta
	setTimeout(() => {
		// seconds++;
		setTime(time + 1);
		console.log(time);
	}, 1000);

	return <Counter seconds={time} />;
};
