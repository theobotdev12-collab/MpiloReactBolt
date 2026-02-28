import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Heart, Apple, TrendingUp } from 'lucide-react-native';
import { Colors } from '@/constants/colors';

export default function HomeTab() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={[Colors.primary, Colors.accent]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.header}>
        <View style={styles.headerContent}>
          <Heart size={32} color="white" fill="white" />
          <View>
            <Text style={styles.greeting}>Welcome back!</Text>
            <Text style={styles.subGreeting}>Your kidney health journey</Text>
          </View>
        </View>
      </LinearGradient>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>

        <TouchableOpacity style={styles.card}>
          <View style={[styles.cardIcon, { backgroundColor: '#FEE5E7' }]}>
            <Apple size={24} color={Colors.primary} />
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Food Analysis</Text>
            <Text style={styles.cardDescription}>Check food kidney-friendliness</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <View style={[styles.cardIcon, { backgroundColor: '#E8F5E9' }]}>
            <TrendingUp size={24} color={Colors.accent} />
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Health Tracking</Text>
            <Text style={styles.cardDescription}>Monitor your metrics</Text>
          </View>
        </TouchableOpacity>

        <Text style={[styles.sectionTitle, { marginTop: 32 }]}>Health Tips</Text>
        <View style={styles.tipCard}>
          <Text style={styles.tipTitle}>Potassium Intake</Text>
          <Text style={styles.tipText}>
            Limit potassium-rich foods like bananas and potatoes to manage kidney health.
          </Text>
        </View>

        <View style={styles.tipCard}>
          <Text style={styles.tipTitle}>Stay Hydrated</Text>
          <Text style={styles.tipText}>
            Consult your doctor about appropriate fluid intake for your kidney health.
          </Text>
        </View>
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
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 32,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  greeting: {
    fontSize: 24,
    fontWeight: '700',
    color: 'white',
  },
  subGreeting: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    marginTop: 4,
  },
  content: {
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    marginBottom: 16,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  cardIcon: {
    width: 56,
    height: 56,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 14,
    color: '#999',
  },
  tipCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: Colors.primary,
  },
  tipTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 8,
  },
  tipText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});
