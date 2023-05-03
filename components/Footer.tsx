import clsx from 'clsx';
import { FC } from 'react';

export type FooterProps = {
	className?: string;
};

const Footer: FC<FooterProps> = ({ className }: FooterProps) => {
	return (
		<footer className={clsx('flex justify-center items-center', className)}>
			<p className="text-lg font-semibold text-center">
				&copy; Summerfield Homestay & Cafe 2023
			</p>
		</footer>
	);
};

export default Footer;
