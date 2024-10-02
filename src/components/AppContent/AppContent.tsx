/** Renders the first page and check if user is logged in*/
import React from 'react';
import s from './AppContent.module.css';
import { theme } from 'antd';
import { Content } from 'antd/es/layout/layout';
import AppRouter from '../../screens/AppRouter/AppRouter';


export type PropsType = {}

/** Renders the first page and check if user is logged in*/
const AppContent: React.FC<PropsType> = () => {
	const {
		token: { colorBgContainer },
	} = theme.useToken();

	return (
		<Content className={s.appContent} >
			<div
				style={{
					background: colorBgContainer,
				}}
				className={s.appContentRouter}
			>
				<AppRouter />
			</div>
		</Content>
	);
}

export default AppContent;

