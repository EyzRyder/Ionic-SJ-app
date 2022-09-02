import { StatusBar } from 'expo-status-bar';
import { Linking, StyleSheet, Text, View } from 'react-native';

export default function Denuncia() {
    return (
        <View style={styles.container}>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: '5px',
        backgroundColor: '#fff',
    },
    title: {
        textAlign: 'center',
        fontSize: '1.5em',
        color: '#371c00',
        fontWeight: 700,
        padding: '5px',
    },
});
