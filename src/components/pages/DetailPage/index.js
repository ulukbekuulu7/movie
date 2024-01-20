import React, { useEffect, useState } from 'react';

import Actors from '../Actors';
import { ApyKey } from '../../../ApyKey';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Detail = () => {
	const [detail, setDetail] =useState({})
	const {movieId} = useParams()
	function getDetail () {
		axios(
			`https://api.themoviedb.org/3/movie/${movieId}?api_key=${ApyKey}&languge=en-US`
		).then ((res) => {
			setDetail(res.data);
		});
	}
	console.log(detail);
	useEffect(() => {
		getDetail()
	},[])
	let {
		poster_path,title,overview,backdrop_path,release_date,original_language,vote_average,runtime
	} = detail
	return (
		<>
			<div
				id='detail'
				style={{
					background: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${backdrop_path})`,
				}}
			>
				<div className='container'>
					<div className='detail'>
						<img
							src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${poster_path}`}
							alt=''
						/>
						<div>
							<h1
								style={{
									fontSize: '18px',
									fontWeight: '500',
									color: '#fff',
								}}
							>
								{title} <span>({release_date})</span>
							</h1>
							<h1
								style={{
									fontSize: '19px',
									fontWeight: '300',
									color: '#fff',
									margin: '20px 0',
								}}
							>
								Продолжительность: {runtime}min. <br />
								Рейтинг:
								<span
									className='d-span'
									style={{
										background: 'green',
										color: '#fff',
										margin: '20px 20px',
									}}
								>
									{Math.floor(vote_average * 10)}%
								</span>{' '}
								<br />
								язык:{' '}
								<span style={{ fontWeight: '600' }}>{original_language}</span>
							</h1>
							<p
								style={{
									width: '800px',
									fontSize: '20px',
									fontWeight: '400',
									color: '#fff',
									textShadow:"0 0 10px black"
								}}
							>
								{overview}
							</p>
						</div>
					</div>
				</div>
			</div>
			<Actors id={movieId} />
		</>
	)
};

export default Detail;