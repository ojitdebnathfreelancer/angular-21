import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BatchMasterService } from './batch-master-service';

@Component({
  selector: 'app-batch-master',
  imports: [FormsModule, CommonModule],
  templateUrl: './batch-master.html',
  styleUrl: './batch-master.css',
})
export class BatchMaster {
  constructor(private batchService: BatchMasterService) {}
  newBatchObj: Batch = new Batch();
  isEditMode: boolean = false;
  batchList = signal<Batch[]>([]);

  ngOnInit(): void {
    this.getBatchMasterSubscribe();
  }

  success() {
    this.getBatchMasterSubscribe();
    alert('Successfully Complete');
    this.resetForm();
  }

  getBatchMasterSubscribe() {
    this.batchService.getAllBatch().subscribe({
      next: (res) => {
        this.batchList.set(res as Batch[]);
      },
      error: (err) => {
        alert(err?.error?.message);
      },
    });
  }

  addBatchMasterSubscribe(data: any) {
    this.batchService.addBatch(data).subscribe({
      next: (res) => {
        this.success();
      },
      error: (err) => {
        alert(err?.error?.message);
      },
    });
  }

  updateBatchMasterSubscribe(data: any) {
    this.batchService.updateBatch(data).subscribe({
      next: (res) => {
        this.success();
      },
      error: (err) => {
        alert(err?.error?.message);
      },
    });
  }

  deleteBatchMasterSubscribe(id: number) {
    this.batchService.deleteBatch(id).subscribe({
      next: (res) => {
        this.success();
      },
      error: (err) => {
        alert(err?.error?.message);
      },
    });
  }

  onSubmit() {
    if (this.isEditMode) {
      this.updateBatchMasterSubscribe({
        ...this.newBatchObj,
        createdDate: new Date(this.newBatchObj.createdDate),
      });
      this.isEditMode = false;
    } else {
      this.addBatchMasterSubscribe({
        ...this.newBatchObj,
        createdDate: new Date(this.newBatchObj.createdDate),
      });
    }
  }
  // submit function

  onEdit(batch: any) {
    this.newBatchObj = {
      ...batch,
      createdDate: batch.createdDate.split('T')[0],
    };
    this.isEditMode = true;
    // Scroll to form on mobile
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  // edit function

  onDelete(batchId: number) {
    if (confirm('Are you sure you want to delete this batch?')) {
      this.deleteBatchMasterSubscribe(batchId);
    }
  }
  // delete function

  onCancel() {
    this.isEditMode = false;
    this.resetForm();
  }
  // cancel function

  resetForm() {
    this.newBatchObj = {
      batchId: 0,
      batchName: '',
      createdDate: new Date(),
    };
  }
  // reset form
}

class Batch {
  batchId: number;
  batchName: string;
  createdDate: Date;

  constructor() {
    this.batchId = 0;
    this.batchName = '';
    this.createdDate = new Date();
  }
}
