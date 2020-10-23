import React, { useState } from 'react'
import { connect } from 'react-redux'
import Search from '../components/SearchBar/Search'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'

import '../assets/styles/base.scss'
 
const Home = ({myList, trends, switchGames, psxGames, nesGames}) => {
    const [query, setQuery] = useState("")
    const filteredTrends = trends.filter(item => item.title.toLowerCase().includes(query.toLowerCase()))
    const filteredSwitchGames = switchGames.filter(item => item.title.toLowerCase().includes(query.toLowerCase()))
    const filteredPsxGames = psxGames.filter(item => item.title.toLowerCase().includes(query.toLowerCase()))
    const filteredNesGames = nesGames.filter(item => item.title.toLowerCase().includes(query.toLowerCase()))

    return(
        <>
            <Search value={query} handleChange={(e) => setQuery(e.target.value) } />

            { myList?.length > 0 &&
                <Carousel title='Mis Favoritos'>
                    {myList.map( item =>  <CarouselItem isMyList key={item.id} {...item}/> ) }
                </Carousel>
            }

            { filteredNesGames?.length > 0 &&
                <Carousel title='Juegos de NES'>
                    {filteredNesGames.map( item =>  <CarouselItem key={item.id} {...item}/> ) }
                </Carousel>
            }

            { filteredPsxGames?.length > 0 &&
                <Carousel title='Juegos de Playstation 1'>
                    {filteredPsxGames.map( item =>  <CarouselItem key={item.id} {...item}/> ) }
                </Carousel>
            }

            { filteredSwitchGames?.length > 0 &&
                <Carousel title='Juegos de Switch'>
                    {filteredSwitchGames.map( item =>  <CarouselItem key={item.id} {...item}/> ) }
                </Carousel>
            }

            { filteredTrends?.length > 0 &&
                <Carousel title='Tendencias'>
                    {filteredTrends.map( item =>  <CarouselItem key={item.id} {...item}/> ) }
                </Carousel>
            }

        </>
)}

const mapStateToProps = state => {
    return {
        myList: state.myList,
        switchGames: state.switchGames,
        psxGames: state.psxGames,
        nesGames: state.nesGames,
        trends: state.trends,
    }
}

export default connect(mapStateToProps, null)(Home)
