# CursorFlorka1 SaaS Platform

Una plataforma SaaS moderna y escalable construida con React, Node.js, TypeScript y PostgreSQL. Esta aplicación proporciona un sistema completo de autenticación de usuarios, gestión de proyectos y panel de administración.

**🔄 Este es un clon completo del proyecto Florka SaaS Platform con configuraciones modificadas para evitar conflictos de puertos.**

## 🚀 Características Principales

### Autenticación y Autorización
- ✅ Registro de usuarios con validación de email
- ✅ Inicio de sesión seguro con JWT
- ✅ Gestión de sesiones con refresh tokens
- ✅ Protección de rutas basada en roles
- ✅ Panel de administración con permisos especiales

### Gestión de Proyectos
- ✅ Crear, editar y eliminar proyectos
- ✅ Control de visibilidad (público/privado)
- ✅ Estados de proyecto (borrador/publicado/archivado)
- ✅ Búsqueda y filtrado avanzado
- ✅ Paginación optimizada

### Panel de Administración
- ✅ Dashboard con estadísticas en tiempo real
- ✅ Gestión completa de usuarios
- ✅ Administración de proyectos
- ✅ Control de estados y permisos

### Seguridad y Buenas Prácticas
- ✅ Hasheo de contraseñas con bcrypt
- ✅ Validación de entrada con Zod
- ✅ Rate limiting en endpoints críticos
- ✅ Headers de seguridad con Helmet
- ✅ Variables de entorno para configuración sensible

## 🛠️ Stack Tecnológico

### Frontend
- **React 18+** con TypeScript
- **Vite** como bundler
- **Tailwind CSS** para estilos
- **React Router** para navegación
- **Zustand** para gestión de estado
- **Axios** para llamadas HTTP

### Backend
- **Node.js** con TypeScript
- **Express.js** como framework web
- **Prisma** como ORM
- **PostgreSQL** como base de datos
- **JWT** para autenticación
- **bcrypt** para hasheo de contraseñas

### DevOps y Herramientas
- **Docker** y **Docker Compose** para contenerización
- **ESLint** y **Prettier** para calidad de código
- **Jest** y **Supertest** para testing del backend
- **Vitest** y **React Testing Library** para testing del frontend

## 🚀 Inicio Rápido

### Prerrequisitos
- Node.js 18+ 
- Docker y Docker Compose
- Git

### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/Herocku2/cursorflorka1.git
   cd cursorflorka1
   ```

2. **Configurar variables de entorno**
   ```bash
   # Backend
   cp backend/.env.example backend/.env
   # Editar backend/.env con tus configuraciones
   ```

3. **Levantar la aplicación con Docker**
   ```bash
   docker-compose up --build
   ```

4. **Acceder a la aplicación**
   - Frontend: http://localhost:5174
   - Backend API: http://localhost:3001
   - Base de datos: localhost:5433

### ⚠️ Diferencias con el Proyecto Original

**Puertos Modificados:**
- Frontend: `5174` (original: 5173)
- Backend: `3001` (original: 3000)
- PostgreSQL: `5433` (original: 5432)

**Nombres de Contenedores:**
- `cursorflorka1_frontend` (original: florka_frontend)
- `cursorflorka1_backend` (original: florka_backend)
- `cursorflorka1_postgres` (original: florka_postgres)

**Base de Datos:**
- Nombre: `cursorflorka1_db` (original: florka_db)
- Usuario: `cursorflorka1_user` (original: florka_user)
- Red: `cursorflorka1_network` (original: florka_network)
- Subnet: `172.21.0.0/16` (original: 172.20.0.0/16)

### Configuración Manual (Desarrollo)

Si prefieres ejecutar sin Docker:

1. **Instalar dependencias**
   ```bash
   # Backend
   cd backend
   npm install
   
   # Frontend
   cd ../frontend
   npm install
   ```

2. **Configurar base de datos**
   ```bash
   cd backend
   npx prisma migrate dev
   npx prisma generate
   ```

3. **Crear usuario administrador**
   ```bash
   cd backend
   node create-admin.js
   ```

4. **Ejecutar en modo desarrollo**
   ```bash
   # Terminal 1 - Backend (puerto 3001)
   cd backend
   PORT=3001 npm run dev
   
   # Terminal 2 - Frontend (puerto 5174)
   cd frontend
   npm run dev -- --port 5174
   ```

## 📁 Estructura del Proyecto

```
cursorflorka1/
├── backend/                 # API del servidor
│   ├── src/
│   │   ├── controllers/     # Lógica de controladores
│   │   ├── middleware/      # Middleware personalizado
│   │   ├── routes/         # Definición de rutas
│   │   ├── utils/          # Utilidades y validaciones
│   │   └── app.ts          # Configuración de Express
│   ├── prisma/             # Esquemas y migraciones de DB
│   ├── .env.example        # Variables de entorno de ejemplo
│   └── package.json
├── frontend/               # Aplicación React
│   ├── src/
│   │   ├── components/     # Componentes reutilizables
│   │   ├── contexts/       # Contextos de React
│   │   ├── hooks/          # Hooks personalizados
│   │   ├── pages/          # Páginas de la aplicación
│   │   ├── services/       # Servicios API
│   │   └── App.jsx         # Componente principal
│   └── package.json
├── docker-compose.yml      # Configuración de Docker (puertos modificados)
└── README.md              # Este archivo
```

## 🔧 Scripts Disponibles

### Backend
```bash
npm run dev          # Ejecutar en modo desarrollo
npm run build        # Compilar TypeScript
npm run start        # Ejecutar en producción
npm run test         # Ejecutar tests
npm run lint         # Linter ESLint
npm run db:migrate   # Ejecutar migraciones
npm run db:generate  # Generar cliente Prisma
```

### Frontend
```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build para producción
npm run preview      # Preview del build
npm run test         # Ejecutar tests
npm run lint         # Linter ESLint
```

## 🔐 Autenticación

### Usuario Administrador por Defecto
Al ejecutar el script `create-admin.js`, se crea un usuario administrador:
- **Email**: admin@florka.com
- **Contraseña**: admin123

### Endpoints de Autenticación
- `POST /api/auth/register` - Registro de usuario
- `POST /api/auth/login` - Inicio de sesión
- `POST /api/auth/admin/login` - Inicio de sesión de admin
- `GET /api/auth/profile` - Obtener perfil del usuario
- `POST /api/auth/logout` - Cerrar sesión

## 📊 API Endpoints

### Proyectos
- `GET /api/projects` - Listar proyectos
- `GET /api/projects/public` - Proyectos públicos
- `GET /api/projects/:id` - Obtener proyecto específico
- `POST /api/projects` - Crear proyecto (autenticado)
- `PUT /api/projects/:id` - Actualizar proyecto (propietario)
- `DELETE /api/projects/:id` - Eliminar proyecto (propietario)

### Administración
- `GET /api/admin/dashboard/stats` - Estadísticas del dashboard
- `GET /api/admin/users` - Gestión de usuarios
- `GET /api/admin/projects` - Gestión de proyectos
- `PUT /api/admin/users/:id/status` - Cambiar estado de usuario
- `DELETE /api/admin/users/:id` - Eliminar usuario

## 🐳 Docker

### Comandos Útiles
```bash
# Levantar todos los servicios
docker-compose up -d

# Ver logs
docker-compose logs -f

# Reconstruir imágenes
docker-compose up --build

# Parar servicios
docker-compose down

# Limpiar volúmenes
docker-compose down -v
```

### Servicios Docker (Puertos Modificados)
- **frontend**: React app (puerto 5174)
- **backend**: Node.js API (puerto 3001)
- **postgres**: Base de datos PostgreSQL (puerto 5433)

## 🔒 Seguridad

### Medidas Implementadas
- Hasheo de contraseñas con bcrypt (salt rounds: 12)
- JWT con expiración y refresh tokens
- Rate limiting en endpoints de autenticación
- Validación de entrada con Zod
- Headers de seguridad con Helmet
- CORS configurado apropiadamente
- Variables de entorno para secretos

### Variables de Entorno Críticas
```env
JWT_SECRET=cursorflorka1_jwt_secret_muy_seguro
JWT_REFRESH_SECRET=cursorflorka1_refresh_secret_muy_seguro
DATABASE_URL=postgresql://cursorflorka1_user:cursorflorka1_password@localhost:5433/cursorflorka1_db
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Estándares de Código
- Usar TypeScript para nuevas funcionalidades
- Seguir las reglas de ESLint configuradas
- Escribir tests para nuevas funcionalidades
- Documentar funciones complejas
- Usar commits descriptivos

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🆘 Soporte

### Problemas Comunes

**Error de conexión a la base de datos**
```bash
# Verificar que PostgreSQL esté ejecutándose
docker-compose ps

# Reiniciar servicios
docker-compose restart
```

**Problemas con migraciones**
```bash
# Resetear base de datos
cd backend
npx prisma migrate reset
npx prisma migrate dev
```

**Puerto ya en uso**
```bash
# Los puertos están configurados para no chocar:
# Frontend: 5174, Backend: 3001, PostgreSQL: 5433
```

### Contacto
- **Desarrollador**: Cognos (Agente Desarrollador Full-Stack Senior)
- **Repositorio Original**: https://github.com/Herocku2/florka-saas-platform
- **Repositorio Clon**: https://github.com/Herocku2/cursorflorka1
- **Issues**: https://github.com/Herocku2/cursorflorka1/issues

---

**¡Gracias por usar CursorFlorka1 SaaS Platform!** 🚀

Este proyecto es un clon completo que demuestra las mejores prácticas en desarrollo full-stack moderno, con un enfoque en seguridad, escalabilidad y mantenibilidad.