import React from 'react'
import Pic1 from '../assets/pic1.PNG'
import Pic2 from '../assets/pic2.JPG'
import Pic3 from '../assets/pic3.JPG'
import Pic4 from '../assets/pic4.JPG'
import Pic5 from '../assets/pic5.JPG'
import Pic6 from '../assets/pic6.JPG'


export default function Memories() {
  return (
    <div className="grid grid-cols-2 gap-4 text-2xl">
      <div className="bg-pink-100 rounded-md p-4">
        <img src={Pic1} alt="Item 1" className="mx-auto mb-4 h-48 w-48 object-cover rounded-lg" />
        <p className="text-center">Nosso primeiro encontro</p>
      </div>
      <div className="bg-pink-100 rounded-md p-4">
        <img src={Pic2} alt="Item 2" className="mx-auto mb-4 h-48 w-48 rounded-lg" />
        <p className="text-center">Dia que eu te pedi em namoro(casamento)</p>
      </div>
      <div className="bg-pink-100 rounded-md p-4">
        <img src={Pic3} alt="Item 3" className="mx-auto mb-4 h-48 w-48 rounded-lg" />
        <p className="text-center">Datezinho no cidade do jeito que a gente gosta</p>
      </div>
      <div className="bg-pink-100 rounded-md p-4">
        <img src={Pic4} alt="Item 4" className="mx-auto mb-4 h-48 w-48 rounded-lg" />
        <p className="text-center">Nosso último date antes de eu ir para o intercâmbio, esse foi muito marcante</p>
      </div>
      <div className="bg-pink-100 rounded-md p-4">
        <img src={Pic5} alt="Item 5" className="mx-auto mb-4 h-48 w-48 rounded-lg" />
        <p className="text-center">Seu niver haha</p>
      </div>
      <div className="bg-pink-100 rounded-md p-4">
        <img src={Pic6} alt="Item 6" className="mx-auto mb-4 h-48 w-48 rounded-lg" />
        <p className="text-center">Nossa primeira viagem juntos, foi muito massa</p>
      </div>
    </div>
  )
}
