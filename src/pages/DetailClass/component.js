import React from 'react';
import PropTypes from 'prop-types';
import HomeBase from '../../components/HomeBase';
import { VIDEOS, IMAGES } from '../../configs';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { Typography } from '../../components/elements';
import { Player } from 'video-react';

export default class Component extends React.Component {
  componentWillMount() {
    this.props.actions.getListOfDevelopers();
  }

  _renderMateri() {
    const { classes } = this.props;
    return (
      <div className={classes.materi}>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography color="black">Materi 1</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography color="black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography color="black">Materi 2</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography color="black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography color="black">Materi 3</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography color="black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography color="black">Materi 4</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography color="black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography color="black">Materi 5</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography color="black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }

  render() {
    const { classes, isLoading } = this.props;
    if (isLoading) {
      return <Typography variant="display2">Loading...</Typography>;
    } else {
      return (
        <HomeBase>
          <div className={classes.contentClass1}>
            <div className={classes.wrapper}>
              <Typography variant="titleClass">Rico Huang</Typography>
              <Typography variant="caption">Ahli Digital Marketing</Typography>
              <Player
                playsInline
                poster={IMAGES.RICO_HUANG}
                src={VIDEOS.MATERI}
              />
            </div>
            <div className={classes.materiText}>
              <Typography variant="title"> Kumpulan Materi </Typography>
            </div>
            {this._renderMateri()}
          </div>
        </HomeBase>
      );
    }
  }
}

Component.propTypes = {
  classes: PropTypes.object,
  actions: PropTypes.object,
  isLoading: PropTypes.bool,
  data: PropTypes.array
};
