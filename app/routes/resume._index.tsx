import { redirect } from '@remix-run/node';
import { buildUrl } from '~/lib/cloudinary';

export const loader = async () => {
  // Build the basic URL for the 'resume' asset
  const url = buildUrl('resume', 'image', { format: 'pdf' });

  // Cloudinary Best Practice:
  // Appending '.pdf' ensures browsers trigger the correct PDF viewer behavior
  // instead of treating it as a generic binary file.
  const pdfUrl = url.endsWith('.pdf') ? url : `${url}.pdf`;

  return redirect(pdfUrl);
};
