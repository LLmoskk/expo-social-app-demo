import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput, Pressable, SafeAreaView } from 'react-native';
import { Search, X } from 'lucide-react-native';

export default function ExploreScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const clearSearch = () => {
    setSearchQuery('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <Search size={20} color="#64748B" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            value={searchQuery}
            onChangeText={setSearchQuery}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
          />
          {searchQuery.length > 0 && (
            <Pressable onPress={clearSearch} hitSlop={10}>
              <X size={20} color="#64748B" />
            </Pressable>
          )}
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Trending Topics */}
        <View style={styles.trendingContainer}>
          <Text style={styles.sectionTitle}>Trending</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.trendingScrollContent}
          >
            <Pressable style={styles.trendingItem}>
              <Text style={styles.trendingText}>#Photography</Text>
            </Pressable>
            <Pressable style={styles.trendingItem}>
              <Text style={styles.trendingText}>#Travel</Text>
            </Pressable>
            <Pressable style={styles.trendingItem}>
              <Text style={styles.trendingText}>#FoodLovers</Text>
            </Pressable>
            <Pressable style={styles.trendingItem}>
              <Text style={styles.trendingText}>#Fitness</Text>
            </Pressable>
            <Pressable style={styles.trendingItem}>
              <Text style={styles.trendingText}>#Art</Text>
            </Pressable>
          </ScrollView>
        </View>

        {/* Explore Grid */}
        <View style={styles.exploreGrid}>
          <View style={styles.gridRow}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
              }}
              style={[styles.gridImage, styles.largeImage]}
            />
            <View style={styles.gridColumn}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
                }}
                style={styles.smallImage}
              />
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
                }}
                style={styles.smallImage}
              />
            </View>
          </View>

          <View style={styles.gridRow}>
            <View style={styles.gridColumn}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
                }}
                style={styles.smallImage}
              />
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
                }}
                style={styles.smallImage}
              />
            </View>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
              }}
              style={[styles.gridImage, styles.largeImage]}
            />
          </View>

          <View style={styles.standardGrid}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
              }}
              style={styles.standardImage}
            />
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
              }}
              style={styles.standardImage}
            />
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
              }}
              style={styles.standardImage}
            />
          </View>
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
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F5F9',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#1E293B',
  },
  trendingContainer: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: '#1E293B',
    marginBottom: 12,
  },
  trendingScrollContent: {
    paddingRight: 16,
  },
  trendingItem: {
    backgroundColor: '#F1F5F9',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
  },
  trendingText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#6366F1',
  },
  exploreGrid: {
    padding: 2,
  },
  gridRow: {
    flexDirection: 'row',
    height: 200,
  },
  gridColumn: {
    flex: 1,
  },
  gridImage: {
    margin: 2,
  },
  largeImage: {
    flex: 2,
  },
  smallImage: {
    flex: 1,
    margin: 2,
  },
  standardGrid: {
    flexDirection: 'row',
  },
  standardImage: {
    flex: 1,
    aspectRatio: 1,
    margin: 2,
  },
});