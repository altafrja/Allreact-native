import React, { useState } from 'react';
import {
    View,
    Image,
    Text,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    ScrollView,
    KeyboardAvoidingView,

} from 'react-native';
import Imagepath from '../../common/imagepath';
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { CheckBox } from 'react-native-elements';
import Fonts from '../../common/Fonts';
import { Validators } from '../../Lib/Validators';
import ApiCall from '../../Lib/ApiCall';
import SortUrl from '../../Lib/SortUrl';
import Constants from '../../Lib/Constants';
import CustomLoader from '../../Lib/CustomLoader';

const BusinessSignup = ({ navigation }) => {
    const [mark, setMark] = useState()
    const [loaderVisible, setloaderVisible] = useState(false)
    const [firstname, setfirstname] = useState('')
    const [lastname, setlastname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [BusinessName, setBusinessName] = useState('')
    const [ConfirmPassword, setConfirmPassword] = useState('')

    const chexkBox = () => {
        setMark(!mark)
    }

    const Signin_Validators=()=>{
        if(Validators.checkNotNull("First Name",2,20, firstname) &&   
          Validators.checkNotNull("Last Name",2,20, lastname)&&
          Validators.checkNotNull("Email",2,20, email)&&
          Validators.checkNotNull("Business Name",2,20, BusinessName)&&
          Validators.checkEmail("Email", email)&&
          Validators.checkPassword("Password",7,15, password)
         ) {
            Signin_CallApi()    
        }
     }

     Signin_CallApi=()=>{
        let Data = {
            user_type:'Business',
            first_name: firstname,
            last_name: lastname,
            email: email,
            password: password,
            confirm_password: ConfirmPassword,
            business_name: BusinessName,
            device_type: "Android",
            device_token : "Business",
            category_id :"physician"

        };
       
          setloaderVisible(true)
          ApiCall.ApiMethod(SortUrl.Register, Constants.POST,Data)
            .then((response) => {
               setloaderVisible(false)
            //   if (response.status == Constants.Success) {
              if (response.status == true) {

                navigation.navigate("login")
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
            < ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}>

                <KeyboardAvoidingView
                    behavior="padding"
                    style={{ flexGrow: 1 }}>
                    <View style={styles.container}>
                        <Text style={styles.header}>Business sign up </Text>
                        <Text style={styles.headerText}>(Dodtors, Hospitals and clinics )</Text>
                        <View style={styles.ImputView}>
                            <View  style={styles.textInputView} >
                                <View style={styles.textInputsubView}>
                                    <Image source={Imagepath.user} resizeMode="contain" style={styles.textInputIcoon} />
                                </View>
                                <TextInput
                                    placeholder='Enter your first name'
                                    style={styles.textInput}
                                    onChangeText={(text)=>{setfirstname(text)}}
                                    value={firstname}
                                    maxLength={40}
                                    keyboardType="default" />

                            </View>
                            <View  style={styles.textInputView} >
                                <View style={styles.textInputsubView}>
                                    <Image source={Imagepath.user} resizeMode="contain" style={styles.textInputIcoon} />
                                </View>
                                <TextInput
                                    placeholder='Enter your last name'
                                    style={styles.textInput}
                                    onChangeText={(text)=>{setlastname(text)}}
                                    value={lastname}
                                    maxLength={40}
                                    keyboardType="default" />

                            </View>
                            <View  style={styles.textInputView} >
                                <View style={styles.textInputsubView}>
                                    <Image source={Imagepath.email} resizeMode="contain" style={styles.textInputIcoon} />
                                </View>
                                <TextInput
                                    placeholder='Enter your email address'
                                    style={styles.textInput}
                                    onChangeText={(text)=>{setemail(text)}}
                                    value={email}
                                    maxLength={40}
                                    keyboardType="default" />

                            </View>
                            <View  style={styles.textInputView} >
                                <View style={styles.textInputsubView}>
                                    <Image source={Imagepath.business} resizeMode="contain" style={styles.textInputIcoon} />
                                </View>
                                <TextInput
                                    placeholder='Enter your  business name'
                                    style={styles.textInput}
                                    onChangeText={(text)=>{setBusinessName(text)}}
                                    value={BusinessName}
                                    maxLength={8}
                                    keyboardType="default" />

                            </View>
                            {/*  */}
                            {/* <TouchableOpacity  style={styles.textInputView} >
                                <View style={styles.textInputsubView}>
                                    <Image source={Imagepath.man} resizeMode="contain" style={styles.textInputIcoon} />
                                </View>
                                <View style={styles.dropdownSubView}>
                            <Text style={styles.textSpacilist}>specialist</Text>
                                <Image source={Imagepath.down}  resizeMode="contain" style={styles.dropdownIcon} />
                                </View>
                            </TouchableOpacity> */}
                            {/*  */}
                 
                            <View  style={styles.textInputView} >
                                <View style={styles.textInputsubView}>
                                    <Image source={Imagepath.lock} resizeMode="contain" style={styles.textInputIcoon} />
                                </View>
                                <TextInput
                                    placeholder='Enter your password'
                                    style={styles.textInput}
                                    onChangeText={(text)=>{setpassword(text)}}
                                    value={password}
                                    maxLength={8}
                                    keyboardType="default" />

                            </View>
                           
                            <View style={styles.checkBoxView}>
                                <TouchableOpacity onPress={() => chexkBox()} style={{ paddingRight: 5 }}>
                                    {/* <Image source={mark ? require('../../assect/icon/yes.png') : require('../../assect/icon/check.png')}
                                        style={styles.checkBoxViewIcon} resizeMode="cover" /> */}
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

                            <TouchableOpacity 
                            onPress={()=>{Signin_Validators()}} 
                            style={styles.continuebtn}>
                                <Text style={styles.continuebtnText}>CONTINUE</Text>
                            </TouchableOpacity>
                            <View style={styles.detailbutton} >
                                <Text style={styles.detailbuttonText1} >Already have an account? </Text>
                                <TouchableOpacity onPress={() => { navigation.navigate("login",{UserType:'BUSINESS'}) }}>
                                    <Text style={styles.sigininTextButton}> Sign in</Text>
                                </TouchableOpacity>
                            </View>


                        </View>

                    </View>
                </KeyboardAvoidingView>
            </ScrollView >
            <CustomLoader loaderVisible={loaderVisible} />
        </ImageBackground>

    );
}

const styles = StyleSheet.create({
  container:{ width: "85%", alignSelf: "center", height: "100%", },
header:{ color: "#000000", fontFamily: Fonts.ProximaNovaBold, fontSize: 34, marginTop: 50, marginBottom: 10 },
headerText:{ color: "#737373", fontFamily: Fonts.ProximaNovaRegular, fontSize: 15, marginBottom: 40 },
ImputView:{ width: "100%", alignSelf: "center", },
textInputView:{ flexDirection: "row", borderColor: "#CCC", borderWidth: 1, width: "100%", borderRadius: 30, alignSelf: "center", height: 50, marginBottom: 15 },
textInputsubView:{ borderRightWidth: 1, borderColor: "#737373", height: 20, alignSelf: "center", justifyContent: "center", },
textInput:{ alignSelf: "center", fontSize: 15, paddingLeft: "4%", color: "#000000", fontFamily: Fonts.ProximaNovaLight, width: "85%" },
textInputIcoon:{ tintColor: "#8F8B8B", alignSelf: "center", height: 15, width: 15, alignSelf: "center", marginLeft: "7%" },
checkBoxView:{ flexDirection: "row", justifyContent: "center", alignItems: "center", alignSelf: "center", },
checkBoxViewIcon:{ height: 30, width: 30, borderRadius: 5, tintColor: "#707070" },
checkBoxText:{ color: "#000000", fontFamily: Fonts.ProximaNovaLight, fontSize:  wp("3.5%") },
checkBoxText2:{ color: "#245FC7", fontFamily: Fonts.ProximaNovaLight, fontSize:  wp("3.5%") },
continuebtn:{ backgroundColor: "rgba(36, 95, 199, 1)", alignItems: "center", borderRadius: 20, height: 45, justifyContent: "center", marginVertical: 25 },
continuebtnText:{ color: "#ffffff", fontFamily: Fonts.ProximaNovaSemibold, fontSize: 15 },
detailbutton:{ flexDirection: "row", justifyContent: "center",marginBottom:10 , alignItems:"center", },
detailbuttonText1:{ color: "#000000", fontSize: wp("4.5%"), fontFamily: Fonts.ProximaNovaRegular,  },
sigininTextButton:{ color: "#245FC7", fontSize: wp("4.5%"), fontFamily: Fonts.ProximaNovaSemibold,  },
dropdownSubView:{justifyContent:"space-between", flexDirection:"row",alignItems:"center",width:"89%", paddingHorizontal:20},
textSpacilist:{fontSize:15,color: "#999", fontFamily: Fonts.ProximaNovaLight,},
dropdownIcon:{tintColor:"#000", height:25, width:25},
































})
export default BusinessSignup;