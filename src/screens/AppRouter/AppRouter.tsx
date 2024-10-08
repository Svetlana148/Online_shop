/** All Routes of application*/
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Shop from '../Shop/Shop';
import ProductView from '../ProductView/ProductView';
import ProductCart from '../ProductCart/ProductCart';
import ProductCheckout from '../ProductCheckout/ProductCheckout';
import MyAccount from '../MyAccount/MyAccount';
import Address from '../Address/Address';
import PageNotfound from '../PageNotFound';
import Blogs from '../Blogs/Blogs';
import Preloader from '../../components/common/Preloader/Preloader';


/** All Routes of application*/
const AppRouter: React.FC = () => {
	return (
		<React.Suspense fallback={<div><Preloader /></div>}>
			<Routes >
				<Route index element={<Home />} />
				<Route path='/home' element={<Home />} />
				<Route path='/shop' element={<Shop />} />
				<Route path='/blogs' element={<Blogs />} />
				<Route path='/productView' element={<ProductView />} />
				<Route path='/productCart' element={<ProductCart />} />
				<Route path='/productCheckout' element={<ProductCheckout />} />
				<Route path='/myAccount' element={<MyAccount />} />
				<Route path='/address' element={<Address />} />
				<Route path='*' element={<PageNotfound />} />
			</Routes>
		</React.Suspense>
	)
}

export default AppRouter;