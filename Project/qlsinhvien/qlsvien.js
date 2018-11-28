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

export default class qlsvien extends Component {
  render() {
   
    return (
      //Donot dismis Keyboard when click outside of TextInput
     
        <View style={styles.container}>
          <View style={styles.up}>
            <Ionicons
              name="ios-speedometer"
              size={100}
              color={'rgb(221, 97, 97)'}>
            </Ionicons>
            <Text style={styles.title}>
              QUẢN LÝ SINH VIÊN
          </Text>
          </View>
          <View style={styles.down}>
            <View style={styles.loginButtonTitle}>

            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginButtonTitle} onPress={() => this.props.navigation.navigate('qldssvien')}>Quản Lý Sinh Viên</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginButtonTitle} onPress={() => this.props.navigation.navigate('qllop')}>Quản Lý Lớp</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginButtonTitle} onPress={() => this.props.navigation.navigate('Login')}>Đăng Xuất</Text>
            </TouchableOpacity>
          </View>
          </View>
        </View>
    

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'rgb(234, 195, 176)'
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
 backgroundColor: 'rgb(221, 97, 97)'  },
  textInput: {
    width: 280,
    height: 45,
    margin: 100,
  },
  loginButton: {
    width: 200,
    height: 45,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
   
    backgroundColor: 'rgb(221, 97, 97)'
  },
  loginButtonTitle: {
    fontSize: 18,
    color: 'white'
  },
  divider: {
   
    height: 40,
    width: 298,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
