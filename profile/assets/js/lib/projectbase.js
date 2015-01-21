$(function() {
    LinkServer = new Linker("http://altiviaot.com/profile/api");
    LinkServer.setExtension(".json?");
});

$.support.cors = true;

var uget = function (params) {
    return $.ajax({
        xhrFields: {
            withCredentials: true
        }, type: (params.type)? params.type : 'GET',
        url: (params.url)? params.url : '',
        data: (params.data)? params.data : {},
        crossDomain: true
    });
};

var parametrizer = function (form, inArray) {
    var tmp = form.serializeArray(),
        params = {};
    for(var i in tmp) {
        if(inArray) {
            if(!params[tmp[i].name]) {
                params[tmp[i].name] = [];
            }

            params[tmp[i].name].push(tmp[i].value);
        } else {
            params[tmp[i].name] = tmp[i].value;
        }
    }

    return params;
};

function Linker (url) {
    var baseUrl = (url.substring(url.length-1) === "/")? url.substring(0, url.length-1) : url,
        extension = '.php?';

    this.Url = function (controller, action, get) {
        var strget = "";

        for(var key in get) {
            if(!isNaN(key)) {
                strget += get[key] + '/';
            } else {
                strget += key + '=' + get[key] + '&';
            }
        }

        //strget = (strget.length > 0)? strget.substring(0, strget.length-1) : strget;
        if(controller.length > 0) {
            if(action.length > 0) {
                return baseUrl + '/' + controller + '/' + action + extension + strget;
            } else {
                return baseUrl + '/' + controller;
            }
        } else {
            return baseUrl;
        }
    };

    this.Abslute = function (url) {
        return baseUrl + '/' + url;
    };

    this.setBaseUrl = function (url) {
        baseUrl = (url.substring(url.length-1) === "/")? url.substring(0, url.length-1) : url;
    };

    this.setExtension = function (ext) {
        extension = ext;
    };
};