import React, { useState } from 'react';
import { StyleSheet, Text, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import DateHead from './components/DateHead';
import MemoList from './components/MemoList';

export default function App() {
  const dt = new Date();
  const toDay = `${dt.getFullYear()}년 ${dt.getMonth()}월 ${dt.getDate()}일 ${dt.getHours()}시`; 
  const [myMemo , setMyMemo ] = useState([
    {id:1, content: '오늘 날씨가 너무 좋아 기분이 별로예요.'},
    {id:2, content: '오늘 날씨는 너무 나빠서 기분이 별로예요.'}
  ]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
         <KeyboardAvoidingView 
            behavior={Platform.select({ ios: 'padding', android: 'height'})}
            style={styles.avoid}>
            <DateHead date={toDay} />
            <MemoList myMemo={myMemo} />
         </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEEDFF',
  },
  avoid: {
    flex: 1
  }
});