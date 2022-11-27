// JSX - JavaScript + XML

// 2 principais conceitos de React Componentes / Propriedades


import { useState, useEffect, FormEvent } from 'react';
import {Check, GameController, MagnifyingGlassPlus} from 'phosphor-react'
import './styles/main.css';
import * as Dialog from '@radix-ui/react-dialog';
import * as Checkbox from '@radix-ui/react-checkbox';
import * as Select from '@radix-ui/react-select';
import * as ToggleGroup from '@radix-ui/react-toggle-group';

import logoImg from './assets/logo.svg';
import logoImg2 from './assets/logoImg2.svg';
import { CreateAdBanner } from './Components/CreateAdBanner';
import {CreateAdModal} from './Components/CreateAdModal';
import { GameBanner } from './Components/GameBanner';
import { Input } from './Components/Form/input';
import axios from "axios";

interface Game{
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

function App() {
  //return <h1>Hello world</h1>
  const [games, setGames] = useState <Game[]>([]); 
  // const [weekDays, setWeekDays] = useState<string[]>([]);
  // const [useVoiceChannel, setUseVoiceChannel] = useState(false);

  // function handLeButtonClick(){
  //   setHasUserClickedOnButton(!hasUserClickedOnButton);
  // }

  useEffect(() => {
    axios('http://localhost:3333/games').then(response => {
      setGames(response.data);
    });
  }, []);

  // function handleCreateAd(event: FormEvent){ 
  //   event.preventDefault()

  //   const formData = new FormData(event.target as HTMLFormElement);
  //   const data = Object.fromEntries(formData)

  //   console.log(data);
  //   console.log(useVoiceChannel)


  // }


  return(
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />

      <h1 className="text-6xl text-white font-black mt-20 ">Seu <span className="text-transparent bg-livreto-gradient bg-clip-text">parceiro</span> de leitura esta aqui.</h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map(game => {
          return (
            <GameBanner key={game.id} bannerUrl={game.bannerUrl} title={game.title} adsCount={game._count.ads}/>
          )
        })}
      </div>

      <Dialog.Root>
        <CreateAdBanner/>
          <CreateAdModal/>
      </Dialog.Root>
      
      

    </div>
  )
}
export default App

