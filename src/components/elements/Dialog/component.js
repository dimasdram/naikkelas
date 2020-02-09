import React from 'react';
import PropTypes from 'prop-types';
import ClearIcon from '@material-ui/icons/Clear';
import { IconButton, Dialog, DialogContent } from '@material-ui/core';
import Typography from '../Typography';

export default class Component extends React.Component {
  render() {
    const {
      className,
      open,
      onClose,
      maxWidth,
      children,
      title,
      classes,
      withWidth
    } = this.props;
    return (
      <Dialog
        fullWidth
        maxWidth={maxWidth}
        onClose={this._handleClose}
        open={open}
        PaperProps={{
          className: !withWidth ? classes.paper : classes.paperWithWidth
        }}
      >
        <div className={classes.actionHeader}>
          <IconButton aria-label="Delete" onClick={onClose}>
            <ClearIcon fontSize="default" />
          </IconButton>
        </div>
        <div className={classes.header}>
          <Typography className={classes.header} variant="headFormLabel">
            {title}
          </Typography>
        </div>
        <DialogContent className={className}>{children}</DialogContent>
      </Dialog>
    );
  }
}

Component.defaultProps = {
  children: '',
  className: '',
  maxWidth: 'xs',
  onClose: () => {},
  open: true,
  title: '',
  withWidth: false
};

Component.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ]),
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  maxWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', false]),
  onClose: PropTypes.func,
  open: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  withWidth: PropTypes.bool
};
