import Link from "next/link";

export default function Header() {
	return (
		<header className="relative z-40 max-w-[1200px] mx-auto px-4 pt-[20px] tcp-header">
			<div className="flex justify-between items-center">
				<h2 className="w-[305px]">
					<img src="/images/logo-azda.png" alt="Azda Consulting" />
				</h2>
				<nav className="flex gap-[30px]">
					<Link className="text-[16px] font-medium text-[#F5F5F5]/80 hover:text-white transition-all" href="#testimonios">Testimonios</Link>
					<Link className="text-[16px] font-medium text-[#F5F5F5]/80 hover:text-white transition-all" href="#nosotros">Quienes Somos</Link>
					<Link className="text-[16px] font-medium text-[#F5F5F5]/80 hover:text-white transition-all" href="#proceso">proceso</Link>
					<Link className="text-[16px] font-medium text-[#F5F5F5]/80 hover:text-white transition-all" href="#faqs">FAQs</Link>
				</nav>
			</div>
		</header>
	)
}