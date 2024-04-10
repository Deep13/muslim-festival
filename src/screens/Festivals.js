import React from 'react';
import {
    View,
    StyleSheet,
    StatusBar,
    Dimensions,
    Text,
    FlatList,
    Image,
    ScrollView,
    TouchableOpacity,
    ImageBackground
} from 'react-native';
import image_base from '../festival_icon.json';
import { banner_key4, day_title } from '../Constants';
import {
    TestIds,
    BannerAd,
    BannerAdSize,
} from 'react-native-google-mobile-ads';
const { width, height } = Dimensions.get('window');

import s from '../styles/main.style';
const BadUnitId = banner_key4;

const Festivals = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <ImageBackground style={{ flex: 1 }} source={require("../assets/bg.jpeg")} >
                <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.8)" }}>

                    <FlatList
                        data={image_base.wishes}
                        numColumns={2}
                        ListHeaderComponent={() => {
                            return (
                                <View>
                                    <BannerAd unitId={BadUnitId} size={BannerAdSize.FULL_BANNER} />
                                    <Text style={{ color: "white", marginTop: 20, fontSize: width / 10, marginHorizontal: 20, textAlign: "center", marginBottom: 20, fontWeight: "bold" }}>Muslim Festival Mubarak</Text>
                                </View>
                            );
                        }}
                        renderItem={(itemData, i) => {
                            //console.log('eerer',itemData.item.id%2)
                            return (
                                <View style={{ flex: 0.5, margin: 20, }}>
                                    <TouchableOpacity
                                        style={{ flex: 1, height: width / 2 - 40, }}
                                        activeOpacity={0.8}
                                        onPress={() => {
                                            //onShare(itemData.item.data_url)
                                            navigation.navigate('Home', {
                                                festival: itemData.item.name,
                                            });
                                        }}>
                                        <Image
                                            style={{ height: "auto", flex: 1, borderRadius: 10 }}
                                            source={{ uri: itemData.item.data_url }}
                                            onLoad={() => console.log('Image loaded')}
                                        />

                                    </TouchableOpacity>
                                    <Text style={{ color: "white", textAlign: "center", marginTop: 10, fontSize: width / 20 }}>{day_title[itemData.item.name]}</Text>
                                </View>
                            );
                        }}
                        keyExtractor={item => item.id}
                    />
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 6,
    },
    title: {
        fontSize: 32,
    },
});

export default Festivals;
