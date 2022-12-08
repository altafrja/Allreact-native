import { StyleSheet } from "react-native";
import Fonts from '../../common/Fonts';


const styles = StyleSheet.create({
    notificationHeaserView: { width: "92%", alignSelf: "center", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: 20 },
    headerbgImage: { width: "100%", height: 183, },
    headerIconMenue: { height: 16, width: 30 },
    profileView: { justifyContent: "flex-end", flexDirection: "row", width: "30%" },
    notificationbutton: { height: 43, width: 43, backgroundColor: "#EEF2FB", borderRadius: 100, alignSelf: "center" },
    notificationIcon: { height: 43, width: 43 },
    profileButton: { height: 54, width: 54, borderRadius: 100 },
    searchView: { width: "92%", justifyContent: "center", backgroundColor: "#245FC7", flexDirection: "row", justifyContent: "space-between", borderRadius: 10, height: 50, alignItems: "center", alignSelf: "center", paddingHorizontal: 15, },
    textInputStyles:{color: "#ffffff", fontSize: 14 ,fontFamily:Fonts.ProximaNovaLight},
    searchText: { color: "#ffffff", fontSize: 14 ,fontFamily:Fonts.ProximaNovaLight},
    searchImage: { height: 24, width: 24, },
    categouryView: { flexDirection: "row", width: "92%", alignSelf: "center", justifyContent: "space-between", alignItems: "center", marginTop: 7 },
    categouryViewText: { color: "#000000", fontSize: 22, ffontFamily:Fonts.ProximaNovaBold},
    categouryViewButtonText: { color: "#245FC7", fontSize: 15, fontFamily:Fonts.ProximaNovaMedium },
    bravoCategoury: { flexDirection: "row", width: "92%", alignSelf: "center", justifyContent: "space-between", alignItems: "center" },
    bravoCategouryText: { color: "#000000", fontSize: 22, ffontFamily:Fonts.ProximaNovaBold },
    bravoCategouryButtonText: { color: "#245FC7", fontSize: 15, fontFamily:Fonts.ProximaNovaMedium },
    featuredView: { flexDirection: "row", width: "92%", alignSelf: "center", justifyContent: "space-between", alignItems: "center" },
    featuredViewText: { color: "#000000", fontSize: 22, ffontFamily:Fonts.ProximaNovaBold },
    featuredViewButtonText: { color: "#245FC7", fontSize: 15 ,fontFamily:Fonts.ProximaNovaMedium},
    categoFlatelistView: { paddingHorizontal: 15, height: 45, backgroundColor: "#245FC7", justifyContent: "center", alignItems: "center", borderRadius: 10, marginRight: 20 },
    categoFlatelistViewText: { color: "#ffffff", fontSize: 12,fontFamily:Fonts.ProximaNovaRegular },
    cardContainer: { height: 276, width: 177, backgroundColor: "#245FC714", justifyContent: "center", borderRadius: 10, marginRight: 25 },
    cardIconView: { height: 100, width: 100, backgroundColor: "#ffffff", borderRadius: 100, justifyContent: "center", alignItems: "center", alignSelf: "center" },
    cardIcon: { height: 78, width: 78, borderRadius: 100 },
    shareCardView: { flexDirection: "row", width: "65%", justifyContent: "space-around", alignSelf: "center", marginVertical: 10 },
    shareButton: { alignItems: "center" },
    shareButtonImage: { height: 20, width: 20 },
    shareButtonText: { color: "#929397", fontSize: 7, fontFamily:Fonts.ProximaNovaRegular },
    cardHospitalView: { width: "80%", alignSelf: "center" },
    hospitalName: { color: "#000000", fontSize: 15, fontFamily:Fonts.ProximaNovaSemibold, marginVertical: 5 },
    cardHospitalViewText: { color: "#858585", fontSize: 8, fontFamily:Fonts.ProximaNovaRegular },
    cardHospitalViewButton: { flexDirection: "row", justifyContent: "space-between", marginTop: 10 },
    cardPhotoButton: { justifyContent: "center", alignItems: "center", flexDirection: "row", width: 68, height: 20, backgroundColor: "#245FC7", borderRadius: 10 },
    cardPhotoImage: { height: 11.5, width: 13 },
    cardPhotoVideoText: { color: "#929397", fontSize: 7, fontFamily:Fonts.ProximaNovaRegular, paddingLeft: 5 },
    cardVideoIcon: { height: 11.5, width: 13 },
    doctorCardContainer: { height: 276, width: 177, backgroundColor: "#D7EFFB", justifyContent: "center", marginRight: 25, borderRadius: 10, },
    doctorCardIconVIew: { height: 100, width: 100, backgroundColor: "#ffffff", borderRadius: 100, justifyContent: "center", alignItems: "center", alignSelf: "center" },
    doctorCardIcon: { height: 100, width: 100, borderRadius: 100 },
    DoctorCardShareView: { flexDirection: "row", width: "75%", justifyContent: "space-around", alignSelf: "center", marginVertical: 10 },
    DoctorCardShareButton: { alignItems: "center" },
    DoctorCardShareButtonIcon: { height: 20, width: 20 },
    DoctorCardShareButtonText: { color: "#929397", fontSize: 7, fontFamily:Fonts.ProximaNovaRegular },
    doctorDetails: { width: "85%", alignSelf: "center" },
    doctorname: { color: "#000000", fontSize: 15, ffontFamily:Fonts.ProximaNovaBold, marginVertical: 5 },
    doctorProfile: { color: "#245FC7", fontSize: 8, fontFamily:Fonts.ProximaNovaRegular },
    ratingViewRed: { width: "85%", flexDirection: "row", marginVertical: 10 },
    ratingViewmain: { height: 15, width: 50, backgroundColor: "#ffffff", flexDirection: "row", justifyContent: "space-around", alignItems: "center", borderRadius: 10, paddingHorizontal: 5 },
    star: { height: 9, width: 9 },
    ratingText: { color: "#000000", fontSize: 10, fontFamily:Fonts.ProximaNovaMedium, marginLeft: 10 },
    clinicianReview: { color: "#5D5D5D", fontSize: 10,fontFamily:Fonts.ProximaNovaRegular },
    yellowstarview: { width: "85%",flexDirection: "row", },









// moduleComment

    button: { height: 40, width: 168, justifyContent: "center", alignItems: "center", borderRadius: 20 },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        // opacity:9
    },
    centeredView1: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // marginTop: 22,
        backgroundColor: "#00000090",
        opacity: 5
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#000000",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "#000000",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },


    centeredView2:{
        width: "92%", height: 255, borderRadius: 15, alignSelf: "center", backgroundColor: "#fff", shadowColor: "#000", 
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.05,
        shadowRadius: 1,
        elevation: 1
    },
    headerView:{ height: 50, backgroundColor: "#245FC7", borderTopLeftRadius: 15, borderTopRightRadius: 15, flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 15 },
    headerText:{ color: "#fff", fontSize: 15 },
    headerIcon:{ height: 30, width: 30 },
    textInput:{ borderWidth: 1, borderColor: "#929397", marginHorizontal: 15, borderRadius: 10, marginTop: 40, paddingLeft: 15 },
    messageButton:{ width: 149, height: 45, flexDirection: "row", borderRadius: 10, backgroundColor: "#245FC7", justifyContent: "center", alignItems: "center", alignSelf: "flex-end", marginRight: 15, marginTop: 20 },
    messageButtonText:{ color: "#fff", fontSize: 15 },

    buttonView:{ justifyContent: "space-around", flexDirection: "row", alignItems: "center", marginTop: 65, paddingHorizontal: 10 },
    buttonFirst:{ width: 149, height: 45, flexDirection: "row", borderRadius: 10, backgroundColor: "#245FC7", justifyContent: "center", alignItems: "center" },
    buttonTwo:{ width: 149, height: 45, flexDirection: "row", borderRadius: 10, backgroundColor: "#245FC7", justifyContent: "center", alignItems: "center" },
    buttonTwoText:{ color: "#fff", fontSize: 15, marginLeft: 5, },
    
    
    
// reviewModal

centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    // opacity:9
},
centeredView1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 22,
    backgroundColor: "#00000090",
    opacity: 5
},
modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
},
centeredView2: {
    width: "92%", height: 255, borderRadius: 15, alignSelf: "center", backgroundColor: "#fff", shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1
    },
    shadowOpacity: 0.05,
    shadowRadius: 1,
    elevation: 1
},



// shareModule

button: { height: 40, width: 168, justifyContent: "center", alignItems: "center", borderRadius: 20 },

centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    // opacity:9
},
centeredView1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 22,
    backgroundColor: "#00000090",
    opacity: 5
},
centeredView2: {
    width: "92%", height: 255, borderRadius: 15, alignSelf: "center", backgroundColor: "#fff", shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1
    },
    shadowOpacity: 0.05,
    shadowRadius: 1,
    elevation: 1
},

button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
},
buttonOpen: {
    backgroundColor: "#F194FF",
},
buttonClose: {
    backgroundColor: "#2196F3",
},
textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
},
modalText: {
    marginBottom: 15,
    textAlign: "center"
},
headerView: { height: 50, backgroundColor: "#245FC7", borderTopLeftRadius: 15, borderTopRightRadius: 15, flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 15 },
headerText: { color: "#fff", fontSize: 15 },
iconImage: { height: 30, width: 30 },
textline: { color: "#000", fontSize: 18, paddingHorizontal: 20, marginVertical: 15 },
shareIconView: { flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20, marginVertical: 5 },
shareIcon: { height: 44, width: 44 },
shareLinkView: { borderWidth: 1, borderColor: "#CECECE", flexDirection: "row", alignItems: "center", height: 45, marginHorizontal: 20, borderRadius: 10, justifyContent: "space-between", marginVertical: 15, paddingHorizontal: 5 },
SharelinkSubView: { flexDirection: "row", alignItems: "center", paddingLeft: 5 },
sharelinkIcon: { height: 12, width: 12 },
sharelinkIconText:{ fontSize: 14, color: "#000", paddingLeft: 10 },
copyButton:{ width: 90, height: 35, flexDirection: "row", borderRadius: 10, backgroundColor: "#245FC7", justifyContent: "center", alignItems: "center", },
copyText:{ color: "#fff", fontSize: 15 },



})
 

export default styles;