import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, output, Output, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-new-ticket',
    standalone: true,
    templateUrl: './new-ticket.component.html',
    styleUrl: './new-ticket.component.css',
    imports: [ButtonComponent, ControlComponent, FormsModule]
})
export class NewTicketComponent implements OnInit, AfterViewInit {
    @ViewChild('form') private form?: ElementRef<HTMLFormElement>;

    // private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
    // @Output() add = new EventEmitter();

    add = output<{title: string; text: string}>()

    ngOnInit() {
        console.log("OnInit");
        console.log(this.form?.nativeElement);;
    }

    ngAfterViewInit() {
        console.log("After view init");
        console.log(this.form?.nativeElement);
    }

    onSubmit(title: string, ticketText: string) {
        this.add.emit({title: title, text: ticketText})
        this.form?.nativeElement.reset();
    }
}
