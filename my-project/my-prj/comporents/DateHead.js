import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native';
//import { useSafeAreaInsets } from 'react-native-safe-area-context';

const DateHead = ({ date }) => {
  //const { top } = useSafeAreaInsets(); 
  //useSafeAreaInsets() --> StatusBar의 높이를 구함 (top, bottom, left, right 를 불러올 수 있음)
  return (
    <View style={styles.tops}>
       <StatusBar barStyle="light-content" style={styles.tops} />
       <View style={styles.block}>
          <Text style={styles.dateText}>{date}</Text>
       </View>
    </View>    
  )
}

export default DateHead
const styles = StyleSheet.create({
    tops: {
        backgroundColor: '#9F05AC'
    },
    block: {
        backgroundColor:'#E038EF'
    },
    dateText: {
        fontSize:22,
        fontWeight:'bold',
        color:'#fff',
        padding:10
    }    
});