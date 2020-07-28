import React from 'react';
import Menu from '../../components/Menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';


function Home() {
  return (
    <div>
      <Menu />

      <BannerMain 
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Os Guardiões empunharão esse poder elementar, oriundo da Treva, junto com Arco, Solar e Vácuo para utilizar super habilidades épicas e dominar o campo de batalha. Titãs, Arcanos e Caçadores usam a Estase cada um à sua maneira, da desaceleração dos inimigos com campos de estase ao estilhaçar de inimigos aprisionados com poder destrutivo."}
      />

      <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        category={dadosIniciais.categorias[3]}
      />

      <Carousel
        category={dadosIniciais.categorias[4]}
      />

      <Footer/>


      

      
    </div>
  );
}

export default Home;
