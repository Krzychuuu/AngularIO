import { Component } from '@angular/core';

@Component({
  selector: 'contact',
  template:`
	<form #Form="ngForm" action="MAILTO:someone@example.com" method="post" enctype="text/plain">
	Name:<br>
	<input type="text" class="form-control" required ngControl="name"><br>
	E-mail:<br>
	<input type="text" class="form-control" required ngControl="mail"><br>
	Comment:<br>
	<input type="text" name="comment" value="your comment" size="50"><br><br>
	<input type="submit" value="Send">
	</form>
  `
})

export class ContactComponent { }