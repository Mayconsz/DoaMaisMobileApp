import { Image, Pressable, TouchableOpacity } from 'react-native';
import { Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CardDoacao({ doacao }) {
    const navigation = useNavigation();
    function navegarDoacao() {
        navigation.navigate('Contato', { doacao });
    }

    return (
        <Pressable style={styles.container} onPress={navegarDoacao}>


            <View style={styles.imageContainer} >
                <Image style={styles.image} source={{
                    uri: doacao?.imagensPedido[0]?.link ?? "",
                }}></Image>
            </View>
            <View style={styles.textContainer} >
                <View>
                    <Text style={styles.title}>{doacao?.titulo}</Text>

                    {doacao?.ong?.nome &&

                        <View style={styles.nameContainer}>
                            <Text style={styles.ong}>{doacao?.ong?.nome}</Text>
                        </View>
                    }
                </View>

            </View>



        </Pressable >
    )
}

const styles = StyleSheet.create({
    container: {
        height: 130,
        borderRadius: 10,
        backgroundColor: '#fff',
        padding: 16,
        marginLeft: 10,
        marginRight: 10,
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15
    },
    imageContainer: {
        display: 'flex',
        alignItems: 'center',
        width: "40%"
    },
    image: {
        height: 100,
        width: 110,
        borderRadius: 10,
    },
    textContainer: {
        width: "60%",
        padding: 5,
        flex: 1,
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 18,
        fontWeight: '600'
    },
    ong: {
        fontSize: 14,
        fontWeight: '500'
    },
    nameContainer: {
        flexDirection: 'row-reverse'
    },
});