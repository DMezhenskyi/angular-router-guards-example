import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SafeData } from 'src/app/auth/save-data.interface';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit, SafeData {
  @HostListener('window:beforeunload', ['$event'])
  onBeforeReload(e: BeforeUnloadEvent) {
    e.stopPropagation();
    if (this.form.dirty) {
      return (e.returnValue = 'Are you sure you want to exit?');
    }
    return;
  }

  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: new FormControl(''),
      quantity: new FormControl(0),
    });
  }
  isDataSaved(): boolean {
    return !this.form.dirty;
  }

  ngOnInit(): void {}
}
