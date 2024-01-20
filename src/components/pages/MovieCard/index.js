import React, { useEffect, useState } from 'react';

import { ApyKey } from '../../../ApyKey';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const MovieCard = ({el}) => {
	const [movie, setMovie] = useState({});
	function getMovie() {
axios(
	`https://api.themoviedb.org/3/movie/top_rated?api_key=${ApyKey}&languge=en-US&page=1`
).then((res)=>{
console.log(res);
setMovie(res.data);
});
	}
	console.log(movie);
	useEffect(() =>{
		getMovie()
	},[])
	let {
		poster_path,
		title,
		overview,
		backdrop_path,
		release_date,
		original_language,
	} = movie
	return (
		<div id='movie'>
			<div className='container'>
				<div className='movie' >
					<NavLink to={`/movie/movie-info/${el.id}`}>
						<img
							style={{ width: '240px', height: '350px' }}
							src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`}
							alt=''
						/>
					</NavLink>
				</div>
			</div>
		</div>
	)
};

export default MovieCard;