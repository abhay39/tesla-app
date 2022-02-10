import { StyleSheet, Text,TouchableOpacity, View,Image, ImageBackground, ScrollView } from 'react-native';
import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCog, faToolbox,faFan,faKey, faLock, faUnlockAlt } from '@fortawesome/free-solid-svg-icons'
import MenuItems from '../Menu/MenuItems';

const CarItem = () => {
    const [locked, setLocked]=useState(true)
    const clickLock=()=>{
        if(locked){
            setLocked(false);
        }
        else{
            setLocked(true);
        }
    }
  return (
    <View style={styles.carContainer}>
        <ImageBackground 
            source={require('../../assets/background.png')}
            style={styles.imageBackground} />
        {/* Header */}

      <View style={styles.header}>
        <TouchableOpacity>
            <FontAwesomeIcon icon={faCog} size={26} style={styles.icon}/>
        </TouchableOpacity>
            <Text style={styles.headerTitles}>Abhay Mobile</Text>
        <TouchableOpacity>
            <FontAwesomeIcon icon={faToolbox} size={26} style={styles.icon}/>
        </TouchableOpacity>
      </View>

      <View style={styles.batterySection}>
        <Image source={require('../../assets/battery.png')} style={styles.batteryImage}/>
        <Text style={styles.batteryText}>150 mi</Text>
      </View>

      {/* Status */}
      <View style={styles.status}>
        <Text style={styles.statusText}>Parked</Text>
      </View>

      {/* Controll Icons */}
      <ScrollView>
        <View style={styles.controlls}>
                <TouchableOpacity>
                <View style={styles.controllButton}>
                    <FontAwesomeIcon icon={faFan} size={26} style={styles.icon}/>
                </View>

            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.controllButton}>
                    <FontAwesomeIcon icon={faKey} size={26} style={styles.icon}/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={clickLock}>
                <View style={styles.controllButton}>
                    <FontAwesomeIcon icon={locked ? faLock : faUnlockAlt } size={26} style={styles.icon}/>
                </View>
            </TouchableOpacity>
        </View>
        <MenuItems/>
      </ScrollView>
    </View>
  );
};

export default CarItem;

const styles = StyleSheet.create({
    
    carContainer:{
      width:'100%',
      height:'100%',
      backgroundColor:'orange',
    },

    header:{
        marginTop:40,
        marginLeft:20,
        marginRight:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:10,
    },
    headerTitles:{
        color:'white',
        fontSize:16,
        fontWeight:'bold',
        alignItems:'center',
        justifyContent:'center',
    },
    icon:{
        color:'white',
    },
    imageBackground:{
        width:'100%',
        height:'100%',
        resizeMode:'cover',
        position:'absolute'
    },
    batterySection:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    batteryImage:{
        width:70,
        height:30,
        marginRight:12,

    },
    batteryText:{
        color:'white',
        fontSize:35,
        fontWeight:'bold',
    },
    status:{
        alignItems:'center',
    },
    statusText:{
        color:'white',
        fontSize:20,
        fontWeight:'bold'
    },
    controlls:{
        justifyContent:'center',
        flexDirection:'row',
        marginTop:150,
    },
    controllButton:{
        borderWidth:1,
        borderColor:'white',
        borderRadius:50,
        padding:16,
        marginLeft:25,
    }
  });

