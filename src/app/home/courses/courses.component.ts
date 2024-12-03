import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { APIService } from '../../api-service.service';


export interface Course {
  DepartmentID: string;
  CourseNumber: string;
  CourseTitle: string; 
  SectionNumber: string; 
  Instructor: string;
  Days1: string;
  StartTime1: string;
  EndTime1: string;
  Days2?: string;
  StartTime2?: string | null;
  EndTime2?: string | null;
  selected?: boolean; //Used for tracking checkbox state
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',

})
export class CoursesComponent {
onSelectionChange(selectedCourse: Course ) {
  this.dataSource.forEach((element : Course)  => {
    if(element.CourseNumber == selectedCourse.CourseNumber)
      element.selected = !element.selected;
  });
//throw new Error('Method not implemented.');
}

  displayedColumns: string[] = ['DepartmentID', 'CourseNumber','CourseTitle', 'SectionNumber', 'Instructor', 'Days1', 'StartTime1', 'EndTime1', 'Days2', 'StartTime2', 'EndTime2'];
  dataSource: any;//MatTableDataSource<Course>;
  loading = true;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    public apiService: APIService,
    public snackBar: MatSnackBar
  ) {
    this.dataSource = new MatTableDataSource([
      { DepartmentID: 'CPSC', 
        CourseNumber: '1375', 
        CourseTitle: 'Programming I', SectionNumber: '1', Instructor: 'Seward', Days1: 'TR', StartTime1: '1340', EndTime1: '1455', Days2: '', StartTime2: null, EndTime2: null, selected: false,}, // Initialize as false 
      { DepartmentID: 'MATH', CourseNumber: '1410', CourseTitle: 'Calculus I', SectionNumber: '2', Instructor: 'Doe', Days1: 'MWF', StartTime1: '900', EndTime1: '1015', Days2: '', StartTime2: null, EndTime2: null, selected: false },
    ]); // Replace this with API data later
  }

  ngOnInit(): void {
    this.getCourses();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  generateSchedule() {
    console.log('heres the object', this.dataSource)
    alert('hello from generate schedule');
    var myArray = {classids: [833,38,3],email: 'tae123@ualr.edu'}
  }

  getCourses() {
    this.loading = true;
    // this.apiService.getCourses().subscribe((res) => {
    //   this.dataSource.data = res;
      this.loading = false;
    // });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  viewDetails(row: Course): void {
    console.log('Viewing details for:', row);
    this.snackBar.open(`Viewing details for ${row.CourseNumber}`, 'Close', { duration: 3000 });
  }

  selectCourse(row: Course): void {
    console.log('Selected course:', row);
    this.snackBar.open(`Selected course: ${row.CourseNumber}`, 'Close', { duration: 3000 });
  }
}
