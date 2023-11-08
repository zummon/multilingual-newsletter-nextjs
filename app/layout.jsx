'use client'

import './globals.css'
// - [lipsum](https://www.lipsum.com/)
// - [typographic](https://generator.lorem-ipsum.info/)
// - [Thai](https://lorem.in.th/)
import languages from './languages.json';
import { useRouter, usePathname } from 'next/navigation'

export default function ({ children, }) {
	const router = useRouter()
	const pathname = usePathname()
	
	const lang = pathname.slice(1)
	const language = languages[lang] || {}

  return (
    <html>
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
				<link href={language.fontFamilySrc} rel="stylesheet" />
				<title>{language.title}</title>
			</head>
      <body className="text-gray-500" style={{fontFamily: language.fontFamily}}>
				<div className="max-w-3xl lg:max-w-4xl mx-auto">
					<div className="p-7 md:p-12 flex flex-wrap-reverse gap-2 md:gap-4">
						<div className="grow">
							<h3 className="mb-2 text-black text-2xl">{language['head_line']}</h3>
							<p className="mb-2">
								<a
									className="text-black"
									href="https://zummon.page/"
									target="_blank"
									rel="noreferrer"
								>
									<u>{language['made_by']}</u>
								</a>{' '}
								{language['translate_by']}
							</p>
						</div>
						<div className="">
							<select
								className="border p-2"
								value={language.locale}
								onChange={function (event) {
									router.push(`/${event.target.value}`)
								}}
							>
								{Object.entries(languages).map(function ([locale, item], index) {
									return (
										<option key={`set-lang-${index}`} value={locale}>
											{item.name}
										</option>
									);
								})}
							</select>
						</div>
					</div>
					<div className="px-4 md:px-8 pb-7 md:pb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 divide-y sm:divide-y-0 md:divide-x">
						<div className="sm:row-span-2 md:row-span-2 p-2 md:p-3 lg:p-4">
							<img
								className="rounded max-h-96 sm:max-h-none mx-auto"
								src="https://cdn.leonardo.ai/users/e29c0123-9b74-49b3-a29b-9d7e230a889c/generations/d55e3601-4316-4aea-bbf0-4afaa9258273/variations/Default_Danielle_van_de_Donk_full_body_potrait_of_a_photoreali_0_d55e3601-4316-4aea-bbf0-4afaa9258273_1.jpg"
								alt="pic"
							/>
							<p className="mt-6 text-justify">{language['whats_it']}</p>
							<div className="mt-6">
								{/* https://tablericons.com/ */}
								<span className="sr-only">
									icon icon-tabler icon-tabler-chart-dots-3
								</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="mx-auto"
									width="44"
									height="44"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									fill="none"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path stroke="none" d="M0 0h24v24H0z" fill="none" />
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
							<p className="first-letter:text-7xl first-letter:mr-2 first-letter:float-left text-justify">
								{language['other_text_1']}
							</p>
						</div>
						<div className="p-2 md:p-3 lg:p-4">
							<p className="first-letter:text-7xl first-letter:mr-2 first-letter:float-left text-justify">
								{language['other_text_2']}
							</p>
						</div>
						<div className="sm:col-span-2 md:col-span-2 p-2 md:p-3 lg:p-4">
							<p className="first-letter:text-7xl first-letter:mr-2 first-letter:float-left text-justify">
								{language['other_text_3']}
							</p>
						</div>
					</div>
					{children}
				</div>
			</body>
    </html>
  )
}
