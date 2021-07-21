import { weiPerson } from './people';
import { availableStatus } from './statuses';

export const frontendWebService: IService = {
	id: 'frontendWebService',
	display: {
		text: 'Frontend Web',
		icon: 'gg-website'
	},
	description:
		'Front-end web development is the practice of converting data to a graphical interface, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that data',
	team: [weiPerson],
	status: availableStatus,
	disabled: false
};

export const backendWebService: IService = {
	id: 'backendWebService',
	display: {
		text: 'Backend Web',
		icon: 'carbon-api'
	},
	description: 'Back end Development refers to the server side of development where you are primarily focused on how the site works. This type of web development usually consists of three parts: a server, an application, and a database. Code written by back end developers is what communicates the database information to the browser.',
	team: [weiPerson],
	status: availableStatus,
	disabled: false
};

export const cloudHostingService: IService = {
	id: "cloudHostingService",
	display: {
		text: "Cloud Hosting",
		icon: "ant-design:cloud-server-outlined"
	},
	description: "Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user. The term is generally used to describe data centers available to many users over the Internet.",
	team: [weiPerson],
	status: availableStatus,
	disabled: false
}

export const desktopAppService: IService = {
	id: "desktopAppService",
	display: {
		text: "Desktop App",
		icon: "ant-design:desktop-outlined"
	},
	description: "A desktop application is a software program that can be run on a standalone computer to perform a specific task by an end-user. You can also download and install different desktop applications directly from the Internet or purchased from software vendors.",
	team: [weiPerson],
	status: availableStatus,
	disabled: false
}

export const mobileAppService: IService = {
	id: "mobileAppService",
	display: {
		text: "Mobile App",
		icon: "ant-design:mobile-outlined"
	},
	description: "A mobile application, also referred to as a mobile app or simply an app, is a computer program or software application designed to run on a mobile device such as a phone, tablet, or watch.",
	team: [weiPerson],
	status: availableStatus,
	disabled: false
}

export const dataAnalysisService: IService = {
	id: "dataAnalysisService",
	display: {
		text: "Data Analysis",
		icon: "ant-design:line-chart-outlined"
	},
	description: "Data analysis is a process of inspecting, cleansing, transforming, and modeling data with the goal of discovering useful information, informing conclusions, and supporting decision-making.",
	team: [weiPerson],
	status: availableStatus,
	disabled: false
}

export const services = [frontendWebService, backendWebService, cloudHostingService, desktopAppService, mobileAppService,dataAnalysisService]