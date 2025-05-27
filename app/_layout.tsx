import { Stack } from "expo-router";
import React from "react";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="(tab)"
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
