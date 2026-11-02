import React from 'react'

const Navbar = () => {
    return (
        <div className="my-2 font-semibold font-sans flex items-center justify-between cursor-pointer">
            <div className="hover:underline decoration-indigo-500 decoration-2 underline-offset-4">Shoplet</div>
            <div className="text-sm flex items-center gap-2">
                <div className="hover:bg-linear-to-r from-cyan-500 to-blue-500 bg-size-[100%_2px] bg-no-repeat bg-bottom">Pick a look</div>
                <div className="hover:bg-linear-to-r from-yellow-500 to-amber-500 bg-size-[100%_2px] bg-no-repeat bg-bottom">Build yours</div>
            </div>
        </div>
    )
}

export default Navbar