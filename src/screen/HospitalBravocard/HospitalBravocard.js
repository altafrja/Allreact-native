
import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView, ImageBackground, Image, FlatList, Modal, Alert, TextInput, Share } from 'react-native';
import styles from './homecss';
import { useNavigation } from '@react-navigation/native';
import Imagepath from '../../common/imagepath';
import Fonts from '../../common/Fonts';
import { Header } from '../../common/Header';
import String from '../../common/String';
import ApiCall from '../../Lib/ApiCall';
import SortUrl from '../../Lib/SortUrl';

export default Hospotalbravocard = (props) => {
    const [modalVisibleComment, setModalVisibleComment] = useState(false);
    const [modalVisibleMessage, setModalVisibleMessage] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [DataCardList, setDataCardList] = useState(false);

    useEffect(() => {
        Call_DataCardApi();
    }, []);
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

    // DataCardApi
    const Call_DataCardApi = () => {

        ApiCall.ApiMethod(SortUrl.AllServices, 'Get',).then(
            (response) => {
                // alert(JSON.stringify(response))
                console.log("Response==========", response);
                if (response.status == true) {
                    setDataCardList(response.data.services)
                    // console.log("Child  of appliances  are", response);
                } else {
                    // alert("Something went wrong")
                    // ToastMessage("Error in fetching child categories");
                }
            }
        );
    }

    const cardData = [{ hospital: "Nurse xyz Heart" }, { hospital: "Ayan xyz Heart" }, { hospital: "Nurse  Heart" }, { hospital: "Nurse xyz Heart" }, { hospital: "Ayan xyz Heart" }, { hospital: "Nurse  Heart" },]
    // Card DATA Content
    const Card = ({item}) => {
        return (
            <TouchableOpacity onPress={() => { navigation.navigate('Bravocard') }} style={styles.cardContainer}>
                <View style={styles.cardIconView} >
                    <Image style={styles.cardIcon} source={Imagepath.Bravo} />
                </View>
                {/* Button of Share , Comment and Mesage */}
                <View style={styles.shareCardView}>
                    <TouchableOpacity style={styles.shareButton} onPress={() => setModalVisibleComment(true)}>
                        <Image style={styles.shareButtonImage} source={Imagepath.commenticon} />
                        <Text style={styles.shareButtonText}>Comment</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.shareButton} onPress={() => setModalVisibleMessage(true)}>
                        <Image style={styles.shareButtonImage} source={Imagepath.Messageicon} />
                        <Text style={styles.shareButtonText}>Message</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.shareButton} onPress={onShare}>
                        <Image style={styles.shareButtonImage} source={Imagepath.Share} />
                        <Text style={styles.shareButtonText}>share</Text>
                    </TouchableOpacity>
                </View>

                {/* Hospital name and details */}
                <View style={styles.cardHospitalView}>
                    <Text style={styles.hospitalName}>{item.name}</Text>
                    <Text style={styles.cardHospitalViewText}>{item.description}</Text>
                    {/* photo & Videos Btn */}
                    <View style={styles.cardHospitalViewButton}>
                        <TouchableOpacity style={styles.cardPhotoButton}>
                            <Image style={styles.cardPhotoImage} source={Imagepath.Photo} />
                            <Text style={styles.cardPhotoVideoText}>Photo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", flexDirection: "row", width: 68, height: 20, backgroundColor: "#ffffff", borderRadius: 10, }}>
                            <Image style={styles.cardVideoIcon} source={Imagepath.Video} />
                            <Text style={styles.cardPhotoVideoText}>Video</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </TouchableOpacity>
        )
    }



    return (
        <ImageBackground
            source={Imagepath.homebg}
            resizeMode='cover'
            style={{ flex: 1, }} >
            <Header title={String.Bravocard} isback={true} />
            <ScrollView
                scrollIndicatorInsets={false}
                contentContainerStyle={{ flexGrow: 1 }}>

                {/* Card of hospitals */}
                <View style={{ width: "100%" }}>
                    < FlatList
                        data={DataCardList}
                        numColumns={2}
                        // horizontal={true}
                        style={{ padding: "4%", }}
                        renderItem={Card}
                        keyExtractor={items => items}
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
