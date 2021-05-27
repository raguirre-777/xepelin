import * as React from "react";

export default function LoginPage() {
  return (
    <div className="padding-container">

    </div>
  );
}



// Algunos componentes (comúnmente un componente de encabezado) aparecen en cada página,
// por lo que no están envueltos en un <Route>:
// Esto significa que el encabezado no puede redirigir al usuario.
// Para solucionar este problema, el componente de encabezado se puede ajustar en una función withRouter, 
// ya sea cuando se exporta:
// Exportar predeterminado conRouter (Encabezado)
// Esto le da acceso al componente Encabezado a this.props.history, lo que significa que el encabezado 
// ahora puede redirigir al usuario.

