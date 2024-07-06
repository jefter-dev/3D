import { Element3D } from "../components/Element3D";
import { Header } from "../components/Header";
import { Loading } from "../components/Loading";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Suspense } from "react";

const elements3D = [
  "/elements3D/grtCar.glb",
  "/elements3D/car.glb",
  "/elements3D/island.glb",
  "/elements3D/duck.glb",
  "/elements3D/policeCar.glb"
];

export default function Page() {
  return (
    <Container>
      <Row>
        <Header />

        <Suspense fallback={<Loading />}>
          <Col md={4}>
            <Element3D
              fileElement="/elements3D/mask4.glb"
              cameraHelperElement={false}
              cameraLockElement={false}
              moveElement={true}
              rotateElement={false}
              colorLight="#58d5d3"
              intensityLight={30}
              backgroundColorElement={0x07161B} />
          </Col>
        </Suspense>
        {elements3D.map((file, index) => (
          <Col key={index} md={4}>
            <Suspense fallback={<Loading />}>
              <Element3D
                fileElement={file}
                cameraHelperElement={false}
                cameraLockElement={false}
                moveElement={true}
                rotateElement={false}
                backgroundColorElement={0x58d5d3} />
            </Suspense>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
