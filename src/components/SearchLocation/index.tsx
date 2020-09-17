/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import './styles.scss';
//images
import map from '../../images/map.svg';
import waitingSearch from '../../images/waitingSearch.jpg';
//bootstrap
import Form from 'react-bootstrap/Form';
import ButtonBootstrap from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
//icons
import { Search } from '@material-ui/icons';
//data
import dataJSON from '../../data/neighborhoods.json';
//leaflet
import { Map, TileLayer, Marker } from 'react-leaflet';
import { Select, MenuItem, FormControl, Button } from '@material-ui/core';

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
        <FormControl variant="outlined" size="small" style={{ width: '400px' }} >
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            onChange={(e: any) => setZoneSelected(Number(e.target.value))}
            value={zoneSelected}
          >
            <MenuItem value={0}>
              <em>Selecione uma zona</em>
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
                            <Popover.Content key={text.id} >
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

        <ButtonBootstrap className="primary-button" >
          <Search />
        </ButtonBootstrap>
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
          {!neighborhoods.length &&
            <>
              <img src={waitingSearch} alt="waitingSearch" />
              <span>Esperando busca pela zona</span>
            </>
          }
          {!!neighborhoods.length &&
            <div className="container-choiceNeighborhood" >

              <h4>Você selecionou a zona {zoneSelected}</h4>
              <p>Escolha um bairro para enviar uma mensagem:</p>

              <div className="container-neighborhoods">
                {
                  neighborhoods.map((neighborhood: Neighborhood) => (
                    <div className="wrapper-button" key={neighborhood.id} >
                      <ButtonBootstrap className="primary-button" >
                        {neighborhood.name}
                      </ButtonBootstrap>
                    </div>
                  ))
                }
              </div>
            </div>
          }
        </div>
      </div>

    </div>
  );
}

export default SearchLocation;