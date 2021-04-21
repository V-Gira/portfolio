import MediaCard from './components/MediaCard';
import ParticlesBg from 'particles-bg';
import Banner from './components/Banner';

export default function Growth(props) {
  return (
    <div>
      <Banner />
      <MediaCard
        img={'/growth.svg'}
        imgTitle={'Wood Wide Web'}
        title={'Growth'}
        paragraph={`Mushrooms grow from spores (not seeds) that are so tiny you can't see individual spores with the naked eye. Rather than soil, these spores rely on substances like sawdust, grain, straw, or wood chips for nourishment. A blend of the spores and these nutrient sources is called spawn.`}
      />
    </div>
  );
}
