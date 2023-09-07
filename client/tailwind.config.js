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
				"primary": "#ff5c35",
				"primary-light": "#fef4ea",
				"primary-dark": "#f52f00",
				"primary-transparent": "#ff5c3538",
				"secondary": "#213343",
				"secondary-light": "#3e5974",
				"secondary-dark": "#0c263d",
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

