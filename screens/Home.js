// Import necessary React Native components
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Image,
  ScrollView,
  FlatList,
  ImageBackground
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Fantisto from "react-native-vector-icons/Fontisto";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Drawer from "../components/Drawer";
import { isLeftDrawerV } from "../recoil/HomeScreenStates";
import { useRecoilState } from "recoil";
import { Card, Title, Paragraph } from "react-native-paper";
import HealthNewsScreen from "./HealthNews";
import NewsApiCall from "../network/NewApiCall";
import { FONTS } from "../constants";
import { FONTSs } from "../constants/fonts";

// Home component
const Home = ({ navigation }) => {
  const [isDrawerV, setIsDrawerV] = useRecoilState(isLeftDrawerV);
  const [newsData, setNewsData] = useState(null);
  // Define function to navigate to another screen
  const navigateToNextPage = (pageName) => {
    navigation.navigate(pageName);
  };

  const fetchData = async () => {
    const cont = "us";
    const Res = await NewsApiCall(cont);

    console.log(Res.articles, "article");
    const filteredArticles = Res.articles.filter(
      (article) => article.title !== "[Removed]"
    );
    setNewsData(filteredArticles);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        // setNewsurl(item.url);
        // console.log(newsurl);
        // setIsWebView(true);
      }}
    >
      <View style={styles.card}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardAuthor}>Author: {item.author}</Text>
        <Text style={styles.cardPublishedAt}>
          Published at: {item.publishedAt}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ImageBackground style={styles.backgroundImage} source={require('../assets/images/background.png')} >
    <View style={styles.container}>
      <TouchableOpacity
        style={{ marginTop: hp(1.5) }}
        onPress={() => setIsDrawerV(true)}
      >
        <MaterialIcons name="notification-clear-all" color="black" size={50} />
      </TouchableOpacity>

      {/* <DrwaerModal></DrwaerModal> */}

      <Modal
        animationType="slide"
        transparent={true}
        visible={isDrawerV}
        onRequestClose={isDrawerV}
      >
        {/* <Drawer /> */}
        <Drawer />
      </Modal>

      <Text style={styles.title}>Welcome to HealthMate</Text>

      {/* Feature buttons */}

      {/* <ScrollView horizontal showsHorizontalScrollIndicator={false} > */}
      <View></View>
      <View
        style={{
          flexDirection: "row",
          marginTop: hp(2),
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate('ConsultDoctor')}
          style={[styles.cards, { backgroundColor: "#4AC1DB" }]}
        >
          <Fantisto name="doctor" color="black" size={60} />
          <Text style={styles.buttonText}>Consult a Doctor</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("DiseasePredictionScreen")}
          style={[styles.cards, { backgroundColor: "#ED7390" }]}
        >
          <FontAwesome5 name="disease" color="black" size={60} />
          <Text style={styles.buttonText}>Disease Prediction</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: hp(2),
        }}
      >
        <TouchableOpacity
          style={[styles.cards, { backgroundColor: "#E59850" }]}
        >
          <FontAwesome name="cart-plus" color="black" size={60} />
          <Text style={styles.buttonText}>Order a Medicine</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("HealthNewsScreen")}
          style={[styles.cards, { backgroundColor: "#A39C95" }]}
        >
          <FontAwesome name="newspaper-o" color="black" size={60} />
          <Text style={styles.buttonText}>News</Text>
        </TouchableOpacity>
      </View>
      {/* </ScrollView> */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          marginVertical: hp(2),
        }}
      >
        <Text style={{ fontSize: hp(2.2), color:'white' }}>News</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("HealthNewsScreen")}
        >
          <Text style={{ fontSize: hp(2.2), color: "blue" }}>View All</Text>
        </TouchableOpacity>
      </View>
      <View style={{ height: hp(40), width: "100%" }}>
        {/* <HealthNewsScreen/> */}

        <FlatList
          data={newsData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false} 
          showsHorizontalScrollIndicator={false} //
        />
      </View>

      {/* <TouchableOpacity
        style={styles.button}
        onPress={() => navigateToNextPage("ConsultDoctor")}
      >
        
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateToNextPage("DiseasePrediction")}
      >
        <Text style={styles.buttonText}>Disease Prediction</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateToNextPage("OrderMedicine")}
      >
        <Text style={styles.buttonText}>Order a Medicine</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateToNextPage("HealthNews")}
      >
        <Text style={styles.buttonText}>Health News</Text>
      </TouchableOpacity> */}

      {/* Add more buttons for other features as needed */}
    </View>
    </ImageBackground>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // padding: 20,
    // padding: hp(2),
    // borderWidth: 2,
    // backgroundColor: "#ECF2F3",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    padding: hp(2),
    borderWidth: 2,
    backgroundColor: "#ECF2F3",
  },
  cards: {
    // borderWidth: 2,
    width: wp(44),
    height: hp(22),
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: wp(8),
    marginLeft: wp(2),
    overflow: "hidden",
    backgroundColor: "#fff",
    elevation: 2, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  title: {
    fontSize: hp(3),
    fontWeight: "bold",
    // marginBottom: 20,
    marginTop: hp(2.5),
    marginLeft: wp(2),
  },
  card: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#fff",
    elevation: 2, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardImage: {
    height: hp(30),
    width: "100%",
    resizeMode: "cover",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 8,
    paddingHorizontal: 16,
  },
  cardAuthor: {
    fontSize: 14,
    color: "#555",
    paddingHorizontal: 16,
  },
  cardPublishedAt: {
    fontSize: 12,
    color: "#777",
    paddingHorizontal: 16,
  },

  buttonText: {
    color: "#fff",
    fontSize: hp(2),
    fontWeight: "bold",
  },
});

// Export the Home component
export default Home;
