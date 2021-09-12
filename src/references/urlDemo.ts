import {URL} from "url";



export function urlDemo() {
	const url = new URL("http://www.mywebsite.com:8000/hello.html?id=100&status=active");
	// Serialized URL
	console.log(url.href);
	console.log(url.toString());

	// Host (root domain)
	console.log(url.host);

	// Hostname (does not get port)
	console.log(url.hostname);

	// Pathname
	console.log(url.pathname);

	//Serialized query
	console.log(url.search);

	//Params object
	console.log(url.searchParams)

	//Add param
	url.searchParams.append("abc", "123");
	console.log(url.searchParams);
	
	//loop through params
	url.searchParams.forEach((value, name) => console.log(`${name}: ${value}`))

}