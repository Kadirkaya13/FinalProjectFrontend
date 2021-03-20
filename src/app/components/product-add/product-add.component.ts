import { Component, OnInit } from '@angular/core';
import {FormGroup ,FormBuilder,FormControl,Validator, Validators} from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productAddFrom :FormGroup;
  constructor(private formBuilder:FormBuilder,
    private productService :ProductService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createProductAddform();
  }

  createProductAddform(){

    this.productAddFrom=this.formBuilder.group({
      productName:["",Validators.required],
      unitPrice:["",Validators.required],
      unitsInStock:["",Validators.required],
      categoryId:["",Validators.required]
    })
  }
  add(){
    if(this.productAddFrom.valid){
      let productModel = Object.assign({},this.productAddFrom.value); 
      this.productService.add(productModel).subscribe(response=>{
        console.log(response);
        this.toastrService.success(response.message,"Başarılı!")
      },responseError=>{
        if (responseError.error.Errors.length>0) {
          console.log(responseError.error.Errors)
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Doğrulama hatası")
          }
         
        }
        
        
      })
      
    }else{
      this.toastrService.error("Fromunuz eksik","Dikkat!")
    }
    
  }


}
