'use client'

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu visibility

    const navLinks = [
        { label: "Analysis", href: "/analysis" },
        { label: "Economic Calendar", href: "/economic-calendar" },
        { label: "Resources", href: "/resources" },
        { label: "Brokers", href: "/brokers" },
        { label: "Blog", href: "/blog" }
    ] as const;

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen); // Toggle the menu open state

    return (
        <div className="flex items-center justify-between p-4">
            {/* Logo */}
            <Link href="/">
                <span className="text-zinc-700">TRADE </span>
                <span className="text-orange">WHISPERS</span>
            </Link>

            {/* Hamburger Icon */}
            <button 
                className="lg:hidden p-2"
                onClick={toggleMenu}
                aria-label="Toggle Menu"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </button>

            {/* Desktop Nav */}
            <ul className="hidden lg:flex space-x-9">
                {navLinks.map((link) => (
                    <li key={link.href}>
                        <Link href={link.href}>{link.label}</Link>
                    </li>
                ))}
            </ul>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <ul className="lg:hidden absolute top-16 right-0 bg-white shadow-lg p-4 space-y-4 w-full">
                    {navLinks.map((link) => (
                        <li key={link.href} className="text-lg">
                            <Link href={link.href}>{link.label}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
