import React, { useState } from 'react';
import { View, StyleSheet, Switch } from 'react-native';
import { Card, Title, Paragraph, List } from 'react-native-paper';

export default function SettingsScreen() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Ajustes de la aplicación</Title>
          
          <List.Item
            title="Modo oscuro"
            right={() => (
              <Switch
                value={isDarkMode}
                onValueChange={() => setIsDarkMode(!isDarkMode)}
              />
            )}
          />
          
          <List.Item
            title="Notificaciones"
            right={() => (
              <Switch
                value={notificationsEnabled}
                onValueChange={() => setNotificationsEnabled(!notificationsEnabled)}
              />
            )}
          />
          
          <List.Item
            title="Idioma"
            description="Español"
            onPress={() => {}}
            right={() => <List.Icon icon="chevron-right" />}
          />
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    margin: 10,
  }
});