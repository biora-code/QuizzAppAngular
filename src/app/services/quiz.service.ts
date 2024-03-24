import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private url = "https://quizapi.io/api/v1/questions";

  constructor(private http: HttpClient) { }

  public getQuizQuestions (difficulty: string, questionsLimit: number): Observable<any>{
    let headers ={ 'X-Api-Key': environment.quizApiKey};
    return this.http.get(`${this.url}?difficulty=${difficulty}&limit=${questionsLimit}`, {headers: headers
    })

  }
}
