$dvbs.pubSub.subscribe('BeforeDecisionRender', '9067ba30b4f04f199362f8dbd0bbd570', 'ModifyAdTagWithBsImpId', function(){var impId = '9067ba30b4f04f199362f8dbd0bbd570';if($dvbs && $dvbs.tags[impId] && typeof($dvbs.tags[impId].tagAdtag) == 'string') {$dvbs.tags[impId].tagAdtag = $dvbs.tags[impId].tagAdtag.replace(/\[url_encoded_publisher_data\]/g,encodeURIComponent('9067ba30b4f04f199362f8dbd0bbd570'));}});setTimeout(function(){
    'use strict';
    try{
        var stringifyFunc = null;
		if(window.JSON){
			stringifyFunc = window.JSON.stringify;
		} else {
			if(window.parent && window.parent.JSON){
				stringifyFunc = window.parent.JSON.stringify;
			}
		}
		if(!stringifyFunc){
			return;
		}
        var msg = {
            action: 'notifyBrandShieldAdEntityInformation',
            bsAdEntityInformation: {
                brandShieldId:'9067ba30b4f04f199362f8dbd0bbd570',
                comparisonItems:[{name : 'cmp', value : 2934949},{name : 'plmt', value : 2935071}]
            }
        };
        var msgString = stringifyFunc(msg);
        var bst2tWin = null;

        var findAndSendMessage = function() {
            if (!bst2tWin) {
                var frame = document.getElementById('bst2t_698555604554');
                if (frame) {
                    bst2tWin = frame.contentWindow;
                }
            }

            if (bst2tWin) {
                bst2tWin.postMessage(msgString, '*');
            }
        };

        findAndSendMessage();
        setTimeout(findAndSendMessage, 50);
        setTimeout(findAndSendMessage, 500);
    } catch(err){}
}, 10);function pixel(message){$dv.registerEventCall($uid,{dvp_vs:message})}var visibilityStateEnum={hidden:1,visible:2,prerender:3,unloaded:4};try{function handleVisibilityChange(){var _visibilityState=document.visibilityState;if(tmpData[$uid]=='prerender'&&_visibilityState=='visible'){tmpData[$uid]=_visibilityState;pixel(visibilityStateEnum[_visibilityState])}}var _visibilityState=document.visibilityState;if(_visibilityState=='prerender'){var tmpData={};tmpData[$uid]=_visibilityState;pixel(visibilityStateEnum[_visibilityState]);var hidden,visibilityChange;if(typeof document.hidden!=='undefined'){hidden='hidden';visibilityChange='visibilitychange'}else if(typeof document.mozHidden!=='undefined'){hidden='mozHidden';visibilityChange='mozvisibilitychange'}else if(typeof document.msHidden!=='undefined'){hidden='msHidden';visibilityChange='msvisibilitychange'}else if(typeof document.webkitHidden!=='undefined'){hidden='webkitHidden';visibilityChange='webkitvisibilitychange'}document.addEventListener(visibilityChange,handleVisibilityChange,false)}}catch(e){pixel('error_'+e.message)};var impId = '9067ba30b4f04f199362f8dbd0bbd570';var dvObj = $dvbs;var rtnName = dvObj==window.$dv ? 'ImpressionServed' : 'BeforeDecisionRender';dvObj.pubSub.subscribe(rtnName, impId, 'HE_RTN', function () { try {var lbl='';var f=dvObj==window.$dv,g=f?parent:window,h=dvObj.tags[impId].protocol+'/'+'/'+(dvObj.tags[impId].ServerPublicDns||dvObj.tags[impId].serverPublicDns)+'/'+(f?'event':'bsevent')+'.gif?impid='+impId,i=0,j=[];function k(a,c){function b(){if(!n[c]&&(rhe(c),n[c]=!0,a))for(var d=0;d<e.length;d++)a.removeEventListener?a.removeEventListener(e[d],b):a.detachEvent?a.detachEvent('on'+e[d],b):a['on'+e[d]]=void 0}var e='click input change focus keyup textInput keypress paste'.split(' '),n=[];n[c]=!1;if(a)for(var d=0;d<e.length;d++)a.addEventListener?a.addEventListener(e[d],b,!0):a.attachEvent?a.attachEvent('on'+e[d],b):a['on'+e[d]]=b}window.rhe=function(a){var c='';'number'===typeof a&&void 0==j[a]&&(j[a]=!0,i+=a,c='&'+lbl+'heas='+i);dvObj.domUtilities.addImage(h+'&'+lbl+'hea=1'+c,dvObj.tags[impId].tagElement.parentNode)};g.rhe=rhe;function l(a,c){var b=document.createElement(a);b.id=(c||a)+'-'+impId;b.style.visibility='hidden';b.style.position='absolute';return b}function m(a){var c=o;Object.defineProperty(c,a,{get:function(){return this.getAttribute(a)},set:function(b){this.setAttribute(a,b);'createEvent'in document?(b=document.createEvent('HTMLEvents'),b.initEvent('change',!1,!0),c.dispatchEvent(b)):(b=document.createEventObject(),c.fireEvent('onchange',b))}})}var p=l('form');p.submit=function(){window.rhe(1)};var o=l('input','txt');o.name=o.id;o.type='text';m('value');m('textContent');var q=l('input','btn');q.name=q.id;q.type='button';var r=l('input','sbmt');r.name=r.id;r.type='submit';r.click=function(){window.rhe(2)};var s=l('a');s.href='javascript:window.rhe(16);';g.document.body.insertBefore(p,null);g.document.body.insertBefore(s,null);p.insertBefore(o,null);p.insertBefore(q,null);p.insertBefore(r,null);k(o,8);k(q,4);k(r,2);k(p,1);} catch (e) {}; });var impId = '9067ba30b4f04f199362f8dbd0bbd570';var dvObj = $dvbs;var rtnName = dvObj==window.$dv ? 'ImpressionServed' : 'BeforeDecisionRender';dvObj.pubSub.subscribe(rtnName, impId, 'HE_RTN', function () { try {function t(){function r(){j()}function k(a,b,c){a.addEventListener?a.addEventListener(b,c):a.attachEvent?a.attachEvent("on"+a,c):a["on"+b]=c}function u(a){var a=a||window.event,b=a.pageX,c=a.pageY;void 0===b&&(b=a.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,c=a.clientY+document.body.scrollTop+document.documentElement.scrollTop);d++;0==d?e=new Date:20==d&&(s=new Date,a=s.getTime(),a==e.getTime()&&a++,f=1E3*(g/d/(a-e.getTime())),0<=h&&(l=(l*h+f)/(h+1)),h++,f>m&&(m=Math.floor(f)),d=-1,g=0,e=new Date);0<i&&(a=Math.sqrt((b-i)*(b-i)+(c-n)*(c-n)),g+=a,o+=a);i=b;n=c}function j(){var a=[],b="avs="+Math.floor(l),c="tdis="+Math.floor(o);a.push("mxs="+m);a.push(b);a.push(c);b=dvObj.tags[p];b=b.dv_protocol+"//"+(b.ServerPublicDns||b.serverPublicDns)+v+"?impid="+p;c=[];if("undefined"!==typeof a)for(var d=0;d<a.length;d++)c.push(a[d]);b+="&"+c.join("&");dvObj.domUtilities.addImage(b,dvObj.tags[p].tagElement.parentElement)}var v=function(){var a={};"object"===typeof window.$dvbs&&(a.c=impId,a.b=$dvbs,a.a="/bsevent.gif");"object"===typeof window.$dvbsr&&(a.c=impId,a.b=$dvbsr,a.a="/bsevent.gif");"object"===typeof window.$dv&&(a.c=$uid,a.b=$dv,a.a="/event.gif");return a}().a,p=impId,e,s,i=-1,n=-1,f=0,d=-1,g=0,m=0,o=0,l=0,h=0,q=dvObj==window.$dv?parent:window;this.exec=function(){setTimeout(function(){j()},1E4);waitTimeTwo=setTimeout(function(){j()},3E4);k(q,"onunload",r);k(q,"beforeunload",r);k(q.document,"mousemove",u)}}try{(new t).exec()}catch(w){};} catch (e) {}; });


try{__tagObject_callback_698555604554({ImpressionID:"9067ba30b4f04f199362f8dbd0bbd570", ServerPublicDns:"tps613.doubleverify.com"});}catch(e){}
try{$dvbs.pubSub.publish('BeforeDecisionRender', "9067ba30b4f04f199362f8dbd0bbd570");}catch(e){}
try{__verify_callback_698555604554({
ResultID:2,
Passback:"",
AdWidth:728,
AdHeight:90});}catch(e){}
try{$dvbs.pubSub.publish('AfterDecisionRender', "9067ba30b4f04f199362f8dbd0bbd570");}catch(e){}
