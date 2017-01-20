import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Router } from "@angular/router";
import 'rxjs/add/operator/debounce';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/distinctUntilChanged';
const KEYBOARD_EVENTS = {
  UP: 38,
  DOWN: 40,
  ESC: 27,
  ENTER: 13
}
@Component({
  selector: 'mm-directory-search',
  templateUrl: './directory-search.component.html',
  styleUrls: ['./directory-search.component.scss']
})
export class DirectorySearchComponent implements OnInit {

  public search: string = null;
  public results: Array<any> = [];
  public searchControl: FormControl = new FormControl();
  public opened: Boolean = false;
  public selectedItemIndex: number = 0;

  public openDetails(movieId: number) {
    this.router.navigate([{ outlets: { modal: String(movieId) } }]);
    this.collapseList();
  }
  @ViewChild('searchInput') searchInput: ElementRef;
  public expandList() {
    if(this.search)
    this.opened = true;
  }
  @HostListener('document:click', ['$event'])
  clickOut($event: any) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.collapseList();
    }
  }
  ngAfterViewInit(): void {
    this.keyboardEvents$ = Observable.fromEvent(this.searchInput.nativeElement, 'keydown');
    this.keyboardEvents$
      .map((event: KeyboardEvent) => event.keyCode)
      .subscribe((keyCode: number) => {
        if (keyCode === KEYBOARD_EVENTS.ESC) {
          this.collapseList();
        }
        else if (keyCode === KEYBOARD_EVENTS.UP) {
          this.selectedItemIndex = (this.selectedItemIndex - 1) >= 0 ? this.selectedItemIndex - 1 : this.selectedItemIndex;
        }
        else if (keyCode === KEYBOARD_EVENTS.DOWN) {
          this.selectedItemIndex = (this.selectedItemIndex + 1) >= this.results.length ? this.selectedItemIndex : this.selectedItemIndex + 1;
        }
        else if (keyCode === KEYBOARD_EVENTS.ENTER) {
          this.openDetails(this.results[this.selectedItemIndex].id)
        }
      });

  }
  ngOnInit() {
    // debounce keystroke events
    this.searchControl.valueChanges
      .filter((searchTerm) => { return Boolean(searchTerm) })
      .debounce(_ => {
        return this.search ? Observable.timer(300) : Observable.timer(0)
      }
      )
      .distinctUntilChanged()
      .switchMap((searchTerm: string) => {
        this.expandList();
        this.search = searchTerm;
        return this.http.get(`https://api.themoviedb.org/3/search/movie?query=${searchTerm}`)
      })
      .switchMap((response: any) => { return Observable.of(response.json().results) })
      .subscribe((results: any) => {
        this.results = results;
        this.selectedItemIndex = 0;
      })
  }

  constructor(private http: Http, private router: Router, private elementRef: ElementRef) { }

  private collapseList() {
    this.opened = false;
  }

  private keyboardEvents$: Observable<KeyboardEvent>;
}
