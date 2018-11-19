import {ReactInstance, Location, Surface} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    ...options,
  });

  // Create three roots: two flat panels on the left and the right, and a Location
  // to mount rendered models in 3D space
  const leftPanel = new Surface(300, 600, Surface.SurfaceShape.Flat);
  leftPanel.setAngle(-0.8, 0);
  const rightPanel = new Surface(300, 600, Surface.SurfaceShape.Flat);
  rightPanel.setAngle(0.8, 0);

  const centerPanel = new Surface(500, 80, Surface.SurfaceShape.Flat);
  centerPanel.setAngle(0, -Math.PI / 6);



  r360.renderToSurface(
    r360.createRoot('TopPosts'),
    leftPanel,
  );
  r360.renderToSurface(
    r360.createRoot('CurrentPost'),
    rightPanel,
  );

  r360.renderToSurface(
    r360.createRoot('CenterControl'),
    centerPanel,
  );


  // Location rendering
  r360.renderToLocation(
    r360.createRoot('SubmarineView'), // good position
    new Location([0, 0, -6]),
  );
  // r360.renderToLocation(
  //   r360.createRoot('BattleshipView'),
  //   new Location([0, -3, -3]),
  // );
  // r360.renderToLocation(
  //   r360.createRoot('DroneView'),
  //   new Location([0, 0, -200]),
  // );
  // r360.renderToLocation(
  //   r360.createRoot('IslandView'), // good position, need to fix rotation abou 180deg
  //   new Location([0, -30, -80]),
  // );
  // r360.renderToLocation(
  //   r360.createRoot('GlobeView'),
  //   new Location([0, 0, -150]),
  // );

  r360.compositor.setBackground('./static_assets/360_world.jpg');
}

window.React360 = {init};