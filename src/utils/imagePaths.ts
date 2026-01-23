// Helper para obtener rutas de imágenes que funcionen en desarrollo y producción
export const getImagePath = (imageName: string): string => {
  const base = import.meta.env.BASE_URL || '/';
  return `${base}${imageName}`.replace(/\/\//g, '/');
};

