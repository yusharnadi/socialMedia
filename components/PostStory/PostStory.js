import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsis} from '@fortawesome/free-solid-svg-icons';
import {
  faBookmark,
  faComment,
  faHeart,
} from '@fortawesome/free-regular-svg-icons';
import style from './style';

const PostStory = props => {
  return (
    <View style={style.userPostContainer}>
      <View style={style.userInformationContainer}>
        <View style={style.userInformation}>
          <View style={style.userImageWrapper}>
            <Image
              source={require('../../assets/images/default_profile.png')}
            />
          </View>
          <View style={style.postInformationWrapper}>
            <Text style={style.name}>
              {props.firstName} {props.lastName}
            </Text>
            <Text style={style.location}>{props.location}</Text>
          </View>
        </View>
        <Pressable>
          <FontAwesomeIcon icon={faEllipsis} color={'#79869F'} size={22} />
        </Pressable>
      </View>
      <View style={style.post}>
        <Image
          resizeMode={'cover'}
          source={require('../../assets/images/default_post.png')}
        />
      </View>
      <View style={style.postStatContainer}>
        <Pressable style={style.postStatButton}>
          <FontAwesomeIcon icon={faHeart} style={style.postStatButtonIcon} />
          <Text style={style.postStatButtonText}>{props.likes}</Text>
        </Pressable>
        <Pressable style={style.postStatButton}>
          <FontAwesomeIcon icon={faComment} style={style.postStatButtonIcon} />
          <Text style={style.postStatButtonText}>{props.comments}</Text>
        </Pressable>
        <Pressable style={style.postStatButton}>
          <FontAwesomeIcon icon={faBookmark} style={style.postStatButtonIcon} />
          <Text style={style.postStatButtonText}>{props.bookmarks}</Text>
        </Pressable>
      </View>
    </View>
  );
};

PostStory.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  bookmarks: PropTypes.number.isRequired,
};
export default PostStory;
