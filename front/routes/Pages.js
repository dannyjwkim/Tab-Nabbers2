/**
 * Created by ea375w on 7/19/2017.
 */

import Signin from "../containers/_Student";
import Recruiter from "../containers/_Recruiter";
import Profile from "../containers/_Profile";
import About from "../containers/_About";
import D3Map from "../containers/_D3Map";
import Event from "../containers/_Event";
import Signup from "../components/signup";

const pages = {
        about:About,
        student:Signin,
        profile:Profile,
        map:D3Map,
        recruiter:Recruiter,
        event:Event,
        signup: Signup
};


export default pages;
