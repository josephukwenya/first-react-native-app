import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
} from "react-native";

import axios from "axios";

export default function FetchDataScreen() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://fake-json-api.mock.beeceptor.com/users")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return React.createElement(
    View,
    { style: styles.container },
    loading
      ? React.createElement(ActivityIndicator, { size: "large" })
      : React.createElement(
          React.Fragment,
          null,
          React.createElement(
            Text,
            { style: styles.title },
            "API Data Retrieved Successfully"
          ),
          React.createElement(Text, null, `Total Users: ${users.length}`)
        )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
});