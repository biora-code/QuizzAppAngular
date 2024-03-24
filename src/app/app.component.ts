import { Component, ViewChild } from '@angular/core';
import { QuizService } from './services/quiz.service';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { flush } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public questionsLimit: number;
  public difficulty : string;
  public showQuizScreen : boolean;
  public showMainMenu: boolean;
  public showResultScreen: boolean;
  public spinner: boolean;

  @ViewChild('quiz', {static: true }) quiz! : QuizComponent;
  @ViewChild('result', {static: true }) result! : ResultComponent;


  constructor(private quizService: QuizService){
    this.questionsLimit = 5;
    this.difficulty = "Easy";
    this.showMainMenu = true;

  }
  quizQuestions(): void{
    this.toggleSpinner();
    this.quizService.getQuizQuestions(this.difficulty,this.questionsLimit).subscribe((response)=>{this.quiz.questions= response;this.quiz.reset();this.quiz.showQuestion(0);this.showQuizScreen = true;this.showMainMenu=false;this.toggleSpinner();})
  
  }

  finalResult(result:any):void{
    this.result.finalResult = result;
    this.showQuizScreen = false;
    this.showResultScreen = true;
  }
  toggleSpinner(){
    this.spinner = !this.spinner;
  }
  showMainMenuScreen(event: any): void{
    this.showResultScreen = false;
    this.showMainMenu = true;
  }
}
