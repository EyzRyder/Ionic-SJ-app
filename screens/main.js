import React from "react";
import { StatusBar } from 'expo-status-bar';
import { TextInput, StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';


export default function Main({ navigation }) {
    const [text, onChangeText] = React.useState(" ");

    return (
        <View style={styles.container}>
            <Text style={styles.urlText}>URL</Text>
            <TextInput 
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
            />
            {/* <WebView
                scalesPageToFit={false}
                bounces={false}
                javaScriptEnabled
                style={{ height: 500, width: 300 }}
                source={{
                    html: `
<iframe src="https://mdn-samples.mozilla.org/snippets/html/iframe-simple-contents.html" title="iframe Example 1" width="400" height="300">
</iframe>
            `,
                }}
                automaticallyAdjustContentInsets={false}
            /> */}
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    urlText: {
        paddingTop: '0.5em',
        paddingLeft: '0.5em',
        fontSize: "1.3em",
        fontWeight: 500,
    }
});
