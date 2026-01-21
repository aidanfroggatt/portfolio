import { Link } from '@remix-run/react';
import { CSSProperties } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import type { Asset } from '~/db/schema';
import { buildBlurUrl, buildUrl } from '~/lib/cloudinary';
import { hexToRGBA } from '~/lib/color';
import { Button } from '../ui/button';
import VideoWithAutoplay from '../VideoWithAutoplay';

interface WorkAssetProps {
  publicId: Asset['publicId'];
  resourceType: Asset['resourceType'] | 'pdf';
  alt: Asset['alt'];
  color?: string;
  className?: string;
}

const WorkAsset = ({ publicId, resourceType, alt, color, className }: WorkAssetProps) => {
  const blurUrl = buildBlurUrl(publicId, resourceType === 'raw' ? 'image' : resourceType);

  const commonStyle: CSSProperties = {
    ...(color ? { '--project-color': hexToRGBA(color, 0.4) } : {}),
    backgroundImage: `url(${blurUrl})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  if (resourceType === 'video') {
    return (
      <VideoWithAutoplay
        publicId={publicId}
        alt={alt}
        className={`z-10 w-full h-full highlight-card-asset object-contain ${className || ''}`}
        style={commonStyle}
      />
    );
  }

  if (resourceType === 'pdf') {
    const pdfUrl = buildUrl(publicId, 'image', { format: 'pdf' });
    const coverUrl = buildUrl(publicId, 'image', { format: 'jpg' });

    return (
      <div className={`relative w-full h-full group ${className || ''}`}>
        <object
          data={pdfUrl}
          type="application/pdf"
          className="z-10 w-full max-h-[75vh] min-h-[75vh] h-full highlight-card-asset object-contain rounded-md bg-white"
          style={commonStyle}
          title={alt}
          aria-label={alt}
        >
          <div className="relative w-full h-full flex flex-col items-center justify-center bg-white rounded-md border border-custom-light/10">
            <img
              src={coverUrl}
              alt={alt}
              className="w-full max-h-[75vh] object-contain opacity-50 blur-sm"
              style={commonStyle}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
              <p className="text-custom-dark font-semibold mb-4 text-center">View Document</p>
              <Button
                asChild
                variant="secondary"
                className="shadow-lg bg-white/90 hover:bg-white text-black"
              >
                <Link to={pdfUrl} target="_blank" rel="noopener noreferrer">
                  <span className="mr-2">Open PDF</span>
                  <FiExternalLink />
                </Link>
              </Button>
            </div>
          </div>
        </object>
      </div>
    );
  }

  return (
    <img
      className={`z-10 max-h-[75vh] w-full highlight-card-asset bg-highlight-card-asset object-contain ${className || ''}`}
      style={commonStyle}
      src={buildUrl(publicId, 'image')}
      alt={alt}
    />
  );
};

export default WorkAsset;
