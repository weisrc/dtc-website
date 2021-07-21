import { backendWebService, cloudHostingService, dataAnalysisService, desktopAppService, frontendWebService, mobileAppService } from "./services"

export const webOffer : IOffer = {
    label: 'Best',
    name: 'Full stack web',
    price: '~ $15',
    per: '/feature',
    description: "Stunning websites with a performant backend to efficiently process and safely store precious data.",
    services: [frontendWebService, backendWebService, cloudHostingService],
}

export const desktopAndMobileOffer : IOffer = {
    label: '',
    name: 'Desktop & Mobile App',
    price: '~ $10',
    per: '/view',
    description: "Domain specific desktop and mobile application that will offer the best possible user experience.",
    services: [desktopAppService, mobileAppService],
}

export const dataAnalysisOffer : IOffer = {
    label: '',
    name: 'Data Analysis',
    price: '~ $25',
    per: '',
    description: "Given some data, we will create a model that will predict the futur using machine learning technics.",
    services: [dataAnalysisService],
}

export const offers = [desktopAndMobileOffer, webOffer, dataAnalysisOffer]