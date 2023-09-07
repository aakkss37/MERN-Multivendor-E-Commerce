/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
	theme: {
		fontFamily: {
			Roboto: ["Roboto", "sans-serif"],
			Poppins: ['Poppins', "sans-serif"],
		},
		extend: {
			colors: {
				"primery": "#ff5c35",
				"primery-light": "#fef4ea",
				"primery-transparent": "#ff5c3538",
				"secondary": "#213343",
				"secondary-light": "#3e5974",
				"secondary-transparent": "#eaf0f6",
			},
			screens: {
				"1000px": "1050px",
				"1100px": "1110px",
				"800px": "800px",
				"1300px": "1300px",
				"400px": "400px"
			},
		},
	},
	plugins: [],
}

