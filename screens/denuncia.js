import { StatusBar } from 'expo-status-bar';
import { Linking, StyleSheet, Text, View } from 'react-native';

export default function Denuncia({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Caso tenha sofrido um golpe
            </Text>
            <View style={styles.list}>
                <Text style={styles.item}>
                    <Text style={{ fontWeight: 700 }}>1.</Text> Registre imediatamente a reclamação no site
                </Text>
                <Text style={styles.item}>
                    <Text style={{ fontWeight: 700 }}>2.</Text> Recupere os registros e protocolos para entrar em contato com a empresa
                </Text>
                <Text style={styles.item}>
                    <Text style={{ fontWeight: 700 }}>3.</Text> Registre as reclamações em sites de consumidores <Text style={{ color: 'blue' }}
                        onPress={() => Linking.openURL('http://www.reclameaqui.com.br/')}>
                        (Ex: http://www.reclameaqui.com.br/)
                    </Text>
                </Text>
                <Text style={styles.item}>
                    <Text style={{ fontWeight: 700 }}>4.</Text> Registre a reclamação no site do Procon / Ministério da Justiça <Text style={{ color: 'blue' }}
                        onPress={() => Linking.openURL('http://consumidor.gov.br/')}>
                        (http://consumidor.gov.br/)
                    </Text>
                </Text>
                <Text style={styles.item}>
                    <Text style={{ fontWeight: 700 }}>5.</Text> Mantenha seu antivírus sempre atualizado também para bloquear programas maliciosos. Usando Software Livre você pode diminuir sua vulnerabilidade a golpes e ataques;
                </Text>
            </View>
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
        fontSize: '1.7em',
        color: '#371c00',
        fontWeight: 700,
        padding: '2px',
    },
    list: {
        margin: '0.5em',
    },
    item: {
        fontSize: '1.5em',
        margin: '0.5em',
    }
});
