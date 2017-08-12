/**
 * Created by ea375w on 7/19/2017.
 */

import Signin from "../components/Student";
import Recruiter from "../components/Recruiter";
import Profile from "../containers/profile/Profile";
import About from "../components/About";
import D3Map from "../components/D3Map";
import Event from "../components/Event";

import Home from "../containers/Home";

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
