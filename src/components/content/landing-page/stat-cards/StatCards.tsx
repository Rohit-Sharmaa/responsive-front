import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { FiMessageCircle } from 'react-icons/fi';
import { RiSuitcaseLine } from 'react-icons/ri';
import { VscSmiley } from 'react-icons/vsc';
import { TbActivityHeartbeat } from 'react-icons/tb';

import MainButton from '@Components/features/MainButton';
import StatCard from '@Components/content/landing-page/stat-cards/StatCard';

// StatCards Component: Represents a section with statistic cards.
const StatCards = (): JSX.Element => {
  return (
    // Section container for the statistic cards.
    <section>
      <div className="relative flex h-full flex-col bg-primary px-8 text-lg sm:px-16 xl:px-36">
        <div className="mb-6 mt-8 flex flex-wrap justify-between space-x-0 sm:mb-0 xl:mb-8 xl:mt-16">
          <StatCard
            key={1}
            bgColor="hover:bg-secondary"
            icon={<RiSuitcaseLine className="statIconSize text-secondary" />}
            description="years of experience"
          >
            <>
              10
              <span className="statPlusIcon">
                <FaPlus className="plusIcon" />
              </span>
            </>
          </StatCard>
          <StatCard
            key={2}
            bgColor="hover:bg-tertiary"
            icon={<VscSmiley className="statIconSize text-tertiary" />}
            description="positive reviews"
          >
            <>
              2000
              <span className="statPlusIcon">
                <FaPlus className="plusIcon" />
              </span>
            </>
          </StatCard>
          <StatCard
            key={3}
            bgColor="hover:bg-primary hover:border hover:border-slate-50"
            icon={<FiMessageCircle className="statIconSize text-primary" />}
            description="satisfied clients"
          >
            <>
              15.000
              <span className="statPlusIcon">
                <FaPlus className="plusIcon" />
              </span>
            </>
          </StatCard>
          <StatCard
            key={4}
            bgColor="hover:bg-green-500"
            icon={
              <TbActivityHeartbeat className="statIconSize text-green-600" />
            }
            description=" nurses and physician assistants on staff"
          >
            <>
              Many
              <span className="statPlusIcon">
                <FaPlus className="plusIcon" />
              </span>
            </>
          </StatCard>
        </div>
        <MainButton overwrite="bg-tertiary xl:self-center mb-8 xl:mb-8 xl:mt-0 border-tertiary hover:text-tertiary hover:bg-white" />
      </div>
    </section>
  );
};

export default StatCards;
