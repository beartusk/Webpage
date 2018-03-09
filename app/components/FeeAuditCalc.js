import $ from 'jquery'
import _ from 'lodash'
//import ImageResponsive, {Source} from 'react-image-responsive';

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
  MenuItem,
  Well
} from 'react-bootstrap'


export default class FeeAuditCalc extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      showRate: false,
      validProcessingInput: null,
      CurRateState: 0,
      CurMonthState: 0,
      CurAnnualState: 0,
      NewRateState1: 0,
      NewRateState2: 0,
      NewAnnualState: 0,
      NewMonthState: 0,
      SaveRateState: 0,
      SaveMonthState: 0,
      SaveAnnualState: 0
    };

  }


  componentWillMount(){

  }

  dollarize(input){
    let money = input.toString();
    let length = money.length;
    if(length > 7){
      length = 7;
    }
    money = money.substring(0,length);
    if(money.charAt(length-1) == "."){
      return("$"+money+"00");
    }
    else if(money.charAt(length-2) == "."){
      return("$"+money+"0");
    }
    else if(money.charAt(length-3) == "."){
      return("$"+money);
    }
    else if(money.charAt(length-4) == "."){
      return("$"+money);
    }
    else if(money.charAt(length-5) == "."){
      return("$"+money);
    }
    else if(money.charAt(length-6) == "."){
      return("$"+money);
    }
    return("$"+money+".00");
  }

  percent(input){
    let percent = input.toString();
    let length = percent.length;
    if(length > 4){
      length = 4;
    }
    let newPercent = percent.substring(0,length);
    return(newPercent+"%");
  }

  newRates(){
    return(
      <div>
        <div className="row">
          <section className="col-4">
            <Panel bsStyle="danger">
              <Panel.Heading>
                <Panel.Title componentClass="h3">Current Rates</Panel.Title>
              </Panel.Heading>
              <Panel.Body>
                <form className="smart-form">
                  <fieldset>
                    <div className="row">
                      <section className="col col-12">
                        <label className="label">Your Current Effective Rate</label>
                        <label className="input">
                          <input id='CurRate' type="text" value={this.percent(this.state.CurRateState)} style={{ height: 30, fontSize: 15, marginTop: 5}} readOnly/>
                        </label>
                      </section>
                    </div>
                    <div className="row">
                      <section className="col col-12">
                        <label className="label">Your Current Monthly Cost</label>
                        <label className="input">
                          <input id='CurMonth' type="text" value={this.dollarize(this.state.CurMonthState)} style={{ height: 30, fontSize: 15, marginTop: 5}} readOnly/>
                        </label>
                      </section>
                      <section className="col col-12">
                        <label className="label">Your Current Annual Cost</label>
                        <label className="input">
                          <input id='CurAnnual' type="text" value={this.dollarize(this.state.CurAnnualState)} style={{ height: 30, fontSize: 15, marginTop: 5}} readOnly/>
                        </label>
                      </section>
                    </div>
                  </fieldset>
                </form>
              </Panel.Body>
            </Panel>
          </section>
          <section className="col-4">
            <Panel bsStyle="primary">
              <Panel.Heading>
                <Panel.Title componentClass="h3">Our Rates</Panel.Title>
              </Panel.Heading>
              <Panel.Body>
                <form className="smart-form">
                  <fieldset>
                    <div className="row">
                      <section className="col col-12">
                        <label className="label">Your New Effective Rate</label>
                        <label className="input">
                          <input id='NewRate' type="text" value={this.percent(this.state.NewRateState1)} style={{ height: 30, fontSize: 15, marginTop: 5}} readOnly/>
                        </label>
                      </section>
                    </div>
                    <div className="row">
                      <section className="col col-12">
                        <label className="label">Your New Monthly Cost</label>
                        <label className="input">
                          <input id='NewMonth' type="text" value={this.dollarize(this.state.NewMonthState)} style={{ height: 30, fontSize: 15, marginTop: 5}} readOnly/>
                        </label>
                      </section>
                      <section className="col col-12">
                        <label className="label">Your New Annual Cost</label>
                        <label className="input">
                          <input id='NewAnnual' type="text" value={this.dollarize(this.state.NewAnnualState)} style={{ height: 30, fontSize: 15, marginTop: 5}} readOnly/>
                        </label>
                      </section>
                    </div>
                  </fieldset>
                </form>
              </Panel.Body>
            </Panel>
          </section>
          <section className="col-4">
            <Panel bsStyle="success">
              <Panel.Heading>
                <Panel.Title componentClass="h3">Your Savings!</Panel.Title>
              </Panel.Heading>
              <Panel.Body>
                <form className="smart-form">
                  <fieldset>
                    <div className="row">
                      <section className="col col-12">
                        <label className="label">Our rate is lower by</label>
                        <label className="input">
                          <input id='SaveRate' type="text" value={this.percent(this.state.SaveRateState)} style={{ height: 30, fontSize: 15, marginTop: 5}} readOnly/>
                        </label>
                      </section>
                    </div>
                    <div className="row">
                      <section className="col col-12">
                        <label className="label">You save per month</label>
                        <label className="input">
                          <input id='SaveMonth' type="text" value={this.dollarize(this.state.SaveMonthState)} style={{ height: 30, fontSize: 15, marginTop: 5}} readOnly/>
                        </label>
                      </section>
                      <section className="col col-12">
                        <label className="label">You save per year</label>
                        <label className="input">
                          <input id='SaveAnnual' type="text" value={this.dollarize(this.state.SaveAnnualState)} style={{ height: 30, fontSize: 15, marginTop: 5}} readOnly/>
                        </label>
                      </section>
                    </div>
                  </fieldset>
                </form>
              </Panel.Body>
            </Panel>
          </section>
        </div>
        <br/>
        <div className="row">
          <section className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xs-offset-3 col-sm-offset-3 col-md-offset-3 col-lg-offset-3">
            <Button bsStyle="primary" bsSize="large" style={{height: 60, fontSize: 30}} block onClick={() => {window.location = "https://paymentportal.us/create-account"}}>
              Lock In These Rates!
            </Button>
          </section>
        </div>
      </div>
    );
    //Former form section in Our Rates. Keeping it here incase i need it later
    /*
    <section className="col col-1">
      <br/>
      <br/>
      <label className="label"> + </label>
    </section>
    <section className="col col-4">
      <label className="label">Monthly Fee</label>
      <label className="input">
        <input id='NewRate' type="text" value={this.dollarize(this.state.NewRateState2)} style={{ height: 30, fontSize: 15, marginTop: 5}} readOnly/>
      </label>
    </section>
    */
  }

  ratePlaceHolder(){
    if(this.state.validProcessingInput === null){
      return(
        <section className="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xs-offset-2 col-sm-offset-2 col-md-offset-2 col-lg-offset-2">
          <Well>
            <h4>Please enter values in the boxes above in order to see your New Rates!</h4>
          </Well>
        </section>
      )
    }else if (this.state.validProcessingInput == false) {
      return(
        <section className="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xs-offset-2 col-sm-offset-2 col-md-offset-2 col-lg-offset-2">
          <Well>
            <h4>The values you entered above were either blank or incompatible with this application</h4>
          </Well>
          <br/>
          <Well>
            <h4>Please enter valid values in the boxes above in order to see your New Rates!</h4>
          </Well>
        </section>
      )
    }
  }

  setRates(event){
    let monthlySales = $("#CCSales").val();
    let averageTicket = $("#AT").val();
    let monthlyTransactions = $("#MTC").val();
    let currentFees = $("#CPF").val();

    let curRate = (currentFees/monthlySales)*100;
    let newRate1 = 0;
    let newRate2 = 0.2*monthlyTransactions;;
    if($("#RR").is(":checked") || $("#NP").is(":checked")){
      newRate1 = 0.0199 + (newRate2+15)/monthlySales;
    }else if ($("#PMO").is(":checked") || $("#eCom").is(":checked")) {
      newRate1 = 0.0355 + (newRate2+15)/monthlySales;
    }
    let newMonth = (newRate1*monthlySales);

    this.setState({
      CurRateState: curRate,
      CurMonthState: currentFees,
      CurAnnualState: currentFees*12,
      NewRateState1: newRate1*100,
      NewRateState2: newRate2,
      NewMonthState: newMonth,
      NewAnnualState: newMonth*12,
      SaveRateState: 100*(1-newRate1*100/curRate),
      SaveMonthState: currentFees-newMonth,
      SaveAnnualState: (currentFees-newMonth)*12
    });
    //Former attempts at manipulation the DOM values through refs and jQuery
    //event.ratesShow.getElementById("CurRate").value = "11";
    //this.newRates.$("#CurRate").val("11");
    //console.log(this.newRates.$("#CurRate").val());

    if(!isNaN(monthlySales) & monthlySales > 0 & !isNaN(averageTicket) & averageTicket > 0 & !isNaN(monthlyTransactions) & monthlyTransactions > 0 & !isNaN(currentFees) & currentFees > 0){
      if($("#PMO").is(":checked") || $("#eCom").is(":checked") || $("#RR").is(":checked") || $("#NP").is(":checked")){
        this.setState({showRate: true});
      }
      else{
        this.setState({validProcessingInput: false})
      }
    }
    else{
      this.setState({validProcessingInput: false})
    }
  }

  _setService(idVal, val1)
  {
    document.getElementById(idVal).value = val1;
    this.setState({serviceType: val1});
  }

  _setVal(idVal, val1)
  {
    document.getElementById(idVal).value = val1;
    document.getElementById(idVal+'Val').innerHTML = val1;
  }

  render() {
    let rates;
    let ratesShow = this.newRates();
    let ratesNull = this.ratePlaceHolder();
    if(this.state.showRate == true){
      rates = ratesShow
    }else{
      rates = ratesNull
    }

    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{width: "100%", height: "100%", backgroundImage: `url("/assets/img/HD-Free-Background.png")`}}>
        <br />
        <br />
        <br />
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xs-offset-3 col-sm-offset-3 col-md-offset-3 col-lg-offset-3">
          <Panel style={{marginTop: "100", paddingTop: "100"}}>
        	  <Panel.Heading>
        	    <Panel.Title componentClass="h3">Free Payment Processing Fee Audit</Panel.Title>
        	  </Panel.Heading>
        	  <Panel.Body>
              <form className="smart-form">
                <fieldset>
                  <div className="row">
                    <section className="col col-12">
                      <div>
                        <label className="label">Business Type</label>
                        <label className="radio"><input type='radio' name="Business Type" id="RR"/><i/>Retail or Restaurant</label>
                        <label className="radio"><input type='radio' name="Business Type" id="NP"/><i/>Non-Profit</label>
                        <label className="radio"><input type='radio' name="Business Type" id="PMO"/><i/>Phone / Mail Orders</label>
                        <label className="radio"><input type='radio' name="Business Type" id="eCom"/><i/>eCommerce</label>
                      </div>
                    </section>
                  </div>
                  <div className="row">
                    <section className='col col-4'>
                      <label className="label">Monthly Credit Card Sales</label>
                      <label className="input">
                        <input ref="CCSales" type="number" min="0.01" step="0.01" id="CCSales"/>
                      </label>
                    </section>
                  </div>
                  <div className="row">
                    <section className='col col-4'>
                      <label className="label">Average Ticket</label>
                      <label className="input">
                        <input ref="AT" type="number" min="0.01" step="0.01" id="AT"/>
                      </label>
                    </section>
                    <section className='col col-4'>
                      <label className="label">Monthly Transaction Count</label>
                      <label className="input">
                        <input ref="MTC" type="text" id="MTC"/>
                      </label>
                    </section>
                  </div>
                  <div className="row">
                    <section className='col col-4'>
                      <label className="label">Current Processing Fees</label>
                      <label className="input">
                        <input ref="CPF" type="number" min="0.01" step="0.01" id="CPF"/>
                      </label>
                    </section>
                  </div>
                  <br/>
                  <div className="row">
                    <section className="col col-3">
                      <Button bsStyle="primary" bsSize="large" block onClick={this.setRates.bind(this)}>
                        Calculate Rates
                      </Button>
                    </section>
                  </div>
                  <br/>
                </fieldset>
              </form>
              {rates}
	          </Panel.Body>
          </Panel>
        </div>;
      </div>
    )
  }
}
