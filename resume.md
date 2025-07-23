# 📱 React Native - Beginner Class Recap (2025-07-23)

This README summarizes the key concepts covered during a React Native course using **Expo CLI**, aimed at beginner developers. The goal is to understand how to structure a mobile app using React Native components and navigation strategies.

---

## 🚀 Topics Covered

### ✅ Basic Components and Layout

- **`SafeAreaView`**  
  Ensures that content is rendered within the safe boundaries of a device screen, especially useful for iPhones with notches.

- **`StatusBar` (Android only)**  
  Needed to handle the top system bar display properly on Android.

- **`Text`**  
  Used to display readable content on screen.

- **`StyleSheet`**  
  Style declarations are written without units like `px` or `%`. All styling is adaptive by default, based on screen size.

---

### 📦 Scroll and Interaction

- **`ScrollView`**  
  Allows vertical/horizontal scrolling for containers that exceed screen height/width.

- **`Pressable`**  
  Replaces basic buttons with more responsive, flexible touchable areas that can execute functions.

---

### 🧩 Lists and Performance

- **`FlatList`**  
  Efficient way to render long lists using lazy loading. Only visible items are rendered to improve performance.

---

## 🛠️ Project Creation

To start a new project using Expo CLI with TypeScript:

```bash
npx create-expo-app@latest --template
```

To launch your app:

```bash
npx expo start
```

To fix caching issues or load recent changes:

```bash
npx expo start --clear
```

---

## 🌐 Navigation & Routing

React Native apps can use **React Navigation** for moving between screens.

### 📁 File-Based Routing (like Next.js)

If you have files like:

```
/app/settings/profile.tsx
/app/settings/privacy.tsx
```

Then routes become:

- `/settings/profile`
- `/settings/privacy`

Navigation is structured based on your folder and file names.

---

## 🧠 Extra Notes

- **Responsive Design**: No pixel units. Use `flex`, `Dimensions`, or responsive libraries.
- **Stack Navigation**: Stack allows dynamic screen transitions, each new screen is pushed like a browser history.
- **Expo Go**: Use the Expo Go app on your phone to test your app live.

---

## 🔮 Next Steps

- Learn more about Tab & Drawer Navigation
- Make API requests (e.g., fetch Pokémon, weather, etc.)
- Store data using `AsyncStorage`
- Access camera and upload photos
- Add transitions and animations

---

## 👨‍💻 Author

Mulinda Kevin Bruce  
Student Web & Mobile Developer | Smart Gardening App Project  
GitHub: [github.com/Dukent29](https://github.com/yourusername)

---

