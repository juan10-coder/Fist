import { Link } from 'expo-router'
import React from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Welcome() {
  return (
    <View style={styles.container}>
      {/* Fondo + overlay para contraste */}
      <ImageBackground
        source={{ uri: 'https://cdn.pixabay.com/photo/2018/06/24/08/01/dark-background-3494082_1280.jpg' }}
        style={StyleSheet.absoluteFill}
        imageStyle={{ resizeMode: 'cover' }}
      />
      <View style={styles.overlay} />

      <View style={styles.content}>
        <Text style={styles.title}>Bienvenido</Text>
        <Text style={styles.subtitle}>
          Conecta con tus amigos y descubre nuevas experiencias
        </Text>

        <View style={styles.buttonContainer}>
          <Link href="/(auth)/login" asChild>
            <TouchableOpacity style={styles.primaryButton} activeOpacity={0.9}>
              <Text style={styles.primaryButtonText}>Iniciar Sesión</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(auth)/register" asChild>
            <TouchableOpacity style={styles.secondaryButton} activeOpacity={0.9}>
              <Text style={styles.secondaryButtonText}>Registrarse</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.25)',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 38,
    fontWeight: '800',
    color: '#fff',
    textAlign: 'center',
    textShadowColor: 'rgba(0,0,0,0.35)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: 'rgba(255,255,255,0.92)',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 40,
    maxWidth: 320,
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 320,
    gap: 14,
  },
  primaryButton: {
    backgroundColor: '#1d1d1d',
    height: 50,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#fff',
    height: 50,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
})
