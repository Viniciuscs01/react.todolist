import Item from "../models/item";

export default class API {
  static API_URL = 'http://localhost:3000/todos';

  static async get<T>(): Promise<Item[]> {

    return [{
      description: 'Teste',
      completed: false,
      due_date: new Date().toDateString()
    },
    {
      description: 'Teste 2',
      completed: false,
      due_date: new Date().toDateString()
    }];

    const response = await fetch(this.API_URL);
    return response.json();
  }

  static async post<T>(data: T): Promise<T> {
    const response = await fetch(this.API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return response.json();
  }
}