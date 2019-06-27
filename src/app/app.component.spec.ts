import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { By } from 'selenium-webdriver';

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  beforeEach(()=>{
    
  })

  it('should create the app', () => {
    const fixture=TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });


  it('Test App name as testJasmine',()=>{
    const fixture=TestBed.createComponent(AppComponent);
const app=fixture.debugElement.componentInstance;
expect(app.title).toBe('testJasmine');
  })

it('Test Heading of page',()=>{
  const fixture=TestBed.createComponent(AppComponent);
  const compiled= fixture.debugElement.nativeElement;
  expect(compiled.querySelector('h2').textContent).toContain('App containing Test Cases');
})

it('Testing button event',()=>{
  const fixture=TestBed.createComponent(AppComponent);
const qe= fixture.debugElement.nativeElement.querySelector('button');

qe.click();
fixture.detectChanges();
const app=fixture.debugElement.componentInstance;

  expect(app.onChange()).toHaveBeenCalled();

})

});
