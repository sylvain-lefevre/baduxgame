# baduxgame (Les NEOphytes)

## Contexte
Ce projet a pour but de répondre au thème "Contrôle d'accès" :lock: du hackathon baduxgames (https://baduxgames.wtf/).

## L'équipe :family:
Ce projet a été pensé et mis en oeuvre par une équipe de 8 personnes:
- Aude
- Alison
- Marjorie
- Elfried
- Clément
- Nathan
- François
- Sylvain

## Instructions
La solution a été pensée de bout en bout en partant de la page suivante https://sylvain-lefevre.github.io/baduxgame/.

:dart: L'objectif étant de réussir à se connecter.

Votre nom de connexion est : 0ba7c979-fd67-427b-a594-fd96f0122613

:question: Par contre j'ai oublié le mot de passe... Comment faire ? 

Une page spécifique vous indiquera que vous êtes connectés et que vous avez donc réussi le parcours.

:no_entry: Il est interdit de changer de page via le navigateur (historique, changement d'url) et autres raccourcis non prévus dans l'IHM (clics droits...).
L'ensemble de la solution est prévu pour atteindre le but de connexion.

:construction: Aucune voie sans issue n'existe. Tout est pensé pour pouvoir naviguer depuis les composants dans l'IHM.

Avec le son c'est mieux :notes:

Plusieurs comportements peuvent s'apparenter à un bug mais il est fort possible que ça n'en soit pas un.
La liste complète des fonctionnalités implémentées est disponible ci-après.
La solution est aussi indiquée tout en bas de cette page.

## Fonctionnalités mises en oeuvre

### Page d'accueil (index.html)
Cette page est la page principale et comporte l'ensemble des éléments suivants

#### <ins>Champs de connexion</ins>
- Les deux champs de connexion se situent en bas de la page à l'opposé l'un de l'autre
- Les deux champs inversent leur position à chaque fois que nous sortons du process de connexion (annulation ou échec de la connexion)

Chacun comporte ses spécificités

##### <ins>Champ nom de connexion</ins>

- Champ de type password avec possibilité d'afficher le contenu avec l'oeil à droite

##### <ins>Champ mot de passe</ins>

- Contient un faux placeholder qui est simplement un texte par dessus
- Au clic sur le faux placeholder le focus est mis sur l'input password
- Se réduit à chaque lettre tapée dans le champ jusqu'à une limite de 50 pixels

#### <ins>Texte de bienvenue</ins>

- Texte très long qui ne sert pas à grand chose avec différentes tailles de texte
- Une scrollbar horizontale est présente pour un seul élément du texte
- La scrollbar verticale est désactivée
- La taille du champ dépasse la taille de la page
- Un lien permettant de se rendre sur la page de réinitialisation du mot de passe est présent tout à la fin du texte de couleur très proche avec le fond blanc
- Ce lien est cliquable uniquement sur le mot "ici"

#### <ins>Bouton Connexion</ins>

- Bouton placé en haut à droite
- Au survol souris le bouton se déplace légèrement
- Le texte n'est pas complètement lisible
- Au clic le bouton déclenche la phase de connexion et un loader le remplace

#### <ins>Phase de connexion</ins>

- Au clic sur le bouton de connexion cette phase se lance
- Un overlay et une modale s'affiche tout en bas de l'écran
- La modale demande à l'utilisateur 5 fois d'affilée s'il est sur de vouloir continuer le process
- Un bouton "oui" permet de passer à l'étape suivante. Un bouton "non" permet d'annuler le process de connexion
- Après la 5ème validation un captcha s'affiche
- Une musique d'ascenseur est disponible tout au long du process et s'arrête à la réussite ou l'annulation de celui-ci
- Une fois le captcha validé, la modale disparait et une attente de 5 secondes intervient avant le résultat de l'authentification
- En cas d'erreur une alerte s'affiche
- En cas de succès, redirection vers la page success.html

#### <ins>Captcha</ins>
Le captcha est une énigme.

La suite logique correspond à la première lettre de chaque chiffre en anglais
One, Two, Three, Four, Five, Six, Seven,..

La réponse est donc E

- Les boutons oui et non sont grisés et ils ne servent à rien
- Il est nécessaire de remplir le champ avec la réponse et de cliquer en dehors du champ pour que la réponse soit prise en compte.
- Suite à la validation du captcha le process de connexion se poursuit (voir ci-dessus)

#### <ins>Cookies</ins>
Un bandeau de cookies est affiché au milieu/bas de l'écran.

- Un petit bouton "Je refuse" est présent
- Un très gros bouton "J'accepte" est présent
- Le focus par tabulation sur le bouton "Je refuse" est impossible et renvoie le focus sur le bouton "J'accepte"
- Au clic sur le bouton "Je refuse" une alerte avec un message s'affiche puis à la validation de l'alerte les 2 boutons sont remplacés par un bouton "Je n'ai pas le choix donc ok"
- Le bandeau de cookies ne s'enlève qu'au clic sur le bouton "J'accepte" ou le bouton "Je n'ai pas le choix donc OK"
- Un icon draggable est présent sur l'ensemble du bandeau dont les boutons
- Le bandeau peut être déplacé avec la souris mais lorsque la souris est déplacée il revient à sa place initiale

#### <ins>Titres</ins>
Plusieurs titres sont présents avec une mauvaise hiérarchie (h2 puis h3 puis h1)

#### <ins>Demande de localisation</ins>
Une demande de localisation est présente au chargement de la page

### Page réinitialisation de mot de passe (reset.html)

#### <ins>Champ de réinitialisation</ins>

- Le champ est un textarea
- Le champ ne fait que maximum 3 caractères de large 
- Le champ n'est étirable que vers le bas
- Il se superpose un peu sur les règles de réinitialisation
- Un placeholder difficilement lisible est présent

#### <ins>Règles de réinitialisation</ins>

- La première règle ne s'affiche que lorsque l'utilisateur entre dans le champ de réinitialisation
- Une règle s'affiche en rouge si elle est validée
- Une règle s'affiche en gris si elle n'est pas validée
- Les règles sont validées à la sortie du champ réinitialisation. Si toutes les règles affichées sont toujours valides, alors la/les règles suivantes sont affichées jusqu'à la dernière non valide. Cette dernière sera affichée en noir.
- Une règle déjà validée peut devenir invalide lors de la validation de la règle suivante. Il faut donc corriger.
- Lorsque toutes les règles sont validées, une alerte s'affiche pour informer l'utilisateur
- Il existe 11 règles pour valider la réinitialisation

    - *minimum 5 caractères*
    - *minimum 1 lettre et 1 chiffre*
    - *minimum 1 caractère spécial* (la liste des caractères acceptés n'est pas indiquée dans l'IHM => **$&+,:;=?@#|'<>.^*()%!-** )
    - *minimum 1 lettre capitale*
    - *doit contenir autant de lettres que de chiffres*
    - *la somme des chiffres présents doit être divisible par 5*. On parle bien ici de la somme de tous les chiffres présents
    - *ne doit pas contenir 1234*
    - *doit contenir le symbole chimique de l'étain* => **Sn** (la casse est importante)
    - *doit contenir le numéro atomique de l'argent* => **47**
    - *doit contenir le code postal d'Ecully* => **69130**
    - *doit contenir le nom de la capitale de Madagascar* => **Antananarivo** (la casse n'est pas importante)

#### <ins>Bouton de retour à la page d'accueil</ins>
Un lien permettant de retourner à la page d'accueil est présent sur la page mais très difficile à voir.

- Le bouton est situé tout à droite de l'écran à la limite de la bordure vers le milieu
- Le bouton comporte un lien pour revenir à la page précédente
- Il est nécessaire de passer la souris dessus et de laisser la souris pour que le lien se déplace vers la gauche de l'écran et apparaisse
- Le lien n'est cliquable que lorsqu'il s'affiche, le début du bouton n'est pas cliquable
- La couleur du lien est très proche de la couleur du fond de la page
- Le bouton peut prendre le focus mais ne fait pas d'action
- Le lien ne peut pas prendre le focus

## Solution
- Se rendre sur la page https://sylvain-lefevre.github.io/baduxgame/
- Renseigner la valeur "0ba7c979-fd67-427b-a594-fd96f0122613" dans le champ nom de connexion
- Renseigner la valeur "Le mot de passe" dans le champ mot de passe.
- Cliquer sur le bouton connexion en haut à droite
- Cliquer sur oui 5 fois lorsque la confirmation vous est demandée
- Renseigner la réponse "E" dans le champ prévu pour le Captcha puis cliquer en dehors du champ
- Après une attente de 5 secondes vous serez redirigé vers l'écran de succès https://sylvain-lefevre.github.io/baduxgame/success.html 

La page de réinitialisation de mot de passe ne sert strictement à rien.


