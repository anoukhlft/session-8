var app = new Vue({
  el: '#app',
  data: {
    firstName: "Anouk",
    lastName: "Helft",
    description: "Je suis étudiante en Master 2 Ecriture et Développement à l'Ecole de Journalisme de Sciences Po.",
    photo: "https://pbs.twimg.com/profile_images/899285838516936704/nfeLD7he_400x400.jpg",
    twitter: "anoukhelft",
    github: "anoukhlft",
    mail: "anouk.helft@sciencespo.fr",
    experiences: [{
      dateBegin: "Août 2018",
      dateEnd: false,
      name: "France Télévisions",
      title: "Stagiaire au Bureau de Londres",
      description: "tenue du site web du Bureau, reportages pour CultureBox et participation aux sujets JT du 13 heures et du 20 heures."
    }, {
      dateBegin: "Juillet 2018",
      dateEnd: false,
      name: "Effervescence Productions",
      title: "Stagiaire Web et Community Management",
      description: "Aide sur les plateaux de tournage et rédaction des pitchs de documentaires et d'émissions France Télévisions."
    }, {
       dateBegin: "Décembre 2017",
      dateEnd: "Janvier 2018",
      name: "France 5",
      title: "Stagiaire Web et aide-JRI",
      description: "Travail au desk, alimentation du site web et aide à la réalisation de sujet pour le JT du magazine de la Santé."
    }, {
      dateBegin: "Été 2017",
      dateEnd: false,
      name: "Europe 1",
      title: "Stagiaire (Service Web)",
      description: "Veille et rédaction d'article pour le web"
    }, {
      dateBegin: "Ete 2016",
      dateEnd: false,
      name: "Le Monde",
      title: "Stagiaire (Service Planète)",
      description: "Rédaction d'articles pour le web et le print et veille" 
    }],
    formations: [{
      dateBegin: "2017",
      dateEnd: "2019",
      name: "Master Journalisme",
      university: "Ecole de Journalisme (Sciences Po Paris)"
    }, {
      dateBegin: "2014",
      dateEnd: "2017",
      name: "Licence en Affaires Publiques",
      university: "Université Paris-Dauphine"
    }],
    languages: ["Anglais", "Espagnol", "Hebreu"],
    skills: ["Pack Adobe", "Pack Office", "HTML", ""]
  },
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName
    }
  }
})
