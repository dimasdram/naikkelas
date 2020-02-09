import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import classNames from 'classnames';
import { capitalizeFirst } from '../../../utils/text';

export default class Component extends React.Component {
  render() {
    const {
      children,
      classes,
      className,
      color,
      variant,
      ...other
    } = this.props;
    const customClass = classNames([
      classes[variant],
      classes[`color${capitalizeFirst(color)}`],
      className,
      classes.font
    ]);

    return (
      <Typography className={customClass} {...other}>
        {children}
      </Typography>
    );
  }
}

Component.defaultProps = {
  children: 'text',
  className: '',
  color: 'black',
  variant: 'h1'
};

Component.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.string
  ]),
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf([
    'black',
    'blackGrey',
    'white',
    'grey',
    'error',
    'blue',
    'orange',
    'green'
  ]),
  variant: PropTypes.oneOf([
    'button',
    'buttonSmall',
    'caption',
    'captionParagraph',
    'contentLabelParagraph',
    'captionParagraphFooter',
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
    'labelBold',
    'subLevel',
    'subLevelBold',
    'text',
    'textHead',
    'ubuntuFontStyle'
  ])
};
