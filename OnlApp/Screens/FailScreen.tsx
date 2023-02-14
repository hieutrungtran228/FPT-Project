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
function FailScreen(props) {

    const width = Dimensions.get('window').width;
    const { navigation, routes } = props
    const { navigate, goBack } = navigation

    const route = useRoute()
    return (
        <ImageBackground
            source={require('../assets/bgFail.png')}
            style={styles.background}>
            <View>
                <Image source={require('../assets/fail.png')} style={styles.image} />
            </View>
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.text1}>THANH TOÁN KHÔNG THÀNH CÔNG!</Text>
                <Text style={styles.text2}>
                    {`Thanh toán dịch vụ thất bại (Mã lỗi)`}
                </Text>
                <Text style={[styles.text2, { marginVertical: 5 }]}>
                    {`Mã giao dịch: `}
                </Text>
                <Text style={[styles.text2, { marginVertical: 5 }]}>
                    Chúng tôi rất tiếc vì giao dịch chưa hoàn thành.
                </Text>
                <Text style={styles.text2}>
                    Vui lòng thử lại hoặc liên hệ với chúng tôi
                </Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.text2}>theo số hotline:</Text>
                    <Text style={[styles.text2, { color: 'red', marginLeft: 5 }]}>
                        19001001
                    </Text>
                </View>
            </View>

            {/* <TouchableOpacity 
            style={styles.button} 
            //onPress={handleGoBack}
            >
                <Image source={require('./assets/button.png')} />
            </TouchableOpacity> */}
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
      },
      image: {
        alignSelf: 'center',
        marginTop: 25,
      },
      text1:
      {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        marginTop: 16,
      },
      text2: {
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
      },
      button: {
        alignSelf: 'center',
        marginTop: 15,
        marginBottom: 30
      }
})
export default FailScreen;
