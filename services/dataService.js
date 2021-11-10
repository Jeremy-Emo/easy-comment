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
    "%name% ne peut probablement pas faire pire..."
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
  ],
  [
    "Bon trimestre pour %name%",
    "Excellent trimestre pour %name%",
    "%name% est arrogant, mais peut se le permettre.",
    "Un bon travail ce trimestre pour %name%. Continuez, vous êtes sur la bonne voie !"
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
