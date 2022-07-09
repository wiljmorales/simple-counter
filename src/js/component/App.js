import React, { useState } from "react";
import { Counter } from "./Counter";

export const App = () => {
	const [time, setTime] = useState(0);
	setTimeout(() => {
		setTime(time + 1);
	}, 1000);

	return <Counter seconds={time} />;
};
