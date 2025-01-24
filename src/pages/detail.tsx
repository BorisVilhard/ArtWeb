import { useRouter } from 'next/router';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import InstagramIcon from '@/components/Icons/InstagramIcon';

const ImageDetail = () => {
	const router = useRouter();
	const { url, title, tags } = router.query;

	const [parsedTags, setParsedTags] = useState<string[]>([]);
	const magnifierRef = useRef<HTMLDivElement>(null);
	const imageRef = useRef<HTMLImageElement>(null);
	const [magnifierStyle, setMagnifierStyle] = useState({
		left: '0px',
		top: '0px',
		backgroundPosition: '0px 0px',
		display: 'none',
	});

	useEffect(() => {
		if (typeof tags === 'string') {
			setParsedTags(JSON.parse(tags));
		} else if (Array.isArray(tags)) {
			setParsedTags(tags);
		} else {
			setParsedTags([]);
		}
	}, [tags]);

	const imageUrl = Array.isArray(url) ? url[0] : url;
	const imageTitle = Array.isArray(title) ? title[0] : title;

	if (!imageUrl) return <div>Loading...</div>;

	const handleMouseMove = (e: React.MouseEvent) => {
		const magnifier = magnifierRef.current;
		const image = imageRef.current;

		if (!magnifier || !image) return;

		const { left, top, width, height } = image.getBoundingClientRect();
		const magnifierSize = 150;
		const mouseX = e.clientX - left;
		const mouseY = e.clientY - top;

		if (mouseX > width || mouseY > height || mouseX < 0 || mouseY < 0) {
			setMagnifierStyle((prev) => ({ ...prev, display: 'none' }));
			return;
		}

		const backgroundX = (mouseX / width) * 100;
		const backgroundY = (mouseY / height) * 100;

		setMagnifierStyle({
			left: `${mouseX - magnifierSize / 2}px`,
			top: `${mouseY - magnifierSize / 2}px`,
			backgroundPosition: `${backgroundX}% ${backgroundY}%`,
			display: 'block',
		});
	};

	const handleMouseLeave = () => {
		setMagnifierStyle((prev) => ({ ...prev, display: 'none' }));
	};

	return (
		<div className='container flex justify-center mx-auto w-full mt-[100px] py-10'>
			<div className='flex mx-2 flex-col md:flex-row gap-10'>
				<div
					className='relative'
					onMouseMove={handleMouseMove}
					onMouseLeave={handleMouseLeave}
				>
					<Image
						ref={imageRef}
						src={imageUrl}
						alt={imageTitle || 'Image'}
						width={450}
						height={250}
						layout='responsive'
						objectFit='cover'
						objectPosition='center'
						className='rounded-lg shadow-lg'
					/>
					<div
						ref={magnifierRef}
						className='magnifier'
						style={{
							position: 'absolute',
							width: '150px',
							height: '150px',
							borderRadius: '50%',
							border: '2px solid #000',
							backgroundImage: `url(${imageUrl})`,
							backgroundRepeat: 'no-repeat',
							backgroundSize: '800px 600px',
							pointerEvents: 'none',
							...magnifierStyle,
						}}
					></div>
				</div>
				<div className='flex flex-col'>
					<h1 className='text-3xl font-bold mt-6 md:mt-0'>{imageTitle}</h1>
					<div className='flex gap-3 flex-wrap mt-4'>
						{parsedTags.map((tag, i) => (
							<span
								key={i}
								className='bg-gray-200 text-black py-2 px-4 rounded-full text-sm font-medium'
							>
								{tag}
							</span>
						))}
					</div>
					<div className='mt-[35px]'>
						<h1 className='text-[13px] text-gray-600'>
							If interested, contact me via:
						</h1>
						<div className='flex items-center gap-5 mt-[10px]'>
							<div className='flex items-center gap-x-3 lg:gap-x-6'>
								<a
									href='https://www.instagram.com/j.vilhard/'
									className='flex items-center justify-center bg-[#464646] h-[34px] rounded-full aspect-square hover:bg-[#4379F5] duration-300'
								>
									<InstagramIcon />
								</a>
							</div>

							<h1 className='text-[13px] text-gray-600'>or</h1>
							<h1 className='text-[13px] text-gray-600'>vilhard@centrum.sk</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ImageDetail;
