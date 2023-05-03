import { FC } from 'react';
import ViewOne from '@/public/View 1.jpg';
import clsx from 'clsx';
import Image from 'next/image';

export type AboutProps = {
	className?: string;
};

const About: FC<AboutProps> = ({ className }: AboutProps) => {
	return (
		<div className={clsx('flex justify-between gap-6', className)}>
			<Image src={ViewOne} className="max-w-[50dvw] max-h-[500px]" alt="" />
			<h1 className="text-xl font-semibold">
				Welcome to summerfield where enjoying life is the only thing you think
				about
			</h1>
		</div>
	);
};

export default About;
