
import './App.css';
import Countries from './components/Countries/Countries';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className="App">
     <Countries></Countries>
     <Footer></Footer>
    </div>
  );
}

/* function LoadCountries (){
  const [countries, setcountries] = useState([]);

  useEffect( () => {

    fetch("https://restcountries.com/v3.1/all")
    .then (res=> res.json())
    .then (data => setcountries(data))

  },[])

  return(
    <div>
      <h1> Visition Every country of the world!!!!</h1>
      <h3> Available countries: {countries.length}</h3>
      {
       countries.map(country => <Country name = {country.name.common} population = {country.population}></Country>)
      }
    </div>
  )
}

function Country (props){
  return (
    <div>
      <h2> Name: {props.name}</h2>
      <h3>Population: {props.population}</h3>
    </div>
  )
} */

export default App;
