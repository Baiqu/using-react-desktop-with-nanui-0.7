import React, { Component } from "react";
import {
  Window,
  TitleBar,
  NavPane,
  NavPaneItem,
  Text
} from "react-desktop/windows";

import HomeIcon from "./home.svg";
import SettingsIcon from "./settings.svg";
import "./App.css";

const NanUI = window["NanUI"];

export default class App extends Component {
  static defaultProps = {
    theme: "light"
  };

  constructor() {
    super();
    this.state = {
      selected: "Home",
      isMaximized: false
    };
  }

  componentDidMount() {
    // hoststatechange is a custom event by NanUI
    window.addEventListener("hoststatechange", e => {
      if (e.detail.code === 2) {
        this.setState({
          isMaximized: true
        });
      } else {
        this.setState({
          isMaximized: false
        });
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener("hoststatechange");
  }

  renderItem(title, content) {
    return (
      <NavPaneItem
        title={title}
        theme="light"
        background="#fff"
        selected={this.state.selected === title}
        onSelect={() => this.setState({ selected: title })}
        padding="10px 20px"
        push={true}
        icon={this.renderIcon(title)}
      >
        {content}
      </NavPaneItem>
    );
  }

  renderIcon(name) {
    switch (name) {
      case "Home":
        return <img src={HomeIcon} alt="Home" />;
      case "Settings":
        return <img src={SettingsIcon} alt="Settings" />;
      default:
        break;
    }

    return null;
  }

  closeClick = () => {
    NanUI.hostWindow.close();
  };

  onMinimizeClick = () => {
    NanUI.hostWindow.minimize();
  };

  onMaximizeClick = () => {
    NanUI.hostWindow.maximize();
  };

  render() {
    return (
      <Window theme={this.props.theme} height="100%" width="100%">
        <TitleBar
          title="NanUI Application"
          controls={true}
          onCloseClick={this.closeClick}
          onMinimizeClick={this.onMinimizeClick}
          onMaximizeClick={this.onMaximizeClick}
          onRestoreDownClick={this.onMaximizeClick}
          isMaximized={this.state.isMaximized}
        ></TitleBar>
        <NavPane>
          {this.renderItem("Home", <Text>Welcome to NanUI</Text>)}
          {this.renderItem("Settings", <Text>Settings here.</Text>)}
        </NavPane>
      </Window>
    );
  }
}
