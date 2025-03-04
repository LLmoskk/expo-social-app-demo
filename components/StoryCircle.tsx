import React from 'react';
import { View, Image, Text, StyleSheet, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

type StoryCircleProps = {
  imageUrl: string;
  username: string;
  hasUnseenStory?: boolean;
  isOwn?: boolean;
  onPress?: () => void;
};

export default function StoryCircle({ 
  imageUrl, 
  username, 
  hasUnseenStory = false, 
  isOwn = false,
  onPress 
}: StoryCircleProps) {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      {hasUnseenStory ? (
        <LinearGradient
          colors={['#FF5E3A', '#FF2A68']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradientBorder}
        >
          <View style={styles.imageContainer}>
            <Image source={{ uri: imageUrl }} style={styles.image} />
          </View>
        </LinearGradient>
      ) : (
        <View style={[styles.gradientBorder, styles.inactiveBorder]}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: imageUrl }} style={styles.image} />
          </View>
        </View>
      )}
      {isOwn && (
        <View style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </View>
      )}
      <Text style={styles.username} numberOfLines={1}>
        {isOwn ? 'Your Story' : username}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 8,
    width: 72,
  },
  gradientBorder: {
    width: 72,
    height: 72,
    borderRadius: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inactiveBorder: {
    backgroundColor: '#E2E8F0',
  },
  imageContainer: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  username: {
    marginTop: 4,
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: '#334155',
    textAlign: 'center',
  },
  addButton: {
    position: 'absolute',
    bottom: 24,
    right: 0,
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#6366F1',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  addButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 18,
  },
});