import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { useRef, useState } from 'react';

const picture = [
	{
		title: 'Abstract',
		url: 'statueHero.jpg',
		tags: ['90x54cm', 'Concrete', 'Iron'],
	},
	{
		url: 'Afrika2.jpg',
		title: 'Africa',
		tags: ['125x140cm', 'Acrylic', 'Valid'],
	},
	{
		url: 'Kone.jpg',
		title: 'Horses',
		tags: ['200x150cm', 'Acrylic', 'Valid'],
	},
	{
		url: 'Nebo.jpg',
		title: 'Heaven',
		tags: ['110x130cm', 'Acrylic', 'Valid'],
	},
	{
		url: 'dance.jpg',
		title: 'Dance in Rain',
		tags: ['185x150 cm', 'Acrylic', 'Valid'],
	},
];

const HeroSection = () => {
	const progressContent = useRef(null);
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<div className='relative flex justify-center mt-[100px] mx-auto w-full'>
			<div className='w-[95%] lg:w-[75%]'>
				<Swiper
					spaceBetween={30}
					centeredSlides={true}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					navigation={true}
					onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
					modules={[Autoplay, Pagination, Navigation]}
					className='mySwiper'
				>
					{picture.map((pic, i) => (
						<SwiperSlide key={i}>
							<div
								style={{
									backgroundImage: `url('/img/paintings/${pic.url}')`,
								}}
								className='w-full lg:w-full  h-[70vh] rounded-[20px] bg-full bg-no-repeat bg-center bg-cover'
							></div>
						</SwiperSlide>
					))}
				</Swiper>

				<div className='absolute inset-0 h-full z-10 lg:flex lg:flex-col lg:justify-center'>
					<div className='w-full h-full flex justify-center'>
						<div className='flex flex-col items-center h-full w-full max-md:pt-[30%] justify-center relative'>
							<div
								style={{
									background:
										'linear-gradient(96.99deg, rgba(255, 255, 255, 0.79) -11.18%, rgba(255, 255, 255, 0.38) 110.5%)',
								}}
								className='absolute bottom-2  w-[307px] flex flex-col justify-center pl-7 pr-5 h-[155px] rounded-2xl backdrop-blur-[12.5px]'
							>
								<div>
									<div className='flex items-center gap-4'>
										<p className='text-[22px]/[26px] font-bold font-roboto'>
											{picture[activeIndex].title}
										</p>
									</div>

									<div className='flex gap-3 flex-wrap mt-[22px]'>
										{picture[activeIndex].tags.map((tag, index) => (
											<div
												key={index}
												className='h-[29px] flex bg-[#ebeef5] px-[14px] text-xs font-roboto font-medium items-center justify-center rounded-full text-black'
											>
												{tag}
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
