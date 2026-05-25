import { Tabs } from "expo-router";
import React from "react";

export default function Layout() {
  return React.createElement(
    Tabs,
    null,
    React.createElement(Tabs.Screen, {
      name: "index",
      options: { title: "Welcome" },
    }),
    React.createElement(Tabs.Screen, {
      name: "profile",
      options: { title: "Profile" },
    }),
    React.createElement(Tabs.Screen, {
      name: "fetch-data",
      options: { title: "Fetch API" },
    }),
    React.createElement(Tabs.Screen, {
      name: "users",
      options: { title: "Users" },
    }),
    React.createElement(Tabs.Screen, {
      name: "map",
      options: { title: "Map" },
    })
  );
}