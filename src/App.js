
import './App.css';
import Countries from './components/Countries/Countries';


function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}





// function Countries(){
//   const[countries,setCountries]=useState([]);
//   useEffect(()=>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res=>res.json())
//     .then(data=>setCountries(data))
//   },[]);
//   return(
//     <div>
//       {
//         countries.map(country=><Country capital={country.capital}></Country>)
//       }

//     </div>
//   )
// }

// function Country(props){
//   return(
//     <div>
//       <h2>Capital: {props.capital}</h2>
//     </div>
//   )
// }

export default App;
