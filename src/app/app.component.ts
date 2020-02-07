import { Component } from '@angular/core';

import { ConverterService } from './services/converter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  converterTypes = {
    toLowerCase: 'toLowerCase',
    toUpperCase: 'toUpperCase',
    toHyphenCase: 'toHyphenCase',
    toSnakeCase: 'toSnakeCase'
  }

  model = {
    converterType: this.converterTypes.toLowerCase,
    text: 'Sample text',
    convertedText: this.convertTo(this.converterTypes.toLowerCase, 'Sample text')
  };

  constructor(private converterService: ConverterService) {
  }

  convert(type, text) {
    this.model.convertedText = this.convertTo(type, text);
  }

  convertTo(type, text): string {
    switch (type) {
      case this.converterTypes.toLowerCase:
        return this.converterService.toLowerCase(text);
      case this.converterTypes.toUpperCase:
        return this.converterService.toUpperCase(text);
      case this.converterTypes.toHyphenCase:
        return this.converterService.toHyphenCase(text);
      case this.converterTypes.toSnakeCase:
        return this.converterService.toSnakeCase(text);
      default:
        return '';
    }
  }
}
