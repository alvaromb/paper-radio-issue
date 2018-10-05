/* @flow */

import React from 'react'
import { View } from 'react-native'
import { RadioButton, Text } from 'react-native-paper'

class InnerRadioButton extends React.PureComponent<{}, { value: string }> {
  state = {
    value: ''
  }

  render() {
    return (
      <View style={{ marginTop: 30, backgroundColor: '#EEE' }}>
        <View>
          <Text>First</Text>
          <RadioButton
            value="first"
            status={this.state.value === 'first' ? 'checked' : 'unchecked'}
            onPress={value => this.setState({ value: 'first' })}
          />
        </View>
        <View>
          <Text>Second</Text>
          <RadioButton
            value="second"
            status={this.state.value === 'second' ? 'checked' : 'unchecked'}
            onPress={value => this.setState({ value: 'second' })}
          />
        </View>
        <View>
          <Text>Third</Text>
          <RadioButton
            value="third"
            status={this.state.value === 'third' ? 'checked' : 'unchecked'}
            onPress={value => this.setState({ value: 'third' })}
          />
        </View>
      </View>
    )
  }
}

export default InnerRadioButton
