import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

import { mapStyle } from '../theme/mapStyle';
import styles from '../styles/mapStyleSheet';

export default class MapScreen extends Component {
    render() {
        return (
            <View>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.mapStyles}
                    customMapStyle={mapStyle}
                >

                </MapView>
            </View>    
        );
    }
}
