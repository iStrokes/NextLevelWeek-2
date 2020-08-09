import React, { useState } from 'react'
import { View, ScrollView, Text, TextInput } from 'react-native'
import PageHeader from '../../components/PageHeader'
import { BorderlessButton, RectButton } from 'react-native-gesture-handler'
import TeacherItem from '../../components/TeacherItem'
import {Feather} from '@expo/vector-icons'
import styles from './styles'



function TeacherList() {

  const [isFiltersVisible, setFiltersVisible] = useState(false)

  function handleToggleFiltersVisible() {
    setFiltersVisible(!isFiltersVisible)
  }

  return (
    <View style={styles.container}>
      <PageHeader title="Proffys disponíveis" headerRight={(
        <BorderlessButton onPress={handleToggleFiltersVisible}>
          <Feather name="filter" size={20} color="#FFF" />
        </BorderlessButton>
      )}
      >
        { isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput
            style={styles.input}
            placeholder='Qual a matéria'
            placeholderTextColor='#C1BCCC'
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput
                  style={styles.input}
                  placeholder='Qual o dia'
                  placeholderTextColor='#C1BCCC'
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  style={styles.input}
                  placeholder='Qual o horário'
                  placeholderTextColor='#C1BCCC'
                />
              </View>
            </View>
            <RectButton style={styles.submitButton}>
              <Text style={styles.submitButtonText}>
                Filtrar
              </Text>
            </RectButton>
          </View>
        )}
      
      </PageHeader>
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

export default TeacherList