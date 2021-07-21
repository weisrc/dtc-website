export const homeLink: IHrefText = { href: '/', text: 'Home' };
export const aboutLink: IHrefText = { href: '/about', text: 'About' };
export const servicesLink: IHrefText = { href: '/services', text: 'Services' };
export const blogLink: IHrefText = { href: '/blog', text: 'Blog' };
export const joinLink: IHrefText = { href: '/join', text: 'Join Us' };
export const quoteLink: IHrefText = { href: 'quote', text: 'Get a Quote' };

export const facebookLink: IHrefText = { href: '/', text: 'Facebook' };
export const instagramLink: IHrefText = { href: '/', text: 'Instagram' };
export const twitterLink: IHrefText = { href: '/', text: 'Twitter' };
export const gitHubLink: IHrefText = { href: '/', text: 'GitHub' };
export const discordLink: IHrefText = { href: '/', text: 'Discord' };

export const navLinks = [aboutLink, servicesLink, blogLink];
export const infoLinks = [homeLink, ...navLinks];
export const actionLinks = [joinLink, quoteLink];
export const socialLinks = [facebookLink, instagramLink, twitterLink, gitHubLink, discordLink];
