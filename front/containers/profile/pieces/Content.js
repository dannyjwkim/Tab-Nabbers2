/**
 * Created by esterlingaccime on 8/12/17.
 */
import React from "react";

import InlineEdit from "react-edit-inline";

const Content = ({firstname, lastname, job, street, dataChanged}) =>{

    return(

        <div className="profile__content">

            <div className="profile__content--about">
                <div className="header">
                    <h4 className="left"> <InlineEdit
                        activeClassName="firstname"
                        text={firstname}
                        paramName="firstname"
                        change={dataChanged}/></h4>


                    <h4 className=""> <InlineEdit
                        activeClassName="lastname"
                        text={lastname}
                        paramName="lastname"
                        change={dataChanged}/></h4>

                </div>

                <div className="bookmarksection">
                    <p className="left"> <InlineEdit
                        activeClassName="job"
                        text={job}
                        paramName="job"
                        change={dataChanged}/></p>

                    <p className="left"> <i className="marker icon"> </i> <InlineEdit
                        activeClassName="addr"
                        text={street}
                        paramName="addr"
                        change={dataChanged}/></p>

                    <p className="right bookmark"><i className="bookmark icon"> </i>Bookmark</p>

                </div>
            </div>

            <div className="profile__content--ranking">
                <h3>Rankings</h3>
                <div>
                    {/*<Rating maxRating={5} clearable />*/}
                </div>
            </div>

            <div className="profile__content--contact">
                <p> <i className="mail outline icon"> </i>Send a message</p>
                <p> <i className="checkmark icon"> </i> Contacts</p>
                <p>Report a User</p>
            </div>


            <div className="profile__content--timeline">
                {/*<p><i className="unhide icon"> </i> Timeline</p>*/}
                {/*<p> <i className="user icon"> </i>About</p>*/}

                {/*<Menu pointing secondary>*/}
                    {/*<Menu.Item name='Meetup Events' active={activeItem === 'Timeline'} onClick={this.handleItemClick}/>*/}
                    {/*<Menu.Item name='About' active={activeItem === 'About'} onClick={this.handleItemClick} />*/}

                {/*</Menu>*/}

                {/*<div>*/}
                    {/*{(activeItem === 'About') ? <About*/}
                        {/*phoneNumber = {phoneNumber }*/}
                        {/*homeaddress = {homeaddress}*/}
                        {/*email = {email}*/}
                        {/*site = {site}*/}
                        {/*birthday = {birthday}*/}
                        {/*gender = {gender}*/}
                        {/*dataChanged = {this.dataChanged}*/}

                    {/*/> :  <Event />}*/}
                {/*</div>*/}

            </div>

        </div>
    );
};

export default Content;