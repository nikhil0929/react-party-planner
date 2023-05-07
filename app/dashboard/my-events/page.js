"use client";

import MyEventsHeader from "./header";
import EventCard from "./eventcard";

export default function MyEventsPage(props) {
	return (
		<div className="overflow-y-auto">
			<div>
				<MyEventsHeader />
			</div>
			<div className="pt-10 flex">
				<EventCard />
			</div>
		</div>
	);
}
