import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/subjects', label: 'Subjects' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleMenu();
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary-900/80 backdrop-blur-md border-b border-primary-700/50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="text-xl font-bold text-neutral-100 hover:text-accent transition-colors"
          >
            <span className="text-accent">GP</span> Science Tutor
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  location.pathname === link.href ? 'text-accent' : 'text-neutral-200'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/booking"
              className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-500 focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary-900"
            >
              Book a Session
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden rounded-lg p-2 text-neutral-200 hover:bg-primary-800 hover:text-accent transition-colors"
            onClick={toggleMenu}
            onKeyDown={handleKeyDown}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="space-y-1 pb-4 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block rounded-lg px-3 py-2 text-base font-medium transition-colors hover:bg-primary-800 hover:text-accent ${
                  location.pathname === link.href
                    ? 'text-accent bg-primary-800'
                    : 'text-neutral-200'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/booking"
              onClick={() => setIsMenuOpen(false)}
              className="block rounded-lg bg-primary-600 px-3 py-2 text-center text-base font-semibold text-white transition-colors hover:bg-primary-500 mt-2"
            >
              Book a Session
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
