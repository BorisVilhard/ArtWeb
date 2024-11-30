import Link from 'next/link';
import { useRouter } from 'next/router';
import MobileMenu from '../MobileMenu';

const Header = () => {
	const router = useRouter();
	const navLinks = [
		{ url: '/', label: 'Home' },
		{ url: '/market', label: 'Market' },
		{ url: '/biography', label: 'Biography' },
	];
	return (
		<header className='fixed top-0 left-0 w-full z-50 py-4 lg:py-[21px] bg-white shadow-[0px_8px_40px_rgba(0,0,0,0.07)]'>
			<div className='__container'>
				<div className='flex justify-between items-center'>
					<h1 className='text-[30px]'>J.Vilhard</h1>

					<div className='flex items-center gap-3.5 lg:gap-5 cursor-pointer'>
						<nav className='flex items-center gap-[55px] font-roboto mr-10 max-lg:hidden'>
							{navLinks.map((navLink, i) => (
								<Link
									className={`${
										router.pathname === navLink.url ? 'font-medium' : ''
									} relative tracking-[0.105em]`}
									href={navLink.url}
									key={i}
								>
									{navLink.label}

									{router.pathname === navLink.url && (
										<div className='absolute -bottom-2 left-1/2 -translate-x-1/2'>
											<ActiveDot />
										</div>
									)}
								</Link>
							))}
						</nav>

						<MobileMenu />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;

const ActiveDot = () => {
	return (
		<svg
			width={7}
			height={8}
			viewBox='0 0 7 8'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<circle cx='3.41255' cy='4.10448' r='3.28169' fill='#09AB71' />
		</svg>
	);
};
