import React from 'react'
import { Link } from 'react-router-dom'

function MenuItems(props) {
    return (
        <div>
            <div className="font-bold py-3">
                Reactive
            </div>
            <ul>
                <li>
                    <Link
                        to="/"
                        className="text-blue-500 py-3 border-b border-t block"
                        onClick={props.closeMenu}
                    >
                        Home</Link>
                </li>
                <li>
                    <Link
                        to="/about"
                        className="text-blue-500 py-3 border-b block"
                        onClick={props.closeMenu}
                    >
                        About</Link>
                </li>
                <li>
                    <Link
                        to="/contact"
                        className="text-blue-500 py-3 border-b block"
                        onClick={props.closeMenu}
                    >
                        Contact us</Link>
                </li>
            </ul>
        </div>
    )
}

export default MenuItems