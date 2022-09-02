import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Home({ navigation }) {
    
    const pressHandler = () => {
        navigation.navigate('Nav');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>MILABAG - Segurança Digital</Text>
            <Text style={styles.subtitle}> Verificação de segurança</Text>
            <Pressable style={styles.btn} onPress={pressHandler}>
                <Text style={styles.btnText}>Explorar</Text>
            </Pressable>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: '2em',
        color: '#371c00',
        fontWeight: 700,
        padding: '5px',
    },
    subtitle: {
        justifyContent: 'center',
        alignContent: 'center',
        alignText: 'center',
        fontSize: '1em',
        fontWeight: 500,
        color: '#d3145c',
        paddingLeft: '5px',
        paddingRight: '5px',
    },
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d3145c',
        borderRadius: 10,
        paddingLeft: '50px',
        paddingRight: '50px',
        paddingTop: '5px',
        paddingBottom: '5px',
        marginTop: '35px',
    },
    btnText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});
