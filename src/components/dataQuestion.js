const dataQuestions = [
  {
    numero: "1. ",
    question: "Cette année, Luc Besson, accusé récemment de viol et d'agressions sexuelles sur ses tournages, gagne un César de la meilleure réalisation, comment réagis-tu ?",
    reponses: [
      { symbole: "smile",taille:'text-4xl', texte: "« Excellent film, j'aime beaucoup son travail, il faut savoir séparer l'homme de l'artiste. »" },
      { symbole: "peace",taille:'text-4xl', texte: "Trop c'est trop ! Tu perturbes la cérémonie." },
      { symbole: "diams",taille:'text-2xl', texte: "Rien à battre des Césars, avec mes potes on apprend à faire nos propres films." },
      { symbole: "feuille",taille:'text-4xl', texte: "Les Césars sont une vieille institution qu'il faut décidément dépoussiérer, cependant ils ne sont pas un tribunal. " },
      { symbole: "smile",taille:'text-4xl', texte: "La présomption d'innocence, c'est pas pour les chiens. Europacorp, sa boîte de prod, fait quand même rayonner le cinéma français dans le monde." },
      { symbole: "peace",taille:'text-4xl', texte: "Ça tombe bien, une de tes copines bosse en extra à l'hôtel où il est descendu. Et hop un laxatif dans son martini le soir de la cérémonie." },
      { symbole: "diams",taille:'text-2xl', texte: "Le problème est plus large que Luc. Tu montes un groupe de discussion sur les relations de pouvoir au travail et les abus qui en découlent. " },
      { symbole: "feuille",taille:'text-4xl', texte: "Tu signes la pétition pour augmenter la représentation des minorités dans les palmarès." },
    ],
    choix: [],
  },
  {
    numero:"2.",
    question: "Un de tes très bons pote a violé quelqu’un-e à la fête, c’est avéré. Colère et désolation. Aucune plainte n’a été déposée.",
    reponses: [
        { symbole: "smile",taille:'text-4xl', texte: "Cette situation te dépasse, c'est à des professionnel-les de gérer, tu ne te sens pas légitime pour t'en mêler." },
        { symbole: "peace", taille:'text-4xl', texte: "Très simple : « Allo Brenda ? C'est Jenny. T'as prévenu Cindy ? – Oui, au top, elle amène les battes. À tout' ! » *(stp, pas par téléphone)" },
        { symbole: "diams", taille:'text-2xl', texte: " C'est ton pote c'est aussi ton histoire. Tu contactes la personne violée pour savoir comment la soutenir." },
        { symbole: "feuille", taille:'text-4xl', texte: "Tu romps les ponts, c'est un violeur, c'est une limite absolue, ciao." },
        { symbole: "smile", taille:'text-4xl', texte: "Marre de l'impunité. Tu espère que la victime portera plainte et qu'il va subir des conséquences. Tu hésites à le dénoncer toi-même. Marre des copinages et des petits arrangements." },
        { symbole: "peace", taille:'text-4xl', texte: "Il ne doit pas pouvoir recommencer et pour ça, tu ne comptes pas sur la police. Tu affiches ton ex-pote sur les murs du quartier, les réseaux sociaux, les lieux ou es cercles qu'il fréquente et tu l'exclus de vos cercles communs." },
        { symbole: "diams", taille:'text-2xl', texte: "Ce qu'il a fait est très grave et tu ne veux ni le couvrir, ni prendre le risque que cela se reproduise, ni appeler la police. Tu t'engages avec des ami-e-s dans un encadrement collectif pour lui faire reconnaître les faits, trouver une réparation, fixer les conditions d'un réel changement de comportement. " },
        { symbole: "feuille", taille:'text-4xl', texte: "Tu lui demandes de se faire suivre par une asso d'aide aux auteur-es de violence." },
      ],
    choix: [],
  },
  {
    numero:"3. ",
    question: "C’est l’heure de pointe dans le métro, tu es debout collée-serrée au centre de la rame quand soudain, dans ton dos, reconnaissable entre tous, tu le sens : le Frotteur ! C’est cadeau, c’est maintenant, c’est dégueu.",
    reponses: [
        { symbole: "smile",taille:'text-4xl',  texte: "Tu appelles ostensiblement la police. « Bim ! Tu vas faire quoi là relou ? Avec toutes ces caméras, t'es dans la merde ! »" },
        { symbole: "peace", taille:'text-4xl', texte: "Tu écris direct à ton crew, deux potes au taquet montent 4 arrêts plus loin, vous faites sa fête au frotteur." },
        { symbole: "diams", taille:'text-2xl', texte: "Bien dans les yeux, tu lui parles bien fort : « Ça va ? T'es à l'aise à bander dans mon dos ? » Tout le monde à entendu. Le gars s'excuse et descend vite. Port de reine, rose aux joues et dignité. Tu te dis qu'il est temps d'inviter tes amis hommes cis à un moment de partage sur les vécus genrés de l'espace public." },
        { symbole: "feuille", taille:'text-4xl', texte: "Tu n'arrives pas à réagir, tu descends au premier arrêt. Tu as lu dans la presse qu'à Mexico, il y a des wagons et des quais réservés aux femmes dans le métro. Ça te parle tout à coup." },
        { symbole: "smile", taille:'text-4xl', texte: "Tu sors au premier arrêt pour signaler les faits aux agents de sécurité nouvellement formés pour ça comme recommandé sur les panneaux de prévention dans les stations." },
        { symbole: "peace", taille:'text-4xl', texte: "Tu le prends en photo et tu le balances sur tes réseaux. « On t'a à l'oeil maintenant ! » Avalanche de commentaires, menaces de mort pour le frotteur, pluie de cœur pour toi, feu d'artifice de reposts. Dopamine et soulagement. " },
        { symbole: "peace", taille:'text-4xl', texte: "Tu le sèches d'un bon coup de coude et/ou d'un gros coup de talon. Efficacité, plaisir, c'est lui qui descend." },
        { symbole: "feuille", taille:'text-4xl', texte: "Un peu plus tard, tu racontes anonymement ta mésaventure sur un #ananamarre, des commentaires te font du bien." },
      ],
    choix: [],
  },
  {
    numero:"4. ",
    question: "Monsieur Bournichon, doyen de l'université, multiplie les remarques sexistes en amphi et en tire une grande fierté :",
    reponses: [
        { symbole: "smile", taille:'text-4xl', texte: "Tu affiches sa tête de sale porc dans les couloirs de la fac en dénonçant son attitude et lance le #bournichonlecochon sur Instagram." },
        { symbole: "peace", taille:'text-4xl', texte: "Tu t'organises avec d'autres personnes de ta promo pour le confronter en amphi lors de sa prochaine remarque déplacée." },
        { symbole: "diams", taille:'text-2xl', texte: "Avec tes camarades de classe, tu profites d'une réunion pour coller à la glu la serrure de la salle des profs. Vous leur glissez sous la porte des pistes de réflexion sur les rapports de pouvoir sexiste, classistes et racistes à l'université. " },
        { symbole: "feuille", taille:'text-4xl', texte: "Tu écris une lettre à l'administration de la fac en leur demandant de sévir et menace de lancer une pétition." },
        { symbole: "smile", taille:'text-4xl', texte: "Tu portes plainte pour harcèlement." },
        { symbole: "peace",taille:'text-4xl',  texte: "Tu montes un groupe de soutien et d'écoute pour les personnes subissant les vils agissement de Bournichon." },
        { symbole: "diams", taille:'text-2xl', texte: "Tu milites pour l'ouverture d'une antenne du commissariat sur le campus. Pour que ça change, il faut que plus de personnes portent plainte. " },
        { symbole: "feuille",taille:'text-4xl', texte: "Aves les étudiant-e-s de droits vous lancez une consultation parmi les étudiant-e-s et le personnel de la fac en vue d'une charte de bonne conduite. " },
      ],
    choix: [],
  },
 
];

export default dataQuestions

