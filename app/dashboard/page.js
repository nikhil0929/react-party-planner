"use client";
import { isLoggedIn } from "../pocketbase_api/login_api";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
	useEffect(() => {
		if (!isLoggedIn()) {
			redirect("/login");
		} else {
			alert("Logged in!");
		}
	}, []);

	return (
		<div>
			<h1>HELLO THERE</h1>
		</div>
	);
}
