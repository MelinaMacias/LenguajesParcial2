
import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication/authentication.service';

@Directive({
  selector: '[hasRole]'
})
export class HasRoleDirective implements OnInit {

  @Input() rol: string;

  constructor(
    private element: ElementRef,
    private authService: AuthenticationService
  ) { }

  ngOnInit() {

    let element = this.element.nativeElement;

    if( !this.authService.hasRole(this.rol) ) {
      element.remove(); }

  }

}
