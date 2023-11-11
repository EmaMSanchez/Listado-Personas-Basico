const personas = [new Persona("Mica","Mazenzio"), new Persona("Emanuel", "Sanchez")]; /*Al estar dentro de la misma carpeta se puede usar el objeto persona del otro archivo js*/ 

function mostrarPersonas() /*Evento onLoad que al recuperar los elementos ul, los muestra en/los elementos li */
{
    let textoPersonas =""; /*Se recupera los objetos persona y se las concatena en una bariable*/
    
    for (let persona of personas) /*Se ingresa a el arreglo de personas y se itera */
    {
        textoPersonas += "<li> - " + persona.nombre + " " + persona._apellido + "<li/>" + "<br/>"; /*Para mostrar en la pagina web, dentro de una bariable se le concatena el objeto persona accediendo a los atributos y usando las etiquetas del buscador entre ""o en su defecto usar template string, sepone += para que concatene todos los objetos */
    }
    document.getElementById("personas").innerHTML = textoPersonas; /*Para mostrarse se recupera el elemento ul por id(personas) y con innerhtml se modifica o se agrega la cadena con los nuevos objetos personas guardada en la bariable */
}

function agregarPersona(){
    const formulario = document.forms["forma"]; /*Similar a get element(tambien puede utilizarse), toma el formulario con id y se guarda en bariable como un arreglo de objetos/nuevo objeto con objetos */
    const nombre = formulario["nombre"]; /*Recupera el objeto con la etiqueta de id nombre dentro del formulario*/
    const apellido = formulario["apellido"]; /*Recupera el objeto con la etiqueta de id apellido dentro del formulario */
    if(nombre.value !== "" && apellido.value !== "")
    {
        const persona = new Persona (nombre.value, apellido.value); /*Obtiene los valores de los objetos nombre y apellido y los tranforma en un objeto persona que recive los valores de nombre y apellido */
        personas.push(persona); /*Se envia a travez del metodo push a el arreglo persona, el nuevo objeto persona generado */
        mostrarPersonas(); /*Se llama para volver a mostrar el nuevo arreglo y recarge la pagina */
    }
    else{
        mensajeError();
    }
   
}

function mensajeError()
{
    document.getElementById("error").innerHTML = "Complete Ambos Campos";
}

