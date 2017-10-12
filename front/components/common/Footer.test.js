import React from 'react';
import {shallow, mount} from 'enzyme';
import FooterPage from './Footer';


describe('<FooterPage', () => {

  it ('Renders without error', () => {
    shallow(<FooterPage/>)
  });

  it ('Grid sub component has right props', () => {
    const deepFooterPage = mount(<FooterPage/>);
    const grid = deepFooterPage.find('Grid');
    // console.log(shallowFooterPage.find('Grid').props().columns);
    expect(grid.props().columns).toEqual(3);
    expect(grid.props().divided).toEqual(true); 
  });

  it ('<p> elements have the right text', () => {
    const deepFooterPage = mount(<FooterPage/>);
    const paragraphText = deepFooterPage.find('p').map( (paragraph) => {return paragraph.text()});
    const expectedText = ['About BootCruit', 'Get Involved', 'Follow Us', '©2017  BootCruit.com '] 
    // console.log(paragraphText);
    // console.log(expectedText);
    expect(paragraphText).toEqual(expectedText);
  });

  it ('<li> elements have the right text', () => {
    const deepFooterPage = mount(<FooterPage/>);
    const expectedtextOne = "BootCruit is a single-click staffing solution to connect recruiters and employers to current and recently graduated coding bootcamp students.";
    const textOne = deepFooterPage.find('ul > li').first().text();

    const expectedtextTwo = ['Join a Group',
    'Contribute to BootCruit',
    'Submit a Bug',
    'Report a Security issue'];
    
    const textTwo = deepFooterPage.find('ul.involved').children().map( (node) => {return node.text()});

    // console.log(textTwo);
    // console.log(deepFooterPage.find('p.p').closest('ul'))

    expect(expectedtextTwo).toEqual(textTwo);
    expect(expectedtextOne).toEqual(textOne);
    expect(deepFooterPage.find('ul.involved').children().length).toBe(4);
  });


  
});