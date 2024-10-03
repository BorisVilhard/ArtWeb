import { Image, images } from '@/config/data';
import RecipeCard from '@/views/Home/components/RecipeCard';
import { useRouter } from 'next/router';

const Market = () => {
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
		<div className='w-full mt-[150px] flex justify-center'>
			<div className='grid w-fit grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
				{images.map((e, i) => (
					<div
						key={i}
						onClick={() => handleCardClick(e)}
						className='cursor-pointer w-fit'
					>
						<RecipeCard imgSrc={e.url} title={e.title} tags={e.tags} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Market;
