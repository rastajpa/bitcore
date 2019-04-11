import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CoinComponentModule } from '../coin/coin.module';
import { LoaderComponentModule } from '../loader/loader.module';
import { MessageComponentModule } from '../message/message.module';
import { CoinListComponent } from './coin-list';

@NgModule({
  declarations: [CoinListComponent],
  imports: [
    IonicModule,
    CoinComponentModule,
    LoaderComponentModule,
    MessageComponentModule
  ],
  exports: [CoinListComponent]
})
export class CoinListComponentModule {}
