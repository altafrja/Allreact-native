
import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView, ImageBackground, Image, FlatList, Modal, Alert, TextInput, Share } from 'react-native';
import styles from './homecss';
import { useNavigation } from '@react-navigation/native';
import Imagepath from '../../common/imagepath';
import Fonts from '../../common/Fonts';
import ApiCall from '../../Lib/ApiCall';
import SortUrl from '../../Lib/SortUrl';
import Reviewmodal from '../../modal/Reviewmodal';


const Home = (props) => {



    const [modalVisibleComment, setModalVisibleComment] = useState(false);
    const [modalVisibleMessage, setModalVisibleMessage] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [dataList, setdataList] = useState();
    const [DataCardList, setDataCardList] = useState();
    const [DoctorCardList, setDoctorCardList] = useState();
    useEffect(() => {
        Call_CategouryApi();
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
    // api  Home Page 
    const Call_CategouryApi = () => {

        ApiCall.ApiMethod(SortUrl.HomeData, 'GET',).then(
            (response) => {
                // alert(JSON.stringify(response))
                // console.log("Response==========", response);
                if (response.status == true) {
                    setdataList(response.data.categories)
                    setDataCardList(response.data.cards)
                    console.log("anilllllllllllllllllll",DataCardList);
                    setDoctorCardList(response.data.cards)

                    // console.log("Anilllllllllll",response.data.categories[0].name);
                    // console.log("Anilllllllllll",response.data);

                } else {
                    alert("Something went wrong")
                    // ToastMessage("Error in fetching child categories");
                }
            }
        );
    }

    // const Datas = [{ text: "Heart" }, { text: "Heart" }, { text: "Heart" }, { text: "Heart" }, { text: "Heart" }, { text: "Heart" }, { text: "Heart" }, { text: "Heart" }, { text: "Heart" }, { text: "Heart" }, { text: "Heart" }, { text: "Heart" }, { text: "Heart" }, { text: "Heart" }, { text: "Heart" }, { text: "Heart" }, { text: "Heart" }, { text: "Heart" }, { text: "Heart" }, { text: "Heart" },]
    // CArd Data 
    // const cardData = [{ hospital: "Nurse xyz Heart" }, { hospital: "Ayan xyz Heart" }, { hospital: "Nurse  Heart" }, { hospital: "Nurse xyz Heart" }, { hospital: "Ayan xyz Heart" }, { hospital: "Nurse  Heart" },]
    // Doctor Datas
    const DoctorDatas = [{ hospital: "Nurse xyz Heart" }, { hospital: "Ayan xyz Heart" }, { hospital: "Nurse  Heart" }, { hospital: "Nurse xyz Heart" }, { hospital: "Ayan xyz Heart" }, { hospital: "Nurse  Heart" },]
    const renderItemData = ({ item, index }) => {
        return (
            <TouchableOpacity   style={styles.categoFlatelistView}>
                <Text style={styles.categoFlatelistViewText}>{item.name}</Text>
            </TouchableOpacity>
        )
    }
    // Card DATA Content
    const Card = ({item, index}) => {
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
                    <Text style={styles.hospitalName}>{item.hospital}</Text>
                    <Text style={styles.cardHospitalViewText}>{item.detail}</Text>
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

    // Doctor CARDS
    const DoctorCard = (item) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Doctordetails',{person:true})} style={styles.doctorCardContainer}>
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
                    <TouchableOpacity style={styles.ratingViewRed} onPress={() => navigation.navigate('Doctordetails', {personRed:true})}>
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
                    <TouchableOpacity style={styles.yellowstarview} onPress={() => navigation.navigate('Doctordetails', {personRed:true})}>
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
            <ScrollView
                scrollIndicatorInsets={false}
                contentContainerStyle={{ flexGrow: 1 }}>
                {/* <View style={{alignItems:"flex-start"}} > */}
                {/* Header */}
                <ImageBackground
                    source={Imagepath.headerbg}
                    resizeMode='stretch'
                    imageStyle={{}}
                    style={styles.headerbgImage}>
                    {/* Header View of profile notification */}
                    <View style={styles.notificationHeaserView}>
                        {/* navemenu Image */}
                        <TouchableOpacity onPress={() => navigation.navigate('menue')}>
                            <Image
                                source={Imagepath.navmenu}
                                resizeMode="contain"
                                imageStyle={{}}
                                style={styles.headerIconMenue} />
                        </TouchableOpacity>
                        {/* profile Notification */}
                        <View style={styles.profileView}>
                            {/* <TouchableOpacity onPress={() => navigation.navigate('profilepage', { isBack:true })} style={styles.notificationbutton}>
                                <Image
                                    source={Imagepath.Notification}
                                    resizeMode='stretch'
                                    imageStyle={{}}
                                    style={styles.notificationIcon} />
                            </TouchableOpacity> */}
                            <TouchableOpacity onPress={() => navigation.navigate('profilepage', { isBackTrue: true })} style={styles.profileButton}>
                                <Image
                                    source={Imagepath.profile}
                                    resizeMode='stretch'
                                    imageStyle={{}}
                                    style={styles.profileButton} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* Search bar */}
                    <View style={styles.searchView}>
                        {/* <Text style={styles.searchText}>Search for a doctor, hospitalls etc</Text> */}
                        <TextInput
                            style={styles.textInputStyles}
                            placeholder="Search for a doctor, hospitalls etc"
                            placeholderTextColor={"white"}

                        />
                        <TouchableOpacity onPress={() => navigation.navigate('search')}>
                            <Image
                                source={Imagepath.searchbtn}
                                resizeMode='stretch'
                                imageStyle={{}}
                                style={styles.searchImage} />
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
                {/* Categouries: */}
                <View style={styles.categouryView}>
                    <Text style={styles.categouryViewText}>Categouries:</Text>
                    <TouchableOpacity style={{}}>
                        <Text style={styles.categouryViewButtonText}>See All</Text>
                    </TouchableOpacity>
                </View>
                <View style={{}}>
                    < FlatList
                        data={dataList}
                        style={{ padding: "4%" }}
                        renderItem={renderItemData}
                        keyExtractor={item => item}
                        showsHorizontalScrollIndicator={false}
                        horizontal
                    />
                </View>

                {/* Categouries: */}
                <View style={styles.bravoCategoury}>
                    <Text style={styles.bravoCategouryText}>Bravo Card</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Hospotalbravocard')}>
                        <Text style={styles.bravoCategouryButtonText}>See All</Text>
                    </TouchableOpacity>
                </View>
                {/* Card of hospitals */}
                <View style={{ width: "100%" }}>
                    < FlatList
                        data={DataCardList}
                        // numColumns={2}
                        // horizontal={true}
                        style={{ padding: "4%" }}
                        renderItem={Card}
                        keyExtractor={item => item}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </View>

                {/* Featured Doctors */}
                <View style={styles.featuredView}>
                    <Text style={styles.featuredViewText}>Featured Doctors</Text>
                    <TouchableOpacity style={{}} onPress={() => { navigation.navigate("DoctorCard") }}>
                        <Text style={styles.featuredViewButtonText}>See All</Text>
                    </TouchableOpacity>
                </View>
                {/* Card of Doctors */}

                <View style={{}}>
                    < FlatList
                        data={DoctorCardList}
                        style={{ padding: "4%" }}
                        renderItem={DoctorCard}
                        keyExtractor={item => item}
                        horizontal
                        showsHorizontalScrollIndicator={false}
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


                {/* {DropDownSec &&
                    <Reviewmodal
                        onChangeItem={(item) => onChangesecond(item.label)}
                        onOpen={() => onPickersecond()}
                        ImagePath={Imagepath.downArrow}
                        colour={Colors.bottonColors}
                        isDropDownSec={DropDownSec}

                    />

                } */}
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