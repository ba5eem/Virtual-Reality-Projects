import {ReactInstance} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    ...options,
  });

  r360.renderToSurface(
    r360.createRoot('SlideshowSample', {
      photos: [
        {uri: './static_assets/sensing.jpg', title: 'Remote Sensing', format: '3DTB'},
        {uri: './static_assets/astro.jpg', title: 'Astronomy', format: '3DTB'},
        {uri: './static_assets/sensor.jpg', title: 'Sensor Development', format: '2D'},
        {uri: './static_assets/ocean.jpg', title: 'Ocean Science & Technology', format: '2D'},
        // Add your own 180 / 360 photos to this array,
        // with an associated title and format
      ],
    }),
    r360.getDefaultSurface(),
  );
}

window.React360 = {init};