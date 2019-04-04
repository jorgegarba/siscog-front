import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyecto-index',
  templateUrl: './proyecto-index.component.html',
  styles: []
})
export class ProyectoIndexComponent implements OnInit {

  constructor() { 
  }

  ngOnInit() {
    this.loadScript('assets/custom_assets/js/proyecto_index.js'); 
  }

  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

}
