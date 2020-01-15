import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { 
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatGridListModule,
  MatRadioModule,
  MatDividerModule } from '@angular/material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { LoginButtonComponent } from './buttons/login-button/login-button.component';
import { SignUpButtonComponent } from './buttons/sign-up-button/sign-up-button.component';
import { AbilityScoresComponent } from './pathfinder-2e/ability-scores/ability-scores.component';
import { AbilityScoreItemComponent } from './pathfinder-2e/ability-score-item/ability-score-item.component';
import { BasicInfoComponent } from './pathfinder-2e/basic-info/basic-info.component';
import { ArmorClassComponent } from './pathfinder-2e/armor-class/armor-class.component';
import { TrainedRadioComponent } from './pathfinder-2e/trained-radio/trained-radio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginButtonComponent,
    SignUpButtonComponent,
    AbilityScoresComponent,
    AbilityScoreItemComponent,
    BasicInfoComponent,
    ArmorClassComponent,
    TrainedRadioComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatRadioModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
