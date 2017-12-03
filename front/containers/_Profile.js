/**
 *
 * Menu Side bar component that shows a nice looking scrolling bar
 *
 */

import React from "react";
import "../public/css/profile.scss";
import "../public/css/footer.scss";
import {connect} from "react-redux";
import Footer from "../components/common/Footer";
import {browserHistory} from 'react-router';
import Sidebar from '../components/common/Sidebar';
import {Grid, Button} from 'semantic-ui-react';
import Content from '../components/profile/Content';
import Navbar from '../components/common/Navbar';

class Profile extends React.Component {

    state = {
        activeItem: 'event'
    };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    logout = () => {
        localStorage.removeItem('credentials');
        browserHistory.replace('/');
    };



    render() {
        const { activeItem } = this.state;
        const { content } = this.props.params;

        let component = content[0].toUpperCase() + content.slice(1);


        return (
            <div>
                <Navbar/>
                {/*<Button onClick={this.logout}> Log out </Button>*/}
                <Grid celled  divided='vertically' className="profile">
                    <Grid.Row columns = {2}>
                        <Grid.Column width = {3} className="left-sidebar">
                            <img src="https://yt3.ggpht.com/-r_tiN0JoSiE/AAAAAAAAAAI/AAAAAAAAAAA/AbgSGAVS35M/s900-c-k-no-mo-rj-c0xffffff/photo.jpg" />

                            <Sidebar
                                handleItemClick = {this.handleItemClick}
                                activeItem = {activeItem}
                            />
                        </Grid.Column>

                        <Grid.Column
                            width = {10}
                            className = 'content'>

                           <div>
                                <Content component = {component}/>
                           </div>
                        </Grid.Column>

                        <Grid.Column
                            width = {3}
                            className = 'hackerthons' id="hackerthons">

                           <div>
                               <h2>Hackerthons</h2>

                               <div>
                                   <div className="hack">
                                       <h4>Building JavaScript API</h4>
                                       <p>Lorem ipsum dolor sit amet, consectetur</p>
                                       <p>9:00 AM</p>
                                   </div>

                                   <div className="hack">
                                       <h4>Building JavaScript API</h4>
                                       <p>I am also a simple Hack for now</p>
                                       <p>9:00 AM</p>
                                   </div>
                               </div>
                           </div>
                        </Grid.Column>


                    </Grid.Row>
                </Grid>

                <Footer />
            </div>
        );
    }
}


/**
 * Getting state from Redux Store
 * @param state
 */
function mapStateToProps(state) {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}


export default connect(mapStateToProps)(Profile);
