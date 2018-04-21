import * as React from 'react';
import { View } from 'react-native';

type Props = {
  children: mixed,
};

const CardSection = (props: Props) => (
  <View style={styles.containerStyle}>
    {props.children}
  </View>
);

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  },
};

export default CardSection;
