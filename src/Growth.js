import MediaCard from './components/MediaCard';

export default function Growth(props) {
  return (
    <MediaCard
      img={'/wood-wide-web.jpg'}
      imgTitle={'Wood Wide Web'}
      title={'Growth'}
      paragraph={`Mushrooms grow from spores (not seeds) that are so tiny you can't see individual spores with the naked eye. Rather than soil, these spores rely on substances like sawdust, grain, straw, or wood chips for nourishment. A blend of the spores and these nutrient sources is called spawn.`}
    />
  );
}
