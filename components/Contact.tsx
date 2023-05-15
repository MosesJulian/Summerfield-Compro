import clsx from 'clsx';
import { FC } from 'react';
import {
	AiOutlineInstagram,
	AiOutlineMail,
	AiOutlinePhone,
	AiOutlineWhatsApp,
} from 'react-icons/ai';

export type ContactProps = {
	className?: string;
};

const Contact: FC<ContactProps> = ({ className }: ContactProps) => {
	return (
		<div className={clsx('flex flex-col gap-8 px-56', className)} id="contact">
			<div className="text-2xl font-bold text-center">Contact Us</div>
			<div className="grid grid-cols-2 gap-8">
				<div className="col-span-1 grid justify-around items-center flex-col gap-8">
					<div className="flex gap-2 items-center">
						<AiOutlineInstagram size={40} className="text-pink-600" />
						<span className="text-xl font-semibold">@summerfieldbeach</span>
					</div>

					<div className="flex gap-2 items-center">
						<AiOutlineWhatsApp size={40} className="text-green-800" />
						<span className="text-xl font-semibold">+62 852-1166-2279</span>
					</div>

					<div className="flex gap-2 items-center">
						<AiOutlinePhone size={40} className="text-blue-600" />
						<span className="text-xl font-semibold">+62 852-1166-2279</span>
					</div>

					<div className="flex gap-2 items-center">
						<AiOutlineMail size={40} className="text-red-600" />
						<span className="text-xl font-semibold">
							summerfieldbeach@gmail.com
						</span>
					</div>
				</div>

				{/** Location using google maps */}
				<div className="col-span-1">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.679924752619!2d110.97260449999999!3d-8.234905399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7bddb4c559615b%3A0x92a65fbacd988772!2sSummerfield%20Homestay%20and%20Cafe!5e0!3m2!1sen!2sid!4v1684126416158!5m2!1sen!2sid"
						width="100%"
						height="100%"
						style={{ border: 0 }}
						allowFullScreen
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						className="h-full w-full rounded"
					/>
				</div>
			</div>
		</div>
	);
};

export default Contact;
