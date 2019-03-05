import { Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import { DynamicComponentLoader } from './../dynamic-component-loader/dynamic-component-loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('testOutlet', { read: ViewContainerRef })
  testOutlet: ViewContainerRef | undefined;

  constructor(private dynamicComponentLoader: DynamicComponentLoader,) { }

  ngOnInit() {
  }

  loadComponent() {
    this.dynamicComponentLoader
      .getComponentFactory('users')
      .subscribe({
        next: componentFactory => {
          if (!this.testOutlet) {
            return;
          }

          const ref = this.testOutlet.createComponent(componentFactory);
          ref.changeDetectorRef.detectChanges();
        },
        error: err => {
          console.warn(err);
        }
      });
  }

}
