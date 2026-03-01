import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Heart, AlertCircle, ChevronRight } from 'lucide-react-native';
import { Colors } from '@/constants/colors';

const { width } = Dimensions.get('window');
const isSmall = width < 380;

export default function HomeTab() {
  const recentAnalyses = [
    {
      id: 1,
      name: 'Grilled Salmon',
      status: 'Caution',
      statusColor: '#FF9800',
      image: 'https://images.pexels.com/photos/28259/pexels-photo-28259.jpg?auto=compress&cs=tinysrgb&w=200',
      date: '11/25/2025',
    },
    {
      id: 2,
      name: 'Apple Slices',
      status: 'Good',
      statusColor: '#4CAF50',
      image: 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=200',
      date: '11/24/2025',
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={[Colors.primary, '#1e8a6f']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.header}>
        <Text style={styles.greeting}>Hello, User</Text>
        <Text style={styles.subGreeting}>How are your kidneys today?</Text>

        <View style={styles.profileCircle}>
          <Text style={styles.profileText}>U</Text>
        </View>
      </LinearGradient>

      <View style={styles.content}>
        <View style={styles.tipCard}>
          <AlertCircle size={20} color={Colors.primary} />
          <View style={styles.tipContent}>
            <Text style={styles.tipTitle}>TIP OF THE DAY</Text>
            <Text style={styles.tipText}>
              Watch Your Sodium{'\n'}
              Aim for less than 2,300mg of sodium per day. Read food labels and choose fresh over p...
            </Text>
          </View>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>0</Text>
            <Text style={styles.statLabel}>Foods Analyzed{'\n'}Today</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>3</Text>
            <Text style={styles.statLabel}>Total Analyses{'\n'}All Time</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.actionButton}>
            <View style={[styles.actionIcon, { backgroundColor: '#E8F5E9' }]}>
              <Heart size={20} color={Colors.primary} />
            </View>
            <Text style={styles.actionLabel}>Analyze Food</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <View style={[styles.actionIcon, { backgroundColor: '#FFF3E0' }]}>
              <Text style={styles.actionIconText}>📦</Text>
            </View>
            <Text style={styles.actionLabel}>Marketplace</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <View style={[styles.actionIcon, { backgroundColor: '#E3F2FD' }]}>
              <Text style={styles.actionIconText}>📚</Text>
            </View>
            <Text style={styles.actionLabel}>Education</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.recentHeader}>
          <Text style={styles.sectionTitle}>Recent Analyses</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>

        {recentAnalyses.map((item) => (
          <TouchableOpacity key={item.id} style={styles.analysisCard}>
            <View style={styles.analysisImageContainer}>
              <View style={styles.placeholder} />
            </View>
            <View style={styles.analysisContent}>
              <Text style={styles.analysisName}>{item.name}</Text>
              <Text style={styles.analysisDate}>{item.date}</Text>
            </View>
            <View style={styles.analysisStatus}>
              <Text style={[styles.statusBadge, { color: item.statusColor }]}>
                {item.status}
              </Text>
              <ChevronRight size={20} color="#999" />
            </View>
          </TouchableOpacity>
        ))}
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
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 24,
    position: 'relative',
  },
  greeting: {
    fontSize: isSmall ? 22 : 26,
    fontWeight: '700',
    color: 'white',
    marginBottom: 4,
  },
  subGreeting: {
    fontSize: isSmall ? 12 : 14,
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 16,
  },
  profileCircle: {
    position: 'absolute',
    top: 50,
    right: 20,
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  tipCard: {
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    flexDirection: 'row',
    gap: 12,
  },
  tipContent: {
    flex: 1,
  },
  tipTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.primary,
    marginBottom: 4,
    letterSpacing: 0.5,
  },
  tipText: {
    fontSize: 13,
    color: '#555',
    lineHeight: 18,
  },
  statsContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  statBox: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E8E8E8',
  },
  statNumber: {
    fontSize: isSmall ? 28 : 32,
    fontWeight: '700',
    color: Colors.primary,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    lineHeight: 16,
  },
  sectionTitle: {
    fontSize: isSmall ? 16 : 18,
    fontWeight: '700',
    color: '#000',
    marginBottom: 12,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
    gap: 8,
  },
  actionButton: {
    flex: 1,
    alignItems: 'center',
  },
  actionIcon: {
    width: isSmall ? 50 : 56,
    height: isSmall ? 50 : 56,
    borderRadius: isSmall ? 10 : 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  actionIconText: {
    fontSize: isSmall ? 20 : 24,
  },
  actionLabel: {
    fontSize: isSmall ? 11 : 12,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    lineHeight: 16,
  },
  recentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  seeAll: {
    fontSize: 12,
    color: Colors.primary,
    fontWeight: '600',
  },
  analysisCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  analysisImageContainer: {
    marginRight: 12,
  },
  placeholder: {
    width: 56,
    height: 56,
    borderRadius: 8,
    backgroundColor: '#E0E0E0',
  },
  analysisContent: {
    flex: 1,
  },
  analysisName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    marginBottom: 2,
  },
  analysisDate: {
    fontSize: 12,
    color: '#999',
  },
  analysisStatus: {
    alignItems: 'flex-end',
    gap: 4,
  },
  statusBadge: {
    fontSize: 12,
    fontWeight: '600',
  },
});
