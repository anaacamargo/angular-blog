import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  
  picCover:string = "https://cdn.akamai.steamstatic.com/steam/apps/208650/capsule_616x353.jpg?t=1694042300"
  contentTitle:string = "MINHA NOTÍCIA"
  contentDescription:string = "OLÁ MUNDO!"
  private id:string | null = "0"

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id.toString() == id)[0]


      this.contentTitle = result.title
      this.contentDescription = result.description
      this.picCover = result.picCover

  }

}
