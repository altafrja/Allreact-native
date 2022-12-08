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
    FlatList, Alert, Modal
} from 'react-native';
import { Header } from '../../../common/Header';
import Imagepath from '../../../common/imagepath';
import Clinic from './clinic';
import Patient from './patient';
import String from '../../../common/String';
// import styles from './styles';
import Fonts from '../../../common/Fonts';
const Rate = ({ navigation }) => {
    const [mark, setMark] = useState();
    const [clinice, setclinic] = useState();
    const [patient, setpatient] = useState();
    const [modalVisible, setModalVisible] = useState(false);
    const chexkBox = () => {
        setMark(!mark)
    }
    const ClinicianPage = () => {
        setclinic(true)
        setpatient(false)

    }

    const PasientPage = () => {
        setclinic(false)
        setpatient(true)

    }
    useEffect(() => {
        PasientPage();
    }, []);


    return (
        <ImageBackground source={Imagepath.background} style={{ flex: 1 }}>
            <View style={{ height: 115, width: "100%", backgroundColor: "#245FC7", }}>

                <Header title={String.RateAndReview} isback={"bottomtab"} />
                <View style={{ flexDirection: "row", width: "85%", justifyContent: "space-between", alignItems: "center", alignSelf: "center", fontFamily: Fonts.ProximaNovaSemibold }}>
                    <TouchableOpacity onPress={() => { ClinicianPage() }} style={[{ backgroundColor: clinice ? "#19428A" : null }, styles.button]} >
                        <Text style={{ color: "#ffffff", fontSize: 13 }}>Clinician Review</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { PasientPage() }} style={[{ backgroundColor: patient ? "#19428A" : null, fontFamily: Fonts.ProximaNovaSemibold }, styles.button]} >
                        <Text style={{ color: "#ffffff", fontSize: 13 }}>Pasient Review</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {clinice &&
                <Clinic />
            }
            {patient &&
                <Patient />
            }


        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    button: { height: 40, width: 168, justifyContent: "center", alignItems: "center", borderRadius: 20 },




})

export default Rate;