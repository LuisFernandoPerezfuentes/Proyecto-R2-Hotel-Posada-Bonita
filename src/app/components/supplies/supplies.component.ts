import { Component, OnInit } from '@angular/core';

import { SupplieService } from '../../services/supplie.service';
import {NgForm} from '@angular/forms';
import { ProviderAst } from '@angular/compiler';
import { Supplie } from 'src/app/models/supplie';
import * as jsPDF from 'jspdf';

declare var M: any;
@Component({
  selector: 'app-supplies',
  templateUrl: './supplies.component.html',
  styleUrls: ['./supplies.component.css'],
  providers: [SupplieService]
})
export class SuppliesComponent implements OnInit {
constructor(public supplieService: SupplieService) { }
ignore = false;


  ngOnInit() {
    this.getSupplies();
  }
  addSupplie(form: NgForm){
    if(form.value._id) {
      this.supplieService.putSupplie(form.value)
      .subscribe(res =>{
        this.resetForm(form);
        M.toast({html: 'Updated Successfuly!'})     
        this.getSupplies();
      })
    }else{
      this.supplieService.postSupplie(form.value)
      .subscribe(res =>{
        this.resetForm(form);
        M.toast({html: 'Save Successfuly!'})     
        this.getSupplies();
      });  
    }
  }

  getSupplies(){
    this.supplieService.getSupplies()
    .subscribe(res => {
    this.supplieService.supplies = res as Supplie[];
    console.log(res);
    });
  }

  editSupplie(supplie: Supplie){
    this.supplieService.selectedSupplie = supplie;
  }

  deleteSupplie(_id: string){
    if(confirm('Are you sure you want to delete it?')) {
      this.supplieService.deleteSupplie(_id)
      .subscribe(res => {
        this.getSupplies();
        M.toast({html: 'Deleted successfully'});
      });  
    }
  }

  resetForm(form?: NgForm ){
    if (form){
      form.reset();
      this.supplieService.selectedSupplie = new Supplie();
    }
  }

  generarPDF(){
    var id = document.getElementById("tabsupplies");
    var pdf = new jsPDF({
      orientation: 'landscape',
      unit:'pt',
      format:'carta'
    });
      // Se asignan más propiedades al PDF
      pdf.setDrawColor("#444444");
      pdf.setFont("arial", "italic");
      pdf.setFontSize(25);    
      pdf.text("Inventario", 360, 30,{ align: "center", width: 500} )
      pdf.setFontSize(13);    
      pdf.text("Hotel-Spa Posada Bonita", 600, 85, {align: "left"})     
      pdf.text("Dolores Hidalgo C.I.N.", 600, 105, { align: "left" })
      pdf.fromHTML(id,165,150,{align: "center",width: 500} );     
      pdf.setDrawColor(255, 0, 0);
      pdf.line(750, 50, 100, 50);  
      
      var img = new Image();
      img.src="/assets/img/logo1.jpg";
      pdf.addImage(img, 'jpg', 60, 40);
      pdf.save("Reporte.pdf");
      pdf.line(600, 100, 200, 100);
      pdf.addPage('a3', 'portrait');
      this.ignore = false;
    
    
  }

}
