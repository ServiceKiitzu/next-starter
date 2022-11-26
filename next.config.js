/** @type {import('next').NextConfig} */
const path = require('path');
const withLinaria = require('next-linaria');

module.exports = withLinaria({
	linaria: {
		/* linaria options here */
	},
});

const nextConfig = {
	images: {
		dangerouslyAllowSVG: true,
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
	},
	reactStrictMode: true,
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
		prependData: `@import "styles/variables/index.scss";`,
	},
	i18n: {
		locales: ['zh', 'en'],
		defaultLocale: 'zh',
	},
};

module.exports = nextConfig;
