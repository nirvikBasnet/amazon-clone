import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
           <img className="home_image"
           src = "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_FT_COVIDUPDATE_XSite_3000x1200_PV_en-GB._CB408004052_.jpg"
           > 
           </img>
           <div className="home__row">
                 {/* Product id, title,price,rating,image */}
           <Product 
           id ="01"
           title ="Apple Macbook Pro"
           price={11.96}
           rating={5}
           image="https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg"
           
           />
           {/* Product */}

           <Product 
           id ="01"
           title ="Apple Macbook Pro"
           price={11.96}
           rating={5}
           image="https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg"
           
           />

           </div>

         
        </div>
    )
}

export default Home
