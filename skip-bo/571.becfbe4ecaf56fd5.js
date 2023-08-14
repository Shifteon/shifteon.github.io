"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[571],{571:(W,w,p)=>{p.r(w),p.d(w,{SkipBoModule:()=>G});var l=p(5548),x=p(5785),e=p(6689),S=p(8645);class a{constructor(s=0){this.isFlipped=!1,this.glowing=!1,this.selected=!1,this.value=s}flip(){this.isFlipped=!this.isFlipped}}const g="Invalid index",k="No cards remaining",O="No game started",v={0:"#28587B",1:"#96BBBB",2:"#96BBBB",3:"#96BBBB",4:"#96BBBB",5:"#E76B74",6:"#E76B74",7:"#E76B74",8:"#E76B74",9:"#883677",10:"#883677",11:"#883677",12:"#883677"};class o{constructor(s=[],t=0,i=!1){this.cards=s,this.maxCards=t,i&&this.shuffle()}add(s){var t;-1===(null===(t=this.cards[0])||void 0===t?void 0:t.value)&&this.cards.shift(),Array.isArray(s)?this.cards=this.cards.concat(s):this.cards.push(s)}clear(){this.cards=[]}draw(s){if(null!=s){if(s<this.cards.length&&s>=0)return this.cards.splice(s,1)[0];throw new Error(g+s)}const t=this.cards.pop();if(t)return t;throw new Error(k)}getCards(){return this.cards.slice()}getNumCards(){return this.cards.length}getTopCard(){return this.cards[this.cards.length-1]}shuffle(s){s&&s.length+this.cards.length<this.maxCards&&(this.cards=this.cards.concat(s));let i,t=this.cards.length;for(;0!=t;)i=Math.floor(Math.random()*t),t--,[this.cards[t],this.cards[i]]=[this.cards[i],this.cards[t]]}}class C{constructor(s=new o,t=new o,i="",r=!1){this.discardPiles=[],this.hand=s,s.maxCards=5,this.stockPile=t,this.name=i,this.isPlayersTurn=r,this.stockPile=new o([new a(1),new a(0),new a(7)]);for(let c=0;c<4;c++)this.discardPiles.push(new o);this.discardPiles=[new o([new a(12),new a(12)]),new o([new a(11),new a(10),new a(9),new a(8),new a(7)]),new o([new a(0)]),new o([new a(1)])]}discard(s,t){try{this.discardPiles[t].add(this.hand.draw(s))}catch(i){throw i}}draw(s){this.hand.add(s)}getHand(){return this.hand}getDiscardPiles(){return this.discardPiles}getStockPile(){return this.stockPile}getNumCardsNeeded(){return 5-this.hand.getNumCards()}playCard(s,t,i=-1){try{if(!t){if(i>=0){let r=this.discardPiles[i].draw();return 0===this.discardPiles[i].getCards().length&&(this.discardPiles[i]=new o([new a(-1)])),r}return this.hand.draw(this.hand.getCards().findIndex(r=>r.value===s.value&&r.selected))}return this.stockPile.draw()}catch(r){throw r}}}let _=(()=>{class n{constructor(){this.changed$=new S.x,this.buildingPiles=[],this.discardPile=new o,this.drawPile=null,this.isSelectedCardFromStockPile=!1,this.player=new C,this.opponents=[new C,new C,new C],this.selectedCard=null,this.selectedDeck=-1}canDiscard(){return null!=this.selectedCard&&!this.isSelectedCardFromStockPile&&-1===this.selectedDeck}createGame(){this.buildingPiles=[new o([new a(3)]),new o([new a(7)]),new o([new a(11)]),new o([new a(6)])];const t=[];for(let i=1;i<=12;i++)for(let r=0;r<12;r++)t.push(new a(i));for(let i=0;i<18;i++)t.push(new a(0));this.drawPile=new o(t,t.length,!0)}discard(t,i){this.player.discard(t,i),this.selectedCard&&(this.selectedCard.selected=!1,this.selectedCard=null),this.changed$.next(!0)}draw(){if(!this.drawPile)throw new Error(O);const t=this.player.getNumCardsNeeded();for(let i=0;i<t;i++)try{this.player.draw(this.drawPile.draw())}catch(r){r===k&&(this.drawPile.shuffle(this.discardPile.getCards()),this.player.draw(this.drawPile.draw()),this.discardPile.clear())}this.changed$.next(!0)}getBuildPiles(){return this.buildingPiles}getOpponents(){return this.opponents}getOpponentStockPile(t){if(t>=this.opponents.length||t<0)throw new Error(g+t);return this.opponents[t].getStockPile()}getPlayerDiscardPiles(t){if(null!=t){if(t>=this.opponents.length||t<0)throw new Error(g+t);return this.opponents[t].getDiscardPiles()}return this.player.getDiscardPiles()}getPlayerHand(){return this.player.getHand()}getPlayerStockPile(){return this.player.getStockPile()}highlightValidPlays(t){for(let i=0;i<this.buildingPiles.length;i++)this.isPlayValid(t,i)?this.buildingPiles[i].getTopCard().glowing=!0:this.buildingPiles[i].getTopCard().glowing=!1}isPlayersTurn(){return!0}isPlayValid(t,i){if(i>=this.buildingPiles.length||i<0)throw new Error(g+i);return 0===t.value||1===t.value&&-1===this.buildingPiles[i].getTopCard().value||t.value===this.buildingPiles[i].getTopCard().value+1}play(t){if(!this.drawPile)throw new Error(O);if(this.selectedCard){if(!(t<this.buildingPiles.length&&t>=0))throw new Error(g+t);0===this.selectedCard.value&&(this.selectedCard.value=this.buildingPiles[t].getTopCard().value+1),this.isPlayValid(this.selectedCard,t)&&(-1!==this.selectedDeck?this.player.playCard(this.selectedCard,this.isSelectedCardFromStockPile,this.selectedDeck):this.player.playCard(this.selectedCard,this.isSelectedCardFromStockPile),12===this.selectedCard.value?this.buildingPiles[t]=new o([new a(-1)]):this.buildingPiles[t].add(this.selectedCard),this.selectedCard.selected=!1,this.selectedCard=null,this.removeHighlights(),this.changed$.next(!0))}}removeHighlights(){this.buildingPiles.forEach(t=>{t.getTopCard().glowing=!1})}selectCard(t,i,r){if(-1!==t.value){if(t.selected)return t.selected=!1,this.selectedCard=null,this.removeHighlights(),void this.changed$.next(!0);this.player.getHand().getCards().forEach(c=>{c.selected=!1}),this.player.getDiscardPiles().forEach(c=>{c.getTopCard()&&(c.getTopCard().selected=!1)}),this.player.getStockPile().getTopCard().selected=!1,t.selected=!0,this.selectedDeck=null!=r?r:-1,this.selectedCard=t,this.isSelectedCardFromStockPile=i,this.changed$.next(!0)}}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var d=p(6814);function D(n,s){1&n&&(e.ynx(0),e.TgZ(1,"div",3)(2,"p",4),e._uU(3,"Skip-Bo!"),e.qZA()(),e.BQk())}const A=function(n){return{"corner-number":n}},Z=function(n){return{"background-color":n}},F=function(n){return{"special-text":n}};function I(n,s){if(1&n&&(e.TgZ(0,"div",5)(1,"p",6),e._uU(2),e.qZA()()),2&n){const t=e.oxw();e.Q6J("ngClass",e.VKq(4,A,t.cornerNumber))("ngStyle",e.VKq(6,Z,t.backgroundColor)),e.xp6(1),e.Q6J("ngClass",e.VKq(8,F,t.card.value===t.WILD_NUMBER)),e.xp6(1),e.Oqu(t.value)}}const N=function(n,s,t){return{small:n,glowing:s,selected:t}};let P=(()=>{class n{constructor(){this.card=new a(1),this.cornerNumber=!1,this.isSmall=!1,this.backgroundColor="blue",this.isFlipped=!1,this.WILD_NUMBER=0,this.value=0}ngOnInit(){this.backgroundColor=v[this.card.value],this.value=0===this.card.value?"SkipBo":this.card.value,this.isFlipped=this.card.isFlipped}ngOnChanges(t){t.card&&(this.value=0===this.card.value?"SkipBo":this.card.value,this.backgroundColor=v[this.card.value])}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-card"]],inputs:{card:"card",cornerNumber:"cornerNumber",isSmall:"isSmall"},features:[e.TTD],decls:4,vars:7,consts:[[1,"card",3,"ngClass"],[4,"ngIf","ngIfElse"],["front",""],[1,"face","back"],[1,"special-text"],[1,"face","front",3,"ngClass","ngStyle"],[1,"value",3,"ngClass"]],template:function(t,i){if(1&t&&(e.TgZ(0,"div",0),e.YNc(1,D,4,0,"ng-container",1),e.YNc(2,I,3,10,"ng-template",null,2,e.W1O),e.qZA()),2&t){const r=e.MAs(3);e.Q6J("ngClass",e.kEZ(3,N,i.isSmall,i.card.glowing,i.card.selected)),e.xp6(1),e.Q6J("ngIf",i.isFlipped)("ngIfElse",r)}},dependencies:[d.mk,d.O5,d.PC],styles:['@import"https://fonts.googleapis.com/css2?family=Lilita+One&display=swap";.card[_ngcontent-%COMP%]{border-radius:5px;background-color:#fff;max-width:70px;max-height:200px;width:100%;height:90px;padding:2px;font-family:Lilita One,cursive}.card.glowing[_ngcontent-%COMP%]{box-shadow:0 0 5px 5px var(--md-sys-color-tertiary);cursor:pointer}.card.selected[_ngcontent-%COMP%]{box-shadow:0 0 5px 5px var(--md-sys-color-primary)}.card.small[_ngcontent-%COMP%]{width:40px;height:70px}.card.small[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{font-size:1.5em}.card.small[_ngcontent-%COMP%]   .face.back[_ngcontent-%COMP%]{font-size:1.25em}.card.small[_ngcontent-%COMP%]   .face.front.corner-number[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{font-size:1em}.card.small[_ngcontent-%COMP%]   .face.front.corner-number[_ngcontent-%COMP%]   .special-text[_ngcontent-%COMP%]{font-size:.75em;margin:0 auto}.card[_ngcontent-%COMP%]   .face[_ngcontent-%COMP%]{border-radius:5px;display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:100%}.card[_ngcontent-%COMP%]   .face.back[_ngcontent-%COMP%]{background-color:green;font-size:1.75em}.card[_ngcontent-%COMP%]   .face.corner-number[_ngcontent-%COMP%]{justify-content:start;align-items:start}.card[_ngcontent-%COMP%]   .face.corner-number[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .face.corner-number[_ngcontent-%COMP%]   .special-text[_ngcontent-%COMP%]{margin:0}.card[_ngcontent-%COMP%]   .face.corner-number[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{color:#fff;margin-left:5px}.card[_ngcontent-%COMP%]   .face.corner-number[_ngcontent-%COMP%]   .special-text[_ngcontent-%COMP%]{font-size:1em;transform:rotate(0)}.card[_ngcontent-%COMP%]   .face[_ngcontent-%COMP%]   .special-text[_ngcontent-%COMP%]{color:orange;text-shadow:-2px 0 darkblue,0 2px darkblue,2px 0 darkblue,0 -2px darkblue;transform:rotate(-70deg)}.card[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{font-size:2em;color:#fff}']}),n})();const E=function(n){return{pointer:n}};function J(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"div",2)(1,"app-card",3),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.onClickCard())}),e.qZA()()}if(2&n){const t=s.$implicit,i=s.last,r=e.oxw();e.Q6J("ngClass",e.VKq(4,E,r.pointer)),e.xp6(1),e.Q6J("card",t)("cornerNumber",!i)("isSmall",!0)}}const Q=function(n){return{glowing:n}};let q=(()=>{class n{constructor(t){this.skipBoService=t,this.discarding=!1,this.index=-1,this.pile=new o,this.pointer=!1,this.selectable=!1,this.cardsToDisplay=[]}ngOnInit(){this.setCardsToDisplay(),this.skipBoService.changed$.subscribe({next:()=>{this.setCardsToDisplay()}})}onClickCard(){!this.selectable||this.discarding||(this.skipBoService.highlightValidPlays(this.pile.getTopCard()),this.skipBoService.selectCard(this.pile.getTopCard(),!1,this.index))}setCardsToDisplay(){this.cardsToDisplay=this.pile.getCards(),this.cardsToDisplay.length>4&&this.cardsToDisplay.splice(0,this.cardsToDisplay.length-4)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(_))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-pile"]],inputs:{discarding:"discarding",index:"index",pile:"pile",pointer:"pointer",selectable:"selectable"},decls:2,vars:4,consts:[[1,"pile",3,"ngClass"],["class","card",3,"ngClass",4,"ngFor","ngForOf"],[1,"card",3,"ngClass"],[3,"card","cornerNumber","isSmall","click"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e.YNc(1,J,2,6,"div",1),e.qZA()),2&t&&(e.Q6J("ngClass",e.VKq(2,Q,i.discarding)),e.xp6(1),e.Q6J("ngForOf",i.cardsToDisplay))},dependencies:[d.mk,d.sg,P],styles:[".pile[_ngcontent-%COMP%]{display:grid;grid-template-rows:repeat(4,15%);height:130px}.pile.glowing[_ngcontent-%COMP%]{box-shadow:0 0 5px 5px var(--md-sys-color-tertiary);cursor:pointer}.pile[_ngcontent-%COMP%]   .card.pointer[_ngcontent-%COMP%]{cursor:pointer}"]}),n})();function H(n,s){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"app-pile",6),e.NdJ("click",function(r){const u=e.CHM(t).index,m=e.oxw();return e.KtG(m.onDiscard(r,u))}),e.qZA(),e.BQk()}if(2&n){const t=s.$implicit,i=s.index,r=e.oxw();e.xp6(1),e.Q6J("discarding",r.discarding)("pile",t)("pointer",!r.isOpponent)("selectable",!r.isOpponent)("index",i)}}const M=function(n){return{pointer:n}};function R(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"div",11)(1,"app-card",12),e.NdJ("click",function(){const r=e.CHM(t),c=r.$implicit,u=r.index,m=e.oxw(2);return e.KtG(m.onClickHand(c,u))}),e.qZA()()}if(2&n){const t=s.$implicit,i=e.oxw(2);e.Q6J("ngClass",e.VKq(2,M,!i.isOpponent)),e.xp6(1),e.Q6J("card",t)}}function U(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"ion-button",13),e.NdJ("click",function(){e.CHM(t);const r=e.oxw(2);return e.KtG(r.toggleIsDiscarding())}),e._uU(1,"Discard"),e.qZA()}}function Y(n,s){if(1&n&&(e.TgZ(0,"div",7)(1,"div",8),e.YNc(2,R,2,4,"div",9),e.qZA(),e.YNc(3,U,2,0,"ion-button",10),e.qZA()),2&n){const t=e.oxw();e.xp6(2),e.Q6J("ngForOf",null==t.hand?null:t.hand.getCards()),e.xp6(1),e.Q6J("ngIf",t.canDiscard)}}const $=function(n){return{grid:n}};let V=(()=>{class n{constructor(t){this.skipBoService=t,this.isOpponent=!1,this.opponentId=-1,this.canDiscard=!1,this.discarding=!1,this.discardPiles=[],this.hand=null,this.selectedCardIndex=-1,this.stockPile=new o}ngOnInit(){this.isOpponent?(this.discardPiles=this.skipBoService.getPlayerDiscardPiles(this.opponentId),this.stockPile=this.skipBoService.getOpponentStockPile(this.opponentId)):(this.discardPiles=this.skipBoService.getPlayerDiscardPiles(),this.hand=this.skipBoService.getPlayerHand(),this.stockPile=this.skipBoService.getPlayerStockPile()),this.skipBoService.changed$.subscribe({next:()=>{this.isOpponent?(this.discardPiles=this.skipBoService.getPlayerDiscardPiles(this.opponentId),this.stockPile=this.skipBoService.getOpponentStockPile(this.opponentId)):(this.discarding=!1,this.canDiscard=this.skipBoService.canDiscard(),this.discardPiles=this.skipBoService.getPlayerDiscardPiles(),this.hand=this.skipBoService.getPlayerHand(),this.stockPile=this.skipBoService.getPlayerStockPile())}})}onClickHand(t,i,r=!1){this.isOpponent||(this.selectedCardIndex=i,this.skipBoService.highlightValidPlays(t),this.skipBoService.selectCard(t,r))}onDiscard(t,i){this.discarding&&this.canDiscard&&(t.stopPropagation(),this.skipBoService.discard(this.selectedCardIndex,i),this.discarding=!1)}toggleIsDiscarding(){this.discarding=!this.discarding}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(_))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-play-area"]],inputs:{isOpponent:"isOpponent",opponentId:"opponentId"},decls:6,vars:9,consts:[[1,"play-area",3,"ngClass"],[1,"top"],[3,"card","ngClass","click"],[1,"discards"],[4,"ngFor","ngForOf"],["class","hand",4,"ngIf"],[3,"discarding","pile","pointer","selectable","index","click"],[1,"hand"],[1,"cards"],["class","card",3,"ngClass",4,"ngFor","ngForOf"],[3,"click",4,"ngIf"],[1,"card",3,"ngClass"],[3,"card","click"],[3,"click"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"app-card",2),e.NdJ("click",function(){return i.onClickHand(i.stockPile.getTopCard(),-1,!0)}),e.qZA(),e.TgZ(3,"div",3),e.YNc(4,H,2,5,"ng-container",4),e.qZA()(),e.YNc(5,Y,4,2,"div",5),e.qZA()),2&t&&(e.Q6J("ngClass",e.VKq(5,$,!i.isOpponent)),e.xp6(2),e.Q6J("card",i.stockPile.getTopCard())("ngClass",e.VKq(7,M,!i.isOpponent)),e.xp6(2),e.Q6J("ngForOf",i.discardPiles),e.xp6(1),e.Q6J("ngIf",!i.isOpponent))},dependencies:[d.mk,d.sg,d.O5,l.YG,P,q],styles:[".discards[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly}.grid[_ngcontent-%COMP%]{display:grid;grid-template-rows:1fr 1fr}.hand[_ngcontent-%COMP%]{align-items:center;align-self:end;display:flex;flex-direction:column;transition:height .2s;width:100%}.hand[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%}.hand[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{width:18%;height:-moz-fit-content;height:fit-content}.hand[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{font-size:12px;width:50%}.play-area[_ngcontent-%COMP%]{height:100%}.pointer[_ngcontent-%COMP%]{cursor:pointer}.top[_ngcontent-%COMP%]{display:grid;grid-template-columns:15% 75%}"]}),n})();function z(n,s){if(1&n&&(e.TgZ(0,"swiper-slide"),e._UZ(1,"app-play-area",9),e.TgZ(2,"p",10),e._uU(3),e.qZA()()),2&n){const t=s.index;e.xp6(1),e.Q6J("isOpponent",!0)("opponentId",t),e.xp6(2),e.hij("Opponent ",t,"")}}function K(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"div")(1,"app-card",11),e.NdJ("click",function(){const c=e.CHM(t).index,u=e.oxw();return e.KtG(u.playCard(c))}),e.qZA()()}if(2&n){const t=s.$implicit;e.xp6(1),e.Q6J("card",t.getTopCard())}}const j=[{path:"",component:(()=>{class n{constructor(t){this.skipBoService=t,this.opponents=[],this.buildPiles=[]}ngOnInit(){this.skipBoService.createGame(),this.skipBoService.draw(),this.opponents=this.skipBoService.getOpponents(),this.buildPiles=this.skipBoService.getBuildPiles(),this.skipBoService.changed$.subscribe({next:()=>{this.buildPiles=this.skipBoService.getBuildPiles()}})}playCard(t){this.skipBoService.play(t)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(_))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-skip-bo"]],decls:15,vars:4,consts:[[3,"translucent"],["slot","start"],["defaultHref","#"],[1,"container","game-area"],["slides-per-view","1","pagination","true","loop","true"],[4,"ngFor","ngForOf"],[1,"build-area"],[1,"player"],[3,"isOpponent"],[3,"isOpponent","opponentId"],[1,"label-medium"],[3,"card","click"]],template:function(t,i){1&t&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),e._UZ(3,"ion-back-button",2),e.qZA(),e.TgZ(4,"ion-title"),e._uU(5," Skip-Bo! "),e.qZA()()(),e.TgZ(6,"ion-content")(7,"div",3)(8,"swiper-container",4),e.YNc(9,z,4,3,"swiper-slide",5),e.qZA(),e.TgZ(10,"div",6),e.YNc(11,K,2,1,"div",5),e.qZA(),e.TgZ(12,"div",7),e._UZ(13,"app-play-area",8),e.qZA()()(),e._UZ(14,"ion-footer")),2&t&&(e.Q6J("translucent",!0),e.xp6(9),e.Q6J("ngForOf",i.opponents),e.xp6(2),e.Q6J("ngForOf",i.buildPiles),e.xp6(2),e.Q6J("isOpponent",!1))},dependencies:[d.sg,l.oU,l.Sm,l.W2,l.fr,l.Gu,l.wd,l.sr,l.cs,P,V],styles:["ion-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}ion-toolbar[_ngcontent-%COMP%]{margin:0 auto;max-width:600px}.game-area[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;height:100%;padding:1em}.game-area[_ngcontent-%COMP%]   swiper-container[_ngcontent-%COMP%], .game-area[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%]{background-color:var(--md-sys-color-secondary-container);border-radius:15px;padding:10px}.game-area[_ngcontent-%COMP%]   swiper-container[_ngcontent-%COMP%]{width:100%;height:-moz-fit-content;height:fit-content}.game-area[_ngcontent-%COMP%]   swiper-container[_ngcontent-%COMP%]   swiper-slide[_ngcontent-%COMP%]{height:-moz-fit-content;height:fit-content;display:flex;flex-direction:column}.game-area[_ngcontent-%COMP%]   .opponents[_ngcontent-%COMP%]{width:100%;height:100%}.game-area[_ngcontent-%COMP%]   .build-area[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;justify-items:center}.game-area[_ngcontent-%COMP%]   .build-area[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:grid;grid-template-columns:100%;justify-content:center;max-width:70px;width:100%}.game-area[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%]{grid-row:3/4}"]}),n})()}];let L=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[x.Bz.forChild(j)]}),n})(),G=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[d.ez,l.Pc,L]}),n})()}}]);