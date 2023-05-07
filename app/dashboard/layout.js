"use client";
import { isLoggedIn } from "../pocketbase_api/login_api";
import { redirect } from "next/navigation";
import { useEffect } from "react";

import Sidebar from "./sidebar";
import Navbar from "./navbar";

const placeholder = () => {
	return (
		<div>
			<h1>You need to log in first!</h1>
		</div>
	);
};

export default function DashboardLayout({ children }) {
	useEffect(() => {
		if (!isLoggedIn()) {
			redirect("/login");
		} else {
			alert("Logged in!");
		}
	}, []);

	return !isLoggedIn() ? (
		placeholder
	) : (
		<section className="flex">
			<Sidebar />
			<div className="w-full p-10 pr-0">{children}</div>
		</section>
	);
}
