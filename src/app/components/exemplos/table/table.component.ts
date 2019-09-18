import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  cars = [
    {vin: 'asde125', year: '2018', brand: 'BMW', color: 'Blue'},
    {vin: 'qwe4545', year: '2001', brand: 'Ferrari', color: 'Red'},
    {vin: 'qasddef', year: '2016', brand: 'Masseraty', color: 'Black'},
    {vin: 'q6e9er8', year: '1998', brand: 'Gol', color: 'Red'},
    {vin: 'ppflrp1', year: '1956', brand: 'Fusca', color: 'Yelow'},
    {vin: 'pldpel5', year: '1979', brand: 'Opala', color: 'Blue'},
    {vin: 'd4ffe64', year: '1967', brand: 'Impala', color: 'Black'},
    {vin: 'fksdf55', year: '1994', brand: 'Maverick', color: 'Blue'},
    {vin: 'qslpes4', year: '1988', brand: 'Golf', color: 'Green'},
    {vin: 'splofk6', year: '1965', brand: 'Subaru', color: 'White'},
    {vin: 'pepdks6', year: '1959', brand: 'Lanborguini', color: 'Black'},
    {vin: 'fldked4', year: '2013', brand: 'Veloster', color: 'Gold'},
    {vin: 'pwplso9', year: '2019', brand: 'Buggati', color: 'Blue'},
    {vin: 'ladp658', year: '2014', brand: 'S10', color: 'Red'},
  ];
  cols = [
];
  constructor() { }

  ngOnInit() {

    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
  ];
  }

}
