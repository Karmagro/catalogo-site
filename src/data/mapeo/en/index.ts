/**
 * Nombre en inglés de cada componente, por slug. Es lo único del mapeo que cambia
 * con el idioma: los vínculos con las secciones se declaran una sola vez, en
 * src/data/mapeo/index.ts. La página «By Section» en inglés pasa este diccionario
 * a <MatrizMapeo nombres={…} /> y <ResumenSeccion nombres={…} />.
 *
 * Cada nombre debe ser igual al H1 de la ficha en inglés (`npm run verificar` lo
 * comprueba) y al de i18n/GLOSARIO.md.
 */
export const NOMBRES: Record<string, string> = {
  'formulario-login': 'Login Form',
  'login-biometrico': 'Biometric Login',
  'autenticacion-api': 'API Authentication',
  'creador-cuenta': 'Account Creation',
  'gestion-perfil': 'Profile Management',
  'mantenedor': 'Data Manager',
  'formulario-carga': 'Submission Form',
  'workflow-aprobacion': 'Approval Workflow',
  'dashboard': 'Dashboard',
  'sistema-notificacion': 'Notification System',
  'etl': 'ETL',
  'scraper': 'Scraper',
  'proceso-programado': 'Scheduled Process',
  'proceso-reactivo': 'Reactive Process',
  'consultas': 'Queries',
  'reporte': 'Report',
  'mapa-interactivo': 'Interactive Map',
  'log-auditoria': 'Audit Log',
  'servicio-expuesto': 'Exposed Service',
  'consumo-servicio-externo': 'External Service Consumption',
  'autorizacion': 'Authorization',
  'base-datos': 'Database',
};
