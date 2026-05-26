import type {TableroData} from '@site/src/components/TableroDigital/types';

export const gestionPerfil: TableroData = {
  componente: 'Gestión de Perfil',
  tarjetas: {
    'entradas-manuales': [
      {titulo: 'Formulario de Edición de Perfil', variante: 'mandatorio'},
      {titulo: 'Configuración de 2FA', variante: 'opcional'},
      {titulo: 'Cierre de Sesión Remota', variante: 'opcional'},
    ],
    'entradas-automaticas': [],
    'conceptos-datos': [
      {titulo: 'Usuario', variante: 'mandatorio'},
      {titulo: 'Sesión', variante: 'opcional'},
    ],
    'salidas-demanda': [
      {titulo: 'Datos del perfil', variante: 'mandatorio'},
      {titulo: 'Lista de Sesiones Activas', variante: 'opcional'},
    ],
    'salidas-automaticas': [
      {titulo: 'Email de Confirmación de Cambio', variante: 'opcional'},
      {titulo: 'Código de Verificación', variante: 'opcional'},
    ],
    'procesos-autonomos': [],
  },
};
