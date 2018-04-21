/* @flow */
import React, { Component } from 'react';
import { View } from 'react-native';
import AlbumDetail from './AlbumDetail';

type Props = {};
type State = {
  albums: Array<Object>
};

class AlbumList extends Component<Props, State> {
  state = { albums: [] };

  componentWillMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => response.json())
      .then(responseData => this.setState({ albums: responseData }));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />);
  }

  render() {
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;
