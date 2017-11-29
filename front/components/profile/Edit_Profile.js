import React from 'react';
    import {Input, Form, Radio, TextArea, Button} from 'semantic-ui-react';
import '../../public/css/edit.scss';


class Edit_Profile extends React.Component {

    state = {};
    handleChange = (e, {value}) => this.setState({value});

    render() {
        return (
            <Form>
                <div className="edit_profile">

                    <Form.Field>
                        <label htmlFor="Name">Name</label>
                        <Input/>
                    </Form.Field>


                    <Form.Field>
                        <label htmlFor="Email">Email</label>
                        <Input/>
                    </Form.Field>


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


                    <Form.Field>
                        <label htmlFor="Birthday">Birthday</label>
                        <Input type="date"/>
                    </Form.Field>


                    <Form.Field>
                        <label htmlFor="Phone number">Phone number</label>
                        <Input />
                    </Form.Field>


                    <Form.Field>
                        <label htmlFor="School">School</label>
                        <Input />
                    </Form.Field>


                    <Form.Field>
                        <label htmlFor="Address">Address</label>
                        <Input />
                    </Form.Field>


                    <Form.Field>
                        <label htmlFor="City">City</label>
                        <Input />
                    </Form.Field>


                    <Form.Field>
                        <label htmlFor="Zip Code">Zip Code</label>
                        <Input />
                    </Form.Field>

                    <Form.Field>
                        <label htmlFor="Biography">Biography</label>
                        <TextArea />
                    </Form.Field>

                    <Button> Save Changes </Button>


                </div>
            </Form>
        );
    };
};

export default Edit_Profile;


