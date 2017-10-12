
import React from 'react';



import Event from '../../containers/_Event';
import EditProfile from '../../components/profile/Edit_Profile';
import Setting from '../../containers/Settings';
import CloseAccount from '../../containers/CloseAccount';

const Content = ({activeItem}) => {


    switch(activeItem){
        case 'Edit profile':
            return <EditProfile />;
        break;

        case 'Events':
            return(<Event />);
        break;

        case 'Settings':
            return(<Setting />);
        break;

        case 'Close account':
            return(<CloseAccount />);
        break;

        default:
            return(<p>Components haven't created yet</p>)

    }

};

export default Content;