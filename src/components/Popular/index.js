import React, { useEffect, useState } from 'react';

import { ApyKey } from '../../ApyKey';
import MovieCard from '../pages/MovieCard';
import axios from 'axios';

const Popular = () => {
	const [popular ,setPopular] = useState([]);
	const [next,setNext] = useState(1);
	function getPopular() {
		axios (
			`https://api.themoviedb.org/3/movie/popular?api_key=${ApyKey}&languge=en-US&page=1`
		).then((res) => {
			setPopular(res.data.results)
		});
	}
	useEffect(() => {
		getPopular();
	},[next])
	return (
		<div id='popular'>
			<div className='container'>
				<div className='popular'>
					<div className='p-mov'>
						{popular.map(el => (
							<MovieCard key={el.id} el={el} />
						))}
					</div>
					{next > 1 && (
						<button onClick={() => setNext(next === 1 ? next : next - 1)}>
							next
						</button>
					)}
					<button onClick={() => setNext(next+1)}>back</button>
				</div>
			</div>
		</div>
	)
};

export default Popular;