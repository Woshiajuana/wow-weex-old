
import bd_env from '../../src/config/env/BD'
import cs_env from '../../src/config/env/CS'
import sc_env from '../../src/config/env/SC'
import env    from '../../config/release'

let url = '';
switch (env) {
    case 'BD':
        url = bd_env.PICTURE_URL;
        break;
    case 'CS':
        url = cs_env.PICTURE_URL;
        break;
    case 'SC':
        url = sc_env.PICTURE_URL;
        break;
}


export default [
    {
        "components":[
            {
                "data":[
                    {
                        "icon": url + "jfb_mine_menu_1.png",
                        "_middleware":[
                            {
                                "token":true
                            },
                            {
                                "dispatch":"jfb_certification"
                            }
                        ],
                        "title":"实名认证"
                    },
                    {
                        "icon": url + "jfb_mine_menu_2.png",
                        "_middleware":[
                            {
                                "token":true
                            },
                            {
                                "authen":true
                            },
                            {
                                "push":"jfb_drawing_account_manage"
                            }
                        ],
                        "title":"绑定提款卡"
                    },
                    {
                        "icon": url + "jfb_mine_menu_3.png",
                        "_middleware":[
                            {
                                "token":true
                            },
                            {
                                "push":"jfb_trade_record"
                            }
                        ],
                        "title":"交易记录"
                    },
                    {
                        "icon": url + "jfb_mine_menu_4.png",
                        "_middleware":[
                            {
                                "token":true
                            },
                            {
                                "push":"jfb_accountsave"
                            }
                        ],
                        "title":"账号安全"
                    },
                    {
                        "icon": url + "jfb_mine_menu_5.png",
                        "_middleware":[
                            {
                                "token":true
                            },
                            {
                                "authen":true
                            },
                            {
                                "push":"jfb_credit_card_list"
                            }
                        ],
                        "title":"信用卡验证"
                    },
                    {
                        "icon": url + "jfb_mine_menu_6.png",
                        "_middleware":[
                            {
                                "push":"jfb_more"
                            }
                        ],
                        "title":"更多"
                    }
                ],
                "options":{
                    "type":"larger",
                    "each":3
                },
                "type":"catg"
            }
        ],
        "name":"jfb_mine",
        "type":"page"
    },
    {
        "components":[
            {
                "data":[
                    {
                        "icon": url + "jfb_wexin_icon.png",
                        "_middleware":[
                            {
                                "token":true
                            },
                            {
                                "push":"jfb_bindWeChat"
                            }
                        ],
                        "title":"绑定微信公众号"
                    },
                    {
                        "icon": url + "jfb_kefu_icon.png",
                        "_middleware":[
                            {
                                "dispatch":"call"
                            }
                        ],
                        "title":"联系客服"
                    },
                    {
                        "icon": url + "jfb_banben_icon.png",
                        "_middleware":[
                            {
                                "push":"jfb_version"
                            }
                        ],
                        "title":"版本信息"
                    }
                ],
                "type":"list"
            }
        ],
        "name":"jfb_more",
        "type":"page"
    }
]
