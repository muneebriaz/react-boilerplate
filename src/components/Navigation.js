import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useTransition, animated } from 'react-spring'
import MenuItems from './MenuItems'

function Navigation() {

    const [showMenu, setShowMenu] = useState(false)

    const maskTransitions = useTransition(showMenu, null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })

    const transitions = useTransition(showMenu, null, {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0, transform: 'translateX(-100%)' },
    })

    return (
        <nav className="">
            <FontAwesomeIcon
                icon={faBars}
                className="cursor-pointer text-xl"
                onClick={() => setShowMenu(!showMenu)}
            />
            {
                maskTransitions.map(({ item, key, props }) =>
                    item &&
                    <animated.div
                        key={key} style={props}
                        onClick={() => setShowMenu(false)}
                        className="bg-blue-500 bg-opacity-25 fixed top-0 left-0 w-full h-full z-50">
                    </animated.div>)

            }
            {
                transitions.map(({ item, key, props }) =>
                    item &&
                    <animated.div
                        key={key} style={props}
                        className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow p-3">

                        <MenuItems
                            closeMenu={() => setShowMenu(false)}
                        />

                    </animated.div>)
            }
        </nav>
    )
}

export default Navigation 