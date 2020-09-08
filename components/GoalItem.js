import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const GoalItem = props => {
    return(
        <TouchableOpacity activeOpacity={0.6} onPress={props.onDelete.bind(this, props.id)} >
            <View style={styles.listItem}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#e0e0e0',
        borderColor: 'black',
        borderWidth: 1
    }
})

export default GoalItem
