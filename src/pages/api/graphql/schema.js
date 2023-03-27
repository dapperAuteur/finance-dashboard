const typeDefs = `
  union Word = FourLetterWord | PrefixSuffixRoot | Verbo | Affix
  
  # Interfaces

  # interface MutationResponse {
  #   code: String!
  #   success: Boolean!
  #   message: String!
  # }

  # interface ErrorMessageQuery {

  # }

  interface ReturnListType {
    count: Int
    cursor: String
    list: [Word]
  }

  # Enums

  enum AllowedTerminacion {
    AR
    ER
    IR
  }

  enum AllowedTypePrefixSuffixRoot {
    PREFIX
    SUFFIX
    NA
  }

  enum AllowedAffixes {
    CIRCUMFIX
    DISFIX
    DUPLIFIX
    INFIX
    INTERFIX
    PREFIX
    PREFIXOID
    SIMULFIX
    STEM
    SUFFIX
    SUFFIXOID
    SUPRAFIX
    TRANSFIX
    NA
  }

  enum AllowedTongue {
    ENGLISH
  }

  enum AllowedCurrency {
    USD
    ETHEREUM
    SPANK
    BOOTY
    BITCOIN
  }

  # Types

  type Account {
    createdAt: String
    updatedAt: String
    _id: String
    accountName: String
    currentValue: Float
  }

  type Budget {
    createdAt: String
    updatedAt: String
    _id: String
    budgetName: String
    budgetValue: Float
    realTimeExpenses: Float
    tags: [Tag]
    currentUser: User
  }

  type FourLetterWord {
    createdAt: String
    updatedAt: String
    _id: String
    word: String
    definition: String
    f_points: Int
    s_points: Int
    tier: Int
    in_game: Boolean
    tongue: String
  }

  type PrefixSuffixRoot {
    createdAt: String
    updatedAt: String
    _id: String
    # word: [String]
    word: String
    # meaning: [String]
    meaning: String
    tongue: String
    examples: String
    type: AllowedTypePrefixSuffixRoot
  }

  type Affix {
    createdAt: String
    updatedAt: String
    _id: String
    morpheme: String
    meaning: [String]
    tongue: String
    example: [String]
    affix_type: [String] # AllowedAffixes should be an array of enums [AllowedAffixes]
    media: [String]
    note: [String]
  }

  type AllowedTypeAffixes {
    createdAt: String
    updatedAt: String
    _id: String
    affix: String
    example: String
    schema: String
    description: String
  }

  type Tag {
    createdAt: String
    updatedAt: String
    _id: String
    tagName: String
    description: String
    transaction: [Transaction]
    budget: [Budget]
  }

  type Transaction {
    createdAt: String
    updatedAt: String
    _id: String
    transactionEvent: String
    account: [Account]
    currency: AllowedCurrency
    budget: [Budget]
  }

  type User {
    createdAt: String
    updatedAt: String
    email: String
    role: Int
    username: String
    userRole: [String]
    password: String
    profileImageUrl: String
    translationScore: String
    comments: [String]
    games: [String]
    guesses: [String]
    posts: [String]
    transactions: [Transaction]
  }

  type Vendor {
    createdAt: String
    updatedAt: String
    _id: String
    vendorName: String
  }

  type Verbo {
    createdAt: String
    updatedAt: String
    _id: String
    spanish: String
    english: String
    reflexive: Boolean
    irregular: Boolean
    categoria_de_irregular: String
    cambiar_de_irregular: String
    terminacion: AllowedTerminacion
    grupo: Float
  }

  type ReturnWordList {
    fourLetterWordsList: ReturnFourLetterWordList
    prefixSuffixRootsList: ReturnPrefixSuffixRootList
    verbosList: ReturnVerboList
    count: Int
  }

  type ReturnFourLetterWordList {
    fourLetterWords: [FourLetterWord]
    cursorFourLetterWords: String
    countFourLetterWords: Int
    # list: [FourLetterWord] to be used with the interface
  }

  type ReturnAffixList {
    affixes: [Affix]
    cursorAffixes: String
    countAffixes: Int
    # list: [Affix] to be used with the interface
  }

  type ReturnPrefixSuffixRootList {
    prefixSuffixRoots: [PrefixSuffixRoot]
    cursorPrefixSuffixRoots: String
    countPrefixSuffixRoots: Int
    # list: [PrefixSuffixRoot] to be used with the interface
  }

  type ReturnVerboList {
    verbos: [Verbo]
    cursorVerbos: String
    countVerbos: Int
    # list: [Verbo] to be used with the interface
  }

  type ReturnUserList {
    users: [User]
    cursorUsers: String
    countUsers: Int
  }

  type ReturnFourLetterWords {
    fourLetterWords: [FourLetterWord]
    cursor: String
    count: Int
    # list: [FourLetterWord] to be used with the interface
  }

  type ReturnRandomFourLetterWords {
    fourLetterWords: [FourLetterWord]
    count: Int
  }

  type ReturnAffixes {
    affixes: [Affix]
    cursor: String
    count: Int
    # list: [Affix] to be used with the interface
  }

  type ReturnPrefixSuffixRoots {
    prefixSuffixRoots: [PrefixSuffixRoot]
    cursor: String
    count: Int
    # list: [PrefixSuffixRoot] to be used with the interface
  }

  type ReturnUsers {
    users: [User]
    cursor: String
    count: Int
  }

  type ReturnRandomAffixes {
    affixes: [Affix]
    count: Int
  }

  type ReturnRandomPrefixSuffixRoots {
    prefixSuffixRoots: [PrefixSuffixRoot]
    count: Int
  }

  type ReturnVerbos {
    verbos: [Verbo]
    cursor: String
    count: Int
    # list: [Verbo] to be used with the interface
  }

  type ReturnRandomVerbos {
    verbos: [Verbo]
    count: Int
  }

  type ReturnRandomUsers {
    users: [User]
    count: Int
  }

  input InputFourLetterWord {
    word: String
    definition: String
    f_points: Int
    s_points: Int
    tier: Int
    in_game: Boolean
    tongue: String
  }

  input InputMutateFourLetterWord {
    _id: String
    word: String
    definition: String
    f_points: Int
    s_points: Int
    tier: Int
    in_game: Boolean
    tongue: String
  }

  input InputPrefixSuffixRoot {
    # word: [String]
    word: String
    # meaning: [String]
    meaning: String
    tongue: String
    examples: String
    type: AllowedTypePrefixSuffixRoot
  }

  input InputAffix {
    morpheme: String
    meaning: [String]
    tongue: String
    example: [String]
    affix_type: [AllowedAffixes]
    media: [String]
    note: [String]
  }

  input InputMutatePrefixSuffixRoot {
    _id: String
    # word: [String]
    word: String
    # meaning: [String]
    meaning: String
    tongue: String
    examples: String
    type: AllowedTypePrefixSuffixRoot
  }

  input InputMutateAffix {
    _id: String
    morpheme: String
    meaning: [String]
    tongue: String
    example: [String]
    affix_type: [AllowedAffixes]
    media: [String]
    note: [String]
  }

  input InputVerbo {
    spanish: String
    english: String
    reflexive: Boolean
    irregular: Boolean
    categoria_de_irregular: String
    cambiar_de_irregular: String
    terminacion: AllowedTerminacion
    grupo: Float
  }

  input InputMutateVerbo {
    _id: String
    spanish: String
    english: String
    reflexive: Boolean
    irregular: Boolean
    categoria_de_irregular: String
    cambiar_de_irregular: String
    terminacion: AllowedTerminacion
    grupo: Float
  }

  input InputAuth {
    username: String
    password: String
    profileImageUrl: String
  }

  type ReturnAuthUser {
    _id: String
    username: String
    userRole: String
    profileImageUrl: String
    token: String
  }

  type DeletedError {
    _id: String
    message: String
  }

  type UpdateError {
    _id: String
    message: String
  }

  type Query {
    findWords(
      filter: String
      cursorFLW: String
      cursorPSR: String
      cursorVerbos: String
      cursorAffix: String
      limit: Int = 20
    ): ReturnWordList
    findWordById(_id: String): Word
    findFourLetterWordById(_id: String): FourLetterWord
    findFourLetterWords(
      filter: String
      cursor: String
      limit: Int = 20
    ): ReturnFourLetterWords
    randomFourLetterWords(
      filter: String
      limit: Int = 20
    ): ReturnRandomFourLetterWords
    findPrefixSuffixRootById(_id: String): PrefixSuffixRoot
    findPrefixSuffixRoots(
      filter: String
      cursor: String
      limit: Int = 20
    ): ReturnPrefixSuffixRoots
    randomPrefixSuffixRoots(
      filter: String
      limit: Int = 20
    ): ReturnRandomPrefixSuffixRoots
    findAffixById(_id: String): Affix
    findAffixes(
      filter: String
      cursor: String
      limit: Int = 20
      ): ReturnAffixes
      randomAffixes(
        filter: String
      limit: Int = 20
      ): ReturnRandomAffixes
    findVerboById(_id: String): Verbo
    findVerbos(filter: String, cursor: String, limit: Int = 20): ReturnVerbos
    randomVerbos(filter: String, limit: Int = 20): ReturnRandomVerbos
    findUser: ReturnAuthUser
    findUsers(
      filter: String
      cursorUser: String
      limit: Int = 20
    ): ReturnUserList
    getUser: ReturnAuthUser
  }

  # type MutationResponseFourLetterWord implements MutationResponse {
  #   code: String!
  #   success: Boolean!
  #   message: String!
  #   fourLetterWord: Word
  # }

  type Mutation {
    createFourLetterWord(input: InputFourLetterWord!): FourLetterWord!
    updateFourLetterWord(input: InputMutateFourLetterWord!): FourLetterWord!
    deleteFourLetterWord(_id: String): [FourLetterWord!]!
    createPrefixSuffixRoot(input: InputPrefixSuffixRoot!): PrefixSuffixRoot!
    updatePrefixSuffixRoot(
      input: InputMutatePrefixSuffixRoot!
    ): PrefixSuffixRoot!
    deletePrefixSuffixRoot(_id: String): [PrefixSuffixRoot!]!
    createAffix(input: InputAffix!): Affix!
    updateAffix(
      input: InputMutateAffix!
    ): Affix!
    deleteAffix(
      _id: String
    ): [Affix!]!
    createVerbo(input: InputVerbo!): Verbo!
    updateVerbo(input: InputMutateVerbo!): Verbo!
    deleteVerbo(_id: String): [Verbo!]!
    signUp(input: InputAuth!): ReturnAuthUser
    signIn(input: InputAuth!): ReturnAuthUser!
    logIn(input: InputAuth!): ReturnAuthUser!
  }
`;

module.exports = { ...typeDefs };
