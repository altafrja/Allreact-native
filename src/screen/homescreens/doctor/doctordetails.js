import React, { useState, useEffect } from 'react';
import {
    View,
    Image,
    Text,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    ScrollView,
    FlatList,
} from 'react-native';
import Imagepath from '../../../common/imagepath';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ServicesPage from './ServicesPage';
import Locationn from './Locationn';
import Abouappt from './abouappt';
import Businesses from './Businesses';
import Feedbackpage from './feedbackpage';
// import { useNavigation } from '@react-navigation/native';
import Fonts from '../../../common/Fonts';

export default function Doctordetails({route}) {
    const navigation = useNavigation();

    const  person  = route.params?route.params.person:false;
    const  personRed  = route.params?route.params.personRed:false;


    const [About, setAbout] = useState(person);
    const [Service, setService] = useState(false);
    const [Location, setLocation] = useState(false);
    const [Business, setBusiness] = useState(false);
    const [Feedback, setFeedback] = useState(personRed);
    const Aboutus = () => {
        setAbout(true)
        setService(false)
        setLocation(false)
        setBusiness(false)
        setFeedback(false)

    }

    const Serviceus = () => {
        setAbout(false)
        setService(true)
        setLocation(false)
        setBusiness(false)
        setFeedback(false)

    }
    const ServiceLocation = () => {
        setAbout(false)
        setService(false)
        setLocation(true)
        setBusiness(false)
        setFeedback(false)
    }

    const Businessis = () => {
        setAbout(false)
        setService(false)
        setLocation(false)
        setBusiness(true)
        setFeedback(false)

    }
    const Feedbackfun = () => {
        setAbout(false)
        setService(false)
        setLocation(false)
        setBusiness(false)
        setFeedback(true)
    }

    // useEffect(() => {
    //     Feedbackfun(true);
    //     Aboutus();
    //     Serviceus();
    //     ServiceLocation();
    //     Businessis();
    //   });

    return (
        <ImageBackground source={Imagepath.background} style={{flex:1}}>

            <ScrollView  >
                <View style={styles.container}>

                    <Image source={Imagepath.doctor} style={styles.ImageTop} />
                    <TouchableOpacity onPress={()=>{navigation.goBack()}} style={styles.backButton}>
                        <Image style={styles.backIcon} source={Imagepath.back} />
                    </TouchableOpacity>
                    {/* Doctor detail Card */}
                    <View style={styles.DoctordetailsCard}>
                        <Text style={styles.dactorName}>Dr. Jenny Wilson </Text>
                        <Text style={styles.doctorSpacilist}>Heart Durgeion.</Text>
                        <View style={styles.redstarView}>
                            <View style={styles.ratingView}>
                                <Image style={styles.star} source={Imagepath.redstar} />
                                <Image style={styles.star} source={Imagepath.redstar} />
                                <Image style={styles.star} source={Imagepath.redstar} />
                                <Image style={styles.star} source={Imagepath.redstar} />
                                <Image style={styles.star} source={Imagepath.redstar} />
                            </View>
                            <Text style={styles.ratingNumber}>3.2
                                <Text style={styles.clinicianReview}>Clinician's Review</Text></Text>
                        </View>

                        {/* yellow Star Line */}
                        <View style={styles.yellowStarview}>
                            <View style={styles.ratingView}>
                                <Image style={styles.star} source={Imagepath.yellowstar} />
                                <Image style={styles.star} source={Imagepath.yellowstar} />
                                <Image style={styles.star} source={Imagepath.yellowstar} />
                                <Image style={styles.star} source={Imagepath.yellowstar} />
                                <Image style={styles.star} source={Imagepath.yellowstar} />
                            </View>
                            <View style={styles.yellowStarSubview}>
                                <Text style={styles.ratingNumber}>3.2
                                    <Text style={styles.clinicianReview}>Patient Review</Text></Text>
                                <TouchableOpacity onPress={()=>navigation.navigate('rate')} style={styles.yellowstarButton}>
                                    <Image source={Imagepath.mess}
                                        style={styles.yellowStarSubviewIcon} />
                                    <Text style={styles.yellowStarSubviewIconTExt}>Add review</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    {/* tab View */}

                    <View style={{ flexDirection: "row", justifyContent: "center", width: "90%", alignSelf: "center", marginTop: hp("5%"),  }}>
                        <TouchableOpacity onPress={() => { Aboutus() }} style={[{ backgroundColor: About ? "#245FC7" : "#ffffff", width: 70, }, styles.button]}>
                            <Text style={{  fontSize: 10,fontFamily:Fonts.ProximaNovaMedium ,color:About ?"#fff":"#000",}}>About us</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { Serviceus() }} style={[{ backgroundColor: Service ? "#245FC7" : "#ffffff", width: 70, }, styles.button]}>
                            <Text style={{  fontSize: 10,fontFamily:Fonts.ProximaNovaMedium, color: Service?"#fff":"#000", }}>Services</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { ServiceLocation() }} style={[{ backgroundColor: Location ? "#245FC7" : "#ffffff", width: 80, }, styles.button]}>
                            <Text style={{  fontSize: 10,fontFamily:Fonts.ProximaNovaMedium ,color:Location ?"#fff":"#000",}}>Services Location</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { Businessis() }} style={[{ backgroundColor: Business ? "#245FC7" : "#ffffff", width: 80, }, styles.button]}>
                            <Text style={{  fontSize: 10,fontFamily:Fonts.ProximaNovaMedium,color:Business ?"#fff":"#000", }}>Business Hours</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { Feedbackfun() }} style={[{ backgroundColor: Feedback ? "#245FC7" : "#ffffff", width: 75, }, styles.button]}>
                            <Text style={{  fontSize: 10,fontFamily:Fonts.ProximaNovaMedium ,color:Feedback ?"#fff":"#000000"}}>Feedback</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.tabviewDetails}>

                        {About &&
                            <Abouappt />
                        }
                        {Service &&
                            <ServicesPage />
                        }
                        {Location &&
                            <Locationn />
                        }
                        {Business &&
                            <Businesses />
                        }
                        {Feedback &&
                            <Feedbackpage />
                        }

                    </View>

                </View>
            </ScrollView>
        </ImageBackground>

    );
}

const styles = StyleSheet.create({
button: { height: 28, justifyContent: "center", alignItems: "center", borderRadius:10 },
container:{ marginBottom: 10 },
ImageTop:{ height: hp("45%"), width: "100%" },
backButton:{position:"absolute", marginTop:20, marginLeft:15, },
backIcon:{ height: 21, width: 32 },
DoctordetailsCard:{ backgroundColor: "#E7F6FC", width: "90%", justifyContent: "center", paddingHorizontal: 20, borderRadius: 20, alignSelf: "center", marginTop: -65, paddingVertical: 15 },
dactorName:{ color: "#000000", fontSize: 20,ffontFamily:Fonts.ProximaNovaBold, marginBottom: 5 },
doctorSpacilist:{ color: "#858585", fontSize: 15, fontFamily:Fonts.ProximaNovaMedium },
redstarView:{ width: "85%", flexDirection: "row", marginVertical: 5 },
ratingView:{ height: 15, width: 45, backgroundColor: "#ffffff", flexDirection: "row", justifyContent: "space-around", alignItems: "center", borderRadius: 10, paddingHorizontal: 5 },
star:{ height: 6, width: 6 },
ratingNumber:{ color: "#000000", fontSize: 11,fontFamily:Fonts.ProximaNovaMedium, marginLeft: 10 },
clinicianReview:{ color: "#5D5D5D", fontSize: 10,fontFamily:Fonts.ProximaNovaRegular },
yellowStarSubview:{ flexDirection: "row", justifyContent: "space-between", width: "80%", alignItems: "center" },
yellowstarButton:{ backgroundColor: "#245FC7", height: 30, width: 108, borderRadius: 20, flexDirection: "row", justifyContent: "center", alignItems: "center", marginLeft: 20 },
yellowStarSubviewIcon:{ height: 12, width: 12 },
yellowStarSubviewIconTExt:{ color: "#ffffff", fontSize: 10, paddingLeft: 10 ,fontFamily:Fonts.ProximaNovaMedium},
yellowStarview:{ width: "100%", flexDirection: "row", alignItems: "center" },

tabviewDetails:{ width: "90%", backgroundColor: "#ffffff", alignSelf: "center", marginTop: 15, borderRadius:10 },

















})