import React from 'react'

interface Steps {
    number: number;
    primary: string;
    secondary: string;
}

const stepCards: Steps[] = [
    {
        number: 1,
        primary: 'Fill in the form',
        secondary: 'Shop name, hours, phone, address and a plain text catalog.'
    },
    {
        number: 2,
        primary: 'Pick a look',
        secondary: 'Choose the theme that suits your shop.'
    },
    {
        number: 3,
        primary: 'Get your page',
        secondary: 'A mobile shop page that updates as you type.'
    }
]


const StepCards = () => {
    return (
        <div className='flex items-stretch justify-center gap-4 w-full max-w-5xl mx-auto px-4 font-sans'>

            {stepCards.map((steps, index) => (
                <div key={index} className='flex-1 p-5 border border-gray-200 shadow-xs rounded-xl'>
                    <div className='bg-black w-fit px-2 py-0.5 text-white rounded-2xl text-sm'>{steps.number}</div>
                    <div className='mt-3 mb-1 font-bold'>{steps.primary}</div>
                    <div className='text-gray-500 text-sm leading-relaxed'>
                        {steps.secondary}
                    </div>
                </div>
            ))}

        </div>
    )
}

export default StepCards