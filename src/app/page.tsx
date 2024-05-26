// pages/index.tsx
'use client';
import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import 'remixicon/fonts/remixicon.css';
import Star from '../components/Star';
import Thumb from '@/components/Thumb';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ThanksGiving from '@/components/ThanksGiving';

const Main = () => {
	const [communicationRating, setCommunicationRating] = useState<number>(0);
	const [safetyRating, setSafetyRating] = useState<number>(0);
	const [recommend, setRecommend] = useState<'yes' | 'no' | null>(null);
	const [praise, setPraise] = useState<string>('');
	const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
	const [isClosed, setIsClosed] = useState<boolean>(true);

	const handleStarClick = (
		setRating: React.Dispatch<React.SetStateAction<number>>,
		rating: number
	) => {
		console.log(communicationRating);
		setRating(rating);
	};

	const handleRecommendClick = (recommendation: 'yes' | 'no') => {
		setRecommend(recommendation);
	};

	return (
		<main className='size-full min-h-screen min-w-[290px] flex flex-col'>
			{isSubmitted ? (
				<button
					type='button'
					className={`px-3 py-1 m-auto  bg-blue-300 rounded-md text-md hover:bg-blue-400 active:bg-blue-500   ${
						isClosed ? 'block' : 'hidden'
					}`}>
					Back to Home page
				</button>
			) : (
				<button
					type='button'
					className={`px-3 py-1 m-auto  bg-blue-300 rounded-md text-md hover:bg-blue-400 active:bg-blue-500   ${
						isClosed ? 'block' : 'hidden'
					}`}
					onClick={() => setIsClosed(false)}>
					Feedback
				</button>
			)}
			<div
				className={`feedback-modal min-[420px]:m-auto max-w-[400px] min-[430px]:w-[80%] rounded-md border-dotted  ${
					isSubmitted ? '' : 'border min-[430px]:shadow-lg min-[430px]:my-8'
				} ${isClosed ? 'hidden' : 'none'}`}>
				<button
					type='button'
					className='text-3xl px-2 py-1 block ml-auto'
					onClick={() => setIsClosed(true)}>
					&times;
				</button>
				{!isSubmitted ? (
					<section className='feedback-form p-3 pt-0 w-full '>
						<div className='header flex justify-between items-center border-b pb-4 px-2'>
							<img
								className='h-[28px] min-[420px]:w-[30%]'
								src='https://ayuvya.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fayuvya_images%2Fproduct_image%2Fayuvyablack_logo_17april2024_2.webp&w=128&q=75'
								alt='Ayuvya ayurveda logo'
							/>
							<h1 className='font-bold text-xl text-black/70'>Your Feedback</h1>
						</div>
						<p className='text-center text-sm mt-4'>
							Help us improve your experience
						</p>
						<div className='mt-5 pb-6 px-2 border-b '>
							<h2 className='font-bold'>Safety</h2>
							<p className='text-gray-500 text-xs'>
								How safe did you feel with Trausti?
							</p>
							<ul className='flex flex-nowrap text-center w-full justify-center mt-3'>
								{[...Array(5)].map((_, index) => (
									<li key={index}>
										<Star
											filled={index < safetyRating}
											onclick={() =>
												handleStarClick(setSafetyRating, index + 1)
											}
										/>
									</li>
								))}
							</ul>
						</div>
						<div className='mt-5 pb-6 px-2 border-b '>
							<h2 className='font-bold'>Communication</h2>
							<p className='text-gray-500 text-xs'>
								How easy was to communicate with Trausti?
							</p>
							<ul className='flex flex-nowrap text-center w-full justify-center mt-3'>
								{[...Array(5)].map((_, index) => (
									<li key={index}>
										<Star
											filled={index < communicationRating}
											onclick={() =>
												handleStarClick(setCommunicationRating, index + 1)
											}
										/>
									</li>
								))}
							</ul>
						</div>
						<div className='mt-5 pb-6 px-2 border-b'>
							<h2 className='font-bold'>Would you recommend Trausti?</h2>
							<p className='text-gray-500 text-xs'>
								Your opinion won't be posted publicly
							</p>
							<div className='flex justify-center items-center p-2 gap-x-6 mt-3'>
								<div className='flex'>
									<input
										className='appearance-none'
										type='radio'
										name='recommend'
										value='yes'
										id='recommend-yes'
									/>
									<label
										htmlFor='recommend-yes'
										className='flex gap-x-1 items-center text-sm cursor-pointer'
										onClick={() => setRecommend('yes')}>
										<Thumb
											filled={recommend === 'yes'}
											isFor='yes'
										/>{' '}
										Yes
									</label>
								</div>
								<div className='flex'>
									<input
										className='appearance-none'
										type='radio'
										name='recommend'
										value='no'
										id='recommend-no'
									/>
									<label
										htmlFor='recommend-no'
										className='flex gap-x-2 items-center text-sm cursor-pointer'
										onClick={() => setRecommend('no')}>
										<Thumb
											filled={recommend === 'no'}
											isFor='no'
										/>{' '}
										No
									</label>
								</div>
							</div>
						</div>
						<div className='mt-5 pb-6 px-2 border-b py-5 border-gray-300'>
							<h2 className='font-bold'>Praise</h2>
							<p className='text-sm font-sans text-gray-500'>
								What traits best describe Trausti?
							</p>
							<div className='text-sm py-4 flex gap-2 items-center flex-wrap'>
								{['Adventurous', 'Clean', 'Good Listener'].map(item => (
									<span
										key={item}
										className={`py-2 px-3 min-w-max  rounded-3xl transition ease-in-out delay-150 border  duration-100 cursor-pointer ${
											praise === item.toLowerCase()
												? 'bg-blue-400/85 border-blue-600'
												: 'bg-gray-200 border-gray-400'
										}`}
										onClick={() => setPraise(item.toLowerCase())}>
										{item}
									</span>
								))}
							</div>
						</div>
						<div className='mt-5 pb-6 px-2 border-b'>
							<Accordion
								className='shadow-none min-h-max'
								style={{ boxShadow: 'none' }}>
								<AccordionSummary
									style={{ paddingInline: 0 }}
									className='font-bold px-0'
									expandIcon={<ExpandMoreIcon />}>
									Add a detailed feedback
								</AccordionSummary>
								<AccordionDetails style={{ padding: 0 }}>
									<textarea
										className='text-sm border-dotted border rounded-md p-1 w-full h-full outline-none'
										name='detailed-feedback'
										id='feedback'
										rows={5}
										placeholder='Tell us about your experience...'></textarea>
								</AccordionDetails>
							</Accordion>
						</div>
						<button
							className='w-full py-2 mt-8 font-semibold border border-black rounded-lg cursor-pointer break-words bg-black text-white hover:bg-black/90 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:border-white disabled:text-gray-500 '
							type='submit'
							onClick={() => setIsSubmitted(prev => !prev)}>
							Submit
						</button>
					</section>
				) : (
					<ThanksGiving isSubmitted={isSubmitted} />
				)}
			</div>
		</main>
	);
};

export default Main;
