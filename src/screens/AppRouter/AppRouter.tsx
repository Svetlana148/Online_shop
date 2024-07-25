import React from 'react';
// import "./styles.css";
import { Route, Routes } from 'react-router-dom';
import home from '../Home/ScreenHome';
import Shop from '../Shop/Shop';
import ProductView from '../ProductView/ProductView';
import ProductCart from '../ProductCart/ProductCart';
import ProductCheckout from '../ProductCheckout/ProductCheckout';
import MyAccount from '../MyAccount/MyAccount';
import Address from '../Address/Address';
import Pagenotfound from '../PageNotFound';
import Blogs from '../Blogs/Blogs';
import Preloader from '../../components/common/Preloader/Preloader';
import Home from '../Home/ScreenHome';


const AppRouter: React.FC = () => {

	return (
		<React.Suspense fallback={<div><Preloader /></div>}>
			{/* "React.Suspense"  крутилка из React-а для ВСЕх компонент проекта */}

			<Routes >
				{/* Есть Route exact тут ищется точное совпадение и дальше не идем */}

				{/* <Route path="/login" element={<LoginPage />} /> */}
				<Route index element={<Home />} />
				<Route path='/home' element={<Home />} />

				<Route path='/shop' element={<Shop />} />
				<Route path='/blogs' element={<Blogs />} />
				<Route path='/productView' element={<ProductView />} />
				<Route path='/productCart' element={<ProductCart />} />
				<Route path='/productCheckout' element={<ProductCheckout />} />
				<Route path='/myAccount' element={<MyAccount />} />
				<Route path='/address' element={<Address />} />
				<Route path='*' element={<Pagenotfound />} />
			</Routes>
		</React.Suspense>
	)
}

export default AppRouter;






// export const router = createBrowserRouter([
// 	{
// 		path: "/",
// 		element:<AppLayout />,
// 		children: [
// 			{index: true,
// 				element:<Home/>
// 			},
// 			{path: "home",
// 				element:<Home/>
// 			},
// 			{path: "shop",
// 				element:<Shop/>
// 			},
// 		]

// 	}
// ])
