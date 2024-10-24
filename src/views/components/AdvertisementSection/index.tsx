import Link from 'next/link';

const AdvertisementSection = () => {
	return (
		<div className="bg-[url('/img/Jozef.jpg')] relative w-[80%] lg:w-[60%] h-[60vh] mx-auto mt-[46px] lg:mt-[86px] bg-cover bg-top bg-no-repeat rounded-2xl lg:rounded-[26px] py-10 px-[30px] lg:px-[65px] min-h-[40vh]">
			<div className='relative z-40 max-w-[548px] mr-auto h-full flex flex-col items-start'>
				<h3 className='text-[20px] lg:text-[30px] font-bold text-white'>
					The work of Jozef Vilhard is inspired by the beauty of the horse and
					the history of the origins of humanity, which he transforms into art.
				</h3>

				<Link href='/biography' legacyBehavior>
					<a className='__btn text-black flex items-center justify-center text-center bg-white mt-[30px]'>
						See More
					</a>
				</Link>
			</div>

			<div className='absolute left-0 top-0 z-0 h-full w-full bg-black opacity-10'></div>
		</div>
	);
};

export default AdvertisementSection;
