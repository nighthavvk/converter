import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {

  constructor() { }

  toLowerCase(text: string): string {
    return text.toLowerCase();
  }

  toUpperCase(text: string): string {
    return text.toUpperCase();
  }

  toHyphenCase(text: string): string {
    return text.trim().toLowerCase().replace(/[^a-zA-Z0-9]+/g, '-');
  }

  toSnakeCase(text: string): string {
    return text.trim().toLowerCase().replace(/[^a-zA-Z0-9]+/g, '_');
  }
}
