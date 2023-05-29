import React from 'react';

const LatestNews = () => { 
  const handleNewsClick = (url) => { 
    window.open(url, '_blank');
  };

  return (
    <div>
      <button className="ultimasnoticias" onClick={() => handleNewsClick('https://www.nbamaniacs.com/')}>
        Ultimas Noticias
      </button> 
      <button className="ultimasnoticias" onClick={() => handleNewsClick('https://nbatopshot.com/listings/pack/0d39a4dd-e84b-47be-9592-0b528a99fd1f/')}>
        Compra tu NFT coleccionable
      </button>
      <button className="ultimasnoticias" onClick={() => handleNewsClick('https://es.wikipedia.org/wiki/Historia_de_la_NBA')}>
        Historia NBA
      </button>
    </div>
  );
};

export default LatestNews;
