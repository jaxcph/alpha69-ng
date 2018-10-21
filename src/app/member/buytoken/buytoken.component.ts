import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Wallet } from '../member.model';
import { Subscription } from 'rxjs';
import { UIService } from 'src/app/common/ui.service';

@Component({
  selector: 'app-buytoken',
  templateUrl: './buytoken.component.html',
  styleUrls: ['./buytoken.component.css']
})
export class BuytokenComponent implements OnInit, OnDestroy {

  public wallet: Wallet;
  private walletSub: Subscription;
  private uid: string;

  constructor(private db: AngularFirestore, private router: Router, private uiService: UIService) { }

  onSubmit(form: NgForm) {
    const amount = parseInt(form.value.tokens, 10);

    this.db.collection('member-wallets').doc(this.uid)
          .update({ balance: (this.wallet.balance + amount)});

    this.uiService.showSnackbar(`You Purchased ${amount} tokens`, null, 5000);
    this.router.navigate(['/']);
  }

  ngOnInit() {
    this.uid = localStorage.getItem('uid');
    this.walletSub = this.db.collection('member-wallets').doc(this.uid)
    .valueChanges()
    .subscribe( (data: Wallet) => {
      this.wallet = data;
    });
  }

  ngOnDestroy(): void {
    if (this.walletSub) { this.walletSub.unsubscribe(); }
  }

}
