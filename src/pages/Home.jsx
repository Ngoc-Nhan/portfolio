import React, { useState, useEffect } from "react";
import anh from "../assets/anh.png";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";

function Home() {
    const [theme, setTheme] = useState("dark");
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <div className="min-h-screen bg-base-100 transition-colors duration-500">
            {/* 🌟 Navbar */}
            <nav className="fixed top-0 left-0 w-full h-20 bg-base-100/80 backdrop-blur-md shadow-md flex items-center justify-between px-6 z-50">
                {/* Logo */}
                <a
                    href="#home"
                    className="font-bold text-2xl sm:text-3xl text-primary tracking-wide"
                >
                    My Portfolio
                </a>

                {/* Menu Desktop */}
                <div className="hidden md:flex items-center space-x-8 text-lg">
                    {["home", "about", "projects", "contact"].map((section) => (
                        <Link
                            key={section}
                            to={section}
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={600}
                            activeClass="text-primary font-semibold"
                            className="hover:text-primary cursor-pointer transition-colors"
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </Link>
                    ))}

                    {/* Nút chuyển theme */}
                    <button
                        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                        className="text-2xl hover:text-primary transition-transform duration-300 transform hover:rotate-180"
                    >
                        {theme === "light" ? "🌙" : "🌞"}
                    </button>
                </div>

                {/* Menu Mobile */}
                <div className="md:hidden flex items-center space-x-4">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-3xl focus:outline-none"
                    >
                        {menuOpen ? "✖" : "☰"}
                    </button>
                </div>

                {/* Overlay Menu Mobile */}
                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-base-100 flex flex-col items-center justify-center space-y-8 text-2xl font-medium md:hidden z-40"
                        >
                            {["home", "about", "projects", "contact"].map((section) => (
                                <Link
                                    key={section}
                                    to={section}
                                    spy={true}
                                    smooth={true}
                                    offset={-80}
                                    duration={600}
                                    activeClass="text-primary font-semibold"
                                    className="hover:text-primary cursor-pointer transition-colors"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                </Link>
                            ))}

                            {/* Nút Theme trong mobile */}
                            <button
                                onClick={() => {
                                    setTheme(theme === "light" ? "dark" : "light");
                                    setMenuOpen(false);
                                }}
                                className="text-3xl hover:text-primary transition-transform duration-300 transform hover:rotate-180"
                            >
                                {theme === "light" ? "🌙" : "🌞"}
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* 👋 Intro Section */}
            <motion.section
                id="home"
                className="pt-32 pb-16 px-6 flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-20 text-center md:text-left"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                {/* Text Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="max-w-md"
                >
                    <h2 className="text-lg sm:text-xl font-base">Hello everyone, I am</h2>
                    <h1 className="text-3xl sm:text-4xl font-semibold text-primary">
                        Võ Thị Ngọc Nhàn
                    </h1>
                    <p className="text-lg mt-2">3rd year student</p>
                    <p className="text-lg">
                        Ho Chi Minh City University of Transport
                    </p>
                </motion.div>

                {/* Hình ảnh */}
                <motion.div
                    className="flex items-center justify-center"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <img
                        src={anh}
                        alt="Ảnh cá nhân"
                        className="rounded-2xl shadow-lg w-44 sm:w-56 md:w-72 object-cover"
                    />
                </motion.div>
            </motion.section>

            {/* 💡 Sections chính */}
            <main className="px-4 sm:px-8 md:px-12 space-y-16">
                <motion.section
                    id="about"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <About />
                </motion.section>

                <motion.section
                    id="projects"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <Project />
                </motion.section>

                <motion.section
                    id="contact"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <Contact />
                </motion.section>
            </main>
        </div>
    );
}

export default Home;
