/// <reference types="@sveltejs/kit" />

interface IPerson {
	picture: string;
	name: string;
	position: string;
	contact: string;
}

interface ITestimonial {
	title: string;
	body: string;
	author: IPerson;
}

interface IHrefText {
	href: string;
	text: string;
}

interface IIconText {
	icon: string;
	text: string;
}

interface IOffer {
	description: string;
	label: string;
	name: string;
	price: string;
	per: string;
	services: IService[];
}

interface IStyledText {
	style: string;
	text: string;
}

interface IService {
	id: string;
	display: IIconText;
	team: IPerson[];
	status: IStyledText;
	description: string;
	disabled: boolean;
}

interface IHero {
	title: string;
	body: string;
	link: IHrefText;
	image: string;
}

type TKeyValue = { [k: string]: unknown };

interface IFormSection {
	display: IIconText;
	description: string;
	fields: IFormField[];
}

interface IFormField {
	label: string;
	id: string;
	kind: TFormFieldKind;
	description?: string;
	showIf?: (d: TKeyValue) => boolean;
	autocomplete?: string;
	placeholder?: string;
	defaultValue?:string|number|boolean;
	pattern?: string;
}
