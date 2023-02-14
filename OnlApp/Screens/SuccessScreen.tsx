import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    Dimensions,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';
import { Button, TextInput, RadioButton } from 'react-native-paper';
function SuccessScreen(props) {

    const width = Dimensions.get('window').width;
    const { navigation, routes } = props
    const { navigate, goBack } = navigation

    const pressButton = () => {
        navigate('UITabCopy')
    }

    const route = useRoute()
    return (
        <ImageBackground
            source={require('../assets/bgSuccess.png')}
            style={styles.background}
        >
            <View>
                <Image
                    source={require('../assets/success.png')}
                    style={styles.image}
                />
            </View>
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.text1}>
                    THANH TOÁN THÀNH CÔNG!
                </Text>
                <Text style={styles.text2}>
                    Cảm ơn bạn đã mua sản phẩm tại SHOP.
                </Text>
                <Text style={styles.text3}>
                    Chúc bạn có trải nghiệm tốt với sản phẩm của chúng tôi
                </Text>
            </View>
            <Button
            onPress={pressButton}>
                Return to home
            </Button>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        marginTop: 88,
    },
    image: {
        alignSelf: 'center',
        marginTop: 20,
    },
    text1:
    {
        textAlign: 'center',
        color: 'black',
        fontSize: 18,
        marginTop: 16,
    },
    text2: {
        textAlign: 'center',
        color: 'black',
        fontSize: 16,
        marginTop: 16,
        marginBottom: 8,
    },
    text3: {
        textAlign: 'center',
        color: 'black',
        fontSize: 13,
    },
    button: {
        alignSelf: 'center',
    }
})
export default SuccessScreen;
