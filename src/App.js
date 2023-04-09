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
			<div className="uk-padding" data-uk-grid="">
				<div className="uk-width-expand@s">
					<h3
						className="uk-margin-small"
						style={{ fontFamily: language.fontFamily }}
					>
						{language["head_line"]}
					</h3>
					<p className="uk-margin-small">
						<a
							className="uk-text-secondary"
							href="https://zummon.page/"
							target="_blank"
							rel="noreferrer"
						>
							<u>{language["made_by"]}</u>
						</a>{" "}
						{language["translate_by"]}
					</p>
				</div>
				<div className="uk-width-auto@s">
					<select
						className="uk-select"
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
			<div className="uk-grid-small uk-grid-divider" data-uk-grid="">
				<div className="uk-width-1-3@s">
					{/* https://pixabay.com/images/id-3025022/ */}
					<img
						className="uk-align-center uk-border-rounded"
						src="https://cdn.pixabay.com/photo/2017/12/17/21/44/coffee-3025022_960_720.jpg"
						alt="pic"
						data-uk-img=""
					/>
					<p>{language["whats_it"]}</p>
					<p className="uk-text-center">
						{/* https://tablericons.com/ */}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="48"
							height="48"
							viewBox="0 0 24 24"
							strokeWidth="1"
							stroke="#9e9e9e"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<circle cx="7" cy="7" r="1" />
							<circle cx="12" cy="12" r="1" />
							<circle cx="17" cy="17" r="1" />
						</svg>
					</p>
				</div>
				<div className="uk-width-2-3@s">
					<div
						className="uk-grid-small uk-child-width-1-2@s uk-grid-divider"
						data-uk-grid=""
					>
						<div>
							<p className="uk-dropcap">{language["other_text_1"]}</p>
						</div>
						<div>
							<p className="uk-dropcap">{language["other_text_2"]}</p>
						</div>
					</div>
					<hr />
					<p className="uk-dropcap">{language["other_text_3"]}</p>
				</div>
			</div>
		</>
	);
}
