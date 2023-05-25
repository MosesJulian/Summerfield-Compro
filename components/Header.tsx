'use client';

import useWindowEvent from '@/hooks/useWindowEvent';
import { FC, ReactNode, useEffect, useState } from 'react';
import clsx from 'clsx';
import NavLink from './NavLink';
import Image from 'next/image';
import Summerfield from '@/public/summerfield.png';
import {
	AiOutlineContacts,
	AiOutlineHome,
	AiOutlineMenu,
	AiOutlineUser,
} from 'react-icons/ai';
import { FaBed, FaMountain } from 'react-icons/fa';
import Dialog from './Dialog';

export type HeaderProps = {
	className?: string;
};

const shouldShowShadow = () => {
	if (window == null) return false;

	const show: number = 50;
	return window.scrollY > show;
};

export type Navigator = Array<{ name: string; icon: ReactNode }>;

const navigator: Navigator = [
	{
		name: 'home',
		icon: <AiOutlineHome size={20} />,
	},
	{
		name: 'about',
		icon: <AiOutlineUser size={20} />,
	},
	{
		name: 'rooms',
		icon: <FaBed size={20} />,
	},
	{
		name: 'attractions',
		icon: <FaMountain size={20} />,
	},
	{
		name: 'contact',
		icon: <AiOutlineContacts size={20} />,
	},
];

const icon = <AiOutlineHome size={30} />;

const Header: FC<HeaderProps> = ({ className }: HeaderProps) => {
	const [showShadow, setShowShadow] = useState<boolean>(false);
	const [showDialog, setShowDialog] = useState<boolean>(false);

	const handleScroll = () => {
		setShowShadow(shouldShowShadow());
	};

	useEffect(handleScroll, []);
	useWindowEvent('scroll', handleScroll);

	return (
		<header
			className={clsx(
				'flex gap-2 justify-between top-0 fixed inset-x-0 px-4 lg:px-16 py-4 transition-colors duration-500 z-20',
				!showShadow && 'text-white',
				showShadow && 'backdrop-blur-md bg-white/80 shadow',
				className
			)}
		>
			<div className="flex gap-5 items-center justify-start">
				<Image
					src={Summerfield}
					width={50}
					height={50}
					alt="Summerfield"
					className="rounded-full"
					loading="lazy"
				/>
				<h1 className="text-xl font-bold">Summerfield Homestay & Cafe</h1>
			</div>

			<nav className="justify-end font-semibold text-lg gap-10 items-center hidden lg:flex">
				{navigator.map((nav, index) => (
					<NavLink
						href={`#${nav.name}`}
						showShadow={showShadow}
						key={index}
						className="capitalize"
					>
						{nav.name}
					</NavLink>
				))}
			</nav>
			<button
				className="flex lg:hidden justify-end items-center"
				onClick={() => setShowDialog(true)}
			>
				<AiOutlineMenu size={30} />
			</button>

			<Dialog
				isOpen={showDialog}
				onClose={() => setShowDialog(false)}
				title="Navigate Through"
			>
				<nav className="flex flex-col gap-5 px-4 justify-center">
					{navigator.map((nav, index) => (
						<NavLink
							href={`#${nav.name}`}
							showShadow={showShadow}
							key={index}
							className="capitalize"
						>
							{nav.icon}
							{nav.name}
						</NavLink>
					))}
				</nav>
			</Dialog>
		</header>
	);
};

export default Header;
