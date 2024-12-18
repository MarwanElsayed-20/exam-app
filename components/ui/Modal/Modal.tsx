import React from "react";
import CustomButton from "../Button/CustomButton";

type Props = {
	children: React.ReactNode;
	loading?: boolean;
	onSubmit?: boolean;
	submitBtnText?: string;
	cancelBtnText?: string;
	setOpenModal: (value: boolean) => void;
	onsubmit?: () => void;
	onCancel?: () => void;
	openModal?: boolean;
};

export default function Modal({ children, onSubmit, submitBtnText = "Start", loading, onsubmit, onCancel, cancelBtnText = "Cancel", openModal, setOpenModal }: Props) {
	return (
		<>
			{openModal && (
				<div className='fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center' onClick={() => setOpenModal(false)}>
					<div className='bg-white p-6 rounded-[20px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.25)] w-[50%]' onClick={(e) => e.stopPropagation()}>
						<div className='flex-col gap-12'>
							{children}
							<div className='flex gap-12'>
								{onSubmit && <CustomButton text={submitBtnText} type='button' className='!px-6 !py-[10px]' loading={loading} onClick={onsubmit} />}
								{onCancel && <CustomButton text={cancelBtnText} type='button' kind='secondary' className='!px-6 !py-[10px]' onClick={onCancel} />}
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
