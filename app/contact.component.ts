import { Component } from '@angular/core';
import {FORM_DIRECTIVES, FormBuilder, Control, ControlGroup, Validators} from '@angular/common';

@Component({
  directives: [FORM_DIRECTIVES],
  selector: 'contact',
  template:`
  	<div *ngIf="sent">
		  <h3>SENT! Thanks for your opinion.</h3>
	</div>

	<div *ngIf="!sent">
		<form [ngFormModel]="contactForm">
		Name:<br>
		<input type="text" ngControl="name">
		<em class="ivalidInfo" *ngIf="!name.valid">Required and start with cap. letter</em><br>
		E-mail:<br>
		<input type="text" ngControl="mail">
		<em class="ivalidInfo" *ngIf="!mail.valid">Not email format</em><br>
		Comment:<br>
		<input type="text" ngControl="comment" size="50">
		<em class="ivalidInfo" *ngIf="!comment.valid">Minimum 10 characters</em><br><br>
		<button *ngIf="name.valid && mail.valid && comment.valid" (click)="Validate()">Send</button>
		</form>
	</div>
  `
})

export class ContactComponent { 
	contactForm: ControlGroup;
	name: Control;
	mail: Control;
	comment: Control;
	sent = false;

	constructor(
		private builder: FormBuilder
	) {
		this.name = new Control('', Validators.compose([Validators.required, Validators.pattern('^[A-Z][a-z]+')]));
		this.mail = new Control('', Validators.compose([Validators.required, Validators.pattern('^[A-Z0-9a-z._%+-]\@[A-Za-z0-9.-]+\\.[A-Za-z]{2,6}')]));
		this.comment = new Control('', Validators.compose([Validators.required, Validators.minLength(10)]));
		this.contactForm = builder.group({
			name: this.name,
			mail: this.mail,
			comment: this.comment
		});
	}

	Validate() {
		this.Send(this.mail.value, this.name.value, this.comment.value);
	}

	Send(mail: any, name: any, comment: any)
	{
		this.sent = true;
	}
}