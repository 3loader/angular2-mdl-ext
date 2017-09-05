import { Observable } from 'rxjs/Observable';
import { MdlDialogService } from '@angular-mdl/core';
export interface DatePickerOptions {
    openFrom?: MouseEvent;
    okLabel?: string;
    cancelLabel?: string;
}
export declare class MdlDatePickerService {
    private dialogService;
    constructor(dialogService: MdlDialogService);
    selectDate(currentDate?: Date, options?: DatePickerOptions): Observable<Date>;
}
export declare class MdlDatePickerModule {
}
