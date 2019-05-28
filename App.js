import React, { Component } from "react";
import { View, Text } from "react-native";

import Header from "./src/components/Header";
import Post from "./src/components/Post";

export default class App extends Component {
  render() {
    const comments = [
      {
        nickname: "User Test 1",
        comment: "bla bla bla"
      },
      {
        nickname: "User Test 2",
        comment: "qwerty!!!"
      }
    ];

    return (
      <View style={{ flex: 1 }}>
        <Header />
        <Post image={require("./assets/imgs/bw.jpg")} comments={comments} />
      </View>
    );
  }
}
