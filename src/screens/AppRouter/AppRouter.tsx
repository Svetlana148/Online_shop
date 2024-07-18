import React from 'react';
// import "./styles.css";
import { Route, Routes } from 'react-router-dom';
import HomeScreen from '../HomeScreen/HomeScreen';
import Shop from '../Shop/Shop';
import ProductView from '../ProductView/ProductView';
import ProductCart from '../ProductCart/ProductCart';
import ProductCheckout from '../ProductCheckout/ProductCheckout';
import MyAccount from '../MyAccount/MyAccount';
import Address from '../Address/Address';
import Pagenotfound from '../PageNotFound';
import Blogs from '../Blogs/Blogs';
import Preloader from '../../components/common/Preloader/Preloader';


const AppRouter: React.FC = () => {

	return ( 
		<React.Suspense fallback={<div><Preloader /></div>}>
		{/* "React.Suspense"  крутилка из React-а для ВСЕх компонент проекта */}

			<Routes >
				{/* Есть Route exact тут ищется точное совпадение и дальше не идем */}

				{/* <Route path="/login" element={<LoginPage />} /> */}
				<Route index element={<HomeScreen />} />
				<Route path='/home' element={<HomeScreen />} />
				
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
