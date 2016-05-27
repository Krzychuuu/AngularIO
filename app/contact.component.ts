import { Component } from '@angular/core';

@Component({
  selector: 'contact',
  template:`
	<form action="MAILTO:someone@example.com" method="post" enctype="text/plain">
	Name:<br>
	<input type="text" name="name" value="your name"><br>
	E-mail:<br>
	<input type="text" name="mail" value="your email"><br>
	Comment:<br>
	<input type="text" name="comment" value="your comment" size="50"><br><br>
	<input type="submit" value="Send">
	<input type="reset" value="Reset">
	</form>
  `
})

export class ContactComponent { }