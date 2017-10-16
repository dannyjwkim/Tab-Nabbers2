import React from 'react';
import {mount, shallow} from 'enzyme';
import Signup from '../signup/signup';

describe('<Signup/>', () => {

  it ('Mounts without problems', () => {
    const shallowSignup = shallow(<Signup/>);
  });

  it ('Has the right class names', () => {
    const shallowSignup = shallow(<Signup/>);
    expect(shallowSignup.hasClass('shadowBox')).toBe(true);
    expect(shallowSignup.childAt(0).hasClass('container')).toBe(true);
    expect(shallowSignup.childAt(0).hasClass('mainContainer')).toBe(true);
    expect(shallowSignup.childAt(0).childAt(0).hasClass('container')).toBe(true);
    expect(shallowSignup.childAt(0).childAt(0).hasClass('sideContainer')).toBe(true);
    expect(shallowSignup.childAt(0).childAt(1).hasClass('container')).toBe(true);
    expect(shallowSignup.childAt(0).childAt(1).hasClass('rightContainer')).toBe(true);
    expect(shallowSignup.childAt(0).childAt(1).childAt(0).hasClass('rightHeading')).toBe(true);
    expect(shallowSignup.childAt(0).childAt(0).childAt(0).hasClass('leftHeading')).toBe(true);
  });

  it('Elements have the right text', () => {
    const shallowSignup = shallow(<Signup/>);
    const deepSignup = mount(<Signup/>);
    expect(shallowSignup.find('h1.leftHeading').text()).toEqual('Sign up');
    expect(shallowSignup.find('h1.rightHeading').text()).toEqual('Sign In withSocial Network');
    expect(deepSignup.find('a[href="/auth/facebook"]').text()).toEqual('Facebook');
    expect(deepSignup.find('a[href="/auth/twitter"]').text()).toEqual('Twitter');
    expect(deepSignup.find('a[href="/auth/google"]').text()).toEqual('Google+');
    expect(deepSignup.find('a[href="/auth/linkedin"]').text()).toEqual('LinkedIn');
    expect(shallowSignup.find('button.circle h3').text()).toEqual('OR');
    expect(shallowSignup.find('button[name="action"]').text()).toEqual('SIGN ME UP');
  });

  it ('Has right number of elements', () => {
    const shallowSignup = shallow(<Signup/>);
    expect(shallowSignup.find('Divider').length).toBe(4);
    expect(shallowSignup.find('input').length).toBe(4);
    expect(shallowSignup.find('button').length).toBe(2);
    expect(shallowSignup.find('a').length).toBe(4);
    
  });

  it('Onchange event works on password field', () => {
    const someValue = "Some string";
    const mockChangePassword = jest.fn();
    const deepSignup = mount(<Signup onChangePassword={mockChangePassword}  />);
    const input = deepSignup.find('input.password.input');
    // console.log(input);
    input.simulate('change', {value:someValue});
    deepSignup.update();
    expect(mockChangePassword).toHaveBeenCalled();
    expect(mockChangePassword.mock.calls.length).toBe(1);
    // console.log(mockChangePassword.mock.calls[0][0].value, 'mock change password');
    expect(mockChangePassword.mock.calls[0][0] .value).toBe(someValue);
    
    mockChangePassword.mockClear();

  });



});