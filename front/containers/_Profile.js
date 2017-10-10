

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
import Sidebar from '../components/common/Sidebar';
import {Grid} from 'semantic-ui-react';
import Picture from '../components/common/Picture';


class Profile extends React.Component {

    state = {
        activeItem: 'event'
    };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });



    render() {
        const { activeItem } = this.state;
        const camelCase = activeItem[0].toUpperCase() + activeItem.slice(1);

        return (
            <div >
                <Grid celled className="profile">
                    <Grid.Row>
                        <Grid.Column mobile = {13} tablet = {4} computer = {3}  largeScreen = {2} >
                            <Picture/>
                            <Sidebar
                                handleItemClick = {this.handleItemClick}
                                activeItem = {activeItem}
                            />
                        </Grid.Column>

                        <Grid.Column
                            mobile = {13}
                            tablet = {12}
                            computer = {13}
                            largeScreen = {13}
                            className = 'content'>

                           <h1>{activeItem}</h1>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <Footer />
            </div>
        );
    }
}


/**
 * Getting data from Redux here
 * @param state
 */
function mapStateToProps(state) {
    return {

    }
}
export default connect(mapStateToProps)(Profile);
