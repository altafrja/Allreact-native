import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, ScrollView, FlatList, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-swiper';
import Imagepath from '../../common/imagepath';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, listenOrientationChange } from 'react-native-responsive-screen';
import styles from './css';


const Profile = ({ navigation }) => {
    const data = [
        {
            text1: "Recharge Coins", images: Imagepath.wallet
        },
        {
            text1: "Income", images: Imagepath.dimondgray
        },
        {
            text1: "User Level", images: Imagepath.stargray
        },
        {
            text1: "Discover Groups", images: Imagepath.multiple
        },
        {
            text1: "Medal Hall", images: Imagepath.medalgray
        },
        {
            text1: "Broadcast watched", images: Imagepath.video
        },
        {
            text1: "Mall", images: Imagepath.shopping
        },
    ]
    const list = ({ item }) => {
        return (
            <TouchableOpacity style={styles.button}
            onPress={()=>{navigation.navigate("coinrecharge")}}
            >
                <Image 
                style={styles.buttonIcon} 
                resizeMode="contain" 
                source={item.images} />
                <Text style={styles.buttonText}>{item.text1}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.mainContainer}>
            {/* Blue View */}

            <View style={styles.blue}>
                {/* Back image */}
                <TouchableOpacity>
                    <Image 
                    style={styles.backicon} 
                    resizeMode="contain" 
                    source={Imagepath.back} />
                </TouchableOpacity>
            </View>
            {/* containt of details and image of Account holder */}
            <View style={styles.detailsView}>
                {/* ?Following no.  */}
                <View style={{}}>
                    <Text style={styles.datanumber}>352</Text>
                    <Text style={styles.datatext}>Followings</Text>
                </View>
                {/* account holder Image */}
                <Image 
                style={styles.imageIcon} 
                resizeMode="contain" 
                source={Imagepath.image} />
                {/* Follower No. */}
                <View style={{}}>
                    <Text style={styles.datanumber}>5.2K</Text>
                    <Text style={styles.datatext}>Followres</Text>
                </View>
            </View>
            {/* Green View or Border */}
            <View style={styles.greenView}>
                <View style={styles.greenCircle}
                />
            </View>
            {/* Dazo Id */}
            <Text style={styles.dazoText}>DAZO ID: <Text style={styles.dazoNumber}></Text>252521</Text>

            <Text style={styles.accountholderName}>Pratik Sonar</Text>

            <ImageBackground style={styles.bannerImage}
                source={Imagepath.banner}
                resizeMode="contain"
            >
                <Text style={styles.bannerText}>Invite your friends</Text>
            </ImageBackground>
            <FlatList
                onScroll={false}
                data={data}
                keyExtractor={item => item}
                renderItem={list}
            />
        </View>     
    );
}

export default Profile;