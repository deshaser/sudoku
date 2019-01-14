import React from 'react'
import PropTypes from 'prop-types'
import { ScrollView, View, Image, Text } from 'react-native'

import styles from "./Menu.styles"

const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png'

export default function Menu({ onItemSelected }) {
  return (
    <ScrollView scrollsToTop={false} style={styles.menu}>
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={{ uri }}
        />
        <Text style={styles.name}>Your name</Text>
      </View>
      <Text
        // onPress={() => onItemSelected('About')}
        style={styles.item}
      >
        About
      </Text>
      <Text
        // onPress={() => onItemSelected('Contacts')}
        style={styles.item}
      >
        Contacts
      </Text>
    </ScrollView>
  );
}

Menu.propTypes = {
  onItemSelected: PropTypes.func,
}