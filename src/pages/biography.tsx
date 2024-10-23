import InstagramIcon from '@/components/Icons/InstagramIcon';
import { BioText } from '@/config/data';
import Image from 'next/image';

const Bio = () => {
	return (
		<div className='container flex justify-center mx-auto w-full mt-[100px] py-10'>
			<div className='flex mx-2 flex-col md:flex-row gap-10'>
				<div className='relative'>
					<Image
						src={'/img/Jozef.jpg'}
						alt={'Image'}
						width={450}
						height={350}
						objectFit='cover'
						objectPosition='center'
						className='rounded-lg shadow-lg'
					/>
				</div>
				<div className='flex flex-col'>
					<div className='mt-[35px] md:mt-[0]'>
						<h1 className='max-w-[45vw] text-[25px] text-gray-600'>
							{BioText}
						</h1>

						<div className='flex items-center gap-5 mt-[30px]'>
							<div className='flex items-center gap-x-3 lg:gap-x-6'>
								<a
									href='https://www.instagram.com/j.vilhard/'
									className='flex items-center justify-center bg-[#464646] h-[34px] rounded-full aspect-square hover:bg-[#4379F5] duration-300'
								>
									<InstagramIcon />
								</a>
							</div>

							<h1 className='text-[13px] text-gray-600'>vilart@centrum.sk</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Bio;
