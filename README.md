# MEAN Empleados

Proyecto de ejemplo MEAN (MongoDB, Express, Angular, Node) para gestión de empleados.

## Backend
- Ruta: `backend/`
- Variables: `.env` con `PORT` y `MONGODB_URI`
- Scripts:
  ```bash
  cd backend
  npm install
  npm run dev
  ```
- Endpoints: `http://localhost:4000/api/employees`

## Frontend (Angular)
- Ruta: `frontend/`
- Scripts:
  ```bash
  cd frontend
  npm install
  npm start    # http://localhost:4200
  ```
- Proxy de desarrollo: `src/proxy.conf.json` apunta a `http://localhost:4000`

> Asegúrate de tener MongoDB ejecutándose localmente.