import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

import Fonts from '../../../common/Fonts';



export default Aboutapp = () => {
    return (
        <SafeAreaView >
            <View style={{padding:25}}>
                <Text style={{fontSize:16, color:"#000", paddingBottom:5, ffontFamily:Fonts.ProximaNovaBold}}>Dr. jenny wilson</Text>
                <Text  style={{fontSize:10, color:"#929397", width:"90%", justifyContent:"center",fontFamily:Fonts.ProximaNovaRegular}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</Text>

            </View>
        </SafeAreaView>
    );
};
