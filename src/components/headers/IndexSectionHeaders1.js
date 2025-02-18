import React from 'react';

export default function IndexSectionHeaders1() {
    return (
        <React.Fragment>
            <>
                <section className="bg-black overflow-hidden pb-4">  <nav className="relative z-10 flex justify-between bg-transparent md:px-16 px-8 items-center">    <div className="py-8"><a className="text-sm text-white font-heading uppercase" href="#">HOBIMU JADI CUAN</a></div>    <div className="h-max"><a className="text-sm text-white font-heading uppercase" href="#contact">Contact Us</a></div></nav>  <div className="container mx-auto px-4">    <div className="relative pt-20 md:pb-40">      <div className="absolute top-0 left-1/2 mt-20 transform -translate-x-1/2 -ml-20 rounded-full h-20 md:h-128 w-80 md:w-128">        <img className="object-contain transform scale-200" src="boldui-assets/elements/shadow-blue-full.svg" alt />    </div>      <div className="absolute top-0 left-1/2 mt-40 lg:mt-20 rounded-full h-20 md:h-128 w-80 md:w-128">        <img className="object-contain transform scale-200" src="boldui-assets/elements/shadow-light-7.svg" alt />    </div>      <div className="absolute top-0 right-1/2 w-full transform translate-x-1/2 h-full">        <img className="h-full mx-auto" src="https://static.shuffle.dev/uploads/files/89/895cf3ff10837dc8a6570639f0b5cefcca0ec364/horizon.svg" alt />    </div>      <div className="relative max-w-6xl mx-auto px-10 lg:mt-20">        <a className="items-center rounded-full bg-yellow-300 hover:bg-yellow-400 transform duration-200 p-4 mb-2 w-max block mx-auto lg:ml-0" href="#products">          <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-arrow-down-right" viewBox="0 0 16 16">            <path fillRule="evenodd" d="M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0v6z" />        </svg>      </a>        <h2 className="mb-6 md:mb-0 md:text-6xl text-white uppercase font-heading sm:text-5xl text-4xl text-center lg:text-left">          <span>SHAPING THE</span>          <span className="block text-center">FUTURE OF GLOBAL</span>          <span className="block lg:text-right">TECH INDUSTRY</span>      </h2>        <span className="block mb-4 top-0 right-0 text-gray-500 lg:text-lg font-semibold uppercase tracking-widest lg:text-right text-center" href="#products">SINCE VII・XII・MMXXIII</span>        <p className="mb-2 text-lg text-gray-500 text-center mt-24 -mb-24 uppercase mx-auto">We are innovating, creating new industry standards, shaping the future of global digitalization.</p>    </div>  </div></div></section>


            </>
        </React.Fragment>
    );
}

