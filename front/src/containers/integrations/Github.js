import React, { Component } from 'react';
import axios from "axios";

class Github extends Component {


    componentDidMount(){
        const code = this.props.location.search.split("=")[1];
        // axios({
        //     url:"/secure/token/github",
        //     method:"POST",
        //     data:{
        //         code
        //     }
        // })
        // .then((response) => {
        //     console.log("Response: ", response.data);
        // })
        // .catch(() => {
        //     // TODO
        //     // Handle errors about Code
        // });

    }

    render() {
        
        console.log("Hello World: ", this.props);
        return (
            <div>
                <h1>Hello I am Github</h1>
            </div>
        );
    }
}

export default Github;