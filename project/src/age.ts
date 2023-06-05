import { createSignal } from "solid-js";

export const [day, setDay] = createSignal<number>();
export const [month, setMonth] = createSignal<number>();
export const [year, setYear] = createSignal<number>();

export function calculateAge(
	birthDay: number,
	birthMonth: number,
	birthYear: number
) {
	const current = new Date();
	console.log(birthDay, birthMonth, birthYear);
	let newDay = current.getDate() - birthDay;
	let newMonth = current.getMonth() + 1 - birthMonth;
	let newYear = current.getFullYear() - birthYear;
	console.log(newDay, newMonth, newYear);
	if (newDay < 0) {
		newDay *= -1;
		newMonth -= 1;
	}
	if (newMonth < 0) {
		newMonth += 12;
		newYear -= 1;
	}
	setYear(newYear);
	setMonth(newMonth);
	setDay(newDay);
}
