import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittaskdialogComponent } from './edittaskdialog.component';

describe('EdittaskdialogComponent', () => {
  let component: EdittaskdialogComponent;
  let fixture: ComponentFixture<EdittaskdialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EdittaskdialogComponent]
    });
    fixture = TestBed.createComponent(EdittaskdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
