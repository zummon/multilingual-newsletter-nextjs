import React from "react";
import languages from "./languages";

// React component
export default function App() {
	var [language, setLanguage] = React.useState(languages[0]);

	function handleLanguage(locale) {
		// find the language in languages variable
		var filtered = languages.filter(function (item) {
			return item.locale === locale;
		});
		// get ready to set current language
		var object = {};

		// get the actual existing language
		if (filtered.length >= 1) {
			object = filtered[0];
		} else {
			object = languages[0];
		}
		// do stuff on this website
		document.documentElement.lang = object.locale;
		document.documentElement.style.fontFamily = object.fontFamily;
		document.title = object.title;

		// save the setting
		setLanguage(object);
		// localStorage.setItem("language", object.locale)
	}

	// get viewer's setting once this website load
	React.useEffect(function () {
		handleLanguage(/*localStorage.getItem("language")*/);
	}, []);

	return (
		<>
			<div className="p-7 md:p-12 flex gap-2 md:gap-4">
				<div className="grow">
					<h3
						className="mb-2 text-black text-2xl"
					>
						{language["head_line"]}
					</h3>
					<p className="mb-2">
						<a
							className="text-black"
							href="https://zummon.page/"
							target="_blank"
							rel="noreferrer"
						>
							<u>{language["made_by"]}</u>
						</a>{" "}
						{language["translate_by"]}
					</p>
				</div>
				<div className="">
					<select
						className="border p-2"
						value={language.locale}
						onChange={function (event) {
							handleLanguage(event.currentTarget.value);
						}}
					>
						{languages.map(function (item) {
							return (
								<option key={item.locale} value={item.locale}>
									{item.name}
								</option>
							);
						})}
					</select>
				</div>
			</div>
			<div className="px-4 md:px-8 pb-7 md:pb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 divide-y sm:divide-y-0 md:divide-x" >
				<div className="sm:row-span-2 md:row-span-2 p-2 md:p-3 lg:p-4">
					<img
						className="rounded"
						src="https://cdn.leonardo.ai/users/87e86c7c-bff9-4f33-a0db-2bf812d319fc/generations/e3cfb088-048c-4be3-92c5-9b3de0c4b14d/variations/Default_Luis_Royo_style_illustration_of_a_beautiful_longhaired_2_e3cfb088-048c-4be3-92c5-9b3de0c4b14d_1.jpg"
						alt="pic"
					/>
					<p className="mt-6 text-justify">{language["whats_it"]}</p>
					<div className="mt-6">
						<span className="sr-only">icon icon-tabler icon-tabler-chart-dots-3</span>
						<svg xmlns="http://www.w3.org/2000/svg" className="mx-auto" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
							<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
							<path d="M5 7m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
							<path d="M16 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
							<path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
							<path d="M6 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
							<path d="M9 17l5 -1.5" />
							<path d="M6.5 8.5l7.81 5.37" />
							<path d="M7 7l8 -1" />
						</svg>
					</div>
				</div>
				<div className="p-2 md:p-3 lg:p-4">
					<p className="first-letter:text-7xl first-letter:mr-2 first-letter:float-left text-justify">{language["other_text_1"]}</p>
				</div>
				<div className="p-2 md:p-3 lg:p-4">
					<p className="first-letter:text-7xl first-letter:mr-2 first-letter:float-left text-justify">{language["other_text_2"]}</p>
				</div>	
				<div className="sm:col-span-2 md:col-span-2 p-2 md:p-3 lg:p-4">
					<p className="first-letter:text-7xl first-letter:mr-2 first-letter:float-left text-justify">{language["other_text_3"]}</p>
				</div>
			</div>
		</>
	);
}
