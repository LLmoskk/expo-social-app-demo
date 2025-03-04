import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Pressable, SafeAreaView } from 'react-native';
import { Grid2x2 as Grid, Bookmark, Tag } from 'lucide-react-native';
import ProfileHeader from '../../components/ProfileHeader';

export default function ProfileScreen() {
  const [activeTab, setActiveTab] = useState('posts');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProfileHeader
          username="johndoe"
          fullName="John Doe"
          avatarUrl="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
          bio="Digital creator | Photography enthusiast | Travel lover 🌍 | Based in San Francisco"
          website="johndoe.portfolio.com"
          postsCount={42}
          followersCount={1234}
          followingCount={567}
          isOwnProfile={true}
        />

        {/* Tab Navigation */}
        <View style={styles.tabContainer}>
          <Pressable
            style={[
              styles.tabButton,
              activeTab === 'posts' && styles.activeTabButton,
            ]}
            onPress={() => setActiveTab('posts')}
          >
            <Grid
              size={24}
              color={activeTab === 'posts' ? '#1E293B' : '#94A3B8'}
            />
          </Pressable>
          <Pressable
            style={[
              styles.tabButton,
              activeTab === 'saved' && styles.activeTabButton,
            ]}
            onPress={() => setActiveTab('saved')}
          >
            <Bookmark
              size={24}
              color={activeTab === 'saved' ? '#1E293B' : '#94A3B8'}
            />
          </Pressable>
          <Pressable
            style={[
              styles.tabButton,
              activeTab === 'tagged' && styles.activeTabButton,
            ]}
            onPress={() => setActiveTab('tagged')}
          >
            <Tag
              size={24}
              color={activeTab === 'tagged' ? '#1E293B' : '#94A3B8'}
            />
          </Pressable>
        </View>

        {/* Grid of Posts */}
        <View style={styles.postsGrid}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
            }}
            style={styles.postImage}
          />
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
            }}
            style={styles.postImage}
          />
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
            }}
            style={styles.postImage}
          />
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
            }}
            style={styles.postImage}
          />
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
            }}
            style={styles.postImage}
          />
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
            }}
            style={styles.postImage}
          />
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
            }}
            style={styles.postImage}
          />
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
            }}
            style={styles.postImage}
          />
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
            }}
            style={styles.postImage}
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
  tabContainer: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#F1F5F9',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  activeTabButton: {
    borderBottomWidth: 2,
    borderBottomColor: '#1E293B',
  },
  postsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  postImage: {
    width: '33.3%',
    aspectRatio: 1,
    borderWidth: 0.5,
    borderColor: 'white',
  },
});