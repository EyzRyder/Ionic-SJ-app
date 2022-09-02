import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function Ajuda({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Confira o Domínio e a URL e Busque por Selos de Segurança
            </Text>
            <Image style={styles.image} source={require('../assets/img/Confira o Domínio e a URL e Busque por Selos de Segurança.png')} />
            <Text style={styles.text}>
                Um exemplo de um site nao seguro
                (um clone de face book)</Text>
            <Image style={styles.imageFB} source={require('../assets/img/faceboock clone (phishing ).png')} />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: '1.5em',
        color: '#371c00',
        fontWeight: 700,
        padding: '5px',
    },
    text: {
        textAlign: 'center',
        fontSize: '1em',
        color: '#371c00',
        fontWeight: 500,
        padding: '5px',
    },
    image: {
        height: '16em',
        width: '100%',
        padding: '3px',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexWrap: 'nowrap',
        flexDirection: 'column',
        alignContent: 'center',
    },
    imageFB: {
        height: '35em',
        width: '100%',
        padding: '3px',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexWrap: 'nowrap',
        flexDirection: 'column',
        alignContent: 'center',
    },
});
