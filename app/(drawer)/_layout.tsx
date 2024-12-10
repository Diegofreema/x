import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="(tabs)"
          options={{
            title: '',
            drawerItemStyle: { display: 'none' },
          }}
        />
        <Drawer.Screen name="profile" options={{ title: 'Profile' }} />
        <Drawer.Screen name="bookmarks" options={{ title: 'Bookmarks' }} />
      </Drawer>
    </GestureHandlerRootView>
  );
}
