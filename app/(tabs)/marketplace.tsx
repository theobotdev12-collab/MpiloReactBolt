import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Camera, Image as ImageIcon, ChevronDown } from 'lucide-react-native';
import { Colors } from '@/constants/colors';

const { width } = Dimensions.get('window');
const isSmall = width < 380;

export default function FoodAnalysisTab() {
  const analysisHistory = [
    {
      id: 1,
      name: 'Grilled Salmon',
      status: 'Caution',
      statusColor: '#FF9800',
      date: '11/25/2025',
    },
    {
      id: 2,
      name: 'Apple Slices',
      status: 'Good',
      statusColor: '#4CAF50',
      date: '11/24/2025',
    },
    {
      id: 3,
      name: 'French Fries',
      status: 'Avoid',
      statusColor: '#F44336',
      date: '11/23/2025',
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.title}>Food Analysis</Text>
        <Text style={styles.subtitle}>Scan food to check kidney-friendliness</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.photoButton}>
            <Camera size={24} color="white" />
            <Text style={styles.buttonText}>Take Photo</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.galleryButton}>
            <ImageIcon size={24} color={Colors.primary} />
            <Text style={styles.galleryButtonText}>Gallery</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.historyHeader}>
          <Text style={styles.historyTitle}>Analysis History</Text>
          <Text style={styles.itemCount}>{analysisHistory.length} items</Text>
        </View>

        {analysisHistory.map((item) => (
          <TouchableOpacity key={item.id} style={styles.historyCard}>
            <View style={styles.imagePlaceholder} />
            <View style={styles.historyContent}>
              <Text style={styles.historyName}>{item.name}</Text>
              <Text style={styles.historyDate}>{item.date}</Text>
            </View>
            <View style={styles.historyStatus}>
              <View style={[styles.statusDropdown, { borderColor: item.statusColor }]}>
                <Text style={[styles.statusText, { color: item.statusColor }]}>
                  {item.status}
                </Text>
                <ChevronDown size={16} color={item.statusColor} />
              </View>
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
    backgroundColor: '#F9F9F9',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
  },
  title: {
    fontSize: isSmall ? 22 : 24,
    fontWeight: '700',
    color: '#000',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: isSmall ? 12 : 14,
    color: '#666',
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 28,
  },
  photoButton: {
    flex: 1,
    backgroundColor: Colors.primary,
    borderRadius: 12,
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  galleryButton: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 12,
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  buttonText: {
    color: 'white',
    fontSize: isSmall ? 13 : 14,
    fontWeight: '600',
  },
  galleryButtonText: {
    color: Colors.primary,
    fontSize: isSmall ? 13 : 14,
    fontWeight: '600',
  },
  historyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  historyTitle: {
    fontSize: isSmall ? 16 : 18,
    fontWeight: '700',
    color: '#000',
  },
  itemCount: {
    fontSize: 12,
    color: '#999',
    fontWeight: '500',
  },
  historyCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  imagePlaceholder: {
    width: 56,
    height: 56,
    borderRadius: 8,
    backgroundColor: '#E0E0E0',
    marginRight: 12,
  },
  historyContent: {
    flex: 1,
  },
  historyName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    marginBottom: 2,
  },
  historyDate: {
    fontSize: 12,
    color: '#999',
  },
  historyStatus: {
    marginLeft: 8,
  },
  statusDropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 6,
    gap: 4,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
  },
});
