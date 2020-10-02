import Head from 'next/head';

import styled from 'styled-components';
import Background from '../components/UI/Background';

import ReactNipple from 'react-nipple';

import Bar from '../components/UI/Joystick/Bar';

const Joystick1 = () => {
  const handleEvent = (evt, data) => {
    // console.log(evt.target.box);
    console.log(data.instance.frontPosition);
  };

  return (
    <>
      <Background color="#313131" />
      <Head>
        <title>Game Lobby</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{
          marginTop: '50px',
          display: 'flex',
          justifyContent: 'space-around',
          width: '100%',
        }}
      >
        <Bar
          name="HP"
          alignLeft
          fillColor="#FF0000"
          maxValue="1000"
          value="600"
        />
        <Bar
          name="ARMOR"
          alignRight
          fillColor="#FFA800"
          maxValue="1000"
          value="50"
        />
      </div>
      <div style={{ position: 'fixed', bottom: 100, left: 100 }}>
        <ReactNipple
          options={{ mode: 'static', position: { top: '50%', left: '50%' } }}
          onMove={(evt, data) => console.log(evt, data)}
          onMove={handleEvent}
        />
      </div>
      <div style={{ position: 'fixed', bottom: 100, right: 100 }}>
        <ReactNipple
          options={{ mode: 'static', position: { top: '50%', left: '50%' } }}
          onMove={(evt, data) => console.log(evt, data)}
          onMove={handleEvent}
        />
      </div>
    </>
  );
};

export default Joystick1;
