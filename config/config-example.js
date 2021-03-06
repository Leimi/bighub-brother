{
  "users": {

    // GitHub handle of someone who wants to be notified
    "Leimi": {

      // default repo config: if this is set,
      // every repo in the organization will be watched
      // with few exceptions (see 'exclude' and 'only')
      "default": {

        // e-mail to use to notify the user
        "e-mail": "pelletier.emmanuel+bihugbrother@gmail.com",

        // list of filepaths/patterns to be notified for changes
        // this must be compatible with fnmatch PHP function
        "file_patterns": [
          "*.less",
          "*.scss",
          "*application.config.php"
        ],

        // list of committers to ignore (github handles)
        // do not be notified for changes made on files matching 'file_patterns'
        // made by people listed here
        //
        // fill this or 'only_committers'
        "exclude_committers": [
          "someGuyITrust",
          "anotherGitHubHandle"
        ],

        // comprehensive list of committers to watch (github handles)
        // be notified for changes made on files matching 'file_patterns'
        // only made by people in this list
        //
        // fill this or 'exclude_committers'
        "only_committers": []
      },

      // all repos listed here don't take the default config
      // if you add a repo in this list without adding it in "specifics"
      // it will not be watched at all
      //
      // fill this or 'only'
      "exclude": [
        "Leimi/osoefoefoef-brother"
      ],

      // all repos listed here are the only ones handled by the default config
      // if you have repos in "specifics" not listed here, those will not
      // be merged with the default config
      //
      // fill this or 'exclude'
      "only": [
      ],

      // specific repo configs
      // each repo config is merged with the default one, with two exceptions:
      // 1. if the repo is listed in 'exclude'
      // 2. if 'only' is filled and the repo isn't listed in it
      "specifics": {
        "Leimi/bighub-brother": {
          "file_patterns": ["README.md"],
          "only_committers": "felixgirault",
          "e-mail": "pelletier.emmanuel+felix-did-it-again@gmail.com"
        },
        "Leimi/osef": {
          "file_patterns": [],
          "only_committers": "scharrier",
          "e-mail": "pelletier.emmanuel+osefchange@gmail.com"
        }
      }
    }
  }
}
