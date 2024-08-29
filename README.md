# Chicas en Tecnología 2024
Grupo conformado por:
- Gianella Lupo
- Juliana Ortiz

# Temática: Educación (TDAH, deficit de atencion e hiperactividad)
Centers for Disease Control and Prevention (CDC)
- Casi el 78% de los niños con TDAH tienen al menos otra condición coexistente, como problemas de conducta (aproximadamente la mitad) o ansiedad (alrededor del 40%)​
- Aproximadamente el 11.3% de los niños y adolescentes de 5 a 17 años han sido diagnosticados con TDAH entre 2020 y 2022. La prevalencia aumenta en áreas menos urbanizadas, siendo del 9.4% en áreas metropolitanas grandes y del 13.9% en áreas no metropolitanas
- Los estudiantes con TDAH suelen requerir estrategias específicas para manejar sus síntomas y tener éxito académico. Algunas estrategias recomendadas incluyen proporcionar retroalimentación frecuente, permitir descansos y minimizar distracciones en el aula​

# Soluciones Tecnológicas para el TDAH en Estudiantes: Un Enfoque Integral
![1](https://github.com/Gianella-Lup0/TDAH-deficit-de-atencion-e-hiperactividad/assets/174157866/488a8597-9552-4144-9ff4-649fa086ddee)

- Identificamos un problema: La falta de concienciación y recursos sobre el TDAH (Trastorno por Déficit de Atención e Hiperactividad) en estudiantes.
- Definimos público objetivo: Jóvenes de 13 a 18 años que forman parte de la comunidad estudiantil de secundaria en Buenos Aires, abarcando una diversidad de escuelas y contextos socioeconómicos, con un enfoque en sus necesidades educativas y de apoyo psicológico.
- Ideamos una solución: Crearemos un sitio informativo sobre el TDAH, proporcionando recursos educativos y estrategias prácticas para concientizar y apoyar a quienes lo visiten sobre el impacto del TDAH y cómo gestionarlo de manera efectiva.

# Objetivo de Desarrollo Sostenible
- 3 - Salud y bienestar
- 4 - Educación de calidad
- 10 - Reducción de las desigualdades

# Diseñamos un prototipo:
Herramientas: Wireframe o Miro para prototipos digitales, o lápiz y papel para un boceto inicial.
- Inicio: https://wireframe.cc/5FNUwp
- Foros: https://wireframe.cc/uURfeH
- Contacto: https://wireframe.cc/UpcjAh

Elementos clave del sitio:
- Inicio: Información general sobre el TDAH.
- Recursos: Guías y materiales educativos.
- Foros: Espacios para compartir experiencias y consejos.
- Herramientas: Aplicaciones y recursos interactivos.
- Contactos: Listado de profesionales y centros especializados.

# Desarrollamos la solución:
- Fase 1: Diseño del prototipo con herramientas digitales.
- Fase 2: Desarrollo del sitio web, integración de contenido educativo y recursos interactivos.
- Fase 3: Lanzamiento y promoción en redes sociales y comunidades locales.

Esta iniciativa puede ayudar a aumentar la concientización y proporcionar soporte crucial para quienes se enfrentan al TDAH en Buenos Aires. 

# Comportamientos aplicados en los archivos .js
El comportamiento que estamos implementando mediante el código JavaScript en el foro tiene como objetivo manejar la adición de nuevos comentarios por parte de los usuarios de manera dinámica sin necesidad de recargar la página.

Captura del evento de envío del formulario:
- Se utiliza document.getElementById('comment-form').addEventListener('submit', function(event) {...}) para añadir un event listener al formulario con el ID comment-form. Este listener captura el evento de "submit" (envío) del formulario.

Prevención del comportamiento predeterminado:
- La función event.preventDefault(); se llama inmediatamente al inicio de la función asociada al evento. Esto previene el comportamiento predeterminado del formulario, que sería enviar los datos al servidor y recargar la página. En su lugar, se va a manejar el envío dentro del propio navegador.

Extracción y validación de datos:
- Los valores del comentario y del nombre del autor se extraen de los campos de texto correspondientes (comment y author) utilizando document.getElementById('comment').value y document.getElementById('author').value. Luego, se valida que ambos campos no estén vacíos utilizando la función .trim(), que elimina los espacios en blanco al principio y al final de los textos. Si ambos campos contienen texto, se procede a agregar el nuevo comentario.

Creación y adición del nuevo comentario:
- Se selecciona el contenedor de los comentarios existente en la página mediante document.querySelector('.comments').
- Se crea un nuevo elemento <"div"> que representará el nuevo comentario, utilizando document.createElement('div').
- Se le asigna la clase CSS comment para mantener la consistencia de estilo.
- Dentro de este nuevo <"div">, se crean dos párrafos <"p">; uno para el autor (author) con la clase author, y otro para el comentario (comment).
- Se les asigna el texto correspondiente.
- Estos elementos se añaden al nuevo <"div"> que contiene el comentario, y finalmente este div se agrega al contenedor de comentarios (commentSection.appendChild(newComment)).

Limpieza del formulario:
- Una vez que el comentario ha sido añadido, se vacían los campos de texto del formulario (comment y author) para que el usuario pueda escribir otro comentario sin tener que borrar manualmente el contenido anterior.
