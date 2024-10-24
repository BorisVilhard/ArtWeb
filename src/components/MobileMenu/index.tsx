import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const MobileMenu = () => {
	const router = useRouter();
	const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

	const overlayClickHandler = (e: any) => {
		if (e.target.id === 'mobileMenuOverlay') {
			setIsOpenMobileMenu(false);
		}
	};

	const navLinks = [
		{ url: '/', label: 'Home' },
		{ url: '/market', label: 'Market' },
		{ url: '/biography', label: 'Biography' },
	];

	return (
		<div className='lg:hidden'>
			<button
				className='border border-[#E8E8E8] w-9 lg:w-11 aspect-square shrink-0 rounded-full flex items-center justify-center'
				onClick={() => setIsOpenMobileMenu(true)}
			>
				<svg
					stroke='currentColor'
					fill='currentColor'
					strokeWidth={0}
					viewBox='0 0 24 24'
					height='1.35em'
					width='1.35em'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path d='M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z' />
				</svg>
			</button>

			<div
				onClick={overlayClickHandler}
				id='mobileMenuOverlay'
				className={`fixed top-0 left-0 w-full h-screen bg-black/50 z-[9999999] duration-100 ${
					isOpenMobileMenu
						? 'opacity-100 pointer-events-auto'
						: 'opacity-0 pointer-events-none delay-300'
				}`}
			>
				<div
					className={`w-[75%] fixed top-0 bg-white h-screen duration-300 ${
						isOpenMobileMenu ? 'translate-x-0 delay-200' : '-translate-x-full'
					}`}
				>
					<div className='mt-4'>
						{navLinks.map((navLink, i) => (
							<Link
								className={`${
									router.pathname === navLink.url ? 'font-medium' : ''
								} relative block px-10 tracking-[0.105em] py-3 hover:bg-black/5`}
								href={navLink.url}
								onClick={() => setIsOpenMobileMenu(false)}
								key={i}
							>
								{navLink.label}
							</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default MobileMenu;
