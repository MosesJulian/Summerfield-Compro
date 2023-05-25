import { Dialog, Transition } from '@headlessui/react';
import { FC, Fragment, ReactNode } from 'react';
import { RiCloseFill } from 'react-icons/ri';

interface DefaultDialogProps {
	title: ReactNode;
	children: ReactNode;
	isOpen: boolean;
	onClose: () => void;
}

const DefaultDialog: FC<DefaultDialogProps> = ({
	title,
	children,
	isOpen,
	onClose,
}: DefaultDialogProps) => {
	return (
		<Transition show={isOpen} as={Fragment}>
			<Dialog as="div" onClose={onClose}>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 z-50 bg-black/50" />
				</Transition.Child>

				<div className="fixed inset-0 z-50 flex items-center justify-center">
					<Transition.Child
						as={Fragment}
						enter="transform trasition ease-out lg:duration-300 duration-500"
						enterFrom="opacity-0 lg:scale-95 lg:translate-y-0 translate-y-full"
						enterTo="opacity-100 scale-100 translate-y-0"
						leave="ease-in lg:duration-200 duration-500"
						leaveFrom="opacity-100 scale-100 translate-y-0"
						leaveTo="opacity-0 lg:scale-95 lg:translate-y-0 translate-y-full"
					>
						<Dialog.Panel
							className="w-full max-w-md rounded-2xl
                       bg-white p-6 flex flex-col gap-5 text-left align-middle shadow-xl transition-all"
						>
							{/* Dialog Title */}
							<Dialog.Title
								as="h2"
								className="flex justify-between items-center gap-5 px-4 text-lg font-bold xs:text-2xl"
							>
								<span>{title}</span>

								<button type="button" title="Tutup" onClick={() => onClose()}>
									<RiCloseFill size={29} />
								</button>
							</Dialog.Title>

							{/* Contents */}
							<div className="max-h-[80vh] text-left" onClick={() => onClose()}>
								{children}
							</div>
						</Dialog.Panel>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition>
	);
};

export default DefaultDialog;
