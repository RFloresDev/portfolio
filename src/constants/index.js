import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	cientifica,
	docker,
	upwork,
	socialties,
	carrent,
	jobit,
	tripguide,
	threejs,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Web Developer",
		icon: web,
	},
	{
		title: "React Developer",
		icon: mobile,
	},
	{
		title: "Backend Developer",
		icon: backend,
	},
	{
		title: "Content Creator",
		icon: creator,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "docker",
		icon: docker,
	},
];

const experiences = [
	{
		title: "Full Stack Developer",
		company_name: "Upwork",
		icon: upwork,
		iconBg: "#E6DEDD",
		date: "Sep 2019 - Present",
		points: [
			"Developing and maintaining web applications using the MERN stack and WordPress.",
			"Working with international clients to design and optimize sales funnels in GoHighLevel.",
			"Implementing SEO strategies and optimizations to improve conversion rates on websites.",
			"Collaborating on e-commerce projects and custom platforms with high scalability.",
			"Freelance",
		],
	},
	{
		title: "Web Developer & SEO Specialist",
		company_name: "Socialties",
		icon: socialties,
		iconBg: "#E6DEDD",
		date: "Sep 2022 - Dec 2022",
		points: [
			"Design and development of custom websites using WordPress and Elementor.",
			"Content optimization to improve SEO ranking and increase conversion.",
			"Integration of automation tools and digital marketing strategies to maximize campaign performance.",
			"Collaboration with the marketing team to align digital strategies with business goals.",
			"Freelance",
		],
	},
	{
		title: "Commercial Manager",
		company_name: "Científica Inca",
		icon: cientifica,
		iconBg: "#E6DEDD",
		date: "Feb 2023 - Jun 2024",
		points: [
			"Sales management and business relations in the clinical laboratory reagents, supplies, and equipment sector.",
			"Market analysis and expansion strategies to increase market share.",
			"Inventory management and logistics planning to ensure the availability of key products.",
			"Negotiation with suppliers and clients to optimize costs and improve profit margins.",
		],
	},
];

const testimonials = [
	{
		testimonial:
			"Thank you for your excellent work and for bringing such a fresh and impactful vision to the brand. We’re thrilled with the outcome!",
		name: "Astrid Vargas",
		designation: "CEO",
		company: "Social-Ties",
		image:
			"https://media.licdn.com/dms/image/v2/D4E35AQEMwXerDc99bg/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1686751103475?e=1741957200&v=beta&t=kpEIU7pfcrvkbKQIJozMAtGxKJjsX58Wx1Wg68M4JWQ",
	},
	{
		testimonial:
			"Richard is a reliable professional who consistently exceeds expectations. His great work has led me to trust him with more projects, and I will continue to do so. Highly recommended!",
		name: "Ryan Sample",
		designation: "COO",
		company: "Milestone Marketing",
		image: "https://www.iconpacks.net/icons/2/free-user-icon-3297-thumb.png",
	},
	{
		testimonial:
			"A pleasure to work with. Richard has exceeded expectations with every project. Because of his great work and reliability, I have been using him with more of my projects and will continue to do so. Highly recommend him!",
		name: "Ryan Sample",
		designation: "COO",
		company: "Milestone Marketing",
		image: "https://www.iconpacks.net/icons/2/free-user-icon-3297-thumb.png",
	},
];

const projects = [
	{
		name: "Car Rent",
		description:
			"Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "mongodb",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
		],
		image: carrent,
		source_code_link: "https://github.com/",
	},
	{
		name: "Job IT",
		description:
			"Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "restapi",
				color: "green-text-gradient",
			},
			{
				name: "scss",
				color: "pink-text-gradient",
			},
		],
		image: jobit,
		source_code_link: "https://github.com/",
	},
	{
		name: "Trip Guide",
		description:
			"A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "supabase",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: tripguide,
		source_code_link: "https://github.com/",
	},
];

export { services, technologies, experiences, testimonials, projects };
