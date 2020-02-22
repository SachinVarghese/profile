import React from "react";
import { Router, Link, navigate } from "@reach/router";
import styles from "./app.module.css";
import Loading from "./Loading";
const Profile = import("./apps/profile/Profile");

class App extends React.Component {
  render() {
    return (
      <div className={styles.fullSize}>
        <Router className={styles.fullSize}>
          <CodeSplit
            key="profile"
            path="/profile/*"
            componentPromise={Profile}
          />
          <NotFound default />
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
        .catch(err => {
          this.setState({
            Comp: () => `Failed to load the component ..${err}`
          });
        });
    }
  }

  render() {
    const { Comp } = this.state;
    const { componentPromise, children, ...otherProps } = this.props;
    return <Comp {...otherProps}>{children}</Comp>;
  }
}

class NotFound extends React.Component {
  render() {
    return <Link to="/profile">Navigating to Profile...</Link>;
  }
  componentDidMount() {
    setTimeout(() => {
      navigate("/profile");
    }, 200);
  }
}

export default App;
