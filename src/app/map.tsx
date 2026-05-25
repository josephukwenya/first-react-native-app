import { Platform, StyleSheet, Text, View } from "react-native";

// Only import on native — never on web
const MapView = Platform.OS !== "web" ? require("react-native-maps").default : null;
const Marker = Platform.OS !== "web" ? require("react-native-maps").Marker : null;

export default function MapScreen() {
  // Web fallback UI
  if (Platform.OS === "web") {
    return (
      <View style={styles.fallback}>
        <Text style={styles.fallbackText}>🗺️ Map is not supported on web.</Text>
      </View>
    );
  }

  // Native map
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 6.5244,
          longitude: 3.3792,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: 6.5244, longitude: 3.3792 }}
          title="Lagos"
          description="This is Lagos"
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  fallback: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
  },
  fallbackText: {
    fontSize: 16,
    color: "#555",
  },
});