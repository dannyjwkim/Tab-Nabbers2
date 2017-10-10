import React from "react";
import "../../public/css/footer.scss";
import { Grid, Divider, Icon } from 'semantic-ui-react';

const FooterPage = () => {
    return (
        <div>

            <footer>
                <Grid columns={3} divided>
                    <Grid.Row stretched>
                        <Grid.Column>

                            <p className="p">About BootCruit</p>
                            <ul>
                                <li><strong>BootCruit</strong> is a single-click staffing solution
                                    to connect recruiters and employers to current and
                                    recently graduated coding bootcamp students.</li>
                            </ul>

                        </Grid.Column>
                        <Grid.Column>

                            <p className="p">Get Involve</p>
                            <ul>
                                <li>Join a Group</li>
                                <li>Contribute to BootCruit</li>
                                <li>Submit a Bug</li>
                                <li>Report a Security issue</li>
                            </ul>

                        </Grid.Column>
                        <Grid.Column>

                            <p className="p">Follow Us</p>
                            <ul>
                                <li><a href="/"><Icon name='github alternate' size='large' /></a></li>
                                <li><a href="/"><Icon name='linkedin' size='large' /></a></li>
                                <li><a href="/"><Icon name='reddit' size='large' /></a></li>
                                <li><a href="/"><Icon name='mail outline' size='large' /></a></li>
                            </ul>

                        </Grid.Column>
                    </Grid.Row>
                    <Divider /> <br />
                    <Grid.Row stretched>
                        <p className="copyRight">&#169;2017 <a href="/"> BootCruit.com </a></p>
                    </Grid.Row>
                </Grid>
            </footer>
        </div>
    );
};
export default FooterPage;
