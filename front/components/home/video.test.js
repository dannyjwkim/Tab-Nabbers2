import React from 'react';
import {shallow} from 'enzyme';
import Video from './video';


describe('<Video/>', () => {

  it('Renders without issues', () => {
    const shallowVideo = shallow(<Video/>);

  });

  it ('Has the right classes', () => {
    const shallowVideo = shallow(<Video/>);
    console.log(shallowVideo.hasClass('video'));
    expect(shallowVideo.hasClass('video')).toBe(true);
    expect(shallowVideo.find('div.video').childAt(0).hasClass('video__buttons')).toBe(true);
    expect(shallowVideo.find('Link > button.blueButton').hasClass('blueButton')).toBe(true);
    expect(shallowVideo.find('Link > button.greenButton').hasClass('greenButton')).toBe(true);
    expect(shallowVideo.find('video').hasClass('fullscreen')).toBe(true);

  });

  it ('Has the right text', () => {
    const shallowVideo = shallow(<Video/>);

    expect(shallowVideo.find('div.video__buttons > h5').text()).toEqual('Single-Click Staffing Solutions');
    expect(shallowVideo.find('Link[to="/login"] > button').text()).toEqual('Student');
    expect(shallowVideo.find('Link[to="/recruiter"] > button').text()).toEqual('Employer');
    expect(shallowVideo.find('video.fullscreen').text()).toEqual('Your browser does not support the video tag. I suggest you upgrade your browser.');
    
  });

});