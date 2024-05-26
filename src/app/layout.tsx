import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
	title: 'Feedback - Ayuvya',
	description: 'Created by Harshak Saini',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			className='h-dvh w-full'
			lang='en'>
			<body
				className={`w-full h-full grid place-items-center ${poppins.className}`}>
				{children}
			</body>
		</html>
	);
}
