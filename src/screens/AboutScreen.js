import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Acerca de RecetasApp</Title>
          <Paragraph>
            Esta aplicación fue desarrollada como ejemplo para mostrar cómo consumir la API de TheMealDB.
          </Paragraph>
          <Paragraph style={styles.section}>
            Desarrollador: Santiago Calderón
          </Paragraph>
          <Paragraph style={styles.section}>
            Versión: 1.0.0
          </Paragraph>
          <Paragraph style={styles.section}>
            API utilizada: TheMealDB
          </Paragraph>
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
  },
  section: {
    marginTop: 15,
  }
});