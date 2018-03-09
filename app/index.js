window.jQuery = window.$ =  require("jquery");
window._ = require('lodash');

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/css/bootstrap-grid.css'
import '../node_modules/bootstrap/dist/css/bootstrap-reboot.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import '../node_modules/popper.js/dist/popper.js'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
//import './assets/css/font-awesome.min.css'
//import './assets/css/smartadmin-production-plugins.min.css'
//import './assets/css/smartadmin-production.min.css'
//import './assets/css/smartadmin-skins.min.css'
//import './assets/css/smartadmin-react.css'

import 'core-js/es6/array'
import 'core-js/es6/promise'
import 'core-js/es6/object'

import 'jquery-ui-npm/jquery-ui.min.js'
import 'imports-loader?jQuery=jquery!jquery-color/jquery.color.js'

import FeeAuditCalc from '../app/components/FeeAuditCalc'
import Test from '../app/components/Test'
import React from 'react'
import {render} from 'react-dom'


render(<FeeAuditCalc />, document.getElementById('app'))
