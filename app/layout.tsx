import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./UI/Footer";
import Navbar from "./UI/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<main>
					<Navbar />
					{children}
					<Footer />
				</main>
			</body>
		</html>
	);
}