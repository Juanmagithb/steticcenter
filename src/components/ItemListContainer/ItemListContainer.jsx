
import './ItemListContainer.css'

const ItemListContainer = ({ greeting }) => {// componente ItemListContainer
//pascalCase, ademas { greeting } va entre corchetes por el destructuring
    return (
        <section className='section'>
            <h2>
                {greeting} 
                {/* las llaves son para poder escribir en js */}
            </h2>
        </section>
    )
} 

export default ItemListContainer // exporto la funcion ItemListContainer
// como se va a tratar de un unico componente podemos usar export defautl




