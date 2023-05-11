import { FC } from 'react';
import About1 from '@/public/About1.jpg';
import About2 from '@/public/About2.jpg';
import About3 from '@/public/About3.jpg';
import About4 from '@/public/About4.jpg';
import About5 from '@/public/About5.jpg';
import About6 from '@/public/About6.jpg';
import clsx from 'clsx';
import Image from 'next/image';

export type AboutProps = {
	className?: string;
};

const About: FC<AboutProps> = ({ className }: AboutProps) => {
	return (
		<div className={clsx('flex flex-col gap-10 px-56', className)} id="about">
			<div className={clsx('flex flex-col gap-8')}>
				<span className="text-2xl font-bold text-secondary-text font-sans text-left">
					We offer our guests{' '}
					<span className="italic text-5xl font-serif text-primary">
						unique
					</span>{' '}
					rooms filled with{' '}
					<span className="italic text-5xl font-serif text-secondary">
						comfort
					</span>{' '}
					to ensure their stay can be the most{' '}
					<span className="italic text-5xl font-serif text-slate-600">
						relaxing
					</span>{' '}
					stay that they have ever{' '}
					<span className="italic text-5xl font-serif text-secondary-text">
						experienced
					</span>
				</span>

				<div className="grid grid-cols-3 place-items-center gap-8">
					<Image
						src={About1}
						className="col-span-1 rounded-3xl w-full aspect-square"
						alt=""
					/>
					<Image
						src={About2}
						className="col-span-2 rounded-3xl h-full"
						alt=""
					/>
				</div>
			</div>

			<div className="flex flex-col gap-8">
				<span className="text-3xl font-bold text-primary font-sans text-right">
					Our homestay is close to many{' '}
					<span className="italic text-5xl font-serif text-primary-text">
						attractions
					</span>{' '}
					to make it easy for guests to enjoy the{' '}
					<span className="italic text-5xl font-serif text-secondary-text">
						beautiful scenery
					</span>{' '}
					of the area.
				</span>

				<div className="grid grid-cols-7 place-items-center gap-8">
					<Image
						src={About3}
						className="col-span-5 rounded-3xl w-full h-full"
						alt=""
					/>
					<Image
						src={About4}
						className="col-span-2 rounded-3xl w-full h-full"
						alt=""
					/>
				</div>
			</div>

			<div className="flex flex-col gap-8">
				<span className="text-3xl font-bold text-secondary-text font-sans text-center">
					Our cafe offer a range of{' '}
					<span className="italic text-5xl font-serif text-secondary">
						delicious
					</span>{' '}
					and{' '}
					<span className="italic text-5xl font-serif text-primary">fresh</span>{' '}
					foods and beverages that are{' '}
					<span className="italic text-5xl font-serif text-secondary-text">
						healthy
					</span>{' '}
					and{' '}
					<span className="italic text-5xl font-serif text-slate-600">
						nutritious
					</span>{' '}
					for our customers
				</span>

				<div className="grid grid-cols-2 place-items-center gap-8">
					<Image
						src={About5}
						className="col-span-1 rounded-3xl h-full aspect-video"
						alt=""
					/>
					<Image
						src={About6}
						className="col-span-1 rounded-3xl w-full aspect-square"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
