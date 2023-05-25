import { ReactNode, AnchorHTMLAttributes } from 'react';
import clsx from 'clsx';

export type NavLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
	children: ReactNode;
	showShadow?: boolean;
};

const NavLink = ({
	children,
	className,
	showShadow,
	...props
}: NavLinkProps) => {
	return (
		<a
			{...props}
			className={clsx(
				'lg:transition-transform duration-300 ease-in-out lg:hover:translate-y-[0.25rem] flex gap-3',
				className,
				showShadow && 'hover:text-primary-text'
			)}
		>
			{children}
		</a>
	);
};

export default NavLink;
