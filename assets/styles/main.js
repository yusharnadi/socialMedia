import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 30,
    paddingLeft: 26,
    paddingRight: 17,
  },
  messageIcon: {
    padding: 12,
    borderRadius: 100,
    backgroundColor: '#F9FAFB',
  },
  messageNumberContainer: {
    position: 'absolute',
    width: 10,
    height: 10,
    backgroundColor: '#F35BAC',
    borderRadius: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    right: 7,
    top: 10,
  },
  messageNumber: {
    color: '#ffffff',
    fontSize: 6,
    fontFamily: 'Inter',
    lineHeight: 7,
    fontWeight: '600',
  },
  userStoryContainer: {
    paddingHorizontal: 26,
    marginTop: 12,
  },
});
export default style;
