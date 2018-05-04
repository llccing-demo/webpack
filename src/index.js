// import React from 'react';
// import ReactDOM from 'react-dom';

import Vue from 'vue';

import iview from 'iview';
import 'iview/dist/styles/iview.css';
import 'bootstrap/scss/bootstrap.scss';
import './style.css';

Vue.use(iview);

new Vue({
    el: '#app',
    data() {
        return {
            msg: '33333333333333333333333333333333333333333'
        };
    }
});

console.log($)

if (module.hot) {
    // 实现热更新
    module.hot.accept();
}