import React, { useState, useEffect } from "react";
import anh from "../assets/anh.png";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

function Home() {
    const [theme, setTheme] = useState("dark");
    const [menuOpen, setMenuOpen] = useState(false); // 👉 thêm trạng thái menu mobile

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
                    <Link
                        to="home"
                        smooth={true}
                        offset={-100}
                        duration={600}
                        className="hover:text-primary cursor-pointer"
                    >
                        Home
                    </Link>
                    <Link
                        to="about"
                        smooth={true}
                        offset={-100}
                        duration={600}
                        className="hover:text-primary cursor-pointer"
                    >
                        About
                    </Link>
                    <Link
                        to="projects"
                        smooth={true}
                        offset={-100}
                        duration={600}
                        className="hover:text-primary cursor-pointer"
                    >
                        Projects
                    </Link>
                    <Link
                        to="contact"
                        smooth={true}
                        offset={-100}
                        duration={600}
                        className="hover:text-primary cursor-pointer"
                    >
                        Contact
                    </Link>

                    {/* Nút chuyển theme */}
                    {theme === "light" ? (
                        <button
                            onClick={() => setTheme("dark")}
                            className="text-2xl hover:text-primary"
                        >
                            🌙
                        </button>
                    ) : (
                        <button
                            onClick={() => setTheme("light")}
                            className="text-2xl hover:text-primary"
                        >
                            🌞
                        </button>
                    )}
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

                {/* Menu mobile thả xuống */}
                {menuOpen && (
                    <div className="absolute top-24 left-0 w-full bg-base-100 shadow-lg flex flex-col items-center space-y-5 py-6 text-lg md:hidden">
                        <Link
                            to="home"
                            smooth={true}
                            offset={-100}
                            duration={600}
                            className="hover:text-primary cursor-pointer"
                            onClick={() => setMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            to="about"
                            smooth={true}
                            offset={-100}
                            duration={600}
                            className="hover:text-primary cursor-pointer"
                            onClick={() => setMenuOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            to="projects"
                            smooth={true}
                            offset={-100}
                            duration={600}
                            className="hover:text-primary cursor-pointer"
                            onClick={() => setMenuOpen(false)}
                        >
                            Projects
                        </Link>
                        <Link
                            to="contact"
                            smooth={true}
                            offset={-100}
                            duration={600}
                            className="hover:text-primary cursor-pointer"
                            onClick={() => setMenuOpen(false)}
                        >
                            Contact
                        </Link>

                        {/* Nút theme */}
                        {theme === "light" ? (
                            <button
                                onClick={() => {
                                    setTheme("dark");
                                    setMenuOpen(false);
                                }}
                                className="text-2xl hover:text-primary"
                            >
                                🌙
                            </button>
                        ) : (
                            <button
                                onClick={() => {
                                    setTheme("light");
                                    setMenuOpen(false);
                                }}
                                className="text-2xl hover:text-primary"
                            >
                                🌞
                            </button>
                        )}
                    </div>
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
