import React from "react";
import anh from "../assets/anh.png";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import { motion } from "framer-motion";

function Home() {
    const [theme, setTheme] = React.useState("dark");

    React.useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <div className="min-h-screen bg-base-100 transition-colors duration-500">
            {/* Navbar */}
            <nav className="flex fixed top-0 left-0 w-full h-16 bg-base-100 shadow-md items-center px-4 justify-between z-50">
                <a href="#home" className="font-bold text-xl text-primary">My Portfolio</a>

                <div className="flex items-center space-x-6">
                    <a href="#home" className="hover:text-primary">Home</a>
                    <a href="#about" className="hover:text-primary">About</a>
                    <a href="#projects" className="hover:text-primary">Projects</a>
                    <a href="#contact" className="hover:text-primary">Contact</a>

                    {theme === "light" ? (
                        <button onClick={() => setTheme("dark")} className="text-2xl hover:text-primary">🌙</button>
                    ) : (
                        <button onClick={() => setTheme("light")} className="text-2xl hover:text-primary">🌞</button>
                    )}
                </div>
            </nav>


            {/* Intro Section */}
            <motion.div
                id="home"
                className="pt-24 pb-10 px-10 flex mx-auto w-full items-center justify-around"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-2xl font-base">Hello everyone, I am</h2>
                    <h2 className="text-3xl">Vo Thi Ngoc Nhan</h2>
                    <p className="text-2xl">3rd year student</p>
                    <p className="text-2xl">Ho Chi Minh City University of Transport</p>
                </motion.div>

                <motion.div
                    className="flex items-center justify-center"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <img
                        src={anh}
                        alt="Ảnh cá nhân"
                        className="rounded-2xl shadow-lg w-38 object-cover"
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
                >
                    <About />
                </motion.section>

                <motion.section
                    id="project"
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
