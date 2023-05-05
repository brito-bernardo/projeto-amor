import React from 'react';
import Natal from '../assets/natal.jpeg'
import Mundo from '../assets/terra.avif'

export default function Future() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col items-center justify-center bg-pink-300 border border-pink-500 p-4 rounded-lg">
          <img
            className="w-64 h-64 object-contain"
            src={Natal}
            alt="placeholder image"
          />
          <p className="text-lg mt-4 font-semibold">Nossa querida natal</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-pink-300 border border-pink-500 p-4 rounded-lg">
          <img
            className="w-64 h-64 object-contain"
            src={Mundo}
            alt="placeholder image"
          />
          <p className="text-lg mt-4 font-semibold">Mundo a fora</p>
        </div>
      </div>
      <div className="container mt-8 border border-pink-500 p-4 rounded-lg bg-pink-300">
        <h1 className="text-3xl font-bold mb-4 text-center">Nosso futuro</h1>
        <p className="text-lg">
          Ao nosso futuro, eu espero que nos guarde com muita prosperidade, mas uma certeza carrego comigo: estaremos sempre juntos, independente se for em Lisboa, Porto, Alemanha, Natal, Whitefish, estaremos sempre unidos como casal e sempre estarei ao seu lado.
        </p>
        <p className="text-4xl text-center"> Te amo muito e feliz 6 meses!</p>
      </div>
    </div>
  );
}
