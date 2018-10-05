/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, View, ScrollView } from 'react-native'
import InnerRadioButton from './InnerRadioButton'
import { RadioButton, Text } from 'react-native-paper'

type Props = {}
export default class App extends Component<Props, { value: string }> {
  state = {
    value: ''
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <RadioButton.Group
          onValueChange={value => this.setState({ value })}
          value={this.state.value}>
          <View>
            <Text>First</Text>
            <RadioButton value="first" />
          </View>
          <View>
            <Text>Second</Text>
            <RadioButton value="second" />
          </View>
          <InnerRadioButton />
        </RadioButton.Group>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70,
    backgroundColor: '#F5FCFF'
  }
})
