import * as React from "react";
import { View, Platform } from "react-native";
import { WebView } from "react-native-webview";

export default class frame extends React.Component {
    render() {
        return Platform.OS === "web" ? (
            <div>
                <iframe src="https://www.urlvoid.com/" height={'70%'} width={'100%'} />
                <br />
                <br />
                <iframe src="https://who.is/whois/" height={'80%'} width={'100%'} />
            </div>
            
        ) : (
            <View style={{ flex: 1 }}>
                <WebView
                        source={{ uri: "https://www.urlvoid.com/" }}
                    style={{ marginTop: 22, flex: 1 }}
                />
            </View>
        )
    }
}