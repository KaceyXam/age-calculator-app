import { createSignal } from "solid-js";
import { calculateAge } from "../age";

export default function InputRow() {
	const [day, setDay] = createSignal<number>();
	const [month, setMonth] = createSignal<number>();
	const [year, setYear] = createSignal<number>();
	const submitFunc = (e: SubmitEvent) => {
		e.preventDefault();
		if (day() === undefined || month() === undefined || year() === undefined) {
			return;
		} else {
			calculateAge(day()!, month()!, year()!);
		}
	};

	return (
		<form class="input-row" onSubmit={submitFunc}>
			<div class="input-wrapper">
				<label for="day">Day</label>
				<input
					type="number"
					id="day"
					placeholder="DD"
					minLength={2}
					maxLength={2}
					onChange={(e) => setDay(e.target.value)}
				/>
			</div>
			<div class="input-wrapper">
				<label for="month">Month</label>
				<input
					type="number"
					id="month"
					placeholder="MM"
					minLength={2}
					maxLength={2}
					onChange={(e) => setMonth(e.target.value)}
				/>
			</div>
			<div class="input-wrapper">
				<label for="year">Year</label>
				<input
					type="number"
					id="year"
					placeholder="YYYY"
					minLength={4}
					maxLength={4}
					onChange={(e) => setYear(e.target.value)}
				/>
			</div>
			<button type="submit">Submit</button>
		</form>
	);
}
