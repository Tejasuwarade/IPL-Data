import React from "react";  
import Data from './data.json'; //importing data from local file
import Component from './components/component.js';   //importing components from component folder
import {AgGridReact} from 'ag-grid-react';  //Ag-Grid is library which helps to show data in tabular form
import 'ag-grid-community/dist/styles/ag-grid.css'; //it is used to style the table
import 'ag-grid-community/dist/styles/ag-theme-balham.css'; //it is theme which is used for professional heavy data
import {directive} from '@babel/types'; //it is compiler which compiles javascript code
import './index.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      columnDefs:[     //this are different columns that will be in our Table
        {headerName:'ID',field:'id',sortable:true,filter:true,checkboxSelection:true},
        {headerName:'Season',field:'season',sortable:true,filter:true},
        {headerName:'City',field:'city',sortable:true,filter:true}, 
        {headerName:'Date',field:'date',sortable:true,filter:true},  
        {headerName:'Team1',field:'team1',sortable:true,filter:true},  
        {headerName:'Team2',field:'team2',sortable:true,filter:true},  
        {headerName:'Toss-Winner',field:'toss_winner',sortable:true,filter:true},  
        {headerName:'Toss-Decision',field:'toss_decision',sortable:true,filter:true},  
        {headerName:'Result',field:'result',sortable:true,filter:true},
        {headerName:'Dl-Applied',field:'dl_applied',sortable:true,filter:true}, 
        {headerName:'Winner',field:'winner',sortable:true,filter:true},
        {headerName:'Win-By-Runs',field:'win_by_runs',sortable:true,filter:true},
        {headerName:'Win-By-Wickets',field:'win_by_wickets',sortable:true,filter:true},  
        {headerName:'Player-Of-The-Match',field:'player_of_match',sortable:true,filter:true},
        {headerName:'Venue',field:'venue',sortable:true,filter:true}    
      ],
      // rowData:null,
      rowData:Data
    };
  }

  render() {
  return (
    <div>
      <div id="title" align="center">
        IPL Data
      </div>

    <div className="ag-theme-balham"
    style={{
      width:1500,
      height:1000
    }}>

      <AgGridReact   //this is in build component of DataGrid which sets data in tabular form 
      columnDefs={this.state.columnDefs} //we defined columns here
      rowData={this.state.rowData}/> 
    </div>

    </div>
    
  );
}

}

export default App;
