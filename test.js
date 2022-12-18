class Article {
    constructor(produit, reference, prixHt) {
        //this : allocation en mémoire d'un nouvel objet
        this.produit = produit;
        this.reference = reference;
        this.prixHt = prixHt;
        console.log('typeof =>' + typeof this);  //type objet
        console.log(this);   //le nouvel objet
        //return du this au moment du new
    }
    calculPrixTTC() {
        const TVA = 1.196;
        return this.prixHt * TVA;
    }
}
//je vais creer un premier objet en nstanciant la class Article
var article1 = new Article("chaussures", 2514, 35);
//creer un autre objet instance de la classe Article
var article2 = new Article("sac a dos", 5555, 40);
//je vais calculer le prix TTC pour article 1 et article 2
console.log('Prix TTC de article 1 :' + article1.calculPrixTTC());
console.log('Prix TTC de article 2 :' + article2.calculPrixTTC());