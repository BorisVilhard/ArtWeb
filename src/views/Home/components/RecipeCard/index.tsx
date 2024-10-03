import { RecipeCardProps } from '@/config/types';
import Image from 'next/image';

const RecipeCard = ({ imgSrc, tags, title }: RecipeCardProps) => {
	return (
		<div className='bg-white w-[300px]  md:w-[263px] rounded-[20px] shadow-[0px_11px_41px_rgba(0,0,0,0.08)] overflow-hidden relative'>
			<div className='p-[13.5px] pb-0'>
				<div className='rounded-2xl overflow-hidden bg-black relative'>
					<div className='relative h-[250px]  md:h-[198px] w-auto '>
						<Image
							src={imgSrc}
							alt='recipe-1'
							layout='fill'
							objectFit='cover'
						/>
					</div>
				</div>
			</div>

			<div className='mt-4 px-[17px] pb-6'>
				<h3 className='mt-2.5 text-[19px]/[23px] font-medium font-roboto'>
					{title}
				</h3>
				<div className='flex gap-1 flex-wrap mt-[13px]'>
					{tags.map((tag, i) => (
						<a
							href='#'
							className='h-[29px] flex bg-[#ebeef5] px-[14px] text-xs font-roboto font-medium items-center justify-center rounded-full text-black'
							key={i}
						>
							{tag}
						</a>
					))}
				</div>
			</div>
		</div>
	);
};

export default RecipeCard;
