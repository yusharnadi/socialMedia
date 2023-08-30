import React from 'react';
import PropTypes from 'prop-types';
import {Image, View, Text} from 'react-native';
import style from './style';
const UserStory = props => {
  return (
    <View style={style.storyContainer}>
      <View style={style.storyImageContainer}>
        <Image source={require('./../../assets/images/default_profile.png')} />
      </View>
      <Text style={style.name}>{props.firstName}</Text>
    </View>
  );
};

UserStory.propTypes = {
  firstName: PropTypes.string.isRequired,
};
export default UserStory;
