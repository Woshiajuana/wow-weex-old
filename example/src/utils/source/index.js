import config from '../../config/env'

let source = (name) => {
    return config.PICTURE_URL + name;
};

source.getHtml = (name) => {
    return config.HTML_URL + name;
};

source.getJson = (name) => {
    return config.JSON_URL + name;
};

export default source;
