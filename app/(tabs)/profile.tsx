import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch, Dimensions } from 'react-native';
import { Heart, Bell, Edit2, ChevronRight, AlertCircle } from 'lucide-react-native';
import { Colors } from '@/constants/colors';
import { useState } from 'react';

const { width } = Dimensions.get('window');
const isSmall = width < 380;

export default function ProfileTab() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const restrictions = [
    { icon: '🧂', label: 'Low Sodium' },
    { icon: '🍌', label: 'Low Potassium' },
    { icon: '🥛', label: 'Low Phosphorus' },
    { icon: '🍖', label: 'Low Protein' },
    { icon: '🍬', label: 'Diabetic' },
    { icon: '🥬', label: 'Vegetarian' },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.profileSection}>
          <View style={styles.profileCircle}>
            <Text style={styles.profileInitial}>U</Text>
          </View>
          <View style={styles.profileInfo}>
            <View style={styles.nameRow}>
              <Text style={styles.profileName}>User</Text>
              <TouchableOpacity>
                <Edit2 size={18} color={Colors.primary} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>3</Text>
            <Text style={styles.statName}>Analyses</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>0</Text>
            <Text style={styles.statName}>Bookmarks</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statName}>CKD Stage</Text>
            <Text style={styles.statValue}>Not Set</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Health Preferences</Text>
        <TouchableOpacity style={styles.preferenceCard}>
          <Heart size={20} color={Colors.primary} />
          <View style={styles.preferenceContent}>
            <Text style={styles.preferenceName}>CKD Stage</Text>
            <Text style={styles.preferenceValue}>Not Set</Text>
          </View>
          <ChevronRight size={20} color="#CCC" />
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Dietary Restrictions</Text>
        <View style={styles.restrictionsGrid}>
          {restrictions.map((item, index) => (
            <TouchableOpacity key={index} style={styles.restrictionTag}>
              <Text style={styles.restrictionEmoji}>{item.icon}</Text>
              <Text style={styles.restrictionLabel}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Settings</Text>
        <View style={styles.settingCard}>
          <View style={styles.settingContent}>
            <Bell size={20} color={Colors.primary} />
            <View style={styles.settingText}>
              <Text style={styles.settingName}>Notifications</Text>
              <Text style={styles.settingDescription}>Health reminders & tips</Text>
            </View>
          </View>
          <Switch
            value={notificationsEnabled}
            onValueChange={setNotificationsEnabled}
            trackColor={{ false: '#DDD', true: Colors.primary }}
            thumbColor="white"
          />
        </View>

        <Text style={styles.sectionTitle}>About</Text>
        <TouchableOpacity style={styles.aboutCard}>
          <Text style={styles.aboutText}>Version 1.0.0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.aboutCard}>
          <Text style={styles.aboutText}>Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.aboutCard}>
          <Text style={styles.aboutText}>Terms of Service</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#F9F9F9',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: isSmall ? 22 : 24,
    fontWeight: '700',
    color: '#000',
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 24,
  },
  profileCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  profileInitial: {
    fontSize: 32,
    fontWeight: '700',
    color: 'white',
  },
  profileInfo: {
    alignItems: 'center',
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  profileName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
  },
  statsRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 28,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E8E8E8',
  },
  statValue: {
    fontSize: isSmall ? 20 : 22,
    fontWeight: '700',
    color: Colors.primary,
    marginBottom: 2,
  },
  statName: {
    fontSize: isSmall ? 10 : 11,
    color: '#666',
    textAlign: 'center',
    lineHeight: 14,
  },
  sectionTitle: {
    fontSize: isSmall ? 14 : 16,
    fontWeight: '700',
    color: '#000',
    marginBottom: 12,
    marginTop: 8,
  },
  preferenceCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F0F0F0',
    gap: 12,
  },
  preferenceContent: {
    flex: 1,
  },
  preferenceName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    marginBottom: 2,
  },
  preferenceValue: {
    fontSize: 12,
    color: '#999',
  },
  restrictionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 20,
  },
  restrictionTag: {
    backgroundColor: '#F9F9F9',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    width: '48%',
    justifyContent: 'center',
  },
  restrictionEmoji: {
    fontSize: isSmall ? 18 : 20,
    marginBottom: 2,
  },
  restrictionLabel: {
    fontSize: isSmall ? 11 : 12,
    fontWeight: '500',
    color: '#666',
    textAlign: 'center',
  },
  settingCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F0F0F0',
    justifyContent: 'space-between',
  },
  settingContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  settingText: {
    flex: 1,
  },
  settingName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    marginBottom: 2,
  },
  settingDescription: {
    fontSize: 12,
    color: '#999',
  },
  aboutCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 14,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  aboutText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
});
