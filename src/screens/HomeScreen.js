import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, Image, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import api from '../utils/api';

export default function HomeScreen({ navigation }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    loadRandomRecipes();
  }, []);

  const loadRandomRecipes = async () => {
    const randomRecipes = [];
    for (let i = 0; i < 5; i++) {
      const recipe = await api.getRandomRecipes();
      randomRecipes.push(recipe[0]);
    }
    setRecipes(randomRecipes);
  };

  const navigateToSearch = () => {
    navigation.navigate('Search');
  };

  return (
    <View style={styles.container}>
      <Button title="Buscar Recetas" onPress={navigateToSearch} />
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.idMeal}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('RecipeDetail', { id: item.idMeal })}>
            <Card style={styles.card}>
              <Card.Cover source={{ uri: item.strMealThumb }} />
              <Card.Content>
                <Title>{item.strMeal}</Title>
                <Paragraph>{item.strCategory}</Paragraph>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    marginBottom: 15,
  }
});