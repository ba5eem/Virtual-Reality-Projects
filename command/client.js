// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Location, Surface} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  const leftPanel = new Surface(300, 600, Surface.SurfaceShape.Flat);
  leftPanel.setAngle(-0.8, 0);
  const rightPanel = new Surface(300, 600, Surface.SurfaceShape.Flat);
  rightPanel.setAngle(0.8, 0);

  const centerPanel = new Surface(1000 , 600, Surface.SurfaceShape.Flat);
  centerPanel.setAngle(0, 0)



  r360.renderToSurface(
    r360.createRoot('LeftPanel'),
    leftPanel,
  );

  r360.renderToSurface(
    r360.createRoot('RightPanel'),
    rightPanel,
  );

  r360.renderToSurface(
    r360.createRoot('CenterPanel'),
    centerPanel,
  );


 // Location rendering
  r360.renderToLocation(
    r360.createRoot('ModelView'), // good position - change rotation settings
    new Location([0, 0, -6]),
  );


  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}

window.React360 = {init};
