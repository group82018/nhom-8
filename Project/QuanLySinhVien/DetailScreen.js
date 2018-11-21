

import React, {Component} from 'react';
import {Button, StyleSheet, Text, View, Image, TouchableOpcity} from 'react-native';



export default class DetailScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Button title='Quản Lý Lớp' onPress={()=>this.props.navigation.navigate('Shopping')}
      />
      <Button title='Quản Lý Sinh Viên' onPress={()=>this.props.navigation.navigate('Shopping')}
      />
      <Button title='Đăng Xuất' onPress={()=>this.props.navigation.navigate('Shopping')}
      />
      </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 20,
  },
  
  
});
