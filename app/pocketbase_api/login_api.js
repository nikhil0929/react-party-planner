import PocketBase from "pocketbase";

const url = "http://18.218.110.131";

const pb = new PocketBase(url);

export async function login(identity, password) {
	// automatically sets the authStore in pb variable
	await pb.collection("users").authWithPassword(identity, password);
}

export function logout() {
	pb.authStore.clear();
}

export async function createAccount(
	name,
	username,
	email,
	password,
	confirm_password
) {
	const data = {
		username: username,
		email: email,
		emailVisibility: true,
		password: password,
		passwordConfirm: confirm_password,
		name: name,
	};

	console.log(data);

	const record = await pb.collection("users").create(data);
	console.log("RECORD: " + record);
	return record;
}

export async function getUser() {
	if (!isLoggedIn()) {
		return null;
	}
	const record = await pb.collection("users").getOne(pb.authStore.model.id);
	return record;
}

export function isLoggedIn() {
	return pb.authStore.isValid;
}
