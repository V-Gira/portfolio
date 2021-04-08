import MediaCard from './components/MediaCard';

export default function Home(props) {
  return (
    <MediaCard
      img={'/wood-wide-web.jpg'}
      imgTitle={'Wood Wide Web'}
      title={'Home'}
      paragraph={`A home, or domicile, is a space used as a permanent or semi-permanent residence for an individual, group or family. It is a fully or semi sheltered space and can have both interior and exterior aspects to it. Homes provide sheltered spaces for instance rooms, where domestic activity can be performed such as sleeping, preparing food, eating and hygiene as well as providing spaces for work and leisure such as remote working, studying and playing. Physical forms of homes can be static such as a house or an apartment, mobile such as a houseboat, trailer or yurt or digital such as virtual space.[1] The aspect of ‘home’ can be considered across scales, from the micro scale showcasing the most intimate spaces of the individual dwelling and direct surrounding area to the macro scale of the geographic area such as town, village, city, country or planet.`}
    />
  );
}
