import type {TableroData} from '@site/src/components/TableroDigital/types';

export const formularioCarga: TableroData = {
  componente: 'Formulario de carga',
  tarjetas: {
    'actualizacion-manual': [
      {titulo: 'Solicitud de Beca', variante: 'mandatorio'},
    ],
    'actualizacion-automatica': [],
    'conceptos-datos': [
      {titulo: 'Postulación', variante: 'mandatorio'},
    ],
    'salidas-demanda': [],
    'salidas-automaticas': [
      {titulo: 'Confirmación de envío por correo', variante: 'opcional'},
    ],
    'procesos-autonomos': [],
  },
};
