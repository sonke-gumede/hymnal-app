import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'
import EvilIcons from '@expo/vector-icons/EvilIcons'

const Header = ({ navigation }) => {
  return (
    <View style={{ display: 'flex', backgroundColor: 'red',flexDirection: 'row', justifyContent: 'space-between', alignItems:'center' }}>
      <TouchableOpacity onPress={() => navigation.navigate('profile')}>
        <EvilIcons name="user" color="black" size={50} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('notifications')}>
        <Ionicons name="notifications-outline" color="black" size={50}/>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
