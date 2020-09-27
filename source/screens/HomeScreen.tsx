
import React , { useState } from 'react';
import { FlatList, SafeAreaView, Text, TouchableOpacity, StyleSheet, StatusBar , View } from 'react-native';


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

  

  const Item = ({ item, onPress } : { item: any; onPress: any }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item]}>
        <View style={{flex:1, flexDirection:'row', justifyContent: 'space-between'}}>
            <Text style={styles.title}>{item.label}</Text>
            <Text style={styles.phone}>{item.dataRemaining} GB</Text>
        </View>
        <View style={{flex:1, flexDirection:'row', justifyContent: 'space-between'}}>
            <Text style={styles.phone}>{item.phoneNumber}</Text>
            <Text style={styles.phone}>Data remaining</Text>

        </View>

      

    </TouchableOpacity>
  );


function HomeScreen( { navigation } : {navigation:any} ) {

 

    const [selectedId, setSelectedId] = useState(null);
    
    const renderItem = ( {item}:{item:any}) => {
    
        return (
          <Item
            item={item}
            onPress={() => {
                setSelectedId(item.id)
                navigation.navigate('Details')
            }}
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
      backgroundColor:  "#D3D3D3"
    },
    title: {
      fontSize: 32,
    },
    phone: {
      fontSize: 14,
    }
  });

  export default HomeScreen;