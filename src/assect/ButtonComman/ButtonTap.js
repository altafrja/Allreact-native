// import Splash from '../screen/Splash';
import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";


function Button(props) {
    const { title, outclik } = props
    return (
        <TouchableOpacity onpress={() => { outclik() }}
            style={styles.screenContainer}>
            <Text style={{ fontsize: 15, color:'white',textAlign:'center' }}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    screenContainer: {
        backgroundColor: "red",
        padding: 16,
        borderRadius:20
    }
});

export default Button;