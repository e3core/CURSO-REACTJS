import React from 'react';

function clase2 (){
    const[state,setState] = useState({
        numero1 :0,
        numero2:0
    })

    return(
        <>
        <h1>verificar hooks</h1>
        <input type="number" onChange={(e)=> {setState(e.target.value)}} />
        <p>{state.value}</p>
        </>
       

    );

}

export default clase2;

