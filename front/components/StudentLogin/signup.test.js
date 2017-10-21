import React from 'react';
import {mount, shallow} from 'enzyme';
import Signup from './signup';
import {Button} from 'semantic-ui-react';

describe('<Signup/>', () => {

  it ('Mounts without problems', () => {
    const shallowSignup = shallow(<Signup/>);
  });

  it ('Has the right class names', () => {
    const shallowSignup = shallow(<Signup/>);
    expect(shallowSignup.hasClass('shadowBox')).toBe(true);
    expect(shallowSignup.childAt(0).childAt(0).childAt(0).childAt(0).hasClass('container')).toBe(true);
    expect(shallowSignup.childAt(0).childAt(0).childAt(0).childAt(0).hasClass('sideContainer')).toBe(true);
    expect(shallowSignup.find('div.container.sideContainer').childAt(0).hasClass('leftHeading')).toBe(true);
  });

  it('Elements have the right text', () => {
    const shallowSignup = shallow(<Signup/>);
    const deepSignup = mount(<Signup/>);
    expect(shallowSignup.find('h1.leftHeading').text()).toEqual('Sign up');
    expect(mount(<Signup/>).find('Button').at(0).text()).toEqual('SIGN ME UP ');
  });

  it ('Has right number of elements', () => {
    const shallowSignup = shallow(<Signup/>);
    expect(shallowSignup.find('Divider').length).toBe(4);
    expect(shallowSignup.find('input').length).toBe(4);
    expect(shallowSignup.find(Button).length).toBe(1);
    expect(shallowSignup.find('h6').length).toBe(1);
    
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