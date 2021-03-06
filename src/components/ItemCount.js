import {CartContext} from '../Context/CartContext';
import {useContext, useState} from 'react';
import {doc, collection, getFirestore, updateDoc} from 'firebase/firestore';


export default function ItemCount({ contador, onAdd, ocultar, setContador, stock, id }) {


  




  

  const incrementar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    } else {
      // alert("No hay mas stock");
    }
  };

  const decrementar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  function agregarCarrito() {
    onAdd();
    ocultar();
  
  }

if (contador > stock) { 
  const ocultartBoton = "disabled"
} else {
  const ocultartBoton = "enabled"
}

  return (
    <>
      <div className="d-flex justify-content-center text-center m-3">
        <button
          href="#"
          className={contador > 1 ? "btn btn-primary" : "btn btn-secondary"}
          onClick={() => decrementar()}
        >
          -
        </button>
        <span  className="border pl-4 pr-4" >  { contador } </span>
        <button
          href="#"
          className={contador < 5 ? "btn btn-primary" : "btn btn-secondary"}
          onClick={() => incrementar()}
        >
          +
        </button>
      </div>
      <div className="mt-3 d-flex justify-content-center m-3">
          <button disabled={contador>stock}
            className=" btn btn-primary "
            onClick={() => agregarCarrito()}
          >
            Agregar al carrito
          </button>
      </div>
    </>
  );
}
