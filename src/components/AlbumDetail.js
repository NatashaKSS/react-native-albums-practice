/* @flow */

import * as React from 'react';
import { Text, View } from 'react-native';

type Props = {
  album: {
    title: string,
    artist: string,
    url: string,
    image: string,
    thumbnail_image: string,
  }
};

const AlbumDetail = (props: Props) => (
  <View>
    <Text>{props.album.title}</Text>
  </View>
);

export default AlbumDetail;
