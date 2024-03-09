import React from 'react'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center px-3 py-1 h-[60px] shadow-md'>
            <div className='font-bold text-2xl text-blue-900'>techsupportAI</div>
            <div className='flex justify-between space-x-4'>
                <div className='px-2 py-1 bg-blue-900 text-white rounded-md'>Login</div>
                <div className='px-2 py-1 bg-blue-900 text-white rounded-md'>Register</div>
            </div>
        </div>
    )
}

export default Navbar