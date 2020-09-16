import React, { useEffect, useState } from 'react';

import './styles.scss';
import map from '../../images/map.svg';
import waitingSearch from '../../images/waitingSearch.svg';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Search } from '@material-ui/icons';

import data from '../../data/neighborhoods.json';

import { Map, TileLayer, Marker } from 'react-leaflet';

interface Neighborhoods {
  zone: number;
  neighborhood: any;
}

interface Neighborhood {
  id: number;
  name: string;
  location: [number, number];
}

const SearchLocation: React.FC = () => {

  const [initialPosition, setInitialPosition] = useState<[number, number]>([0, 0]);
  const [selectedPosition, setSelectedPosition] = useState<any>([]);
  const [neighborhoods, setNeighborhoods] = useState<Neighborhoods[]>(data.neighborhoods);
  const [search, setSearch] = useState(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;

      setInitialPosition([latitude, longitude]);
    });
  }, []);

  const searchZone = () => {
    neighborhoods.map((item: Neighborhoods) => {
      if (item.zone === Number(search)) {
        setSelectedPosition(item.neighborhood);
      } else if (0 === Number(search)) {
        setSelectedPosition([]);
      }
    })
  }

  useEffect(() => {
    searchZone();
  }, [search]);

  return (
    <div className="container-searchLocation" >
      <div className="title-search" >
        <img src={map} alt="map" />
        <h4>Pesquise aqui uma zona de João Pessoa</h4>
      </div>

      <Form
        className="form-search"
      >
        <Form.Control
          as="select" onChange={(e: any) => setSearch(e.target.value)} >
          <option value={0} > Selecione uma zona </option>
          {
            neighborhoods.map((neighborhood: Neighborhoods) => (
              <option
                key={neighborhood.zone}
                value={neighborhood.zone}
              >
                {`Zona ${neighborhood.zone}`}
              </option>
            ))
          }
        </Form.Control>
        <Button className="primary-button" >
          <Search />
        </Button>
      </Form>

      <div className="wrapper-neighborhood">
        <div className="container-map">
          <Map center={initialPosition} zoom={11} >
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {selectedPosition.map((mark: Neighborhood) => (
              <Marker position={mark.location} title={mark.name} />
            ))
            }
          </Map>
        </div>
        <div className="container-info" >
          {/* esperando pela busca */}
          <img src={waitingSearch} alt="waitingSearch" />
          <span>Esperando busca pela zona.</span>
          {/* resultado da busca */}

        </div>
      </div>

    </div>
  );
}

export default SearchLocation;