import { db } from '~/db/index.server';

export const getInfoPageData = async () => {
  const [aboutData, experienceData, involvementData, awardsData] = await Promise.all([
    db.query.about.findMany({
      orderBy: (t, { asc }) => [asc(t.index)],
      with: { asset: true },
    }),
    db.query.experiences.findMany({
      where: (t, { eq }) => eq(t.type, 'work'),
      orderBy: (t, { desc }) => [desc(t.startDate)],
    }),
    db.query.experiences.findMany({
      where: (t, { eq }) => eq(t.type, 'involvement'),
      orderBy: (t, { desc }) => [desc(t.startDate)],
    }),
    db.query.awards.findMany(),
  ]);

  return { aboutData, experienceData, involvementData, awardsData };
};
