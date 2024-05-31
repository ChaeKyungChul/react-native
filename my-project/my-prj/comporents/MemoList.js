import React from 'react'
import { FlatList, View, Text, StyleSheet } from 'react-native'

const MemoList = ({ myMemo }) => {
  
  const renderItem=({ item })=> (
     <View style={styles.memoItem}>
           <Text style={styles.memoContent}>{item.content}</Text>
     </View>
  );
    
  return (
    <FlatList
       style={styles.list}
       data={myMemo}
       renderItem={renderItem} 
       keyExtractor={item => item.id.toString()}
    />
  )
}

export default MemoList
const styles = StyleSheet.create({
    list: {
        flex: 1,
        flexDirection: 'row',
        padding:20
    },
    memoItem: {
        flexDirection: 'row',
        padding:'10',
        borderBottomWidth:1,
        borderBottomColor: '#F197F9',
        alignItems:'center',
        justifyContent:'flex-start',
        width:'33.333%',
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    memoContent: {
        flex: 1,
        color:'#000'
    },
})