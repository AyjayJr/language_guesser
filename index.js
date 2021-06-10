const franc = require('franc');
const langs = require('langs');
const regex = /,/gi;
const input = process.argv.slice(2).toString().replace(regex, ' ');

let iso = franc(input);

try {
	let name = langs.where('3', iso).name;
	console.log(name);
} catch (e) {
	console.log('Could not determine language');
}