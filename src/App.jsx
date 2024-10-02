import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import CardsContainer from "./components/CardsContainer";
import movies from "./components/Movies";

function App() {

  const appTitle = 'Movie Watchlist'

  return (
    <>
      <Header title={ appTitle } />
      <Navbar title = { appTitle } />

	  <CardsContainer movies = { movies } />
	

	{/* <div className="popup">
		<i className="fa-regular fa-hourglass-half" id="wl-b" style="color: #d3ff13;font-size: 20px;margin-right: 10px; display: none;"></i> 
		<i className="fa-solid fa-circle-check" id="w-b" style="color: #d3ff13;font-size: 20px;margin-right: 10px; display: none;"></i> 
		<p className="message"> pop up message </p>
	</div> */}
      <Footer title= { appTitle } />
	
    </>
  )
}

export default App
