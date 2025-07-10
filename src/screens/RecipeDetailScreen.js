import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { Card, Title, Paragraph, Button, TextInput } from 'react-native-paper';
import api from '../utils/api';

export default function RecipeDetailScreen({ route }) {
  const { id } = route.params;
  const [recipe, setRecipe] = useState(null);
  const [comment, setComment] = useState('');
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    loadRecipe();
  }, [id]);

  const loadRecipe = async () => {
    const recipe = await api.getRecipeById(id);
    setRecipe(recipe);
  };

  const handleSubmitComment = () => {
    // Aquí podrías guardar el comentario en AsyncStorage o en un estado global
    alert('Comentario enviado!');
    setComment('');
  };

  const toggleFavorite = () => {
    setFavorite(!favorite);
  };

  if (!recipe) {
    return (
      <View style={styles.container}>
        <Text>Cargando...</Text>
      </View>
    );
  }

  // Extraer ingredientes y medidas
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (recipe[`strIngredient${i}`]) {
      ingredients.push({
        ingredient: recipe[`strIngredient${i}`],
        measure: recipe[`strMeasure${i}`]
      });
    }
  }

  return (
    <ScrollView style={styles.container}>
      <Card>
        <Card.Cover source={{ uri: recipe.strMealThumb }} />
        <Card.Content>
          <Title>{recipe.strMeal}</Title>
          <Paragraph>{recipe.strCategory} - {recipe.strArea}</Paragraph>
          
          <Title style={styles.sectionTitle}>Ingredientes</Title>
          {ingredients.map((item, index) => (
            <Paragraph key={index}>{item.ingredient} - {item.measure}</Paragraph>
          ))}

          <Title style={styles.sectionTitle}>Instrucciones</Title>
          <Paragraph>{recipe.strInstructions}</Paragraph>

          {recipe.strYoutube && (
            <Button 
              icon="youtube" 
              mode="contained" 
              onPress={() => Linking.openURL(recipe.strYoutube)}
              style={styles.button}
            >
              Ver en YouTube
            </Button>
          )}

          <Button 
            icon={favorite ? "heart" : "heart-outline"} 
            mode="outlined" 
            onPress={toggleFavorite}
            style={styles.button}
          >
            {favorite ? "Quitar de favoritos" : "Agregar a favoritos"}
          </Button>

          <Title style={styles.sectionTitle}>Deja un comentario</Title>
          <TextInput
            label="Comentario"
            value={comment}
            onChangeText={setComment}
            multiline
            style={styles.input}
          />
          <Button 
            mode="contained" 
            onPress={handleSubmitComment}
            style={styles.button}
          >
            Enviar comentario
          </Button>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  sectionTitle: {
    marginTop: 20,
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
  },
  input: {
    marginBottom: 10,
  }
});