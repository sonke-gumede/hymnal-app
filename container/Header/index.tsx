import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { styled } from 'styled-components/native';

const Container = styled.View`
  display: flex;
  background-color: ${props => props.theme.colors.primary.dark};
  flex-direction: row;
  justify-content: space-between;
  align-items: center; 
  padding: 10px;
`

const Header = ({ navigation }) => {
  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.navigate('profile')}>
        <EvilIcons name="user" color="white" size={30} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('notifications')}>
        <Ionicons name="notifications-outline" color="white" size={30} />
      </TouchableOpacity>
    </Container>
  );
};

export default Header;
