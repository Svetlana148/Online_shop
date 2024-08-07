import React from "react";
import s from "./ShopContent.module.css";
import { Content } from "antd/es/layout/layout";


type PropsType = {							
	
}

const ShopContent : React.FC<PropsType> = (props) => {
	
	const contentStyle: React.CSSProperties = {
		textAlign: 'center',
		minHeight: 120,
		lineHeight: '120px',
		color: '#fff',
		backgroundColor: '#0958d9',
	};

	return (
			<Content style={contentStyle}>ShopContent</Content>
	)
}


export default ShopContent;