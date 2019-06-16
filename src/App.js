import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Collapsible, CollapsibleItem, Navbar } from 'react-materialize';

class App extends Component {
  render() {
  return (
    <div className="App">
      <Navbar brand={                    
        <span className="brand">
          Tressa Ries
        </span>  
        } centerLogo>
      </Navbar>
      <div className="container">     
        <Collapsible popout>
            <CollapsibleItem header="Hello" icon="done_outline">
              <ul>
                <li>Ties To North Texas</li>
                <li>Family</li> 
              </ul>            </CollapsibleItem>
            <CollapsibleItem header="Leadership" icon="done_outline">
              <ul>
                <li>Collaborative Approach Preferred, Multidimensional As Apropos </li>
                <li>Team Building and Staff Development</li> 
              </ul>
            </CollapsibleItem>
            <CollapsibleItem header="Institutional Accounting & Financial Reporting" icon="done_outline">
              <ul>
                <li>Generated All Financial Statements and Provided Analysis for External and Internal Reporting</li>
                <li>Forecasted Impact of New Accounting Pronouncements</li> 
                <li>Prepared Finacial Information for External Surveys</li> 
              </ul>
            </CollapsibleItem>
            <CollapsibleItem header="Property, Facilities, & Construction Management" icon="done_outline">
              <ul>
                <li>Managed Payments for Leased Properties for Target Corporation</li>
                <li>Acted as Delegated Authority for Contract Approval for State Controller</li> 
                <li>Verified State Capital Appropriations Complied with State Statutes </li> 
              </ul>
            </CollapsibleItem>
            <CollapsibleItem header="Investment & Endowment Management" icon="done_outline">
              <ul>
                <li>Reported Investment Activity to Board of Trustees</li>
                <li>Chaired the Defined Contribution Plan Investment Committee</li> 
                <li>Allocated Spending Authorization and Monitored Compliance</li> 
              </ul>          
            </CollapsibleItem>
            <CollapsibleItem header="Administrative Services" icon="done_outline">
              <ul>
                <li>Designed and Implemented Administrative Shared Services</li>
                <li>Established Change Agent Network</li> 
              </ul>          
            </CollapsibleItem>
            <CollapsibleItem header="Budget & Appropriations" icon="done_outline">
              <ul>
                <li>Managed Budget, Forecast, and Requests</li>
                <li>Oversaw Expenditure Compliance & Allowability</li> 
                <li>Enacted Deficit Account Resolution</li> 
              </ul>
            </CollapsibleItem>
            <CollapsibleItem header="Information Systems Administration" icon="done_outline">
              <ul>
                <li>Designed Finacial Operations Websites </li>
                <li>Led Function & Testing of Financial and HR Data Systems</li> 
                <li>Implemented New Travel and Expense Management System</li> 
              </ul>          </CollapsibleItem>
            <CollapsibleItem header="Policy, Compliance, & Risk Management" icon="done_outline">
              <ul>
                  <li>Developed, Revised, and Enforced University Fiscal Policy and Procedures</li>
                  <li>Ensured University with Laws and Regulations</li> 
                  <li>Mitigated Risk through Policy and Insurance Review</li> 
              </ul> 
            </CollapsibleItem>
            <CollapsibleItem header="Why MSU" icon="done_outline">
              <ul>
                  <li>Affordable Libral Arts Education</li>
                  <li>Focus on Building a Strong, Diverse and Vibrant University Community</li> 
                  <li>Collegial Administrative Culture</li> 
              </ul>
            </CollapsibleItem>
        </Collapsible>
      </div>
    </div>
  );
}
}

export default App;
