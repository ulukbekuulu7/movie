import React, { useEffect, useState } from 'react';

import { ApyKey } from '../../../ApyKey';
import MovieCard from '../MovieCard';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Search = () => {
	const [search, setSearch] = useState([]);
	const {movieSearch} = useParams();
	const getSearch =  () => {
axios(
	`https://api.themoviedb.org/3/search/movie?api_key=${ApyKey}&query=${movieSearch}`
).then(res => {
	console.log(res)
	setSearch(res.data.results)
})		
	};
	console.log(movieSearch);
	useEffect(() => {
		getSearch();
	},[movieSearch])
	return (
		<div id='search'>
			<div className='container'>
				<div className='search'>
					{search.map(el => (<MovieCard el={el}/>))}
				</div>
			</div>
		</div>
	);
};

export default Search;