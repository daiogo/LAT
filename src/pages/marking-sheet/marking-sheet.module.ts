import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MarkingSheetPage } from './marking-sheet';

@NgModule({
  declarations: [
    MarkingSheetPage,
  ],
  imports: [
    IonicPageModule.forChild(MarkingSheetPage),
  ],
  exports: [
    MarkingSheetPage
  ]
})
export class MarkingSheetPageModule {}
