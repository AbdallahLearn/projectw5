
import './App.css'
import Navbar from './component/Navbar'
import Header from './component/Header'
import Review from './component/Review'
import Best from './component/Best'
import Join from './component/Join'
import Video from './component/Video'
import Invite from './component/Invite'
import Footer from './component/Footer'
function App() {
  

  return (
    
    <>
    <div className="container-side  top-0 right-0 absolute h-screen w-[40%]  bg-[#c99584]">
    </div>
    <Navbar/>
    <Header/>
    <div className="container-latest mt-20 flex justify-between w-[90%] m-auto max-sm:block text-center">
    <h1 className='text-6xl max-sm:text-3xl mb-5'>Latest Reviws</h1>
    <button 
     className="btn text-[12px] hover:bg-[#c99584] hover:text-white bg-white text-[#c99584]"
     style={{ border: "1px solid #c99584", padding: "10px 20px", borderRadius:'0' }}
    >VIEW ALL</button>
    </div>
    
    <div className="container-review mt-20 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  justify-items-center" >
     
    <Review img='https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-review-img-1.jpg' title="Grilled Flank Steak with Chimichurri" desc="Potenti tincidunt arcu euismod curabitur iaculis ut aliquet facilisis pharetra, pharetra dolor scelerisque." />
    <Review img='https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-review-img-2.jpg' title="Mushroom Penne with Walnut Pesto" desc="Ipsum amet ultrices suscipit eget tortor, tincidunt urna, mattis aliquam duis eget luctus." />
    <Review img='https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-review-img-3.jpg' title="Garlic Butter White Wine Shrimp Linguine" desc="Non faucibus tincidunt commodo est arcu ipsum augue ipsum at vitae, nunc purus erat sem leo fames facilisis." />
      
      </div>


      <div className="container-best bg-[#f3efee] pb-20 ">
      <div className="container-latest mt-20 text-center w-[90%] m-auto max-sm:block">
    <h1 className='text-5xl max-sm:text-3xl pt-20 mb-5'>Best in Class Restaurant</h1>
    <p className='w-[70%] m-auto'>Massa urna magnis dignissim id euismod porttitor vitae etiam viverra nunc at adipiscing sit morbi aliquet mauris porttitor nisi, senectus pharetra ac porttitor orci.</p>
    </div>
    
    <div className="container-review  mt-20 grid mb-44 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  justify-items-center" >
     
    <Best img='https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-1.jpg' title="Bern's Steak House" desc="Potenti tincidunt arcu euismod amet ac curabitur iaculis in ut aliquet." />
    <Best img='https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-2.jpg' title="Eewak Korean Restaurant" desc="Tristique in ornare lectus facilisis diam libero, eros sit scelerisque pulvinar dui." />
    <Best img='https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-3.jpg' title="The Ramban Vegan House" desc="Iaculis morbi id maecenas mi amet, mi ut dolor aenean id justo." />
    <Best img='https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-4.jpg' title="Maniest Bake & Cake" desc="Diam lacus nunc est commodo nunc, velit et amet eu vitae sem." />
    <Best img='https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-5.jpg' title="Crush Los Angeles" desc="Adipiscing eget in sit lectus sem euismod ut consequat suspendisse ut tristique." />
    <Best img='https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-6.jpg' title="The Mike Winery" desc="Aliquet ut vel faucibus gravida tellus non ipsum ullamcorper adipiscing felis." />
      
      </div>
        
        </div> 

        <Join/>
        <div className="container-video w-[90%] m-auto max-sm:w-[95%]">
        <h1 className='text-5xl mb-20'>Latest Videos</h1>
        <Video/>
        </div>

        <Invite/>
        <Footer/>
      
   
    </>
  )
}

export default App
