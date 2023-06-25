"use client";
import React from "react";
import Image from "next/image";
import { Logo } from "@/public";
import Link from "next/link";
import { motion } from "framer-motion";

const NavItems: { name: string; href: string; delay: number }[] = [
	{
		name: "Home",
		href: "/",
		delay: 0.1,
	},
	{
		name: "About",
		href: "/",
		delay: 0.2,
	},
	{
		name: "Contact",
		href: "/",
		delay: 0.3,
	},
	{
		name: "Explore",
		href: "/",
		delay: 0.4,
	},
];

const NavItem = ({
	name,
	href,
	delay,
}: {
	name: string;
	href: string;
	delay: number;
}) => {
	return (
		<Link
			href={href}
			className="hover:text-slate-200 hover:-translate-y-1 duration-300"
		>
			<motion.div
				initial={{ y: -10, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ delay: delay }}
			>
				{name}
			</motion.div>
		</Link>
	);
};

const Navbar = () => (
	<section className="dark:text-text-dark dark:bg-dark-nav body-font">
		<div className="container mx-auto flex flex-wrap px-8 py-6 flex-row items-center justify-center md:justify-normal gap-6">
			<Link
				href="/"
				className="flex title-font font-medium items-center justify-center gap-4"
			>
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
				>
					<Image src={Logo} width={50} height={30} alt="Loading..." />
				</motion.div>
				<motion.span
					className="text-xl font-bold"
					initial={{ scale: 0.5 }}
					animate={{ scale: 1 }}
					transition={{ duration: 0.5 }}
				>
					ByteChat
				</motion.span>
			</Link>
			<nav className="hidden md:flex md:ml-auto flex-wrap items-center text-lg justify-center gap-5 font-medium">
				{NavItems.map((navitem) => {
					return (
						<NavItem
							key={navitem.name}
							name={navitem.name}
							href={navitem.href}
							delay={navitem.delay}
						/>
					);
				})}
			</nav>
			<Link href="/signup">
				<button className="btn border-primary-btn hover:border-primary-btn hover:bg-primary-btn duration-300">
					Sign In
				</button>
			</Link>
			<button className="absolute px-4 py-2 md:hidden top-7 right-4">
				nav
			</button>
		</div>
	</section>
);

export default Navbar;