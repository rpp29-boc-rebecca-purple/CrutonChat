import React, {useState} from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import HomePage from './components/home.js'
import SearchBar from './components/searchBar.js'
import Friends from './components/friends.js'
import ChatList from './components/chatlist.js'

const Tab = createBottomTabNavigator();

export default function App() {
  // Add State that will be shared globally here
  const [name, setName] = useState('Woofy GoldBerg');

  // Functions that will nagivate to each componenet // acts like a router
  function HomeScreen() {
      return (
      <View style={{ flex: 1}}>
        <HomePage name={name}/>
      </View>
    );
  }

  function FriendsScreen() {
    return (
      <ScrollView>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "left" }}>
        <SearchBar />
        <Friends />
      </View>
      </ScrollView>
    );
  }

  // This function is the circle in middle, Camera function
  function CameraScreen() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Camera Capturing Component Goes here that will open user phone camera directly</Text>
      </View>
    );
  }

  const CameraButton = ({ children, onPress }) => (
    <TouchableOpacity
      style={styles.CameraButton} onPress={onPress} >
      <View style={styles.CameraButton1}></View>
      <Image style={styles.cameraicon} source={require('./assets/cameraicon.jpeg')}/>
    </TouchableOpacity>
  );
  function ChatScreen() {
    return (
    <ScrollView>
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <SearchBar />
      <ChatList />
    </View>
    </ScrollView>
  );
  }

  function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text> Put Profile Component Here</Text>
    </View>
  );
  }


  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}/>

        <Tab.Screen
          name="Friends"
          component={FriendsScreen}
          options={{
            tabBarLabel: 'Friends',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="paw-outline" color={color} size={size} />
            ),
          }}
          />

        <Tab.Screen
          name="Camera"
          component={CameraScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="camera-outline" color={color} size={size} />
            ),
            tabBarButton: (props) => <CameraButton {...props} />,

          }}
        />

        <Tab.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            tabBarLabel: 'Chat',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="chatbubbles-outline" color={color} size={size} />
            ),
          }}/>

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-circle-outline" color={color} size={size} />
            ),
          }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  CameraButton: {
    top: -10,
    justifyContent: "center",
    alignItems: "center",
  },
  cameraicon: {
      width: 60,
      height: 60,
      borderRadius: 45,
      borderWidth: 1,
      resizeMode: 'contain'
    }
});


