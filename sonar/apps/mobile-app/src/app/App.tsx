import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// @ts-ignore
import openURLInBrowser from 'react-native/Libraries/Core/Devtools/openURLInBrowser';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          <View style={styles.header}>
            <Image style={styles.logo} source={require('./logo.png')} />
            <Text style={styles.heading} testID="heading">
              Welcome to MobileApp
            </Text>
          </View>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit{' '}
                <Text style={styles.highlight}>apps/mobile-app/App.tsx</Text> to
                change this screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions /> Alternatively, press{' '}
                <Text style={styles.highlight}>R</Text> in the bundler terminal
                window.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <TouchableOpacity
                accessibilityRole="button"
                onPress={() => openURLInBrowser('https://nx.dev')}
                testID="nx-link"
              >
                <Text style={styles.sectionDescription}>
                  Visit <Text style={styles.link}>nx.dev</Text> for more info
                  about Nx.
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  header: {
    backgroundColor: '#143055',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
  },
  logo: {
    width: 200,
    height: 180,
    resizeMode: 'contain',
  },
  heading: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  link: {
    color: '#45bc98',
  },
});

export default App;
