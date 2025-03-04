import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Pressable, SafeAreaView } from 'react-native';

type NotificationProps = {
  type: 'like' | 'comment' | 'follow' | 'mention';
  username: string;
  userAvatar: string;
  content: string;
  time: string;
  postImage?: string;
};

const Notification = ({ type, username, userAvatar, content, time, postImage }: NotificationProps) => {
  return (
    <Pressable style={styles.notificationItem}>
      <Image source={{ uri: userAvatar }} style={styles.avatar} />
      <View style={styles.notificationContent}>
        <Text style={styles.notificationText}>
          <Text style={styles.username}>{username}</Text> {content}
        </Text>
        <Text style={styles.timeText}>{time}</Text>
      </View>
      {postImage && <Image source={{ uri: postImage }} style={styles.postThumbnail} />}
      {type === 'follow' && (
        <Pressable style={styles.followButton}>
          <Text style={styles.followButtonText}>Follow</Text>
        </Pressable>
      )}
    </Pressable>
  );
};

export default function NotificationsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notifications</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Today</Text>
        </View>

        <Notification
          type="like"
          username="alex_smith"
          userAvatar="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
          content="liked your photo."
          time="2h"
          postImage="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
        />

        <Notification
          type="comment"
          username="jessica"
          userAvatar="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
          content="commented: 'Amazing shot! 📸'"
          time="4h"
          postImage="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
        />

        <Notification
          type="follow"
          username="michael_j"
          userAvatar="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
          content="started following you."
          time="6h"
        />

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>This Week</Text>
        </View>

        <Notification
          type="mention"
          username="sarah_lee"
          userAvatar="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
          content="mentioned you in a comment: '@johndoe check this out!'"
          time="2d"
          postImage="https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
        />

        <Notification
          type="like"
          username="james_t"
          userAvatar="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
          content="liked your photo."
          time="3d"
          postImage="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
        />

        <Notification
          type="follow"
          username="emma_w"
          userAvatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
          content="started following you."
          time="5d"
        />

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Earlier</Text>
        </View>

        <Notification
          type="comment"
          username="david_k"
          userAvatar="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
          content="commented: 'Great content as always!'"
          time="1w"
          postImage="https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
        />

        <Notification
          type="like"
          username="sophia_r"
          userAvatar="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
          content="liked your photo."
          time="2w"
          postImage="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
        />
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
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  headerTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: '#1E293B',
  },
  sectionHeader: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#F8FAFC',
  },
  sectionTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#64748B',
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 12,
  },
  notificationContent: {
    flex: 1,
    marginRight: 8,
  },
  notificationText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#334155',
    lineHeight: 20,
  },
  username: {
    fontFamily: 'Inter-SemiBold',
    color: '#1E293B',
  },
  timeText: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#94A3B8',
    marginTop: 2,
  },
  postThumbnail: {
    width: 44,
    height: 44,
    borderRadius: 4,
  },
  followButton: {
    backgroundColor: '#6366F1',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 6,
  },
  followButtonText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: 'white',
  },
});