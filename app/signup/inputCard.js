"use client";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { createAccount } from "../pocketbase_api/login_api";
import { useState } from "react";
import { useRouter } from "next/navigation";

const handleSignup = (
	name,
	username,
	email,
	password,
	passwordConfirm,
	router
) => {
	createAccount(name, username, email, password, passwordConfirm)
		.then((record) => {
			if (record != null) {
				alert("Successfully created account: " + record.name);
				router.push("/login");
			} else {
				alert("Unable to create account!");
			}
		})
		.catch((e) => {
			// TODO: show error response from server
			console.log("Error: " + e);
		});
};

export default function InputCard() {
	const [state, setState] = useState({
		name: "",
		username: "",
		email: "",
		password: "",
		passwordConfirm: "",
	});

	const handleChange = (e) => {
		const value = e.target.value;
		setState({
			...state,
			[e.target.name]: value,
		});
	};

	const router = useRouter();

	return (
		<div className="bg-white m-5 drop-shadow-md border border-gray-200 rounded-lg max-w-3xl dark:bg-gray-800 dark:border-gray-700 p-10">
			<form action="/login" method="POST">
				<div className="space-y-12">
					<div className="border-b border-gray-900/10 pb-12">
						<h2 className="text-base font-semibold leading-7 text-gray-900">
							Profile
						</h2>
						<p className="mt-1 text-sm leading-6 text-gray-600">
							This information will be displayed publicly so be careful what you
							share.
						</p>

						<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
							<div className="sm:col-span-4">
								<label
									htmlFor="username"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Username
								</label>
								<div className="mt-2">
									<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
										<input
											type="text"
											name="username"
											id="username"
											autoComplete="username"
											className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
											placeholder="janesmith"
											onChange={handleChange}
										/>
									</div>
								</div>
							</div>

							<div className="col-span-full">
								<label
									htmlFor="photo"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Photo
								</label>
								<div className="mt-2 flex items-center gap-x-3">
									<UserCircleIcon
										className="h-12 w-12 text-gray-300"
										aria-hidden="true"
									/>
									<button
										type="button"
										className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
									>
										Change
									</button>
								</div>
							</div>

							<div className="sm:col-span-5">
								<label
									htmlFor="name"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Full Name
								</label>
								<div className="mt-2">
									<input
										type="text"
										name="name"
										id="name"
										autoComplete="given-name"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										placeholder="Jane Smith"
										onChange={handleChange}
									/>
								</div>
							</div>

							<div className="sm:col-span-5">
								<label
									htmlFor="email"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Email address
								</label>
								<div className="mt-2">
									<input
										id="email"
										name="email"
										type="email"
										autoComplete="email"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										onChange={handleChange}
									/>
								</div>
							</div>

							<div className="sm:col-span-4">
								<label
									htmlFor="password"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Password
								</label>
								<div className="mt-2">
									<input
										id="password"
										name="password"
										type="password"
										autoComplete="password"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										onChange={handleChange}
									/>
								</div>
							</div>

							<div className="sm:col-span-4">
								<label
									htmlFor="email"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Confirm password
								</label>
								<div className="mt-2">
									<input
										id="passwordConfirm"
										name="passwordConfirm"
										type="password"
										autoComplete="passwordConfirm"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										onChange={handleChange}
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="mt-6 flex items-center justify-end gap-x-6">
						<button
							type="button"
							className="text-sm font-semibold leading-6 text-gray-900"
							// TODO: redirect to login page
						>
							Cancel
						</button>
						<button
							type="button"
							className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							onClick={() =>
								handleSignup(
									state.name,
									state.username,
									state.email,
									state.password,
									state.passwordConfirm,
									router
								)
							}
						>
							Save
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}
