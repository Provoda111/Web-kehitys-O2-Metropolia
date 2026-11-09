# JS-moduuli 3: Taulukot ja funktiot
1. Kirjoita ohjelma, joka kysyy käyttäjältä viisi lukua ja tulostaa ne päinvastaisessa järjestyksessä kuin käyttäjä ne syötti (ei siis suuruusjärjestyksessä). Tulosta tulos konsoliin. (2p)
- Tallenna luvut taulukkoon ja käy taulukko sitten for-silmukalla läpi lopusta alkuun
- Älä käytä metodia array.reverse()

2. Kirjoita ohjelma, joka kysyy käyttäjältä osallistujien lukumäärän. Tämän jälkeen ohjelma kysyy kaikkien osallistujien nimet. Lopuksi ohjelma tulostaa osallistujien nimet verkkosivulle numeroituna luettelona (ol) aakkosjärjestyksessä. (2p)

3. Kirjoita ohjelma, joka kysyy kuuden koiran nimet. Ohjelma tulostaa koirien nimet järjestämättömään luetteloon (ul) käänteisessä aakkosjärjestyksessä.

4. Kirjoita ohjelma, joka kysyy käyttäjältä lukuja, kunnes käyttäjä syöttää nollan. Ohjelma tulostaa annetut luvut konsoliin suurimmasta pienimpään. (2p)

5. Kirjoita ohjelma, joka kysyy käyttäjältä lukuja. Kun käyttäjä syöttää luvun, jonka hän on jo aiemmin syöttänyt, ohjelma ilmoittaa, että luku on jo annettu, lopettaa toimintansa ja tulostaa kaikki annetut luvut konsoliin nousevassa järjestyksessä. (2p)

6. Kirjoita funktio, joka palauttaa satunnaisen nopanheiton tuloksen väliltä 1–6. Funktiolla ei saa olla parametreja. Kirjoita pääohjelma, joka heittää noppaa, kunnes tulos on 6. Pääohjelman on tulostettava jokaisen heiton tulos järjestämättömään luetteloon (<ul>). (2p)

7. Muokkaa edellistä funktiota niin, että sillä on parametri, joka kertoo nopan tahkojen lukumäärän. Muokatulla funktiolla voit heittää esimerkiksi 21-tahkoista roolipelinoppaa. Toisin kuin edellisessä tehtävässä, pääohjelma heittää noppaa, kunnes tulos on nopan suurin silmäluku. Pääohjelma kysyy tahkojen lukumäärän käyttäjältä ohjelman alussa. (2p)

8. Kirjoita funktio nimeltä concat(), jonka parametri on merkkijonoja sisältävä taulukko. Funktio palauttaa merkkijonon, joka muodostetaan yhdistämällä taulukon alkiot toisiinsa. (2p)
- Esimerkki: Nelialkioisessa taulukossa ovat alkiot Johnny, DeeDee, Joey ja Marky. Funktio palauttaa merkkijonon JohnnyDeeDeeJoeyMarky.
- Älä käytä metodia array.join()
- Voit kirjoittaa taulukon suoraan koodiin. prompt()-funktiota ei tarvita
- Tulosta tulos HTML-dokumenttiin.

9. Kirjoita funktio nimeltä even(), jonka parametri on lukuja sisältävä taulukko. Funktio palauttaa uuden (yleensä lyhyemmän) taulukon, jossa ovat alkuperäisen taulukon parilliset luvut. Funktio ei saa muuttaa alkuperäistä taulukkoa. (3p)
- Esimerkki: Kolmialkioisessa taulukossa ovat alkiot 2, 7 ja 4. Funktio palauttaa kaksialkioisen taulukon, jossa ovat alkiot 2 ja 4.
- Tulosta pääohjelmassa funktiokutsun jälkeen sekä alkuperäinen että uusi taulukko konsoliin.
- Voit kirjoittaa taulukon suoraan koodiin. prompt()-funktiota ei tarvita.

10. Kirjoita alla kuvattu äänestysohjelma pienimuotoiseen kokouskäyttöön.
- Ohjelma kysyy ehdokkaiden lukumäärän
- Sitten ohjelma kysyy ehdokkaiden nimet: Ehdokkaan 1 nimi
- Tallenna jokaisen ehdokkaan nimi ja äänimäärän alkuarvo omaan olioonsa ja oliot taulukkoon näin:
```json
[
  {
    name: "ellie",
    votes: 0,
  },
  {
    name: "frank",
    votes: 0,
  },
  {
    name: "pamela",
    votes: 0,
  },
];
```

- Ohjelma kysyy äänestäjien lukumäärän
- Ohjelma kysyy vuorotellen jokaiselta äänestäjältä, ketä hän äänestää. Äänestäjä syöttää ehdokkaan nimen. Jos äänestäjä jättää nimen syöttämättä, ääni tulkitaan tyhjäksi.
- Ohjelma tulostaa konsoliin voittajan nimen ja tulokset:
Voittaja on pamela 3 äänellä.
tulokset:
pamela: 3 ääntä
frank: 1 ääntä
ellie: 1 ääntä
- Vähän apua:
```js
// Vertaile äänimääriä. Tulosta a ja b konsoliin, niin näet, miten pääset käsiksi oikeaan ominaisuuteen.
someArray.sort((a, b) => {
  console.log(a, b);
  return b - a;
});
```
