SAE-1.05-site-Groupe-OwO <a name="haut_page"></a>
========================


Bonjour et bienvenue sur le readme.md du site pour la SAE-1.06  
>*Vous pouvez trouver le dossier contenant tous les détails sur le projet en lui-meme [ici](https://ametice.univ-amu.fr/pluginfile.php/5207407/assignsubmission_file/submission_files/2358965/SAE_1.05_Groupe_OwO_Projet_1.pdf?forcedownload=1)*  [^1]
  
  
## Fiche technique du site détaillée  

### Généralités :
>Les langages uttilisées :
> 1. HTML
> 1. CSS  
> Le site utilise des images pour le background et le corps, il est donc important de garder le fichier "img"
>>Pour ces images et le fichier css, il utilise des chemins relatif. Il est donc capital de conserver la même configuration des dossiers et fichiers.  
> 

### Généralités sur le script HTML :  
  
Le fichier **HTML** est rangé dans ./html/index.html. Il est doit rester a sa place pour garder les bons chemins relatifs.  
Ce fichier constitut l'essentiel du site, c'est lui qui contient toutes les informations utiles pour l'évènnement. 
  
Ce script est séparé en plusieurs grands axes.  
  
>#### Nav et encrages  
>  
>La balise nav est celle du menu à gauche, ou en haut sur mobile.  
>Elle est composée d'une liste de lien dit "d'encrage", c'est à dire que lorsque ces liens sont cliqués, ils amènent l'utilisateur à un autre endroit sur la page.  
>  
>#### Header et Footer
>    
>Le header est la partie différenciée qui se situe en haut de la page.  
>>Il contient le titre de la page et les logos de OwO Events et TF1.  
>  
>Le footer est la partie différenciée qui se situe en bas de la page.  
>>Il contient les contacts, les sources et les logos de OwO Events et TF1.  
>  
>#### Le main  
>  
>Le reste reste du site contient des "box" qui sont des petites divisions du site contenant chacune des informations sur le même sujet. Elles peuvent aussi contenir des tableaux et des images.  

### Généralités sur le script CSS

Le fichier **CSS** est rangé dans .style/index.css. Il doit rester à sa place pour garder les bons chemins relatifs.  
Ce fichier permet une lecture plus agréable et ordonnée du script HTML.

Ce script embélit les éléments de "body" ayant l'attribut "id" ou "class" ainsi les balises telles que "h1" ou "nav". 

>### Fonds
>
>Nous avons utiliser plusieurs propriété pour les fonds de notre site :
> * background-image : nous avons inséré une image du théâtres silvain
> * background-color : utilisé en tant que filtre sur image ou box


| Localisation    |                               Couleurs                              |
|--------------   |:-------------------------------------------------------------------:|
| Header et Footer|  rgba(27, 27, 27, 0.432), rgb(250, 189, 75)                         |
| Nav             |  rgba(241, 189, 83, 0.7), rgba(248, 212, 212, 0.7), white (:hover)  |
| .contener       | rgba(218, 198, 221, 0.4)                                            |
| .box            | rgba(218, 204, 240, 0.555), rgba(240, 202, 132, 0.555) (:hover)     |
| title           | rgb(86, 26, 94)                                                     |
| table           | rgba(86, 87, 102, 0.555)                                            |


>Voici le script css de notre div section:

```css
.box {
    transition:1s;
    display: flex;
    flex-direction: column;
    background-color: rgba(218, 204, 240, 0.555);
    padding: 1rem;
    padding-top: 0rem;
    margin: 2rem;
    box-shadow: rgb(41, 39, 39)  0px 1px 7px;
    border-radius: 1.5rem;
}
```
[Revenir en haut du README](#haut_page)
### MERCI D'AVOIR LU NOTRE README.MD 😉

[^1]:"https://ametice.univ-amu.fr/pluginfile.php/5207407/assignsubmission_file/submission_files/2358965/SAE_1.05_Groupe_OwO_Projet_1.pdf?forcedownload=1"
