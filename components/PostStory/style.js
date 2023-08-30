import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  userInformationContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    lineHeight: 19,
  },
  location: {
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '400',
    color: '#79869F',
    lineHeight: 14,
  },
  userInformation: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  postInformationWrapper: {
    marginLeft: 16,
  },
  userImageWrapper: {
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#F35BAC',
    padding: 3,
  },
  userPostContainer: {
    borderBottomWidth: 1,
    borderColor: '#EFF2F6',
    marginBottom: 20,
  },
  post: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 16,
  },
  postStatContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 20,
    paddingLeft: 10,
  },
  postStatButton: {
    flexDirection: 'row',
    marginRight: 27,
    alignItems: 'center',
  },
  postStatButtonIcon: {
    marginRight: 3,
    color: '#79869F',
  },
  postStatButtonText: {
    color: '#79869F',
  },
});
export default style;
