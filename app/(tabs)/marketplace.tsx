import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { ShoppingCart } from 'lucide-react-native';
import { Colors } from '@/constants/colors';

export default function MarketplaceTab() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <ShoppingCart size={32} color={Colors.primary} />
        <Text style={styles.title}>Kidney-Friendly Products</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.placeholder}>Coming soon</Text>
        <Text style={styles.description}>
          Discover curated kidney-friendly products and supplements
        </Text>
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
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 32,
    backgroundColor: Colors.primary,
    gap: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: 'white',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 60,
  },
  placeholder: {
    fontSize: 18,
    fontWeight: '600',
    color: '#666',
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
  },
});
