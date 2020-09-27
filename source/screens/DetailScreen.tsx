
import * as React from 'react';
import { Button, View, Text, StyleSheet, StatusBar } from 'react-native';


const detailData = {
    "services": {
        id: "1",
        label: "Kevin's Mobile", 
        phoneNumber: "0400234789", 
        planInfo: {
            label: "large",
            cost: "40", // $ per month 
            data: "40", // GB
        },
        dataRemaining: "4" // GB
        }
}


const Card = () => (
    <View style={{ flex: 1, padding: 40 }}>
          <View style={{flex:1, backgroundColor:  "#D3D3D3"}}>

            <View style={{marginTop:23, marginLeft:23}}>
                <Text style={styles.largeFont}>{detailData.services.label} </Text>
                <Text>{detailData.services.phoneNumber} </Text>
            </View>

            <View style={styles.centralView}>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.giantFont}>{detailData.services.dataRemaining}</Text>
                    <Text style={styles.largeFont}>GB</Text>
                </View>
                <Text>Data remaining</Text>
            </View>

            <View style={{flex:1, justifyContent: 'flex-end', marginBottom: 36, marginLeft: 23}}>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.largeFontCapital}>{detailData.services.planInfo.label} </Text>
                    <Text style={styles.largeFont}>{detailData.services.planInfo.data}GB mobile plan</Text>
                </View>
                <Text>${detailData.services.planInfo.cost} per month</Text>
            </View>

          </View>
        
    </View>
);

function DetailsScreen({ navigation }) {

    return (
      <Card/>
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
    largeFont: {
      fontSize: 23,
      fontWeight: 'bold'
    },
    largeFontCapital: {
        fontSize: 23,
        fontWeight: 'bold',
        textTransform: 'capitalize'
      },
    giantFont: {
        fontSize: 43,
        fontWeight: 'bold'
      },
      centralView:{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
      }
     
  });

  export default DetailsScreen;
