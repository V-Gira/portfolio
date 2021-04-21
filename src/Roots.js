import MediaCard from './components/MediaCard';

export default function Roots(props) {
  return (
    <MediaCard
      img={'/roots.svg'}
      imgTitle={'Wood Wide Web'}
      title={'Roots'}
      paragraph={
        'In vascular plants, the roots are the organs of a plant that are modified to provide anchorage for the plant and take in water and nutrients into the plant body, which allows plants to grow taller and faster. They most often lie below the surface of the soil, but roots can also be aerial or aerating, that is, growing up above the ground or especially above water.'
      }
    />
  );
}
