import './Stylr.css'

function Inicio() {
   const [todoslospoke, setTodoslospokes] = useState([]);

    useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(response => response.json())
      .then(responseData => setDatapoke(responseData))
      .catch(error => console.error("Error:", error));
    }, []); 
    console.log(todoslospoke)
    if(todoslospoke.lenght == 0) return <p>Cargando...</p>
  return (
    <>
      (todoslospoke[0].name)
    </>
  )
}

export default Inicio