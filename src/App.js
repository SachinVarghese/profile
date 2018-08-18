import React, { Component } from "react";
import { Router } from "@reach/router";
import styles from "./app.module.css";
import Loading from "./Loading";
import classnames from "classnames";
const Profile = import("./apps/profile/Profile");

class App extends Component {
  render() {
    return (
      <div className={classnames(styles.fullSize)}>
        <Router className={classnames(styles.fullSize)}>
          <CodeSplit default key="/" path="/" componentPromise={Profile} />
        </Router>
      </div>
    );
  }
}

class CodeSplit extends React.Component {
  state = {
    Comp: Loading
  };

  componentDidMount() {
    const { componentPromise } = this.props;
    if (componentPromise) {
      componentPromise
        .then(res => this.setState({ Comp: res.default }))
        .catch(() => {
          this.setState({ Comp: () => `Failed to load the component` });
        });
    }
  }

  render() {
    const { Comp } = this.state;
    const { componentPromise, children, ...otherProps } = this.props;
    return <Comp {...otherProps}>{children}</Comp>;
  }
}

export default App;
