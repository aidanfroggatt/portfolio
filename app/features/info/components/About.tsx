import { type InferSelectModel } from 'drizzle-orm';
import { motion } from 'framer-motion';
import { ImageCard } from '~/components/Card';
import Dot from '~/components/ui/dot';
import { about, assets } from '~/db/schema';
import { buildUrl } from '~/utils/cloudinary';

type BaseAbout = InferSelectModel<typeof about>;
type BaseAsset = InferSelectModel<typeof assets>;

interface AboutWithAsset extends BaseAbout {
  asset: BaseAsset | null;
}

const InfoAbout = ({ data }: { data: AboutWithAsset[] }) => {
  const renderContent = (item: AboutWithAsset) => {
    if (item.type === 'image' && item.asset) {
      return (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
          }}
          viewport={{ once: true }}
        >
          <ImageCard>
            <img src={buildUrl(item.asset.publicId, 'image')} alt={item.asset.alt} />
          </ImageCard>
        </motion.div>
      );
    } else if (item.type === 'text') {
      return (
        <motion.div
          key={item.id}
          className="flex flex-col gap-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
          }}
          viewport={{ once: true }}
        >
          {item.title && <div className="text-custom-light text-lg 2xl:text-2xl">{item.title}</div>}
          {item.text && (
            <div className="text-custom-light/50 text-base 2xl:text-xl">{item.text}</div>
          )}
        </motion.div>
      );
    }
    return null;
  };

  // 1. Separate images and texts
  const images = data.filter((item) => item.type === 'image');
  const texts = data.filter((item) => item.type === 'text');

  // 2. Interleave them strictly alternating (Image, Text, Image, Text...)
  const interleavedMobileData: AboutWithAsset[] = [];
  const maxLength = Math.max(images.length, texts.length);

  for (let i = 0; i < maxLength; i++) {
    if (images[i]) interleavedMobileData.push(images[i]);
    if (texts[i]) interleavedMobileData.push(texts[i]);
  }

  const mobileContent = interleavedMobileData.map((item) => renderContent(item));

  // Desktop lists remain based on the original index/column split
  const desktopContentLeft = data
    .filter((_, idx) => idx % 2 === 0)
    .map((item) => renderContent(item));

  const desktopContentRight = data
    .filter((_, idx) => idx % 2 !== 0)
    .map((item) => renderContent(item));

  return (
    <section id="info-about">
      <div
        id="info-about-content"
        className="flex flex-col pb-10 md:pb-0 w-page-default md:w-page-md lg:w-page-lg 2xl:w-page-2xl"
      >
        <div className="flex flex-col justify-center items-start lg:mt-40 2xl:mt-48 mt-32 pb-10 md:pb-0">
          <div className="flex justify-center items-center flex-row text-custom-light gap-x-2">
            <Dot />
            <div className="text-xs 2xl:text-sm text-custom-light/50 py-4 2xl:py-8">ABOUT ME</div>
          </div>
          <h1 className="text-shadow-mobile md:text-shadow">
            Here&apos;s some more info&nbsp;
            <span className="h1-accent">about me.</span>
          </h1>
        </div>

        {/* Mobile Version - Uses the interleaved alternating array */}
        <div className="md:hidden flex flex-col gap-y-16 py-10">{mobileContent}</div>

        {/* Desktop Version - Uses original array split into columns */}
        <div className="hidden md:py-20 2xl:py-32 md:grid md:grid-cols-2 md:gap-x-12 2xl:gap-x-20">
          <div className="flex flex-col md:gap-y-20">{desktopContentLeft}</div>
          <div className="flex flex-col md:gap-y-20">{desktopContentRight}</div>
        </div>
      </div>
    </section>
  );
};

export default InfoAbout;
