import {Component} from 'angular2/core';
// import {enableProdMode} from 'angular2/core';//Uncomment to enable production mode
import {bootstrap} from 'angular2/platform/browser';
import {MyComponent} from './my_component.component';
import {AdvancedComponent} from './advanced_component.component';

// enableProdMode();//Uncomment to enable production mode
bootstrap(MyComponent);
bootstrap(AdvancedComponent);
