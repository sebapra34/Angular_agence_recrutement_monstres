import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Monster } from './monster';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const monsters = [
      {id : 1, name: 'Kitsune', photo: 'https://zupimages.net/up/21/43/9opj.png',desc: 'Demon renard provenant du Japon, il possède des pouvoirs d’illusionnisme et un caractère espiègle. Il possède une intelligence supérieure et des capacités de clairvoyance.'},
    { id: 2, name: 'Cyclope', photo: 'https://zupimages.net/up/21/43/m4y3.jpg', desc: 'Géant à l\'oeil unique, il n\'est pas des plus intelligents mais dispose d\'une force phénomènale. Il sera votre meilleur allié pour les déménagements !'},
    { id: 3, name: 'Minotaure', photo: 'https://zupimages.net/up/21/43/y7q9.png', desc: 'Monstre mi-homme mi-taureau, avec son sens de l\'orientation aiguisé vous ne serez jamais perdu.'},
    { id: 4, name: 'Succube', photo: 'https://zupimages.net/up/21/43/kp3v.png',  desc: 'Votre conjoint vous est infidèle ? Embauchez notre succube ! Capable de séduire n\importe quel homme pour l\'abandonner ensuite au désespoir, vengeance assurée.'},
    { id: 5, name: 'Sirene', photo: 'https://zupimages.net/up/21/43/o11h.png', desc: 'Mi-femme mi-poisson dont la beauté ne cède en rien aux plus belles femmes. Son champ envoûtant vous ferra oublier tout vos problèmes.'},
    { id: 6, name: 'Vampire' , photo: 'https://zupimages.net/up/21/43/wwd1.png', desc: 'Une petite insomnie, envie de balades nocturnes ? Contactez notre vampire, il se ferra un plaisir de vous accompagner pour un rendez-vous au clair de lune.'},
    { id: 7, name: 'Elfe noir' , photo: 'https://zupimages.net/up/21/43/sr0v.png', desc: 'Nos elfes font preuve d\'une minutie, d\'une précision et d\'une rigueur incomparable. Ils aiment aussi se battre. ils seront donc de parfait partenaires pour vos taches de précision ou pour vos entrainements sportifs.'},
    { id: 8, name: 'Loup-garou' , photo: 'https://zupimages.net/up/21/43/05jj.png', desc: 'Vous partez en radonnée mais vous craignez de ne pas tenir le rythme? Notre lycan vous portera à toute vitesse. Vous voulez dresser votre compagnon canin? Notre lycan en ferra un ange. Vous avez vraiment trop froid cet hiver? Notre lycan vous enveloppera de sa fourrure.'},
    { id: 9, name: 'Dragon' , photo: 'https://zupimages.net/up/21/43/351t.png', desc: 'Envie de sensations fortes ? Besoin d\'un vol tout en évitant les heures d\'attente à l\aéroport et en personnalisant l\'itinéraire? Optez pour le dragon !'},
    { id: 10, name: 'Zombie' , photo: 'https://zupimages.net/up/21/43/wyce.png', desc: 'Que vous souhaitiez faire un court métrage à la Walking Dead ou seulement rafler une montagne de bonbons pour Halloween, faites vous accompagner de notre zombie ! Il est parfois un peu à la ramasse, mais il est très sympa !'},
    { id: 11, name: 'Phénix' , photo: 'https://zupimages.net/up/21/43/qwux.png', desc: 'La facture EDF est douloureuse cet hiver? Ne pas avoir d\'animaux chez vous vous manque ? Adoptez pour un jour ou plus notre phénix ! Il illuminera votre coeur et rechauffera votre corps !'}
  ];
    return {monsters};
  }

  // Ré-ecriture de la methode genId pour s'assurer qu'un monstre ai toujours un identifiant.
  // Si le tableau de monstres est vide, la méthode renvoie le nombre initial (1).
  // sinon la méthode renvoie le plus haut id de monstre + 1.
  genId(monsters: Monster[]): number {
    return monsters.length > 0 ? Math.max(...monsters.map(monster => monster.id)) + 1 : 1;
  }
}