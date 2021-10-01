import React from 'react';
import {View, Text, ImageBackground} from 'react-native';

import Addcart from './Addcart';
import styles from './styles';

export default function CartItem( props) {

  const { name, tagline, taglineCTA, image } = props.cart;

  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={image}
        style={styles.image}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline}
          {' '}
          <Text style={styles.subtitleCTA}>
            {taglineCTA}
          </Text>
        </Text>
      </View>

      <Addcart />
    </View>
  );
};

 
