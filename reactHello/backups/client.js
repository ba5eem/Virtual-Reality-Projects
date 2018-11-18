import {ReactInstance, Location, Surface} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    ...options,
  });

  const leftPanel = new Surface(600, 600, Surface.SurfaceShape.Flat);
  leftPanel.setAngle(-1.1, 0);

  const rightPanel = new Surface(600, 600, Surface.SurfaceShape.Flat);
  rightPanel.setAngle(1.1, 0);

  const centerPanel = new Surface(1000, 600, Surface.SurfaceShape.Cylinder);
  centerPanel.setAngle(0, 0);


  r360.renderToSurface(
    r360.createRoot('LeftScreen'),
    leftPanel,
  );
  r360.renderToSurface(
    r360.createRoot('RightScreen'),
    rightPanel,
  );
  r360.renderToSurface(
    r360.createRoot('CenterScreen'),
    centerPanel,
  );

  r360.compositor.setBackground('./static_assets/hawaii.jpg');
  // Creating a Video Player
  // const player = r360.compositor.createVideoPlayer('myplayer');
  // // Set the video to be played, and its format
  // player.setSource('./static_assets/shark.mp4', '2D');




}

window.React360 = {init};