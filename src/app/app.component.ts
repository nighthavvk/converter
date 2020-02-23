import { Component } from '@angular/core';

import { ConverterService } from './services/converter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  converterTypes = {
    toLowerCase: { id: 'toLowerCase', name: 'To lower case'},
    toUpperCase: { id: 'toUpperCase', name: 'To upper case'},
    toHyphenCase: { id: 'toHyphenCase', name: 'To hyphen case'},
    toSnakeCase: { id: 'toSnakeCase', name: 'To snake case'},
  };

  smapleText = 'Sample text # 1 % 5 @ and more';

  model = {
    converterType: this.converterTypes.toLowerCase.id,
    text: this.smapleText,
    convertedText: this.convertTo(this.converterTypes.toLowerCase.id, this.smapleText)
  };

  constructor(private converterService: ConverterService) {
  }

  convert(type, text) {
    this.model.convertedText = this.convertTo(type, text);
  }

  convertTo(type, text): string {
    switch (type) {
      case this.converterTypes.toLowerCase.id:
        return this.converterService.toLowerCase(text);
      case this.converterTypes.toUpperCase.id:
        return this.converterService.toUpperCase(text);
      case this.converterTypes.toHyphenCase.id:
        return this.converterService.toHyphenCase(text);
      case this.converterTypes.toSnakeCase.id:
        return this.converterService.toSnakeCase(text);
      default:
        return '';
    }
  }
}
