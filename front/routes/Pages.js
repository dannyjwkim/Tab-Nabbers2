/**
 * Created by ea375w on 7/19/2017.
 */

import Signin from "../containers/_StudentCredentials";
import Recruiter from "../containers/_Recruiter";
import Profile from "../containers/_Profile";
import About from "../containers/_About";
import D3Map from "../containers/_D3Map";
import Event from "../containers/_Event";

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
