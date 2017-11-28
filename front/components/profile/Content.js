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

    try{
        console.log("Simple Component: ", component);
        let Result = components[component];
        return <Result/>;
    }
    catch (e) {
        return( <p> Content is currently working on </p>)
    }

    // for (let key in components) {
    //     console.log("Key: ", key);
    //     console.log("Component: ", component);
    //     if (component === key) {
    //         let Result = components[key];
    //         return <Result/>;
    //     } else{
    //         return( <p> Content is currently working on </p>)
    //     }
    // }
};

export default Content;