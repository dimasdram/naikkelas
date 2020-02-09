import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core/';
import classNames from 'classnames';
import { capitalizeFirst } from '../../../utils/text';

export default class Component extends React.Component {
  render() {
    const {
      children,
      classes,
      className,
      color,
      background,
      name,
      ...other
    } = this.props;
    const customClass = classNames([
      classes.root,
      classes[name],
      classes[`background${capitalizeFirst(background)}`],
      classes[`color${capitalizeFirst(color)}`],
      className
    ]);
    return (
      <Button className={customClass} {...other}>
        {children}
      </Button>
    );
  }
}
Component.defaultProps = {
  background: 'white',
  children: '',
  className: '',
  color: 'black',
  name: 'btn2'
};
Component.propTypes = {
  background: PropTypes.oneOf(['white', 'red', 'green']),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.object
  ]),
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf([
    'white',
    'black',
    'red',
    'green',
    'blue',
    'yellow',
    'grey'
  ]),
  name: PropTypes.oneOf(['btn1', 'btn2', 'btn3'])
};
