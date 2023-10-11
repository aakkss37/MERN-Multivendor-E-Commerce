import { AffortablePrices, DailySurpriseOffers, FreeShoping, SecurePayments } from "./Icons";
// navigation Data
export const navItems = [
	{
		title: "Home",
		url: "/",
	},
	{
		title: "Best Selling",
		url: "/best-selling",
	},
	{
		title: "Products",
		url: "/products",
	},
	{
		title: "Events",
		url: "/events",
	},
	{
		title: "FAQ",
		url: "/faq",
	},
];

// branding data

export const brandingData = [
	{
		id: 1,
		title: "Free Shipping",
		Description: "From all orders over 100$",
		icon: <FreeShoping />,
	},
	{
		id: 2,
		title: "Daily Surprise Offers",
		Description: "Save up to 25% off",
		icon: <DailySurpriseOffers />,
	},
	{
		id: 4,
		title: "Affortable Prices",
		Description: "Get Factory direct price",
		icon: <AffortablePrices />,
	},
	{
		id: 5,
		title: "Secure Payments",
		Description: "100% protected payments",
		icon: <SecurePayments />,
	},
];

// categories data
export const categoriesData = [
	{
		id: 1,
		title: "Computers and Laptops",
		subTitle: "",
		image_Url:
			"https://cdn.shopify.com/s/files/1/1706/9177/products/NEWAppleMacbookProwithM1ProChip14InchLaptop2021ModelMKGQ3LL_A_16GB_1TBSSD_custommacbd.jpg?v=1659592838",
	},
	{
		id: 2,
		title: "cosmetics and body care",
		subTitle: "",
		image_Url:
			"https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2021-07/kosme1.png",
	},
	{
		id: 3,
		title: "Accesories",
		subTitle: "",
		image_Url:
			"https://img.freepik.com/free-vector/ordering-goods-online-internet-store-online-shopping-niche-e-commerce-website-mother-buying-babies-clothes-footwear-toys-infant-accessories_335657-2345.jpg?w=2000",
	},
	{
		id: 4,
		title: "Cloths",
		subTitle: "",
		image_Url:
			"https://www.shift4shop.com/2015/images/industries/clothing/clothing-apparel.png",
	},
	{
		id: 5,
		title: "Shoes",
		subTitle: "",
		image_Url:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvBQPQMVNRd6TtDkGs2dCri0Y-rxKkFOiEWw&usqp=CAU",
	},
	{
		id: 6,
		title: "Gifts",
		subTitle: "",
		image_Url:
			"https://securecdn.pymnts.com/wp-content/uploads/2014/11/Gifts-Photo-700x489.jpg",
	},
	{
		id: 7,
		title: "Pet Care",
		subTitle: "",
		image_Url: "https://cdn.openpr.com/T/c/Tc15444071_g.jpg",
	},
	{
		id: 8,
		title: "Mobile and Tablets",
		subTitle: "",
		image_Url:
			"https://st-troy.mncdn.com/mnresize/1500/1500/Content/media/ProductImg/original/mpwp3tua-apple-iphone-14-256gb-mavi-mpwp3tua-637986832343472449.jpg",
	},
	{
		id: 9,
		title: "Music and Gaming",
		subTitle: "",
		image_Url:
			"https://static.vecteezy.com/system/resources/previews/011/996/555/original/3d-black-headphone-illustration-ecommerce-icon-png.png",
	},
	{
		id: 10,
		title: "Others",
		subTitle: "",
		image_Url:
			"https://searchspring.com/wp-content/uploads/2022/10/Hero-Image-Platform-Others-2.png",
	},
];

// product Data
export interface ImageType {
	public_id?: string;
	url?: string;
}
export interface ProductSailerType {
	name?: string;
	shop_avatar: ImageType,
	ratings?: string | number;
	category?: string;
}
export interface ReviewType {
	user: {
		name?: string;
		id?: string;
	};
	comment: string;
	rating: string | number;

}
export interface ProductDetailType {
	id: string;
	category?: string;
	name: string;
	description?: string;
	image_Url: ImageType[];
	shop: ProductSailerType;
	price?: string | number,
	discount_price?: string | number,
	rating?: string | number,
	total_sell?: string | number,
	stock?: string | number,
	reviews?: ReviewType[],
}

export const productData: ProductDetailType[] = [
	{
		id: "332fce92-7074-4dea-87ac-138383856fa4",
		category: "Computers and Laptops",
		name: "MacBook pro M2 chipset 256gb ssd 8gb ram space-gray color with apple 1 year warranty",
		description:
			"Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
		image_Url: [
			{
				public_id: "test",
				url: "https://www.istorebangladesh.com/images/thumbs/0000286_macbook-pro-m1_550.png",
			},
			{
				public_id: "test",
				url: "https://www.istorebangladesh.com/images/thumbs/0000286_macbook-pro-m1_550.png",
			},
		],
		shop: {
			name: "Apple inc.",
			shop_avatar: {
				public_id: "test",
				url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
			},
			ratings: 4.2,
		},
		price: 1099,
		discount_price: 1049,
		rating: 4,
		total_sell: 35,
		stock: 10,
	},
	{
		id: "17d18d9c-36da-4dc1-baa5-34f002646b15",
		category: "Mobile and Tablets",
		name: "Iphone 14 pro max 256 gb ssd and 8 gb ram silver colour",
		description:
			"Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
		image_Url: [
			{
				public_id: "test",
				url: "https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg",
			},
			{
				public_id: "test",
				url: "https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg",
			},
		],
		shop: {
			name: "Amazon Ltd",
			shop_avatar: {
				public_id: "test",
				url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
			},
			ratings: 4.2,
		},
		discount_price: 1099,
		rating: 5,
		total_sell: 80,
		stock: 10,
	},
	{
		id: "550a8c84-4876-4cee-b1f5-c1cbf7ef649d",
		category: "Computers and Laptop",
		name: "MacBook pro M2 chipset 256gb ssd 8gb ram space gray color with apple 1 year warranty",
		description:
			"Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
		image_Url: [
			{
				public_id: "test",
				url: "https://www.istorebangladesh.com/images/thumbs/0000286_macbook-pro-m1_550.png",
			},
			{
				public_id: "test",
				url: "https://www.istorebangladesh.com/images/thumbs/0000286_macbook-pro-m1_550.png",
			},
		],
		shop: {
			name: "Apple inc.",
			shop_avatar: {
				public_id: "test",
				url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
			},
			ratings: 4.2,
		},
		price: 1099,
		discount_price: 1049,
		rating: 4,
		total_sell: 75,
		stock: 10,
	},
	{
		id: "78175ea9-6c32-4c78-8b3f-bf6ea486a6fa",
		category: "Others",
		name: "New Fashionable Watch for men 2023 with multiple colors",
		description:
			"Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
		image_Url: [
			{
				public_id: "test",
				url: "https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1",
			},
			{
				public_id: "test",
				url: "https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1",
			},
		],
		shop: {
			name: "Shahriar Watch House",
			shop_avatar: {
				public_id: "test",
				url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
			},
			ratings: 4.2,
			category: "Others",
		},
		price: 100,
		discount_price: 79,
		rating: 4,
		total_sell: 12,
		stock: 10,
	},
	{
		id: "26f48337-d4ec-4a96-b689-65b52f2fcb77",
		category: "Shoes",
		name: "New Trend shoes for gents with all sizes",
		description:
			"Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
		image_Url: [
			{
				public_id: "test",
				url: "https://mirzacdns3.s3.ap-south-1.amazonaws.com/cache/catalog/RLV0015/2-800x800.jpg",
			},
			{
				public_id: "test",
				url: "https://mirzacdns3.s3.ap-south-1.amazonaws.com/cache/catalog/RLV0015/2-800x800.jpg",
			},
		],
		shop: {
			name: "Alisha Shoes Mart",
			shop_avatar: {
				public_id: "test",
				url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
			},
			ratings: 4.2,
		},
		price: 120,
		discount_price: 89,
		rating: 5,
		total_sell: 49,
		stock: 10,
	},
	{
		id: "365e92fe-57ae-4ec2-b73d-1fb5a5260a05",
		name: "Gaming Headphone Asus with mutiple color and free delivery",
		description:
			"Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
		image_Url: [
			{
				public_id: "test",
				url: "https://www.startech.com.bd/image/cache/catalog/headphone/havit/h763d/h763d-02-500x500.jpg",
			},
			{
				public_id: "test",
				url: "https://eratablet.com/wp-content/uploads/2022/08/H51ba6537405f4948972e293927673546u.jpg",
			},
		],
		shop: {
			name: "Asus Ltd",
			shop_avatar: {
				public_id: "test",
				url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
			},
			ratings: 4.2,
		},
		price: 300,
		discount_price: 239,
		rating: 4.5,
		reviews: [
			{
				user: {
					// user object will be here
				},
				comment: "IT's so cool!",
				rating: 5,
			},
		],
		total_sell: 20,
		stock: 10,
		category: "Music and Gaming",
	},
	{
		id: "5cd575ff-67b9-47aa-b262-bd920d21d237",
		name: "New Fashionable Watch for men 2023 with multiple colors",
		description:
			"Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
		image_Url: [
			{
				public_id: "test",
				url: "https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1",
			},
			{
				public_id: "test",
				url: "https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1",
			},
		],
		shop: {
			name: "Shahriar Watch House",
			shop_avatar: {
				public_id: "test",
				url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
			},
			ratings: 4.2,
		},
		price: 100,
		discount_price: 79,
		rating: 4,
		total_sell: 62,
		stock: 10,
	},
	{
		id: "eec4ebde-9585-4582-b5a7-062ebb874b36",
		name: "Gaming Headphone Asus with mutiple color and free delivery",
		description:
			"Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
		image_Url: [
			{
				public_id: "test",
				url: "https://www.startech.com.bd/image/cache/catalog/headphone/havit/h763d/h763d-02-500x500.jpg",
			},
			{
				public_id: "test",
				url: "https://eratablet.com/wp-content/uploads/2022/08/H51ba6537405f4948972e293927673546u.jpg",
			},
		],
		shop: {
			name: "Asus Ltd",
			shop_avatar: {
				public_id: "test",
				url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
			},
			ratings: 4.2,
		},
		price: 300,
		discount_price: 239,
		rating: 4.5,
		reviews: [
			{
				user: {
					// user object will be here
				},
				comment: "IT's so cool!",
				rating: 5,
			},
		],
		total_sell: 20,
		stock: 10,
	},
	{
		id: "e4a1e706-00ea-4d91-9195-c5c4772623b6",
		category: "Mobile and Tablets",
		name: "Iphone 14 pro max 256 gb ssd and 8 gb ram silver colour",
		description:
			"Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
		image_Url: [
			{
				public_id: "test",
				url: "https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg",
			},
			{
				public_id: "test",
				url: "https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg",
			},
		],
		shop: {
			name: "Amazon Ltd",
			shop_avatar: {
				public_id: "test",
				url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
			},
			ratings: 4.2,
		},
		discount_price: 1099,
		rating: 5,
		total_sell: 20,
		stock: 10,
	},
	{
		id: "010c149b-56b2-44b8-b0aa-13d33fa7889c",
		category: "Music and Gaming",
		name: "Gaming Headphone Asus with mutiple color and free delivery",
		description:
			"Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
		image_Url: [
			{
				public_id: "test",
				url: "https://www.startech.com.bd/image/cache/catalog/headphone/havit/h763d/h763d-02-500x500.jpg",
			},
			{
				public_id: "test",
				url: "https://eratablet.com/wp-content/uploads/2022/08/H51ba6537405f4948972e293927673546u.jpg",
			},
		],
		shop: {
			name: "Asus Ltd",
			shop_avatar: {
				public_id: "test",
				url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
			},
			ratings: 4.2,
		},
		price: 300,
		discount_price: 239,
		rating: 4.5,
		reviews: [
			{
				user: {
					// user object will be here
				},
				comment: "IT's so cool!",
				rating: 5,
			},
		],
		total_sell: 20,
		stock: 10,
	},
];

export const footerProductLinks = [
	{
		name: "About us",
		link: "/about",
	},
	{
		name: "Careers",
		link: "/carrers",
	},
	{
		name: "Store Locations",
	},
	{
		name: "Our Blog",
	},
	{
		name: "Reviews",
	},
];

export const footercompanyLinks = [
	{
		name: "Game & Video",
	},
	{
		name: "Phone &Tablets",
	},
	{
		name: "Computers & Laptop",
	},
	{
		name: "Sport Watches",
	},
	{
		name: "Events",
	},
];

export const footerSupportLinks = [
	{
		name: "FAQ",
	},
	{
		name: "Reviews",
	},
	{
		name: "Contact Us",
	},
	{
		name: "Shipping",
	},
	{
		name: "Live chat",
	},
];
