import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, Pressable } from 'react-native';
import { Heart, MessageCircle, Share, Bookmark, MoveHorizontal as MoreHorizontal } from 'lucide-react-native';

type PostProps = {
  username: string;
  userAvatar: string;
  location?: string;
  imageUrl: string;
  caption: string;
  likesCount: number;
  commentsCount: number;
  timestamp: string;
};

export default function Post({
  username,
  userAvatar,
  location,
  imageUrl,
  caption,
  likesCount,
  commentsCount,
  timestamp,
}: PostProps) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showFullCaption, setShowFullCaption] = useState(false);

  const toggleLike = () => setLiked(!liked);
  const toggleSave = () => setSaved(!saved);
  const toggleCaption = () => setShowFullCaption(!showFullCaption);

  return (
    <View style={styles.container}>
      {/* Post Header */}
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image source={{ uri: userAvatar }} style={styles.avatar} />
          <View>
            <Text style={styles.username}>{username}</Text>
            {location && <Text style={styles.location}>{location}</Text>}
          </View>
        </View>
        <Pressable hitSlop={10}>
          <MoreHorizontal size={20} color="#64748B" />
        </Pressable>
      </View>

      {/* Post Image */}
      <Image source={{ uri: imageUrl }} style={styles.postImage} />

      {/* Post Actions */}
      <View style={styles.actions}>
        <View style={styles.leftActions}>
          <Pressable onPress={toggleLike} style={styles.actionButton}>
            <Heart
              size={24}
              color={liked ? '#EF4444' : '#64748B'}
              fill={liked ? '#EF4444' : 'transparent'}
            />
          </Pressable>
          <Pressable style={styles.actionButton}>
            <MessageCircle size={24} color="#64748B" />
          </Pressable>
          <Pressable style={styles.actionButton}>
            <Share size={24} color="#64748B" />
          </Pressable>
        </View>
        <Pressable onPress={toggleSave}>
          <Bookmark
            size={24}
            color="#64748B"
            fill={saved ? '#64748B' : 'transparent'}
          />
        </Pressable>
      </View>

      {/* Likes Count */}
      <Text style={styles.likesCount}>{likesCount.toLocaleString()} likes</Text>

      {/* Caption */}
      <View style={styles.captionContainer}>
        <Text style={styles.captionUsername}>{username}</Text>
        <Text style={styles.caption} numberOfLines={showFullCaption ? undefined : 2}>
          {caption}
        </Text>
        {caption.length > 100 && (
          <Pressable onPress={toggleCaption}>
            <Text style={styles.moreText}>
              {showFullCaption ? 'less' : 'more'}
            </Text>
          </Pressable>
        )}
      </View>

      {/* Comments Count */}
      <Pressable>
        <Text style={styles.commentsCount}>
          View all {commentsCount} comments
        </Text>
      </Pressable>

      {/* Timestamp */}
      <Text style={styles.timestamp}>{timestamp}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 10,
  },
  username: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: '#1E293B',
  },
  location: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#64748B',
  },
  postImage: {
    width: '100%',
    aspectRatio: 1,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  leftActions: {
    flexDirection: 'row',
  },
  actionButton: {
    marginRight: 16,
  },
  likesCount: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: '#1E293B',
    paddingHorizontal: 12,
    marginBottom: 6,
  },
  captionContainer: {
    paddingHorizontal: 12,
    marginBottom: 6,
  },
  captionUsername: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: '#1E293B',
    marginRight: 6,
  },
  caption: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#334155',
    lineHeight: 20,
  },
  moreText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#94A3B8',
    marginTop: 2,
  },
  commentsCount: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#94A3B8',
    paddingHorizontal: 12,
    marginBottom: 4,
  },
  timestamp: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#94A3B8',
    paddingHorizontal: 12,
    marginBottom: 8,
  },
});