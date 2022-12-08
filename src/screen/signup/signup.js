import React, { useState } from 'react';
import { View, Image, Text, ImageBackground, StyleSheet, TouchableOpacity, TextInput, ScrollView, ToastAndroid} from 'react-native';
import Imagepath from '../../common/imagepath';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Toast from 'react-native-simple-toast';
import Fonts from '../../common/Fonts';
import { Validators } from '../../Lib/Validators';
import ApiCall from '../../Lib/ApiCall';
import Constants from '../../Lib/Constants';
import SortUrl from '../../Lib/SortUrl';
import CustomLoader from '../../Lib/CustomLoader';
import { handleNavigation } from '../../navigator/navigator';


const Signup = ({ navigation }) => {
    const [mark, setMark] = useState()
    const [loaderVisible, setloaderVisible] = useState(false)
    const [firstname, setfirstname] = useState('')
    const [lastname, setlastname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [ConfirmPassword, setConfirmPassword] = useState('')

    const chexkBox = () => {
        setMark(!mark)
    }
    const Signin_Validators=()=>{
        if(Validators.checkNotNull("First Name",2,20, firstname) &&   
          Validators.checkNotNull("Last Name",2,20, lastname)&&
          Validators.checkNotNull("Email",2,20, email)&&
        //   Validators.checkEmail("Email", email)&&
          Validators.checkPassword("Password",7,15, password)&&
          Validators.checkNotNull("Confirm Password",2,20, ConfirmPassword)&&
          Validators.checkMatch("Password",password,'Confirm Password', ConfirmPassword)
         ) {
            Signin_CallApi()    
        }
     }
    //  
     const Check_User=()=>{
        let data = {
            Email: email, 
        };
          setloaderVisible(true)
          ApiCall.ApiMethod(SortUrl.CheckUser, Constants.POST,data)
            .then((response) => {
              if (response.user_status==Constants.success) {
                setloaderVisible(false)
                Toast.show(response.message);
               } 
               else {
                Signin_CallApi() 
              }
            })
            .catch((err) => {
                setloaderVisible(false)           
             });
    
        }
     Signin_CallApi=()=>{
        let Data = {
            user_type:'User',
            first_name: firstname,
            last_name: lastname,
            email: email,
            password: password,
            confirm_password: ConfirmPassword,
            device_type: "Android",
            device_token :"User",


        };

          setloaderVisible(true)
          ApiCall.ApiMethod(SortUrl.Register, Constants.POST,Data)
            .then((response) => { 
               setloaderVisible(false)
              if (response.status == true) {
                console.log("response--+++++++++++++++++++++++++++++++++++++++++", response);
                handleNavigation({ type: 'setRoot', page: 'login', navigation: navigation, });
                //    Toast.show(response.message);
              } else {

                // Toast.show(response.message);

              }
            })
            .catch((err) => {
                setloaderVisible(false)           
             });
     }  


    return (
        <ImageBackground source={Imagepath.background} style={{ flex: 1 }}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }} >

                <View style={styles.container}>
                    <Text style={styles.headerText}>Sign up</Text>
                    <Text style={styles.headerSubText}>Create your personal account</Text>
                    <View style={styles.subContainer}>
                        <View  style={styles.textInputView} >
                            <View style={styles.textInputSubView}>
                                <Image source={Imagepath.user} resizeMode="contain" style={styles.textinputIcon} />
                            </View>
                            <TextInput
                                placeholder='Enter your first name'
                                style={styles.textInputText}
                                onChangeText={(text)=>{setfirstname(text)}}
                                value={firstname}
                                maxLength={40}
                                keyboardType="default" />

                        </View>
                        <View  style={styles.textInputView} >
                            <View style={styles.textInputSubView}>
                                <Image source={Imagepath.user} resizeMode="contain" style={styles.textinputIcon} />
                            </View>
                            <TextInput
                                placeholder='Enter your last name'
                                style={styles.textInputText}
                                onChangeText={(text)=>{setlastname(text)}}
                                value={lastname}
                                maxLength={40}
                                keyboardType="default" />

                        </View>
                        <View  style={styles.textInputView} >
                            <View style={styles.textInputSubView}>
                                <Image source={Imagepath.email} resizeMode="contain" style={styles.emailIcon} />
                            </View>
                            <TextInput
                                placeholder='Enter your email address'
                                style={styles.textInputText}
                                onChangeText={(text)=>{setemail(text)}}
                                value={email}
                                maxLength={40}
                                keyboardType="default" />

                        </View>
                        <View  style={styles.textInputView} >
                            <View style={styles.textInputSubView}>
                                <Image source={Imagepath.lock} resizeMode="contain" style={styles.emailIcon} />
                            </View>
                            <TextInput
                                placeholder='Enter your  Password'
                                style={styles.textInputText}
                                onChangeText={(text)=>{setpassword(text)}}
                                value={password}
                                maxLength={8}
                                keyboardType="default" />
                        </View>
                        <View  style={styles.textInputView} >
                            <View style={styles.textInputSubView}>
                                <Image source={Imagepath.lock} resizeMode="contain" style={styles.emailIcon} />
                            </View>
                            <TextInput
                                placeholder='Enter Confirm Password'
                                style={styles.textInputText}
                                onChangeText={(text)=>{setConfirmPassword(text)}}
                                value={ConfirmPassword}
                                maxLength={8}
                                keyboardType="default" />
                        </View>
                        <View style={styles.privacyView}>
                            <TouchableOpacity onPress={() => chexkBox()} style={{ paddingRight: 5 }}>
                                {/* <Image source={mark ? require('../../assect/icon/yes.png') : require('../../assect/icon/check.png')}
                                    style={styles.checkbox} resizeMode="cover" /> */}
                            </TouchableOpacity>
                            <Text style={styles.checkBoxText}>I agree to </Text>
                            <TouchableOpacity>
                                <Text style={styles.checkBoxText2}>Terms of Services </Text>
                            </TouchableOpacity>
                            <Text style={styles.checkBoxText}>and </Text>
                            <TouchableOpacity>
                                <Text style={styles.checkBoxText2}>Privacy Policy</Text>
                            </TouchableOpacity>

                        </View>

                        <TouchableOpacity onPress={() => { Signin_Validators() }} style={styles.signupButton}>
                            <Text style={styles.signupButtonText}>SIGNUP</Text>
                        </TouchableOpacity>

                    </View>


                    {/* Register text */}
                    <View style={styles.signinView} >
                        <Text style={styles.textsignin} >Already have an account? </Text>
                        <TouchableOpacity onPress={() => {navigation.navigate("login",{UserType:'PERSONAL'}) }}>
                            <Text style={styles.button}>Sign in</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView >
            <CustomLoader loaderVisible={loaderVisible} />

        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    container: { width: "85%", alignSelf: "center", height: "100%", flexGrow: 1 },
    headerText: { color: "#000000", fontSize: 34, marginTop: 50, marginBottom: 10, fontFamily: Fonts.ProximaNovaBold },
    headerSubText: { color: "#737373", fontSize: 17, marginBottom: 40, fontFamily: Fonts.ProximaNovaRegular },
    subContainer: { width: "100%", alignSelf: "center", },
    textInputView: { flexDirection: "row", borderColor: "#CCC", borderWidth: 1, width: "100%", borderRadius: 30, alignSelf: "center", height: 50, marginBottom: 15 },
    textInputSubView: { borderRightWidth: 1, borderColor: "#737373", height: 20, alignSelf: "center", justifyContent: "center", },
    textinputIcon: { tintColor: "#8F8B8B", alignSelf: "center", height: 15, width: 15, alignSelf: "center", marginLeft: "7%" },
    textInputText: { alignSelf: "center", fontSize: 15, paddingLeft: "4%", color: "#000000", fontFamily: Fonts.ProximaNovaLight, width: "85%" },
    emailIcon: { tintColor: "#8F8B8B", alignSelf: "center", height: 15, width: 15, alignSelf: "center", marginLeft: "7%" },
    privacyView: { flexDirection: "row", justifyContent: "center", alignItems: "center", marginBottom: 20, width: "85%", alignSelf: "center", marginTop: 5 },
    checkbox: { height: 30, width: 30, borderRadius: 5, tintColor: "#707070" },
    checkBoxText: { color: "#000000", fontFamily: Fonts.ProximaNovaRegular, fontSize: wp("3.5%") },
    checkBoxText2: { color: "#245FC7", fontFamily: Fonts.ProximaNovaRegular, fontSize: wp("3.5%") },
    signupButton: { backgroundColor: "rgba(36, 95, 199, 1)", alignItems: "center", borderRadius: 20, height: 45, justifyContent: "center", marginBottom: 25 },
    signupButtonText: { color: "#ffffff", fontFamily: Fonts.ProximaNovaSemibold, fontSize: 15 },
    signinView: { flexDirection: "row", justifyContent: "center",marginBottom:10 , alignItems:"center", },
    textsignin: { color: "#000000", fontSize: wp("4.5%"), fontFamily: Fonts.ProximaNovaRegular },
    button: { color: "#245FC7", fontSize: wp("4.5%"), fontFamily: Fonts.ProximaNovaSemibold },


})
export default Signup