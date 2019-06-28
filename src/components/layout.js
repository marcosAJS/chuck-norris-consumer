import Grid from "@material-ui/core/Grid";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Paper from "@material-ui/core/Paper";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { addJokeByCategory } from "../actions/jokes";


class Layout extends Component {
  addJokeAndRedirect = path => {
    // const { addJokeByCategory } = this.props;
    // getjokesByCategory(path).then(response => {
    // 	addJokeByCategory(response.data);
    // });
    this.props.history.push(`/jokes/${path}`);
  };

  render() {
    const { location, categories } = this.props;
    console.log("Props >  ", this.props);
    return (
      <div>
        <Grid container className="root">
          <Grid item xs={12}>
            <Grid container justify="center">
              {/* START SIDEBAR */}
              <Grid key={0} xs={2} className="sidebar" item>
                <Paper className="paper">
                  <Link to="/">
                    <div className="App-logo">
                      <img alt="logo" src={require("../assets/img/logo.png")} />
                    </div>
                  </Link>
                  <MenuList className="root-menu-list">
                    {categories &&
                      categories.map(category => (
                        <MenuItem
                          key={category}
                          classes={{ selected: "menu-item-selected" }}
                          selected={location.pathname === `/${category}`}
                          className="root-menu-item"
                          onClick={() => this.addJokeAndRedirect(category)}
                        >
                          {/* <ListItemIcon>
														<img
															alt={category.name}
															className="root-menu-icon"
															src={require(`../assets/img/${category.name}.png`)}
														/>
													</ListItemIcon> */}
                          <ListItemText
                            className="list-item-text"
                            primary={category}
                            inset
                          />
                        </MenuItem>
                      ))}
                  </MenuList>
                </Paper>
              </Grid>
              {/* END SIDEBAR */}

              {/* START CONTENT */}
              <Grid key={1} xs={10} item className="content-container">
                {this.props.children}
              </Grid>
              {/* END CONTENT */}
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps({ categories }) {
  console.log("Categories > ", categories);
  return { categories: [...categories] };
}

Layout = connect(
  mapStateToProps,
  { addJokeByCategory }
)(Layout);

export default withRouter(Layout);
