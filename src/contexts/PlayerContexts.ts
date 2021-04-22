import { createContext } from 'react';

type Episode = {
    title: string;
    members: string;
    thumbnail: string;
    duration: number;
    url: string;
}

type PlayerContextData = {
    episodeList: Episode[];
    currentEpisodeIndex: number; //em qual posicao da lista acima o ep esta.
    isPlaying: boolean;
    play: (episode: Episode) => void;
    togglePlay: () => void;
    setPlayingState: (state: boolean) => void;
}
//forcamos essa atribuicao de tipo com "as" para ficar mais simples
//e ele pegar todos os dados da forma que escrevemos acima.
export const PlayerContext = createContext({} as PlayerContextData);