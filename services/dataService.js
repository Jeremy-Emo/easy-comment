const comments = [
  [
    "Trimestre décevant, il faut commencer par apprendre son prénom. Pour info ça s'écrit %name%.",
    "Il va falloir que %name% devienne meilleur que naze.",
    "%name% s'est surpassé ce trimestre. Je ne pensais pas qu'on pouvait être aussi mauvais.",
    "%name% fait acte de présence et c'est déjà bien.",
    "%name% a fait des efforts ce trimestre mais ce n'est toujours pas suffisant.",
    "Qui êtes-vous ?",
    "Ne préfère pas se prononcer.",
    "Aucun effort !",
    "%name% ne peut probablement pas faire pire...",
    "Arrogant, il est temps de revenir sur Terre et de se rendre compte de la réalité.",
    "Je pensais avoir un tas d'or, j'ai un tas de boue.",
    "Je ne pense pas qu'il y ait de bons ou de mauvais trimestre, mais là il y a urgence pour %name%",
    "McDonalds recrute.",
    "Bof...",
    "Peut mieux faire, et ce n'est pas difficile",
    "Bravo, %name% a doublé sa moyenne, mais dommage qu'il ait 0...",
    "Si tous les élèves étaient comme %name%, je serais en SEGPA",
    "%name% a encore besoin de faire ses preuves.",
    "N'étant jamais venu en cours, vous n'y avez fait aucun mal.",
    "Dommage...",
    "Votre tension est remontée à 4",
    "De toute façon, Zidane non plus n'a pas eu son BAC",
    "De toute façon, Zahia non plus n'a pas eu son BAC",
    "Je vous pardonne tout.",
    "Si %name% souhaite passe le bac un jour, cela sera plus facile pour lui d'aller à Caudebec en caux",
  ],
  [
    "Trimestre classique pour %name%",
    "Un trimestre habituel pour %name%",
    "%name% fait preuve de bonne volonté, il faut persévérer.",
    "%name% a fait des efforts ce trimestre et on constate de nets progrès.",
    "%name% doit continuer travailler afin de produire de meilleurs résultats.",
    "%name% a des capacités, il ne manque que la motivation pour les utiliser.",
    "%name% a des difficultés, mais fait des efforts remarqués pour compenser.",
    "Je ne pense pas qu'il y ait de bonnes ou de mauvaises situations.",
    "Peut mieux faire",
    "Ni bon ni mauvais.",
    "C'est bien",
    "C'est assez bien",
    "Au vu des notes de %name%, merci de penser à un projet professionnel en adéquation avec ses capacités.",
    "Vous y êtes presque !",
    "Continuez.",
    "%name% est venu à la plupart des cours.",
  ],
  [
    "Bon trimestre pour %name%",
    "Excellent trimestre pour %name%",
    "%name% est arrogant, mais peut se le permettre.",
    "Un bon travail ce trimestre pour %name%. Continuez, vous êtes sur la bonne voie !",
    "Si tous les élèves étaient comme %name%, je n'aurais plus besoin de travailler.",
    "L'Excellence",
    "Je pensais que %name% trichait, mais c'est tout simplement un génie.",
    "N'a pas besoin de faire ses preuves, cela est totalement inutile.",
  ]
]

export function getData(value, name = "") {
  const authorizedValues = [0, 1, 2];
  if (!authorizedValues.includes(value)) {
    return "";
  }
  let comment = comments[value][Math.floor(Math.random() * comments[value].length)];
  return comment.replace('%name%', name);
}
