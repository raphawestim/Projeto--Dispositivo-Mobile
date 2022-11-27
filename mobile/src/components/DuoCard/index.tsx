
import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { THEME } from '../../theme';
import { DuoInfo } from '../DuoInfo';

import {GameController, Book} from 'phosphor-react-native'
import { styles,  } from './styles';

export interface DuoCardProps {
  id: string,
  hourEnd: string,
  hourStart: string,
  name: string,
  useVoiceChannel: boolean,
  weekDays: string[],
  yearsPlaying: number,
}

interface Props {
  data: DuoCardProps;
  onConnect: () => void;
}

export function DuoCard({data, onConnect}: Props ) {
  return (
    <View style={styles.container}>
      <DuoInfo label='Nome' value={data.name}/>
      <DuoInfo label='Tempo de Leitura' value={`${data.yearsPlaying} anos`}/>
      <DuoInfo label='Disponibilidade' value={`${data.weekDays.length} dias \u2022 ${data.hourStart} - ${data.hourEnd}`}/>
      <DuoInfo label='Chamada de áudio?' value={data.useVoiceChannel? "sim": "nao" } colorValue ={data.useVoiceChannel? THEME.COLORS.SUCCESS: THEME.COLORS.ALERT}/>
      
      <TouchableOpacity style={styles.button} onPress={onConnect}>
        <Book color={THEME.COLORS.TEXT} size={20}/>
        <Text style={styles.buttonTitle}>
          Conectar!
        </Text>
      </TouchableOpacity>
     
    </View>
  );
}