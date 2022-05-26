import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

export const Counter = (props) => {
	return (
		<div className="bg-dark p-5 text-light fw-bold d-flex justify-content-center fs-4">
			<div className="border border-3 rounded-3 d-inline p-2 me-3">
				<FontAwesomeIcon icon={regular("clock")} inverse />
			</div>
			<div className="border border-3 rounded-3 d-inline p-2 me-3">0</div>
			<div className="border border-3 rounded-3 d-inline p-2 me-3">0</div>
			<div className="border border-3 rounded-3 d-inline p-2 me-3">0</div>
			<div className="border border-3 rounded-3 d-inline p-2 me-3">0</div>
			<div className="border border-3 rounded-3 d-inline p-2 me-3">0</div>
			<div className="border border-3 rounded-3 d-inline p-2 me-3">
				{props.seconds}
			</div>
		</div>
	);
};
