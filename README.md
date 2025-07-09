# 🚀 Florka1 SaaS Platform

Florka1 es una plataforma SaaS completa construida con React, desarrollada originalmente con Anima y mejorada con funcionalidades modernas.

## 📋 Descripción del Proyecto

Esta es una aplicación web completa que incluye:

- Interfaz de usuario moderna y responsiva con React
- Componentes reutilizables y modulares
- Sistema de navegación con React Router
- Storybook para documentación de componentes
- Configuración Docker para desarrollo

## 🛠️ Stack Tecnológico

### Frontend
- **React 18+** - Biblioteca de interfaz de usuario
- **React Router DOM** - Navegación y enrutamiento
- **Vite** - Bundler y servidor de desarrollo
- **Storybook** - Documentación de componentes
- **PropTypes** - Validación de tipos

### DevOps
- **Docker** y **Docker Compose** - Contenerización
- **Vite** - Servidor de desarrollo rápido

## 🔧 Configuración de Puertos

Para evitar conflictos con otros proyectos, Florka1 utiliza puertos específicos:

| Servicio | Puerto |
|----------|--------|
| Frontend | 5175 |
| PostgreSQL | 5434 |
| Storybook | 6006 |

## 🚀 Instalación y Ejecución

### Prerrequisitos
- Docker y Docker Compose instalados
- Node.js 18+ (para desarrollo local)
- Git

### Opción 1: Con Docker (Recomendado)

1. **Clonar el repositorio:**
```bash
git clone https://github.com/Herocku2/cursorflorka1.git
cd cursorflorka1
```

2. **Ejecutar con Docker Compose:**
```bash
docker-compose up --build
```

3. **Acceder a la aplicación:**
- Frontend: http://localhost:5175
- Storybook: http://localhost:6006

### Opción 2: Desarrollo Local

1. **Instalar dependencias:**
```bash
npm install
```

2. **Ejecutar en modo desarrollo:**
```bash
npm run dev
```

3. **Ejecutar Storybook:**
```bash
npm run storybook
```

4. **Construir para producción:**
```bash
npm run build
```

## 📁 Estructura del Proyecto

```
florka1/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── BanerDetelleToken/
│   │   ├── BanerMovil/
│   │   ├── Boton/
│   │   ├── Heder/
│   │   ├── Menu/
│   │   └── ...
│   ├── screens/             # Pantallas/Páginas principales
│   │   ├── Create/
│   │   ├── Home*/
│   │   ├── Publish/
│   │   ├── Vote/
│   │   └── ...
│   ├── icons/               # Iconos y logos
│   ├── App.jsx             # Componente principal
│   └── index.jsx           # Punto de entrada
├── static/
│   ├── img/                # Imágenes estáticas
│   └── _redirects          # Configuración de redirects
├── .storybook/             # Configuración de Storybook
├── estrella/               # Assets específicos
├── docker-compose.yml      # Configuración Docker
├── Dockerfile.frontend     # Dockerfile para frontend
├── package.json           # Dependencias y scripts
├── vite.config.js         # Configuración de Vite
└── README.md              # Este archivo
```

## 🎨 Componentes Principales

### Componentes de UI
- **Boton/BotonSOL** - Botones personalizados
- **Heder** - Encabezado de la aplicación
- **Menu/MenuTabla** - Sistemas de navegación
- **TarjetaProyectos/TarjetaRanking** - Cards de contenido

### Pantallas
- **HomeAll/HomeNew/HomeNext** - Pantallas de inicio
- **Create/Publish** - Creación y publicación
- **Vote** - Sistema de votación
- **Swap** - Intercambio de tokens

## 📚 Storybook

Para ver la documentación de componentes:

```bash
npm run storybook
```

Accede a: http://localhost:6006

## 🐳 Docker

### Servicios Configurados

1. **PostgreSQL (puerto 5434)**
   - Base de datos: `florka1_db`
   - Usuario: `florka1_user`
   - Contraseña: `florka1_password`

2. **Frontend (puerto 5175)**
   - React con Vite
   - Hot reload habilitado
   - Healthcheck configurado

### Comandos Docker Útiles

```bash
# Construir y ejecutar
docker-compose up --build

# Ejecutar en segundo plano
docker-compose up -d

# Ver logs
docker-compose logs -f

# Parar servicios
docker-compose down

# Limpiar volúmenes
docker-compose down -v
```

## 🔄 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construir para producción
- `npm run storybook` - Ejecutar Storybook
- `npm run build-storybook` - Construir Storybook

## 🌟 Características

- ✅ Interfaz moderna y responsiva
- ✅ Componentes modulares y reutilizables
- ✅ Documentación con Storybook
- ✅ Configuración Docker completa
- ✅ Hot reload en desarrollo
- ✅ Optimización con Vite
- ✅ Puertos únicos para evitar conflictos

## 📝 Desarrollo

Este proyecto fue generado originalmente por [Anima](https://animaapp.com/) y ha sido mejorado con:

- Configuración Docker personalizada
- Puertos únicos para desarrollo paralelo
- Documentación completa
- Estructura de proyecto optimizada

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

---

**Desarrollado con ❤️ usando React y Vite**