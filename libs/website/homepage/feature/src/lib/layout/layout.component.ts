import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AuthService } from '@comunidad/shared/auth/data-access';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
interface Event {
  name: string;
  description: string;
  date: number; // Date in timestamp format
  location: string;
  image: string;
}
@Component({
  selector: 'comunidad-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  public authService = inject(AuthService);
  private firestore = inject(Firestore);
  public events$: Observable<Event[]>;
  constructor() {
    const eventCollection = collection(this.firestore, 'events');
    this.events$ = collectionData(eventCollection, {
      idField: 'id',
    }) as Observable<Event[]>;
  }
}
