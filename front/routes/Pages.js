/**
 * Created by ea375w on 7/19/2017.
 */

import Signin from "../containers/StudentCredentials";
import Recruiter from "../containers/Recruiter";
import Profile from "../containers/Profile";
import About from "../containers/About";
import D3Map from "../containers/D3Map";
import Event from "../containers/Event";

import Home from "../containers/_Home";

const pages = {
        about:About,
        student:Signin,
        profile:Profile,
        map:D3Map,
        recruiter:Recruiter,
        event:Event,
        home:Home
};


export default pages;
