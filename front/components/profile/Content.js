import React from 'react';
import Event from '../../containers/_Event';
import Edit_profile from '../../components/profile/Edit_Profile';
import Setting from '../../containers/Settings';
import Close_account from '../../containers/CloseAccount';

const Content = ({component}) => {

    const components = {
        Event,
        Edit_profile,
        Setting,
        Close_account
    };
    console.log(component);

    for (let key in components) {
        if (component === key) {
            let Result = components[component];
            return <Result/>;
        } else{
            return( <p> Not found!! </p>)
        }
    }
};

export default Content;