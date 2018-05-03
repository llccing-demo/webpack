// import React from 'react';
// import ReactDOM from 'react-dom';

import Vue from 'vue';
import iview from 'iview';
import 'iview/dist/styles/iview.css'
import 'bootstrap/scss/bootstrap.scss'

Vue.use(iview);

new Vue({
    el: '#app',
    data() {
        return {
            msg: 123123
        };
    }
});
