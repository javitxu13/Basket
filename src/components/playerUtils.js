

export const renderPlayerImage = (fullName) => {
    
    const playerImages = {
      'LeBron James': 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2023/05/19/16844685039927.jpg',
      'Stephen Curry': 'https://a.espncdn.com/photo/2022/0611/r1023731_1296x729_16-9.jpg',
      'Kevin Durant': 'https://phantom-marca.unidadeditorial.es/8d79803534df19b3616a48d9514260ae/resize/1320/f/jpg/assets/multimedia/imagenes/2023/02/09/16759256431545.jpg',
      'Giannis Antetokounmpo': 'https://phantom-marca.unidadeditorial.es/3defee4bb3828e40e74e0988b4c47447/resize/1320/f/jpg/assets/multimedia/imagenes/2023/03/27/16799322631908.jpg',
      'Luka Doncic': 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/11/16/16685955696360.jpg',
      'Joel Embiid': 'https://phantom-marca.unidadeditorial.es/3d5026b421e2f95a801a2f168c7523e2/resize/1320/f/jpg/assets/multimedia/imagenes/2022/09/30/16644892830591.jpg',
      'Nikola Jokic': 'https://s1.abcstatics.com/media/deportes/2021/06/09/jokic-kTQF--1248x698@abc.jpg',
      'Jayson Tatum': 'https://depor.com/resizer/6QcQob5sB13oL9dEsFyCJ32OEMU=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/OU63WWW3ZZGJPMNEZYWVMCMPZA.jpg',
      "Rudy Gobert": "https://www.ballysports.com/images/image/private/t_1-1_768/f_auto/v1657224732/prod/pbcrmch57b9d0qalbk8j.jpg",
    };
  
    const imageUrl = playerImages[fullName];
  
    if (imageUrl) {
      return <img src={imageUrl} alt={fullName} />;
    } else {
      // Si no se encuentra una imagen para el jugador, mostrar una imagen genérica o un mensaje alternativo
      return <img src="https://example.com/default_image.jpg" alt="Player" />;
      // Opcionalmente, puedes retornar un mensaje en lugar de una imagen
      // return <p>No image available for {fullName}</p>;
    }
  };
  