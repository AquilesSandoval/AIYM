# AIYM - All In Your Mind

## Estructura del Proyecto

Este proyecto ha sido reestructurado para optimizar la organización de archivos y facilitar la navegación entre páginas.

### Estructura de Directorios

```
/AIYM
├── assets/
│   ├── global/           # Recursos compartidos entre todas las páginas
│   │   ├── navigation.css
│   │   ├── navigation.js
│   │   └── [archivos comunes JS/CSS/imágenes]
│   ├── inicio/           # Recursos específicos de la página Inicio
│   ├── formacion/        # Recursos específicos de la página Formación
│   ├── metodologia/      # Recursos específicos de la página Metodología
│   ├── filiales/         # Recursos específicos de la página Filiales
│   ├── eventos/          # Recursos específicos de la página Eventos
│   ├── contacto/         # Recursos específicos de la página Contacto
│   ├── app/              # Recursos específicos de la página App
│   └── tienda/           # Recursos específicos de la página Tienda
├── INICIO _ AIYM.html
├── FORMACIÓN _ AIYM.html
├── METODOLOGÍA _ AIYM.html
├── FILIALES _ AIYM.html
├── EVENTOS _ AIYM.html
├── CONTACTO _ AIYM.html
├── APP _ AIYM.html
└── TIENDA _ AIYM.html
```

### Menú de Navegación

Todas las páginas HTML incluyen un menú de navegación unificado que permite:

- Acceso rápido a todas las secciones del sitio
- Destacado visual de la página actual
- Diseño responsive que se adapta a dispositivos móviles
- Animaciones fluidas al abrir/cerrar el menú

#### Características del Menú:

- **Ubicación**: Esquina superior derecha (posición fija)
- **Activación**: Click en el botón "Menú"
- **Cierre**: Click fuera del menú o tecla ESC
- **Secciones disponibles**: Inicio, Formación, Metodología, Filiales, Eventos, Contacto, App, Tienda

### Organización de Assets

Los archivos estáticos han sido organizados en la carpeta `assets/` siguiendo estos criterios:

1. **assets/global/**: Contiene todos los archivos que son compartidos entre múltiples páginas (librerías JS, CSS comunes, imágenes reutilizadas)

2. **assets/[seccion]/**: Cada sección tiene su propia carpeta con recursos específicos que solo se utilizan en esa página

### Páginas del Sitio

- **Inicio**: Página principal del sitio
- **Formación**: Información sobre programas de formación
- **Metodología**: Descripción de la metodología utilizada
- **Filiales**: Información sobre filiales y ubicaciones
- **Eventos**: Calendario y detalles de eventos
- **Contacto**: Formulario y datos de contacto
- **App**: Información sobre la aplicación móvil
- **Tienda**: Catálogo de productos y servicios

### Notas Técnicas

- Los archivos HTML mantienen la estructura generada por Wix con estilos y scripts inline necesarios para su funcionamiento
- Los archivos en las carpetas `*_files/` originales se mantienen como respaldo
- El sistema de navegación es independiente y no interfiere con el código existente de Wix

### Mantenimiento

Para añadir una nueva página al menú de navegación:

1. Editar `assets/global/navigation.css` si se necesitan estilos adicionales
2. Añadir el enlace correspondiente en cada archivo HTML dentro del elemento `<nav class="aiym-nav-menu">`
3. El script `assets/global/navigation.js` detectará automáticamente la página activa
