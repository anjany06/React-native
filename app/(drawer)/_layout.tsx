import { Drawer } from "expo-router/drawer";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const DrawerRoot = () => {
  return (
    <GestureHandlerRootView>
      <Drawer>
        <Drawer.Screen name="index" />
        <Drawer.Screen name="growth" />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default DrawerRoot;
