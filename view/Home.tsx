import {Component} from "react";
import './style.css';
import service01 from '../images/service01.png';
import service02 from '../images/service02.png';

import css from '../images/tecnology/css.png';
import figma from '../images/tecnology/figma.png';
import boostrap from '../images/tecnology/boostrap.png';
import html from '../images/tecnology/html.png';
import javascript from '../images/tecnology/javascript.png';
import react from '../images/tecnology/react.png';
import tailwind from '../images/tecnology/tailwind.png';
import typescript from '../images/tecnology/typescript.png';
import github from '../images/tecnology/git1.png';
import intelij from '../images/tecnology/intelij.png';
import nodejs from '../images/tecnology/nodejs.png';
import java from '../images/tecnology/java3.png';
import tomcat from '../images/tecnology/tomcat.png';
import mysql from '../images/tecnology/mysql.png';
import vscode from '../images/tecnology/vscode.png';
import watchhub from '../images/projects/watchhub.png';
import traveller from '../images/projects/zentraveller (1).png';
import computershop from '../images/projects/computershop.png';
import game from '../images/projects/game.png';
import google from '../images/projects/google.png';
import hostel from '../images/projects/hostel.png';
import netflix from '../images/projects/netflix.png';
import porthtml from '../images/projects/porthtml.png';
import reactport from '../images/projects/reactport.png';

export class Home extends Component {
    render() {
        return (
            <div>
                <nav className="bg-black text-white py-3 px-4 flex items-center justify-between">
                    <a className="font-extrabold text-yellow-400 text-xl tracking-tight" href="#">Ishan</a>
                    <div className="flex items-center">
                        <a className="text-xl font-bold font-mono  px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="#">Home</a>
                        <a className="text-xl font-bold font-mono px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="#">About</a>
                        <a className="text-xl font-bold font-mono px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="#">Project</a>
                        <a className="text-xl font-bold font-mono px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="#">Service</a>
                        <a className="text-xl font-bold font-mono px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="#">Contact</a>
                    </div>
                </nav>

                <section className="pt-12 bg-black sm:pt-16">
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="text-center">
                            <p
                                className="max-w-4xl mx-auto mb-4 text-6xl font-bold hover:text-yellow-400 font-mono leading-tight text-white sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight">
                                Full Stack Developer <br />
                                Entrepreneur<br/>
                                Digital Creator
                            </p>
                            <h1 className="max-w-2xl mx-auto px-6 text-lg text-white font-inter">
                                Give The Best Things For You and Modern Work Experience For Your Business
                            </h1>
                            <div className="px-8 sm:items-start sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
                                <a href="#" title=""
                                   className="mb-3 sm:mb-0 inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                   role="button">
                                    Hire me
                                </a>
                                <a href="#"
                                   className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-gray-900 hover:text-white transition-all duration-200 bg-gray-100 border-2 border-gray-900 sm:w-auto rounded-xl hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                   role="button">Contact US</a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-black">
                        <div className="relative mx-auto mt-4 md:mt-8">
                            <div className="lg:max-w-4xl lg:mx-auto">
                                <img className="px-4 md:mpx-8 duration-500 hover:scale-105 hover:shadow-xl" src="https://images.unsplash.com/photo-1628277613967-6abca504d0ac" />
                            </div>
                        </div>
                    </div>

                </section>

                <div className="px-2 py-20 w-full flex justify-center bg-black">
                    <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg">
                        <div className="lg:w-1/2">
                            <div id="backgroundimage" className="lg:scale-110 h-80 bg-cover lg:h-full rounded-b-none border lg:rounded-lg duration-500 hover:scale-105 hover:shadow-xl">
                            </div>
                        </div>
                        <div className="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg">
                            <h2 className="text-5xl text-gray-800 font-extrabold">
                                Who We Are ?
                            </h2>
                            <p className="mt-4 font-bold text-gray-950">

                                Ishan Dhananjana: A Journey of Passion

                                In the charming city of Galle, Sri Lanka, Ishan Dhananjana's story unfolds with a vibrant
                                tapestry of passion and purpose. Born on February 20, 2001, Ishan's journey is a testament
                                to resilience and determination. From his early fascination with technology to his freelance
                                endeavors, Ishan's portfolio reflects his creativity and commitment. His narrative inspires
                                others to embrace their dreams and persevere against all odds. With each step forward,
                                Ishan continues to carve his path, driven by his unwavering love for innovation and
                                storytelling.

                            </p>

                            <div className=" flex justify-center mt-5 space-x-5">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                    <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                    <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
                                </a>
                                <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
                                    <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                    <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
                                </a>

                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                    <img src="https://img.icons8.com/fluent/30/000000/github.png" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-black p-4">
                    <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
                        <div className="flex md:contents flex-row-reverse">
                            <div
                                className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                                <h3 className="text-lg font-semibold lg:text-xl">Yatalamaththa Maha Vidyalaya (2007-2017) </h3>
                                <p className="mt-2 leading-6">I did my primary and secondary education
                                    well here.</p>
                                <span className="absolute text-sm font-bold text-indigo-100/75 -top-5 left-2 whitespace-nowrap">Ordinary Level</span>
                            </div>
                            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                                <div className="flex items-center justify-center w-6 h-full">
                                    <div className="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300">
                                    </div>
                                </div>
                                <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                            </div>
                        </div>

                        <div className="flex md:contents">
                            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                                <div className="flex items-center justify-center w-6 h-full">
                                    <div className="w-1 h-full bg-indigo-300"></div>
                                </div>
                                <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                            </div>
                            <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
                                <h3 className="text-lg font-semibold lg:text-xl">Dr.Richard Pathirana Collage (2018-2020)</h3>
                                <p className="mt-2 leading-6">I did my advanced level education well here.</p>
                                <span className="absolute text-sm  font-bold text-indigo-100/75 -top-5 left-2 whitespace-nowrap">Advanced Level </span>
                            </div>
                        </div>

                        <div className="flex md:contents flex-row-reverse">
                            <div
                                className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                                <h3 className="text-lg font-semibold lg:text-xl">Institute of Software Engineering (2022-2024)</h3>
                                <p className="mt-2 leading-6">After completing my high school education, I
                                    pursued a graduate diploma in a software
                                    engineering course at the Institute of Software
                                    Engineering.</p>
                                <span className="absolute text-sm font-bold text-indigo-100/75 -top-5 left-2 whitespace-nowrap">HND Level</span>
                            </div>
                            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                                <div className="flex items-center justify-center w-6 h-full">
                                    <div className="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300">
                                    </div>
                                </div>
                                <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                            </div>
                        </div>

                        <div className="flex md:contents">
                            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                                <div className="flex items-center justify-center w-6 h-full">
                                    <div className="w-1 h-full bg-indigo-300"></div>
                                </div>
                                <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                            </div>
                            <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
                                <h3 className="text-lg font-semibold lg:text-xl">Institute of Software Engineering (2024-2025)</h3>
                                <p className="mt-2 leading-6">I do my graduation here after completing
                                    my graduate diploma in software
                                    engineering course</p>
                                <span className="absolute text-sm font-bold text-indigo-100/75 -top-5 left-2 whitespace-nowrap">Degree Level</span>
                            </div>
                        </div>

                    </div>
                </div>


                <section className="bg-black">
                    <div className="max-w-7xl mx-auto px-8 py-4 space-y-16">
                        <h2 className="font-heading font-mono font-bold text-white text-4xl text-center">
                            TECHNICAL SKILLS
                        </h2>

                        <div className="grid md:grid-cols-3 gap-16">
                            <div className="space-y-4">
                                <a href="#" target="_blank" className="space-y-2">

                                    <img className="mx-auto h-32 w-32 rounded-full xl:w-32 xl:h-32 duration-500 hover:scale-110 hover:shadow-xl" src={java}/>


                                        <h3 className="font-medium text-white text-2xl text-center">
                                            Java
                                        </h3>
                                </a>
                            </div>

                            <div className="space-y-4">
                                <a href="#" target="_blank" className="space-y-2">


                                    <img className="mx-auto h-40 w-40 rounded-full xl:w-32 xl:h-32 duration-500 hover:scale-110 hover:shadow-xl" src={javascript}/>

                                        <h3 className="font-medium text-white text-2xl text-center">
                                            JavaScript
                                        </h3>
                                </a>

                            </div>

                            <div className="space-y-4">
                                <a href="#" target="_blank" className="space-y-2">

                                    <img className="mx-auto h-40 w-40 rounded-full xl:w-32 xl:h-32 duration-500 hover:scale-110 hover:shadow-xl" src={typescript}/>



                                    <h3 className="font-medium text-white text-2xl text-center">
                                            TypeScript
                                        </h3>
                                </a>

                            </div>

                            <div className="space-y-4">
                                <a href="#" target="_blank" className="space-y-2">


                                    <img className="mx-auto h-40 w-40 rounded-full xl:w-32 xl:h-32 duration-500 hover:scale-110 hover:shadow-xl" src={mysql}/>



                                    <h3 className="font-medium text-white text-2xl text-center">
                                            mysql
                                        </h3>
                                </a>

                            </div>

                            <div className="space-y-4">
                                <a href="#" target="_blank" className="space-y-2">
                                    <img className="mx-auto h-40 w-40 rounded-full xl:w-32 xl:h-32 duration-500 hover:scale-110 hover:shadow-xl" src={html}/>


                                        <h3 className="font-medium text-white text-2xl text-center">
                                            HTML
                                        </h3>
                                </a>
                            </div>

                            <div className="space-y-4">
                                <a href="#" target="_blank" className="space-y-2">
                                    <img className="mx-auto h-40 w-40 rounded-full xl:w-32 xl:h-32 duration-500 hover:scale-110 hover:shadow-xl" src={css}/>


                                        <h3 className="font-medium text-white text-2xl text-center">
                                            CSS
                                        </h3>
                                </a>

                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-black">
                    <div className="max-w-7xl mx-auto px-8 py-4 space-y-16">
                        <h2 className="font-heading font-mono font-bold text-white text-4xl text-center duration-500 hover:scale-110 hover:shadow-xl">
                            TECHNOLOGY STACK

                        </h2>

                        <div className="grid md:grid-cols-3 gap-16">
                            <div className="space-y-4">
                                <a href="#" target="_blank" className="space-y-2">

                                    <img className="mx-auto h-32 w-32 rounded-full xl:w-32 xl:h-32 duration-500 hover:scale-110 hover:shadow-xl" src={github}/>


                                    <h3 className="font-medium text-white text-2xl text-center">
                                        Git
                                    </h3>
                                </a>
                            </div>

                            <div className="space-y-4">
                                <a href="#" target="_blank" className="space-y-2">


                                    <img className="mx-auto h-40 w-40 rounded-full xl:w-32 xl:h-32 duration-500 hover:scale-110 hover:shadow-xl" src={tomcat}/>

                                    <h3 className="font-medium text-white text-2xl text-center">
                                        Tomcat
                                    </h3>
                                </a>


                            </div>

                            <div className="space-y-4">
                                <a href="#" target="_blank" className="space-y-2">

                                    <img className="mx-auto h-40 w-40 rounded-full xl:w-32 xl:h-32 duration-500 hover:scale-110 hover:shadow-xl" src={boostrap}/>



                                    <h3 className="font-medium text-white text-2xl text-center">
                                        Bootstrap
                                    </h3>
                                </a>

                            </div>

                            <div className="space-y-4">
                                <a href="#" target="_blank" className="space-y-2">


                                    <img className="mx-auto h-40 w-40 rounded-full xl:w-32 xl:h-32 duration-500 hover:scale-110 hover:shadow-xl" src={tailwind}/>


                                    <h3 className="font-medium text-white text-2xl text-center">
                                        Tailwind CSS
                                    </h3>
                                </a>


                            </div>

                            <div className="space-y-4">
                                <a href="#" target="_blank" className="space-y-2">
                                    <img className="mx-auto h-40 w-40 rounded-full xl:w-32 xl:h-32 duration-500 hover:scale-110 hover:shadow-xl" src={nodejs}/>


                                    <h3 className="font-medium text-white text-2xl text-center">
                                        Node JS
                                    </h3>
                                </a>


                            </div>

                            <div className="space-y-4">
                                <a href="#" target="_blank" className="space-y-2">
                                    <img className="mx-auto h-40 w-40 rounded-full xl:w-32 xl:h-32 duration-500 hover:scale-110 hover:shadow-xl" src={react}/>


                                    <h3 className="font-medium text-white text-2xl text-center">
                                        React
                                    </h3>
                                </a>

                            </div>

                        </div>

                    </div>


                </section>

                <section className="bg-black">
                    <div className="max-w-7xl mx-auto px-8 py-4 space-y-16">
                        <h2 className="font-heading font-bold text-white text-4xl text-center">
                        </h2>

                        <div className="grid md:grid-cols-3 gap-16">
                            <div className="space-y-4">
                                <a href="#" target="_blank" className="space-y-2">

                                    <img className="mx-auto h-32 w-32 rounded-full xl:w-32 xl:h-32 duration-500 hover:scale-110 hover:shadow-xl" src={vscode}/>


                                    <h3 className="font-medium text-white text-2xl text-center">
                                        Vs Code
                                    </h3>
                                </a>
                            </div>

                            <div className="space-y-4">
                                <a href="#" target="_blank" className="space-y-2">


                                    <img className="mx-auto h-40 w-40 rounded-full xl:w-32 xl:h-32 duration-500 hover:scale-110 hover:shadow-xl" src={figma}/>

                                    <h3 className="font-medium text-white text-2xl text-center">
                                        Figma
                                    </h3>
                                </a>


                            </div>

                            <div className="space-y-4">
                                <a href="#" target="_blank" className="space-y-2">

                                    <img className="mx-auto h-40 w-40 rounded-full xl:w-32 xl:h-32 duration-500 hover:scale-110 hover:shadow-xl" src={intelij}/>

                                    <h3 className="font-medium text-white text-2xl text-center">
                                        IntelliJ Idea
                                    </h3>
                                </a>

                            </div>

                        </div>

                    </div>
                </section>



                <section className="flex flex-col justify-center bg-black max-w-full min-h-screen px-4 py-10 mx-auto sm:px-6">
                    <div className="flex flex-wrap items-center justify-between mb-8">
                        <h2 className="mr-10 text-4xl font-bold font-mono text-white text-center leading-none md:text-5xl">
                            PROJECTS
                        </h2>

                    </div>

                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
                            <img className="object-cover object-center w-full h-48 duration-500 hover:scale-110 hover:shadow-xl" src={watchhub}/>

                            <div className="flex flex-grow">
                                <div className="triangle"></div>
                                <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400 text">
                                    <div>

                                        <a href="https://github.com/ImIshan7/Zen-Watch-Hub.git"
                                           className="block mb-4 text-2xl text-black font-mono font-bold  leading-tight hover:underline hover:text-blue-600">
                                            Zen Watch Hub React Web Application  </a>
                                        <p className="mb-4 font-medium">
                                            This is a Web E commerce application for selling watches. This is a full stack application
                                            Using React,Tailwind CSS,IntelliJ Idea Technologies.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
                            <img className="object-cover object-center w-full h-48 duration-500 hover:scale-110 hover:shadow-xl" src={traveller}/>
                            <div className="flex flex-grow">
                            <div className="triangle"></div>
                            <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400">
                                <div>
                                    <a href="https://github.com/ImIshan7/Zen-Traveler-Blog-React-Application.git"
                                       className="block mb-4 text-2xl text-black font-mono font-bold  leading-tight hover:underline hover:text-blue-600">
                                        Zen Traveller Blog React Web Application
                                    </a>
                                    <p className="mb-4">
                                        This is a Web Blog application for travellers. This is a full stack application
                                        Using React,Tailwind CSS,IntelliJ Idea Technologies.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                        <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
                            <img className="object-cover object-center w-full h-48 duration-500 hover:scale-110 hover:shadow-xl" src={netflix}/>

                            <div className="flex flex-grow">
                                <div className="triangle"></div>
                                <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400">
                                    <div>
                                        <a href="https://github.com/ImIshan7/Netflix-clone-React-application.git"
                                           className="block mb-4 text-2xl text-black font-mono font-bold  leading-tight hover:underline hover:text-blue-600">
                                            Netflix Clone React Web Application
                                        </a>
                                        <p className="mb-4">
                                            This is a Web application for watching movies. This is a full stack application
                                            Using React,Tailwind CSS,IntelliJ Idea Technologies.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
                            <img className="object-cover object-center w-full h-48 duration-500 hover:scale-110 hover:shadow-xl" src={google}/>

                            <div className="flex flex-grow">
                                <div className="triangle"></div>
                                <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400">
                                    <div>
                                        <a href="https://github.com/ImIshan7/Google-Clone-React-Application.git"
                                           className="block mb-4 text-2xl text-black font-mono font-bold  leading-tight hover:underline hover:text-blue-600">
                                            Google Clone React Web Application
                                        </a>
                                        <p className="mb-4">
                                            This is a Web application for searching. This is a full stack application
                                            Using React,Tailwind CSS,IntelliJ Idea Technologies.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
                            <img className="object-cover object-center w-full h-48 duration-500 hover:scale-110 hover:shadow-xl" src={reactport}/>

                            <div className="flex flex-grow">
                                <div className="triangle"></div>
                                <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400">
                                    <div>
                                        <a href="https://github.com/ImIshan7/My-Portfolio.git"
                                           className="block mb-4 text-2xl text-black font-mono font-bold  leading-tight hover:underline hover:text-blue-600">
                                            Portfolio React Web Application
                                        </a>
                                        <p className="mb-4">
                                            This is a Web application for my portfolio. This is a full stack application
                                            Using React,Tailwind CSS,IntelliJ Idea Technologies.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
                            <img className="object-cover object-center w-full h-48 duration-500 hover:scale-110 hover:shadow-xl" src={game}/>

                            <div className="flex flex-grow">
                                <div className="triangle"></div>
                                <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400">
                                    <div>
                                        <a href="https://github.com/ImIshan7/Night-Game-2D.git"
                                           className="block mb-4 text-2xl text-black font-mono font-bold  leading-tight hover:underline hover:text-blue-600">
                                            Night Servior 2D Game Application
                                        </a>
                                        <p className="mb-4">
                                            This is a 2D game application. This is a full stack application
                                            Using HTML,CSS,Java Script and Intellij Idea Technologies.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
                            <img className="object-cover object-center w-full h-48 duration-500 hover:scale-110 hover:shadow-xl" src={porthtml}/>


                            <div className="flex flex-grow">
                                <div className="triangle"></div>
                                <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400">
                                    <div>
                                        <a href="https://github.com/ImIshan7/MyPortfolio.git"
                                           className="block mb-4 text-2xl text-black font-mono font-bold  leading-tight hover:underline hover:text-blue-600">
                                            Portfolio  Web Application
                                        </a>
                                        <p className="mb-4">
                                            This is a Web application for my portfolio. This is a full stack application
                                            Using HTML,CSS,and Intellij Idea Technologies.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
                            <img className="object-cover object-center w-full h-48 duration-500 hover:scale-110 hover:shadow-xl" src={hostel}/>

                            <div className="flex flex-grow">
                                <div className="triangle"></div>
                                <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400">
                                    <div>
                                        <a href="https://github.com/ImIshan7/Hostel-System-Hibernate.git"
                                           className="block mb-4 text-2xl text-black font-mono font-bold  leading-tight hover:underline hover:text-blue-600">
                                            Hostel Management System
                                        </a>
                                        <p className="mb-4">
                                            This is a Web application for managing hostel. This is a full stack application
                                            Using Hibernate,layered Architecture and Intellij Idea Technologies.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
                            <img className="object-cover object-center w-full h-48 duration-500 hover:scale-110 hover:shadow-xl" src={computershop}/>

                            <div className="flex flex-grow">
                                <div className="triangle"></div>
                                <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400">
                                    <div>
                                        <a href="https://github.com/ImIshan7/Computershop.git"
                                           className="block mb-4 text-2xl text-black font-mono font-bold leading-tight hover:underline hover:text-blue-600">
                                            Computer Shop Management System
                                        </a>
                                        <p className="mb-4">
                                            This is a Web application for managing computer shop. This is a full stack application
                                            Using Java,MVC Architecture and Intellij Idea Technologies.
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                <div className="max-w-full-xl mx-auto py-8 px-4 lg:py-16 lg:px-6 bg-black">
                    <div className=" mb-10">
                        <h2 className="text-5xl tracking-tight font-bold text-white font-mono text-primary-800">SERVICES</h2>
                    </div>

                    <div className="flex flex-col md:flex-row">

                        <div className="mr-0 md:mr-8 mb-6 md:mb-0">
{/*

*/}                            <img className="w-1/2 md:w-full mx-auto  duration-500 hover:scale-110 hover:shadow-xl" src={service01}/>

                        </div>


                        <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
                            <div className="w-full sm:w-1/2 mb-4 px-2 ">
                                <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                                    <h3 className="text-2xl font-bold font-mono text-white underline text-md mb-6">Web Application Development</h3>
                                    <p className="text-lg text-white"> Create web-based applications for businesses and organisations. </p>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2 mb-4 px-2 ">
                                <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                                    <h3 className="text-2xl font-bold font-mono text-white underline text-md mb-6">Mobile Applications Development</h3>
                                    <p className="text-lg text-white"> Design and develop mobile applications for IOS and ANDROID platforms. </p>
                                </div>
                            </div>

                            <div className="w-full sm:w-1/2 mb-4 px-2 ">
                                <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                                    <h3 className="text-2xl font-bold font-mono text-white underline text-md mb-6">Stand-alone Application Development</h3>
                                    <p className="text-lg text-white">Create web-based applications for businesses and organisations.</p>
                                </div>
                            </div>

                            <div className="w-full sm:w-1/2 mb-4 px-2 ">
                                <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                                    <h3 className="text-2xl font-bold font-mono text-white underline text-md mb-6">UI/UX Design</h3>
                                    <p className="text-lg text-white">Offer usr interface and user experience design service to create intuitive and user friendly applications.</p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>





















            </div>
                );
    }
}