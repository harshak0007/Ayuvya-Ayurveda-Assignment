import React from 'react';
import styles from '../styles/Thumb.module.css';

interface ThumbProps {
	isFor: string;
	filled: boolean;
}
const Thumb: React.FC<ThumbProps> = ({ isFor, filled }) => {
	switch (isFor) {
		case 'yes':
			return (
				<svg
					className={`${filled ? styles.animatingYes : ''}`}
					version='1.1'
					x='0px'
					y='0px'
					viewBox='0 0 48 60'
					width='40'
					height='40'
					enableBackground='new 0 0 48 48'
					xmlns='http://www.w3.org/2000/svg'
					xmlnsXlink='http://www.w3.org/1999/xlink'
					xmlSpace='preserve'>
					<path
						className={filled ? 'fill-green-400 stroke-green-500 ' : ''}
						fill='rgba(211, 211, 211, 0.788)'
						stroke='rgba(182, 182, 182, 0.753)'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='1.5'
						d='M41.78,30.42c2.54-2.03,1.09-4.26,0.12-5.33c-0.34-0.38-0.45-0.99-0.22-1.44c3.46-7.1-9.05-5.78-12.59-5.28  c-0.5,0.07-0.62-0.15-0.27-0.52c8.37-9.07-0.17-17.25-2.09-12.4c-2.93,7.41-9.63,13.48-11.83,15.33c-0.39,0.33-0.71,0.99-0.71,1.5  v17.7c0,0.51,0.41,0.92,0.92,0.95c2.81,0.16,4.95,1.04,6.05,1.58c0.45,0.23,1.19,0.58,1.69,0.7C26.07,44,31.05,44,31.05,44  c11.6,0,10.82-4.02,9.95-5.75c-0.23-0.45-0.14-1,0.24-1.34c2.32-2.04,1.22-4.21,0.4-5.28C41.33,31.22,41.38,30.73,41.78,30.42z   M9.88,20.31H5.72c-0.51,0-0.92,0.41-0.92,0.92v20.92c0,0.51,0.41,0.92,0.92,0.92h4.16c0.51,0,0.92-0.41,0.92-0.92V21.24  C10.8,20.73,10.39,20.31,9.88,20.31z'
					/>
				</svg>
			);
		case 'no':
			return (
				<svg
					className={`rotate-[180deg] ${filled ? styles.animatingNo : ''}`}
					version='1.1'
					x='0px'
					y='0px'
					viewBox='0 0 48 60'
					width='40'
					height='40'
					enableBackground='new 0 0 48 48'
					xmlns='http://www.w3.org/2000/svg'
					xmlnsXlink='http://www.w3.org/1999/xlink'
					xmlSpace='preserve'>
					<path
						className={`hover:fill-[rgba(211, 211, 211, 0.9)] ${
							filled ? 'fill-orange-400 stroke-orange-500 ' : ''
						}`}
						fill='rgba(211, 211, 211, 0.788)'
						stroke='rgba(182, 182, 182, 0.753)'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='1.5'
						d='M41.78,30.42c2.54-2.03,1.09-4.26,0.12-5.33c-0.34-0.38-0.45-0.99-0.22-1.44c3.46-7.1-9.05-5.78-12.59-5.28  c-0.5,0.07-0.62-0.15-0.27-0.52c8.37-9.07-0.17-17.25-2.09-12.4c-2.93,7.41-9.63,13.48-11.83,15.33c-0.39,0.33-0.71,0.99-0.71,1.5  v17.7c0,0.51,0.41,0.92,0.92,0.95c2.81,0.16,4.95,1.04,6.05,1.58c0.45,0.23,1.19,0.58,1.69,0.7C26.07,44,31.05,44,31.05,44  c11.6,0,10.82-4.02,9.95-5.75c-0.23-0.45-0.14-1,0.24-1.34c2.32-2.04,1.22-4.21,0.4-5.28C41.33,31.22,41.38,30.73,41.78,30.42z   M9.88,20.31H5.72c-0.51,0-0.92,0.41-0.92,0.92v20.92c0,0.51,0.41,0.92,0.92,0.92h4.16c0.51,0,0.92-0.41,0.92-0.92V21.24  C10.8,20.73,10.39,20.31,9.88,20.31z'
					/>
				</svg>
				// <svg
				// 	xmlns='http://www.w3.org/2000/svg'
				// 	data-name='Layer 1'
				// 	className={`scale-x-[-1] bg-red-500 grid ${
				// 		filled ? styles.animating : ''
				// 	}`}
				// 	onClick={onClick}
				// 	version='1.1'
				// 	x='0px'
				// 	y='0px'
				// 	viewBox='0 0 48 60'
				// 	width='40'
				// 	height='40'
				// 	enableBackground='new 0 0 48 48'>
				// 	<path
				// 		className={`${filled ? 'fill-blue-500 ' : ''}`}
				// 		fill='rgba(211, 211, 211, 0.788)'
				// 		stroke='rgba(182, 182, 182, 0.753)'
				// 		strokeLinecap='round'
				// 		strokeLinejoin='round'
				// 		strokeWidth='1.5'
				// 		d='m87.246,46.042c1.134-2.309,1.438-4.633.851-6.62-.487-1.651-1.583-3.048-3.193-4.083,1.87-6.049-.495-9.321-3.207-11.069,1.275-4.082-.1-7.395-4.013-9.62-.136-.077-.286-.124-.441-.139-21.303-1.979-28.952-.17-38.635,2.122-1.57.371-3.189.753-4.927,1.135v-.101c0-1.573-1.279-2.852-2.852-2.852H13.309c-1.573,0-2.852,1.279-2.852,2.852v35.038c0,1.573,1.279,2.852,2.852,2.852h17.522c1.101,0,2.047-.634,2.523-1.55,9.73,6.85,11.936,12.564,14.052,18.096.415,1.086.845,2.207,1.324,3.321.54,3.171.534,6.073-.017,8.867-.106.538.201,1.073.72,1.251,1.538.529,2.952.794,4.24.794,2.059,0,3.793-.676,5.18-2.025,4.967-4.829,3.662-17.171,2.034-23.65,4.561.707,9.239.853,13.633.42,5.246-.517,9.831-1.851,13.257-3.857.177-.104.322-.255.418-.438,2.099-4.002,1.719-8.035-.949-10.745Zm-55.761,6.663c0,.355-.3.655-.655.655H13.309c-.355,0-.655-.3-.655-.655V17.667c0-.355.3-.655.655-.655h17.522c.355,0,.655.3.655.655v35.038Zm54.904,2.783c-6.289,3.536-16.765,4.605-26.824,2.719-.379-.071-.768.062-1.024.35s-.342.69-.227,1.058c1.797,5.738,3.413,18.838-.993,23.122-1.479,1.438-3.54,1.77-6.282,1.007.434-2.799.379-5.697-.167-8.824-.015-.085-.04-.169-.074-.248-.481-1.11-.898-2.2-1.34-3.354-2.303-6.018-4.702-12.241-15.775-19.755v-31.547c1.935-.42,3.714-.839,5.433-1.246,9.451-2.236,16.924-4.004,37.685-2.094,3.077,1.831,3.884,4.277,2.539,7.679-.206.52.013,1.112.507,1.374,3.558,1.887,4.415,4.981,2.699,9.738-.187.519.039,1.096.53,1.349,1.537.793,2.518,1.879,2.916,3.227.481,1.631.102,3.65-1.066,5.687-.267.465-.159,1.054.254,1.394,3.399,2.802,1.955,6.821,1.21,8.363Z'
				// 	/>
				// </svg>
			);
		default:
			return <></>;
	}
};

export default Thumb;