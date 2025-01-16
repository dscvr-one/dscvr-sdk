export const idlFactory = ({ IDL }) => {
  const ContentTreeView = IDL.Rec();
  const ContentView = IDL.Rec();
  const PortalInvite = IDL.Record({
    slug: IDL.Text,
    referral_code: IDL.Text,
  });
  const NFTChainType = IDL.Variant({
    InternetComputer: IDL.Null,
    Ethereum: IDL.Null,
    Solana: IDL.Null,
    Polygon: IDL.Null,
    Optimism: IDL.Null,
    Arbitrum: IDL.Null,
  });
  const NFTView = IDL.Record({
    chain: IDL.Opt(NFTChainType),
    meta: IDL.Text,
    is_owner: IDL.Bool,
  });
  const SocialProfileDeprecated = IDL.Variant({
    Website: IDL.Text,
    TikTok: IDL.Text,
    Twitch: IDL.Text,
    Facebook: IDL.Text,
    YouTube: IDL.Text,
    Discord: IDL.Text,
    OpenChat: IDL.Text,
    Telegram: IDL.Text,
    Instagram: IDL.Text,
    Twitter: IDL.Text,
  });
  const SocialProfile = IDL.Variant({
    Pinterest: IDL.Text,
    DRiP: IDL.Text,
    Reddit: IDL.Text,
    Website: IDL.Text,
    TikTok: IDL.Text,
    Twitch: IDL.Text,
    Facebook: IDL.Text,
    YouTube: IDL.Text,
    Spotify: IDL.Text,
    Discord: IDL.Text,
    OpenChat: IDL.Text,
    Telegram: IDL.Text,
    Vimeo: IDL.Text,
    LinkedIn: IDL.Text,
    Instagram: IDL.Text,
    Twitter: IDL.Text,
  });
  const UserView = IDL.Record({
    id: IDL.Principal,
    bio: IDL.Text,
    is_phone_verified: IDL.Bool,
    user_type: IDL.Nat64,
    username: IDL.Text,
    display_nft: IDL.Opt(NFTView),
    num_posts: IDL.Nat64,
    cover_photo: IDL.Opt(IDL.Text),
    rights: IDL.Nat64,
    created_at: IDL.Nat64,
    active_streak: IDL.Nat64,
    icon_url: IDL.Text,
    followers: IDL.Nat64,
    following: IDL.Nat64,
    social_presence: IDL.Opt(IDL.Vec(SocialProfileDeprecated)),
    social_presence_2: IDL.Opt(IDL.Vec(IDL.Opt(SocialProfile))),
  });
  const Link = IDL.Record({ href: IDL.Text });
  const PortalRule = IDL.Record({ desc: IDL.Text, name: IDL.Text });
  const PortalInfo = IDL.Record({
    cover_photo: IDL.Opt(IDL.Text),
    links: IDL.Vec(Link),
    rules: IDL.Opt(IDL.Vec(PortalRule)),
  });
  const PortalType = IDL.Variant({ Portal: IDL.Null, User: IDL.Null });
  const PortalView = IDL.Record({
    id: IDL.Nat64,
    is_following: IDL.Bool,
    is_highlighted: IDL.Bool,
    is_nsfw: IDL.Bool,
    owner: UserView,
    info: IDL.Opt(PortalInfo),
    name: IDL.Text,
    perm: IDL.Nat64,
    slug: IDL.Text,
    description: IDL.Text,
    created_at: IDL.Nat64,
    is_mod: IDL.Bool,
    icon_url: IDL.Text,
    portal_type: IDL.Opt(PortalType),
    owner_id: IDL.Principal,
    member_count: IDL.Nat64,
    content_count: IDL.Nat64,
    requires_phone: IDL.Bool,
  });
  const ValidationErrors = IDL.Record({
    field: IDL.Text,
    errors: IDL.Vec(IDL.Text),
  });
  const SocietyRsError = IDL.Variant({
    NotFound: IDL.Text,
    Unauthorized: IDL.Text,
    InternalError: IDL.Text,
    BadRequest: IDL.Text,
    InsufficientFunds: IDL.Text,
  });
  const ActionResultPortal = IDL.Record({
    status: IDL.Text,
    result: IDL.Opt(PortalView),
    errors: IDL.Opt(IDL.Vec(ValidationErrors)),
    message: IDL.Text,
    error_code: IDL.Opt(SocietyRsError),
  });
  const ActionResultUser = IDL.Record({
    status: IDL.Text,
    result: IDL.Opt(UserView),
    errors: IDL.Opt(IDL.Vec(ValidationErrors)),
    message: IDL.Text,
    error_code: IDL.Opt(SocietyRsError),
  });
  const MemberKind = IDL.Variant({
    Left: IDL.Null,
    Approved: IDL.Null,
    Banned: IDL.Null,
    Kicked: IDL.Null,
    Pending: IDL.Null,
  });
  const UserListItemView = IDL.Record({
    id: IDL.Principal,
    user_type: IDL.Nat64,
    username: IDL.Text,
    display_nft: IDL.Opt(NFTView),
    rights: IDL.Nat64,
    created_at: IDL.Nat64,
    icon_url: IDL.Text,
  });
  const RoleKind = IDL.Variant({
    Default: IDL.Null,
    Custom: IDL.Null,
    Everyone: IDL.Null,
  });
  const RoleView = IDL.Record({
    id: IDL.Nat64,
    permissions: IDL.Nat64,
    kind: RoleKind,
    name: IDL.Text,
    color: IDL.Nat32,
    ordinal: IDL.Nat64,
    icon_url: IDL.Text,
    member_count: IDL.Nat64,
    is_locked: IDL.Bool,
  });
  const MemberView = IDL.Record({
    id: IDL.Nat64,
    status: MemberKind,
    portal_id: IDL.Nat64,
    user: UserListItemView,
    created_at: IDL.Nat64,
    user_id: IDL.Principal,
    roles: IDL.Vec(RoleView),
  });
  const UserPlatformPairKind = IDL.Variant({
    Discord: IDL.Null,
    OpenChat: IDL.Null,
    Telegram: IDL.Null,
    Twitter: IDL.Null,
  });
  const UserPlatformController = IDL.Record({
    kind: UserPlatformPairKind,
    created_at: IDL.Nat64,
    controller_id: IDL.Principal,
  });
  const CreatePortalRole = IDL.Record({
    permissions: IDL.Nat64,
    name: IDL.Text,
    color: IDL.Nat32,
    ordinal: IDL.Nat64,
    icon_url: IDL.Text,
  });
  const ActionResultPortalRole = IDL.Record({
    status: IDL.Text,
    result: IDL.Opt(RoleView),
    errors: IDL.Opt(IDL.Vec(ValidationErrors)),
    message: IDL.Text,
    error_code: IDL.Opt(SocietyRsError),
  });
  const ServiceControllerKind = IDL.Variant({
    Mod: IDL.Null,
    EventRouter: IDL.Null,
    Analytics: IDL.Null,
    Upgrade: IDL.Null,
    Restore: IDL.Null,
    ServiceControllerManager: IDL.Null,
    SuperAdmin: IDL.Null,
    Backup: IDL.Null,
    Gating: IDL.Null,
    Comptroller: IDL.Null,
    Identity: IDL.Null,
    PhoneVerify: IDL.Null,
    TxLogConsumer: IDL.Null,
    Owner: IDL.Null,
    EventProducer: IDL.Null,
    HCaptchaVerify: IDL.Null,
    TxLogProducer: IDL.Null,
  });
  const ServiceController = IDL.Record({
    kind: ServiceControllerKind,
    created_at: IDL.Nat64,
  });
  const ServiceControllers = IDL.Vec(
    IDL.Tuple(IDL.Principal, IDL.Vec(ServiceController)),
  );
  const CreateAwardRequest = IDL.Record({
    weight: IDL.Nat64,
    cost: IDL.Nat64,
    name: IDL.Text,
    purchasable: IDL.Bool,
    icon_url: IDL.Text,
  });
  const AwardView = IDL.Record({
    id: IDL.Nat64,
    cost: IDL.Nat64,
    name: IDL.Text,
    icon_url: IDL.Text,
  });
  const SparkApp = IDL.Record({
    id: IDL.Text,
    webhook_url: IDL.Opt(IDL.Text),
    owner: IDL.Principal,
    name: IDL.Text,
    email: IDL.Text,
  });
  const EmptySocietyRsResult = IDL.Variant({
    Ok: IDL.Null,
    Err: IDL.Opt(SocietyRsError),
  });
  const EmptyResult = IDL.Variant({ Ok: IDL.Null, Err: IDL.Text });
  const RewardReasonVoteType = IDL.Variant({
    PostCreator: IDL.Null,
    CommentParent: IDL.Null,
    PostPortalOwner: IDL.Null,
    CommentCreator: IDL.Null,
    CommentPortalOwner: IDL.Null,
    CommentRootParent: IDL.Null,
  });
  const RewardReason = IDL.Variant({
    Ubi: IDL.Null,
    ContentVote: RewardReasonVoteType,
    TokenGift: IDL.Null,
    DailyStreak: IDL.Null,
    ReferralReward: IDL.Null,
  });
  const TokenRewardError = IDL.Variant({
    MissingReason: IDL.Null,
    SocietyRsError: SocietyRsError,
  });
  const TokenRewardResult = IDL.Variant({
    Ok: IDL.Null,
    Err: IDL.Opt(TokenRewardError),
  });
  const UpdateAwardRequest = IDL.Record({
    id: IDL.Nat64,
    weight: IDL.Nat64,
    cost: IDL.Nat64,
    name: IDL.Text,
    purchasable: IDL.Bool,
    icon_url: IDL.Text,
  });
  const AdminUpdateDailyRewardAmountsResult = IDL.Variant({
    Ok: IDL.Vec(IDL.Nat64),
    Err: IDL.Text,
  });
  const UpdateUserProfileV2 = IDL.Record({ bio: IDL.Text });
  const ChainType = IDL.Variant({
    InternetComputer: IDL.Null,
    Solana: IDL.Null,
  });
  const AppNotificationChannel = IDL.Variant({
    App: IDL.Null,
    Email: IDL.Null,
    Push: IDL.Null,
  });
  const AppNotificationSettings = IDL.Record({
    streak_reminders: IDL.Vec(AppNotificationChannel),
    comments_replies: IDL.Vec(AppNotificationChannel),
    awards: IDL.Vec(AppNotificationChannel),
    shares_reposts: IDL.Vec(AppNotificationChannel),
    mentions: IDL.Vec(AppNotificationChannel),
    likes_reactions: IDL.Vec(AppNotificationChannel),
    new_followers: IDL.Vec(AppNotificationChannel),
  });
  const EmailMessagingSettings = IDL.Record({ marketing: IDL.Bool });
  const GroupAppNotificationType = IDL.Variant({
    CommentReply: IDL.Null,
    PostReaction: IDL.Null,
    PostReply: IDL.Null,
    CommentReaction: IDL.Null,
  });
  const UserSettingsView = IDL.Record({
    preferred_chain: IDL.Opt(ChainType),
    app_notification: IDL.Opt(AppNotificationSettings),
    blockchains: IDL.Vec(IDL.Text),
    preferred_language: IDL.Text,
    interests: IDL.Vec(IDL.Text),
    user_id: IDL.Principal,
    allow_nsfw: IDL.Bool,
    use_cases: IDL.Vec(IDL.Text),
    email_messaging: IDL.Opt(EmailMessagingSettings),
    app_notification_grouping: IDL.Opt(IDL.Vec(GroupAppNotificationType)),
  });
  const IdentityEmail = IDL.Record({
    verified: IDL.Bool,
    provider: IDL.Opt(IDL.Text),
    email: IDL.Text,
  });
  const IdentityOAuth = IDL.Variant({ WorldCoin: IDL.Text });
  const IdentityWalletNetworkType = IDL.Variant({
    Ethereum: IDL.Null,
    Solana: IDL.Null,
    Bitcoin: IDL.Null,
    Polygon: IDL.Null,
  });
  const IdentityWalletChainType = IDL.Variant({
    Evm: IDL.Null,
    Solana: IDL.Null,
    Bitcoin: IDL.Null,
  });
  const IdentityWalletType = IDL.Variant({
    Metamask: IDL.Null,
    Sollet: IDL.Null,
    SolletExtension: IDL.Null,
    Trustwallet: IDL.Null,
    Coinbase: IDL.Null,
    Phantom: IDL.Null,
    Solflare: IDL.Null,
    Backpack: IDL.Null,
  });
  const IdentityWallet = IDL.Record({
    key: IDL.Vec(IDL.Nat8),
    networks: IDL.Vec(IDL.Opt(IdentityWalletNetworkType)),
    chain: IDL.Opt(IdentityWalletChainType),
    kind: IDL.Opt(IdentityWalletType),
  });
  const Identity = IDL.Variant({
    Email: IdentityEmail,
    OAuth: IdentityOAuth,
    Wallet: IdentityWallet,
    Username: IDL.Text,
  });
  const UserSelfView = IDL.Record({
    id: IDL.Principal,
    bio: IDL.Text,
    igc: IDL.Opt(IDL.Nat64),
    is_phone_verified: IDL.Bool,
    user_type: IDL.Nat64,
    username: IDL.Text,
    is_provisional: IDL.Bool,
    display_nft: IDL.Opt(NFTView),
    num_posts: IDL.Nat64,
    cover_photo: IDL.Opt(IDL.Text),
    rights: IDL.Nat64,
    referrals: IDL.Nat64,
    created_at: IDL.Nat64,
    active_streak: IDL.Nat64,
    email: IDL.Opt(IDL.Text),
    icon_url: IDL.Text,
    has_membership: IDL.Bool,
    user_settings: UserSettingsView,
    identity: IDL.Opt(Identity),
    email_verified: IDL.Bool,
    followers: IDL.Nat64,
    following: IDL.Nat64,
    onboarding_state: IDL.Text,
    social_presence: IDL.Opt(IDL.Vec(SocialProfileDeprecated)),
    social_presence_2: IDL.Opt(IDL.Vec(IDL.Opt(SocialProfile))),
  });
  const InternetComputerNFT = IDL.Record({
    nft_id: IDL.Text,
    canister_id: IDL.Principal,
  });
  const MetaType = IDL.Variant({
    Image: IDL.Text,
    Model: IDL.Text,
    Audio: IDL.Text,
    Other: IDL.Text,
    Video: IDL.Text,
  });
  const MultiChainNFTRequest = IDL.Record({
    meta_type: IDL.Opt(MetaType),
    nft_id: IDL.Opt(IDL.Text),
    token_id: IDL.Opt(IDL.Text),
    chain: IDL.Opt(NFTChainType),
    last_verified: IDL.Nat64,
    contract_address: IDL.Text,
  });
  const NFTKindV2 = IDL.Variant({
    InternetComputer: InternetComputerNFT,
    MultiChain: MultiChainNFTRequest,
  });
  const NFTUpdateView = IDL.Record({
    kind: IDL.Opt(NFTKindV2),
    meta: IDL.Opt(IDL.Text),
  });
  const UpdateUserProfileIcon = IDL.Variant({
    Nft: NFTUpdateView,
    Url: IDL.Text,
  });
  const PostQueueAction = IDL.Variant({
    Approve: IDL.Null,
    Deny: IDL.Null,
  });
  const ContentStatus = IDL.Variant({
    Approved: IDL.Null,
    Denied: IDL.Null,
    Pending: IDL.Null,
  });
  const AppReport = IDL.Record({
    reported_other: IDL.Nat64,
    rejected: IDL.Nat64,
    proceeded: IDL.Nat64,
    reported_malicious: IDL.Nat64,
  });
  const AppReportView = IDL.Record({ url: IDL.Text, report: AppReport });
  const PollKind = IDL.Variant({
    NFT: IDL.Null,
    Text: IDL.Null,
    Traditional: IDL.Null,
    Quadratic: IDL.Null,
  });
  const PollChoiceView = IDL.Record({
    id: IDL.Nat64,
    text: IDL.Text,
    ordinal: IDL.Nat64,
    total_votes: IDL.Nat64,
  });
  const PollView = IDL.Record({
    id: IDL.Nat64,
    is_public: IDL.Bool,
    title: IDL.Text,
    cost: IDL.Nat64,
    content_id: IDL.Nat64,
    kind: PollKind,
    vote_choice_ids: IDL.Vec(IDL.Nat64),
    created_at: IDL.Nat64,
    voting_tokens: IDL.Nat64,
    total_votes: IDL.Nat64,
    choices: IDL.Vec(PollChoiceView),
    expires_at: IDL.Nat64,
  });
  const Tag = IDL.Record({
    id: IDL.Nat64,
    total: IDL.Nat64,
    name: IDL.Text,
    is_archived: IDL.Bool,
  });
  const PostAwardView = IDL.Record({
    award_view: AwardView,
    count: IDL.Nat64,
  });
  const ContentReaction = IDL.Variant({
    Sad: IDL.Null,
    Wow: IDL.Null,
    Care: IDL.Null,
    Clap: IDL.Null,
    Fire: IDL.Null,
    HaHa: IDL.Null,
    Like: IDL.Null,
    Dislike: IDL.Null,
    Angry: IDL.Null,
  });
  const PortalInfoView = IDL.Record({
    id: IDL.Nat64,
    is_nsfw: IDL.Bool,
    owner: IDL.Opt(UserView),
    name: IDL.Text,
    perm: IDL.Opt(IDL.Nat64),
    slug: IDL.Text,
    icon_url: IDL.Text,
    portal_type: PortalType,
  });
  ContentView.fill(
    IDL.Record({
      id: IDL.Nat64,
      url: IDL.Text,
      upvotes: IDL.Int64,
      is_nsfw: IDL.Bool,
      status: IDL.Opt(ContentStatus),
      title: IDL.Text,
      deleted: IDL.Opt(IDL.Bool),
      app_reports: IDL.Opt(IDL.Vec(AppReportView)),
      is_pinned: IDL.Bool,
      owner: UserView,
      disable_comments: IDL.Opt(IDL.Bool),
      body: IDL.Text,
      parent_content: IDL.Opt(ContentView),
      owner_color: IDL.Nat32,
      lang: IDL.Text,
      frame_interaction_friends: IDL.Vec(UserView),
      perm: IDL.Nat64,
      poll: IDL.Opt(PollView),
      tags: IDL.Vec(Tag),
      content_type: IDL.Text,
      created_at: IDL.Nat64,
      post_awards: IDL.Vec(PostAwardView),
      is_mod: IDL.Bool,
      parent_id: IDL.Opt(IDL.Nat64),
      icon_url: IDL.Text,
      reaction_counts: IDL.Vec(IDL.Tuple(ContentReaction, IDL.Nat64)),
      owner_id: IDL.Principal,
      children_count: IDL.Nat64,
      downvotes: IDL.Int64,
      is_author_pinned: IDL.Bool,
      frame_interaction_count: IDL.Nat64,
      root_parent_content: IDL.Opt(ContentView),
      relevant_children: IDL.Vec(ContentView),
      is_reactor: IDL.Opt(ContentReaction),
      friends: IDL.Vec(UserView),
      is_upvoter: IDL.Bool,
      owner_roles: IDL.Vec(IDL.Nat64),
      removed: IDL.Opt(IDL.Bool),
      is_downvoter: IDL.Bool,
      portal: PortalInfoView,
    }),
  );
  const PostQueueActionResult = IDL.Variant({
    Ok: ContentView,
    Err: IDL.Opt(SocietyRsError),
  });
  const BackdoorPhantomSetupDataParams = IDL.Record({
    set_number_of_unique_losing_messages: IDL.Opt(IDL.Nat8),
    reward_amounts: IDL.Opt(IDL.Vec(IDL.Nat8)),
    clear_user_delay: IDL.Opt(IDL.Principal),
    claim_delay_in_seconds: IDL.Opt(IDL.Nat64),
    odds_of_winning: IDL.Opt(IDL.Nat64),
  });
  const BackdoorSetupDataParams = IDL.Record({
    streak_count: IDL.Nat16,
    streak_claimable_in_secs: IDL.Int64,
  });
  const UserBan = IDL.Record({
    id: IDL.Nat64,
    portal_id: IDL.Nat64,
    created_at: IDL.Nat64,
    user_id: IDL.Principal,
    banner_id: IDL.Principal,
    expires_at: IDL.Nat64,
    reason: IDL.Text,
  });
  const ActionResultBanUser = IDL.Record({
    status: IDL.Text,
    result: IDL.Opt(UserBan),
    errors: IDL.Opt(IDL.Vec(ValidationErrors)),
    message: IDL.Text,
    error_code: IDL.Opt(SocietyRsError),
  });
  const ActiveStreakWindow = IDL.Record({
    start_day: IDL.Nat16,
    total_points_this_streak: IDL.Nat64,
    next_claim_day: IDL.Nat16,
    lifetime_longest_streak: IDL.Opt(IDL.Nat16),
    lifetime_airdrop_multipliers: IDL.Opt(IDL.Nat16),
    airdrop_multiplier_this_streak: IDL.Nat16,
    rewards: IDL.Vec(IDL.Nat64),
    next_claim_at: IDL.Nat64,
  });
  const ActiveStreakWindowResult = IDL.Variant({
    Ok: ActiveStreakWindow,
    Err: IDL.Text,
  });
  const PhantomClaimRequest = IDL.Record({
    signature: IDL.Text,
    wallet_public_key: IDL.Text,
  });
  const PhantomReward = IDL.Record({
    id: IDL.Nat64,
    reward: IDL.Opt(IDL.Nat64),
    loss_message: IDL.Opt(IDL.Nat8),
    timestamp: IDL.Nat64,
  });
  const PhantomRewardResult = IDL.Variant({
    Ok: PhantomReward,
    Err: IDL.Opt(SocietyRsError),
  });
  const ActionResultContent = IDL.Record({
    status: IDL.Text,
    result: IDL.Opt(ContentView),
    errors: IDL.Opt(IDL.Vec(ValidationErrors)),
    message: IDL.Text,
    error_code: IDL.Opt(SocietyRsError),
  });
  const Canister = IDL.Record({
    id: IDL.Principal,
    name: IDL.Text,
    version: IDL.Nat64,
    registry: IDL.Vec(IDL.Tuple(IDL.Text, IDL.Vec(IDL.Nat64))),
  });
  const CreatePoll = IDL.Record({
    days: IDL.Nat64,
    kind: PollKind,
    choices: IDL.Vec(IDL.Text),
  });
  const CreateContent = IDL.Record({
    url: IDL.Text,
    is_nsfw: IDL.Bool,
    title: IDL.Text,
    portal_id: IDL.Opt(IDL.Nat64),
    disable_comments: IDL.Opt(IDL.Bool),
    body: IDL.Text,
    lang: IDL.Text,
    poll: IDL.Opt(CreatePoll),
    tags: IDL.Vec(IDL.Text),
    content_type: IDL.Text,
    parent_id: IDL.Opt(IDL.Nat64),
    icon_url: IDL.Text,
  });
  const CreatePaymentLinkRequest = IDL.Record({
    success_url: IDL.Text,
    quantity: IDL.Nat64,
    failure_url: IDL.Text,
  });
  const StringResult = IDL.Variant({
    Ok: IDL.Text,
    Err: IDL.Opt(SocietyRsError),
  });
  const CreateICPUser = IDL.Record({
    username: IDL.Text,
    auth_token: IDL.Text,
    meta: IDL.Opt(IDL.Vec(IDL.Tuple(IDL.Text, IDL.Text))),
    email: IDL.Opt(IDL.Text),
    referral_code: IDL.Opt(IDL.Text),
    portal_slug: IDL.Opt(IDL.Text),
    primary_chain: IDL.Opt(ChainType),
    referring_username: IDL.Opt(IDL.Text),
  });
  const ActionResultUserSelf = IDL.Record({
    status: IDL.Text,
    result: IDL.Opt(UserSelfView),
    errors: IDL.Opt(IDL.Vec(ValidationErrors)),
    message: IDL.Text,
    error_code: IDL.Opt(SocietyRsError),
  });
  const UserPlatformPair = IDL.Record({
    id: IDL.Nat64,
    platform_meta: IDL.Text,
    kind: UserPlatformPairKind,
    created_at: IDL.Nat64,
    platform_user_id: IDL.Text,
    is_paired: IDL.Bool,
    platform_username: IDL.Text,
  });
  const CreatePortal = IDL.Record({
    is_nsfw: IDL.Bool,
    name: IDL.Text,
    slug: IDL.Text,
    description: IDL.Text,
    icon_url: IDL.Text,
  });
  const CreateProvisionalUser = IDL.Record({
    id: IDL.Principal,
    identity: IDL.Opt(Identity),
  });
  const CreateProvisionalUserErrorType = IDL.Variant({
    UserExistsForPrincipal: IDL.Null,
    MissingIdentity: IDL.Null,
    UsernameExists: IDL.Null,
    InvalidUsername: IDL.Null,
    ProvisionalUserExistsForPrincipal: IDL.Null,
  });
  const CreateProvisionalUserResult = IDL.Variant({
    Ok: IDL.Null,
    Err: IDL.Opt(CreateProvisionalUserErrorType),
  });
  const CreateReport = IDL.Record({
    report_type: IDL.Text,
    content_id: IDL.Nat64,
    message: IDL.Text,
  });
  const ReportView = IDL.Record({
    id: IDL.Nat64,
    read_at: IDL.Nat64,
    action: IDL.Text,
    content: ContentView,
    actor: IDL.Opt(UserView),
    report_type: IDL.Text,
    content_id: IDL.Nat64,
    actor_id: IDL.Principal,
    created_at: IDL.Nat64,
    message: IDL.Text,
    actioned_at: IDL.Nat64,
    reporter_id: IDL.Principal,
    reader_id: IDL.Principal,
    reporter: UserView,
    reader: IDL.Opt(UserView),
  });
  const ActionResultReport = IDL.Record({
    status: IDL.Text,
    result: IDL.Opt(ReportView),
    errors: IDL.Opt(IDL.Vec(ValidationErrors)),
    message: IDL.Text,
    error_code: IDL.Opt(SocietyRsError),
  });
  const ReferralResult = IDL.Variant({ Ok: IDL.Text, Err: IDL.Text });
  const ScanIdentity = IDL.Record({
    id: IDL.Principal,
    auth_type: IDL.Text,
  });
  const AnalyticsTable = IDL.Variant({
    UserStreaksAirdropMultipliers: IDL.Null,
    IdentityOauth: IDL.Null,
    ContentTags: IDL.Null,
    UserStreaksDailyRewards: IDL.Null,
    MultiChainNFTs: IDL.Null,
    ContentSince: IDL.Nat64,
    UserPlatformPairs: IDL.Null,
    IdentityWallet: IDL.Null,
    IdentityUsername: IDL.Null,
    Users: IDL.Null,
    UserWallets: IDL.Null,
    PollVotes: IDL.Null,
    Portals: IDL.Null,
    IdentityEmail: IDL.Null,
    Polls: IDL.Null,
    PollChoices: IDL.Null,
    GovernanceWallets: IDL.Null,
    UserRankings: IDL.Nat64,
    PortalLinks: IDL.Null,
    UserFollowers: IDL.Null,
    ContentReactionCounts: IDL.Null,
    UserSocialPresence: IDL.Null,
    UserStreaks: IDL.Null,
    ContentAwards: IDL.Null,
    UserPortalHighlights: IDL.Null,
    UsersSince: IDL.Nat64,
    Awards: IDL.Null,
    PortalMembers: IDL.Null,
    UserPinnedPosts: IDL.Null,
    PortalMemberRoles: IDL.Null,
    PhantomRewards: IDL.Null,
    UserMeta: IDL.Null,
    PortalCoverPhoto: IDL.Null,
    Content: IDL.Null,
    PortalRoles: IDL.Null,
    InternetComputerNFTs: IDL.Null,
    PortalRules: IDL.Null,
    ContentReactions: IDL.Null,
  });
  const CsvResult = IDL.Variant({ Ok: IDL.Text, Err: IDL.Text });
  const ProcessedNonceFilter = IDL.Variant({
    SucceededOnOrAfter: IDL.Nat64,
    CreatedOnOrAfter: IDL.Nat64,
    Unprocessed: IDL.Null,
    FailedOnOrAfter: IDL.Nat64,
  });
  const SparkNoncePageRequest = IDL.Record({
    page_size: IDL.Nat64,
    filter: IDL.Opt(ProcessedNonceFilter),
    app_id: IDL.Text,
    page_start: IDL.Nat64,
  });
  const FailureStatus = IDL.Record({
    error_msg: IDL.Text,
    processed_at: IDL.Nat64,
  });
  const NonceStatus = IDL.Variant({
    Failed: FailureStatus,
    Successful: IDL.Nat64,
  });
  const SparkBurnNonce = IDL.Record({
    meta: IDL.Opt(IDL.Vec(IDL.Tuple(IDL.Text, IDL.Text))),
    user: IDL.Principal,
    created_at: IDL.Nat64,
    app_id: IDL.Text,
    nonce: IDL.Text,
    processed: IDL.Opt(NonceStatus),
    amount: IDL.Nat64,
    expires_at: IDL.Nat64,
  });
  const SparkNoncePage = IDL.Record({
    page_size: IDL.Nat64,
    nonces: IDL.Vec(SparkBurnNonce),
    page: IDL.Nat64,
    total_pages: IDL.Nat64,
    app_id: IDL.Text,
  });
  const SparkNoncePageResult = IDL.Variant({
    Ok: SparkNoncePage,
    Err: IDL.Opt(SocietyRsError),
  });
  const TxLogEntryChunk = IDL.Record({
    data: IDL.Vec(IDL.Nat8),
    offset: IDL.Nat32,
    request_number: IDL.Nat64,
    total_length: IDL.Nat32,
  });
  const TxLogEntryChunkResult = IDL.Variant({
    Ok: IDL.Vec(TxLogEntryChunk),
    Err: IDL.Text,
  });
  const ContentSort = IDL.Variant({
    OP: IDL.Null,
    New: IDL.Null,
    Old: IDL.Null,
    Live: IDL.Null,
    Default: IDL.Null,
    VerifiedPfp: IDL.Null,
  });
  const ContentQuery = IDL.Record({
    max_grand_children_per_level: IDL.Opt(IDL.Nat16),
    content_id: IDL.Nat64,
    sort: ContentSort,
    thread_start: IDL.Nat64,
    since: IDL.Opt(IDL.Nat64),
    thread_size: IDL.Nat64,
    max_grand_child_depth: IDL.Opt(IDL.Nat16),
  });
  ContentTreeView.fill(
    IDL.Record({
      id: IDL.Nat64,
      url: IDL.Text,
      upvotes: IDL.Int64,
      is_nsfw: IDL.Bool,
      status: IDL.Opt(ContentStatus),
      title: IDL.Text,
      updated_at: IDL.Nat64,
      deleted: IDL.Opt(IDL.Bool),
      is_pinned: IDL.Bool,
      owner: UserView,
      disable_comments: IDL.Opt(IDL.Bool),
      body: IDL.Text,
      owner_color: IDL.Nat32,
      lang: IDL.Text,
      perm: IDL.Nat64,
      tags: IDL.Vec(Tag),
      content_type: IDL.Text,
      created_at: IDL.Nat64,
      children: IDL.Vec(ContentTreeView),
      is_mod: IDL.Bool,
      parent_id: IDL.Opt(IDL.Nat64),
      icon_url: IDL.Text,
      reaction_counts: IDL.Vec(IDL.Tuple(ContentReaction, IDL.Nat64)),
      owner_id: IDL.Principal,
      children_count: IDL.Nat64,
      downvotes: IDL.Int64,
      is_author_pinned: IDL.Bool,
      is_reactor: IDL.Opt(ContentReaction),
      is_upvoter: IDL.Bool,
      owner_roles: IDL.Vec(IDL.Nat64),
      removed: IDL.Opt(IDL.Bool),
      is_downvoter: IDL.Bool,
      portal: PortalInfoView,
    }),
  );
  const ContentTreeViewPage = IDL.Record({
    page_size: IDL.Nat64,
    views: IDL.Vec(ContentTreeView),
    page: IDL.Nat64,
    total_pages: IDL.Nat64,
  });
  const ContentTreeViewPageResult = IDL.Variant({
    Ok: ContentTreeViewPage,
    Err: IDL.Opt(SocietyRsError),
  });
  const GlobalLiveData = IDL.Record({
    streak_count: IDL.Nat64,
    api_version: IDL.Nat32,
    tokens: IDL.Nat64,
    phantom_claimable_at: IDL.Nat64,
    igc_holdings: IDL.Nat64,
    unread_notification_count: IDL.Nat64,
  });
  const GetGlobalLiveDataResult = IDL.Variant({
    Ok: GlobalLiveData,
    Err: IDL.Text,
  });
  const BackupPollChoice = IDL.Record({
    id: IDL.Nat64,
    text: IDL.Text,
    ordinal: IDL.Nat64,
  });
  const BackupPoll = IDL.Record({
    id: IDL.Nat64,
    is_public: IDL.Bool,
    title: IDL.Text,
    cost: IDL.Nat64,
    content_id: IDL.Nat64,
    kind: PollKind,
    created_at: IDL.Nat64,
    choices: IDL.Vec(BackupPollChoice),
    expires_at: IDL.Nat64,
    user_votes: IDL.Vec(
      IDL.Tuple(IDL.Nat64, IDL.Vec(IDL.Tuple(IDL.Principal, IDL.Nat64))),
    ),
  });
  const GovernanceAction = IDL.Variant({
    DeletePortalRole: IDL.Null,
    UpdatePortalInfoRules: IDL.Null,
    AddMemberRole: IDL.Null,
    RemoveMemberRole: IDL.Null,
    UpdatePortalInfoLinks: IDL.Null,
    AddPortalRole: IDL.Null,
    UpdatePortalInfoCoverPhoto: IDL.Null,
  });
  const GovernanceResult = IDL.Variant({
    Approved: IDL.Null,
    Rejected: IDL.Null,
  });
  const GovernanceActionResult = IDL.Variant({
    Success: IDL.Null,
    Failure: IDL.Text,
  });
  const GovernanceDetails = IDL.Record({
    approved_count: IDL.Nat64,
    poll_result: GovernanceResult,
    abstained_count: IDL.Nat64,
    opposed_count: IDL.Nat64,
    action_result: IDL.Opt(
      IDL.Vec(IDL.Tuple(GovernanceActionResult, GovernanceResult)),
    ),
  });
  const GovernancePoll = IDL.Record({
    poll: BackupPoll,
    actions: IDL.Vec(IDL.Tuple(GovernanceAction, IDL.Vec(IDL.Nat8))),
    details: IDL.Opt(GovernanceDetails),
  });
  const MultiChainUpdate = IDL.Record({
    nft: MultiChainNFTRequest,
    owner: IDL.Opt(IDL.Principal),
  });
  const AppNotificationType = IDL.Variant({
    CommentMention: IDL.Null,
    CommentReply: IDL.Null,
    PostReaction: IDL.Null,
    PostReply: IDL.Null,
    CommentAward: IDL.Null,
    Follower: IDL.Null,
    PostAward: IDL.Null,
    PostMention: IDL.Null,
    CommentReaction: IDL.Null,
  });
  const NotificationPageQuery = IDL.Record({
    include_types: IDL.Opt(IDL.Vec(AppNotificationType)),
    page_size: IDL.Nat64,
    page: IDL.Nat64,
    grouping_enabled: IDL.Opt(IDL.Bool),
  });
  const GroupNotificationRecentNotifier = IDL.Record({
    nft: IDL.Opt(NFTView),
    name: IDL.Opt(IDL.Text),
    icon_url: IDL.Opt(IDL.Text),
  });
  const AppGroupNotificationPayload = IDL.Record({
    ids: IDL.Opt(IDL.Vec(IDL.Nat64)),
    total_notifiers: IDL.Opt(IDL.Nat64),
    recent_notifiers: IDL.Opt(IDL.Vec(GroupNotificationRecentNotifier)),
  });
  const ContentMention = IDL.Record({
    title: IDL.Text,
    content_id: IDL.Nat64,
    root_parent_id: IDL.Opt(IDL.Nat64),
  });
  const ContentReply = IDL.Record({
    title: IDL.Text,
    content_id: IDL.Nat64,
    root_parent_id: IDL.Opt(IDL.Nat64),
    comment_id: IDL.Nat64,
  });
  const Reaction = IDL.Record({
    title: IDL.Text,
    content_id: IDL.Nat64,
    root_parent_id: IDL.Opt(IDL.Nat64),
    reaction: ContentReaction,
  });
  const AwardMeta = IDL.Record({ name: IDL.Text, icon_url: IDL.Text });
  const ContentAward = IDL.Record({
    title: IDL.Text,
    award: AwardMeta,
    content_id: IDL.Nat64,
    root_parent_id: IDL.Opt(IDL.Nat64),
  });
  const ApiNotificationType = IDL.Variant({
    CommentMention: ContentMention,
    CommentReply: ContentReply,
    PostReaction: Reaction,
    PostReply: ContentReply,
    CommentAward: ContentAward,
    Follower: IDL.Null,
    PostAward: ContentAward,
    PostMention: ContentMention,
    CommentReaction: Reaction,
  });
  const AppNotificationPayload = IDL.Record({
    notifier_icon_url: IDL.Opt(IDL.Text),
    read_at: IDL.Opt(IDL.Nat64),
    body: IDL.Opt(IDL.Text),
    notification_group: IDL.Opt(AppGroupNotificationPayload),
    created_at: IDL.Nat64,
    notification_id: IDL.Nat64,
    notification_type: ApiNotificationType,
    notifier: IDL.Opt(IDL.Text),
    notifier_nft: IDL.Opt(NFTView),
  });
  const AppNotificationPage = IDL.Record({
    page_size: IDL.Nat64,
    notifications: IDL.Vec(AppNotificationPayload),
    num_pages: IDL.Nat64,
    page: IDL.Nat64,
  });
  const UserNotifications = IDL.Record({
    notification_page: AppNotificationPage,
  });
  const NotificationResult = IDL.Variant({
    Ok: UserNotifications,
    Err: IDL.Text,
  });
  const UserRecommendation = IDL.Record({
    is_following: IDL.Bool,
    user: UserView,
  });
  const UserWalletKind = IDL.Variant({
    Stoic: IDL.Null,
    InfinitySwap: IDL.Null,
    Plug: IDL.Null,
    Origyn: IDL.Null,
    Earth: IDL.Null,
  });
  const UserWallet = IDL.Record({
    kind: UserWalletKind,
    created_at: IDL.Nat64,
    is_paired: IDL.Bool,
    wallet_id: IDL.Principal,
  });
  const UserListWalletView = IDL.Record({
    id: IDL.Principal,
    user_type: IDL.Nat64,
    username: IDL.Text,
    wallets: IDL.Vec(UserWallet),
  });
  const UserPlatformPairListItem = IDL.Record({
    platform_meta: IDL.Text,
    user: UserListWalletView,
    user_id: IDL.Principal,
    platform_user_id: IDL.Text,
    platform_username: IDL.Text,
  });
  const ChainTypeResult = IDL.Variant({
    Ok: IDL.Opt(ChainType),
    Err: IDL.Text,
  });
  const Sort = IDL.Variant({
    Hot: IDL.Null,
    New: IDL.Null,
    Top: IDL.Null,
  });
  const PagedQuery = IDL.Record({
    page_size: IDL.Nat64,
    lang: IDL.Text,
    page: IDL.Nat64,
    sort: Sort,
    query: IDL.Opt(IDL.Text),
    filter: IDL.Text,
    chain_filter: IDL.Opt(ChainType),
    max_age: IDL.Opt(IDL.Nat64),
  });
  const ContentViewPage = IDL.Record({
    page_size: IDL.Nat64,
    contents: IDL.Vec(ContentView),
    page: IDL.Nat64,
    total_pages: IDL.Nat64,
  });
  const ActionResultGetContentPaged = IDL.Record({
    status: IDL.Text,
    result: IDL.Opt(ContentViewPage),
    message: IDL.Text,
    error_code: IDL.Opt(SocietyRsError),
  });
  const ContentActionType = IDL.Variant({
    Reinstated: IDL.Null,
    Approved: IDL.Null,
    Denied: IDL.Null,
    ReQueued: IDL.Null,
    Removed: IDL.Null,
  });
  const ContentActionFeedQuery = IDL.Record({
    page_size: IDL.Nat64,
    moderator_filter: IDL.Opt(IDL.Vec(IDL.Principal)),
    action_filter: IDL.Opt(IDL.Vec(ContentActionType)),
    portal_id: IDL.Nat32,
    page: IDL.Nat64,
  });
  const ContentActionHistoryView = IDL.Record({
    action_id: IDL.Nat64,
    action: IDL.Opt(ContentActionType),
    content: ContentView,
    moderator: IDL.Opt(UserView),
    timestamp: IDL.Nat64,
  });
  const ContentActionHistoryPage = IDL.Record({
    page: IDL.Nat64,
    total_pages: IDL.Nat64,
    actions: IDL.Vec(ContentActionHistoryView),
  });
  const ContentActionHistoryFeedResult = IDL.Variant({
    Ok: ContentActionHistoryPage,
    Err: SocietyRsError,
  });
  const ContentActionFilter = IDL.Variant({
    Moderator: IDL.Vec(IDL.Principal),
  });
  const ContentActionPagedQuery = IDL.Record({
    page_size: IDL.Nat64,
    portal_id: IDL.Nat64,
    page: IDL.Nat64,
    filter: IDL.Opt(ContentActionFilter),
  });
  const ContentEditPayload = IDL.Record({
    title: IDL.Text,
    body: IDL.Text,
    nsfw: IDL.Bool,
    tags: IDL.Vec(IDL.Text),
    comments_disabled: IDL.Bool,
  });
  const ContentEditedAction = IDL.Record({
    post_edit: ContentEditPayload,
    pre_edit: ContentEditPayload,
  });
  const ContentAction = IDL.Variant({
    ContentRemoved: IDL.Null,
    ContentReinstated: IDL.Null,
    ContentEdited: ContentEditedAction,
    ContentDenied: IDL.Null,
    ContentApproved: IDL.Null,
    ContentReQueued: IDL.Null,
  });
  const ContentActionView = IDL.Record({
    id: IDL.Nat64,
    action: IDL.Opt(ContentAction),
    content: IDL.Opt(ContentView),
    moderator: IDL.Opt(UserView),
    timestamp: IDL.Nat64,
  });
  const ContentActionPageView = IDL.Record({
    page_size: IDL.Nat64,
    page: IDL.Nat64,
    total_pages: IDL.Nat64,
    actions: IDL.Vec(ContentActionView),
  });
  const ContentActionPageViewResult = IDL.Variant({
    Ok: ContentActionPageView,
    Err: IDL.Opt(SocietyRsError),
  });
  const RoleListMicroItemView = IDL.Record({
    id: IDL.Nat64,
    name: IDL.Text,
  });
  const MemberListWalletView = IDL.Record({
    id: IDL.Nat64,
    status: MemberKind,
    user: UserListWalletView,
    created_at: IDL.Nat64,
    user_id: IDL.Principal,
    roles: IDL.Vec(RoleListMicroItemView),
  });
  const MemberFilterOrder = IDL.Variant({
    Descending: IDL.Null,
    Ascending: IDL.Null,
  });
  const PortalMemberQuery = IDL.Record({
    filter_order: IDL.Opt(MemberFilterOrder),
    includes_roles: IDL.Bool,
    page_size: IDL.Nat64,
    role_ids: IDL.Vec(IDL.Nat64),
    portal_id: IDL.Nat64,
    username_filter: IDL.Opt(IDL.Text),
    page_start: IDL.Nat64,
  });
  const RoleListItemView = IDL.Record({
    id: IDL.Nat64,
    kind: RoleKind,
    name: IDL.Text,
    color: IDL.Nat32,
    ordinal: IDL.Nat64,
  });
  const MemberListItemView = IDL.Record({
    id: IDL.Nat64,
    status: MemberKind,
    user: UserListItemView,
    created_at: IDL.Nat64,
    user_id: IDL.Principal,
    roles: IDL.Vec(RoleListItemView),
  });
  const GetPortalMemberPage = IDL.Record({
    members: IDL.Vec(MemberListItemView),
    page: IDL.Nat64,
    total_members: IDL.Nat64,
    pages: IDL.Nat64,
  });
  const GetPortalMemberV2Result = IDL.Variant({
    Ok: GetPortalMemberPage,
    Err: IDL.Opt(SocietyRsError),
  });
  const ActionResultPortals = IDL.Record({
    status: IDL.Text,
    result: IDL.Opt(IDL.Vec(PortalView)),
    errors: IDL.Opt(IDL.Vec(ValidationErrors)),
    message: IDL.Text,
    error_code: IDL.Opt(SocietyRsError),
  });
  const ContentStatusFilter = IDL.Variant({
    Denied: IDL.Null,
    Pending: IDL.Null,
  });
  const PostQueuePagedQuery = IDL.Record({
    page_size: IDL.Nat64,
    portal_id: IDL.Nat64,
    status_filter: IDL.Opt(ContentStatusFilter),
    page: IDL.Nat64,
  });
  const ContentViewPagedResult = IDL.Variant({
    Ok: ContentViewPage,
    Err: IDL.Opt(SocietyRsError),
  });
  const RandomizedRecommendationQuery = IDL.Record({
    filter_tags: IDL.Opt(IDL.Vec(IDL.Text)),
    count: IDL.Nat32,
    content_preset: IDL.Opt(ChainType),
  });
  const ReferralCommunitySort = IDL.Variant({
    Name: IDL.Null,
    Rewards: IDL.Null,
  });
  const ReferralCommunityQuery = IDL.Record({
    page_size: IDL.Nat64,
    page: IDL.Nat64,
    sort: IDL.Opt(ReferralCommunitySort),
  });
  const ReferralRewardView = IDL.Record({
    points_earned_from: IDL.Nat64,
    referral: UserView,
  });
  const ReferralCapacitorView = IDL.Record({
    next_token_tier: IDL.Nat64,
    tokens_earned: IDL.Nat64,
    multiplier_count: IDL.Nat64,
  });
  const ReferralCommunityPaged = IDL.Record({
    page_size: IDL.Nat64,
    page: IDL.Nat64,
    total_pages: IDL.Nat64,
    referrals: IDL.Vec(ReferralRewardView),
    capacitor: ReferralCapacitorView,
  });
  const UserListPaged = IDL.Record({
    page_size: IDL.Nat64,
    page: IDL.Nat64,
  });
  const UserFollowPaged = IDL.Record({
    page_size: IDL.Nat64,
    page: IDL.Nat64,
    total_pages: IDL.Nat64,
    follow_status: IDL.Vec(IDL.Tuple(IDL.Principal, IDL.Bool)),
    users: IDL.Vec(UserView),
  });
  const PortalMemberView = IDL.Record({
    member: MemberView,
    portal: PortalView,
  });
  const UserPortalHighlight = IDL.Record({
    portal_id: IDL.Nat64,
    ordinal: IDL.Nat64,
  });
  const PortalHiglights = IDL.Record({
    ordinals: IDL.Vec(UserPortalHighlight),
    portals: IDL.Vec(PortalView),
  });
  const ExplorePortalSort = IDL.Variant({
    NameAscending: IDL.Null,
    NameDescending: IDL.Null,
    MemberCountAscending: IDL.Null,
    MemberCountDescending: IDL.Null,
  });
  const PortalViewPagedQuery = IDL.Record({
    page_size: IDL.Nat64,
    page: IDL.Nat64,
    sort: ExplorePortalSort,
    highlighted: IDL.Bool,
  });
  const PortalViewPaged = IDL.Record({
    page_size: IDL.Nat64,
    views: IDL.Vec(PortalView),
    page: IDL.Nat64,
    total_pages: IDL.Nat64,
  });
  const ReportedTransactionReason = IDL.Variant({
    Custom: IDL.Text,
    Malicious: IDL.Text,
  });
  const CanvasAction = IDL.Variant({
    Proceeded: IDL.Null,
    Rejected: IDL.Null,
    Reported: IDL.Opt(ReportedTransactionReason),
  });
  const LogAppTransactionRequest = IDL.Record({
    action: CanvasAction,
    tx_id: IDL.Opt(IDL.Text),
    app_url: IDL.Text,
    validator_request_id: IDL.Text,
  });
  const LogAppTransactionError = IDL.Variant({
    SocietyRsError: IDL.Opt(SocietyRsError),
  });
  const LogAppTransactionResponse = IDL.Variant({
    Ok: IDL.Null,
    Err: IDL.Opt(LogAppTransactionError),
  });
  const CanvasInteractionError = IDL.Variant({
    ContentOrAppNotFound: IDL.Null,
    SocietyRsError: SocietyRsError,
  });
  const CanvasInteractionResult = IDL.Variant({
    Ok: IDL.Null,
    Err: IDL.Opt(CanvasInteractionError),
  });
  const FrameInteractionError = IDL.Variant({
    InvalidFrameAction: IDL.Null,
    SocietyRsError: SocietyRsError,
    ContentOrFrameNotFound: IDL.Null,
  });
  const FrameInteractionResult = IDL.Variant({
    Ok: IDL.Null,
    Err: IDL.Opt(FrameInteractionError),
  });
  const ReadNotificationsResult = IDL.Variant({
    Ok: IDL.Vec(IDL.Nat64),
    Err: IDL.Text,
  });
  const MemberSearchResult = IDL.Record({
    id: IDL.Principal,
    username: IDL.Text,
    display_nft: IDL.Opt(NFTView),
    rights: IDL.Nat64,
  });
  const ActionResultPairPlatform = IDL.Record({
    status: IDL.Text,
    result: IDL.Opt(UserPlatformPair),
    errors: IDL.Opt(IDL.Vec(ValidationErrors)),
    message: IDL.Text,
    error_code: IDL.Opt(SocietyRsError),
  });
  const PersonalizedFeedV1Parameters = IDL.Record({
    max_comment_depth: IDL.Nat64,
    upvote_weight: IDL.Float32,
    include_top_users: IDL.Opt(IDL.Bool),
    following_upvote_weight: IDL.Float32,
    following_upvote_degree_penalty: IDL.Float32,
    award_age_multiplier: IDL.Opt(IDL.Float32),
    profile_posts_weight: IDL.Opt(IDL.Float32),
    following_comment_degree_penalty: IDL.Float32,
    following_comment_weight: IDL.Float32,
    include_portals: IDL.Bool,
    freshness_weight: IDL.Opt(IDL.Float32),
    relevant_comment_count: IDL.Nat32,
    portal_admin_posts_weight: IDL.Opt(IDL.Float32),
    max_follower_degrees: IDL.Nat64,
    show_caller_posts: IDL.Opt(IDL.Bool),
    award_upvote_multiplier: IDL.Opt(IDL.Nat64),
  });
  const PersonalizedFeedV1Query = IDL.Record({
    parameters: PersonalizedFeedV1Parameters,
    query: PagedQuery,
  });
  const PortalMemberAddResult = IDL.Variant({
    Ok: MemberListItemView,
    Err: IDL.Text,
  });
  const PreUpgradeSuccessStatus = IDL.Variant({
    Finished: IDL.Null,
    InProgress: IDL.Null,
  });
  const PreUpgradeFailureStatus = IDL.Variant({ Unauthorized: IDL.Null });
  const ActionResultPreUpgrade = IDL.Variant({
    Ok: PreUpgradeSuccessStatus,
    Err: PreUpgradeFailureStatus,
  });
  const GenerateSparksNonceRequest = IDL.Record({
    meta: IDL.Opt(IDL.Vec(IDL.Tuple(IDL.Text, IDL.Text))),
    user_id: IDL.Principal,
    app_id: IDL.Text,
    amount: IDL.Nat64,
  });
  const RegisterNonceResult = IDL.Variant({
    Ok: IDL.Text,
    Err: IDL.Opt(SocietyRsError),
  });
  const ActionKind = IDL.Variant({
    Post: IDL.Null,
    Comment: IDL.Null,
    React: IDL.Null,
    Upvote: IDL.Null,
  });
  const ActionLimits = IDL.Record({
    time_period: IDL.Nat64,
    enabled: IDL.Bool,
    limits: IDL.Vec(
      IDL.Tuple(
        ActionKind,
        IDL.Record({ limit: IDL.Nat64, new_user_limit: IDL.Nat64 }),
      ),
    ),
  });
  const NonceDetail = IDL.Record({ app_id: IDL.Text, amount: IDL.Nat64 });
  const NonceDetailResult = IDL.Variant({
    Ok: NonceDetail,
    Err: IDL.Opt(SocietyRsError),
  });
  const ReverseContentActionResult = IDL.Variant({
    Ok: ContentActionView,
    Err: IDL.Opt(SocietyRsError),
  });
  const ActionResultSaveSnapshot = IDL.Variant({
    Ok: IDL.Null,
    Err: IDL.Text,
  });
  const PortalSortBy = IDL.Variant({
    MemberCount: IDL.Null,
    Name: IDL.Null,
    Levenshtein: IDL.Null,
    ContentCount: IDL.Null,
  });
  const SortDirection = IDL.Variant({
    Descending: IDL.Null,
    Ascending: IDL.Null,
  });
  const PortalSearchQuery = IDL.Record({
    sort_by: IDL.Opt(PortalSortBy),
    page_size: IDL.Nat64,
    page: IDL.Nat64,
    query: IDL.Text,
    chain_filter: IDL.Opt(ChainType),
    sort_direction: IDL.Opt(SortDirection),
  });
  const PortalSearchResult = IDL.Record({
    page_size: IDL.Nat64,
    page: IDL.Nat64,
    total_pages: IDL.Nat64,
    items: IDL.Vec(PortalView),
  });
  const ActionResultPortalSearch = IDL.Record({
    status: IDL.Text,
    result: IDL.Opt(PortalSearchResult),
    errors: IDL.Opt(IDL.Vec(ValidationErrors)),
    message: IDL.Text,
  });
  const UserSortBy = IDL.Variant({
    PointCount: IDL.Null,
    Name: IDL.Null,
    ActiveStreak: IDL.Null,
    FollowingCount: IDL.Null,
    Levenshtein: IDL.Null,
  });
  const UserSearchQuery = IDL.Record({
    sort_by: IDL.Opt(UserSortBy),
    page_size: IDL.Nat64,
    page: IDL.Nat64,
    query: IDL.Text,
    chain_filter: IDL.Opt(ChainType),
    sort_direction: IDL.Opt(SortDirection),
  });
  const UserSearchResult = IDL.Record({
    page_size: IDL.Nat64,
    page: IDL.Nat64,
    total_pages: IDL.Nat64,
    items: IDL.Vec(UserView),
  });
  const ActionResultUserSearch = IDL.Record({
    status: IDL.Text,
    result: IDL.Opt(UserSearchResult),
    errors: IDL.Opt(IDL.Vec(ValidationErrors)),
    message: IDL.Text,
  });
  const EncryptionError = IDL.Variant({
    NonceError: IDL.Null,
    EncryptionError: IDL.Null,
    DecryptionError: IDL.Null,
  });
  const TokenError = IDL.Variant({
    TokenGenerationError: IDL.Null,
    EncryptionError: EncryptionError,
    TokenNotFound: IDL.Text,
    VerificationFailed: IDL.Null,
    TokenExpired: IDL.Null,
  });
  const PasswordResetError = IDL.Variant({
    EmailNotVerified: IDL.Null,
    SocietyRsError: SocietyRsError,
    TokenError: TokenError,
  });
  const PasswordResetEmptyResult = IDL.Variant({
    Ok: IDL.Null,
    Err: IDL.Opt(PasswordResetError),
  });
  const EmailVerificationError = IDL.Variant({
    SocietyRsError: SocietyRsError,
    TokenError: TokenError,
    EmailNotSet: IDL.Null,
    EmailAlreadyVerified: IDL.Null,
  });
  const EmailVerificationEmptyResult = IDL.Variant({
    Ok: IDL.Null,
    Err: IDL.Opt(EmailVerificationError),
  });
  const NFTConversionError = IDL.Variant({
    MissingChainType: IDL.Null,
    InvalidChainType: IDL.Text,
    MissingMetaType: IDL.Null,
  });
  const MultiChainUpdateResponse = IDL.Variant({
    Ok: IDL.Null,
    Err: NFTConversionError,
  });
  const DataFormatType = IDL.Variant({
    MsgPack: IDL.Null,
    Bincode: IDL.Null,
    Unknown: IDL.Null,
  });
  const StableStorageHeader = IDL.Record({
    content_format: DataFormatType,
    content_length: IDL.Nat64,
    content_schema_version: IDL.Nat64,
    pre_upgrade_instruction_count: IDL.Nat64,
    header_length: IDL.Nat64,
  });
  const StableStorageTransient = IDL.Record({
    skip_next_save: IDL.Bool,
    post_upgrade_instruction_count: IDL.Nat64,
  });
  const Stats = IDL.Record({
    user_count: IDL.Nat64,
    now: IDL.Nat64,
    last_upgraded: IDL.Nat64,
    portal_count: IDL.Nat64,
    stable_storage_usage_bytes: IDL.Nat64,
    version: IDL.Text,
    cycles: IDL.Nat64,
    tx_log_usage_bytes: IDL.Nat64,
    content_count: IDL.Nat64,
    memory_usage: IDL.Nat64,
  });
  const PollEvent = IDL.Record({
    portal_id: IDL.Nat64,
    content_id: IDL.Nat64,
  });
  const UpdatePoll = IDL.Record({
    days: IDL.Nat64,
    kind: PollKind,
    choices: IDL.Vec(PollChoiceView),
  });
  const UpdatePortal = IDL.Record({
    id: IDL.Nat64,
    description: IDL.Text,
  });
  const UpdatePortalIcon = IDL.Record({
    id: IDL.Nat64,
    icon_url: IDL.Text,
  });
  const UpdatePortalRole = IDL.Record({
    id: IDL.Nat64,
    permissions: IDL.Nat64,
    name: IDL.Text,
    color: IDL.Nat32,
    ordinal: IDL.Nat64,
    icon_url: IDL.Text,
  });
  const ActionResultUpdatePortalRoleOrdinal = IDL.Record({
    status: IDL.Text,
    result: IDL.Opt(IDL.Vec(RoleView)),
    errors: IDL.Opt(IDL.Vec(ValidationErrors)),
    message: IDL.Text,
    error_code: IDL.Opt(SocietyRsError),
  });
  const PortalModerationView = IDL.Record({
    id: IDL.Nat64,
    post_queue_auto_approve_default_time: IDL.Nat64,
    post_queue_enabled: IDL.Bool,
    post_queue_auto_approve_enabled: IDL.Bool,
  });
  const PortalModerationViewResult = IDL.Variant({
    Ok: PortalModerationView,
    Err: IDL.Opt(SocietyRsError),
  });
  const UpdateUserEmail = IDL.Record({ email: IDL.Opt(IDL.Text) });
  const UpdateUsername = IDL.Record({ username: IDL.Text });
  const SetUserSettingsResult = IDL.Variant({
    Ok: UserSettingsView,
    Err: IDL.Text,
  });
  const VerifyAppTransactionRequest = IDL.Record({
    tx: IDL.Text,
    app_url: IDL.Text,
    chain_id: IDL.Text,
  });
  const VerifyAppTransactionSuccess = IDL.Variant({
    Blowfish: IDL.Text,
    Validator: IDL.Text,
  });
  const VerifyAppTransactionError = IDL.Variant({
    InvalidChainId: IDL.Text,
    SocietyRsError: IDL.Opt(SocietyRsError),
  });
  const VerifyAppTransactionResult = IDL.Variant({
    Ok: IDL.Opt(VerifyAppTransactionSuccess),
    Err: IDL.Opt(VerifyAppTransactionError),
  });
  const VerifyIdentityResponse = IDL.Record({
    user: IDL.Principal,
    nonce: IDL.Vec(IDL.Nat8),
  });
  return IDL.Service({
    accept_portal_invite: IDL.Func(
      [PortalInvite],
      [ActionResultPortal],
      ['query'],
    ),
    accept_user_invite: IDL.Func([IDL.Text], [ActionResultUser], ['query']),
    add_member_role: IDL.Func(
      [IDL.Nat64, IDL.Vec(IDL.Tuple(IDL.Nat64, IDL.Nat64))],
      [IDL.Vec(MemberView)],
      ['query'],
    ),
    add_platform_controller: IDL.Func(
      [UserPlatformPairKind, IDL.Principal],
      [IDL.Vec(UserPlatformController)],
      ['query'],
    ),
    add_portal_role: IDL.Func(
      [IDL.Nat64, CreatePortalRole],
      [ActionResultPortalRole],
      ['query'],
    ),
    add_service_controller: IDL.Func(
      [ServiceControllerKind, IDL.Principal],
      [ServiceControllers],
      ['query'],
    ),
    admin_add_new_award: IDL.Func([CreateAwardRequest], [AwardView], ['query']),
    admin_add_registered_app: IDL.Func(
      [SparkApp],
      [EmptySocietyRsResult],
      ['query'],
    ),
    admin_audit_referral_data: IDL.Func([], [EmptySocietyRsResult], ['query']),
    admin_convert_banned_users: IDL.Func([], [], ['query']),
    admin_enable_award_notifications: IDL.Func([], [], ['query']),
    admin_prune_limit_entries: IDL.Func([], [], ['query']),
    admin_referral_backfill: IDL.Func([], [EmptyResult], ['query']),
    admin_remove_provisional_user: IDL.Func([IDL.Principal], [], ['query']),
    admin_remove_self_followers: IDL.Func(
      [],
      [EmptySocietyRsResult],
      ['query'],
    ),
    admin_remove_unverified_email_streak_reminders: IDL.Func(
      [],
      [EmptySocietyRsResult],
      ['query'],
    ),
    admin_reset_single_user_streak: IDL.Func(
      [IDL.Principal, IDL.Nat16],
      [],
      ['query'],
    ),
    admin_set_email_verified: IDL.Func(
      [IDL.Principal],
      [EmptySocietyRsResult],
      ['query'],
    ),
    admin_set_nonce_delay: IDL.Func([IDL.Nat64], [], ['query']),
    admin_set_phantom_reward_amounts: IDL.Func(
      [IDL.Vec(IDL.Nat8)],
      [],
      ['query'],
    ),
    admin_set_phantom_reward_claim_delay: IDL.Func([IDL.Nat64], [], ['query']),
    admin_set_phantom_reward_number_of_losing_messages: IDL.Func(
      [IDL.Nat8],
      [],
      ['query'],
    ),
    admin_set_phantom_reward_odds_of_winning: IDL.Func(
      [IDL.Float64],
      [],
      ['query'],
    ),
    admin_set_referral_capacitor_threshold: IDL.Func(
      [IDL.Nat64],
      [EmptySocietyRsResult],
      ['query'],
    ),
    admin_token_deduct_user: IDL.Func(
      [IDL.Principal, IDL.Nat64],
      [],
      ['query'],
    ),
    admin_token_reward_user: IDL.Func(
      [IDL.Principal, IDL.Nat64, IDL.Opt(RewardReason)],
      [TokenRewardResult],
      ['query'],
    ),
    admin_update_award: IDL.Func(
      [UpdateAwardRequest],
      [IDL.Opt(AwardView)],
      ['query'],
    ),
    admin_update_currency_to_point_ratio: IDL.Func([IDL.Nat64], [], ['query']),
    admin_update_daily_reward_amounts: IDL.Func(
      [IDL.Vec(IDL.Nat64)],
      [AdminUpdateDailyRewardAmountsResult],
      ['query'],
    ),
    admin_update_onboarding_state: IDL.Func(
      [IDL.Text, IDL.Opt(IDL.Vec(IDL.Principal))],
      [EmptySocietyRsResult],
      ['query'],
    ),
    admin_update_password_reset_token_expiration: IDL.Func(
      [IDL.Nat64],
      [EmptySocietyRsResult],
      ['query'],
    ),
    admin_update_portal_name: IDL.Func(
      [IDL.Nat64, IDL.Text, IDL.Text],
      [ActionResultPortal],
      ['query'],
    ),
    admin_update_portal_owner: IDL.Func(
      [IDL.Nat64, IDL.Principal],
      [ActionResultPortal],
      ['query'],
    ),
    admin_update_referred_by: IDL.Func([], [EmptySocietyRsResult], ['query']),
    admin_update_username: IDL.Func(
      [IDL.Text, IDL.Text, IDL.Bool],
      [ActionResultUser],
      ['query'],
    ),
    admin_update_verify_email_token_expiration: IDL.Func(
      [IDL.Nat64],
      [EmptySocietyRsResult],
      ['query'],
    ),
    admin_user_set_profile: IDL.Func(
      [IDL.Principal, UpdateUserProfileV2],
      [IDL.Opt(UserSelfView)],
      ['query'],
    ),
    admin_user_set_profile_icon: IDL.Func(
      [IDL.Principal, IDL.Opt(UpdateUserProfileIcon)],
      [IDL.Opt(UserSelfView)],
      ['query'],
    ),
    approve_all_pending_posts: IDL.Func(
      [IDL.Nat64],
      [EmptySocietyRsResult],
      ['query'],
    ),
    approve_deny_pending_post: IDL.Func(
      [IDL.Nat64, IDL.Opt(PostQueueAction)],
      [PostQueueActionResult],
      ['query'],
    ),
    archive_portal: IDL.Func([IDL.Nat64], [ActionResultPortal], ['query']),
    audit_missing_principals: IDL.Func(
      [IDL.Vec(IDL.Principal)],
      [IDL.Vec(IDL.Principal)],
      ['query'],
    ),
    award_post: IDL.Func(
      [IDL.Nat64, IDL.Nat64],
      [PostQueueActionResult],
      ['query'],
    ),
    backdoor_clear_password_reset_token: IDL.Func(
      [IDL.Principal],
      [],
      ['query'],
    ),
    backdoor_clear_self_as_admin: IDL.Func([], [], ['query']),
    backdoor_clear_verify_email_token: IDL.Func([IDL.Principal], [], ['query']),
    backdoor_query_panic: IDL.Func([], [], ['query']),
    backdoor_reset_streak: IDL.Func([], [], ['query']),
    backdoor_set_self_as_admin: IDL.Func([], [], ['query']),
    backdoor_setup_phantom_rewards: IDL.Func(
      [BackdoorPhantomSetupDataParams],
      [],
      ['query'],
    ),
    backdoor_streak_setup_data: IDL.Func(
      [BackdoorSetupDataParams],
      [],
      ['query'],
    ),
    backdoor_token_reward_user: IDL.Func(
      [IDL.Principal, IDL.Nat64, IDL.Opt(RewardReason)],
      [TokenRewardResult],
      ['query'],
    ),
    backdoor_update_panic: IDL.Func([], [], ['query']),
    backup_stable_storage: IDL.Func(
      [IDL.Nat64, IDL.Nat64],
      [IDL.Vec(IDL.Nat8)],
      ['query'],
    ),
    ban_user: IDL.Func(
      [IDL.Principal, IDL.Nat64, IDL.Text],
      [ActionResultBanUser],
      ['query'],
    ),
    ban_user_api: IDL.Func(
      [IDL.Text, IDL.Principal, IDL.Nat64, IDL.Text],
      [ActionResultBanUser],
      ['query'],
    ),
    block_user_toggle: IDL.Func(
      [IDL.Principal],
      [IDL.Opt(IDL.Bool)],
      ['query'],
    ),
    burn_sparks_nonce: IDL.Func([IDL.Text], [EmptySocietyRsResult], ['query']),
    claim_daily_streak: IDL.Func([], [ActiveStreakWindowResult], ['query']),
    claim_onboarding_reward: IDL.Func([], [IDL.Bool], ['query']),
    claim_phantom_reward: IDL.Func(
      [IDL.Opt(PhantomClaimRequest)],
      [PhantomRewardResult],
      ['query'],
    ),
    claim_reward: IDL.Func([], [IDL.Bool], ['query']),
    clean_empty_portals: IDL.Func([IDL.Text], [], ['query']),
    clear_low_rank_index: IDL.Func([], [], ['query']),
    content_nsfw_set: IDL.Func(
      [IDL.Nat64, IDL.Bool],
      [ActionResultContent],
      ['query'],
    ),
    content_pin_set: IDL.Func(
      [IDL.Nat64, IDL.Bool],
      [ActionResultContent],
      ['query'],
    ),
    content_poll_quadratic_vote: IDL.Func(
      [IDL.Nat64, IDL.Vec(IDL.Tuple(IDL.Nat64, IDL.Nat64))],
      [IDL.Opt(PollView)],
      ['query'],
    ),
    content_poll_vote: IDL.Func(
      [IDL.Nat64, IDL.Nat64],
      [IDL.Opt(PollView)],
      ['query'],
    ),
    create_auth_token: IDL.Func([IDL.Text, IDL.Text, IDL.Text], [], ['query']),
    create_canister: IDL.Func(
      [IDL.Principal, IDL.Text],
      [IDL.Opt(Canister)],
      ['query'],
    ),
    create_content: IDL.Func([CreateContent], [ActionResultContent], ['query']),
    create_currency_payment_link: IDL.Func(
      [CreatePaymentLinkRequest],
      [StringResult],
      ['query'],
    ),
    create_icp_user: IDL.Func(
      [CreateICPUser],
      [ActionResultUserSelf],
      ['query'],
    ),
    create_platform_pairing: IDL.Func(
      [UserPlatformPairKind],
      [IDL.Opt(UserPlatformPair)],
      ['query'],
    ),
    create_portal: IDL.Func([CreatePortal], [ActionResultPortal], ['query']),
    create_provisional_user: IDL.Func(
      [CreateProvisionalUser],
      [CreateProvisionalUserResult],
      ['query'],
    ),
    create_referred_user: IDL.Func(
      [CreateICPUser],
      [ActionResultUserSelf],
      ['query'],
    ),
    create_report: IDL.Func([CreateReport], [ActionResultReport], ['query']),
    delete_canister: IDL.Func([IDL.Principal], [], ['query']),
    delete_content: IDL.Func([IDL.Nat64], [ActionResultContent], ['query']),
    delete_portal_role: IDL.Func(
      [IDL.Nat64],
      [ActionResultPortalRole],
      ['query'],
    ),
    discard_until: IDL.Func([IDL.Nat64], [], ['query']),
    follow_portal_multi: IDL.Func(
      [IDL.Vec(IDL.Nat64)],
      [EmptySocietyRsResult],
      ['query'],
    ),
    follow_portal_toggle: IDL.Func(
      [IDL.Nat64],
      [ActionResultPortal],
      ['query'],
    ),
    follow_user: IDL.Func([IDL.Principal], [ActionResultUser], ['query']),
    follow_user_multi: IDL.Func(
      [IDL.Vec(IDL.Principal)],
      [EmptySocietyRsResult],
      ['query'],
    ),
    follow_user_toggle: IDL.Func(
      [IDL.Principal],
      [ActionResultUser],
      ['query'],
    ),
    generate_referral_code: IDL.Func([], [ReferralResult], ['query']),
    get_account_agents: IDL.Func([], [IDL.Vec(IDL.Principal)], ['query']),
    get_active_streak_window: IDL.Func(
      [],
      [ActiveStreakWindowResult],
      ['query'],
    ),
    get_all_dscvr_principals: IDL.Func(
      [],
      [IDL.Vec(ScanIdentity), IDL.Vec(ScanIdentity)],
      ['query'],
    ),
    get_analytics_table: IDL.Func(
      [IDL.Opt(AnalyticsTable)],
      [CsvResult],
      ['query'],
    ),
    get_app_sparks_nonces: IDL.Func(
      [SparkNoncePageRequest],
      [SparkNoncePageResult],
      ['query'],
    ),
    get_argon2_hash: IDL.Func([IDL.Text], [IDL.Text], ['query']),
    get_argon2_user: IDL.Func([IDL.Text], [IDL.Opt(UserView)], ['query']),
    get_assignable_portal_roles: IDL.Func(
      [IDL.Nat64],
      [IDL.Opt(IDL.Tuple(MemberView, IDL.Vec(RoleView)))],
      ['query'],
    ),
    get_banned_users: IDL.Func([], [IDL.Vec(UserBan)], ['query']),
    get_can_id: IDL.Func([], [IDL.Principal], ['query']),
    get_canister: IDL.Func([IDL.Principal], [IDL.Opt(Canister)], ['query']),
    get_chunked_tx_log_entries_from: IDL.Func(
      [IDL.Nat64, IDL.Nat32, IDL.Opt(IDL.Nat32)],
      [TxLogEntryChunkResult],
      ['query'],
    ),
    get_content: IDL.Func([IDL.Nat64], [ActionResultContent], ['query']),
    get_content_children: IDL.Func(
      [ContentQuery],
      [IDL.Vec(ContentTreeView)],
      ['query'],
    ),
    get_content_children_page: IDL.Func(
      [ContentQuery],
      [ContentTreeViewPageResult],
      ['query'],
    ),
    get_content_ranks: IDL.Func(
      [IDL.Nat64],
      [IDL.Opt(IDL.Tuple(IDL.Nat64, IDL.Int64))],
      ['query'],
    ),
    get_content_since: IDL.Func(
      [IDL.Nat64, IDL.Nat64],
      [IDL.Vec(ContentTreeView)],
      ['query'],
    ),
    get_content_view_counts: IDL.Func(
      [IDL.Vec(IDL.Nat64)],
      [IDL.Vec(IDL.Tuple(IDL.Nat64, IDL.Nat64))],
      ['query'],
    ),
    get_enabled_beta_features: IDL.Func([], [IDL.Vec(IDL.Text)], ['query']),
    get_global_live_data: IDL.Func(
      [IDL.Opt(IDL.Bool)],
      [GetGlobalLiveDataResult],
      ['query'],
    ),
    get_governance_polls: IDL.Func([], [IDL.Vec(GovernancePoll)], ['query']),
    get_identity_for_principal: IDL.Func(
      [IDL.Principal],
      [IDL.Opt(Identity)],
      ['query'],
    ),
    get_memory_usage: IDL.Func([], [IDL.Nat64], ['query']),
    get_next_reward: IDL.Func([], [IDL.Opt(IDL.Nat64)], ['query']),
    get_nft_pfps: IDL.Func(
      [IDL.Opt(IDL.Bool), IDL.Opt(NFTChainType)],
      [IDL.Vec(MultiChainUpdate)],
      ['query'],
    ),
    get_notification_page: IDL.Func(
      [NotificationPageQuery],
      [NotificationResult],
      ['query'],
    ),
    get_onboarding_interests: IDL.Func([], [IDL.Vec(IDL.Text)], ['query']),
    get_onboarding_portal_recommendations: IDL.Func(
      [],
      [IDL.Vec(PortalView)],
      ['query'],
    ),
    get_onboarding_state: IDL.Func([], [IDL.Text], ['query']),
    get_onboarding_user_recommendations: IDL.Func(
      [],
      [IDL.Vec(UserView)],
      ['query'],
    ),
    get_onboarding_user_recommendations_v2: IDL.Func(
      [],
      [IDL.Vec(UserRecommendation)],
      ['query'],
    ),
    get_own_id: IDL.Func([], [IDL.Principal], ['query']),
    get_paired_platforms: IDL.Func([], [IDL.Vec(UserPlatformPair)], ['query']),
    get_paired_platforms_by_user: IDL.Func(
      [IDL.Principal],
      [IDL.Vec(UserPlatformPair)],
      ['query'],
    ),
    get_paired_user_by_platform: IDL.Func(
      [UserPlatformPairKind],
      [IDL.Vec(UserPlatformPairListItem)],
      ['query'],
    ),
    get_paired_wallets: IDL.Func([], [IDL.Vec(UserWallet)], ['query']),
    get_platform_controllers: IDL.Func(
      [],
      [IDL.Vec(UserPlatformController)],
      ['query'],
    ),
    get_platform_pair_code: IDL.Func(
      [UserPlatformPairKind],
      [IDL.Opt(IDL.Text)],
      ['query'],
    ),
    get_portal: IDL.Func([IDL.Text], [ActionResultPortal], ['query']),
    get_portal_chain_type: IDL.Func([IDL.Nat64], [ChainTypeResult], ['query']),
    get_portal_content: IDL.Func(
      [IDL.Text, PagedQuery],
      [ActionResultGetContentPaged],
      ['query'],
    ),
    get_portal_content_action_feed: IDL.Func(
      [ContentActionFeedQuery],
      [ContentActionHistoryFeedResult],
      ['query'],
    ),
    get_portal_content_action_feed_page: IDL.Func(
      [ContentActionPagedQuery],
      [ContentActionPageViewResult],
      ['query'],
    ),
    get_portal_info: IDL.Func([IDL.Nat64], [IDL.Opt(PortalInfo)], ['query']),
    get_portal_member_memos: IDL.Func(
      [IDL.Nat64, IDL.Nat64],
      [IDL.Vec(IDL.Text)],
      ['query'],
    ),
    get_portal_member_wallets: IDL.Func(
      [IDL.Nat64],
      [IDL.Vec(MemberListWalletView)],
      ['query'],
    ),
    get_portal_members: IDL.Func(
      [PortalMemberQuery],
      [IDL.Vec(MemberListItemView)],
      ['query'],
    ),
    get_portal_members_by_status: IDL.Func(
      [IDL.Nat64, MemberKind],
      [IDL.Vec(MemberListItemView)],
      ['query'],
    ),
    get_portal_members_v2: IDL.Func(
      [PortalMemberQuery],
      [GetPortalMemberV2Result],
      ['query'],
    ),
    get_portal_ranks: IDL.Func(
      [IDL.Nat64],
      [IDL.Opt(IDL.Tuple(IDL.Nat64, IDL.Int64))],
      ['query'],
    ),
    get_portal_roles: IDL.Func([IDL.Nat64], [IDL.Vec(RoleView)], ['query']),
    get_portals: IDL.Func(
      [IDL.Vec(IDL.Text)],
      [ActionResultPortals],
      ['query'],
    ),
    get_post_queue_feed_page: IDL.Func(
      [PostQueuePagedQuery],
      [ContentViewPagedResult],
      ['query'],
    ),
    get_principal_for_user_name: IDL.Func(
      [IDL.Text],
      [IDL.Opt(IDL.Principal)],
      ['query'],
    ),
    get_purchasable_awards: IDL.Func([], [IDL.Vec(AwardView)], ['query']),
    get_randomized_recommended_portals: IDL.Func(
      [RandomizedRecommendationQuery],
      [IDL.Vec(PortalView)],
      ['query'],
    ),
    get_randomized_recommended_users: IDL.Func(
      [RandomizedRecommendationQuery],
      [IDL.Vec(UserView)],
      ['query'],
    ),
    get_referral_community: IDL.Func(
      [ReferralCommunityQuery],
      [ReferralCommunityPaged],
      ['query'],
    ),
    get_referral_promo_shown: IDL.Func([], [IDL.Bool], ['query']),
    get_registry_controller: IDL.Func([], [IDL.Opt(IDL.Principal)], ['query']),
    get_role_members: IDL.Func(
      [IDL.Nat64],
      [IDL.Vec(MemberListItemView)],
      ['query'],
    ),
    get_self: IDL.Func([], [ActionResultUserSelf], ['query']),
    get_self_portals: IDL.Func([], [IDL.Vec(PortalView)], ['query']),
    get_service_controllers: IDL.Func([], [ServiceControllers], ['query']),
    get_streak_decay: IDL.Func([], [IDL.Nat16], ['query']),
    get_streak_promo_shown: IDL.Func([], [IDL.Bool], ['query']),
    get_user: IDL.Func([IDL.Text], [ActionResultUser], ['query']),
    get_user_blocked: IDL.Func([UserListPaged], [UserFollowPaged], ['query']),
    get_user_by_principal: IDL.Func(
      [IDL.Principal],
      [ActionResultUser],
      ['query'],
    ),
    get_user_content: IDL.Func(
      [IDL.Text, PagedQuery],
      [ActionResultGetContentPaged],
      ['query'],
    ),
    get_user_followers: IDL.Func(
      [IDL.Text, UserListPaged],
      [UserFollowPaged],
      ['query'],
    ),
    get_user_following: IDL.Func(
      [IDL.Text, UserListPaged],
      [UserFollowPaged],
      ['query'],
    ),
    get_user_follows: IDL.Func([], [IDL.Vec(PortalView)], ['query']),
    get_user_interests: IDL.Func([], [IDL.Vec(IDL.Text)], ['query']),
    get_user_phantom_reward: IDL.Func(
      [IDL.Principal, IDL.Nat64],
      [PhantomRewardResult],
      ['query'],
    ),
    get_user_portal_roles: IDL.Func(
      [IDL.Nat64, IDL.Principal],
      [IDL.Opt(PortalMemberView)],
      ['query'],
    ),
    get_user_portals: IDL.Func(
      [IDL.Principal],
      [IDL.Vec(PortalView)],
      ['query'],
    ),
    get_user_ranks: IDL.Func(
      [IDL.Principal],
      [IDL.Opt(IDL.Tuple(IDL.Nat64, IDL.Int64))],
      ['query'],
    ),
    get_user_referral_code: IDL.Func([], [ReferralResult], ['query']),
    increment_content_view_counts: IDL.Func(
      [IDL.Vec(IDL.Nat64)],
      [EmptyResult],
      ['query'],
    ),
    init_stable_storage: IDL.Func([IDL.Nat64], [], ['query']),
    is_email_verification_pending: IDL.Func([], [IDL.Bool], ['query']),
    is_phone_paried: IDL.Func(
      [],
      [IDL.Variant({ Ok: IDL.Bool, Err: IDL.Text })],
      ['query'],
    ),
    is_phone_verified: IDL.Func(
      [IDL.Text],
      [IDL.Variant({ Ok: IDL.Bool, Err: IDL.Text })],
      ['query'],
    ),
    is_user_following: IDL.Func([IDL.Principal], [IDL.Bool], ['query']),
    join_portal: IDL.Func([IDL.Nat64], [ActionResultPortal], ['query']),
    join_portal_multi: IDL.Func(
      [IDL.Vec(IDL.Nat64)],
      [EmptySocietyRsResult],
      ['query'],
    ),
    leave_portal: IDL.Func([IDL.Nat64], [ActionResultPortal], ['query']),
    list_canisters: IDL.Func([], [IDL.Vec(IDL.Principal)], ['query']),
    list_content: IDL.Func([PagedQuery], [ContentViewPage], ['query']),
    list_highlighed_portals: IDL.Func(
      [IDL.Opt(ChainType)],
      [IDL.Opt(PortalHiglights)],
      ['query'],
    ),
    list_portals: IDL.Func(
      [PortalViewPagedQuery],
      [PortalViewPaged],
      ['query'],
    ),
    list_reports: IDL.Func([], [IDL.Vec(ReportView)], ['query']),
    log_app_transaction: IDL.Func(
      [LogAppTransactionRequest],
      [LogAppTransactionResponse],
      ['query'],
    ),
    log_canvas_interaction: IDL.Func(
      [IDL.Text, IDL.Nat64],
      [CanvasInteractionResult],
      ['query'],
    ),
    log_frame_interaction: IDL.Func(
      [IDL.Text],
      [FrameInteractionResult],
      ['query'],
    ),
    mark_all_notifications_read: IDL.Func([], [EmptyResult], ['query']),
    mark_notifications_read: IDL.Func(
      [IDL.Vec(IDL.Nat64)],
      [ReadNotificationsResult],
      ['query'],
    ),
    member_search: IDL.Func(
      [IDL.Text],
      [IDL.Vec(MemberSearchResult)],
      ['query'],
    ),
    migrate_user_portal_pinned_content: IDL.Func([], [], ['query']),
    next_request_number: IDL.Func([], [IDL.Nat64], ['query']),
    pair_platform: IDL.Func(
      [
        UserPlatformPairKind,
        IDL.Principal,
        IDL.Text,
        IDL.Text,
        IDL.Text,
        IDL.Text,
      ],
      [ActionResultPairPlatform],
      ['query'],
    ),
    personalized_feed_v1: IDL.Func(
      [PersonalizedFeedV1Query],
      [IDL.Variant({ Ok: ContentViewPage, Err: IDL.Text })],
      ['query'],
    ),
    pin_user_content: IDL.Func([IDL.Nat64, IDL.Bool], [EmptyResult], ['query']),
    populate_low_rank_index: IDL.Func([], [], ['query']),
    portal_member_add: IDL.Func(
      [IDL.Nat64, IDL.Principal],
      [PortalMemberAddResult],
      ['query'],
    ),
    portal_nsfw_toggle: IDL.Func([IDL.Nat64], [ActionResultPortal], ['query']),
    portal_requires_phone: IDL.Func(
      [IDL.Nat64, IDL.Bool],
      [ActionResultPortal],
      ['query'],
    ),
    portal_root_toggle: IDL.Func([IDL.Nat64], [ActionResultPortal], ['query']),
    pre_upgrade: IDL.Func([], [ActionResultPreUpgrade], ['query']),
    process_single_payment: IDL.Func(
      [IDL.Text],
      [EmptySocietyRsResult],
      ['query'],
    ),
    purge_contents: IDL.Func([IDL.Vec(IDL.Nat64)], [], ['query']),
    react_to_content: IDL.Func(
      [IDL.Nat64, IDL.Opt(ContentReaction)],
      [ActionResultContent],
      ['query'],
    ),
    read_notifications: IDL.Func(
      [IDL.Vec(IDL.Nat64)],
      [ReadNotificationsResult],
      ['query'],
    ),
    register_sparks_burn_nonce: IDL.Func(
      [GenerateSparksNonceRequest],
      [RegisterNonceResult],
      ['query'],
    ),
    remove_account_agent: IDL.Func(
      [IDL.Principal],
      [EmptySocietyRsResult],
      ['query'],
    ),
    remove_content: IDL.Func([IDL.Nat64], [ActionResultContent], ['query']),
    remove_follower: IDL.Func([IDL.Principal], [ActionResultUser], ['query']),
    remove_member_role: IDL.Func(
      [IDL.Nat64, IDL.Vec(IDL.Tuple(IDL.Nat64, IDL.Nat64))],
      [IDL.Vec(MemberView)],
      ['query'],
    ),
    remove_platform_controller: IDL.Func(
      [UserPlatformPairKind],
      [IDL.Vec(UserPlatformController)],
      ['query'],
    ),
    remove_portal: IDL.Func([IDL.Nat64], [], ['query']),
    remove_registry_controller: IDL.Func([], [], ['query']),
    remove_service_controller: IDL.Func(
      [ServiceControllerKind, IDL.Principal],
      [ServiceControllers],
      ['query'],
    ),
    reset_phone_table: IDL.Func([], [], ['query']),
    restore_limits: IDL.Func([ActionLimits], [], ['query']),
    restore_stable_storage: IDL.Func(
      [IDL.Nat64, IDL.Vec(IDL.Nat8)],
      [],
      ['query'],
    ),
    restore_stable_storage_compressed: IDL.Func(
      [IDL.Nat64, IDL.Vec(IDL.Vec(IDL.Nat8))],
      [],
      ['query'],
    ),
    retrieve_nonce_details: IDL.Func(
      [IDL.Text],
      [NonceDetailResult],
      ['query'],
    ),
    reverse_content_action: IDL.Func(
      [IDL.Nat64],
      [ReverseContentActionResult],
      ['query'],
    ),
    reverse_portal_content_action: IDL.Func(
      [IDL.Nat64],
      [EmptyResult],
      ['query'],
    ),
    save_snapshot: IDL.Func([IDL.Bool], [ActionResultSaveSnapshot], ['query']),
    search_portals: IDL.Func(
      [PortalSearchQuery],
      [ActionResultPortalSearch],
      ['query'],
    ),
    search_tags: IDL.Func([IDL.Text], [IDL.Vec(Tag)], ['query']),
    search_users: IDL.Func(
      [UserSearchQuery],
      [ActionResultUserSearch],
      ['query'],
    ),
    send_password_reset_email: IDL.Func(
      [IDL.Principal],
      [PasswordResetEmptyResult],
      ['query'],
    ),
    send_verification_email: IDL.Func(
      [],
      [EmailVerificationEmptyResult],
      ['query'],
    ),
    set_account_agent: IDL.Func(
      [IDL.Principal],
      [EmptySocietyRsResult],
      ['query'],
    ),
    set_action: IDL.Func(
      [IDL.Nat64, IDL.Text],
      [ActionResultReport],
      ['query'],
    ),
    set_content_rank: IDL.Func(
      [IDL.Vec(IDL.Tuple(IDL.Nat64, IDL.Nat64))],
      [],
      ['query'],
    ),
    set_content_rank_modifier: IDL.Func(
      [IDL.Vec(IDL.Tuple(IDL.Nat64, IDL.Int64))],
      [],
      ['query'],
    ),
    set_highlighted_portals: IDL.Func(
      [IDL.Vec(UserPortalHighlight)],
      [IDL.Opt(PortalHiglights)],
      ['query'],
    ),
    set_nft_pfps: IDL.Func(
      [IDL.Vec(MultiChainUpdate)],
      [MultiChainUpdateResponse],
      ['query'],
    ),
    set_onboarding_state: IDL.Func(
      [IDL.Text],
      [EmptySocietyRsResult],
      ['query'],
    ),
    set_portal_members_status: IDL.Func(
      [IDL.Nat64, IDL.Nat64, MemberKind, IDL.Text],
      [IDL.Opt(MemberListItemView)],
      ['query'],
    ),
    set_portal_rank: IDL.Func(
      [IDL.Vec(IDL.Tuple(IDL.Nat64, IDL.Nat64))],
      [],
      ['query'],
    ),
    set_portal_rank_modifier: IDL.Func(
      [IDL.Vec(IDL.Tuple(IDL.Nat64, IDL.Int64))],
      [],
      ['query'],
    ),
    set_read: IDL.Func([IDL.Nat64], [IDL.Vec(ActionResultReport)], ['query']),
    set_referral_promo_shown: IDL.Func([], [], ['query']),
    set_registry_controller: IDL.Func(
      [IDL.Principal],
      [IDL.Opt(IDL.Principal)],
      ['query'],
    ),
    set_restore_from_stable_storage: IDL.Func([IDL.Bool], [], ['query']),
    set_streak_decay: IDL.Func([IDL.Nat16], [], ['query']),
    set_streak_promo_shown: IDL.Func([], [], ['query']),
    set_user_interests: IDL.Func([IDL.Vec(IDL.Text)], [EmptyResult], ['query']),
    set_user_rank: IDL.Func(
      [IDL.Vec(IDL.Tuple(IDL.Principal, IDL.Nat64))],
      [],
      ['query'],
    ),
    set_user_rank_modifier: IDL.Func(
      [IDL.Vec(IDL.Tuple(IDL.Principal, IDL.Int64))],
      [],
      ['query'],
    ),
    stable_storage_info: IDL.Func(
      [],
      [StableStorageHeader, StableStorageTransient],
      ['query'],
    ),
    stats: IDL.Func([], [Stats], ['query']),
    test_endpoint: IDL.Func([IDL.Text], [IDL.Nat64], ['query']),
    test_hash: IDL.Func([IDL.Principal, IDL.Nat64], [IDL.Principal], ['query']),
    test_register_event: IDL.Func([], [], ['query']),
    test_resolve_event: IDL.Func([PollEvent], [], ['query']),
    token_gift_user: IDL.Func([IDL.Principal, IDL.Nat64], [], ['query']),
    tx_log_discard_until: IDL.Func([IDL.Nat64], [], ['query']),
    tx_log_get_chunked_entries_from: IDL.Func(
      [IDL.Nat64, IDL.Nat32, IDL.Opt(IDL.Nat32)],
      [TxLogEntryChunkResult],
      ['query'],
    ),
    tx_log_next_request_number: IDL.Func([], [IDL.Nat64], ['query']),
    unban_user: IDL.Func([IDL.Principal], [], ['query']),
    unfollow_user: IDL.Func([IDL.Principal], [ActionResultUser], ['query']),
    unpair_phone: IDL.Func(
      [],
      [IDL.Variant({ Ok: IDL.Bool, Err: IDL.Text })],
      ['query'],
    ),
    unpair_platform: IDL.Func(
      [UserPlatformPairKind],
      [IDL.Vec(UserPlatformPair)],
      ['query'],
    ),
    unpair_wallet: IDL.Func([UserWalletKind], [], ['query']),
    unverify_phone: IDL.Func(
      [IDL.Text],
      [IDL.Variant({ Ok: IDL.Bool, Err: IDL.Text })],
      ['query'],
    ),
    update_content: IDL.Func(
      [
        IDL.Nat64,
        IDL.Text,
        IDL.Vec(IDL.Text),
        IDL.Opt(IDL.Bool),
        IDL.Opt(IDL.Bool),
        IDL.Opt(UpdatePoll),
      ],
      [ActionResultContent],
      ['query'],
    ),
    update_email_identities: IDL.Func(
      [IDL.Vec(IDL.Tuple(IDL.Principal, Identity))],
      [EmptySocietyRsResult],
      ['query'],
    ),
    update_global_root_store: IDL.Func(
      [IDL.Text, IDL.Nat64, IDL.Nat64],
      [],
      ['query'],
    ),
    update_portal: IDL.Func([UpdatePortal], [ActionResultPortal], ['query']),
    update_portal_icon: IDL.Func(
      [UpdatePortalIcon],
      [ActionResultPortal],
      ['query'],
    ),
    update_portal_info_cover_photo: IDL.Func(
      [IDL.Nat64, IDL.Opt(IDL.Text)],
      [ActionResultPortal],
      ['query'],
    ),
    update_portal_info_links: IDL.Func(
      [IDL.Nat64, IDL.Vec(Link)],
      [ActionResultPortal],
      ['query'],
    ),
    update_portal_info_rules: IDL.Func(
      [IDL.Nat64, IDL.Opt(IDL.Vec(PortalRule))],
      [ActionResultPortal],
      ['query'],
    ),
    update_portal_pinned_posts: IDL.Func(
      [IDL.Nat64, IDL.Vec(IDL.Nat64)],
      [EmptySocietyRsResult],
      ['query'],
    ),
    update_portal_role: IDL.Func(
      [UpdatePortalRole],
      [ActionResultPortalRole],
      ['query'],
    ),
    update_portal_role_ordinals: IDL.Func(
      [IDL.Nat64, IDL.Vec(IDL.Tuple(IDL.Nat64, IDL.Nat64))],
      [ActionResultUpdatePortalRoleOrdinal],
      ['query'],
    ),
    update_post_queue: IDL.Func(
      [IDL.Nat64, IDL.Bool],
      [PortalModerationViewResult],
      ['query'],
    ),
    update_post_queue_auto_approve: IDL.Func(
      [IDL.Nat64, IDL.Bool, IDL.Opt(IDL.Nat64)],
      [PortalModerationViewResult],
      ['query'],
    ),
    update_registry: IDL.Func(
      [IDL.Principal, IDL.Vec(IDL.Tuple(IDL.Text, IDL.Vec(IDL.Nat64)))],
      [],
      ['query'],
    ),
    update_social_presence: IDL.Func(
      [IDL.Vec(SocialProfile)],
      [ActionResultUserSelf],
      ['query'],
    ),
    update_user_cover_photo: IDL.Func(
      [IDL.Opt(IDL.Text)],
      [ActionResultUserSelf],
      ['query'],
    ),
    update_user_email: IDL.Func(
      [UpdateUserEmail],
      [ActionResultUserSelf],
      ['query'],
    ),
    update_user_pinned_posts: IDL.Func(
      [IDL.Vec(IDL.Nat64)],
      [EmptySocietyRsResult],
      ['query'],
    ),
    update_username: IDL.Func(
      [UpdateUsername],
      [ActionResultUserSelf],
      ['query'],
    ),
    update_wallet_type: IDL.Func(
      [IDL.Principal, IdentityWalletType],
      [],
      ['query'],
    ),
    user_search: IDL.Func([IDL.Text], [IDL.Vec(UserListItemView)], ['query']),
    user_set_profile_icon: IDL.Func(
      [IDL.Opt(UpdateUserProfileIcon)],
      [IDL.Opt(UserSelfView)],
      ['query'],
    ),
    user_set_profile_v2: IDL.Func(
      [UpdateUserProfileV2],
      [IDL.Opt(UserSelfView)],
      ['query'],
    ),
    user_set_settings_v2: IDL.Func(
      [UserSettingsView],
      [SetUserSettingsResult],
      ['query'],
    ),
    user_wallet_pair_dscvr: IDL.Func(
      [IDL.Principal],
      [IDL.Opt(UserWallet)],
      ['query'],
    ),
    user_wallet_pair_foreign: IDL.Func(
      [UserWalletKind, IDL.Principal],
      [IDL.Opt(UserWallet)],
      ['query'],
    ),
    verify_app_transaction: IDL.Func(
      [VerifyAppTransactionRequest],
      [VerifyAppTransactionResult],
      ['query'],
    ),
    verify_email_token: IDL.Func(
      [IDL.Text],
      [EmailVerificationEmptyResult],
      ['query'],
    ),
    verify_identity: IDL.Func(
      [IDL.Vec(IDL.Nat8)],
      [VerifyIdentityResponse],
      ['query'],
    ),
    verify_password_reset_token: IDL.Func(
      [IDL.Principal, IDL.Text],
      [PasswordResetEmptyResult],
      ['query'],
    ),
    verify_phone: IDL.Func(
      [IDL.Principal, IDL.Text],
      [IDL.Variant({ Ok: IDL.Bool, Err: IDL.Text })],
      ['query'],
    ),
    vote_content: IDL.Func(
      [IDL.Nat64, IDL.Int64],
      [ActionResultContent],
      ['query'],
    ),
  });
};
export const init = ({ IDL }) => {
  return [];
};