import { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Heart } from 'lucide-react-native';
import { router } from 'expo-router';
import Animated, {
  FadeIn,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { Colors } from '@/constants/colors';

const AnimatedView = Animated.createAnimatedComponent(View);

export default function SplashScreen() {
  const scale = useSharedValue(1);
  const opacity = useSharedValue(1);

  useEffect(() => {
    scale.value = withRepeat(
      withSequence(
        withTiming(1.1, { duration: 600 }),
        withTiming(1, { duration: 600 })
      ),
      -1
    );

    const timer = setTimeout(() => {
      router.replace('/onboarding');
    }, 3500);

    return () => clearTimeout(timer);
  }, [scale]);

  const heartStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <LinearGradient
      colors={[Colors.primary, Colors.accent]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}>
      <Animated.View entering={FadeIn.duration(800)} style={styles.content}>
        <AnimatedView style={[styles.heartContainer, heartStyle]}>
          <Heart size={80} color="white" fill="white" />
        </AnimatedView>

        <Text style={styles.title}>Impilo</Text>
        <Text style={styles.subtitle}>Kidney Health Companion</Text>

        <View style={styles.loader}>
          <View style={[styles.loaderDot, styles.loaderDot1]} />
          <View style={[styles.loaderDot, styles.loaderDot2]} />
          <View style={[styles.loaderDot, styles.loaderDot3]} />
        </View>
      </Animated.View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  heartContainer: {
    marginBottom: 32,
  },
  title: {
    fontSize: 48,
    fontWeight: '700',
    color: 'white',
    marginBottom: 8,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: 60,
    fontWeight: '500',
  },
  loader: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  loaderDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
  },
  loaderDot1: {
    animation: 'pulse 1s infinite 0s',
  },
  loaderDot2: {
    animation: 'pulse 1s infinite 0.2s',
  },
  loaderDot3: {
    animation: 'pulse 1s infinite 0.4s',
  },
});
