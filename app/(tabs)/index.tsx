import React from 'react';
import { View, Text, StyleSheet, ScrollView, RefreshControl, SafeAreaView } from 'react-native';
import { Camera, SquarePlus as PlusSquare } from 'lucide-react-native';
import StoryCircle from '../../components/StoryCircle';
import Post from '../../components/Post';

export default function HomeScreen() {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>Socialite</Text>
        <View style={styles.headerIcons}>
          <Camera size={24} color="#1E293B" style={styles.icon} />
          <PlusSquare size={24} color="#1E293B" />
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {/* Stories */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.storiesContainer}
          contentContainerStyle={styles.storiesContent}
        >
          <StoryCircle
            imageUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
            username="You"
            isOwn={true}
          />
          <StoryCircle
            imageUrl="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
            username="alex_smith"
            hasUnseenStory={true}
          />
          <StoryCircle
            imageUrl="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
            username="jessica"
            hasUnseenStory={true}
          />
          <StoryCircle
            imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
            username="michael_j"
          />
          <StoryCircle
            imageUrl="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
            username="sarah_lee"
            hasUnseenStory={true}
          />
          <StoryCircle
            imageUrl="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
            username="james_t"
          />
        </ScrollView>

        {/* Posts */}
        <View style={styles.postsContainer}>
          <Post
            username="alex_smith"
            userAvatar="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
            location="New York, NY"
            imageUrl="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
            caption="Exploring the city that never sleeps! 🌃 #NYC #CityVibes #Exploring #Adventure #Travel #NewYork #CityLife #UrbanExploration #Wanderlust #TravelPhotography"
            likesCount={1243}
            commentsCount={42}
            timestamp="2 hours ago"
          />
          <Post
            username="jessica"
            userAvatar="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
            imageUrl="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
            caption="Coffee and coding - perfect morning ☕💻"
            likesCount={876}
            commentsCount={24}
            timestamp="5 hours ago"
          />
          <Post
            username="sarah_lee"
            userAvatar="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
            location="Bali, Indonesia"
            imageUrl="https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
            caption="Paradise found 🌴 #BeachVibes #Vacation"
            likesCount={2341}
            commentsCount={98}
            timestamp="1 day ago"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  logo: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    color: '#1E293B',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 16,
  },
  storiesContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  storiesContent: {
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  postsContainer: {
    paddingTop: 8,
  },
});