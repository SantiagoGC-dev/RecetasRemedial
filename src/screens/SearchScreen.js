import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Searchbar, Card, Title, Paragraph } from 'react-native-paper';
import api from '../utils/api';

export default function SearchScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    if (searchQuery.trim()) {
      const recipes = await api.searchRecipes(searchQuery);
      setResults(recipes || []);
    }
  };

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Buscar recetas"
        onChangeText={setSearchQuery}
        value={searchQuery}
        onSubmitEditing={handleSearch}
        style={styles.searchbar}
      />
      <FlatList
        data={results}
        keyExtractor={(item) => item.idMeal}
        renderItem={({ item }) => (
          <Card 
            style={styles.card}
            onPress={() => navigation.navigate('RecipeDetail', { id: item.idMeal })}
          >
            <Card.Cover source={{ uri: item.strMealThumb }} />
            <Card.Content>
              <Title>{item.strMeal}</Title>
              <Paragraph>{item.strCategory}</Paragraph>
            </Card.Content>
          </Card>
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
  searchbar: {
    marginBottom: 10,
  },
  card: {
    marginBottom: 15,
  }
});