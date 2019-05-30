import React, { Component } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import Header from "../components/Header";
import Post from "../components/Post";

export default class Feed extends Component {
  state = {
    posts: [
      {
        id: Math.random(),
        nickname: "User Test 1",
        email: "teste@gmail.com",
        image: require("../../assets/imgs/fence.jpg"),
        comments: [
          {
            nickname: "User Test 2",
            comment: "bla bla bla"
          },
          {
            nickname: "User Test 3",
            comment: "qwerty"
          }
        ]
      },
      {
        id: Math.random(),
        nickname: "User Test 4",
        email: "teste4@gmail.com",
        image: require("../../assets/imgs/bw.jpg"),
        comments: []
      }
    ]
  };

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <FlatList
          data={this.state.posts}
          keyExtractor={item => `${item.id}`}
          renderItem={({ item }) => <Post key={item.id} {...item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff"
  }
});
