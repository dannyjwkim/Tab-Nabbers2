import React from 'react';
import Event from '../../containers/_Event';
import Edit_profile from '../../components/profile/Edit_Profile';
import Setting from '../../containers/Settings';

const Content = ({component}) => {

    const components = {
        Event,
        Edit_profile,
        Setting
    };

    try{
        console.log("Simple Component: ", component);
        let Result = components[component];
        return <Result/>;
    }
    catch (e) {
        return( <p> Content is currently working on </p>)
    }

};

export default Content;