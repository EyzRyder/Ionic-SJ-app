import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Ajuda() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Confira o Domínio e a URL e Busque por Selos de Segurança
            </Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
