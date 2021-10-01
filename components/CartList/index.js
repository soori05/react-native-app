import React from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import CartItem from "../CartItem";

import styles from './styles';
import carts from './cart';

const CartList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={carts}
        renderItem={({item}) => <CartItem cart={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
      />
    </View>
  );
};

export default CartList;
