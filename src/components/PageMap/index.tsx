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
import { Select, MenuItem, FormControl, Divider, Switch } from '@material-ui/core';
//component
import ModalSendMessage from '../ModalSendMessage';
import ModalLogin from '../ModalLogin';
import ModalSuccess from '../ModalSuccess';

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
  const [zoneSelected, setZoneSelected] = useState<number>(0);
  const [isShowContent, setIsShowContent] = useState<boolean>(true);
  const [isZoom, setIsZoom] = useState<boolean>(false);
  const [showModalMessage, setShowModalMessage] = useState<boolean>(false);
  const [neighborhoodSelected, setNeighborhoodSelected] = useState<string>('');
  const [showModalLogin, setShowModalLogin] = useState<boolean>(false);
  const [showModalSuccess, setShowModalSuccess] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [zoneSelected]);

  //abrir modal para envio de mensagem e setar o bairro selecionado
  const openModalSendMessage = (neighborhood: string) => {
    setShowModalMessage(true);
    setNeighborhoodSelected(neighborhood);
  }

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
                        trigger={"hover"}
                        placement="right-start"
                        overlay={
                          <Popover id="popover-basic"  >
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
          {/* Habilitar zoom do mapa */}
          <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }} >
            <Switch
              checked={isZoom}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setIsZoom(e.target.checked)}
              color="primary"
            />
            <span>{isZoom ? 'Desabilitar' : 'Habilitar'} zoom</span>
          </div>
          {/* listagem de bairros */}
          {!!neighborhoods.length &&
            <div className="container-choiceNeighborhood" >
              <Divider style={{ margin: '10px 0 20px 0', width: '100%' }} />

              <div className="container-neighborhoods">
                {
                  neighborhoods.map((neighborhood: Neighborhood) => (
                    <div className="wrapper-button" key={neighborhood.id} >
                      <Button
                        className="primary-button"
                        onClick={() => openModalSendMessage(neighborhood.name)}
                      >
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
          scrollWheelZoom={isZoom}
          doubleClickZoom={false}
          zoomControl={false}
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {
            neighborhoods.map((mark: Neighborhood) => (
              <Marker position={mark.location} key={mark.id} />
            ))
          }
        </Map>
      </div>
      {/* Modal de mandar mensagem */}
      <ModalSendMessage
        show={showModalMessage}
        onHide={() => setShowModalMessage(false)}
        neighborhood={neighborhoodSelected}
        openLogin={() => setShowModalLogin(true)}
        sendMessage={(msg: string) => { setMessage(msg); setShowModalSuccess(true) }}
      />
      {/* Modal para logar */}
      <ModalLogin
        show={showModalLogin}
        onHide={() => setShowModalLogin(false)}
      />
      {/* Modal de feedback ao enviar mensagem */}
      <ModalSuccess
        show={showModalSuccess}
        onHide={() => setShowModalSuccess(false)}
        message={message}
      />

    </div>
  );
}

export default PageMap;