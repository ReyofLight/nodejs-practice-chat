function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003C!DOCTYPE html\u003E\u003Chtml\u003E(lang=\"en\")\u003Chead\u003E\u003Ctitle\u003E" + (pug_escape(null == (pug_interp = "Real Time web Chat") ? "" : pug_interp)) + "\u003C\u002Ftitle\u003E\u003C\u002Fhead\u003E\u003Cbody\u003E\u003Cdiv id=\"content\" style=\"width: 500px; height: 300px; margin: 0 0 20px 0; border: solid 1px #999; overflow-y: scroll;\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"controls\"\u003E\u003Cinput id=\"field\" style=\"width:350px;\"\u003E\u003Cinput id=\"send\" type=\"button\" value=\"send\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";;return pug_html;}