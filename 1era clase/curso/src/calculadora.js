// crear componentes desde una clase
import {Component} from "react"

class Calculadora extends Component{
    constructor(props){
        super(props) // aqui se llama las propiedades del Component
        this.setNumber = this.setNumber.bind(this) // aqui se enlaza el metodo al contexto actual del componente
        // osea esto se coloca para poder hacer referencia this en el metodo setNumber mas adelante
        
        this.state = { //aqui inicia l estado del componente tomando en cuenta 2 propiedades numero1 y numero2
            numero1: 0,
            numero2:0
        }
    }
    setNumber(e,numero){
        if(numero === 1){
            this.setState({ // aqui se actualiza l estado del componente
                ...this.state,//... = operador de propagacion 
                numero1:e.target.value // esto toma el valor del numero1 y lo actualiza con el valor del e.target.value
            })

        }else if (numero === 2){
            this.setState({ // aqui se actualiza l estado del componente
            ...this.state,//... = operador de propagacion 
            numero2:e.target.value // esto toma el valor del numero1 y lo actualiza con el valor del e.target.value
        })
        }

        
    }
render(){ // este metodo define como va a renderizar
    return(
        <>
        <h1>Calculadora</h1>
        <h2>{this.props.title}</h2>
        <form>
            <input  type="number" 
                    name="numero1"
                    value={this.state.numero1}
                    onChange = {(e)=>this.setNumber(e,1)} // aqui se carga el metodo setNumber
                />

            <input  type="number" 
                    name="numero2"
                    value={this.state.numero2}
                    onChange = {(e)=>this.setNumber(e,2)}
                />
                <input type="submit" name="calcula" value="calcular" />
                <span> el resultado es: {this.state.numero1+this.state.numero2}</span>
            </form>
        </>
        
    );
}

}

export default Calculadora

//en este ejercicio quedaria pendiente como pasar los datos numero1 y numero2 a tipo de dato Number