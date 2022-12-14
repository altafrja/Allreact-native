import React, { useState } from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import Colors from '../../common/Colors';
import CoustomButton from '../../common/CommanBotton';
import { Header } from '../../common/Header';
import Imagepath from '../../common/imagepath';
import InputCommon from '../../common/InputCommon';
import String from '../../common/String';
import styles from './Brovo_Styles';
import { Headerback } from '../../common/Headerback';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Bravocard = (props) => {
    const [Photos, setPhotos] = useState(false);
    const [Videos, setVideos] = useState(false);
    const PhotosButton = () => {
        setPhotos(true)
        setVideos(false)

    }
    const videosButton = () => {
        setPhotos(false)
        setVideos(true)

    }
    return (
        <View style={{ flex: 1, }}>
            <Header title={String.Bravo_Head_title} isback="asjdfla" />

            <View style={styles.hightView}>
            </View>
            <View style={styles.mainView}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.ScrollViewStyle}
                >

                    <View style={styles.input_main}>

                        <View style={styles.mainContPhoto}>
                            <Text style={styles.TextStyles}>{String.Add_Photos_Videos}</Text>
                            <View style={styles.PhotosVideoView}>
                                <TouchableOpacity style={[{backgroundColor: Photos ? "#245FC7":"#FBECE3"},styles.PhotosView]} onPress={()=>PhotosButton()}>
                                    <Image style={[{tintColor:Photos?"#000":"#fff"},styles.Imageicon]} resizeMode='contain' source={Imagepath.Photos} />
                                    <Text style={[styles.PhotoText, { color:Photos? '#000':"#fff" }]}>{String.Photos}</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={[{backgroundColor: Videos ? "#245FC7":"#FBECE3"},styles.VideoView]} onPress={()=>videosButton()}>
                                    <Image style={[{tintColor:Photos?"#fff":"#000"},styles.Imageicon]} resizeMode='contain' source={Imagepath.Videoicon} />
                                    <Text style={[styles.PhotoText, {color:Videos? '#000':"#fff"  }]}>{String.Videos}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <InputCommon
                            title={String.title}
                            placeHolder={String.title}
                            placeholderTextColor={Colors.inputplaceholder}
                            returnKeyType={'next'}
                        />
                        <InputCommon
                            title={String.Department}
                            placeHolder={String.Department_input}
                            placeholderTextColor={Colors.inputplaceholder}
                            retNurnKeyType={'next'}
                        />
                        <InputCommon
                            title={String.Hospital}
                            placeHolder={String.Hospital}
                            placeholderTextColor={Colors.inputplaceholder}
                            returnKeyType={'next'}
                        />
                        <InputCommon
                            title={String.City}
                            placeHolder={String.City}
                            placeholderTextColor={Colors.inputplaceholder}
                            returnKeyType={'next'}
                        />
                        <InputCommon
                            title={String.State}
                            placeHolder={String.State}
                            placeholderTextColor={Colors.inputplaceholder}
                            returnKeyType={'next'}
                        />
                        <InputCommon
                            title={String.Comment}
                            placeHolder={String.Comment}
                            placeholderTextColor={Colors.inputplaceholder}
                            returnKeyType={'next'}
                        />

                        <InputCommon
                            isMassage
                            title={String.Message}
                            placeHolder={String.Message}
                            placeholderTextColor={Colors.inputplaceholder}
                            returnKeyType={'next'}
                        />
                        <View style={{ marginTop: 20, }}>
                            <CoustomButton
                                onPress={() => { }}
                                MargH={30}
                                backgroundColor={Colors.bottonColors}
                                borderColor={Colors.blue}
                                color={Colors.white}
                                title={String.Save}
                                fontSize={20}

                            />
                        </View>
                    </View>
                </ScrollView>
            </View>

        </View>
    );
}
export default Bravocard

