# JS-moduulit 1 ja 2: Vuorovaikutteiset ohjelmat ja ohjausrakenteet
1. Kirjoita ohjelma, joka tulostaa konsoliin tekstin I'm printing to console! (1 p)

2. Kirjoita ohjelma, joka kysyy käyttäjän nimeä ja tervehtii sitten käyttäjää. Tulosta tervehdys HTML-dokumenttiin: Hei, Nimi! (2 p)

3. Kirjoita ohjelma, joka kysyy kolme kokonaislukua. Ohjelma tulostaa lukujen summan, tulon ja keskiarvon HTML-dokumenttiin. (3 p)
- Muista muuntaa merkkijonot luvuiksi ennen kuin lasket ne yhteen.

4. Harry Potter -lastenkirjoissa lajitteluhattu sijoittaa Tylypahkan noitien ja velhojen koulun uuden oppilaan yhteen neljästä tuvasta, jotka ovat Rohkelikko, Luihuinen, Puuskupuh ja Korpinkynsi. Kirjoita sähköinen lajitteluhattu, joka kysyy oppilaan nimeä ja arpoo oppilaalle tuvan. Jos annat nimeksi esimerkiksi Anna, ohjelma tulostaa HTML-dokumenttiin ”Anna, sinä olet Korpinkynsi.” (3 p)
- Käytä metodia Math.random() arvon (1, 2, 3 tai 4) arpomiseen.
- Kun luku on arvottu, tarvitset valintarakenteen, jossa on useita vaihtoehtoja (if, else if, …, else tai switch).

5. Kirjoita ohjelma, joka pyytää käyttäjää syöttämään vuosiluvun ja ilmoittaa, onko vuosi karkausvuosi. Vuosi on karkausvuosi, jos se on jaollinen neljällä. Sadalla jaolliset vuodet ovat kuitenkin karkausvuosia vain, jos ne ovat jaollisia myös neljälläsadalla. Tulosta tulos HTML-dokumenttiin. (3 p)

6. Kirjoita ohjelma, joka näyttää vahvistusikkunassa tekstin ”Lasketaanko neliöjuuri?”. Jos käyttäjä valitsee OK, ohjelma kysyy luvun, laskee sen neliöjuuren ja tulostaa neliöjuuren HTML-dokumenttiin. Jos käyttäjä valitsee Cancel, ohjelma tulostaa HTML-dokumenttiin tekstin ”Neliöjuurta ei lasketa.” (3 p)
- Vahvistusikkunan saat näkyviin funktiolla confirm(). Funktio palauttaa arvon true, jos käyttäjä valitsee OK, ja arvon false, jos käyttäjä valitsee Cancel.
- Negatiivisen luvun neliöjuurta ei voi laskea. Jos käyttäjän syöttämä luku on negatiivinen, ohjelma tulostaa HTML-dokumenttiin ”Negatiivisen luvun neliöjuurta ei ole määritelty.”

7. Kirjoita ohjelma, joka heittää noppaa käyttäjän antaman määrän kertoja ja näyttää heittojen silmälukujen summan. (2 p)
- Ensin ohjelma kysyy käyttäjältä, montako kertaa noppaa heitetään.
- Sitten ohjelma heittää noppaa niin monta kertaa kuin käyttäjä antoi.
- Tulosta silmälukujen summa konsoliin tai HTML-dokumenttiin.

8. Kirjoita ohjelma, joka kysyy käyttäjältä alku- ja loppuvuoden. Ohjelma tulostaa kaikki karkausvuodet käyttäjän antamalta väliltä. Tulosta vuodet HTML-dokumenttiin järjestämättömänä luettelona (<ul>). (3 p)
- Esimerkki tulosteen HTML-koodista: ```html
1992
1996
2000
2004
2008
```

9. Kirjoita ohjelma, joka kysyy käyttäjältä kokonaisluvun ja kertoo, onko luku alkuluku. (2 p)
- Alkuluku on ykköstä suurempi kokonaisluku, joka on jaollinen vain luvulla 1 ja itsellään.
- Esimerkiksi 13 on alkuluku, koska sen voi jakaa vain luvuilla 1 ja 13 niin, että tulos on kokonaisluku.
- Sen sijaan esimerkiksi 21 ei ole alkuluku, koska sen voi jakaa myös luvuilla 3 ja 7.
- Tulosta tulos HTML-dokumenttiin.

10. Kirjoita ohjelma, joka kysyy käyttäjältä noppien lukumäärän ja silmälukujen summan, josta käyttäjä on kiinnostunut. Ohjelma selvittää, millä todennäköisyydellä annettu määrä noppia tuottaa annetun silmälukujen summan. Jos käyttäjä esimerkiksi syöttää noppien lukumääräksi 3 ja silmälukujen summaksi 17, ohjelma laskee todennäköisyyden sille, että kolmen nopan silmälukujen summa on 17. (5 p)
- Ratkaise ongelma simuloimalla: heitä annettua määrää noppia for-silmukassa monta kertaa (esim. 10 000 kertaa) ja laske, kuinka suuressa osassa heittokerroista silmälukujen summa oli käyttäjän antama summa.
- Tulosta tulos HTML-dokumenttiin:
- Todennäköisyys saada summa 7 kahdella nopalla on 15.64%
- Voit rajoittaa desimaalien määrää metodilla toFixed().
- Testiarvoja:
2 noppaa, summa 7: todennäköisyys on noin 15–17 %
3 noppaa, summa 15: todennäköisyys on noin 5 %