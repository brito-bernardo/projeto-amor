import React from 'react';
import { Link } from 'react-router-dom'

export default function Story() {
  return (
    <div className="flex justify-center items-center h-screen bg-pink-300">
      <div className="container border border-2 border-pink-500 px-4 py-8 bg-white rounded-lg">
        <h1 className="text-3xl md:text-5xl text-pink-700 font-bold text-center">
          Nossa história de amor
        </h1>
        <p className="text-lg md:text-2xl text-gray-700 mt-4">
          Em uma universidade qualquer, em um curso qualquer, duas pessoas se encontram pela primeira vez, a partir disso se inicia a minha história de amor. Nas matérias de Análise de Sinais e Eletrcidade Aplicada( o terror dela ) foram as benditas que nos uniram, tudo começou comigo (engracadinho), pedindo para tirar foto com o celular dela e fazendo graça com o professor lembro como se fosse hoje acredita? Depois disso fomos nos tornando mais e mais próximos, chegando ao ponto de ouvir coisas que o outro não queria ouvir , a partir disso eu pensei "rapaz eu to gostando dessa menina", ela sempre fala que eu era cego que não notava que ela gostava de mim, mas ela nunca dava a chance de eu perceber algo, passando o tempo começamos a treinar algumas vezes juntos até que uma dessas vezes chamei ela para a praia e depois ela teve algumas atitudes que eu pensei que ela talvez quisesse também, deixando ela em casa, ela putassa porque não tentei algo, combinamos de sair logo em seguida para conhecer os amigos dela, ela me apresentando como namorado sendo que a gente nunca tinha ficado kkkkkk, chegamos muito cedo no encontro e ficamos sozinhos no estacionamento e foi ai que tudo começou.
        </p>
        <div className="flex flex-col items-center mt-4">
          <Link to="/memories">
            <button className="px-4 py-2 bg-pink-300 hover:bg-pink-700 text-black rounded-md">Clique aqui para conhecer mais</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
