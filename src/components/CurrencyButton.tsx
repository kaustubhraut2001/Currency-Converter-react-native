import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import type {PropsWithChildren} from "react"

type CurrencyButtonProps = PropsWithChildren<{
    name:string,
    flag:string,
    symbol:string,
    value:number
}>

const CurrencyButton = (props : CurrencyButtonProps) => {
  return (
    <View style = {styles.buttoncontainer}>
      <Text style={styles.flag}>{props.flag}</Text>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.symbol}>{props.symbol}</Text>
        <Text style={styles.value}>{props.value}</Text>
    </View>
  )
}

export default CurrencyButton

const styles = StyleSheet.create({
    buttoncontainer: {
        backgroundColor: "lightgrey",
        padding: 10,
        margin: 10,
        borderRadius: 5
    },
    flag: {
        fontSize: 20
    },
    name: {
        fontSize: 20
    },
    symbol: {
        fontSize: 20
    },
    value: {
        fontSize: 20
    }
})