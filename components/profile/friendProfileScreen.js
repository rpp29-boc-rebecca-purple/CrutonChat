import React from 'react';
import {
  Avatar,
  Title,
  Caption,
} from 'react-native-paper';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const FriendProfile = ({userData, isDarkTheme}) => {
  //console.log(userData)
    return (
      <SafeAreaView style={styles.container}>

        {/* profile pic, name, and snack tag */}
        <View style={styles.userInfoSection}>

          <ImageBackground
          source={isDarkTheme ? require('../../assets/BOC.nightskymoon.jpeg') : require('../../assets/BOC.profile.cloud.bg.webp')}
          style={{width: 400, height: 250}}>
            <View style={{alignItems: 'center', marginTop: 75}}>
              <Avatar.Image
                source={{
                  uri: userData.thumbnail
                }}
                size={100}
              />

              <View style={{alignItems: 'center'}}>
                <Title style={styles.title}>FRIEND NAME</Title>
                <Caption style={styles.caption}>Loves snacking on {userData.snack}</Caption>
              </View>
              {/* back button */}
              <View style={{position: 'absolute', marginTop: -80, marginLeft: 5, alignSelf: 'flex-start'}}>
              <TouchableOpacity onPress={()=> alert('clicked back')}>
                <Text style={isDarkTheme ? styles.backButtonDark : styles.backButton}
                >&#x2190;</Text>
              </TouchableOpacity>
          </View>

            </View>
            </ImageBackground>

        </View>

        {/* user info section */}
        <View style={styles.userInfoSection}>
          <View style={styles.row}>
            <Text style={isDarkTheme ? styles.keyTextStyleDark : styles.keyTextStyle}>First Name: </Text>
            <Text style={isDarkTheme ? styles.valueTextStyleDark : styles.valueTextStyle}>{userData.first_name}</Text>
          </View>
          <View style={styles.row}>
            <Text style={isDarkTheme ? styles.keyTextStyleDark : styles.keyTextStyle}>Last Name: </Text>
            <Text style={isDarkTheme ? styles.valueTextStyleDark : styles.valueTextStyle}>{userData.last_name}</Text>
          </View>
          <View style={styles.row}>
            <Text style={isDarkTheme ? styles.keyTextStyleDark : styles.keyTextStyle}>Age: </Text>
            <Text style={isDarkTheme ? styles.valueTextStyleDark : styles.valueTextStyle}>{userData.age}</Text>
          </View>
          <View style={styles.row}>
            <Text style={isDarkTheme ? styles.keyTextStyleDark : styles.keyTextStyle}>Species: </Text>
            <Text style={isDarkTheme ? styles.valueTextStyleDark : styles.valueTextStyle}>{userData.animal_type}</Text>
          </View>
          <View style={styles.row}>
            <Text style={isDarkTheme ? styles.keyTextStyleDark : styles.keyTextStyle}>Favorite Snack: </Text>
            <Text style={isDarkTheme ? styles.valueTextStyleDark : styles.valueTextStyle}>{userData.snack}</Text>
          </View>
        </View>

        {/* buttons for edit profile and navigate to settings */}
        <View style={isDarkTheme ? styles.darkProfileButtonsWrapper : styles.profileButtonsWrapper}>
            <View style={styles.profileButton}>
              <TouchableOpacity onPress={()=> alert('follow friend')}>
                  <Text style={isDarkTheme ? styles.valueTextStyleDark : styles.valueTextStyle}>Follow</Text>
              </TouchableOpacity>
            </View>
          <View style={styles.profileButton}>
            <TouchableOpacity onPress={()=> alert('unfollow')}>
              <Text style={isDarkTheme ? styles.valueTextStyleDark : styles.valueTextStyle}>Unfollow</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 23,
    marginLeft: 20,
  },
  keyTextStyle: {
    fontWeight: 'bold'
  },
  keyTextStyleDark: {
    fontWeight: 'bold',
    color: 'white'
  },
  valueTextStyle: {
    color: 'black'
  },
  valueTextStyleDark: {
    color: 'white'
  },

  profileButtonsWrapper: {
    borderTopColor: 'black',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
    marginTop: 'auto',
    backgroundColor: "#DDDDDD",
    padding: 10,

  },
  darkProfileButtonsWrapper: {
    borderTopColor: 'black',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
    marginTop: 'auto',
    backgroundColor: "black",
    padding: 10,
  },
  profileButton: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
  },
  backButton: {
    fontSize: 35,
  },
  backButtonDark: {
    fontSize: 35,
    color: 'white',
  }
});

export default FriendProfile;