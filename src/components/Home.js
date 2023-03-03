import React from 'react';

const Home = () => {
return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
    
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-blue-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
        John Daniel Dorado
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
        I'm an Intern of Hacktiv Colab Inc.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
        I am from STI College Dasmarinas. I am an Intern from
        Hacktiv Colab Inc and I am assigned as a Developer.
        I study Tailwind CSS and React JS.
        </p>
    </div>
    </div>
);
};

export default Home;