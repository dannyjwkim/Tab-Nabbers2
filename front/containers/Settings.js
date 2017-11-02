
import React from 'react';
import { ToastContainer } from "react-toastr";


class Settings extends React.Component{

    render(){

        let container;

        return(
            <div>
                <ToastContainer
                    ref={ref => container = ref}
                    className="toast-top-right"
                />
                <p>Let's test this out</p>

                <button onClick={() => {}}>Click me</button>
            </div>
        );
    }
}

export default Settings;