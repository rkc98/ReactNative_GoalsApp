import React from 'react'
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'

const Goalitem = props => {
    return (
       <TouchableOpacity onPress={props.onDelete.bind(this,props.id)}>
          <View style={styles.listitem} >
          <Text>
            {props.title}
            {console.log(props.title)}
          </Text>
        </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    listitem: {
        marginVertical: 10,
        padding: 10,
        backgroundColor: '#ccc',
        borderColor: "black",
        borderWidth: 1
      }
})


export default Goalitem
