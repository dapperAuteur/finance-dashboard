export const typeDefs = /* GraphQL */ `

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

  # input

  input InputBudget {
    _id: String
    token: String
    createdAt: String
    updatedAt: String
    budget_name: String
    budget_value: Float
    budget_balance: Float
    budget_manager: String
    tags: [String]
    media: [String]
    note: [String]
    partner: [String]
    tranx: [String]
  }

  input InputComment {
    _id: String
    createdAt: String
    updatedAt: String
    author: [String] # @hasInverse(field: comment)
    blog_post: [String] # @hasInverse(field: comment)
    body: String # @search(by: [fulltext])
    comment: [String] # @hasInverse(field: comment)
    media: [String] # @hasInverse(field: comment)
    note: [String] # @hasInverse(field: comment)
    publish_date: String # DateTime @search
    published: Boolean
    tag: [String] # @hasInverse(field: comment)
  }

  input InputCurrency {
    _id: String
    token: String
    currency: String
    value_to_USD: Int
    curr_type: String
    symbol: String
  }

  input InputFinancialAccount {
    _id: String
    token: String
    account_name: String!
    current_value: Float
    fin_inst: String
    manager: String
    media: [String]
    note: [String]
    owner: [String]
    tag: [String]
    tranx: [String]
  }

  input InputGame {
    _id: String
    createdAt: String
    updatedAt: String
    attempts: Int # @search
    bulls: Int # @search
    cows: Int # @search
    guess: [String]
    note: [String] # @hasInverse(field: game)
    player: [String] # @hasInverse(field: game)
    score: Int # @search
    tag: [String] # @hasInverse(field: game)
    winning_word: String # @search(by: [hash])
    won: Boolean
  }

  input InputMedia {
    _id: String
    createdAt: String
    updatedAt: String
    title: String
    publisher: String
    # performers: [Person] # @hasInverse(field: media)
    media_link: String
    media_type: String
    # activity: [Activity] # @hasInverse(field: media)
    # affix: [Affix] # @hasInverse(field: media)
    # blog_post: [BlogPost] # @hasInverse(field: media)
    # budget: [Budget] # @hasInverse(field: media)
    # comment: [Comment] # @hasInverse(field: media)
    # creator: [Person] # @hasInverse(field: media)
    # currency: [Currency] # @hasInverse(field: media)
    # fin_acct: [FinancialAccount] # @hasInverse(field: media)
    # game: [Game] # @hasInverse(field: media)
    # note: [Note] # @hasInverse(field: media)
    # person: [Person] # @hasInverse(field: media)
    # podcast: [Podcast] # @hasInverse(field: media)
    # tool: [Tool] # @hasInverse(field: media)
    # user: [User] # @hasInverse(field: media)
    # vendor: [Vendor] # @hasInverse(field: media)
    # word: [Word] # @hasInverse(field: media)
    # tag: [Tag] # @hasInverse(field: media)
  }

  input InputPerson {
    _id: String
    createdAt: String
    updatedAt: String
    activity: [String] # @hasInverse(field: person)
    associate: [String] # @hasInverse(field: associate)
    blog_post: [String] # @hasInverse(field: author)
    budget: [String] # @hasInverse(field: partner)
    comment: [String] # @hasInverse(field: author)
    email: String # @search(by: [hash])
    fin_acct: [String] # @hasInverse(field: owner)
    game: [String] # @hasInverse(field: player)
    guess: [String]
    is_user: Boolean
    media: [String] # @hasInverse(field: person)
    nickname: [String] # @search(by: [hash])
    note: [String] # @hasInverse(field: person)
    profile_image_url: [String]
    tag: [String] # @hasInverse(field: person)
    tranx: [String] # @hasInverse(field: participant)
  }

  input InputPodcast {
    _id: String
    createdAt: String
    updatedAt: String
    title: String
    season: String
    episodes: [String]
    author: [String]
    subscribers: Int
    tag: [String]
    media: [String]
    note: [String]
    published: Boolean
  }

  input InputVendor {
    token: String
    _id: String
    createdAt: String
    updatedAt: String
    vendor_name: String
    black_owned: Boolean
    description: String
    media: [String]
    note: [String]
    tag: [String]
    tranx: [String]
  }

  input InputTool {
    token: String
    _id: String
    createdAt: String
    updatedAt: String
    tool_name: String
    tool_type: String
    tool_cost: Int
    current_user: String
    current_owner: String
    life_span: Int
    date_acquired: String
    usage_start_date: String
    next_maintenance: String
    usage: Int
    end_of_life: String
    usage_max: Int
    media: [String]
    note: [String]
    tag: [String]
  }

  input InputWord {
    token: String
    word: String
    definition: String
    meaning: String
    f_points: Int
    s_points: Int
    tier: Int
    in_game: Boolean
    is_four_letter_word: Boolean
    tongue: String
  }

  input InputMutateWord {
    _id: String
    token: String
    word: String
    definition: String
    f_points: Int
    s_points: Int
    tier: Int
    in_game: Boolean
    tongue: String
  }

  input InputAffix {
    token: String
    morpheme: String
    meaning: [String]
    tongue: String
    example: [String]
    affix_type: [AllowedAffixes]
    media: [String]
    note: [String]
  }

  input InputMutateAffix {
    _id: String
    token: String
    morpheme: String
    meaning: [String]
    tongue: String
    example: [String]
    affix_type: [AllowedAffixes]
    media: [String]
    note: [String]
    nModified: Int
  }

  input InputAuth {
    email: String
    username: String
    password: String
    passwordConfirm: String
    profile_image_url: String
  }

  input InputMutateUser {
    _id: String
    email: String
    username: String
    password: String
    passwordConfirm: String
    profile_image_url: [String]
    role: Int
    roles: [String]
    name: String
    userRole: [String]
    translationScore: String
  }

  # Types

  type Account {
    _id: String
    createdAt: String
    updatedAt: String
    accountName: String
    currentValue: Float
  }

  type Activity {
    _id: String
    createdAt: String
    updatedAt: String
    endTime: String # DateTime
    startTime: String # DateTime
    description: String
    media: [Media]
    name: String
    note: [Note]
    person: [Person]
    tag: [Tag]
  }

  type Affix {
    _id: String
    createdAt: String
    updatedAt: String
    morpheme: String
    meaning: [String]
    tongue: String
    example: [String]
    affix_type: [String] # AllowedAffixes should be an array of enums [AllowedAffixes]
    media: [String]
    note: [String]
  }

  type AllowedTypeAffixes {
    _id: String
    createdAt: String
    updatedAt: String
    affix: String
    example: String
    schema: String
    description: String
  }

  type BlogPost {
    _id: String
    createdAt: String
    updatedAt: String
    author: [User]
    body: String
    comment: [Comment]
    media: [Media]
    note: [Note]
    publish_date: String # DateTime
    published: Boolean
    tag: [Tag]
    title: String!
  }

  type Budget {
    _id: String
    createdAt: String
    updatedAt: String
    budget_name: String
    budget_value: Int
    budget_balance: Int
    budget_manager: User
    tags: [Tag]
    media: [Media]
    note: [Note]
    partner: [Person]
  }

  type Comment {
    _id: String
    createdAt: String
    updatedAt: String
    author: [User] # @hasInverse(field: comment)
    blog_post: [BlogPost] # @hasInverse(field: comment)
    body: String # @search(by: [fulltext])
    comment: [Comment] # @hasInverse(field: comment)
    media: [Media] # @hasInverse(field: comment)
    note: [Note] # @hasInverse(field: comment)
    publish_date: String # DateTime @search
    published: Boolean
    tag: [Tag] # @hasInverse(field: comment)
  }

  type Currency {
    _id: String
    createdAt: String
    updatedAt: String
    currency: String
    curr_type: String
    symbol: String
    value_to_USD: Int
  }

  type FinancialAccount {
    _id: String
    createdAt: String
    updatedAt: String
    account_name: String! # @search(by: [hash])
    current_value: Float # @search
    fin_inst: String
    manager: String
    media: [Media] # @hasInverse(field: fin_acct)
    note: [Note] # @hasInverse(field: fin_acct)
    owner: [Person] # @hasInverse(field: fin_acct)
    tag: [Tag] # @hasInverse(field: fin_acct)
  }

  type Game {
    _id: String
    createdAt: String
    updatedAt: String
    attempts: Int # @search
    bulls: Int # @search
    cows: Int # @search
    guess: [String]
    note: [Note] # @hasInverse(field: game)
    player: [Person] # @hasInverse(field: game)
    score: Int # @search
    tag: [Tag] # @hasInverse(field: game)
    winning_word: String # @search(by: [hash])
    won: Boolean
  }

  # type LongLat {
  #   _id: String
  #   createdAt: String
  #   updatedAt: String
  #   placeName: String
  #   location:
  # }

  type Media {
    _id: String
    createdAt: String
    updatedAt: String
    title: String
    publisher: String
    performers: [Person] # @hasInverse(field: media)
    media_link: String
    media_type: String
    activity: [Activity] # @hasInverse(field: media)
    affix: [Affix] # @hasInverse(field: media)
    blog_post: [BlogPost] # @hasInverse(field: media)
    budget: [Budget] # @hasInverse(field: media)
    comment: [Comment] # @hasInverse(field: media)
    creator: [Person] # @hasInverse(field: media)
    currency: [Currency] # @hasInverse(field: media)
    fin_acct: [FinancialAccount] # @hasInverse(field: media)
    game: [Game] # @hasInverse(field: media)
    note: [Note] # @hasInverse(field: media)
    person: [Person] # @hasInverse(field: media)
    podcast: [Podcast] # @hasInverse(field: media)
    tool: [Tool] # @hasInverse(field: media)
    user: [User] # @hasInverse(field: media)
    vendor: [Vendor] # @hasInverse(field: media)
    word: [Word] # @hasInverse(field: media)
    tag: [Tag] # @hasInverse(field: media)
  }

  type Note {
    _id: String
    createdAt: String
    updatedAt: String
    note_content: String
    activity: [Activity] # @hasInverse(field: note)
    affix: [Affix] # @hasInverse(field: note)
    blog_post: [BlogPost] # @hasInverse(field: note)
    budget: [Budget] # @hasInverse(field: note)
    comment: [Comment] # @hasInverse(field: note)
    currency: [Currency] # @hasInverse(field: note)
    fin_acct: [FinancialAccount] # @hasInverse(field: note)
    game: [Game] # @hasInverse(field: note)
    media: [Media] # @hasInverse(field: note)
    person: [Person] # @hasInverse(field: note)
    podcast: [Podcast] # @hasInverse(field: note)
    tool: [Tool] # @hasInverse(field: note)
    user: [User] # @hasInverse(field: note)
    vendor: [Vendor] # @hasInverse(field: note)
    word: [Word] # @hasInverse(field: note)
    tag: [Tag] # @hasInverse(field: note)
  }

  type Person {
    _id: String
    createdAt: String
    updatedAt: String
    activity: [Activity] # @hasInverse(field: person)
    associate: [Person] # @hasInverse(field: associate)
    blog_post: [BlogPost] # @hasInverse(field: author)
    budget: [Budget] # @hasInverse(field: partner)
    comment: [Comment] # @hasInverse(field: author)
    email: String # @search(by: [hash])
    fin_acct: [FinancialAccount] # @hasInverse(field: owner)
    game: [Game] # @hasInverse(field: player)
    guess: [String]
    is_user: Boolean
    media: [Media] # @hasInverse(field: person)
    nickname: [String] # @search(by: [hash])
    note: [Note] # @hasInverse(field: person)
    profile_image_url: [Media]
    tag: [Tag] # @hasInverse(field: person)
  }

  type Podcast {
    _id: String
    createdAt: String
    updatedAt: String
    title: String
    season: String
    episodes: [BlogPost]
    author: [Person]
    subscribers: Int
    tag: [Tag]
    media: [Media]
    note: [Note]
    published: Boolean
  }

  type Tag {
    _id: String
    createdAt: String
    updatedAt: String
    tag_name: String
    description: String
    activity: [Activity] # @hasInverse(field: tag)
    affix: [Affix] # @hasInverse(field: tag)
    blog_post: [BlogPost] # @hasInverse(field: tag)
    budget: [Budget] # @hasInverse(field: tag)
    comment: [Comment] # @hasInverse(field: tag)
    currency: [Currency] # @hasInverse(field: tag)
    fin_acct: [FinancialAccount] # @hasInverse(field: tag)
    game: [Game] # @hasInverse(field: tag)
    media: [Media] # @hasInverse(field: tag)
    note: [Note] # @hasInverse(field: tag)
    person: [Person] # @hasInverse(field: tag)
    podcast: [Podcast] # @hasInverse(field: tag)
    tool: [Tool] # @hasInverse(field: tag)
    user: [User] # @hasInverse(field: tag)
    vendor: [Vendor] # @hasInverse(field: tag)
    word: [Word] # @hasInverse(field: tag)
  }

  type Tool {
    _id: String
    createdAt: String
    updatedAt: String
    current_user: User
    current_owner: User
    tool_name: String
    tool_type: String
    tool_cost: Int
    life_span: Int
    date_acquired: String
    usage_start_date: String
    next_maintenance: String
    usage: Int
    end_of_life: String
    usage_max: Int
    media: [Media] # @hasInverse(field: note)
    note: [String] # @search(by: [term])
    tag: [Tag] # @hasInverse(field: note)
  }

  type User {
    _id: String
    createdAt: String
    updatedAt: String
    email: String
    role: Int
    roles: [String]
    name: String
    username: String
    userRole: [String]
    password: String
    profile_image_url: String
    translationScore: String
    comments: [String]
    games: [String]
    guesses: [String]
    posts: [String]
  }

  type Vendor {
    _id: String
    createdAt: String
    updatedAt: String
    vendor_name: String
    black_owned: Boolean
    contact: [Person]
    description: String
    media: [Media] # @hasInverse(field: note)
    note: [String] # @search(by: [term])
    tag: [Tag] # @hasInverse(field: note)
  }

  

  type Word {
    _id: String
    createdAt: String
    updatedAt: String
    word: String
    meaning: String
    definition: String
    f_points: Int
    s_points: Int
    tier: Int
    in_game: Boolean
    is_four_letter_word: Boolean
    tongue: String
  }

  # Return Types

  type ReturnActivityList {
    activities: [Activity]
    count: Int
    cursor: String
  }

  type ReturnBlogPostList {
    blog_posts: [BlogPost]
    count: Int
    cursor: String
  }

  type ReturnBudgetList {
    budgets: [Budget]
    count: Int
    cursor: String
  }

  type ReturnCommentList {
    comments: [Comment]
    count: Int
    cursor: String
  }

  type ReturnCurrencyList {
    currencies: [Currency]
    count: Int
    cursor: String
  }

  type ReturnFinancialAccountList {
    fin_accts: [FinancialAccount]
    count: Int
    cursor: String
  }

  type ReturnGameList {
    games: [Game]
    count: Int
    cursor: String
  }

  type ReturnMediaList {
    media: [Media]
    count: Int
    cursor: String
  }

  type ReturnPersonList {
    persons: [Person]
    count: Int
    cursor: String
  }

  type ReturnPodcastList {
    podcasts: [Podcast]
    count: Int
    cursor: String
  }

  type ReturnVendorList {
    vendors: [Vendor]
    count: Int
    cursor: String
  }

  type ReturnToolList {
    tools: [Tool]
    count: Int
    cursor: String
  }

  type ReturnWordList {
    words: [Word]
    count: Int
    cursor: String
  }

  type ReturnAffixList {
    affixes: [Affix]
    count: Int
    cursor: String
  }

  type ReturnUserList {
    users: [User]
    count: Int
    cursor: String
  }

  type ReturnWords {
    words: [Word]
    count: Int
    cursor: String
  }

  type ReturnRandomWords {
    words: [Word]
    count: Int
  }

  type ReturnAffixes {
    affixes: [Affix]
    count: Int
    cursor: String
  }

  type ReturnUsers {
    users: [User]
    count: Int
    cursor: String
  }

  type ReturnRandomAffixes {
    affixes: [Affix]
    count: Int
  }

  type ReturnRandomUsers {
    users: [User]
    count: Int
  }

  type ReturnAuthUser {
    _id: String
    email: String
    username: String
    userRole: [String]
    role: Int
    roles: [String]
    profile_image_url: String
    token: String
    message: String
    status: Int
  }

  type DeletedError {
    _id: String
    message: String
  }

  type DeletedObjectByID {
    _id: String
    deleted: Boolean
    deletedCount: Int
    justOne: Boolean
    message: String
  }

  type UpdateError {
    _id: String
    message: String
  }

  type Query {
    findActivities(
      filter: String
      cursor: String
      limit: Int = 20
      ): ReturnActivityList
    findActivityByID(
      _id: String
      ): Activity
    findBlogPosts(
      filter: String
      cursor: String
      limit: Int = 20
      ): ReturnBlogPostList
    findBlogPostByID(
      _id: String
      ): BlogPost
    findBudgets(
      filter: String
      cursor: String
      limit: Int = 20
      ): ReturnBudgetList
    findBudgetByID(
      _id: String
      ): Budget
    findComments(
      filter: String
      cursor: String
      limit: Int = 20
      ): ReturnCommentList
    findCommentByID(
      _id: String
      ): Comment
    findCurrencies(
      filter: String
      cursor: String
      limit: Int = 20
      ): ReturnCurrencyList
    findCurrencyByID(
      _id: String
      ): Currency
    findFinancialAccounts(
      filter: String
      cursor: String
      limit: Int = 20
      ): ReturnFinancialAccountList
    findFinancialAccountByID(
      _id: String
      ): FinancialAccount
    findGames(
      filter: String
      cursor: String
      limit: Int = 20
      ): ReturnGameList
    findGameByID(
      _id: String
      ): Game
    findMedia(
      filter: String
      cursorMedia: String
      limit: Int = 20
    ): ReturnMediaList
    findMediaByID(
      _id: String
    ): Media
    findPersons(
      filter: String
      cursor: String
      limit: Int = 20
      ): ReturnPersonList
    findPersonByID(
      _id: String
      ): Person
    findPodcasts(
      filter: String
      cursor: String
      limit: Int = 20
      ): ReturnPodcastList
    findPodcastByID(
      _id: String
      ): Podcast
    findTools(
      filter: String
      cursor: String
      limit: Int = 20
    ): ReturnToolList
    findToolByID(
      _id: String
    ): Tool
    findVendors(
      filter: String
      cursor: String
      limit: Int = 20
    ): ReturnVendorList
    findVendorByID(
      _id: String
    ): Vendor
    findWordByID(
      _id: String
    ): Word
    findWords(
      filter: String
      definition: String
      meaning: String
      cursor: String
      limit: Int = 20
    ): ReturnWords
    findRandomWords(
      filter: String
      limit: Int = 20
    ): ReturnRandomWords
    findAffixByID(
      _id: String
    ): Affix
    findAffixes(
      filter: String
      example: String
      meaning: String
      morpheme: String
      cursor: String
      limit: Int = 20
      ): ReturnAffixes
    findRandomAffixes(
      filter: String
      limit: Int = 20
    ): ReturnRandomAffixes
    findUserByID(
      _id: String
      ): ReturnAuthUser
    findUsers(
      filter: String
      cursorUser: String
      limit: Int = 20
    ): ReturnUserList
    getUser: ReturnAuthUser
    signIn(
      input: InputAuth!
    ): ReturnAuthUser!
  }

  type Mutation {
    deleteActivityByID(
      _id: String!
    ): DeletedObjectByID!
    deleteBlogPostByID(
      _id: String!
    ): DeletedObjectByID!
    createBudget(
      input: InputBudget!
    ): Budget!
    deleteBudgetByID(
      _id: String!
    ): Budget!
    updateBudgetByID(
      input: InputBudget!
    ): Budget!
    createComment(
      input: InputComment!
    ): Comment!
    updateCommentByID(
      input: InputComment!
    ): Comment!
    deleteCommentByID(
      _id: String!
    ): DeletedObjectByID!
    createCurrency(
      input: InputCurrency!
    ): Currency!
    updateCurrencyByID(
      input: InputCurrency!
    ): Currency!
    deleteCurrencyByID(
      _id: String!
    ): DeletedObjectByID!
    createFinancialAccount(
      input: InputFinancialAccount!
    ): FinancialAccount!
    updateFinancialAccountByID(
      input: InputFinancialAccount!
    ): FinancialAccount!
    deleteFinancialAccountByID(
      _id: String!
    ): DeletedObjectByID!
    createGame(
      input: InputGame!
    ): Game!
    updateGameByID(
      input: InputGame!
    ): Game!
    deleteGameByID(
      _id: String!
    ): DeletedObjectByID!
    createMedia(
      input: InputMedia!
    ): Media!
    updateMediaByID(
      input: InputMedia!
    ): Media!
    deleteMediaByID(
      _id: String!
    ): DeletedObjectByID!
    createPerson(
      input: InputPerson!
    ): Person!
    updatePersonByID(
      input: InputPerson!
    ): Person!
    deletePersonByID(
      _id: String!
    ): DeletedObjectByID!
    createPodcast(
      input: InputPodcast!
    ): Podcast!
    updatePodcastByID(
      input: InputPodcast!
    ): Podcast!
    deletePodcastByID(
      _id: String!
    ): DeletedObjectByID!
    createVendor(
      input: InputVendor!
    ): Vendor!
    deleteVendorByID(
      _id: String
      deleted: Boolean = false
      deletedCount: Int = 0
      justOne: Boolean = true
      message: String = "WILL DELETE"
    ): DeletedObjectByID!
    updateVendorByID(
      input: InputVendor!
    ): Vendor!
    createTool(
      input: InputTool!
    ): Tool!
    deleteToolByID(
      _id: String
      deleted: Boolean = false
      deletedCount: Int = 0
      justOne: Boolean = true
      message: String = "WILL DELETE"
    ): DeletedObjectByID!
    updateToolByID(
      input: InputTool!
    ): Tool!
    createWord(input: InputWord!): Word!
    updateWordByID(input: InputMutateWord!): Word!
    deleteWordByID(
      _id: String
      deleted: Boolean = false
      deletedCount: Int = 0
      justOne: Boolean = true
      message: String = "WILL DELETE"
      ): DeletedObjectByID!
    createAffix(input: InputAffix!): Affix!
    updateAffixByID(
      input: InputMutateAffix!
    ): Affix!
    deleteAffixByID(
      _id: String
      deleted: Boolean = false
      deletedCount: Int = 0
      justOne: Boolean = true
      message: String = "WILL DELETE"
    ): DeletedObjectByID
    logIn(
      input: InputAuth!
    ): ReturnAuthUser!
    signUp(
      input: InputAuth!
    ): ReturnAuthUser
    updateUserByID(
      input: InputMutateUser!
    ): User!
    deleteUserByID(
      _id: String!
    ): DeletedObjectByID!
  }
`;