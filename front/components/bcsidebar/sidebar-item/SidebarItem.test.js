import React from 'react';

import SidebarItem from './SidebarItem';

import {shallow, mount} from 'enzyme';

describe('<SidebarItem/>', () => {
  
  it('Mounts without problems', () => {
    const icon = "home";
    const label = "Button";
    const clickfunction = jest.fn();
    const shallowSidebar = shallow(<SidebarItem iconName={icon} clickHandler={clickfunction} buttonLabel={label}  />);

    expect(shallowSidebar.find('Icon')).toHaveLength(1);
    expect(shallowSidebar.find('Button')).toHaveLength(1);

  });

  it('Button to have correct props', () => {
    const icon = "home";
    const label = "Button";
    const clickfunction = jest.fn();
    const shallowSidebar = shallow(<SidebarItem iconName={icon} clickHandler={clickfunction} buttonLabel={label}  />);
    const button = shallowSidebar.find('Button');
    expect(button.props().basic).toBe(true);
    expect(button.props().inverted).toBe(true);
    expect(button.props().color).toBe('blue');


    // console.log(button.props());
  });

  it ('Handles click events appropriately', () => {
    const icon = "home";
    const label = "Button";
    const clickfunction = jest.fn();
    const shallowSidebar = shallow(<SidebarItem iconName={icon} clickHandler={clickfunction} buttonLabel={label}  />);
    const button = shallowSidebar.find('Button');

    button.simulate('click');
    expect(clickfunction).toHaveBeenCalled();
  });



});