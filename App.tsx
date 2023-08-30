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
import PostStory from './components/PostStory/PostStory';
const App = () => {
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
  const posts = [
    {
      firstName: 'Asep',
      lastName: 'Budiman',
      location: 'Subang, Jawa Barat',
      likes: 1038,
      comments: 376,
      bookmarks: 284,
      id: 1,
    },
    {
      firstName: 'Dandi',
      lastName: 'Ruhian',
      location: 'Lembang, Jawa Barat',
      likes: 2431,
      comments: 133,
      bookmarks: 12,
      id: 2,
    },
    {
      firstName: 'Neli',
      lastName: 'Bachtir',
      location: 'Makassar, Sulawesi Selatan',
      likes: 1038,
      comments: 376,
      bookmarks: 284,
      id: 3,
    },
    {
      firstName: 'Doni',
      lastName: 'Siregar',
      location: 'Medan, Sumatera Utara',
      likes: 1244,
      comments: 65,
      bookmarks: 4,
      id: 4,
    },
    {
      firstName: 'Desi',
      lastName: 'Lavea',
      location: 'Medan, Sumatera Utara',
      likes: 34,
      comments: 123,
      bookmarks: 403,
      id: 5,
    },
    {
      firstName: 'Rio',
      lastName: 'Ferdinan',
      location: 'Medan, Sumatera Utara',
      likes: 34,
      comments: 6598,
      bookmarks: 235,
      id: 6,
    },
  ];
  const pageSize = 4;

  const [pageNumber, setPageNumber] = useState(1);
  const [postsPageNumber, setPostsPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingPosts, setIsLoadingPosts] = useState(false);
  const [renderedData, setRenderedData] = useState(data.slice(0, pageSize));
  const [renderedDataPosts, setRenderedDataPosts] = useState(
    posts.slice(0, pageSize),
  );

  const pagination = (data, pageNumber, pageSize, post = false) => {
    let startIndex = (pageNumber - 1) * pageSize;
    console.log(startIndex, renderedData.length)
    if (startIndex > data.length) {
      return [];
    }
    if (!post) {
      setPageNumber(pageNumber);
    } else {
      setPostsPageNumber(pageNumber);
    }

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
            onMomentumScrollBegin={() => setIsLoading(true)}
            onEndReachedThreshold={0.5}
            onEndReached={() => {
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
            showsHorizontalScrollIndicator={false}
            data={renderedData}
            renderItem={({item}) => <UserStory firstName={item.firstName} />}
          />
        </View>
        <View style={style.postStoryContainer}>
          <FlatList
            onMomentumScrollBegin={() => setIsLoadingPosts(true)}
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (!isLoadingPosts) {
                setIsLoadingPosts(true);
                setRenderedDataPosts(prev => [
                  ...prev,
                  ...pagination(posts, postsPageNumber + 1, pageSize, true),
                ]);
                setIsLoadingPosts(false);
              }
            }}
            data={renderedDataPosts}
            renderItem={({item}) => (
              <PostStory
                firstName={item.firstName}
                lastName={item.lastName}
                likes={item.likes}
                location={item.location}
                comments={item.comments}
                bookmarks={item.bookmarks}
              />
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
