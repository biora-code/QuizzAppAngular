import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss'
})
export class ResultComponent {

  @Output() showMainMenuScreen = new EventEmitter();

  public finalResult: any;
  showMainMenu(){
    this.showMainMenuScreen.emit(true);
  }

}
