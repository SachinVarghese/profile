import * as React from "react";
import styles from "./app.module.css";
import Profile from "./profile/Profile"

class App extends React.Component {
  render() {
    return (
      <div className={styles.fullSize}>
        <Profile />
      </div>
    );
  }
}

export default App;
