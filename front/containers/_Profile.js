

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
import {Grid, Button} from 'semantic-ui-react';
import Content from '../components/profile/Content';


class Profile extends React.Component {

    state = {
        activeItem: 'event'
    };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });



    render() {
        const { activeItem } = this.state;
        const camelCase = activeItem[0].toUpperCase() + activeItem.slice(1);

        console.log(camelCase);
        return (
            <div >
                <Grid celled  divided='vertically'>
                    <Grid.Row columns = {2}>
                        <Grid.Column width = {3} >
                            <img src="https://yt3.ggpht.com/-r_tiN0JoSiE/AAAAAAAAAAI/AAAAAAAAAAA/AbgSGAVS35M/s900-c-k-no-mo-rj-c0xffffff/photo.jpg" />

                            <Sidebar
                                handleItemClick = {this.handleItemClick}
                                activeItem = {activeItem}
                            />
                        </Grid.Column>

                        <Grid.Column
                            width = {13}
                            className = 'content'>

                           <div>
                                <Content activeItem = {camelCase}/>
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

    }
}


export default connect(mapStateToProps)(Profile);
