import React, { Component } from 'react'
import MoviesCard from './MoviesCard'
import HocLoading from './HocLoading'


const ListMovies = props => {
        return (
            <div className="listMovie">
                {props.movies.map(el => 
                (<MoviesCard delete={id => props.delete(id)} movie={el} key={el.id}/>))}
            </div>
        );
    }

export default HocLoading(ListMovies);