$(function() {
    $.support.cors = true;
    LinkServer = new Linker('http://api.altiviaot.com');
});


function Linker (url) {
    var baseUrl = (url.substring(url.length-1) === "/")? url.substring(0, url.length-1) : url,
        extension = '.json?';
    
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