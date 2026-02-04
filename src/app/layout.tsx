import type { Metadata } from "next";
import "./globals.css";
import "@/assets/css/shalaka/custom.css"
import "@/assets/css/shalaka/responsive.css"
import "@/assets/css/rajvi/custom.css"
import "@/assets/css/rajvi/responsive.css"
import "@/assets/css/aniket/custom.css"
import "@/assets/css/aniket/responsive.css"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const metadata: Metadata = {
	title: "DhatuSafety | Central Hub for Patient Safety Intelligence",
	description: "Empowering the Future of Patient Safety",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) 
{
  return (
    <html lang="en">
    	<body>
			<Header/>

        	{children}

			<Footer/>
    	</body>
    </html>
  );
}
