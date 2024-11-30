import FacebookIcon from '../Icons/FacebookIcon';
import InstagramIcon from '../Icons/InstagramIcon';
import TwitterIcon from '../Icons/TwitterIcon';

const social = [
	{ icon: <FacebookIcon />, href: 'https://www.facebook.com/vilart' },
	{ icon: <InstagramIcon />, href: 'https://www.instagram.com/j.vilhard/' },
];

const Footer = () => {
	return (
		<footer className='lg:pt-[70px] lg:pb-[63px] py-[40px] bg-[#1D1D1D] mt-[46px] lg:mt-[96px]'>
			<div className='__container grid grid-cols-1 lg:grid-cols-[530px,auto] gap-x-[154px]'>
				<div className='flex max-md:flex-col gap-y-[30px] gap-x-[90px] mt-10 lg:mt-0'>
					<div>
						<h3 className='text-xl lg:text-[26px]/[32px] text-white font-bold mb-3 lg:mb-6'>
							Contact us
						</h3>
						<div className='text-[#CECECE] font-roboto'>
							<p>Email: vilhard@centrum.sk</p>
							<p>Phone: (+421) 911 118 668</p>
						</div>
					</div>

					<div>
						<h3 className='text-xl lg:text-[26px]/[32px] text-white font-bold mb-3 lg:mb-6'>
							Follow us
						</h3>

						<div className='flex items-center gap-x-3 lg:gap-x-6'>
							{social.map(({ icon, href }, i) => (
								<a
									href={href}
									key={i}
									className='flex items-center justify-center bg-[#464646] h-[34px] rounded-full aspect-square hover:bg-[#4379F5] duration-300'
								>
									{icon}
								</a>
							))}
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
