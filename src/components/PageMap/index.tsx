import React, { useEffect, useState } from 'react';
import './styles.scss';

//bootstrap
import Form from 'react-bootstrap/Form';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Button from 'react-bootstrap/Button';
//icons
import { Search, ChevronLeft, ChevronRight } from '@material-ui/icons';
//data
import dataJSON from '../../data/neighborhoods.json';
//leaflet
import { Map, TileLayer, Marker } from 'react-leaflet';
import { Select, MenuItem, FormControl, Divider } from '@material-ui/core';

interface Neighborhoods {
  zone: number;
  neighborhood: any;
}

interface Neighborhood {
  id: number;
  name: string;
  location: [number, number];
}

const PageMap: React.FC = () => {

  const data = dataJSON.neighborhoods;
  //state
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [initialPosition, setInitialPosition] = useState<[number, number]>([-7.1402162, -34.8881228]); //Coordenadas de João Pessoa
  const [neighborhoods, setNeighborhoods] = useState<Neighborhood[]>([]);
  const [zoneSelected, setZoneSelected] = useState(0);
  const [isShowContent, setIsShowContent] = useState(true);

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
  //executa a função a cima toda vez que for selecionada outra zona
  useEffect(() => {
    searchZone();
  }, [zoneSelected]);

  return (
    <div className="container-pagemap" >
      <div className="left" >
        <div className={isShowContent ? "content-search" : "content-search close"} >
          <h5>Pesquisar por zona</h5>
          <Form
            className="form-search"
          >
            <FormControl variant="outlined" size="small" style={{ width: '100%' }} >
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                onChange={(e: any) => setZoneSelected(Number(e.target.value))}
                value={zoneSelected}
                IconComponent={() => <Search style={{ marginRight: 10, color: '#777' }} />}
              >
                <MenuItem value={0} style={{ fontFamily: '"Montserrat", sans-serif' }} >
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
                        <div style={{ width: '100%', fontFamily: '"Montserrat", sans-serif' }} >
                          {`Zona ${item.zone}`}
                        </div>
                      </OverlayTrigger>
                    </MenuItem>
                  ))
                }
              </Select>
            </FormControl>
          </Form>

          {!!neighborhoods.length &&
            <div className="container-choiceNeighborhood" >
              <Divider style={{ margin: '20px 0', width: '100%' }} />

              <div className="container-neighborhoods">
                {
                  neighborhoods.map((neighborhood: Neighborhood) => (
                    <div className="wrapper-button" key={neighborhood.id} >
                      <Button className="primary-button" >
                        {neighborhood.name}
                      </Button>
                    </div>
                  ))
                }
              </div>
            </div>
          }

        </div>
        <button
          className="buttonShow"
          onClick={() => setIsShowContent(!isShowContent)}
        >
          {
            isShowContent ?
              <ChevronLeft fontSize="large" />
              :
              <ChevronRight fontSize="large" />
          }
        </button>
      </div>
      <div className="right" >
        <Map
          center={initialPosition}
          zoom={12}
          scrollWheelZoom={false}
          doubleClickZoom={false}
        >
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
    </div>
  );
}

export default PageMap;