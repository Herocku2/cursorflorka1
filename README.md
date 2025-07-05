# 🚀 CursorFlorka1 SaaS Platform

**CursorFlorka1** es un clon completo de la plataforma SaaS Florka, construida con tecnologías modernas y configurada con puertos únicos para evitar conflictos con el proyecto original.

## 📋 Descripción del Proyecto

Esta es una aplicación web SaaS completa que incluye:
- Sistema de autenticación de usuarios
- Gestión de proyectos
- Panel de administración
- API RESTful robusta
- Interfaz de usuario moderna y responsiva

## 🛠️ Stack Tecnológico

### Frontend
- **React 18+** con TypeScript
- **Vite** como bundler
- **Tailwind CSS** para estilos
- **React Router** para navegación
- **Zustand** para gestión de estado
- **Axios** para peticiones HTTP

### Backend
- **Node.js** con TypeScript
- **Express.js** como framework
- **Prisma** como ORM
- **PostgreSQL** como base de datos
- **JWT** para autenticación
- **bcrypt** para hash de contraseñas

### DevOps
- **Docker** y **Docker Compose**
- **ESLint** y **Prettier**
- **Jest** y **Vitest** para testing

## 🔧 Configuración de Puertos (Modificados)

Para evitar conflictos con el proyecto original, CursorFlorka1 utiliza puertos diferentes:

| Servicio | Puerto Original | Puerto CursorFlorka1 |
|----------|----------------|----------------------|
| Frontend | 5173 | **5174** |
| Backend | 3000 | **3001** |
| PostgreSQL | 5432 | **5433** |

## 🚀 Instalación y Ejecución

### Prerrequisitos
- Docker y Docker Compose instalados
- Git

### Pasos de Instalación

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
- **Frontend:** http://localhost:5174
- **Backend API:** http://localhost:3001
- **Health Check:** http://localhost:3001/health

## 🔐 Credenciales por Defecto

### Usuario Administrador
- **Email:** admin@cursorflorka1.com
- **Contraseña:** admin123

⚠️ **Importante:** Cambiar estas credenciales en producción.

## 📁 Estructura del Proyecto

```
cursorflorka1/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── routes/
│   │   ├── utils/
│   │   └── app.ts
│   ├── prisma/
│   │   └── schema.prisma
│   ├── Dockerfile
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── contexts/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── utils/
│   ├── Dockerfile
│   └── package.json
├── docker-compose.yml
├── api-collection.postman.json
└── README.md
```

## 🔌 API Endpoints

### Autenticación
- `POST /api/auth/register` - Registro de usuario
- `POST /api/auth/login` - Inicio de sesión
- `POST /api/auth/admin/login` - Inicio de sesión admin
- `GET /api/auth/profile` - Perfil del usuario
- `POST /api/auth/logout` - Cerrar sesión

### Proyectos
- `GET /api/projects` - Listar proyectos
- `POST /api/projects` - Crear proyecto
- `GET /api/projects/:id` - Obtener proyecto
- `PUT /api/projects/:id` - Actualizar proyecto
- `DELETE /api/projects/:id` - Eliminar proyecto

### Administración
- `GET /api/admin/dashboard` - Dashboard admin
- `GET /api/admin/users` - Gestión de usuarios
- `GET /api/admin/projects` - Gestión de proyectos

## 🧪 Testing

### Backend
```bash
cd backend
npm test
npm run test:coverage
```

### Frontend
```bash
cd frontend
npm test
npm run test:coverage
```

## 📊 Colección de Postman

El archivo `api-collection.postman.json` contiene una colección completa de Postman con todos los endpoints configurados para el puerto 3001.

### Variables de Entorno en Postman:
- `base_url`: http://localhost:3001
- `access_token`: (se establece automáticamente tras login)

## 🔒 Seguridad

- Contraseñas hasheadas con bcrypt
- Autenticación JWT con tokens de acceso y refresh
- Validación de entrada con Zod
- Rate limiting implementado
- Headers de seguridad con Helmet
- CORS configurado

## 🌐 Variables de Entorno

### Backend (.env)
```env
DATABASE_URL="postgresql://cursorflorka1_user:cursorflorka1_password@postgres:5432/cursorflorka1_db?schema=public"
JWT_SECRET="cursorflorka1_jwt_secret_key_2024"
JWT_REFRESH_SECRET="cursorflorka1_jwt_refresh_secret_key_2024"
JWT_EXPIRES_IN="24h"
JWT_REFRESH_EXPIRES_IN="7d"
PORT=3001
CORS_ORIGIN="http://localhost:5174"
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
ADMIN_EMAIL="admin@cursorflorka1.com"
ADMIN_PASSWORD="admin123"
BCRYPT_SALT_ROUNDS=12
LOG_LEVEL="info"
```

## 🐳 Docker

### Servicios Configurados

1. **PostgreSQL** (puerto 5433)
   - Base de datos: cursorflorka1_db
   - Usuario: cursorflorka1_user
   - Contraseña: cursorflorka1_password

2. **Backend** (puerto 3001)
   - Node.js con TypeScript
   - Auto-restart en desarrollo

3. **Frontend** (puerto 5174)
   - React con Vite
   - Hot reload habilitado

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

## 🔄 Diferencias con el Proyecto Original

### Puertos Modificados
- Frontend: 5173 → **5174**
- Backend: 3000 → **3001**
- PostgreSQL: 5432 → **5433**

### Configuraciones Actualizadas
- Base de datos: `cursorflorka1_db`
- Contenedores: nombres únicos con prefijo `cursorflorka1`
- Variables de entorno: valores únicos para evitar conflictos
- Admin email: `admin@cursorflorka1.com`

## 📝 Desarrollo

### Comandos de Desarrollo

```bash
# Instalar dependencias backend
cd backend && npm install

# Instalar dependencias frontend
cd frontend && npm install

# Ejecutar migraciones de Prisma
cd backend && npx prisma migrate dev

# Generar cliente Prisma
cd backend && npx prisma generate

# Ejecutar en modo desarrollo (sin Docker)
cd backend && npm run dev
cd frontend && npm run dev
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🆘 Soporte

Si encuentras algún problema o tienes preguntas:

1. Revisa la documentación
2. Busca en los issues existentes
3. Crea un nuevo issue si es necesario

## 🎯 Roadmap

- [ ] Implementar tests E2E
- [ ] Añadir CI/CD pipeline
- [ ] Implementar notificaciones en tiempo real
- [ ] Añadir soporte para múltiples idiomas
- [ ] Implementar sistema de roles avanzado

---

**CursorFlorka1** - Una plataforma SaaS moderna y escalable 🚀

*Desarrollado con ❤️ usando las mejores prácticas de desarrollo*