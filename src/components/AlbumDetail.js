/* @flow */
import React from 'react';
import { Text, View, Image } from 'react-native';
import Button from './Button';
import Card from './Card';
import CardSection from './CardSection';

type Props = {
  album: {
    title: string,
    artist: string,
    url: string,
    image: string,
    thumbnail_image: string,
  },
};

const AlbumDetail = ({ album }: Props) => {
  const {
    title, artist, image, thumbnail_image: thumbnailImage,
  } = album;
  const {
    thumbnailStyle, headerContentStyle, headerTextStyle, thumbnailContainerStyle,
    imageStyle,
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnailImage }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={imageStyle}
          source={{ uri: image }}
        />
      </CardSection>

      <CardSection>
        <Button />
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 18,
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
  },
};

export default AlbumDetail;
