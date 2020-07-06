import React from 'react';

function ContactComponent() {

    return (
        <div>
            <h1 className="py-3 px-5">About us</h1>

            <div className="flex px-5 py-5">
                <div className="w-1/3 h-12 bg-gray-400 p-3">
                    <h2>Name - Muneeb Riaz</h2>
                </div>
                <div className="w-1/3 h-12 bg-gray-400 p-3">
                    <h2>Phone - +92 336 809 5989</h2>
                </div>
                <div className="w-1/3 h-12 bg-gray-400 p-3">
                    <h2>
                        Address - 888 H. No. Twin towers
                    </h2>
                </div>
            </div>

        </div>
    )

}

export default ContactComponent