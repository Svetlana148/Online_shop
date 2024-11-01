import React from 'react';
import preloaderImg from '../../../resources/img/preloader.gif';

export type PropsType = {
}

let Preloader: React.FC<PropsType> = (props)=>{
	return(
	<div style = {{backgroundColor : 'white'}}>
	<img src={preloaderImg} alt=''/>
	</div>
	)
};

export default Preloader;