import InstagramIcon from '@/components/Icons/InstagramIcon';
import { BioText } from '@/config/data';
import Image from 'next/image';

const Bio = () => {
	return (
		<div className='container flex justify-center mx-auto w-full mt-[100px] py-10'>
			<div className='flex items-center md:items-start mx-2 flex-col md:flex-row gap-10'>
				<div className='relative'>
					<Image
						src={'/img/profil.jpg'}
						alt={'Image'}
						width={450}
						height={350}
						objectFit='cover'
						objectPosition='center'
						className='rounded-lg shadow-lg'
					/>
				</div>
				<div className='flex flex-col'>
					<div className='mt-[35px] w-full mx-[10px] md:w-[40vw] gap-6 md:mt-[0] '>
						<h3 className='text-[20px] lg:text-[20px]'>
							Jozef Vilhard is an artist who has placed himself at the center of
							the contemporary art world through his unique approach to
							portraying horses. His sculptures and paintings celebrate not only
							the physical beauty of these noble animals but also capture their
							inner essence—elegance, strength, wisdom, and the gentle rhythm of
							their movement.
						</h3>
						<h3 className='text-[20px] lg:text-[20px]'>
							Each of his works represents a deep understanding of the anatomy
							and dynamics of the horse, combining technical perfection with
							emotional depth. In his drawings and paintings, Vilhard goes
							beneath the surface—his depictions of horses evoke a sense of
							playfulness and freedom, while his sculptures capture a moment
							frozen in time, allowing every tense tendon and graceful movement
							to be perceived.
						</h3>
						<h3 className='text-[20px] lg:text-[20px] '>
							His works are not only an aesthetic tribute to horses as symbols
							of power, beauty, and wisdom but also a manifestation of profound
							respect for their spirit. Vilhard's horse sculptures are often
							characterized by delicate lines that contrast with the robustness
							of the materials they are made from. This interplay between weight
							and lightness, strength and delicacy, makes his sculptures
							timeless and visually captivating.
						</h3>

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
