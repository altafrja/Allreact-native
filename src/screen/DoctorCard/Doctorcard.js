
import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Dimensions,ScrollView,ImageBackground,Image,FlatList,Modal, Alert,TextInput,Share} from 'react-native';
import styles from './homecss';
import { useNavigation } from '@react-navigation/native';
import Imagepath from '../../common/imagepath';
import Fonts from '../../common/Fonts';
import { Header } from '../../common/Header';
import String from '../../common/String';
import ApiCall from '../../Lib/ApiCall';
import SortUrl from '../../Lib/SortUrl';


const Home = (props) => {
    const [modalVisibleComment, setModalVisibleComment] = useState(false);
    const [modalVisibleMessage, setModalVisibleMessage] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [DoctorCardList, setDoctorCardList] = useState(false);


    const navigation = useNavigation();
    // share module
    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'React Native | A framework for building native apps using React',
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };

    // useEffect(() => {
        // Call_DoctorCardApi();
    // }, []);

    // call DoctorCard
    const Call_DoctorCardApi = () => {

        ApiCall.ApiMethod(SortUrl.AllDoctors, 'POST',).then(
            (response) => {
                // alert(JSON.stringify(response))
                console.log("Response==========", response);
                if (response.status == true) {
                    setDoctorCardList(response.data)
                    // console.log("Child  of appliances  are", response);
                } else {
                    alert("Something went wrong")
                    // ToastMessage("Error in fetching child categories");
                }
            }
        );
    }

    const DoctorDatas = [{hospital: "Nurse xyz Heart"},{hospital: "Ayan xyz Heart"},{hospital: "Nurse  Heart"},{hospital: "Nurse xyz Heart"},{hospital: "Ayan xyz Heart"},{hospital: "Nurse  Heart"},]

    // Doctor CARDS
    const DoctorCard = (item) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Doctordetails')} style={styles.doctorCardContainer}>
                <View style={styles.doctorCardIconVIew}>
                    <Image style={styles.doctorCardIcon} source={Imagepath.doctors} />
                </View>
                {/* Button of Share , Comment and Mesage */}
                <View style={styles.DoctorCardShareView}>
                    <TouchableOpacity style={styles.DoctorCardShareButton} onPress={() => setModalVisibleComment(true)}>
                        <Image style={styles.DoctorCardShareButtonIcon} source={Imagepath.commenticon} />
                        <Text style={styles.DoctorCardShareButtonText}>Comment</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.DoctorCardShareButton} onPress={() => setModalVisibleMessage(true)}>
                        <Image style={styles.DoctorCardShareButtonIcon} source={Imagepath.Messageicon} />
                        <Text style={styles.DoctorCardShareButtonText}>Message</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.DoctorCardShareButton} onPress={() => setModalVisible(true)}>
                        <Image style={styles.DoctorCardShareButtonIcon} source={Imagepath.Followicon} />
                        <Text style={styles.DoctorCardShareButtonText}>Follow</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.DoctorCardShareButton} onPress={onShare} >
                        <Image style={styles.DoctorCardShareButtonIcon} source={Imagepath.Share} />
                        <Text style={styles.DoctorCardShareButtonText}>share</Text>
                    </TouchableOpacity>
                </View>
                {/* Hospital name and details */}
                <View style={styles.doctorDetails}>
                    <Text style={styles.doctorname}>Dr. Anthony</Text>
                    <Text style={styles.doctorProfile}>Emergency medicine</Text>
                    {/* photo & Videos Btn */}
                    {/* Red Star Line */}
                    <TouchableOpacity style={styles.ratingViewRed} onPress={() => navigation.navigate('Doctordetails')}>
                        <View style={styles.ratingViewmain}>
                            <Image style={styles.star} source={Imagepath.redstar} />
                            <Image style={styles.star} source={Imagepath.redstar} />
                            <Image style={styles.star} source={Imagepath.redstar} />
                            <Image style={styles.star} source={Imagepath.redstar} />
                            <Image style={styles.star} source={Imagepath.redstar} />
                        </View>
                        <Text style={styles.ratingText}>3.2
                            <Text style={styles.clinicianReview}>Clinician's Review</Text></Text>
                    </TouchableOpacity>

                    {/* yellow Star Line */}
                    <TouchableOpacity style={styles.yellowstarview} onPress={() => navigation.navigate('Doctordetails')}>
                        <View style={styles.ratingViewmain}>
                            <Image style={styles.star} source={Imagepath.yellowstar} />
                            <Image style={styles.star} source={Imagepath.yellowstar} />
                            <Image style={styles.star} source={Imagepath.yellowstar} />
                            <Image style={styles.star} source={Imagepath.yellowstar} />
                            <Image style={styles.star} source={Imagepath.yellowstar} />
                        </View>
                        <Text style={styles.ratingText}>3.2
                            <Text style={styles.clinicianReview}>Patient Review</Text></Text>

                    </TouchableOpacity>
                </View>

            </TouchableOpacity>
        )
    }

    return (
        <ImageBackground
            source={Imagepath.homebg}
            resizeMode='cover'
            style={{ flex: 1, }} >
            <Header title={String.doctorcard} isback={true} />
            <ScrollView
                scrollIndicatorInsets={false}
                contentContainerStyle={{ flexGrow: 1 }}>
                {/* <View style={{alignItems:"flex-start"}} > */}
                {/* Header */}
                          


                <View style={{}}>
                    < FlatList
                        data={DoctorDatas}
                        style={{ padding: "4%" }}
                        renderItem={DoctorCard}
                        numColumns={2}
                        keyExtractor={item => item}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
                {/* cOMMENT MODULE */}
                <View style={{ flex: 1 }}>
                    <View style={styles.centeredView}>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisibleComment}
                            // visible={visibile}
                            onRequestClose={() => {
                                Alert.alert("Modal has been closed.");
                                setModalVisibleComment(!modalVisibleComment);
                            }}>
                            <View style={styles.centeredView1}>
                                <View style={styles.centeredView2}>
                                    <View style={styles.headerView}>
                                        <Text style={styles.headerText}>Comment</Text>
                                        <TouchableOpacity onPress={() => setModalVisibleComment(!modalVisibleComment)} style={styles.headerIcon}>
                                            <Image style={styles.headerIcon} resizeMode='contain' source={Imagepath.crose} />
                                        </TouchableOpacity>
                                    </View>

                                    <TextInput
                                        style={styles.textInput}
                                        placeholder="Enter Comment"
                                        keyboardType="default"
                                    />
                                    <TouchableOpacity style={styles.messageButton}>
                                        <Text style={styles.messageButtonText}>Send Comment</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Modal>
                        {/* button of modal start */}
                    </View>
                </View>


                {/* Message */}

                <View style={styles.centeredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisibleMessage}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setModalVisibleMessage(!modalVisibleMessage);
                        }}
                    >
                        <View style={styles.centeredView1}>
                            <View style={styles.centeredView2}>
                                <View style={styles.headerView}>
                                    <Text style={styles.headerText}>Messages</Text>
                                    <TouchableOpacity onPress={() => setModalVisibleMessage(!modalVisibleMessage)} style={styles.headerIcon}>
                                        <Image style={styles.headerIcon} resizeMode='contain' source={Imagepath.crose} />
                                    </TouchableOpacity>
                                </View>

                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Enter Messages"
                                    keyboardType="default"
                                />
                                <TouchableOpacity style={styles.messageButton}>
                                    <Text style={styles.messageButtonText}>Send Messages</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                </View>



                {/* Review modal */}
                <View style={styles.centeredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setModalVisible(!modalVisible);
                        }}
                    >
                        <View style={styles.centeredView1}>
                            <View style={styles.centeredView2}>
                                <View style={styles.headerView}>
                                    <Text style={styles.headerText}>Review & Bravo Card</Text>
                                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={styles.headerIcon}>
                                        <Image style={styles.headerIcon} resizeMode='contain' source={Imagepath.crose} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.buttonView}>
                                    <TouchableOpacity style={styles.buttonFirst}>
                                        <Image style={styles.headerIcon} resizeMode='contain' source={Imagepath.write} />
                                        <Text style={styles.headerText}>Add Review</Text>

                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.buttonTwo}>
                                        <Image style={styles.headerIcon} resizeMode='contain' source={Imagepath.addbravocard} />
                                        <Text style={styles.buttonTwoText}>Add Bravo Card</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Modal>
                    {/* button of modal start */}

                </View>


            </ScrollView>
        </ImageBackground>

    );
}

export default Home;