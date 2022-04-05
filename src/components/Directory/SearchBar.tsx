import {
  Alert,
  Button,
  Col,
  Row,
  SearchableSelect,
  Select,
} from "@dataesr/react-dsfr";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

import {
  AROUND_ME,
  AROUND_ME_OPTION,
  search,
} from "../../services/frontend/geo.api";
import { Coordinates } from "../../types/coordinates";
import { FILTER } from "../../types/enums/filters";
import { allPublicsFilters } from "../../types/enums/public";
import { SubSearch } from "./Directory.styles";

const geoStatusEnum = {
  DENIED: -1,
  GRANTED: 1,
  UNKNOWN: 0,
  UNSUPPORTED: -2,
};

const SearchBar = ({
  positionFilter,
  setPositionFilter,
  otherFilters,
  setOtherFilters,
  coords,
  setCoords,
  geoLoading,
  setGeoLoading,
  loadPsychologists,
}: {
  positionFilter: string;
  setPositionFilter: Dispatch<SetStateAction<string>>;
  otherFilters: any;
  setOtherFilters: Dispatch<SetStateAction<any>>;
  coords: Coordinates;
  setCoords: Dispatch<SetStateAction<Coordinates>>;
  geoLoading: boolean;
  setGeoLoading: Dispatch<SetStateAction<boolean>>;
  loadPsychologists: () => void;
}) => {
  const [filterText, setFilterText] = useState("");
  const [geoStatus, setGeoStatus] = useState(geoStatusEnum.UNKNOWN);
  const [options, setOptions] = useState(AROUND_ME_OPTION);

  const success = (pos) => {
    const { longitude, latitude } = pos.coords;
    setCoords({ latitude, longitude });
    setGeoStatus(geoStatusEnum.GRANTED);
    setGeoLoading(false);
  };

  const errors = () => {
    setGeoStatus(geoStatusEnum.DENIED);
    setGeoLoading(false);
  };

  const getGeolocation = (state) => {
    if (state === "granted") {
      setGeoLoading(true);
      navigator.geolocation.getCurrentPosition(success, errors);
    } else if (state === "prompt") {
      setGeoLoading(true);
      navigator.geolocation.getCurrentPosition(success, errors);
    } else if (state === "denied") {
      setGeoStatus(geoStatusEnum.DENIED);
    }
  };

  const checkGeolocationPermission = () => {
    if (navigator.geolocation && navigator.permissions) {
      navigator.permissions.query({ name: "geolocation" }).then((result) => {
        getGeolocation(result.state);
      });
    } else {
      setGeoStatus(geoStatusEnum.UNSUPPORTED);
    }
  };

  useEffect(() => {
    if (positionFilter === AROUND_ME) {
      checkGeolocationPermission();
    }
  }, [positionFilter]);

  useEffect(() => {
    if (positionFilter) {
      return;
    }

    search(filterText, setOptions);
  }, [filterText]);

  return (
    <Row className="fr-pb-2w" alignItems="middle">
      <Col n="md-9 12">
        <SearchableSelect
          selected={positionFilter}
          onChange={setPositionFilter}
          onTextChange={setFilterText}
          filter={() => true}
          label="Rechercher par ville ou code postal"
          options={options}
        />
        <SubSearch>
          <Select
            selected={otherFilters[FILTER.PUBLIC]}
            onChange={(e) =>
              setOtherFilters({
                ...otherFilters,
                [FILTER.PUBLIC]: e.target.value,
              })
            }
            label="Souhait du psychologue d'accompagner des"
            options={allPublicsFilters.map((option) => ({
              label: option.label || option.value,
              value: option.value,
            }))}
          />

          <div className="fr-toggle">
            <input
              id="checkbox-teleconsultation"
              type="checkbox"
              className="fr-toggle__input"
              checked={otherFilters[FILTER.TELECONSULTATION]}
              onChange={(e) =>
                setOtherFilters({
                  ...otherFilters,
                  [FILTER.TELECONSULTATION]: e.target.checked,
                })
              }
            />
            <label
              className="fr-toggle__label"
              htmlFor="checkbox-teleconsultation"
            >
              Possibilité de séances à distance
            </label>
          </div>
        </SubSearch>
      </Col>
      <Col n="md-3 12" className="align-center">
        <Button
          className="fr-ml-1w fr-mt-1w"
          disabled={!coords || geoLoading}
          onClick={loadPsychologists}
        >
          {geoLoading ? "Chargement..." : "Rechercher"}
        </Button>
      </Col>
      {positionFilter === AROUND_ME && geoStatus === geoStatusEnum.DENIED && (
        <Alert
          title="Géolocalisation indisponible"
          className="fr-mt-1w"
          type="error"
          description="Veuillez autoriser la géolocalisation sur votre navigateur pour utiliser cette
                fonctionnalité."
        />
      )}
      {positionFilter === AROUND_ME &&
        geoStatus === geoStatusEnum.UNSUPPORTED && (
          <Alert
            title="Géolocalisation indisponible"
            className="fr-mt-1w"
            type="error"
            description="Votre navigateur ne permet pas d'utiliser cette fonctionnalité."
          />
        )}
    </Row>
  );
};

export default SearchBar;
