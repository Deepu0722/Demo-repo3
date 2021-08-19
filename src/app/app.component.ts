import { Component } from '@angular/core';
import { HttpServeService } from './http-serve.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Hello, sampleApp';
  public greetChild = "Hello Child ";
  public chEvent = "";
  constructor(private serviceData: HttpServeService){ }

  clickEventHandler(){
    
    this.getDataBySubscribe();
  }
  clickPostEventHandler(){
   
    this.postDataBySubscribe();
  }
  
  deleteEventHandler(){
    this.deleteDataBySubscribe();
  }
  refHandler(val:any){
    alert(val);
  }

  getDataBySubscribe(){
    console.log( " getJsonDatas:" );
    this.serviceData.getJsonDatas()
       .subscribe( reponsedata => console.log(reponsedata));
  }
  postDataBySubscribe(){
    console.log( " postJsonData:" );
    this.serviceData.postJsonData()
       .subscribe( reponsedata => console.log(reponsedata));
  }
  deleteDataBySubscribe(){
    let idval: number = 1;
    console.log(" deleteData: ");
    this.serviceData.deleteData(idval).subscribe();
  }
  


}


