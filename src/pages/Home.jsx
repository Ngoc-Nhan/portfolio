import React from "react";
import anh from "../assets/anh.png";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";


function Home() {
    const [theme, setTheme] = React.useState("light");

    React.useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);
    return (
        // Root div với text-base-content → tất cả chữ inherit màu theo theme
        <div data-theme={theme} className="min-h-screen bg-base-100 transition-colors duration-500">
            {/* Navbar */}
            <nav className="flex fixed top-0 left-0 w-full h-16 bg-base-100 shadow-md items-center px-4 justify-between">
                {/* Logo */}
                <a href="#" className="font-bold text-xl text-primary">
                    My Portfolio
                </a>

                {/* Menu */}
                <div className="flex items-center space-x-6">
                    <a href="#" className="hover:text-primary">About</a>
                    <a href="#" className="hover:text-primary">Career</a>
                    <a href="#" className="hover:text-primary">Projects</a>
                    <a href="#" className="hover:text-primary">Contact</a>

                    {/* 🌞 / 🌙 Nút chuyển theme */}
                    {theme === "light" ? (
                        <button
                            onClick={() => setTheme("dark")}
                            className="text-2xl hover:text-primary"
                            aria-label="Switch to dark theme"
                        >
                            🌙
                        </button>) : (
                        <button
                            onClick={() => setTheme("light")}
                            className="text-2xl hover:text-primary"
                            aria-label="Switch to light theme"
                        >
                            🌞
                        </button>
                    )
                    }
                </div>
            </nav>
            <div className=" pt-25 pb-10 px-10 flex mx-auto w-full  items-center justify-around ">
                <div>
                    <h2 className="text-2xl font-base">Hello everyone, I am</h2>
                    <h2 className="text-3xl">Vo Thi Ngoc Nhan</h2>
                    <p className="text-2xl">3rd year student </p>
                    <p className="text-2xl">Ho Chi Minh City University of Transport</p>

                </div>
                <div className="flex items-center justify-center">
                    <img src={anh} alt="Ảnh cá nhân" className="rounded-2xl shadow-lg w-38 rounded-100% object-cover" />
                </div>

            </div>

            {/* Nội dung chính */}
            <main className="">
                {/* <div className="grid grid-cols-2 w-full max-w-6xl gap-40">
                    <div className="flex flex-col justify-center space-y-10 flex-2">
                     
                        
                    </div>
                    <div className="flex flex-col gap-y-10 justify-center items-center flex-1">
                       
                        <p className="text-lg">Email : ngocnhan282005@gmail.com</p>

                    </div>
                </div> */}
                <About />
                <Project />
                <Contact />

            </main>
        </div>
    );
}

export default Home;
