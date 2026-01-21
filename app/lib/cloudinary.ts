const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const BASE_URL = `https://res.cloudinary.com/${CLOUD_NAME}`;

interface AssetOptions {
  width?: number;
  format?: string;
  quality?: 'auto' | number;
}

export const buildUrl = (
  publicId: string,
  resourceType: 'image' | 'video' | 'raw' | 'pdf' = 'image',
  options?: AssetOptions
) => {
  const cloudinaryType = resourceType === 'pdf' ? 'image' : resourceType;

  if (resourceType === 'raw') {
    return `${BASE_URL}/raw/upload/${publicId}`;
  }

  if (options?.format === 'pdf') {
    return `${BASE_URL}/${cloudinaryType}/upload/${publicId}`;
  }

  const transformations: string[] = [];

  transformations.push(`f_${options?.format || 'auto'}`);
  transformations.push(`q_${options?.quality || 'auto'}`);

  if (options?.width) {
    transformations.push(`w_${options.width}`);
    transformations.push('c_limit');
  }

  return `${BASE_URL}/${cloudinaryType}/upload/${transformations.join(',')}/${publicId}`;
};

export const buildBlurUrl = (
  publicId: string,
  resourceType: 'image' | 'video' | 'pdf' = 'image'
) => {
  const type = resourceType === 'video' ? 'video' : 'image';

  // w_20: Tiny width (approx 20px)
  // e_blur:1000: Maximum blur
  // q_auto:low: Low quality (small file size)
  // f_auto: Optimal format (usually WebP/AVIF)
  return `${BASE_URL}/${type}/upload/w_20,e_blur:1000,q_auto:low,f_auto/${publicId}`;
};
