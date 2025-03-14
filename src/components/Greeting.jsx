import { useState } from "preact/hooks";

export default function Greeting({ messages }) {
	const randomMessage = () =>
		messages[Math.floor(Math.random() * messages.length)];

	const [greeting, setGreeting] = useState(messages[0]);

	return (
		<div>
			<h2>{greeting}! Thank you for visiting!</h2>
			<button
				class="greetButton px-2 rounded-xl"
				onClick={() => setGreeting(randomMessage())}
				type="submit"
			>
				New Greeting
			</button>
		</div>
	);
}
