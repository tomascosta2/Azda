import Link from "next/link";

export default function Header() {
	return (
		<header className="max-w-[1200px] mx-auto px-4 pt-[20px] tcp-header">
			<div className="flex justify-between items-center">
				<h2 className="w-[120px]">Logo aca</h2>
				<nav className="flex gap-[30px] bg-[#0A022F] py-[20px] px-[60px] rounded-full border border-white/40">
					<Link className="text-[16px] font-medium text-[#F5F5F5]/80 hover:text-white transition-all" href="#testimonios">Testimonios</Link>
					<Link className="text-[16px] font-medium text-[#F5F5F5]/80 hover:text-white transition-all" href="#como">cómo te ayudamos</Link>
					<Link className="text-[16px] font-medium text-[#F5F5F5]/80 hover:text-white transition-all" href="#nosotros">Quienes Somos</Link>
					<Link className="text-[16px] font-medium text-[#F5F5F5]/80 hover:text-white transition-all" href="#proceso">proceso</Link>
					<Link className="text-[16px] font-medium text-[#F5F5F5]/80 hover:text-white transition-all" href="#faqs">FAQs</Link>
				</nav>
				<div className="w-[120px]"></div>
			</div>
		</header>
	)
}