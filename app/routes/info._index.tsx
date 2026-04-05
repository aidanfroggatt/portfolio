import type { MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import Footer from '~/components/layout/footer';
import Header from '~/components/layout/header';
import { siteConfig } from '~/config/site';
import { getInfoPageData } from '~/features/info/api.server';
import { Timeline } from '~/features/info/components/Timeline';
import InfoAbout from '~/features/info/components/about';
import InfoAwards from '~/features/info/components/awards';

export const meta: MetaFunction = () => [
  { title: `${siteConfig.name} — Info` },
  { name: 'description', content: `Overview of ${siteConfig.name} and experience.` },
];

export const loader = async () => {
  return await getInfoPageData();
};

export default function InfoPage() {
  const { aboutData, experienceData, involvementData, awardsData } = useLoaderData<typeof loader>();

  return (
    <>
      <Header />
      <main className="relative bg-custom-dark text-custom-light flex flex-col items-center">
        {/* Background Decorations moved to CSS or Wrapper classes */}
        <InfoAbout data={aboutData} />
        <Timeline id="experience" title="Experience" data={experienceData} />
        <Timeline id="involvement" title="Involvement" data={involvementData} />
        <InfoAwards data={awardsData} />
      </main>
      <Footer />
    </>
  );
}
