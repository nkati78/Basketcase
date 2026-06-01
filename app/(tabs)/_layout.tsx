import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ title: 'My List' }} />
      <Tabs.Screen name="search" options={{ title: 'Find Prices' }} />
    </Tabs>
  );
}
