const camera = weex.requireModule('photoModule');
import './Promise'
export default {
  take: () => new Promise((resolve, reject) => {
    camera.capturePhoto(e => {
      e.code === '0000' ? resolve({
        image: 'data:image/png;base64,' + e.data.imageBase64,
        base64: e.data.imageBase64,
        sign: e.data.imageSign,
      }) : reject(e);
    });
  }).handle(),

  pick: () => new Promise((resolve, reject) => {
    camera.selectPhoto(e => {
      e.code === '0000' ? resolve({
        image: 'data:image/png;base64,' + e.data.imageBase64,
        base64: e.data.imageBase64,
        sign: e.data.imageSign,
      }) : reject(e);
    });
  }).handle(),
};
