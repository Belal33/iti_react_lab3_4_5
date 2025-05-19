type Product = {
	id: number;
	title: string;
	description: string;
	price: number;
	availabilityStatus: string;
	brand: string;
	category: string;
	dimensions: {
		width: number;
		height: number;
		depth: number;
	};
	discountPercentage: number;
	images: string[];
	meta: {
		createdAt: string;
		updatedAt: string;
		barCode: string;
		qrCode: string;
	};
	minimumOrderQuantity: number;
	rating: number;
	returnPolicy: string;
	// reviews: (3) [{…}; {…}; {…}];
	stock: number;
	tags: string[];
	thumbnail: string;
	warrantyInformation: string;
	weight: number;
};

export type { Product };
