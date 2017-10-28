import React from 'react'
import { Menu } from 'semantic-ui-react'


/**
 *
 * Menu Side bar component that shows a nice looking scrolling bar
 * @function Sidebar
 *
 */
const Sidebar = ({handleItemClick, activeItem}) => {


    let pages = [
        'edit profile',
        'network',
        'events',
        'Meet ups',
        'settings',
        'close account',
        'student'

    ];

    return (
        <Menu pointing secondary vertical  >

            {pages.map((name, index) => (

                <Menu.Item className='sidebar'
                    name={name}
                    key={index}
                    active={activeItem === name}
                    onClick={handleItemClick} />
            ))}
        </Menu>
    )
};

export default Sidebar;