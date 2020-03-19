import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Pipe({
  name: 'safeHtml'
})
export class SafeHtml implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(html) {
    const output = html.replace(/\n/g, '<br />');
    return this.sanitizer.bypassSecurityTrustHtml(output);
  }
}
