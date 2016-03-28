#Readme para angular-lazy-load

## Antes de empezar
### node y npm
Primero lo primero, es necesario tener instalado npm. Para verificar si se encuentra instalado puedes abrir una consola
de comandos y escribir el siguiente comando:
> npm -v

y nos debe mostrar la versión instalada de npm, algo así:   

> C:\bin\wamp\www\angular-lazy-load>npm -v  
3.7.3
 
En caso de no estar instalado haremos lo siguiente. Vamos a la pagina oficial de [npm](https://nodejs.org/en/), 
una vez descargado procedemos a instalarlo. La instalación es sencilla, es solo dar siguiente siguiente hasta terminar y listo
ya tendremos **node** y **npm** en la pc. Verificamos que se ha instalado correctamente con el comando ***npm -v***

Una vez instalado npm, podemos utilizarlo para instalar algunas otrar herramientas que utilizaremos luego.

### gulp
Una de estas herramientas es gulp, podemos verificar si se encuentra instalada haciendo uso del siguiente comando:
> gulp -v

Esto debe mostrarnos la versión instalada de gulp en el caso que se encuentre correctamente instalada, en caso que no se 
encuentre instalada, vamos a utilizar npm para instalarla.

> npm install gulp -g

De esta manera instalamos gulp de forma global para poder utilizarlo en cualquier momento.

### angular-lazy-load
Ya que verificamos que tengamos instalado npm y gulp, vamos a utilizar npm para instalar los plugins necesarios para la
compilación de este módulo. Abrimos una consola de comandos y nos dirigimos a la raiz de la carpeta del proyecto, desde
ahí ejecutaremos todos los comandos.

El primiero a instalar es gulp, pero esta vez de forma local (antes lo habíamos instalado de forma global), para eso usamos
el siguiente comando:
> npm install gulp --save-dev

Ya que tengamos gulp instalado localmente, vamos a instalar los plugins de gulp que necesitaremos, para ello escribiremos
el siguiente comando:
> npm install --save-dev gulp-usemin gulp-uglify gulp-html-minify gulp-replace
