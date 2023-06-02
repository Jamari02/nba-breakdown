const teamUrl = 'https://api-nba-v1.p.rapidapi.com/teams';
const teamOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '12bd3cc3bbmsh52036825cde08aep1e1b77jsnf376ecc4fdf3',
		'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}