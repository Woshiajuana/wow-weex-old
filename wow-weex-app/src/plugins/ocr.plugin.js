const ocr = weex.requireModule('ocrModule');
import './Promise'
export default {
    cardIdSideFront: () => new Promise((resolve, reject) => {
        ocr.cardIdSideFront(e => {
            e.code === '0000' ? resolve(e.data) : reject(e);
        });
    }),

    cardIdSideBack: () => new Promise((resolve, reject) => {
        ocr.cardIdSideBack(e => {
            e.code === '0000' ? resolve(e.data) : reject(e);
        });
    }),

    cardIdOnlyNameId: () => new Promise((resolve, reject) => {
        ocr.cardIdOnlyNameId(e => {
            e.code === '0000' ? resolve(e.data) : reject(e);
        });
    }).handle(),

    scanBankCard: options => new Promise((resolve, reject) => {
        ocr.scanBankCard(options, e => {
            e.code === '0000' ? resolve(e.data) : reject(e);
        });
    }).handle(),

    startLiveness: options => new Promise((resolve, reject) => {
        ocr.startLiveness(options, e => {
            e.code === '0000' ? resolve(e.data) : reject(e);
        });
    }).handle(),
};
