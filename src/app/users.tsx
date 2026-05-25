import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface User {
  id: number;
  company: string;
  email: string;
}

export default function UsersScreen() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get("https://fake-json-api.mock.beeceptor.com/users")
      .then((response) => {
        setUsers(response.data);
      });
  }, []);

  return React.createElement(
    View,
    { style: styles.container },
    React.createElement(FlatList<User>, {
      data: users,
      keyExtractor: (item) => item.id.toString(),
      renderItem: ({ item }) =>
        React.createElement(
          View,
          { style: styles.card },
          React.createElement(Text, { style: styles.text }, "Company: ", item.company),
          React.createElement(Text, { style: styles.text }, "Email: ", item.email)
        ),
    })
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },

  card: {
    backgroundColor: "#f2f2f2",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },

  text: {
    fontSize: 16,
  },
});