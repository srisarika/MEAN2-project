import {Component, provide, OnInit} from 'angular2/core';
import {Router, RouteData, RouteParams} from 'angular2/router';
import {Httpprovider} from '../../../client/services/httpprovider';
import {Userdetails} from '../../../client/services/userdetails';
import {HTTP_PROVIDERS, Http, Response, Request,RequestMethod, Headers} from 'angular2/http';

@Component({
  selector: 'addcandidate',
  template: `<div>Add Candidates Component</div>
  <center>
    <form (ngSubmit)="submit(candidat)">
            <br>
            <input type="text" [(ngModel)]="candidat.name" placeholder="Name"/>
            <br><br>
            <input type="text" [(ngModel)]="candidat.email" placeholder="Number"/>   
            <br><br>
            <input type="text" [(ngModel)]="candidat.dob" placeholder="Address"/>             
            <br><br>
            <input type="text" [(ngModel)]="candidat.department" placeholder="Department"/>
            <br><br>
            <input type="text" [(ngModel)]="candidat.gender" placeholder="Gender"/>
            <br><br>
            <button type="submit">Submit</button>
        </form>
        </center>
  `,
  providers:[Http, HTTP_PROVIDERS,Httpprovider]
})
export class AddcandidateComponent {
    
    public candidat = {name:null, email:null, dob: null, department: null, gender: null};
    public resCandidate =  {name:null, email:null, dob: null, department: null, gender: null};
  constructor(private _userdetails: Userdetails, private _router: Router,  private _httpprovider: Httpprovider){
  }

  
  submit(candidat){
      let vari = this;
      this._httpprovider.httpReq('http://localhost:9001/addcandidate','POST',candidat,null).subscribe((data)=>{
            console.log(data);
            vari.resCandidate = data;
            vari.candidat = {name:null, email:null, dob: null, department: null, gender: null};
            this._router.navigate( ['CandidatesCmp'] );
      });
  }
  
}