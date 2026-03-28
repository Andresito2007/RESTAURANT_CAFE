// 2DO COMPONENTE : NUESTRA IMAGEN PRINCIPAL DE SOFA Y CAFE 
import styl from "../estilos/estilos.module.css";
//IMPORTAMOS POR MODULES.CSS PARA DARLE ESTILO A NUESTRA IMAGEN
//EL MODULES.CSS una forma de usar CSS donde los estilos son locales al componente y podemos usarlas 
// como propiedades con el punto.

// CREAMOS NUESTRA FUNCION IMAGEN PRINC. QUE RETORNARA UNA IMAGEN DENTRO DE UN DIV
function Imagen_principal() {
  return (
    <div className={styl.img}>
      <img src="https://valdiviadg.com/wp-content/uploads/2018/10/SOFA-MAGDALENA-1.jpg"></img>
    </div>
    
  );
}
// EXPORTAMOS POR DEFECTO EL COMPONENTE IMAGEN_PRINCIPAL
export default Imagen_principal;
