import React from 'react'
import MapView from 'react-native-maps'
import { StyleSheet, Dimensions } from 'react-native'

const height = Dimensions.get('window').height

const Map = () => {
    return (
        <MapView
        style={styles.map}
        loadingEnabled={true}
        region={{
            latitude: 5.6037,
            longitude: 0.1870,
            latitudeDelta: 0.015,
            longitudeDelta: 0.121
        }}
        >
            <MapView.Marker
            cordinate={{
                latitude: 5.6037,
                longitude: 0.1870
            }}
            title={"Title 1"}
            description={"description 1"}
            />

            <MapView.Marker
            cordinate={{
                latitude: 5.6147,
                longitude: 0.1870
            }}
            title={"Title 2"}
            description={"description 2"}
            />
        </MapView>
    )
}
const styles = StyleSheet.create({
    map: {
        height
    }
})

export default Map