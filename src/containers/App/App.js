import Hero from "../sectionHero/Hero";
import s from "./App.module.css";
import Video from "../sectionVideo/Video";
import Equipment from "../sectionEquipment/Equipment";
import Advantages from "../sectionAdvantages/Advantages";
import OurWork from "../sectionOurWork/OurWork";
import OurContacts from "../sectionOurContacts/OurContacts";
import KindCleaning from "../sectionKindsCleaning/KindCleaning";
import AdditionCleaning from "../sectionAdditionCleaning/AdditionCleaning";
import Social from "../sectionSocial/Social";
import ExampleCleaning from "../sectionExampleCleaning/ExampleCleaing";
import Inventory from "../sectionInventory/Inventory";
import Certificates from "../sectionCertificates/Certificates";
import { motion } from "framer-motion";
import { AnimatedBg, Transition } from "scroll-background-2";

function App() {
  return (
    <AnimatedBg>
      <div className={s.App} style={{ height: "100%" }}>
        <Hero />
        <Equipment />
        <Video />
        <Advantages />
        <OurWork />

        {/* <motion.div
        className="scrollAnimate"
        initial={{ background: "#fff" }}
        whileInView={{ background: "red" }}
        transition={{ delay: 0.2, duration: 0.3 }}
      > */}
        <OurContacts />
        {/* </motion.div> */}
        <KindCleaning />
        <AdditionCleaning />
        {/* <ExampleCleaning /> */}
        <Social />
        <Inventory />
        <Certificates />
      </div>
    </AnimatedBg>
  );
}

export default App;
