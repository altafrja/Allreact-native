import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Dimensions,ImageBackground,Image,TextInput,ScrollView,Modal, PermissionsAndroid,AsyncStorage} from 'react-native';


// import ImagePicker from 'react-native-image-crop-picker';
import String from '../../common/String';
import { Header } from '../../common/Header';
import Fonts from '../../common/Fonts';
import Imagepath from '../../common/imagepath';
import CustomDropDown from '../../common/CustomDropDown';
import Colors from '../../common/Colors';
const { width, height } = Dimensions.get("window");
const Account = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [DropDownSec, setDropDownSec] = useState(false);
    const [selectvalue, setselectvalue] = useState('Select');
    const [image, setImage] = useState('');
    let DishesData= [{ label: 'First Choice', value: '5 Star', }, { label: 'Second Choice', value: '4 Star', }, { label: 'Third Choice', value: '3 Star', }, { label: 'Maybe', value: '2 Star', },{ label: 'Emergency only', value: '1 Star', }]

    // const camera = () => {
    //     ImagePicker.openCamera({
    //         width: 300,
    //         height: 400,
    //         cropping: true,
    //     }).then(image => {
    //         setImage(image.path);
    //         console.log(image);
    //     });
    //     if (Platform.OS === 'android') {
    //         try {
    //           const granted = await PermissionsAndroid.request(
    //             PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    //             {
    //               title: 'Permissions for write access',
    //               message: 'Give permission to your storage to write a file',
    //               buttonPositive: 'ok',
    //             },
    //           );
    //           if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //             console.log('You can use the storage');
    //           } else {
    //             console.log('permission denied');
    //             return;
    //           }
    //         } catch (err) {
    //           console.warn(err);
    //           return;
    //         }
    //     }
    // }
    // const Gallery = () => {
    //     ImagePicker.openPicker({
    //         width: 300,
    //         height: 400,
    //         cropping: true
    //     }).then(image => {
    //         setImage(image.path);
    //         console.log(image);
    //     });
    // }

  const onChangesecond=(value)=> {
        setDropDownSec(!DropDownSec)
        setselectvalue(value)
      }
    
   const onPickersecond = () => {
      setDropDownSec(!DropDownSec)
}
    

    return (
        <ImageBackground source={Imagepath.background} style={styles.imagebg}>
            {/*  Header*/}
            <Header title={String.AccountSetting}  isback={"bottomtab"} />

            <View style={styles.headerView2}>
                    <TouchableOpacity >
                        <Image style={styles.headerbuttonIcon} source={Imagepath.Edit} resizeMode='contain' />
                    </TouchableOpacity>
                </View>
         
            <ScrollView
               showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1,paddingBottom:90, }}> 
            {/* container */}
            {/* <View style={styles.profileImageview}>
                <Image style={styles.ProfileImage} source={image ? { uri: image } : Imagepath.doctors} resizeMode='contain' />
                <TouchableOpacity  onPress={() => setModalVisible(true)}  style={styles.CameraButton}>
                    <Image style={styles.CameraImage} source={Imagepath.camera} resizeMode='contain' />
                </TouchableOpacity>
            
            </View> */}
            {/* Image Crop Picker */}
           
            {/* details */}
            <Text style={styles.textInputHeader}>Services</Text>
            <TouchableOpacity onPress={()=>{onPickersecond()}}  style={styles.dropdownView} >
                <Text style={styles.dropdownText}>{selectvalue}</Text>
                <Image style={styles.downArrow} source={Imagepath.down} resizeMode='contain' />
            </TouchableOpacity>
           {DropDownSec&&
            <View style={styles.DropDownView}>
            <CustomDropDown
              marginVertical={5}
              items={DishesData}
              placeholder={selectvalue}
              onChangeItem={(item) => onChangesecond(item.label)}
              onOpen={() => onPickersecond()}
              ImagePath={Imagepath.downArrow}
              colour={ Colors.bottonColors}
              isDropDownSec={DropDownSec}
            />
          </View>}  
            <Text style={styles.textInputHeader}>Service Location</Text>
            <TextInput
                style={styles.textInput}
                keyboardType="default"
                placeholder='Serivice Location'
                placeholderTextColor={"#737373"}
            />
            <Text style={styles.textInputHeader}>Business Hours</Text>
            <TextInput
                style={styles.textInput}
                keyboardType="default"
                placeholder='hours'
                placeholderTextColor={"#737373"}
            />
            <Text style={styles.textInputHeader}>About  Us</Text>
            <TextInput
                style={styles.textInputAbout}
                keyboardType="default"
                placeholder='message'
                placeholderTextColor={"#737373"}
            />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>Submit</Text>

            </TouchableOpacity>
            </ScrollView>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={{ flex: 1, justifyContent: "center" }}>
                <View style={{paddingVertical:20, marginHorizontal:10,borderRadius:20,  backgroundColor: "#245FC7",}}>
                <TouchableOpacity hitSlop={{top:30,bottom:30,right:30,left:30}} onPress={()=>{setModalVisible(!modalVisible);}} style={{position:'absolute',top:10,right:20}}>
                <Image style={[styles.CancleArrow,{tintColor:'#fff',}]} source={Imagepath.close} resizeMode='contain' />
                </TouchableOpacity>
               
                <Text style={styles.SelecttextStyle}> Select image from...</Text>
                    <View style={styles.modalView}>
                        <TouchableOpacity
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => camera(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Camera</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => Gallery(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>gallery</Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                </View>
            </Modal>

        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    imagebg: { flex: 1, },
    containerView: { height: 65, width: "100%", backgroundColor: "#245FC7", },
    arrowiconView: { flexDirection: "row", alignItems: "center", paddingVertical: 20, width: "90%", alignSelf: "center" },
    arrowicon: { height: 21, width: 31 },
    headerView: { flexDirection: "row", alignItems: "center", width: "90%", alignSelf: "center", justifyContent: "center", position: "absolute", paddingTop: 20 },
    headerView2: {position: "absolute",top:15,right:10,  },
    profileImageview:{alignItems:"center", position:"relative", marginTop:20},
    ProfileImage:{ height:120, width:120, borderRadius:100},
    CameraButton:{position:"absolute", paddingLeft:100, paddingTop:20},
    CameraImage:{height:28, width:28, },
    dropdownView:{ borderWidth: 1, borderColor: "#CECECE", fontSize: 15, borderRadius: 10, marginHorizontal: 20, paddingLeft: 10, fontWeight:"600", height:50,flexDirection:"row",justifyContent:"space-between", alignItems:"center" },
    dropdownText:{fontSize:16, fontFamily:Fonts.ProximaNovaMedium},
    downArrow:{height:8, width:12, paddingRight:50},
    headerbuttonIcon: { height:30, width: 30 },
    headerText: { color: "#ffffff", paddingLeft: 35, fontSize: 20, fontWeight: "500" },
    textInputHeader: { color: "#000", fontSize: 16, marginHorizontal: 20, fontFamily:Fonts.ProximaNovaBold,marginVertical:15,},
    textInput: { borderWidth: 1, borderColor: "#CECECE", fontSize: 16, borderRadius: 10, marginHorizontal: 20, paddingLeft: 10, fontFamily:Fonts.ProximaNovaMedium, height:45 },
    textInputAbout: { borderWidth: 1, borderColor: "#CECECE", fontSize: 16, borderRadius: 10, marginHorizontal: 20, paddingLeft: 10, fontFamily:Fonts.ProximaNovaMedium, height:100 },
    button: { marginHorizontal: 20, backgroundColor: "#245FC7", height: 45, justifyContent: "center", alignItems: "center", borderRadius: 10, marginVertical:15, marginBottom:0 },
    textButton: { color: '#fff', fontSize: 16 , fontFamily:Fonts.ProximaNovaSemibold},
    modalView: {borderRadius: 20, paddingVertical: 20,marginHorizontal: 16,flexDirection: "row",justifyContent: "space-between" },
    buttonClose: { backgroundColor: "#38C348", width: "40%", },
    textStyle: {fontSize:18, fontFamily:Fonts.ProximaNovaRegular, color: "white",   textAlign: "center",  },
    SelecttextStyle: {fontSize:20,fontFamily:Fonts.ProximaNovaMedium, color: "white",  textAlign: "center", },
    CancleArrow:{height:15, width:15},
    DropDownView:{width:'90%',zIndex:5, alignSelf:'center',  justifyContent:'center',  paddingHorizontal:10, backgroundColor:'#fff',borderRadius:5 , position:'absolute',top:height/3.3 },

})
export default Account


