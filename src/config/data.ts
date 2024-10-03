// Define the type for a single image
export type Image = {
	url: string;
	title: string;
	tags: string[];
};

// Define the type for an array of images
export type Images = Image[];

// Export the images array with proper type
export const images: Images = [
	{
		url: '/img/pictures/painting2.jpg',
		title: 'Chicken',
		tags: ['150x150cm', 'Acrylic', 'Valid'],
	},
	{
		url: '/img/pictures/painting3.jpg',
		title: 'Horse',
		tags: ['110x145cm', 'Acrylic', 'Valid'],
	},
	{
		url: '/img/pictures/painting5.jpg',
		title: 'Statue',
		tags: ['Iron'],
	},
	{
		url: '/img/pictures/painting6.jpg',
		title: 'Abstract',
		tags: ['Art', 'Acrylic', 'Valid'],
	},
	{
		url: '/img/pictures/statue4.jpg',
		title: 'Statue',
		tags: ['Iron', 'Wood', 'Valid'],
	},
	{
		url: '/img/pictures/statue5.jpg',
		title: 'Horse',
		tags: ['Iron'],
	},
	{
		url: '/img/pictures/statue6.jpg',
		title: 'Horse',
		tags: ['172x43cm', 'Iron'],
	},
	{
		url: '/img/pictures/statue7.jpg',
		title: 'Statue',
		tags: ['Iron'],
	},
	{
		url: '/img/pictures/statue8.jpg',
		title: 'Horse',
		tags: ['Iron'],
	},
	{
		url: '/img/pictures/statue9.jpg',
		title: 'Abstract',
		tags: ['150x150cm', 'Acrylic', 'valid'],
	},
	{
		url: '/img/pictures/statue11.jpg',
		title: 'Horse',
		tags: ['Iron'],
	},
	{
		url: '/img/pictures/statue12.jpg',
		title: 'Goat',
		tags: ['Concrete', 'Iron'],
	},
	{
		url: '/img/pictures/statue13.jpg',
		title: 'Acrobat',
		tags: ['Concrete', 'Wood'],
	},
	{
		url: '/img/pictures/statue14.jpg',
		title: 'Horse',
		tags: ['Iron'],
	},
	{
		url: '/img/pictures/statueHero.jpg',
		title: 'Abstract',
		tags: ['94x54cm', 'Iron', 'Concrete'],
	},
	{
		url: '/img/pictures/statueHero2.jpg',
		title: 'Horse',
		tags: ['177x67cm', 'Iron'],
	},
	{
		url: '/img/pictures/statueHero3.jpg',
		title: 'Creators',
		tags: ['77.5x15.5cm', 'Concrete', 'Wood'],
	},
];
