import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default class qllop extends Component {
  static navigationOptions = {
    header: null // Không sử dụng thanh toolbar giống trong Android
};
  
  render() {
    console.disableYellowBox = true;
    const Divider = (props) => {
      return <View {...props}>
        <View style={styles.line}></View>
        <View style={styles.line}></View>
        <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text>{rowData}</Text>}
      />
      </View>
    }
    return (
      //Donot dismis Keyboard when click outside of TextInput
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.up}>
            <Ionicons
              name="ios-speedometer"
              size={100}
              color={'rgb(221, 97, 97)'}>
            </Ionicons>
            <Text style={styles.title}>
              QUẢN LÝ LỚP
          </Text>
          </View>
          <View style={styles.down}>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                textContentType='IDsinhvien'
                keyboardType='id-sinhvien'
                placeholder="Enter your name"
              >
              </TextInput>
            </View>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Enter your code"
                secureTextEntry={true}
              >
              </TextInput>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
            <TouchableOpacity style={styles.loginButton }>
              <Text style={styles.loginButtonTitle} >Thêm</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginButtonTitle}>Xóa</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginButtonTitle}>Sửa</Text>
            </TouchableOpacity>
            </View>
            
          </View>
        </View>
      </TouchableWithoutFeedback>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: "rgba(92, 99,216, 1)"
  },
  up: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  down: {
    flex: 7,//70% of column
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  title: {
    color: 'white',
    color: 'rgb(255,119,34)',
    textAlign: 'center',
    width: 400,
    fontSize: 23
  },
  textInputContainer: {
    paddingHorizontal: 10,
    borderRadius: 6,
    marginBottom: 20,
    backgroundColor: 'rgba(255,255,255,0.2)'//a = alpha = opacity
  },
  textInput: {
    width: 280,
    height: 45
  },
  loginButton: {
    width: 100,
    height: 50,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    flexDirection: 'row',
    backgroundColor: 'rgb(221, 97, 97)',
    margin: 5
  },
  loginButtonTitle: {
    fontSize: 18,
    color: 'white',
  },
  divider: {
    height: 40,
    width: 298,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
