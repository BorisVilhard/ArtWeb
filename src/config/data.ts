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
		url: '/img/pictures/painting1.jpg',
		title: 'Girl',
		tags: ['150x150cm', 'Acrylic', 'Valid'],
	},
	{
		url: '/img/pictures/painting3.jpg',
		title: 'Bukefalo',
		tags: ['110x145cm', 'Acrylic', 'Valid'],
	},
	{
		url: '/img/pictures/painting4.jpg',
		title: 'Swans',
		tags: ['150x150cm', 'Acrylic', 'Valid'],
	},
	{
		url: '/img/pictures/painting7.jpg',
		title: 'Africa',
		tags: ['125x140cm', 'Acrylic', 'Valid'],
	},
	{
		url: '/img/pictures/painting9.jpg',
		title: 'Together',
		tags: ['140x140cm', 'Acrylic', 'Valid'],
	},
	{
		url: '/img/pictures/painting11.jpg',
		title: 'White Horse',
		tags: ['150x200cm', 'Acrylic', 'Valid'],
	},
	{
		url: '/img/pictures/statue10.jpg',
		title: 'Horse (1.)',
		tags: ['177x67cm', 'Iron', '163cm length'],
	},
	{
		url: '/img/pictures/statue11.jpg',
		title: 'Horse (2.)',
		tags: ['Iron'],
	},
	{
		url: '/img/pictures/statue14.jpg',
		title: 'horse (3.)',
		tags: ['172,5x43cm', 'Iron', '120.5cm length'],
	},
	{
		url: '/img/pictures/statue16.jpg',
		title: 'Horse (4.)',
		tags: ['Iron'],
	},
	{
		url: '/img/pictures/goat2.png',
		title: 'Goat',
		tags: ['Concrete', 'Iron'],
	},
	{
		url: '/img/pictures/statue13.jpg',
		title: 'Acrobat',
		tags: ['Concrete', 'Wood'],
	},
	{
		url: '/img/pictures/statueHero.jpg',
		title: 'Abstract',
		tags: ['94x54cm', 'Iron', 'Concrete'],
	},
	{
		url: '/img/pictures/statue17.jpg',
		title: 'Black',
		tags: ['178x60cm', 'Colored Iron'],
	},
	{
		url: '/img/pictures/idk2.jpg',
		title: 'Energies',
		tags: ['80x14cm', '80cm length', 'Colored Iron', 'Concrete'],
	},
];

export const BioText = `
JOZEF VILHARD, born on June 10, 1970, in Olomouc.
He works and creates in Zlaté Moravce.
He has studied at the Georgi Stojanov private atelier in Bulgaria.

Man and the portrayal of the noble beauty of a horse have become the principal themes in Jozef Vilhard’s creations. He demonstrates, not only in drawing but also in painting, their noble beauty, rhythm of body, playfulness, and wisdom.

For the artist, the subject of a woman represents the phenomenon of rebirth and the continuation of human civilization. He reveres her as a being who carries the message of life and love within her.

His works are presented not only in Slovak galleries but also in private collections in Slovakia and abroad, including in France, Italy, Germany, Australia, Canada, and the USA. An honor for the young artist was having his work purchased for the private collection of Pope John Paul II.

Thanks to his talent and creative efforts, Jozef Vilhard is recognized as one of the leading Slovak artists with international acclaim.

Mgr. Marta Hučková
Art Historian of the Nitra Gallery
`;
