import React, { useState } from 'react'
import { Text, View, ScrollView, TouchableOpacity } from 'react-native'
import { Transition, Transitioning } from 'react-native-reanimated'

import AccordianData from '../components/AccordianData';

import styles from '../styles/tersmOfUseStyleSheet';

const transition = (
    <Transition.Together>
        <Transition.In type="fade" durationMs={200} />
            <Transition.Change />
        <Transition.Out type="fade" durationMs={200} />
    </Transition.Together>
)

const TermOfUSeScreen = () => {
    const [currentIndex, setCurrentIndex] = useState(null);
    const ref = React.useRef();
    return (
        <Transitioning.View 
            transition={transition}
            ref={ref}
            style={styles.container}
        >
            <ScrollView style={{flex: 1}}>
                {AccordianData.map(({bg, color, category, subCategories}, index) => {
                    return (
                        <TouchableOpacity 
                            key={category} 
                            onPress={() => {
                                ref.current.animateNextTransition();
                               setCurrentIndex(index === currentIndex ? null : index); 
                            }}
                            style={styles.cardContainer} 
                        >
                            <View style={[styles.card, { backgroundColor: bg }]}>
                                <Text style={[styles.heading, { color }]}>{category}</Text>
                                {index === currentIndex &&  (
                                    <View style={styles.subCategoriesList}>
                                        {subCategories.map(subCategory => (
                                            <Text key={subCategory} style={[styles.body, { color }]}>{subCategory}</Text>
                                        ))}
                                    </View>
                                )}
                            </View>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
         </Transitioning.View>
        
    );
}

export default TermOfUSeScreen;