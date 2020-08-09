import React, {useState} from 'react'
import { View, ScrollView } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import PageHeader from '../../components/PageHeader'
import styles from './styles'
import TeacherItem, { Teacher } from '../../components/TeacherItem'
import { useFocusEffect } from '@react-navigation/native'

function Favorites() {


  const [favorites, setFavorites] = useState([])


  function loadFavorits() {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedTeachers = JSON.parse(response)
        setFavorites(favoritedTeachers)
      }
    })
  }

  useFocusEffect (() => {
    loadFavorits()
  })

  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffys favoritos"/>
      <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 16,
        paddingBottom: 16
      }}
      style={styles.teacherList}
      >
      {favorites.map((teacher: Teacher) => {
          return (
            <TeacherItem
              key={teacher.id}
              teacher={teacher}
              favorited
            />
          )
      })}
      </ScrollView>
    </View>
  )
}

export default Favorites