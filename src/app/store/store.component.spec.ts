import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {StoreComponent} from './store.component';
import {StoreModule} from "@ngrx/store";

describe('StoreComponent', () => {
  let component: StoreComponent;
  let fixture: ComponentFixture<StoreComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoreComponent],
      imports: [StoreModule.forRoot({})]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should has buttons', function () {
    fixture.detectChanges();
    expect(compiled.querySelector('#start_btn')?.textContent).toContain('Start');
    expect(compiled.querySelector('#stop_btn')?.textContent).toContain('Stop');
    expect(compiled.querySelector('#restart_btn')?.textContent).toContain('Reset');
  });
});
