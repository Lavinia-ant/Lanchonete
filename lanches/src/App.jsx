import { use, useState } from 'react'
import './App.css'
import imgSorvete from './assets/sorvete.png'
import imgFamilia from './assets/familiaSorvete.png'
import CardProduto from './components/CardProduto'

function App() {
  const [tipoPromocao, setTipoPromocao] = useState('familia');

  const dadosPromocao = {
    familia: {
      imagem: imgFamilia,
      titulo: 'Sorvete para toda a família',
      preco: 'R$ 99,90',
      descricao: 'Picolés de 500ml com sabores variados e a vontade para toda a família, sem direito a repetição.',
    },
    individual: {
      imagem: imgSorvete,
      titulo: 'Sorvete Individual',
      preco: 'R$ 9,90',
      descricao: 'Picolé de 500ml com sabores variados e excelentes para refrescar o seu dia!',
    }
  }

  const alterarPromocao = () => {
    setTipoPromocao(tipoPromocao === 'familia' ? 'individual' : 'familia');
  }

  const dados = dadosPromocao[tipoPromocao]

  return (
    <>
      <div className='container'>
        <h1>Escolha a sua promoção</h1>
        <button onClick={alterarPromocao}>Mudar promoção</button>

        <CardProduto
          imagem={dados.imagem}
          titulo={dados.titulo}
          preco={dados.preco}
          descricao={dados.descricao}
        />
      </div>
    </>
  )
}

export default App