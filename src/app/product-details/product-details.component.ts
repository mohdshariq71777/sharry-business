import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  reviews: any = [];
  myDate: any;
  prod: any;
  constructor() { }

  ngOnInit(): void {
    this.prod = [JSON.parse(localStorage.getItem('detPro'))]
    console.log(this.prod)
    this.prod.forEach(pro => pro.price = (pro.price).toFixed(2))

  }
  submit_review(r, n) {
    this.reviews.push({ review: r.value, name: n.value })
    const options1 = { year: 'numeric', month: 'long', day: 'numeric' };
    this.myDate = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date);
  }
}
