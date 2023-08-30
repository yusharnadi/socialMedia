import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Pressable,
  Text,
  FlatList,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import Title from './components/Title/Title';
import style from './assets/styles/main';
import UserStory from './components/UserStory/UserStory';
function App() {

  const data = [
    {
      firstName: 'Nata',
      id: 1,
    },
    {
      firstName: 'Sean',
      id: 2,
    },
    {
      firstName: 'Nicilas',
      id: 3,
    },
    {
      firstName: 'Budi',
      id: 4,
    },
    {
      firstName: 'Andri',
      id: 5,
    },
    {
      firstName: 'Ririn',
      id: 6,
    },
    {
      firstName: 'Doni',
      id: 7,
    },
    {
      firstName: 'Dhean',
      id: 8,
    },
    {
      firstName: 'Andio',
      id: 9,
    },
  ];
  const pageSize = 4;
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [renderedData, setRenderedData] = useState(data.slice(0, pageSize));

  const pagination = (data, pageNumber, pageSize) => {
    let startIndex = (pageNumber - 1) * pageSize;
    console.log(startIndex, renderedData.length)
    if (startIndex > data.length) {
      return [];
    }
    setPageNumber(pageNumber);
    return data.slice(startIndex, startIndex + pageSize);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={style.header}>
          <Title title={"Let's Explore"} />
          <Pressable style={style.messageIcon}>
            <FontAwesomeIcon icon={faEnvelope} size={20} color="#CACDDE" />
            <View style={style.messageNumberContainer}>
              <Text style={style.messageNumber}>2</Text>
            </View>
          </Pressable>
        </View>
        <View style={style.userStoryContainer}>
          <FlatList
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              console.log('fire paginate');
              if (!isLoading) {
                setIsLoading(true);
                setRenderedData(prev => [
                  ...prev,
                  ...pagination(data, pageNumber + 1, pageSize),
                ]);
                setIsLoading(false);
              }
            }}
            horizontal={true}
            data={renderedData}
            renderItem={({item}) => <UserStory firstName={item.firstName} />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
