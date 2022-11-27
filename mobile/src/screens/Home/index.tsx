import {useEffect, useState} from 'react';
import React from 'react';
import { View, Image, FlatList } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native'

import logoImg from '../../assets/logo-nlw-esports.png';
import logoLivreto from '../../assets/logoLivreto.png';
import { GameCard, GameCardProps } from '../../components/GameCard';
import { Heading } from '../../components/Heading';
import {GAMES} from '../../utils/games';
import { styles } from './styles';
import { Background } from '../../components/Background';

// funcoes para funcionar!
export function Home() {

  const [games, setGames] = useState<GameCardProps[]>([])
  const navigation = useNavigation();

  function handOpenGame({id, title, bannerUrl}: GameCardProps){
    navigation.navigate('game', {id, title, bannerUrl});
  }

  useEffect(() => {
    fetch('http://192.168.0.85:3333/games')
    .then(response => response.json())
    .then(data => setGames(data));
  }, [])
  
  return (
    <Background>
        <SafeAreaView style={styles.container}>
          <Image source={logoLivreto} style={styles.logo} />
          <Heading title="Encontre seu grupo!" subtitle="Selecione o livro que deseja..."/>
          
          <FlatList data={games} keyExtractor={item => item.id} renderItem = {({item}) => (

              <GameCard data={item} onPress={() => handOpenGame(item)}/>
              
          )}
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle = {styles.contentList}
          />
        </SafeAreaView>
    </Background>
    
  );
}