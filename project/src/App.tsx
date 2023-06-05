import type { Component } from "solid-js";

import logo from "./logo.svg";
import InputRow from "./components/InputRow";
import { day, month, year } from "./age";

const App: Component = () => {
	return (
		<section class="age-wrapper">
			<InputRow />
			<div class="age-section">
				<div class="age-title">
					<span>{year() || "--"}</span>years
				</div>
				<div class="age-title">
					<span>{month() || "--"}</span>months
				</div>
				<div class="age-title">
					<span>{day() || "--"}</span>days
				</div>
			</div>
		</section>
	);
};

export default App;
