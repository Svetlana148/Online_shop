import React, { useState } from 'react';
import { Button, ConfigProvider, Drawer, Menu } from 'antd';
import burgerButton from '../../resources/img/AppMenu/burgerButton.svg';
import s from './AppHeader.module.css';
import { NavLink } from 'react-router-dom';

const AppHeaderMobileMenu: React.FC = () => {
	const [open, setOpen] = useState(false);

	const showDrawer = () => {
		setOpen(true);
	};

	const onClose = () => {
		setOpen(false);
	};

	return (
		<>
		<div className={s.AppHeaderMobileMenuButton}  onClick={showDrawer}>
			<div className={s.AppHeaderMobileButton}>
				<img src={burgerButton} alt="" />
			</div>
		</div>
	  <Drawer title="Menu" onClose={onClose} open={open}>
	  
		{/* For design customization */}
		<ConfigProvider
				theme={{
					token: {
						// Disable animation
						motion:false,  
						// Color for underline in the menu under the active item
						//#46a358;
						colorPrimaryActive: '#3d3dff',  
						// colorPrimaryText: '#3d3dff',
						// fontWeightStrong:900,
					},
					components: {
						Menu: {
							horizontalItemSelectedColor: '#3d3d3d',
						},
					}
				}}
				>

				<Menu
					// mode="horizontal"
					defaultSelectedKeys={['1']}
					className={s.header_menu}>
					
						<Menu.Item key="1" > <NavLink to="/home" className={s.menu__link }>Home</NavLink></Menu.Item> 
						<Menu.Item key="2" className={s.menu_item}> <NavLink to="/shop">Shop</NavLink></Menu.Item>
						<Menu.Item key="3" className={s.menu_item}> <NavLink to="/blogs">Blogs</NavLink></Menu.Item>
				</Menu>
			</ConfigProvider>

	  </Drawer>
		</>
	);
};

export default AppHeaderMobileMenu;
