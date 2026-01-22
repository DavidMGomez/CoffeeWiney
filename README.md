# Coffee Winey Varsovia S.A.S.

Landing page profesional para proyecto de café especial presentado al Fondo Emprender SENA.

## Sobre el Proyecto

**Coffee Winey Varsovia S.A.S.** es un emprendimiento dedicado a la producción de café especial con perfil winey en Isnos, Huila. Implementamos agricultura regenerativa y procesos de fermentación controlada desarrollados durante más de 6 años de investigación.

## Características de la Landing Page

- Diseño profesional enfocado en el sector cafetero
- Totalmente responsive (mobile-first)
- Construido con React 19 y TypeScript
- Optimizado para presentación a evaluadores del SENA
- Secciones específicas para el pitch empresarial
- Estilos temáticos con colores café y tierra

## Estructura del Proyecto

```
src/
├── components/
│   ├── Hero.tsx              # Landing principal con información del proyecto
│   ├── About.tsx             # Quiénes somos e información institucional
│   ├── Features.tsx          # Agricultura Regenerativa (diferenciador clave)
│   ├── CoffeeProfile.tsx     # Perfil sensorial del café winey
│   ├── Process.tsx           # Proceso productivo detallado
│   ├── Innovation.tsx        # Innovación tecnológica
│   ├── Markets.tsx           # Clientes y mercados objetivo
│   ├── SenaProject.tsx       # Proyecto empresarial para Fondo Emprender
│   └── Contact.tsx           # Formulario de contacto y ubicación
├── App.tsx                   # Componente principal
└── index.css                 # Estilos globales
```

## Contenido de las Secciones

### 1. Inicio (Hero)
- Nombre del emprendimiento
- Eslogan: "Café especial del Macizo Colombiano con agricultura regenerativa"
- Botones de navegación rápida

### 2. Quiénes Somos
- Historia del proyecto
- Experiencia en investigación (6+ años)
- Información institucional (SENA, Fondo Emprender)
- Ubicación: Isnos, Huila

### 3. Agricultura Regenerativa
- Recuperación de suelos
- Reducción de agroquímicos
- Manejo eficiente del agua
- Conservación ambiental
- Cero deforestación
- Reincorporación de pulpa

### 4. Perfil del Café
- Perfil sensorial winey (acidez, cuerpo, notas)
- Parámetros de calidad (SCAA ≥88)
- Variedades cultivadas

### 5. Proceso Productivo
- Recolección selectiva
- Fermentación controlada (24-60 horas)
- Secado especializado
- Empaque sostenible

### 6. Innovación Tecnológica
- Variedades resistentes
- Procesos diferenciados
- Selección óptica
- Trazabilidad

### 7. Clientes y Mercados
- Clientes actuales (SKN, Caravela, ECOM, etc.)
- Mercados objetivo (USA, Alemania, Japón, etc.)

### 8. Proyecto SENA
- Objetivos del proyecto
- Diferencial competitivo
- Impacto ambiental y social
- Métricas y apoyo institucional

### 9. Contacto
- Formulario de contacto
- Información de ubicación
- Datos del proyecto

## Desarrollo Local

### Requisitos Previos

- Node.js (versión 16 o superior)
- npm o yarn

### Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# El sitio estará disponible en http://localhost:5173
```

### Scripts Disponibles

```bash
npm run dev      # Inicia el servidor de desarrollo
npm run build    # Construye el proyecto para producción
npm run preview  # Previsualiza el build de producción
npm run lint     # Ejecuta el linter
npm run deploy   # Despliega a GitHub Pages
```

## Desplegar en GitHub Pages

### Configuración Inicial

1. **Crear repositorio en GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/landing-emprendimiento.git
   git push -u origin main
   ```

2. **Actualizar la configuración base** (si tu repositorio tiene otro nombre)

   Edita `vite.config.ts` y cambia el valor de `base`:
   ```typescript
   base: '/nombre-de-tu-repositorio/',
   ```

3. **Desplegar**
   ```bash
   npm run deploy
   ```

   Esto creará una rama `gh-pages` con el build y lo subirá a GitHub.

4. **Configurar GitHub Pages**
   - Ve a Settings > Pages en tu repositorio
   - En "Source", selecciona la rama `gh-pages`
   - Guarda los cambios

Tu sitio estará disponible en: `https://tu-usuario.github.io/landing-emprendimiento/`

### Despliegue Automático (Opcional)

El proyecto incluye un workflow de GitHub Actions que despliega automáticamente cuando haces push a la rama `main`. Para activarlo:

1. Ve a Settings > Actions > General
2. En "Workflow permissions", selecciona "Read and write permissions"
3. Guarda los cambios

Ahora cada push a `main` desplegará automáticamente tu sitio.

## Personalización

### Modificar Contenido

Edita los componentes en `src/components/` para cambiar:
- Textos y descripciones
- Colores y estilos (archivos `.css`)
- Estructura de las secciones

### Cambiar Colores

Los colores principales están definidos en los archivos CSS de cada componente. El gradiente principal usa:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Agregar Nuevas Secciones

1. Crea un nuevo componente en `src/components/`
2. Crea su archivo CSS correspondiente
3. Importa y usa el componente en `App.tsx`

## Tecnologías Utilizadas

- React 19
- TypeScript
- Vite
- CSS3 (Flexbox & Grid)
- gh-pages

## Próximos Pasos

Algunas ideas para mejorar tu landing page:

- Agregar animaciones con Framer Motion
- Integrar un formulario real con backend
- Agregar analytics (Google Analytics, etc.)
- Implementar SEO con React Helmet
- Agregar un blog o sección de noticias
- Integrar con un CMS headless

## Licencia

Este proyecto es de código abierto y está disponible para uso personal y comercial.
