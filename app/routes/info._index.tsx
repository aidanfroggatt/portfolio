import type { MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import { InfoAbout, InfoAwards, InfoExperience, InfoInvolvement } from '~/components/info';
import { config } from '~/data/config';
import { db } from '~/db/index.server';

export const meta: MetaFunction = () => {
  return [
    { title: `${config.name} — Info` },
    {
      name: 'description',
      content: `This is an overview of ${config.name} and his work experience.`,
    },
  ];
};

export const loader = async () => {
  const aboutData = await db.query.about.findMany({
    orderBy: (t, { asc }) => [asc(t.index)],
    with: {
      asset: true,
    },
  });

  const experienceData = await db.query.experiences.findMany({
    where: (t, { eq }) => eq(t.type, 'work'),
    orderBy: (t, { desc }) => [desc(t.startDate)],
  });

  const involvementData = await db.query.experiences.findMany({
    where: (t, { eq }) => eq(t.type, 'involvement'),
    orderBy: (t, { desc }) => [desc(t.startDate)],
  });

  const awardsData = await db.query.awards.findMany();

  return { aboutData, experienceData, involvementData, awardsData };
};

export default function Info() {
  const { aboutData, experienceData, involvementData, awardsData } = useLoaderData<typeof loader>();

  return (
    <>
      <Header />
      <main className="relative bg-main-page-mobile bg-size-[100%_450px] md:bg-info-page md:bg-size-[100%_135vh] bg-no-repeat flex flex-col justify-start items-center bg-custom-dark text-custom-light">
        <InfoAbout data={aboutData} />
        <InfoExperience data={experienceData} />
        <InfoInvolvement data={involvementData} />
        <InfoAwards data={awardsData} />
      </main>
      <Footer />
    </>
  );
}
