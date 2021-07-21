export const contactFormSection: IFormSection = {
	display: {
		text: 'How can we reach you?',
		icon: 'bx-bxs-contact'
	},
	description: 'We need information to contact you when we have a quote ready.',
	fields: [
		{
			id: 'contactName',
			kind: 'text',
			autocomplete: 'name',
			label: 'Full name',
			placeholder: 'Format: first name, last name'
		},
		{
			id: 'contactCompany',
			kind: 'text',
			autocomplete: 'company',
			label: 'Company',
			placeholder: 'Ex: Dawson Technology Club, LLC'
		},
		{
			id: 'contactEmail',
			kind: 'email',
			label: 'Email address',
			autocomplete: 'email',
			placeholder: 'Ex: name@domain.tld'
		},
		// phone
		{
			id: 'contactUseTel',
			kind: 'checkbox',
			label: 'I wish to receive a phone call.'
		},
		{
			id: 'contactTel',
			kind: 'tel',
			label: 'Telephone number',
			placeholder: '+1 123-456-7890',
			autocomplete: 'tel',
			description: 'We may not be able to call you if you reside outside of Canada.',
			showIf: ({ contactUseTel }) => !!contactUseTel
		},
		{
			id: 'contactTelTime',
			kind: 'textarea',
			label: 'When should we call you?',
			placeholder: 'Ex: From Monday to Friday from 4h to 5h.',
			description:
				'Most DTC members are full-time students, so class hours are not optimal for a call. Please use the Eastern Standard Time.',
			showIf: ({ contactUseTel }) => !!contactUseTel
		},
		// location
		{
			id: 'contactNotMontreal',
			kind: 'checkbox',
			label: 'I am not in the Montreal Metropolitan Area.'
		},
		{
			id: 'contactCity',
			kind: 'text',
			label: 'City',
			placeholder: 'Ex: Montreal, Quebec, Canada',
			description: 'Some services may not be available in your region.',
			showIf: ({ contactNotMontreal }) => !!contactNotMontreal
		}
	]
};

export const requestFormSection: IFormSection = {
	display: {
		icon: 'carbon-request-quote',
		text: 'Your request'
	},
	description: 'General information on your request and your expectations.',
	fields: [
        {
			id: 'requestName',
			kind: 'text',
			label: 'How should we name your request?',
			placeholder: 'Ex: Super Cool E-Commerce Web Application',
			description:
				'The request name will be used to identify this request when handling many requests from the same company.'
		},
        {
			id: 'requestOverview',
			kind: 'textarea',
			label: 'A brief overview of your request.',
			placeholder: 'Ex: E-Commerce Web Application with shopping cart and checkout functionality.',
			description:
				'Summrize the key features of your request.'
		},
		{
			id: 'requestDeadline',
			kind: 'text',
			label: 'When is the deadline for complete delivery?',
			placeholder: 'Ex: December 24, 2021',
			description:
				'Most DTC members are full-time students, so we may not be able to deliver in time depending on our workload.'
		},
		{
			id: 'requestPrice',
			kind: 'number',
			label: 'How much should we charge?',
			placeholder: 'CAD',
			description: 'Please use CAD when calculating the amount.'
		}
	]
};