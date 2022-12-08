import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    ImageBackground,
    Image,
    TextInput
} from 'react-native';
// import { TextInput } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Imagepath from '../../common/imagepath';
import Fonts from '../../common/Fonts';
import String from '../../common/String';
import { Header } from '../../common/Header';
// import styles from './styles';
// const { width, height } = Dimensions.get("window");
const Editprofile = ({ navigation }) => {


    return (
        <ImageBackground source={Imagepath.background} style={styles.imagebg}>
            <Header title={String.edit}  isback={"bottomtab"}/>

            <Text style={styles.textInputHeader}>Doctor name</Text>
            <TextInput
                style={styles.textInput}
                keyboardType="default"
                placeholder='name'
                placeholderTextColor={"#737373"}
            />

            <Text style={styles.textInputHeader}>Satification</Text>
            <TextInput
                style={styles.textInput}
                keyboardType="default"
                placeholder='Satificaton'
                placeholderTextColor={"#737373"}
            />

            <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate("bottomtab")}}>
                <Text style={styles.textButton}>Submit</Text>

            </TouchableOpacity>









        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    imagebg: { flex: 1 },
    containerView: { height: 65, width: "100%", backgroundColor: "#245FC7", },
    arrowiconView: { flexDirection: "row", alignItems: "center", paddingVertical: 20, width: "90%", alignSelf: "center" },
    arrowicon: { height: 21, width: 31 },
    headerView: { flexDirection: "row", alignItems: "center", width: "90%", alignSelf: "center", justifyContent: "center", position: "absolute", paddingTop: 20 },
    headerText: { color: "#ffffff", paddingLeft: 35, fontSize: 20, fontWeight: "500" },
    textInputHeader: { color: "#000", fontSize: 12, marginHorizontal: 20, fontFamily:Fonts.ProximaNovaSemibold, marginTop:25, marginBottom:10 },
    textInput: { borderWidth: 1, borderColor: "#CECECE", fontSize: 15, borderRadius: 10, marginHorizontal: 20 , paddingLeft:10,fontFamily:Fonts.ProximaNovaRegular},
    button:{ marginHorizontal:20, backgroundColor:"#245FC7", height:45, justifyContent:"center", alignItems:"center", borderRadius:10, marginTop:30},
    textButton:{color:'#fff',fontSize:16,fontFamily:Fonts.ProximaNovaSemibold}




})

export default Editprofile;