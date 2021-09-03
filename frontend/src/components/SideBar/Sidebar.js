import "./sidebar.css";

import {
	faChevronDown,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const INSIGHT_ICON = "/Icons/Insight.png";
const THREADS_ICON = "/Icons/Group1.png";
const MESSAGE_ICON = "/Icons/message.png";
const DRAFT_ICON = "/Icons/Group.png";
const INTEGRATE_ICON = "/Icons/Integrate.png";
const HASH_ICON = "/Icons/hash.svg";
const PLUS_ICON = "/Icons/carbon_add-alt.svg";

const SIDEBAR_ITEMS = [
	{
		iconLink: INSIGHT_ICON,
		title: "Insight",
	},
	{
		iconLink: THREADS_ICON,
		title: "Threads",
	},
	{
		iconLink: MESSAGE_ICON,
		title: "All DMs",
	},
	{
		iconLink: DRAFT_ICON,
		title: "Draft",
	},
];

const FILES_SUB = {
	title: "Files",
	iconLink: INSIGHT_ICON,
	subitems: [
		{
			title: "All Files",
			iconLink: "/Icons/Vector.png",
			path: "/files",
		},
		{
			title: "Shared",
			iconLink: "/Icons/default.png",
			path: "/shared",
		},
		{
			title: "Favourites",
			iconLink: "/Icons/Star.png",
			path: "favourites",
		},
		{
			title: "Trash",
			iconLink: "/Icons/Bin.png",
			path: "/trash",
		},
		{
			title: "Help",
			iconLink: "/Icons/Question.png",
			path: "/help",
		},
	],
};
const LOUNGES_SUB = {
	title: "Lounge",
	subitems: [
		{
			title: "Lounge 1",
		},
	],
};
const CHANNELS_SUB = {
	title: "Channels",
	subitems: [
		{
			title: "announcements",
		},
		{
			title: "games",
		},
		{
			title: "designers",
		},
		{
			title: "developers",
		},
	],
};
const MSG_SUB = {
	title: "Direct Messages",
	subitems: [
		{
			title: "John Doe",
		},
		{
			title: "Jane Doe",
		},
		{
			title: "James Bond",
		},
	],
};

const SidebarItem = ({ title, iconLink, sub = false, path = null }) => {
	const history = useHistory();
	const handleClick = () => {
		history.push(path);
	};

	return (
		<li
			className={`text-base font-normal flex items-center justify-start gap-2 ${
				!sub ? "" : "ml-5"
			}`}
			{...{ ...(!!path && { onClick: handleClick }) }}
		>
			<img
				{...{ src: iconLink, alt: !!title ? title + "icon" : "icon" }}
				className=""
			/>
			<span>{title}</span>
		</li>
	);
};
const SidebarItemWithSubitems = ({ title, iconLink, subitems }) => {
	// const history = useHistory();
	const [showSubitems, setShowSubitems] = useState(false);
	const handleShowSubitems = () => setShowSubitems((prevState) => !prevState);

	return (
		<>
			<li
				className="text-base font-normal flex items-center justify-between"
				onClick={handleShowSubitems}
			>
				<div className="flex items-center justify-start gap-2">
					<img src={iconLink} alt="icon" /> {title}
				</div>
				<FontAwesomeIcon
					className="icon"
					icon={showSubitems ? faChevronDown : faChevronRight}
				/>
			</li>
			{showSubitems && (
				<ul>
					{subitems?.map((elem, ind) => (
						<SidebarItem {...{ key: ind, sub: true, ...elem }} />
					))}
				</ul>
			)}
		</>
	);
};
const SidebarItemWithSubitems2 = ({ title, subitems }) => {
	const [showSubitems, setShowSubitems] = useState(false);
	const handleShowSubitems = () => setShowSubitems((prevState) => !prevState);

	return (
		<>
			<li
				className="text-base font-normal flex items-center justify-between"
				onClick={handleShowSubitems}
			>
				<div className="flex items-center justify-start gap-2">
					<FontAwesomeIcon
						className="icon"
						icon={showSubitems ? faChevronDown : faChevronRight}
					/>
					{title}
				</div>
				<button>
					<img src={PLUS_ICON} alt="add icon" />
				</button>
			</li>
			{showSubitems && (
				<ul>
					{subitems?.map((elem, ind) => (
						<SidebarItem
							{...{ key: ind, sub: true, ...elem, iconLink: HASH_ICON }}
						/>
					))}
				</ul>
			)}
		</>
	);
};
const SidebarItemWithSubitems3 = ({ title, subitems }) => {
	const [showSubitems, setShowSubitems] = useState(false);
	const handleShowSubitems = () => setShowSubitems((prevState) => !prevState);

	return (
		<>
			<li
				className="text-base font-normal flex items-center justify-between"
				onClick={handleShowSubitems}
			>
				<div className="flex items-center justify-start gap-2">
					<FontAwesomeIcon
						className="icon"
						icon={showSubitems ? faChevronDown : faChevronRight}
					/>
					{title}
				</div>
				<button>
					<img src={PLUS_ICON} alt="add icon" />
				</button>
			</li>
			{showSubitems && (
				<ul>
					{subitems?.map((elem, ind) => (
						<li key={ind} className="text-base mx-5 flex items-center m-1">
							<div className="h-10 w-10 pic-image relative">
								<img className="object-cover" src="" alt="" />
								<span className="h-2 w-2 bg-white absolute right"></span>
							</div>
							<p className="mx-1 font-normal">{elem?.title}</p>
						</li>
					))}
				</ul>
			)}
		</>
	);
};

function Sidebar() {
	return (
		<div className="bg-gray-50 w-72 2xl:w-80 p-7 flex flex-col gap-7">
			<div className="flex items-center gap-2">
				<img className="h-7 w-7" alt="Zuri logo" src="/zurichat-logo.svg" />
				<h1 className="text-2xl uppercase tracking-wider font-bold lato">
					Zuri
				</h1>
			</div>
			<ul className="flex flex-col gap-4">
				{SIDEBAR_ITEMS.map((elm, ind) => (
					<SidebarItem {...{ key: ind, ...elm }} />
				))}
				<SidebarItem
					{...{
						iconLink: INSIGHT_ICON,
						title: "Insight",
					}}
				/>
				<SidebarItem
					{...{
						iconLink: MESSAGE_ICON,
						title: "All DMs",
					}}
				/>

				<SidebarItem
					{...{
						iconLink: DRAFT_ICON,
						title: "Draft",
					}}
				/>
				{/* Files Categories */}
				<SidebarItemWithSubitems {...FILES_SUB} />
				<SidebarItem
					{...{
						iconLink: INTEGRATE_ICON,
						title: "Integrate",
					}}
				/>
				<SidebarItemWithSubitems2 {...LOUNGES_SUB} />
				<SidebarItemWithSubitems2 {...CHANNELS_SUB} />
				<SidebarItemWithSubitems3 {...MSG_SUB} />
			</ul>
		</div>
	);
}

export default Sidebar;
