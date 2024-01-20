import { NavLink, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

const Header = ({dark,setDark}) => {
	const [value, setValue] = useState("");
	const navigate = useNavigate();
	const getUr1 = () => {
		navigate(`/search/search-movie/${value}`)
	};
	return (
		<div id='header'>
			<div className='container'>
				<div className='header'>
					<h1
					 style={{fontWeight:"bold",fontSize:"35px", color:"#efefef"}}
					 >Movies
					 </h1>
					<div className='link'> 
						<NavLink to={'/'}>home</NavLink>
						<NavLink to={'/Popular'}>Popular</NavLink>
						<NavLink to={'/TopRated'}>Top_Rated</NavLink>
						<NavLink to={'/NowPlaying'}>Now_Playing</NavLink>
					</div>
					<div className='header-left'>
						<input  
						className='h-l-input'
						 onKeyDown={(event) => {
							if (event.key === "Enter") getUr1();
						 }}
						onChange={(e) => setValue(e.target.value)}
						type='search' placeholder='search' />
						<button onClick={getUr1}>click</button>
						
						<input onClick={() => setDark(!dark)} type="checkbox" class="theme-checkbox"/>
					</div>
				</div>
			</div>
		</div>
	)
};

export default Header;
