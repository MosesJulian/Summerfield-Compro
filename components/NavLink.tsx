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
				'transition-transform duration-300 ease-in-out hover:translate-y-[0.25rem]',
				className,
				showShadow && 'hover:text-primary-text'
			)}
		>
			{children}
		</a>
	);
};

export default NavLink;
