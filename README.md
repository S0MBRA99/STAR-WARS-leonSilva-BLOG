# 🚀 Guía Completa: React + Vite + Router + Context

## 📋 Pasos para crear un proyecto React con múltiples páginas

### 1. 🗂️ Crear repositorio en GitHub
- Crear nuevo repositorio en GitHub
- Añadir README.md si es necesario

### 2. 📥 Clonar el repositorio
```bash
git clone [URL_DE_TU_REPO]
```

### 3. 📁 Navegar al proyecto
```bash
cd [NOMBRE_DEL_PROYECTO]
```

### 4. ⚡ Crear plantilla con Vite
```bash
npm create vite@latest
```
**Opciones a seleccionar:**
- Framework: **React**
- Lenguaje: **JavaScript + SWC**

> 💡 **Nota:** SWC es un compilador escrito en Rust que es más rápido que esbuild (escrito en Go) que usa Vite por defecto.

### 5. 🛠️ Instalar dependencias y levantar el proyecto
```bash
cd my-app
npm install
npm run dev
```

### 6. 📦 Instalar dependencias adicionales
```bash
# React Router para navegación entre páginas
npm install react-router-dom

# Bootstrap para estilos
npm install bootstrap
```

### 7. 🏗️ Crear estructura de carpetas
```
src/
├── assets/          # Imágenes, íconos, etc.
├── components/      # Componentes reutilizables (Navbar, Footer)
├── hooks/          # StoreProvider.jsx (Context API)
└── pages/          # Páginas de la aplicación
```

### 8. 🎨 Importar estilos en main.jsx
```jsx
// CSS de Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
// JavaScript de Bootstrap (para componentes interactivos)
import "bootstrap/dist/js/bootstrap.bundle.min.js"
// CSS personalizado
import './index.css'
```

### 9. 🛤️ Crear archivo de rutas (routes.jsx)
```jsx
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import EditContact from './pages/EditContact'
import AddContact from './pages/AddContact'
import NotFound from './pages/NotFound'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/Edit-Contact" element={<EditContact />} />
      <Route path="/Add-Contact" element={<AddContact />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)
```

> 📌 **Explicación:**
> - `createBrowserRouter`: Función principal para manejar las rutas
> - `Route index`: Indica la página principal (landing page)
> - `Route path="*"`: Página 404 para rutas no encontradas
> - `Layout`: Componente padre que contiene la estructura común

### 10. 🏠 Crear componente Layout
```jsx
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
```

> 🔧 **¿Qué hace `<Outlet />`?**
> Es el componente de react-router-dom que renderiza la página actual según la ruta. Se posiciona donde queremos que aparezca el contenido dinámico.

### 11. 🌐 Crear StoreProvider para variables globales
```jsx
// hooks/StoreProvider.jsx
import { createContext, useContext, useState } from "react"

const StoreContext = createContext()

export function StoreProvider({ children }) {
  // Variables globales de ejemplo
  const [userName, setUserName] = useState("")
  const [contacts, setContacts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  
  return (
    <StoreContext.Provider value={{
      userName, setUserName,
      contacts, setContacts,
      isLoading, setIsLoading
    }}>
      {children}
    </StoreContext.Provider>
  )
}

export function useStore() {
  return useContext(StoreContext)
}
```

> 💡 **¿Para qué sirve?**
> - Compartir estados entre componentes sin prop drilling
> - Manejar datos globales de la aplicación
> - Evitar pasar props a través de múltiples niveles

### 12. ⚙️ Configurar main.jsx
```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { StoreProvider } from './hooks/StoreProvider'
import { router } from './routes'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoreProvider>
      <RouterProvider router={router} />
    </StoreProvider>
  </React.StrictMode>
)
```

> 🔄 **Flujo de la aplicación:**
> 1. `StoreProvider` envuelve toda la app con variables globales
> 2. `RouterProvider` maneja la navegación y rutas
> 3. `Layout` proporciona la estructura común
> 4. `Outlet` renderiza la página actual

### 13. 🔗 Navegación entre páginas
Para navegar entre páginas, usa el componente `Link`:

```jsx
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/Add-Contact">Añadir Contacto</Link>
      <Link to="/Edit-Contact">Editar Contacto</Link>
    </nav>
  )
}
```

### 14. 📄 Usar variables globales en componentes
```jsx
// En cualquier página o componente
import { useStore } from '../hooks/StoreProvider'

function Home() {
  const { userName, setUserName, contacts } = useStore()
  
  return (
    <div>
      <h1>Bienvenido {userName}</h1>
      <p>Tienes {contacts.length} contactos</p>
    </div>
  )
}
```

---

## 🎯 Comandos útiles

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build
npm run preview
```

---

## ✅ Lista de verificación

- [ ] Repositorio creado y clonado
- [ ] Proyecto Vite inicializado
- [ ] Dependencias instaladas (react-router-dom, bootstrap)
- [ ] Estructura de carpetas creada
- [ ] Rutas configuradas
- [ ] Layout creado con Outlet
- [ ] StoreProvider configurado
- [ ] main.jsx configurado correctamente
- [ ] Navegación implementada

---

## 🚨 Errores comunes

1. **Olvidar importar Outlet** en Layout.jsx
2. **No envolver con StoreProvider** en main.jsx
3. **Usar rutas incorrectas** en los Links
4. **No instalar bootstrap** antes de importarlo
5. **Olvidar exportar** los componentes

---

¡Con esta guía tendrás un proyecto React completamente funcional con múltiples páginas y gestión de estado global! 🎉