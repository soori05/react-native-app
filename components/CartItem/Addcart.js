import React from 'react';
import {View} from 'react-native';
import StyledButton from "../StyledButton";
import styles from './styles';
import { useNavigation } from '@react-navigation/native';



export default function Addcart() {
    const navigation = useNavigation(); 
    return (
        
        <View style={styles.buttonsContainer}>
        <StyledButton
          type="primary"
          content={"Custom Order"}
          onPress={() =>
        navigation.navigate('cart')
      }
      />

      
      </View>

    )
}
