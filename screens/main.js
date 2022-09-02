import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';


export default function Main() {
    return (
        <View style={styles.container}>
            {/* <WebView
                scalesPageToFit={true}
                bounces={false}
                javaScriptEnabled
                style={{ height: 500, width: 300 }}
                source={{
                    html: `
                  <!DOCTYPE html>
                  <html>
                    <head></head> // <--add header styles if needed
                    <body>
                      <div id="baseDiv"><iframe src="https://mdn-samples.mozilla.org/snippets/html/iframe-simple-contents.html"
            title="iframe Example 1" width="400" height="300">
</iframe></div> //<--- add your iframe here
                    </body>
                  </html>
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
        alignItems: 'center',
        justifyContent: 'center',
    },
});
