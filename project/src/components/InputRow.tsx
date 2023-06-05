import { createSignal } from "solid-js";
import { calculateAge } from "../age";
import "./InputRow.css";

export default function InputRow() {
	const [day, setDay] = createSignal<number>();
	const [month, setMonth] = createSignal<number>();
	const [year, setYear] = createSignal<number>();
	const [errors, setErrors] = createSignal<Map<string, string>>();
	const submitFunc = (e: SubmitEvent) => {
		let error = new Map();
		e.preventDefault();
		day() || error.set("day", "This field is required");
		month() || error.set("month", "This field is required");
		year() || error.set("year", "This field is required");
		let now = new Date();
		if (year()! > now.getFullYear()) {
			error.set("year", "Must be in the past");
		}
		if (month()! <= 0 || month()! >= 12) {
			error.set("month", "Must be a valid month");
		}

		if (day()! <= 0 || day()! >= 31) {
			error.set("day", "Must be a valid day");
		}

		if (error.get("day") || error.get("month") || error.get("year")) {
			setErrors(error);
		} else {
			calculateAge(day()!, month()!, year()!);
			setErrors(undefined);
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
				{errors() && <p class="error">{errors() && errors()!.get("day")}</p>}
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
				{errors() && <p class="error">{errors() && errors()!.get("month")}</p>}
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
				{errors() && <p class="error">{errors() && errors()!.get("year")}</p>}
			</div>
			<button class="submit-btn" type="submit">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="46"
					height="44"
					viewBox="0 0 46 44"
				>
					<g fill="none" stroke="#FFF" stroke-width="2">
						<path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
					</g>
				</svg>
			</button>
		</form>
	);
}
