
import React , { useState } from 'react';
import { FlatList, SafeAreaView, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';


const planData = {
    "services": [
    {
        id: "1",
        label: "Kevin's Mobile", 
        phoneNumber: "0400234789", 
        dataRemaining: "4", //GB
    }, 
    {
        id: "2",
        label: "Anna's Mobile", 
        phoneNumber: "0400234789",
        dataRemaining: "12", // GB
    }, {
        id: "3",
        label: "Kelly's Mobile", 
        phoneNumber: "0400234789",
        dataRemaining: "0.4", // GB
    } ]
    }

const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
  ];
  
const chuza = () => {
    console.log("chuchuchu:", planData.services)
}

  const Item = ({ item, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
      <Text style={styles.title}>{item.label}</Text>
      <Text style={styles.title}>{item.phoneNumber}</Text>

    </TouchableOpacity>
  );


function HomeScreen( { navigation } : {navigation:any} ) {

 
    chuza()

    const [selectedId, setSelectedId] = useState(null);
    
    const renderItem = ({ item }) => {
        const backgroundColor =   "#f9c2ff";
    
        return (
          <Item
            item={item}
            onPress={() => {
                setSelectedId(item.id)
                navigation.navigate('Details')
            }}
            style={{ backgroundColor }}
          />
        );
      };

    return (
        <SafeAreaView style={styles.container}>
        <FlatList
          data={planData.services}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });

  export default HomeScreen;