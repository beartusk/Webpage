import $ from 'jquery'
import _ from 'lodash'

import React from 'react'
import {
  Table,
  Button,
  ButtonGroup,
  Grid,
  Row,
  Col,
  Panel,
  DropdownButton,
  MenuItem
} from 'react-bootstrap'


export default class Test extends React.Component {

    _setVal(idVal, val1)
    {
      document.getElementById(idVal).value = val1;
      document.getElementById(idVal+'Val').innerHTML = val1;
    }

  render() {
    return (
      <div className="planetBG col-xs-12 col-sm-12 col-md-12 col-lg-12">
<div>
  <Panel>
    <Panel.Heading>Panel heading without a title</Panel.Heading>
    <Panel.Body>Panel content</Panel.Body>
  </Panel>
  <Panel>
    <Panel.Heading>
      <Panel.Title componentClass="h3">Panel heading with a title</Panel.Title>
    </Panel.Heading>
    <Panel.Body>Panel content</Panel.Body>
  </Panel>
</div>;
      </div>
    )
  }
}

