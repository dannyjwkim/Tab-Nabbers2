/**
 * Created by esterlingaccime on 8/13/17.
 */
import React from "react";


const Signup = ({handleSubmit, bootcampOptions, cohortOptions}) => {

    return (
        <div className="ui form">
            <div className="field">
                <input type="text" placeholder="Firstname..." id="firstname" required/>
            </div>

            <div className="field">
                <input type="text" placeholder="Lastname..." id="lastname" required/>
            </div>

            <div className="field">
                <input type="text" placeholder="Email..." id="email" required/>
            </div>

            <div className="field">
                <input type="password" placeholder="Password..." id="password" required/>
            </div>

            <div className="field">
                <select className="ui dropdown">
                    {bootcampOptions}
                </select>
            </div>

            <div className="field">
                <select className="ui dropdown">
                    {cohortOptions}
                </select>
            </div>
            <br/>

            <div className="field">
                <input type="submit" value="Sign Up" className="ui button large fluid" onClick={handleSubmit}/>
            </div>
        </div>
    );
};


export default Signup;