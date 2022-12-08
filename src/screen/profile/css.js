import { widthPercentageToDP as wp, heightPercentageToDP as hp, listenOrientationChange } from 'react-native-responsive-screen';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    blue: {
        // height: 173,
        height: hp("19%"),
        width: wp("100%"),
        backgroundColor: "#0000FF",
        position: "relative",
        zIndex: 20

    },
    mainContainer:{ flex: 1,},
    backicon:{ tintColor: "#ffffff", height: hp("3"), width: wp("2.2%"), marginTop:hp("3%"), marginLeft:wp("5%") },
    detailsView:{ flexDirection: "row", justifyContent: "space-around", marginTop: hp("-9%"), position: "relative", zIndex: 90, width: wp("100%") },
    followresnumber:{ textAlign: "center", color: "#ffffff", fontSize: hp("2.8%"), fontWeight: "500", marginBottom: hp("0.5%") },
    follower:{ textAlign: "center", color: "#ffffff", fontSize: hp("1.8%"), fontWeight: "500" },
    datanumber:{ textAlign: "center", color: "#ffffff", fontSize: hp("2.8%"), fontWeight: "500", marginBottom: hp("0.5%") },
    datatext:{ textAlign: "center", color: "#ffffff", fontSize: hp("1.8%"), fontWeight: "500" },
    imageIcon:{ height: hp("20%"), width: wp("27%"), borderRadius: hp("20%"), },
    greenView:{ justifyContent: "space-between", paddingLeft: wp("2%") },
    greenCircle:{ height: hp("15%"), width: wp("30.48%"), borderRadius: hp("10%"), backgroundColor: "#32502E", alignSelf: "center", marginTop: hp("-17%"), },
    dazoText:{ color: "#737373", fontSize: hp("1.55"), fontWeight: "500", textAlign: "right", paddingRight: wp("2%"), marginTop: hp("-9%"), fontStyle: "normal" },
    dazoNumber: { color: "#000000", fontSize: hp("1.55"), fontWeight: "500", textAlign: "center", fontStyle: "normal" },
    accountholderName: { color: "#000000", fontSize: hp("2.9%"), fontWeight: "500", textAlign: "center", marginTop: "9%", fontStyle: "normal", marginVertical: hp("0.5%"), marginTop: hp("6%") },
    bannerImage: { height: hp("10%"), width: wp("96%"), alignSelf: "center", justifyContent: "center", marginVertical: hp("3%") },
    bannerText:{ fontSize: hp("2.9%"), fontWeight: "700", color: "#ffffff", textAlign: "center", fontStyle: "normal", },
    button:{ flexDirection: "row", width: wp("85%"), alignSelf: "center", marginVertical: hp("2%") },
    buttonText:{ position: "absolute", fontStyle: "normal", fontWeight: "400", fontSize: hp("2.6%"), textAlign: "center", color: "#000000", paddingLeft: wp("10%") },
    buttonIcon:{ height: hp("3%"), width: wp("5.5%") },
});
export default styles;