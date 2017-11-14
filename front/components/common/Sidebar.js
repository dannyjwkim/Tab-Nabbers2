import React from 'react'
import { Menu } from 'semantic-ui-react';
import {Link} from 'react-router';


/**
 *
 * Menu Side bar component that shows a nice looking scrolling bar
 * @function Sidebar
 *
 */
const Sidebar = ({handleItemClick, activeItem}) => {


    let pages = [
        'edit_profile',
        'network',
        'event',
        'meet_up',
        'setting',
        'close_account',
        'student'

    ];

    return (
        <Menu pointing secondary vertical  >
            {pages.map((name, index) => (
                <Link to = {"/profile/" + name} key = {index}>
                    <Menu.Item className='sidebar'
                    name={name}
                    key={index}
                    active={activeItem === name}
                    onClick={handleItemClick} />
                </Link>
            ))}
        </Menu>
    )
};

export default Sidebar;