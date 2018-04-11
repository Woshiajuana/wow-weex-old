

export default [{
    "type": "page",
    "name": "ds_me",
    "components": [{
        "type": "ad",
        "data": [{
            "icon": "http://dsposweb.oss-cn-hangzhou.aliyuncs.com/Image/wd_11.png",
            "_middleware": [{
                "token": true
            }, {
                "link": "https://finumi.com/index.html?jf_phone=${PHONE}&appId=${APPID}"
            }]
        }, {
            "icon": "http://dsposweb.oss-cn-hangzhou.aliyuncs.com/Image/wd_8.png",
            "_middleware": [{
                "token": true
            }, {
                "link": "https://help.91dbq.com/comingpage"
            }]
        }]
    }, {
        "type": "catg",
        "data": [{
            "icon": "http://dsposweb.oss-cn-hangzhou.aliyuncs.com/Image/wd_1.png",
            "title": "绑定提款卡",
            "_middleware": [{
                "token": true
            }, {
                "authen": true
            }, {
                "push": "drawing_account_manage"
            }]
        }, {
            "icon": "http://dsposweb.oss-cn-hangzhou.aliyuncs.com/Image/wd_5.png",
            "title": "信用卡验证",
            "_middleware": [{
                "token": true
            }, {
                "authen": true
            }, {
                "push": "credit_card_list"
            }]
        }, {
            "icon": "http://dsposweb.oss-cn-hangzhou.aliyuncs.com/Image/wd_2.png",
            "title": "绑定微信公众号",
            "_middleware": [{
                "token": true
            }, {
                "push": "bindWeChat"
            }]
        }, {
            "icon": "http://dsposweb.oss-cn-hangzhou.aliyuncs.com/Image/wd_6.png",
            "title": "账号安全",
            "_middleware": [{
                "token": true
            }, {
                "push": "accountsave"
            }]
        }, {
            "icon": "http://dsposweb.oss-cn-hangzhou.aliyuncs.com/Image/wd_4.png",
            "title": "新手教程",
            "_middleware": [{
                "link": "http://www.jfpal.com/kdb/ic/jc/ds.html"
            }]
        }, {
            "icon": "http://dsposweb.oss-cn-hangzhou.aliyuncs.com/Image/wd_3.png",
            "title": "更多",
            "_middleware": [{
                "push": "more"
            }]
        }],
        "options": {
            "each": 3,
            "type": "larger"
        }
    }]
}, {
    "type": "page",
    "name": "more",
    "components": [{
        "type": "list",
        "data": [{
            "icon": "http://dsposweb.oss-cn-hangzhou.aliyuncs.com/Image/gd_2.png",
            "title": "联系客服",
            "_middleware": [{
                "dispatch": "call"
            }]
        }, {
            "icon": "http://dsposweb.oss-cn-hangzhou.aliyuncs.com/Image/gd_1.png",
            "title": "版本信息",
            "_middleware": [{
                "push": "version"
            }]
        }]
    }]
}]
