const discordWebHook =
	'https://discord.com/api/webhooks/867100344470470676/Pa3Igl0XLe4tuXlJIzpweAzzqu4_IOg2XwQD1UxOYkwYoQPWRQspNWyLU6ZMu5Hm1N9F';

export async function getIp(): Promise<string> {
	const data = await (await fetch('https://httpbin.org/ip')).json();
	return data.origin;
}

export async function sendMessageFile(file: string): Promise<boolean> {
	const data = new FormData();
	const headers = new Headers();
	data.append('file', new Blob([file]), 'quote.json');
	const content = [
		`User IP: ${await getIp()}`,
		`User agent: ${navigator.userAgent}`,
		`User time: ${new Date()}`
	].join('\n');

	data.append('payload_json', JSON.stringify({ content }));
	try {
		const reply = await fetch(discordWebHook, {
			method: 'POST',
			headers: headers,
			body: data
		});
		if (reply.ok) return true;
		return false;
	} catch (e) {
		return false;
	}
}
