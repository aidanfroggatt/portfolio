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
  // Cloudinary stores PDFs as "images" to allow preview generation.
  // We map 'pdf' -> 'image' for the URL, but keep 'pdf' in our logic for clarity.
  const cloudinaryType = resourceType === 'pdf' ? 'image' : resourceType;

  // 1. RAW FILES
  if (resourceType === 'raw') {
    return `${BASE_URL}/raw/upload/${publicId}`;
  }

  // 2. PDF DOWNLOAD / OPEN
  // If we explicitly request 'pdf' format, return the URL without transformations.
  // This serves the original file (which allows the browser's PDF viewer to work).
  if (options?.format === 'pdf') {
    return `${BASE_URL}/${cloudinaryType}/upload/${publicId}`;
  }

  // 3. TRANSFORMATIONS (Images, Video, PDF Previews)
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
  // Treat 'pdf' as 'image' for generating blurred placeholders
  const type = resourceType === 'video' ? 'video' : 'image';

  return `${BASE_URL}/${type}/upload/f_jpg,q_auto,w_20,e_blur:1000/${publicId}`;
};
