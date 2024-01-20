import React, { useEffect, useState } from 'react';

import { ApyKey } from '../../../ApyKey';
import { NavLink } from 'react-router-dom';
import Slider from 'react-slick';
import act_img from "../../../img/570975.png"
import axios from 'axios';

const Actors = ({id}) => {
	const [actors, setActors] = useState([])
	function getActors () {
		axios (
			`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${ApyKey}&language=en-US`
		).then((res) => {
		console.log(res)
		setActors(res.data.cast)
		
		});
	}
	useEffect(() => {
		getActors(ApyKey)
	},[]);

	  var settings = {
			dots: false,
			infinite: true,
			slidesToShow: 6,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000,
			pauseOnHover: false,
		}

	return (
		<div id='actors' style={{padding:"30px"}}>
			<div className='container'>
				<div className='actors'>
							<Slider {...settings}> 
								{actors.map(el => (
						<div className='act-block'>
							  <NavLink to={`/person/person-info/${el.id}`}>
											{el.profile_path ? (
										<img
											src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${el.profile_path}`}
											alt=''
										/>
									) : (
										<img style={{width:"138px", height:"175px"}} src={act_img} alt='img' />
									)}
								<h3>{el.name}</h3>
							   </NavLink>
						</div>
					))}
					</Slider>	
				</div>
			</div>
		</div>
	)
};

export default Actors;