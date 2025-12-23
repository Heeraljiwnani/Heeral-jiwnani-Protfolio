import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import Navbar from './Navbar';
import ThreeBackground from './ThreeBackground';
import { portfolioData } from '../data/portfolio';

const Layout = ({ children }) => {
    return (
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
            <Head>
                <title>{`${portfolioData.personalInfo.name} | Portfolio`}</title>
                <meta name="description" content={portfolioData.personalInfo.title} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
            </Head>

            <ThreeBackground />

            <div className="min-h-screen flex flex-col relative z-10">
                <Navbar />
                <main className="flex-grow">
                    {children}
                </main>
            </div>
        </ThemeProvider>
    );
};

export default Layout;
