import React, { useEffect, useState } from "react";
import {
  Alert,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  LayoutAnimation,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  UIManager,
  View
} from "react-native";

export default function EntryPoint() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  const handleLogin = () => {
    if (username === "admin" && password === "1234") {
      Alert.alert("Login Successful", `Welcome, ${username}`);
      if (!remember) {
        setUsername("");
        setPassword("");
      }
    } else {
      Alert.alert("Error", "Incorrect username or password");
    }
  };

  useEffect(() => {
  if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}, []);

  useEffect(() => {
  const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setKeyboardVisible(true);
  });
  const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setKeyboardVisible(false);
  });

  return () => {
    showSubscription.remove();
    hideSubscription.remove();
  };
}, []);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          {/* Parte superior con imagen */}
          <View style={styles.topSection}>
            <Image
              source={{
                uri: "https://cdn.pixabay.com/photo/2018/06/24/08/01/dark-background-3494082_1280.jpg",
              }}
              style={styles.backgroundImage}
            />
            <Image
              source={{
                uri: "https://st5.depositphotos.com/32634758/65999/i/450/depositphotos_659995280-stock-photo-letter-logo-monogram-hexagon-shape.jpg",
              }}
              style={styles.logo}
            />
          </View>

          {/* Parte inferior con login */}
          <View style={styles.bottomSection}>
            <Text style={styles.appName}>Login</Text>
            <Text style={styles.welcomeText}>Welcome to My App!</Text>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>USER</Text>
              <TextInput
                style={styles.input}
                value={username}
                onChangeText={setUsername}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>PASSWORD</Text>
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
              />
            </View>

            <TouchableOpacity
              style={styles.checkboxContainer}
              onPress={() => setRemember(!remember)}
              activeOpacity={0.7}
            >
              <View style={[styles.checkbox, remember && styles.checked]}>
                {remember && <Text style={styles.checkmark}>✓</Text>}
              </View>
              <Text style={styles.label}>Remember Me</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Log in</Text>
            </TouchableOpacity>
            <Text style={styles.FinalText}>Forgot Password?</Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover",
  },
  topSection: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 130,
    height: 130,
    marginBottom: 560,
    borderRadius: 20,
  },
  appName: {
    fontSize: 60,
    fontFamily: "RobotoBold",
    color: "#000000ff",
    textShadowColor: "rgba(0,0,0,0.3)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    marginBottom: 10,
  },
  welcomeText: {
    marginTop: 0,
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 30,
  },
  FinalText: {
    marginTop: 30,
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 30,
  },
  bottomSection: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 1)", // un poco transparente
    borderTopLeftRadius: 0,
    borderTopRightRadius: 100, // 👉 borde redondeado solo en la esquina derecha
    marginTop: -550,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden", // asegura que el redondeado se aplique
  },
  inputContainer: {
    width: "70%",
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    color: "#333",
    marginBottom: 5,
    marginLeft: 5,
  },
  input: {
    height: 45,
    borderRadius: 20,
    paddingHorizontal: 10,
    backgroundColor: "rgba(202, 202, 202, 0.8)",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 7,
    marginBottom: 9,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#666",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  checked: {
    backgroundColor: "#004d0aff",
    borderColor: "#000000ff",
  },
  checkmark: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#1d1d1dff",
    paddingVertical: 12,
    paddingHorizontal: 130,
    borderRadius: 10,
    marginTop: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "RobotoRegular",
  },
});