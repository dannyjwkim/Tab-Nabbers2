import React from 'react';
import {Input, Form, Radio, TextArea, Button} from 'semantic-ui-react';
import '../public/css/edit.scss';
import Utils from '../utils/utils';
import {connect} from 'react-redux';
import {fetchUserProfile, setUserProfile, updateAddress} from '../actions/actions';

let utils = new Utils;


class Edit_Profile extends React.Component {

    constructor() {
        super();

        this.state = {};
    }

    handleChange = (e, {value}) => this.setState({value});

    componentWillMount = () => {
        this.props.dispatch(fetchUserProfile());
    };


    getValue = (event) => {
        let key = event.target.name,
            value = event.target.value;
        let current_change = {};
        if (key === 'city' || key === 'street_address' || key === 'zipcode') {
            this.props.dispatch(updateAddress(current_change));
        } else {
            current_change[key] = value;
        }
        console.log("Current Change: ", current_change);
        this.setState(current_change);
        this.props.dispatch(setUserProfile(current_change));
    };

    updateUserInfo = () => {
        utils.sendData('/edit_profile', this.state)
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err.response);
                console.log(err.response.data);
                console.log(err.message);
            });
    };

    render() {

        let {
            firstName,
            lastName,
            email,
            phoneNumber,
            address,
            bio
        } = this.props.user_profile;

        console.log("Props: ", this.props.user_profile);
        return (
            <Form>
                <div className="edit_profile">

                    <Form.Field>
                        <label htmlFor="Firstname">First Name</label>
                        <input type="text"
                               onChange={this.getValue}
                               name="firstName"
                               value={firstName}
                        />
                    </Form.Field>


                    <Form.Field>
                        <label htmlFor="Lastname">Lastname</label>
                        <Input onChange={this.getValue} name="lastName" value={lastName}/>
                    </Form.Field>

                    <section>
                        <Form.Field>
                            Selected gender: <b>{this.state.value}</b>
                        </Form.Field>


                        <Form.Field>
                            <Radio
                                label='Male'
                                name='sex'
                                value='Male'
                                checked={this.state.value === 'Male'}
                                onChange={this.handleChange}
                            />
                        </Form.Field>

                        <Form.Field>
                            <Radio
                                label='Female'
                                name='sex'
                                value='Female'
                                checked={this.state.value === 'Female'}
                                onChange={this.handleChange}
                            />
                        </Form.Field>
                    </section>


                    <Form.Field>
                        <label htmlFor="Birthday">Birthday</label>
                        <Input type="date" onChange={this.onChange} name="birthday"/>
                    </Form.Field>


                    <Form.Field>
                        <label htmlFor="Phone number">Phone number</label>
                        <Input onChange={this.getValue} name="phoneNumber" value={phoneNumber}/>
                    </Form.Field>


                    <Form.Field>
                        <label htmlFor="School">School</label>
                        <Input onChange={this.getValue} name="school"/>
                    </Form.Field>


                    <Form.Field>
                        <label htmlFor="Email">School</label>
                        <Input onChange={this.getValue} value={email}/>
                    </Form.Field>


                    <Form.Field>
                        <label htmlFor="Address">Address</label>
                        <Input
                            onChange={this.getValue}
                            name="street_address"
                            value={address ? address.street_address : ''}
                        />
                    </Form.Field>


                    <Form.Field>
                        <label htmlFor="City">City</label>
                        <Input
                            onChange={this.getValue}
                            name="city"
                            value={address ? address.city : ''}
                        />
                    </Form.Field>


                    <Form.Field>
                        <label htmlFor="Zip Code">Zip Code</label>
                        <Input
                            onChange={this.getValue}
                            name="zipcode"
                            value={address ? address.zipcode : ''}
                        />
                    </Form.Field>

                    <Form.Field>
                        <label htmlFor="Biography">Biography</label>
                        <TextArea onChange={this.getValue} name="bio" value={bio}/>
                    </Form.Field>

                    <Button onClick={this.updateUserInfo}> Save Changes </Button>

                </div>
            </Form>
        );
    };
};


const mapStateToProps = (state) => {
    return {
        user_profile: state.profile
    };
};


export default connect(mapStateToProps)(Edit_Profile);


