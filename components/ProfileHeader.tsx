import React from 'react';
import { View, Image, Text, StyleSheet, Pressable } from 'react-native';
import { Settings, Link } from 'lucide-react-native';

type ProfileHeaderProps = {
  username: string;
  fullName: string;
  avatarUrl: string;
  bio: string;
  website?: string;
  postsCount: number;
  followersCount: number;
  followingCount: number;
  isOwnProfile?: boolean;
  onEditProfile?: () => void;
  onSettings?: () => void;
};

export default function ProfileHeader({
  username,
  fullName,
  avatarUrl,
  bio,
  website,
  postsCount,
  followersCount,
  followingCount,
  isOwnProfile = false,
  onEditProfile,
  onSettings,
}: ProfileHeaderProps) {
  return (
    <View style={styles.container}>
      {/* Header with username and settings */}
      <View style={styles.headerRow}>
        <Text style={styles.usernameHeader}>{username}</Text>
        {isOwnProfile && (
          <Pressable onPress={onSettings} hitSlop={10}>
            <Settings size={24} color="#1E293B" />
          </Pressable>
        )}
      </View>

      {/* Profile info row */}
      <View style={styles.profileInfoRow}>
        <Image source={{ uri: avatarUrl }} style={styles.avatar} />
        
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{postsCount}</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
          
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{followersCount}</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{followingCount}</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>
      </View>

      {/* Bio section */}
      <View style={styles.bioSection}>
        <Text style={styles.fullName}>{fullName}</Text>
        <Text style={styles.bio}>{bio}</Text>
        
        {website && (
          <View style={styles.websiteRow}>
            <Link size={14} color="#6366F1" />
            <Text style={styles.website}>{website}</Text>
          </View>
        )}
      </View>

      {/* Action buttons */}
      <View style={styles.actionButtonsRow}>
        {isOwnProfile ? (
          <Pressable style={styles.editProfileButton} onPress={onEditProfile}>
            <Text style={styles.editProfileText}>Edit Profile</Text>
          </Pressable>
        ) : (
          <View style={styles.actionButtonsRow}>
            <Pressable style={styles.followButton}>
              <Text style={styles.followButtonText}>Follow</Text>
            </Pressable>
            <Pressable style={styles.messageButton}>
              <Text style={styles.messageButtonText}>Message</Text>
            </Pressable>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  usernameHeader: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: '#1E293B',
  },
  profileInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 24,
  },
  statsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: '#1E293B',
  },
  statLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#64748B',
    marginTop: 2,
  },
  bioSection: {
    marginBottom: 16,
  },
  fullName: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#1E293B',
    marginBottom: 4,
  },
  bio: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#334155',
    lineHeight: 20,
    marginBottom: 4,
  },
  websiteRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  website: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#6366F1',
    marginLeft: 4,
  },
  actionButtonsRow: {
    flexDirection: 'row',
  },
  editProfileButton: {
    flex: 1,
    backgroundColor: '#F1F5F9',
    borderRadius: 8,
    paddingVertical: 8,
    alignItems: 'center',
  },
  editProfileText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: '#1E293B',
  },
  followButton: {
    flex: 1,
    backgroundColor: '#6366F1',
    borderRadius: 8,
    paddingVertical: 8,
    alignItems: 'center',
    marginRight: 8,
  },
  followButtonText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: 'white',
  },
  messageButton: {
    flex: 1,
    backgroundColor: '#F1F5F9',
    borderRadius: 8,
    paddingVertical: 8,
    alignItems: 'center',
  },
  messageButtonText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: '#1E293B',
  },
});