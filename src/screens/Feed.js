import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { View, FlatList, StyleSheet } from "react-native";

import Header from "../components/Header";
import Post from "../components/Post";
import { fetchPosts } from "../store/actions/posts";

class Feed extends Component {
  componentDidMount = () => {
    this.props.fetchPosts();
  };

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <FlatList
          data={this.props.posts}
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

const mapStateToProps = state => ({ posts: state.posts.posts });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchPosts }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
