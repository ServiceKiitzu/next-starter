import 'styles/globals.scss';
import Layout from 'components/layouts/Layout';
import Head from 'next/head';
import { Provider } from 'react-redux';
import store from 'src/app/store';

function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<Layout>
				<Head>
					<title>豈止數位設計</title>
					<link rel="shortcut icon" href="/favicon.ico" />
				</Head>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	);
}

export default MyApp;
