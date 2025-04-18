import React from 'react';
import InfoVideosSlider from './CalmingVideosSlider';
import SleepStories from './SleepStories';
import MeditationResources from './MeditationResources';

const Relax = () => {
  return (
    <div className="relax-page">
      <InfoVideosSlider />
      <SleepStories />
      <MeditationResources />
    </div>
  );
};

export default Relax;
