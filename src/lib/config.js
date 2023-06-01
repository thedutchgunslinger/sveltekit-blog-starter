/**
 * All of these values are used throughout the site – for example, 
 * in the <meta> tags, in the footer, and in the RSS feed.
 * 
 * PLEASE BE SURE TO UPDATE THEM ALL! Thank you!
 **/ 

export const siteTitle = 'NBeij'
export const siteDescription = 'Portfolio of Noah Beij, find and learn about cool stuff here!'
export const siteURL = 'nbeij.nl'
export const siteLink = 'https://nbeij.nl'
export const siteAuthor = '- nbeij.nl'

// Controls how many posts are shown per page on the main blog index pages
export const postsPerPage = 10

// Edit this to alter the main nav menu. (Also used by the footer and mobile nav.)
export const navItems = [
	{
		title: 'Home',
		route: '/'
	},
	{
		title: 'Tutorials',
		route: '/blog/category'
	},
	 {
		title: 'About',
		route: '/about'
	}, {
		title: 'Contact',
		route: '/contact' 
	},
]