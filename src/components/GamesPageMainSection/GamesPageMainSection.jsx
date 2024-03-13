import { useParams } from 'react-router-dom';

import './GamesPageMainSection.css';

import Last30DaysSection from './sections/Last30DaysSection/Last30DaysSection.jsx';
import ThisWeekSection from './sections/ThisWeekSection/ThisWeekSection.jsx';
import NextWeekSection from './sections/NextWeekSection/NextWeekSection.jsx';
import BestOfTheYearSection from './sections/BestOfTheYearSection/BestOfTheYearSection.jsx';
import PopularIn2023Section from './sections/PopularIn2023Section/PopularIn2023Section.jsx';
import AllTimeTopSection from './sections/AllTimeTopSection/AllTimeTopSection.jsx';

export default function GamesPageMainSection() {
  const { sectionName } = useParams();

  return (
    <main className='games-page__content'>
      {sectionName === 'last-30-days' && <Last30DaysSection />}
      {sectionName === 'this-week' && <ThisWeekSection />}
      {sectionName === 'next-week' && <NextWeekSection />}
      {sectionName === 'best-of-the-year' && <BestOfTheYearSection />}
      {sectionName === 'popular-in-2023' && <PopularIn2023Section />}
      {sectionName === 'all-time-top-250' && <AllTimeTopSection />}
    </main>
  );
}
