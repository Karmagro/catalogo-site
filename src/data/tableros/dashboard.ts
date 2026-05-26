import type {TableroData} from '@site/src/components/TableroDigital/types';

export const dashboard: TableroData = {
  componente: 'Dashboard',
  tarjetas: {
    'entradas-manuales': [],
    'entradas-automaticas': [],
    'conceptos-datos': [
      {titulo: 'Productos', variante: 'mandatorio'},
      {titulo: 'Ventas', variante: 'mandatorio'},
    ],
    'salidas-demanda': [
      {titulo: 'Gráfico líneas', subtitulo: 'Ventas por día/semana/mes', variante: 'mandatorio'},
      {titulo: 'Gráfico de barras', subtitulo: 'Stock de productos', variante: 'mandatorio'},
      {titulo: 'Exportación de gráficos', variante: 'opcional'},
    ],
    'procesos-autonomos': [
      {titulo: 'Cálculo de métricas ventas', variante: 'mandatorio'},
      {titulo: 'Cálculo de métricas productos', variante: 'mandatorio'},
    ],
    'salidas-automaticas': [],
  },
};
