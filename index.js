// ==UserScript==
// @name         超星期刊正文显示
// @namespace    https://www.moyu.moe/
// @homepage     https://github.com/MoyuScript/chaoxing-qikan-body-shower
// @supportURL   https://github.com/MoyuScript/chaoxing-qikan-body-shower/issues/new
// @version      0.1
// @description  超星期刊 WEB 端正文显示
// @author       MoyuScript
// @match        *://qikan.chaoxing.com/detail_*
// @icon         https://www.google.com/s2/favicons?domain=chaoxing.com
// @updateURL    https://raw.githubusercontent.com/MoyuScript/chaoxing-qikan-body-shower/main/index.js
// @downloadURL  https://raw.githubusercontent.com/MoyuScript/chaoxing-qikan-body-shower/main/index.js
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
  'use strict';

   const body_url = 'http://m.chaoxing.com/mqk/read_' + location.pathname.split('_')[1];
   const $iframe = document.createElement('iframe');
   $iframe.src = body_url;
   $iframe.width = '100%';
   $iframe.style.minHeight = '80vh';
   const $el = document.querySelector('.Fmian1');
   if ($el){
     $el.after($iframe);
   }
})();