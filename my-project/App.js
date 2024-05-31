import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const dt = new DataTransfer();
  const toDay = `${dt.getFullYear()}년 ${dt.getMonth()}월 ${dt.getDate()}일 ${dt.getHours()}시`;
  const [myMemo, setMyMemo] = useState([
    {id:1, content : '오늘 날시가 좋아서 기분이별로.'},
    {id:2, content : '오늘 날시가 나빠서 기분이별로.'}
  ]);
  
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
