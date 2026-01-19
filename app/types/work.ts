export interface Work {
  index: number;
  id: string;
  title: string;
  subtitle?: string;
  association: string;
  description: string;
  asset: VideoAsset | ImageAsset;
  color: string;
  spotlight: boolean;
  award?: string;
  startDate: Date;
  endDate?: Date;
  overview: Overview;
  highlights: Highlights;
  content?: Content[];
  links?: Link[];
  navLink: string;
}

interface Overview {
  description: string;
  role: Role;
  team?: TeamMember[];
  technologies: Technology[];
}

interface Role {
  title: string;
  description: string;
}

interface TeamMember {
  name: string;
  role: string;
}

interface Technology {
  icon: string;
  name: string;
}

interface Highlights {
  description: string;
  items: HighlightItem[];
}

export interface HighlightItem {
  asset: VideoAsset | ImageAsset | PDFAsset;
}

export interface ImageAsset {
  alt: string;
  src: string;
  type: 'IMAGE';
}

export interface VideoAsset {
  alt: string;
  src: string;
  type: 'VIDEO';
  poster: string; // Required for VIDEO type
}

export interface PDFAsset {
  src: string;
  alt: string;
  type: 'PDF';
}

export interface Content {
  type: string;
  title: string;
  subtitle: string;
  description: string;
  assets?: (ImageAsset | VideoAsset | PDFAsset)[];
}

interface Link {
  icon: string;
  link: string;
  name: string;
}
