

function Contexto(props){
    // los props sirve para poder acceder a los atributos de los componentes
    return(
        <section id={props.id}>
            <a href={props.direccion}>siemens usando props</a>
        </section>
    );
}

function Objeto({imagen,titulo}){
    // aqui se usan el mismos props pero destructurado
    return(
        <img src={imagen} alt={titulo}/>
    );
}

export {Objeto,Contexto};
