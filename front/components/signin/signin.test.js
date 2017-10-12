import React from 'react';
import Signin from './signin';
import {shallow} from 'enzyme';


describe('<Signin/>', () =>{

  it ('Mounts without problems', () => {

    const shallowSignin = shallow(<Signin/>);

  });

  it ('Renders the right number of input elements', () => {

    const shallowSignin = shallow(<Signin/>);
    expect(shallowSignin.find('input').length).toBe(4);
    
  });

  it ('Handles the click event appropriately', () => {
    
    const mockSubmit = jest.fn();
    const shallowSignin = shallow(<Signin handleSubmit={mockSubmit} />);
    shallowSignin.find('input.ui.button.large.fluid').simulate('click');
    expect(mockSubmit).toHaveBeenCalled();

  });

  it ('Renders an input element with the right text', () => {

    const shallowSignin = shallow(<Signin />);
    expect(shallowSignin.find('div.ui.checkbox > label').text()).toEqual('Remember me');
    expect(shallowSignin.find('input#username').props().placeholder).toEqual('Email...');
    expect(shallowSignin.find('input#password').props().placeholder).toEqual('Password...');

  });
});