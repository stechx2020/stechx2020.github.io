#  Sebastián Castañeda — Personal CV & PhD Research Web

Sitio web personal y portafolio de investigación para solicitud de **Doctorado (Ph.D.)** en Robótica, Control Automático, Sistemas Inteligentes y Materiales de Industria 4.0.

Alojado de forma nativa e impulsado por **GitHub Pages**.

---

## ¿Cómo publicar tu web en GitHub Pages (Paso a Paso)?

Como la web está desarrollada con HTML5, CSS3 modular y datos en JavaScript puro, **no requiere ningún proceso de compilación ni configuración compleja**.

### Paso 1: Inicializar Git y subir a GitHub
Abre la terminal en la carpeta de este proyecto (`c:\Users\sebas\OneDrive\Escritorio\PhD\Web CV`) y ejecuta:

```bash
git init
git add .
git commit -m "Initial commit - PhD Research CV Website"
git branch -M main
git remote add origin https://github.com/TU_USUARIO_GITHUB/NOMBRE_DE_TU_REPOSITO.git
git push -u origin main
```

*(Nota: Reemplaza `TU_USUARIO_GITHUB` y `NOMBRE_DE_TU_REPOSITO` con tus datos reales de GitHub).*

### Paso 2: Activar GitHub Pages (Gratis)
1. Entra a tu repositorio en **GitHub.com**.
2. Haz clic en **Settings** (Configuración) ⚙️.
3. En el menú lateral izquierdo, haz clic en **Pages**.
4. En la sección **Build and deployment** > **Source**, selecciona **Deploy from a branch**.
5. En **Branch**, selecciona `main` y carpeta `/ (root)`.
6. Haz clic en **Save** (Guardar).

¡Listo! En 1-2 minutos tu página estará en vivo en una URL como:
`https://tu-usuario.github.io/nombre-de-tu-repositorio/`

---

##  ¿Cómo hacer cambios y actualizar tu información fácilmente?

**¡No necesitas tocar código HTML ni CSS para agregar o actualizar tus datos!**

Toda la información del sitio está centralizada en el archivo:
📁 **[`js/data.js`](file:///c:/Users/sebas/OneDrive/Escritorio/PhD/Web%20CV/js/data.js)**

### Ejemplo: Para agregar un nuevo proyecto o publicación
1. Abre `js/data.js`.
2. Busca la sección `projects:` o `publications:`.
3. Añade la nueva información siguiendo el formato de las entradas existentes.
4. Guarda y sube los cambios a GitHub:
   ```bash
   git add .
   git commit -m "Update publications and new project"
   git push
   ```
GitHub Pages actualizará automáticamente tu sitio web en vivo.

---

## 🌐 Configurar un Dominio Personalizado en el Futuro

Cuando tengas tu propio dominio (ej. `sebastiancastaneda.com` o `castaneda-robotics.org`):
1. En GitHub Pages (Settings > Pages), escribe tu dominio en el campo **Custom domain**.
2. En tu proveedor de dominios (ej. Namecheap, GoDaddy, Cloudflare), crea los registros DNS correspondientes:
   - Registro `CNAME` apuntando a `tu-usuario.github.io`
   - O registros `A` apuntando a las IPs de GitHub:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`

---

## 🖨️ Exportar CV a PDF

El sitio cuenta con estilos integrados para impresión (`@media print`). Cualquier profesor, reclutador o laboratorio de doctorado puede hacer clic en el botón **Export PDF** de la barra de navegación para descargar un documento PDF impecable con tu curriculum.
