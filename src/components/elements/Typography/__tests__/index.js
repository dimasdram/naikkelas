import React from 'react';
import renderer from 'react-test-renderer';
import Typography from '../index';
import { shallow } from 'enzyme';
jest.mock('react-router-dom');

describe('Typography', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Typography>test</Typography>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('check children', () => {
    const children = 'test';
    const tree = shallow(<Typography>{children}</Typography>);
    expect(tree.props().children === children).toBe(true);
  });

  ['black', 'white', 'grey', 'error', 'blue'].forEach(color => {
    it(`render with color ${color}`, () => {
      const container = 'test';
      const tree = shallow(<Typography color={color}>{container}</Typography>);
      expect(tree.exists()).toBe(true);
    });
  });

  [
    'button',
    'buttonSmall',
    'caption',
    'captionParagraph',
    'contentLabelParagraph',
    'contentParagraph1',
    'contentParagraph2',
    'footer',
    'formCaptionParagraph',
    'formLabel',
    'formLabelCap',
    'formLabelSecondary',
    'formLabelTooltip',
    'h1',
    'h2',
    'headFormLabel',
    'subLevel',
    'subLevelBold',
    'text',
    'textHead',
    'ubuntuFontStyle'
  ].forEach(variant => {
    it(`render with variant ${variant}`, () => {
      const container = 'test';
      const tree = shallow(
        <Typography variant={variant}>{container}</Typography>
      );
      expect(tree.exists()).toBe(true);
    });
  });
});
