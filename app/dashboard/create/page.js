import CreateHeader from "./header";
import CreateForm from "./create_form";

export default function CreatePage(props) {
	return (
		<div className="divide-y">
			<div className="w-full h-auto pb-3">
				<CreateHeader />
			</div>
			<div className="h-[calc(100vh-11.4rem)] overflow-y-auto pt-7">
				<CreateForm />
			</div>
		</div>
	);
}
