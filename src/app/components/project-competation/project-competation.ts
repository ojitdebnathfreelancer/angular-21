import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

interface CompetitionI {
  competitionId: number;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  status: string;
}

@Component({
  selector: 'app-project-competation',
  imports: [ReactiveFormsModule],
  templateUrl: './project-competation.html',
  styleUrl: './project-competation.css',
})
export class ProjectCompetation {
  projectFrom: FormGroup = new FormGroup({
    competitionId: new FormControl(0),
    title: new FormControl(''),
    description: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    status: new FormControl(''),
  });
  baseUrl = 'https://api.freeprojectapi.com/api/ProjectCompetition';
  competitionList = signal<CompetitionI[]>([]);
  isEdit: boolean = false;

  constructor(private http: HttpClient) {
    this.getAllCompetitions();
  }

  getAllCompetitions() {
    this.http.get(`${this.baseUrl}/GetAllCompetition`).subscribe({
      next: (res: any) => {
        this.competitionList.set(res);
      },
      error: (err) => {},
    });
  }

  postCompetitions() {
    const formValue = this.projectFrom.value;
    if (this.isEdit) {
      this.http.put(`${this.baseUrl}/update/${formValue.competitionId}`, formValue).subscribe({
        next: (res: any) => {
          alert('Compitition Updated Successfully');
          this.isEdit = false;
          this.getAllCompetitions();
        },
        error: (err) => {
          alert(err?.message);
        },
      });
    } else {
      this.http.post(`${this.baseUrl}/competition`, formValue).subscribe({
        next: (res: any) => {
          alert('Compitition Created Successfully');
          this.getAllCompetitions();
        },
        error: (err) => {
          alert(err?.message);
        },
      });
    }
  }

  onEdit(item: any) {
    this.isEdit = true;
    this.projectFrom = new FormGroup({
      competitionId: new FormControl(item?.competitionId),
      title: new FormControl(item?.title),
      description: new FormControl(item?.description),
      startDate: new FormControl(item?.startDate.split('T')[0]),
      endDate: new FormControl(item?.endDate.split('T')[0]),
      status: new FormControl(item?.status),
    });
  }

  onDelete(id: number | undefined) {
    if (!id) {
      alert('This item is not found');
    }
    confirm('Are you sure you want to delete');
    this.http.delete(`${this.baseUrl}/delete/${id}`).subscribe({
      next: (res: any) => {
        alert('Compitition Delete Successfully');
      },
      error: (err) => {
        alert(err?.message);
      },
    });
  }

  onReset() {
    this.projectFrom = new FormGroup({
      competitionId: new FormControl(0),
      title: new FormControl(''),
      description: new FormControl(''),
      startDate: new FormControl(''),
      endDate: new FormControl(''),
      status: new FormControl(''),
    });
  }
}
