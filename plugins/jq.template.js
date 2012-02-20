/**
 * jq.web.template - a javascript template library
 * Templating from John Resig - http://ejohn.org/ - MIT Licensed
 */
(function($) {

    var cache = {};

    $.template = $.tmpl = function(tmpl, data) {
        var fn = !/\W/.test(str) ? cache[str] = cache[str] || tmpl(document.getElementById(str).innerHTML) : new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};" + "with(obj){p.push('" + str.replace(/[\r\t\n]/g, " ").replace(/'(?=[^%]*%>)/g, "\t").split("'").join("\\'").split("\t").join("'").replace(/<%=(.+?)%>/g, "',$1,'").split("<%").join("');").split("%>").join("p.push('") + "');}return p.join('');");
        return data ? fn(data) : fn;
    };

})(jq);