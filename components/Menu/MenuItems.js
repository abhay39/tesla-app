import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMusic, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { TouchableOpacity } from 'react-native';
import items from './items';

const MenuItems = () => {
  return (
    <View style={styles.menuItems}>
        {items.map(item =>(
            <TouchableOpacity key={item.id}>
            <View style={styles.menuRow}>
                <FontAwesomeIcon icon={item.icon} size={26} style={styles.icon}/>
                <View style={styles.menuTextBox}> 
                    <Text style={styles.menuText}>{item.title}</Text>
                    {item.subTitle && (
                        <Text style={styles.subTitile}>{item.subTitle}</Text>
                    )}
                </View>
                <FontAwesomeIcon icon={faChevronRight} size={26} style={styles.arrow}/>
            </View>
        </TouchableOpacity>
        ))}
    </View>
  );
};

export default MenuItems;

const styles = StyleSheet.create({
    menuItems:{
        marginTop:20,
        marginLeft:20,
        marginRight:20, 
    },
    icon:{
        color:'white',
    },
    menuText:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        marginLeft:15,
        textTransform:"uppercase"
    },
    menuRow:{
        marginTop:15,
        marginBottom:15,
        flexDirection:'row',
        alignItems:'center',
    },
    menuTextBox:{
        flexGrow:1
    },
    arrow:{
        color:'gray',
    },
    subTitile:{
        color:'gray',
        fontSize:14,
        marginLeft:15,
    }
});
