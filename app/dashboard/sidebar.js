import { FaGlobeAmericas } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
	VscAdd,
	VscBookmark,
	VscAccount,
	VscBell,
	VscSettingsGear,
} from "react-icons/vsc";

const eventTabs = [
	{
		name: "Create Event",
		href: "/dashboard/create",
		current: false,
		icon: <VscAdd />,
	},
	{
		name: "My Events",
		href: "dashboard/my-events",
		current: true,
		icon: <VscBookmark />,
	},
	{ name: "Discover", href: "#", current: false, icon: <FaGlobeAmericas /> },
];

const profileTabs = [
	{ name: "Profile", href: "#", current: false, icon: <VscAccount /> },
	{ name: "Notifications", href: "#", current: false, icon: <VscBell /> },
	{ name: "Settings", href: "#", current: false, icon: <VscSettingsGear /> },
];

export default function Sidebar(props) {
	const router = useRouter();

	return (
		<aside className="flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
			<a href="#">
				<img
					className="w-auto h-7"
					src="https://merakiui.com/images/logo.svg"
					alt=""
				/>
			</a>

			<div className="flex flex-col justify-between flex-1 mt-6">
				<nav className="-mx-3 space-y-6 ">
					<div className="space-y-3 ">
						<label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">
							Controls
						</label>

						{eventTabs.map((tab) => (
							<Link
								className={
									tab.current
										? "active"
										: "flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
								}
								href={tab.href}
								key={tab.name}
								aria-current={tab.current ? "page" : undefined}
							>
								{tab.icon ? (
									<span className="mx-2 text-md font-medium">{tab.icon}</span>
								) : null}

								<span className="mx-2 text-sm font-medium">{tab.name}</span>
							</Link>
						))}
					</div>

					<div className="space-y-3 ">
						<label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">
							Profile
						</label>

						{profileTabs.map((tab) => (
							<Link
								className={
									tab.current
										? "active"
										: "flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
								}
								href={tab.href}
								key={tab.name}
							>
								{tab.icon ? (
									<span className="mx-2 text-md font-medium">{tab.icon}</span>
								) : null}

								<span className="mx-2 text-sm font-medium">{tab.name}</span>
							</Link>
						))}
					</div>
				</nav>
			</div>
		</aside>
	);
}

const SideBarButton = ({ icon, text }) => (
	<div classNameName="sidebar-icon group">
		{icon}
		<h5>{text}</h5>
		{/* <span classNameName="sidebar-tooltip group-hover:scale-100">{text}</span> */}
	</div>
);
