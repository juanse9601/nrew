// config.ts
import { createPool } from 'mysql2/promise';

export const pool = createPool({
    host: 'localhost',
    user: 'root', // Cambia esto según tu configuración
    password: '123456', // Cambia esto según tu configuración
    database: 'bcript', // Cambia esto según tu configuración
    port: 3306
});
