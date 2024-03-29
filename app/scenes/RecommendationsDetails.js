import React, { Component } from 'react'
import { View, Text, Image, ListView, StyleSheet, TouchableHighlight } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { FAMILY_RECS } from '../constants/Constants.js'

export default class RecommendationsDetails extends Component {
   render() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
   
    return (
    <View >
     <Image source = {require('../../images/components/parents.jpeg')} style = {styles.containerImage}/>
     <View><Text style={styles.listItem}>{this.props.recommendation.name}</Text></View>
     <View><Text style={styles.listItem}>{this.props.recommendation.detail}</Text></View>
    </View>
    )
  }
}

var styles = StyleSheet.create({
  wrapper: {
  },
  listContainer: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
  },
  listItem: {
    fontSize: 20,
    textAlign: 'justify',
    padding: 10
  },
  containerImage: {
    width: 400,
    height:300,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  separator: {
    flex:1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  }
})
