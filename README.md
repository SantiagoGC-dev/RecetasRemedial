ecetasApp - Aplicación de Recetas con TheMealDB API
https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white
https://img.shields.io/badge/TheMealDB-FF6B6B?style=for-the-badge

Aplicación móvil de recetas desarrollada con React Native y Expo que consume la API pública de TheMealDB.

📌 Características principales
🍳 Buscar recetas por nombre

📂 Explorar recetas por categorías

🔍 Vista detallada de cada receta

❤️ Funcionalidad de favoritos

✏️ Sistema de comentarios

🌗 Soporte para tema claro/oscuro

🛠 API Utilizada: TheMealDB
Información general
URL Base: https://www.themealdb.com/api/json/v1/1/

Tipo: API pública y gratuita

Límites: No requiere autenticación para uso básico


ESTRUCTURA DEL PROYECTO:
recetas-app/
├── src/
│   ├── navigation/       # Configuración de navegación
│   ├── screens/          # Pantallas de la aplicación
│   │   ├── HomeScreen.tsx
│   │   ├── CategoriesScreen.tsx
│   │   ├── RecipeDetailScreen.tsx
│   │   ├── SearchScreen.tsx
│   │   ├── AboutScreen.tsx
│   │   └── SettingsScreen.tsx
│   ├── utils/
│   │   └── api.ts        # Cliente API
│   └── types/            # Tipos TypeScript (opcional)
├── App.tsx               # Punto de entrada
├── package.json
└── tsconfig.json         # Configuración TypeScript


Tecnologías utilizadas:
Framework: React Native + Expo

Navegación: React Navigation (Tab + Stack)

UI: React Native Paper

Iconos: @expo/vector-icons

HTTP Client: axios

Tipado: TypeScript (opcional)

📝 Licencia
Este proyecto está bajo licencia MIT. La API de TheMealDB es de uso público pero tiene sus propios términos de uso.
