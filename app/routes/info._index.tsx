import type { MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import Footer from '~/components/layout/footer';
import Header from '~/components/layout/header';
import { siteConfig } from '~/config/site';
import { getInfoPageData } from '~/features/info/api.server';
import InfoAbout from '~/features/info/components/About';
import InfoAwards from '~/features/info/components/Awards';
import { Timeline } from '~/features/info/components/Timeline';

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
      <main className="relative bg-main-page-mobile bg-size-[100%_450px] md:bg-info-page md:bg-size-[100%_135vh] bg-no-repeat flex flex-col justify-start items-center bg-custom-dark text-custom-light">
        <InfoAbout data={aboutData} />
        <Timeline id="experience" title="Experience" data={experienceData} />
        <Timeline id="involvement" title="Involvement" data={involvementData} />
        <InfoAwards data={awardsData} />
        {/* <section className="flex flex-col border-t border-custom-light/20 gap-y-2 py-16 md:gap-y-8 w-page-default md:w-page-md lg:w-page-lg 2xl:w-page-2xl">
          <Globe />
        </section> */}
      </main>
      <Footer />
    </>
  );
}
