import React from 'react'
import { View, ScrollView } from 'react-native'
import PageHeader from '../../components/PageHeader'
import styles from './styles'
import TeacherItem from '../../components/TeacherItem'


function Favorites() {
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
      <TeacherItem />
      <TeacherItem />
      <TeacherItem />
      </ScrollView>
    </View>
  )
}

export default Favorites