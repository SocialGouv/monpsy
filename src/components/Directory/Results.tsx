import { Button, Col } from "@dataesr/react-dsfr";
import React, { Dispatch, MutableRefObject, SetStateAction } from "react";

import { Coordinates } from "../../types/coordinates";
import { Psychologist as PsychologistType } from "../../types/psychologist";
import { Desktop, Psychologists } from "./Directory.styles";
import Psychologist from "./Psychologist";
import PsychologistsMap from "./PsychologistsMap";

const Results = ({
  psychologists,
  loadMorePsychologists,
  resultsRef,
  psychologistsRefs,
  selectedPsychologist,
  setSelectedPsychologist,
  mapCenter,
  setMapCenter,
}: {
  psychologists: PsychologistType[];
  loadMorePsychologists: () => void;
  resultsRef: MutableRefObject<any>;
  psychologistsRefs: any;
  selectedPsychologist: number;
  setSelectedPsychologist: Dispatch<SetStateAction<number>>;
  mapCenter: Coordinates;
  setMapCenter: Dispatch<SetStateAction<Coordinates>>;
}) => {
  const onClick = (psychologist: PsychologistType) => {
    setSelectedPsychologist(psychologist.id);
    if (psychologist.coordinates) {
      setMapCenter({
        latitude: psychologist.coordinates.coordinates[1],
        longitude: psychologist.coordinates.coordinates[0],
      });
    }
  };

  return (
    <Desktop>
      <Psychologists
        ref={resultsRef}
        className="fr-col-12 fr-col-md-5 fr-mr-2w"
      >
        {psychologists.map((psychologist) => (
          <div
            ref={psychologistsRefs.current[psychologist.id]}
            key={psychologist.id}
          >
            <div className="fr-mb-2w">
              <Psychologist
                psychologist={psychologist}
                onClick={onClick}
                selected={selectedPsychologist === psychologist.id}
              />
            </div>
          </div>
        ))}
        <Button onClick={loadMorePsychologists}>Plus de psychologues</Button>
      </Psychologists>
      <Col n="12 md-7">
        {mapCenter && (
          <PsychologistsMap
            selectedPsychologist={selectedPsychologist}
            selectPsychologist={(psychologist) => {
              setSelectedPsychologist(psychologist.id);
              setMapCenter({
                latitude: psychologist.coordinates.coordinates[1],
                longitude: psychologist.coordinates.coordinates[0],
              });
              resultsRef.current.scrollTo({
                top:
                  psychologistsRefs.current[psychologist.id].current.offsetTop -
                  resultsRef.current.offsetTop,
              });
            }}
            mapCenter={[mapCenter.latitude, mapCenter.longitude]}
            psychologists={psychologists}
          />
        )}
      </Col>
    </Desktop>
  );
};

export default Results;