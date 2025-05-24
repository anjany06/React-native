import { Stack } from "expo-router";
import React from "react";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="(drawer)"
        options={{
          headerShown: false,
        }}
      />
      {/* <Stack.Screen name="index" />
      <Stack.Screen name="about" /> */}
    </Stack>
  );
};

export default RootLayout;
