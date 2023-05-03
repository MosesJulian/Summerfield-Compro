import clsx from 'clsx';
import Image from 'next/image';
import { FC } from 'react';

export type IntroductionProps = {
	className?: string;
};

const Introduction: FC<IntroductionProps> = ({
	className,
}: IntroductionProps) => {
	return (
		<div
			className={clsx(
				'flex gap-4 introduction justify-center items-center',
				className
			)}
		>
			<div className="flex flex-col gap-10 px-36 py-12 max-w-[1000px]">
				<h1 className="text-6xl font-bold text-white flex gap-6">
					Unforgetable vacation without all the hassle
				</h1>
				<p className="text-xl text-white">
					Summerfield ensures your stay is as comfortable as possible. We offer
					guests a full range of amenities and services. With our dedicated
					staffs, your stay can be as relaxing or active as you want it to be.
				</p>
				<button className="rounded-full uppercase bg-secondary text-white text-center max-w-max p-4 font-semibold transition-colors duration-300 hover:bg-primary-text">
					Book your stay
				</button>
			</div>
		</div>
	);
};

export default Introduction;
