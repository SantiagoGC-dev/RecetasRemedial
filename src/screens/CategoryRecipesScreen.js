import React, { useEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import api from '../utils/api';

export default function CategoryRecipesScreen({ route, navigation }) {
  const { category } = route.params;
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    loadRecipes();
  }, [category]);

  const loadRecipes = async () => {
    const recipes = await api.getRecipesByCategory(category);
    setRecipes(recipes);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.idMeal}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('RecipeDetail', { id: item.idMeal })}>
            <Card style={styles.card}>
              <Card.Cover source={{ uri: item.strMealThumb }} />
              <Card.Content>
                <Title>{item.strMeal}</Title>
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