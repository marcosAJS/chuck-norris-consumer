import { Button, Grid, Typography, Modal } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addJokeByCategory } from "../actions/jokes";
import { closeModal, openModal, setKeyToSort } from "../actions/system";
import { jokeColumns } from "../util/constants";
import { sortByKey } from "../util/helper";
import ListItem from "./listItem";
import ListOrganizer from "./listOrganizer";
import JokeDetails from "./jokeDetails";

class JokeList extends Component {
  onSortList = event => {
    const column = jokeColumns.find(x => x.id === event.target.value);
    this.props.setKeyToSort({ key: event.target.value, order: column.order });
  };

  componentDidMount() {
    // const { match, loadJoke } = this.props;
    // loadJoke(match.params.category);
  }

  filterJokeList = jokes => {
    const { match } = this.props;
    if (match.params.category) {
      return jokes.filter(joke =>
        joke.categories.find(cat => cat === match.params.category)
      );
    }
    return jokes;
  };

  handleClose = () => {
    this.props.closeModal();
  };

  handleOpen = () => {
    this.props.openModal();
  };

  handleDelete = () => {};

  render() {
    const { jokes, sortBy, match, loadJoke, modal } = this.props;
    console.log("PROPS > ", this.props);

    const showingJokes = sortByKey(
      this.filterJokeList(jokes),
      sortBy.key,
      sortBy.order
    );

    return (
      <div className="joke-list">
        <Button
          variant="contained"
          color="primary"
          className="new-joke-button"
          onClick={() => loadJoke(match.params.category)}
        >
          { showingJokes.length > 0 ? 'Load other' : 'Load Joke' }
        </Button>
        <h1>{match.params.category ? match.params.category : "All "} jokes</h1>

        <ListOrganizer
          sortColumn={sortBy.key}
          columnsToOrganize={jokeColumns}
          sortList={this.onSortList}
          style={{ float: "right", margin: "8px" }}
        />

        <Grid container className="joke-list-items" spacing={0}>
          {showingJokes.length > 0 ? (
            showingJokes.map(joke => (
              <Grid key={joke.id} item xs={12}>
                <ListItem key={joke.id} joke={joke} />
              </Grid>
            ))
          ) : (
            <Typography variant="h6" gutterBottom>
              Click in "Load Joke" button
            </Typography>
          )}
        </Grid>

        <Modal
          className="modal"
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={modal.open}
          onClose={this.handleClose}
        >
          <div className="modal-body">
            <JokeDetails />
          </div>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps({ jokes, system }) {
  return {
    jokes,
    sortBy: system.sortBy,
    modal: system.modal
  };
}

JokeList = connect(
  mapStateToProps,
  { closeModal, openModal, loadJoke: addJokeByCategory, setKeyToSort }
)(JokeList);

export default withRouter(JokeList);
