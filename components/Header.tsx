'use client';

import useWindowEvent from '@/hooks/useWindowEvent';
import { FC, useEffect, useState } from 'react';
import clsx from 'clsx';
import NavLink from './NavLink';
import Image from 'next/image';
import Summerfield from '@/public/summerfield.png';

const shouldShowShadow = () => {
	if (window == null) return false;

	const show: number = 50;
	return window.scrollY > show;
};

const Header: FC = () => {
	const [showShadow, setShowShadow] = useState<boolean>(false);

	const handleScroll = () => {
		setShowShadow(shouldShowShadow());
	};

	useEffect(handleScroll, []);
	useWindowEvent('scroll', handleScroll);

	return (
		<header
			className={clsx(
				'flex gap-2 justify-between top-0 fixed inset-x-0 px-36 py-4 transition-colors duration-500 z-20',
				!showShadow && 'text-white',
				showShadow && 'backdrop-blur-md bg-white/80 shadow'
			)}
		>
			<div className="flex gap-5 items-center justify-start">
				<Image
					src={Summerfield}
					width={50}
					height={50}
					alt="Summerfield"
					className="rounded-full"
				/>
				<h1 className="text-xl font-bold">Summerfield</h1>
			</div>

			<nav className="flex justify-end font-semibold text-lg gap-10 items-center">
				<NavLink href="#home" showShadow={showShadow}>
					Home
				</NavLink>
				<NavLink href="#home" showShadow={showShadow}>
					About
				</NavLink>
				<NavLink href="#home" showShadow={showShadow}>
					Contact
				</NavLink>
			</nav>
		</header>
	);
};

export default Header;
