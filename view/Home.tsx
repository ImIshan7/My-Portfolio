import {Component} from "react";
import './style.css';

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
                                className="max-w-4xl mx-auto mb-4 text-6xl font-bold leading-tight text-white sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight">
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














            </div>
                );
    }
}