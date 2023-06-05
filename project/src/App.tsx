import type { Component } from "solid-js";

import logo from "./logo.svg";
import styles from "./App.module.css";
import InputRow from "./components/InputRow";
import { day, month, year } from "./age";

const App: Component = () => {
	return (
		<div class={styles.App}>
			<section>
				<InputRow />
				{`${day()} ${month()} ${year()}`}
			</section>
		</div>
	);
};

export default App;
