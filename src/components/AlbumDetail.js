/* @flow */
import * as React from 'react';
import { Text } from 'react-native';
import Card from './Card';

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
  <Card>
    <Text>{props.album.title}</Text>
  </Card>
);

export default AlbumDetail;
