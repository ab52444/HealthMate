import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Font from "react-native-vector-icons/Fontisto";
import Feather from "react-native-vector-icons/Feather";
import Mati from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/AntDesign";
import FontAw5 from "react-native-vector-icons/FontAwesome5";

import React, { useEffect, useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useRecoilState } from "recoil";
import { useNavigation } from "@react-navigation/native";
import { isLeftDrawerV } from "../recoil/HomeScreenStates";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

// import { isLeftDrawerV } from "../recoil/HomeScreenStates";
// import { token } from "../recoil/AddPromise";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { uemail } from "../recoil/Users/GetUsers";


const Drawer = () => {
  const [isDrawerV, setIsDrawerV] = useRecoilState(isLeftDrawerV);
  const navigation = useNavigation();

  return (
    <View style={styles.Main}>
      <TouchableOpacity
        onPress={() => setIsDrawerV(false)}
        style={{ marginLeft: wp(70), marginTop: hp(1.5) }}
      >
        <Font color="red" name="close" size={30} />
      </TouchableOpacity>

      {/* ProfileTab */}
      <View
        style={{
          // borderWidth: 1,
          height: hp(8),
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: wp(13),
            height: hp(6),
            borderRadius: wp(6.5), // Half of the width
            marginLeft: wp(2),
            // marginTop: hp(1),
          }}
        >
          <Image
            source={{
              uri: "https://freesvg.org/img/abstract-user-flat-4.png",
            }}
            style={{
              width: wp(13),
              height: hp(6),
              borderRadius: wp(6.5), // Half of the width
            }}
          />
        </View>
        <View style={{ marginLeft: wp(3) }}>
          <Text style={{ fontSize: hp(2) }}>Abu Bakar</Text>
          <Text>Abubakar52444@gmail.com</Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          width: "100%",
          height: hp(8),
          marginTop: hp(2),
          // justifyContent: 'center',
          alignItems: "center",
          flexDirection: "row",
          marginLeft: wp(5.5),
        }}
      >
        <FontAwesome5 name="user-edit" color="black" size={30} />
        <Text
          style={{ marginLeft: wp(5), fontWeight: "bold", fontSize: hp(2) }}
        >
          Edit Profile
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: "100%",
          height: hp(8),
          marginTop: hp(2),
          // justifyContent: 'center',
          alignItems: "center",
          flexDirection: "row",
          marginLeft: wp(5.5),
        }}
      >
        <Feather name="settings" color="black" size={30} />
        <Text
          style={{ marginLeft: wp(5), fontWeight: "bold", fontSize: hp(2) }}
        >
          Settings
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: "100%",
          height: hp(8),
          marginTop: hp(2),
          // justifyContent: 'center',
          alignItems: "center",
          flexDirection: "row",
          marginLeft: wp(5.5),
        }}
      >
        <FontAwesome5 name="question-circle" color="black" size={30} />
        <Text
          style={{ marginLeft: wp(5), fontWeight: "bold", fontSize: hp(2) }}
        >
          FAQ
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: "100%",
          height: hp(8),
          marginTop: hp(2),
          // justifyContent: 'center',
          alignItems: "center",
          flexDirection: "row",
          marginLeft: wp(5.5),
        }}
      >
        <Mati name="chat-question-outline" color="black" size={30} />
        <Text
          style={{ marginLeft: wp(5), fontWeight: "bold", fontSize: hp(2) }}
        >
          Support
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {navigation.navigate('Login')
        setIsDrawerV(false)
      }}
        style={{
          width: "100%",
          height: hp(8),
          marginTop: hp(2),
          // justifyContent: 'center',
          alignItems: "center",
          flexDirection: "row",
          marginLeft: wp(5.5),
        }}
      >
        <MaterialIcons name="logout" color="black" size={30} />
        <Text
          style={{ marginLeft: wp(5), fontWeight: "bold", fontSize: hp(2) }}
        >
          Log Out
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: "100%",
          height: hp(8),
          marginTop: hp(2),
          justifyContent: "center",
          backgroundColor: "#32C35B",
          width: "50%",
          borderRadius: wp(5),
          justifyContent: "center",
          alignItems: "center",
          marginLeft: wp(16),
          elevation: 2, // Android shadow
          shadowColor: "#000", // iOS shadow
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: wp(5) }}>Admin mode</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Drawer;

const styles = StyleSheet.create({
  Main: {
    backgroundColor: "#E4EEE6",
    // justifyContent: 'center',
    // alignItems: 'center',
    width: wp(80),
    height: hp(95),
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    // padding: 20,
  },
  user: {
    marginTop: hp(1),
    backgroundColor: "#E8DDFF",
    width: "100%",
    height: "8%",
    justifyContent: "center",
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  listContainer: {
    width: "100%",
    // borderWidth: wp(.3),
    flexDirection: "row",
    alignItems: "center",
    height: hp(4.5),
  },
  TebText: { marginLeft: wp(4), color: "#6650A4", fontSize: hp(1.5) },
});
