/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import './styles.scss';
//images
import map from '../../images/map.svg';
import waitingSearch from '../../images/waitingSearch.svg';
//bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
//icons
import { Search } from '@material-ui/icons';
//data
import dataJSON from '../../data/neighborhoods.json';
//leaflet
import { Map, TileLayer, Marker } from 'react-leaflet';
import { Select, MenuItem, FormControl } from '@material-ui/core';

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

  const data = dataJSON.neighborhoods;
  //state
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [initialPosition, setInitialPosition] = useState<[number, number]>([-7.1402162, -34.8881228]); //Coordenadas de João Pessoa
  const [neighborhoods, setNeighborhoods] = useState<Neighborhood[]>([]);
  const [zoneSelected, setZoneSelected] = useState(0);

  //setar array de bairros de acordo com a zona selecionada
  const searchZone = () => {
    // eslint-disable-next-line array-callback-return
    data.map((item: Neighborhoods) => {
      if (item.zone === zoneSelected) {
        setNeighborhoods(item.neighborhood);
      } else if (0 === zoneSelected) {
        setNeighborhoods([]);
      }
    })
  }
  //execulta a função a cima toda vez que for selecionada outra zona
  useEffect(() => {
    searchZone();
  }, [zoneSelected]);


  return (
    <div className="container-searchLocation" >
      <div className="title-search" >
        <img src={map} alt="map" />
        <h4>Pesquise aqui uma zona de João Pessoa</h4>
      </div>

      <Form
        className="form-search"
      >
        {/* <Form.Control
          as="select"
          onChange={(e: any) => setZoneSelected(Number(e.target.value))}
        >
          <option value={0} > Selecione uma zona </option>
          {
            data.map((item: Neighborhoods) => (
              <option
                key={item.zone}
                value={item.zone}
              >
                {`Zona ${item.zone}`}
              </option>
            ))
          }
        </Form.Control> */}

        <FormControl variant="outlined" size="small" style={{ width: '400px' }} >
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            onChange={(e: any) => setZoneSelected(Number(e.target.value))}
          >
            <MenuItem value={0} disabled>
              Selecione uma zona
            </MenuItem>
            {
              data.map((item: Neighborhoods) => (
                <MenuItem
                  key={item.zone}
                  value={item.zone}
                  style={{ paddingRight: 0 }}
                >
                  <OverlayTrigger
                    trigger="hover"
                    placement="right-start"
                    overlay={
                      <Popover id="popover-basic">
                        {
                          item.neighborhood.map((text: Neighborhood) => (
                            <Popover.Content>
                              {text.name}
                            </Popover.Content>
                          ))
                        }
                      </Popover>
                    }
                  >
                    <div style={{ width: '100%', fontFamily: '"Nunito", sans-serif' }} >
                      {`Zona ${item.zone}`}
                    </div>
                  </OverlayTrigger>
                </MenuItem>
              ))
            }
          </Select>
        </FormControl>

        <Button className="primary-button" >
          <Search />
        </Button>
      </Form>

      <div className="wrapper-neighborhood">
        <div className="container-map">
          <Map center={initialPosition} zoom={12} >
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
              neighborhoods.map((mark: Neighborhood) => (
                <Marker position={mark.location} title={mark.name} key={mark.id} />
              ))
            }
          </Map>
        </div>
        <div className="container-info" >
          {/* esperando pela busca */}
          {/* <img src={waitingSearch} alt="waitingSearch" />
          <span>Esperando busca pela zona.</span> */}
          {/* resultado da busca */}
          <div className="container-neighborhoods" >
            {!!neighborhoods.length &&
              neighborhoods.map((neighborhood: Neighborhood) => (
                <button>
                  {neighborhood.name}
                </button>
              ))
            }
          </div>
        </div>
      </div>

    </div>
  );
}

export default SearchLocation;