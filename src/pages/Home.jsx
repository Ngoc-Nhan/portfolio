import React, { useState, useEffect } from "react";
import anh from "../assets/anh.png";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

function Home() {
    const [theme, setTheme] = useState("dark");
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <div className="min-h-screen bg-base-100 transition-colors duration-500">

            {/* Navbar */}
            <nav className="fixed top-0 left-0 w-full h-24 bg-base-100 shadow-md flex items-center justify-between px-6 z-50">
                {/* Logo */}
                <a href="#home" className="font-bold text-3xl sm:text-4xl text-primary">
                    My Portfolio
                </a>

                {/* Menu desktop */}
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

                {/* Nút menu mobile */}
                <div className="md:hidden flex items-center space-x-4">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-3xl focus:outline-none"
                    >
                        {menuOpen ? "✖" : "☰"}
                    </button>
                </div>

                {/* Menu mobile dạng overlay toàn màn hình */}
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-base-100 bg-opacity-95 flex flex-col items-center justify-center space-y-8 text-2xl font-medium md:hidden z-40"
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

                        {/* Nút theme trong menu mobile */}
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
            </nav>


            {/* Intro Section */}
            <motion.div
                id="home"
                className="pt-36 pb-10 px-6 flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-20 text-center md:text-left"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                {/* Text */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="max-w-md"
                >
                    <h2 className="text-xl sm:text-2xl font-base">Hello everyone, I am</h2>
                    <h2 className="text-2xl sm:text-3xl font-semibold">
                        Vo Thi Ngoc Nhan
                    </h2>
                    <p className="text-lg sm:text-xl mt-2">3rd year student</p>
                    <p className="text-lg sm:text-xl">
                        Ho Chi Minh City University of Transport
                    </p>
                </motion.div>

                {/* Ảnh */}
                <motion.div
                    className="flex items-center justify-center"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <img
                        src={anh}
                        alt="Ảnh cá nhân"
                        className="rounded-2xl shadow-lg w-48 sm:w-60 md:w-72 object-cover"
                    />
                </motion.div>
            </motion.div>

            {/* Main Sections */}
            <main>
                <motion.section
                    id="about"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="px-4 sm:px-8 md:px-12"
                >
                    <About />
                </motion.section>

                <motion.section
                    id="projects"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="px-4 sm:px-8 md:px-12"
                >
                    <Project />
                </motion.section>

                <motion.section
                    id="contact"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="px-4 sm:px-8 md:px-12"
                >
                    <Contact />
                </motion.section>
            </main>
        </div>
    );
}

export default Home;
