import React, { useEffect } from 'react';
import {
    View,
    Image,
    Text,
    ImageBackground,
    StyleSheet

} from 'react-native';
// import Svg {Use}, from 'react-native-svg';
// import index from "./index";
// import css ,{styles} from "./css"; back
import Imagepath from '../../common/imagepath';
import AsyncStorageHelper from '../../Lib/AsyncStorageHelper';
import Constants from '../../Lib/Constants';
import { handleNavigation } from '../../navigator/navigator';
import styles from './css';
export default  Splash =({navigation})=> {
    useEffect(() => {
        setTimeout(() => {
            AsyncStorageHelper.getData(Constants.GUEST_USER).then((GesstData) => {
             if(!GesstData){
                handleNavigation({ type: 'setRoot', page: 'welcome', navigation: navigation, });
             }
             else{
                AsyncStorageHelper.getData(Constants.USER_DATA).then((responseData) => {
               console.log('responseData=====>>>>>',responseData)
                if (responseData) {
                    AsyncStorageHelper.setData(Constants.USER_DATA, responseData.data)
                    AsyncStorageHelper.setData(Constants.TOKEN, responseData.token)
                    handleNavigation({ type: 'setRoot', page: 'welcome', navigation: navigation, });
                } else{
                    handleNavigation({ type: 'setRoot', page: 'welcome', navigation: navigation, });
                } 
            })
            }
        })
        }, 1000);
    }, []);
        return (

            <ImageBackground 
            source={Imagepath.background}
             resizeMode="cover" 
             style={styles.bg}>
                <Image
                 style={styles.logo}
                  resizeMode="cover" 
                  source={Imagepath.logo}
                  />
            </ImageBackground>
        );
    }


