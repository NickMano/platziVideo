import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
import App from './routes/App'

const initialState = {
    "user": {},
    "playing": {},
    "myList": [],
    "trends": [
      {
        "id": 2,
        "slug": "tvshow-2",
        "title": "Brawlhalla",
        "type": "Action",
        "language": "English",
        "year": 2019,
        "contentRating": "16+",
        "duration": 164,
        "cover": "https://static.displate.com/857x1200/displate/2020-06-17/7014f73b75d6122881499c12ebdf2603_53513349e4da448a8d89a0da4847f239.jpg",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
      },
      {
        "id": 3,
        "slug": "multiplatform",
        "title": "Fifa 21",
        "type": "Sports",
        "language": "English",
        "year": 2020,
        "contentRating": "16+",
        "duration": 137,
        "cover": "https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-21/cover-athlete/common/fifa21-cover-section-2.png.adapt.320w.png",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
      },
      {
        "id": 4,
        "slug": "sony-games",
        "title": "Red Dead Redemption 2",
        "type": "Action",
        "language": "English",
        "year": 2014,
        "contentRating": "16+",
        "duration": 163,
        "cover": "https://images-na.ssl-images-amazon.com/images/I/71nlEoSrewL._AC_SL1200_.jpg",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
      },
      {
        "id": 5,
        "slug": "nintendo-games",
        "title": "Astral Chains",
        "type": "Rol",
        "language": "English",
        "year": 2019,
        "contentRating": "16+",
        "duration": 194,
        "cover": "https://cdn.shopify.com/s/files/1/0747/3829/products/mL3505_1024x1024.jpg?v=1571445728",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
      },
      {
        "id": 6,
        "slug": "multiplatform",
        "title": "Final Fantasy XIV - Shadowbringers",
        "type": "Rol",
        "language": "English",
        "year": 2017,
        "contentRating": "16+",
        "duration": 124,
        "cover": "https://i.pinimg.com/originals/16/f4/9f/16f49ff34af43c96147ea823b8b15465.jpg",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
      },
      {
        "id": 7,
        "slug": "nintendo-games",
        "title": "Super Smash Bros. Ultimate",
        "type": "Action",
        "language": "English",
        "year": 2018,
        "contentRating": "16+",
        "duration": 179,
        "cover": "https://images-na.ssl-images-amazon.com/images/I/71RX-Ma8uNL._AC_SY741_.jpg",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
      }
    ],
    "originals": [
      {
        "id": 1,
        "slug": "nintendo-game",
        "title": "Luigui's Mansion 3",
        "type": "Action",
        "language": "English",
        "year": 2019,
        "contentRating": "16+",
        "duration": 148,
        "cover": "https://images-na.ssl-images-amazon.com/images/I/51Hx3C4xUHL._AC_.jpg",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
      },
      {
        "id": 2,
        "slug": "nintendo-games",
        "title": "The Legend of Zelda Breath of the Wild",
        "type": "Action",
        "language": "English",
        "year": 2017,
        "contentRating": "16+",
        "duration": 128,
        "cover": "https://images-na.ssl-images-amazon.com/images/I/71p%2BU0d%2BumL._AC_SL1024_.jpg",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
      },
      {
        "id": 10,
        "slug": "nintendo-games",
        "title": "Super Mario Bros. 3",
        "type": "Adventure 2D",
        "language": "English",
        "year": 1998,
        "contentRating": "16+",
        "duration": 346,
        "cover": "https://images-na.ssl-images-amazon.com/images/I/613Py5NEsSL._AC_SY741_.jpg",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
      },
      {
        "id": 11,
        "slug": "nintendo-games",
        "title": "Pokemon Sword",
        "type": "Strategy",
        "language": "English",
        "year": 2019,
        "contentRating": "16+",
        "duration": 226,
        "cover": "https://cdn.shopify.com/s/files/1/0747/3829/products/mL3881_1024x1024.jpg?v=1572970304",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
      },
      {
        "id": 12,
        "slug": "nintendo-games",
        "title": "Pinkmin 3",
        "type": "Strategy",
        "language": "English",
        "year": 2018,
        "contentRating": "16+",
        "duration": 190,
        "cover": "https://images-na.ssl-images-amazon.com/images/I/81VU3bppf3L._AC_SL1500_.jpg",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
      }
    ]
}

const store = createStore(reducer, initialState) 

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('app')
)