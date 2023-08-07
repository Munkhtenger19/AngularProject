import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatNavList } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { TasksComponent } from './tasks/tasks.component';
import { HomeComponent } from './home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { TasklistComponent } from './tasklist/tasklist.component';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { TasksDialogComponent } from './tasks-dialog/tasks-dialog.component';
import { EdittaskdialogComponent } from './edittaskdialog/edittaskdialog.component';
import { MatSelectModule } from '@angular/material/select';
import { NewGroupDialogComponent } from './new-group-dialog/new-group-dialog.component';
import { v4 as uuidv4 } from 'uuid';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ToastrService } from 'ngx-toastr';
import { MiniCalendarComponent } from './mini-calendar/mini-calendar.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CalendarComponent,
    TasksComponent,
    HomeComponent,
    TasklistComponent,
    TasksDialogComponent,
    EdittaskdialogComponent,
    NewGroupDialogComponent,
    MiniCalendarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatGridListModule,
    MatProgressBarModule,
    MatDialogModule,
    FormsModule,
    NgbModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
