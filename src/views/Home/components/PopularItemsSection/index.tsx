import ArrowLeft from '@/components/Icons/ArrowLeft';
import ArrowRight from '@/components/Icons/ArrowRight';

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import RecipeCard from '../RecipeCard';
import { images, Image } from '@/config/data';
import { useRouter } from 'next/router';

const PopularItemsSection = () => {
	const router = useRouter();

	const handleCardClick = (image: Image) => {
		router.push({
			pathname: '/detail',
			query: {
				url: image.url,
				title: image.title,
				tags: JSON.stringify(image.tags),
			},
		});
	};

	return (
		<section className='mt-[46px] lg:pt-16'>
			<div className='mt-3 lg:mt-[25px] relative'>
				<Swiper
					modules={[Navigation]}
					navigation={{
						prevEl: '#prevNav',
						nextEl: '#nextNav',
					}}
					slidesPerView={'auto'}
					className='!pb-10'
					loop
					breakpoints={{
						0: {
							spaceBetween: 18,
						},
						640: {
							spaceBetween: 20,
						},
						768: {
							spaceBetween: 27,
						},
					}}
				>
					{images.map((recipe, i) => (
						<SwiperSlide className='!w-fit m' key={i}>
							<div
								className='cursor-pointer'
								onClick={() => handleCardClick(recipe)}
							>
								<RecipeCard
									imgSrc={recipe.url}
									title={recipe.title}
									tags={recipe.tags}
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>

				<div className='absolute top-0 left-0 w-12 h-full from-white pointer-events-none to-transparent bg-gradient-to-r z-10'></div>
				<div className='absolute top-0 right-0 w-12 h-full from-white pointer-events-none to-transparent bg-gradient-to-l z-10'></div>

				<button
					id='prevNav'
					className='absolute z-[12] rounded-full top-[calc(50%-40px)] -translate-y-1/2 left-5 max-lg:scale-90 lg:left-10 flex items-center justify-center w-[46px] h-[46px] bg-black'
				>
					<ArrowLeft />
				</button>
				<button
					id='nextNav'
					className='absolute z-[12] rounded-full top-[calc(50%-40px)] -translate-y-1/2 right-5 max-lg:scale-90 lg:right-10 flex items-center justify-center w-[46px] h-[46px] bg-black'
				>
					<ArrowRight />
				</button>
			</div>
		</section>
	);
};

export default PopularItemsSection;
