import { StyleSheet, Text, View ,ScrollView } from 'react-native'
import React, { useState } from 'react'
import CurrencyButton from './components/CurrencyButton'
import {currencybyCountry} from "./constants"

const App = () => {
  const [inputval , setinputval] = useState();
  const [resultval , setresultval] = useState();
  const [targtval, settargetval] = useState();
  return (
    <View>
      <Text>App</Text>
      { currencybyCountry.map((currency) => {
        return( <ScrollView 
       
        ><CurrencyButton  key={currency.name} name={currency.name} flag={currency.flag} symbol={currency.symbol} value={currency.value}/>
      </ScrollView>)})
    }
     

    </View>
  )
}

export default App

const styles = StyleSheet.create({})