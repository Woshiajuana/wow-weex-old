import SWITCH_ENV from '../../config/release'
import BD_IP from '../../config/ip'
/**===================本地环境====================*/
const BD_ENV = {
    /**js地址*/
    TREE_BASE_URL:'http://'+ BD_IP +':13140/dist/BD'
};

/**===================测试环境====================*/
const CS_ENV = {
    /**js地址*/
    TREE_BASE_URL:'http://ptstatics.oss-cn-shanghai.aliyuncs.com/dianshua_cs/js/0.0.1'
};

/**===================生产环境====================*/
const SC_ENV = {
    /**js地址*/
    TREE_BASE_URL:'123123123'
};

var ENV = {};

switch (SWITCH_ENV) {
    case 'BD':
        ENV = BD_ENV;
        break;
    case 'CS':
        ENV = CS_ENV;
        break;
    case 'SC':
        ENV = SC_ENV;
        break;
}

export default ENV;
