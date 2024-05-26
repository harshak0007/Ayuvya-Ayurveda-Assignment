import React, { useState } from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../../public/submit.json';

const LottieControl = ({ isSubmitted }: { isSubmitted: boolean }) => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	};

	return (
		<div
			className={` my-[35%] w-full ${
				isSubmitted ? 'min-[430px]:my-[15%]' : ''
			}`}>
			<Lottie
				options={defaultOptions}
				height={200}
				width={200}
			/>
			<h2 className='font-bold text-center text-black/75'>
				Thank you for your valuable
				<br /> feedback!
			</h2>
		</div>
	);
};

export default LottieControl;
