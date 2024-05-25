import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept";

const CoreConcepts = () => {
  return (
    <>
      <section id="core-concepts">
        <h2>CORE CONCEPTS</h2>
        <ul>
          {CORE_CONCEPTS.map((conceptItem) => (
            <CoreConcept key={conceptItem.title} {...conceptItem} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default CoreConcepts;
