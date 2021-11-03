import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Monster } from '../monster';
import { MonsterService } from '../monster.service';

@Component({
  selector: 'app-monster-detail',
  templateUrl: './monster-detail.component.html',
  styleUrls: [ './monster-detail.component.css' ]
})
export class MonsterDetailComponent implements OnInit {
  monster: Monster | undefined;

  constructor(
    private route: ActivatedRoute,
    private monsterService: MonsterService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getMonster();
  }

  getMonster(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 0);
    this.monsterService.getMonster(id)
      .subscribe(monster => this.monster = monster);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.monster) {
      this.monsterService.updateMonster(this.monster)
        .subscribe(() => this.goBack());
    }
  }
}