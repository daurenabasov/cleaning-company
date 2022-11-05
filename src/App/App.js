import Hero from "../containers/sectionHero/Hero";
import s from "./App.module.css";
import Video from "../containers/sectionVideo/Video";
import Equipment from "../containers/sectionEquipment/Equipment";
import Advantages from "../containers/sectionAdvantages/Advantages";
import OurWork from "../containers/sectionOurWork/OurWork";
import OurContacts from "../containers/sectionOurContacts/OurContacts";
import KindCleaning from "../containers/sectionKindsCleaning/KindCleaning";
import AdditionCleaning from "../containers/sectionAdditionCleaning/AdditionCleaning";
import Social from "../containers/sectionSocial/Social";
import ExampleCleaning from "../containers/sectionExampleCleaning/ExampleCleaing";
import Inventory from "../containers/sectionInventory/Inventory";
import Certificates from "../containers/sectionCertificates/Certificates";

function App() {
  return (
    <div className={s.App}>
      <Hero />
      <Equipment />
      <Video />
      <Advantages />
      <OurWork />
      <OurContacts />
      <KindCleaning />
      <AdditionCleaning />
      <ExampleCleaning />
      <Social />
      <Inventory />
      <Certificates />
    </div>
  );
}

export default App;
