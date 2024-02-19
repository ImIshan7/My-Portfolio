import {Component} from "react";
import background from '../images/background.jpeg';

export class Home extends Component {
    render() {
        return (
            <div>
                <nav className="bg-black text-white py-3 px-4 flex items-center justify-between">
                    <a className="font-extrabold text-yellow-400 text-xl tracking-tight" href="#">Ishan</a>
                    <div className="flex items-center">
                        <a className="text-lg font-bold  px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="#">Home</a>
                        <a className="text-lg font-bold  px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="#">About</a>
                        <a className="text-lg font-bold  px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="#">Project</a>
                        <a className="text-lg font-bold  px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="#">Service</a>
                        <a className="text-lg font-bold  px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="#">Contact</a>
                    </div>
                </nav>

                <section className="pt-12 bg-black sm:pt-16">
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="text-center">
                            <p
                                className="max-w-4xl mx-auto mb-4 text-6xl font-bold leading-tight text-white sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight">
                                Full Stack Developer
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
                                <img className="px-4 md:mpx-8" src="https://images.unsplash.com/photo-1628277613967-6abca504d0ac" />
                            </div>
                        </div>
                    </div>

                </section>



            </div>
        );
    }
}