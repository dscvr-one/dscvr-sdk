import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export type ActionKind =
  | { Post: null }
  | { Comment: null }
  | { React: null }
  | { Upvote: null };
export interface ActionLimits {
  time_period: bigint;
  enabled: boolean;
  limits: Array<[ActionKind, { limit: bigint; new_user_limit: bigint }]>;
}
export interface ActionResultBanUser {
  status: string;
  result: [] | [UserBan];
  errors: [] | [Array<ValidationErrors>];
  message: string;
  error_code: [] | [SocietyRsError];
}
export interface ActionResultContent {
  status: string;
  result: [] | [ContentView];
  errors: [] | [Array<ValidationErrors>];
  message: string;
  error_code: [] | [SocietyRsError];
}
export interface ActionResultGetContent {
  status: string;
  result: [] | [Array<ContentView>];
  message: string;
  error_code: [] | [SocietyRsError];
}
export interface ActionResultGetContentPaged {
  status: string;
  result: [] | [ContentViewPage];
  message: string;
  error_code: [] | [SocietyRsError];
}
export interface ActionResultPairPlatform {
  status: string;
  result: [] | [UserPlatformPair];
  errors: [] | [Array<ValidationErrors>];
  message: string;
  error_code: [] | [SocietyRsError];
}
export interface ActionResultPortal {
  status: string;
  result: [] | [PortalView];
  errors: [] | [Array<ValidationErrors>];
  message: string;
  error_code: [] | [SocietyRsError];
}
export interface ActionResultPortalRole {
  status: string;
  result: [] | [RoleView];
  errors: [] | [Array<ValidationErrors>];
  message: string;
  error_code: [] | [SocietyRsError];
}
export interface ActionResultPortalSearch {
  status: string;
  result: [] | [PortalSearchResult];
  errors: [] | [Array<ValidationErrors>];
  message: string;
}
export interface ActionResultPortals {
  status: string;
  result: [] | [Array<PortalView>];
  errors: [] | [Array<ValidationErrors>];
  message: string;
  error_code: [] | [SocietyRsError];
}
export type ActionResultPreUpgrade =
  | { Ok: PreUpgradeSuccessStatus }
  | { Err: PreUpgradeFailureStatus };
export interface ActionResultReport {
  status: string;
  result: [] | [ReportView];
  errors: [] | [Array<ValidationErrors>];
  message: string;
  error_code: [] | [SocietyRsError];
}
export type ActionResultSaveSnapshot = { Ok: null } | { Err: string };
export interface ActionResultUpdatePortalRoleOrdinal {
  status: string;
  result: [] | [Array<RoleView>];
  errors: [] | [Array<ValidationErrors>];
  message: string;
  error_code: [] | [SocietyRsError];
}
export interface ActionResultUser {
  status: string;
  result: [] | [UserView];
  errors: [] | [Array<ValidationErrors>];
  message: string;
  error_code: [] | [SocietyRsError];
}
export interface ActionResultUserSearch {
  status: string;
  result: [] | [UserSearchResult];
  errors: [] | [Array<ValidationErrors>];
  message: string;
}
export interface ActionResultUserSelf {
  status: string;
  result: [] | [UserSelfView];
  errors: [] | [Array<ValidationErrors>];
  message: string;
  error_code: [] | [SocietyRsError];
}
export interface ActiveStreakWindow {
  start_day: number;
  total_points_this_streak: bigint;
  next_claim_day: number;
  lifetime_longest_streak: [] | [number];
  lifetime_airdrop_multipliers: [] | [number];
  airdrop_multiplier_this_streak: number;
  rewards: BigUint64Array | bigint[];
  next_claim_at: bigint;
}
export type ActiveStreakWindowResult =
  | { Ok: ActiveStreakWindow }
  | { Err: string };
export type AdminUpdateDailyRewardAmountsResult =
  | {
      Ok: BigUint64Array | bigint[];
    }
  | { Err: string };
export type AnalyticsTable =
  | { UserStreaksAirdropMultipliers: null }
  | { IdentityOauth: null }
  | { ContentTags: null }
  | { UserStreaksDailyRewards: null }
  | { MultiChainNFTs: null }
  | { ContentSince: bigint }
  | { UserPlatformPairs: null }
  | { IdentityWallet: null }
  | { IdentityUsername: null }
  | { Users: null }
  | { UserWallets: null }
  | { PollVotes: null }
  | { Portals: null }
  | { IdentityEmail: null }
  | { Polls: null }
  | { PollChoices: null }
  | { GovernanceWallets: null }
  | { UserRankings: bigint }
  | { PortalLinks: null }
  | { UserFollowers: null }
  | { ContentReactionCounts: null }
  | { UserSocialPresence: null }
  | { UserStreaks: null }
  | { ContentAwards: null }
  | { UserPortalHighlights: null }
  | { UsersSince: bigint }
  | { Awards: null }
  | { PortalMembers: null }
  | { UserPinnedPosts: null }
  | { PortalMemberRoles: null }
  | { PhantomRewards: null }
  | { UserMeta: null }
  | { PortalCoverPhoto: null }
  | { Content: null }
  | { PortalRoles: null }
  | { InternetComputerNFTs: null }
  | { PortalRules: null }
  | { ContentReactions: null };
export type ApiNotificationType =
  | { CommentMention: ContentMention }
  | { CommentReply: ContentReply }
  | { PostReaction: Reaction }
  | { PostReply: ContentReply }
  | { CommentAward: ContentAward }
  | { Follower: null }
  | { PostAward: ContentAward }
  | { PostMention: ContentMention }
  | { CommentReaction: Reaction };
export interface AppGroupNotificationPayload {
  ids: [] | [BigUint64Array | bigint[]];
  total_notifiers: [] | [bigint];
  recent_notifiers: [] | [Array<GroupNotificationRecentNotifier>];
}
export type AppNotificationChannel =
  | { App: null }
  | { Email: null }
  | { Push: null };
export interface AppNotificationPage {
  page_size: bigint;
  notifications: Array<AppNotificationPayload>;
  num_pages: bigint;
  page: bigint;
}
export interface AppNotificationPayload {
  notifier_icon_url: [] | [string];
  read_at: [] | [bigint];
  body: [] | [string];
  notification_group: [] | [AppGroupNotificationPayload];
  created_at: bigint;
  notification_id: bigint;
  notification_type: ApiNotificationType;
  notifier: [] | [string];
  notifier_nft: [] | [NFTView];
}
export interface AppNotificationSettings {
  streak_reminders: Array<AppNotificationChannel>;
  comments_replies: Array<AppNotificationChannel>;
  awards: Array<AppNotificationChannel>;
  shares_reposts: Array<AppNotificationChannel>;
  mentions: Array<AppNotificationChannel>;
  likes_reactions: Array<AppNotificationChannel>;
  new_followers: Array<AppNotificationChannel>;
}
export type AppNotificationType =
  | { CommentMention: null }
  | { CommentReply: null }
  | { PostReaction: null }
  | { PostReply: null }
  | { CommentAward: null }
  | { Follower: null }
  | { PostAward: null }
  | { PostMention: null }
  | { CommentReaction: null };
export interface AppReport {
  reported_other: bigint;
  rejected: bigint;
  proceeded: bigint;
  reported_malicious: bigint;
}
export interface AppReportView {
  url: string;
  report: AppReport;
}
export interface AwardMeta {
  name: string;
  icon_url: string;
}
export interface AwardView {
  id: bigint;
  cost: bigint;
  name: string;
  icon_url: string;
}
export interface BackdoorPhantomSetupDataParams {
  set_number_of_unique_losing_messages: [] | [number];
  reward_amounts: [] | [Uint8Array | number[]];
  clear_user_delay: [] | [Principal];
  claim_delay_in_seconds: [] | [bigint];
  odds_of_winning: [] | [bigint];
}
export interface BackdoorSetupDataParams {
  streak_count: number;
  streak_claimable_in_secs: bigint;
}
export interface BackdoorStreakReset {
  streak_count: number;
  user: Principal;
}
export interface BackupPoll {
  id: bigint;
  is_public: boolean;
  title: string;
  cost: bigint;
  content_id: bigint;
  kind: PollKind;
  created_at: bigint;
  choices: Array<BackupPollChoice>;
  expires_at: bigint;
  user_votes: Array<[bigint, Array<[Principal, bigint]>]>;
}
export interface BackupPollChoice {
  id: bigint;
  text: string;
  ordinal: bigint;
}
export type BoolResult = { Ok: boolean } | { Err: string };
export interface Canister {
  id: Principal;
  name: string;
  version: bigint;
  registry: Array<[string, BigUint64Array | bigint[]]>;
}
export type CanvasAction =
  | { Proceeded: null }
  | { Rejected: null }
  | { Reported: [] | [ReportedTransactionReason] };
export type CanvasInteractionError =
  | { ContentOrAppNotFound: null }
  | { SocietyRsError: SocietyRsError };
export type CanvasInteractionResult =
  | { Ok: null }
  | { Err: [] | [CanvasInteractionError] };
export type ChainType = { InternetComputer: null } | { Solana: null };
export type ChainTypeResult = { Ok: [] | [ChainType] } | { Err: string };
export type ContentAction =
  | { ContentRemoved: null }
  | { ContentReinstated: null }
  | { ContentEdited: ContentEditedAction }
  | { ContentDenied: null }
  | { ContentApproved: null }
  | { ContentReQueued: null };
export interface ContentActionFeedQuery {
  page_size: bigint;
  moderator_filter: [] | [Array<Principal>];
  action_filter: [] | [Array<ContentActionType>];
  portal_id: number;
  page: bigint;
}
export type ContentActionFilter = { Moderator: Array<Principal> };
export type ContentActionHistoryFeedResult =
  | {
      Ok: ContentActionHistoryPage;
    }
  | { Err: SocietyRsError };
export interface ContentActionHistoryPage {
  page: bigint;
  total_pages: bigint;
  actions: Array<ContentActionHistoryView>;
}
export interface ContentActionHistoryView {
  action_id: bigint;
  action: [] | [ContentActionType];
  content: ContentView;
  moderator: [] | [UserView];
  timestamp: bigint;
}
export interface ContentActionPageView {
  page_size: bigint;
  page: bigint;
  total_pages: bigint;
  actions: Array<ContentActionView>;
}
export type ContentActionPageViewResult =
  | { Ok: ContentActionPageView }
  | { Err: [] | [SocietyRsError] };
export interface ContentActionPagedQuery {
  page_size: bigint;
  portal_id: bigint;
  page: bigint;
  filter: [] | [ContentActionFilter];
}
export type ContentActionType =
  | { Reinstated: null }
  | { Approved: null }
  | { Denied: null }
  | { ReQueued: null }
  | { Removed: null };
export interface ContentActionView {
  id: bigint;
  action: [] | [ContentAction];
  content: [] | [ContentView];
  moderator: [] | [UserView];
  timestamp: bigint;
}
export interface ContentAward {
  title: string;
  award: AwardMeta;
  content_id: bigint;
  root_parent_id: [] | [bigint];
}
export interface ContentEditPayload {
  title: string;
  body: string;
  nsfw: boolean;
  tags: Array<string>;
  comments_disabled: boolean;
}
export interface ContentEditedAction {
  post_edit: ContentEditPayload;
  pre_edit: ContentEditPayload;
}
export interface ContentMention {
  title: string;
  content_id: bigint;
  root_parent_id: [] | [bigint];
}
export interface ContentQuery {
  max_grand_children_per_level: [] | [number];
  content_id: bigint;
  sort: ContentSort;
  thread_start: bigint;
  since: [] | [bigint];
  thread_size: bigint;
  max_grand_child_depth: [] | [number];
}
export type ContentReaction =
  | { Sad: null }
  | { Wow: null }
  | { Care: null }
  | { Clap: null }
  | { Fire: null }
  | { HaHa: null }
  | { Like: null }
  | { Dislike: null }
  | { Angry: null };
export interface ContentReply {
  title: string;
  content_id: bigint;
  root_parent_id: [] | [bigint];
  comment_id: bigint;
}
export type ContentSort =
  | { OP: null }
  | { New: null }
  | { Old: null }
  | { Live: null }
  | { Default: null }
  | { VerifiedPfp: null };
export type ContentStatus =
  | { Approved: null }
  | { Denied: null }
  | { Pending: null };
export type ContentStatusFilter = { Denied: null } | { Pending: null };
export interface ContentTreeView {
  id: bigint;
  url: string;
  upvotes: bigint;
  is_nsfw: boolean;
  status: [] | [ContentStatus];
  title: string;
  updated_at: bigint;
  deleted: [] | [boolean];
  is_pinned: boolean;
  owner: UserView;
  disable_comments: [] | [boolean];
  body: string;
  owner_color: number;
  lang: string;
  perm: bigint;
  tags: Array<Tag>;
  content_type: string;
  created_at: bigint;
  children: Array<ContentTreeView>;
  is_mod: boolean;
  parent_id: [] | [bigint];
  icon_url: string;
  reaction_counts: Array<[ContentReaction, bigint]>;
  owner_id: Principal;
  children_count: bigint;
  downvotes: bigint;
  is_author_pinned: boolean;
  is_reactor: [] | [ContentReaction];
  is_upvoter: boolean;
  owner_roles: BigUint64Array | bigint[];
  removed: [] | [boolean];
  is_downvoter: boolean;
  portal: PortalInfoView;
}
export interface ContentTreeViewPage {
  page_size: bigint;
  views: Array<ContentTreeView>;
  page: bigint;
  total_pages: bigint;
}
export type ContentTreeViewPageResult =
  | { Ok: ContentTreeViewPage }
  | { Err: [] | [SocietyRsError] };
export interface ContentView {
  id: bigint;
  url: string;
  upvotes: bigint;
  is_nsfw: boolean;
  status: [] | [ContentStatus];
  title: string;
  deleted: [] | [boolean];
  app_reports: [] | [Array<AppReportView>];
  is_pinned: boolean;
  owner: UserView;
  disable_comments: [] | [boolean];
  body: string;
  parent_content: [] | [ContentView];
  owner_color: number;
  lang: string;
  frame_interaction_friends: Array<UserView>;
  perm: bigint;
  poll: [] | [PollView];
  tags: Array<Tag>;
  content_type: string;
  created_at: bigint;
  post_awards: Array<PostAwardView>;
  is_mod: boolean;
  parent_id: [] | [bigint];
  icon_url: string;
  reaction_counts: Array<[ContentReaction, bigint]>;
  owner_id: Principal;
  children_count: bigint;
  downvotes: bigint;
  is_author_pinned: boolean;
  frame_interaction_count: bigint;
  root_parent_content: [] | [ContentView];
  relevant_children: Array<ContentView>;
  is_reactor: [] | [ContentReaction];
  friends: Array<UserView>;
  is_upvoter: boolean;
  owner_roles: BigUint64Array | bigint[];
  removed: [] | [boolean];
  is_downvoter: boolean;
  portal: PortalInfoView;
}
export interface ContentViewPage {
  page_size: bigint;
  contents: Array<ContentView>;
  page: bigint;
  total_pages: bigint;
}
export type ContentViewPagedResult =
  | { Ok: ContentViewPage }
  | { Err: [] | [SocietyRsError] };
export interface CreateAwardRequest {
  weight: bigint;
  cost: bigint;
  name: string;
  purchasable: boolean;
  icon_url: string;
}
export interface CreateContent {
  url: string;
  is_nsfw: boolean;
  title: string;
  portal_id: [] | [bigint];
  disable_comments: [] | [boolean];
  body: string;
  lang: string;
  poll: [] | [CreatePoll];
  tags: Array<string>;
  content_type: string;
  parent_id: [] | [bigint];
  icon_url: string;
}
export interface CreateICPUser {
  username: string;
  auth_token: string;
  meta: [] | [Array<[string, string]>];
  email: [] | [string];
  referral_code: [] | [string];
  portal_slug: [] | [string];
  primary_chain: [] | [ChainType];
  referring_username: [] | [string];
}
export interface CreatePaymentLinkRequest {
  success_url: string;
  quantity: bigint;
  failure_url: string;
}
export interface CreatePoll {
  days: bigint;
  kind: PollKind;
  choices: Array<string>;
}
export interface CreatePortal {
  is_nsfw: boolean;
  name: string;
  slug: string;
  description: string;
  icon_url: string;
}
export interface CreatePortalRole {
  permissions: bigint;
  name: string;
  color: number;
  ordinal: bigint;
  icon_url: string;
}
export interface CreateProvisionalUser {
  id: Principal;
  identity: [] | [Identity];
}
export type CreateProvisionalUserErrorType =
  | {
      UserExistsForPrincipal: null;
    }
  | { MissingIdentity: null }
  | { UsernameExists: null }
  | { InvalidUsername: null }
  | { ProvisionalUserExistsForPrincipal: null };
export type CreateProvisionalUserResult =
  | { Ok: null }
  | { Err: [] | [CreateProvisionalUserErrorType] };
export interface CreateReport {
  report_type: string;
  content_id: bigint;
  message: string;
}
export interface CreditInfo {
  payload_id: string;
  award_reason: CurrencyAwardReason;
  payload_version: number;
  payload: Uint8Array | number[];
}
export interface CreditTransactionRequest {
  payload_id: string;
  award_reason: [] | [CurrencyAwardReason];
  user_id: Principal;
  payload_version: number;
  amount: bigint;
  payload: Uint8Array | number[];
}
export type CsvResult = { Ok: string } | { Err: string };
export type CurrencyAwardReason = { SpherePay: null };
export interface CurrencyTransaction {
  request_id: bigint;
  user_id: Principal;
  tx_type: CurrencyTransactionType;
  amount: bigint;
}
export type CurrencyTransactionType =
  | { Debit: DebitInfo }
  | { Credit: CreditInfo };
export type DataFormatType =
  | { MsgPack: null }
  | { Bincode: null }
  | { Unknown: null };
export interface DebitInfo {
  reason: DebitReason;
}
export type DebitReason = { PostBoost: null };
export interface EmailMessagingSettings {
  marketing: boolean;
}
export type EmailVerificationEmptyResult =
  | { Ok: null }
  | { Err: [] | [EmailVerificationError] };
export type EmailVerificationError =
  | { SocietyRsError: SocietyRsError }
  | { TokenError: TokenError }
  | { EmailNotSet: null }
  | { EmailAlreadyVerified: null };
export type EmptyResult = { Ok: null } | { Err: string };
export type EmptySocietyRsResult =
  | { Ok: null }
  | { Err: [] | [SocietyRsError] };
export type EncryptionError =
  | { NonceError: null }
  | { EncryptionError: null }
  | { DecryptionError: null };
export type ExplorePortalSort =
  | { NameAscending: null }
  | { NameDescending: null }
  | { MemberCountAscending: null }
  | { MemberCountDescending: null };
export interface FailureStatus {
  error_msg: string;
  processed_at: bigint;
}
export type FrameInteractionError =
  | { InvalidFrameAction: null }
  | { SocietyRsError: SocietyRsError }
  | { ContentOrFrameNotFound: null };
export type FrameInteractionResult =
  | { Ok: null }
  | { Err: [] | [FrameInteractionError] };
export interface GenerateSparksNonceRequest {
  meta: [] | [Array<[string, string]>];
  user_id: Principal;
  app_id: string;
  amount: bigint;
}
export type GetGlobalLiveDataResult = { Ok: GlobalLiveData } | { Err: string };
export interface GetPortalMemberPage {
  members: Array<MemberListItemView>;
  page: bigint;
  total_members: bigint;
  pages: bigint;
}
export type GetPortalMemberV2Result =
  | { Ok: GetPortalMemberPage }
  | { Err: [] | [SocietyRsError] };
export interface GlobalLiveData {
  streak_count: bigint;
  api_version: number;
  tokens: bigint;
  phantom_claimable_at: bigint;
  igc_holdings: bigint;
  unread_notification_count: bigint;
}
export type GovernanceAction =
  | { DeletePortalRole: null }
  | { UpdatePortalInfoRules: null }
  | { AddMemberRole: null }
  | { RemoveMemberRole: null }
  | { UpdatePortalInfoLinks: null }
  | { AddPortalRole: null }
  | { UpdatePortalInfoCoverPhoto: null };
export type GovernanceActionResult = { Success: null } | { Failure: string };
export interface GovernanceDetails {
  approved_count: bigint;
  poll_result: GovernanceResult;
  abstained_count: bigint;
  opposed_count: bigint;
  action_result: [] | [Array<[GovernanceActionResult, GovernanceResult]>];
}
export interface GovernancePoll {
  poll: BackupPoll;
  actions: Array<[GovernanceAction, Uint8Array | number[]]>;
  details: [] | [GovernanceDetails];
}
export type GovernanceResult = { Approved: null } | { Rejected: null };
export type GroupAppNotificationType =
  | { CommentReply: null }
  | { PostReaction: null }
  | { PostReply: null }
  | { CommentReaction: null };
export interface GroupNotificationRecentNotifier {
  nft: [] | [NFTView];
  name: [] | [string];
  icon_url: [] | [string];
}
export type Identity =
  | { Email: IdentityEmail }
  | { OAuth: IdentityOAuth }
  | { Wallet: IdentityWallet }
  | { Username: string };
export interface IdentityEmail {
  verified: boolean;
  provider: [] | [string];
  email: string;
}
export type IdentityOAuth = { WorldCoin: string };
export interface IdentityWallet {
  key: Uint8Array | number[];
  networks: Array<[] | [IdentityWalletNetworkType]>;
  chain: [] | [IdentityWalletChainType];
  kind: [] | [IdentityWalletType];
}
export type IdentityWalletChainType =
  | { Evm: null }
  | { Solana: null }
  | { Bitcoin: null };
export type IdentityWalletNetworkType =
  | { Ethereum: null }
  | { Solana: null }
  | { Bitcoin: null }
  | { Polygon: null };
export type IdentityWalletType =
  | { Metamask: null }
  | { Sollet: null }
  | { SolletExtension: null }
  | { Trustwallet: null }
  | { Coinbase: null }
  | { Phantom: null }
  | { Solflare: null }
  | { Backpack: null };
export interface InternetComputerNFT {
  nft_id: string;
  canister_id: Principal;
}
export interface Link {
  href: string;
}
export type LogAppTransactionError = {
  SocietyRsError: [] | [SocietyRsError];
};
export interface LogAppTransactionRequest {
  action: CanvasAction;
  tx_id: [] | [string];
  app_url: string;
  validator_request_id: string;
}
export type LogAppTransactionResponse =
  | { Ok: null }
  | { Err: [] | [LogAppTransactionError] };
export type MemberFilterOrder = { Descending: null } | { Ascending: null };
export type MemberKind =
  | { Left: null }
  | { Approved: null }
  | { Banned: null }
  | { Kicked: null }
  | { Pending: null };
export interface MemberListItemView {
  id: bigint;
  status: MemberKind;
  user: UserListItemView;
  created_at: bigint;
  user_id: Principal;
  roles: Array<RoleListItemView>;
}
export interface MemberListWalletView {
  id: bigint;
  status: MemberKind;
  user: UserListWalletView;
  created_at: bigint;
  user_id: Principal;
  roles: Array<RoleListMicroItemView>;
}
export interface MemberSearchResult {
  id: Principal;
  username: string;
  display_nft: [] | [NFTView];
  rights: bigint;
}
export interface MemberView {
  id: bigint;
  status: MemberKind;
  portal_id: bigint;
  user: UserListItemView;
  created_at: bigint;
  user_id: Principal;
  roles: Array<RoleView>;
}
export type MetaType =
  | { Image: string }
  | { Model: string }
  | { Audio: string }
  | { Other: string }
  | { Video: string };
export interface MultiChainNFTRequest {
  meta_type: [] | [MetaType];
  nft_id: [] | [string];
  token_id: [] | [string];
  chain: [] | [NFTChainType];
  last_verified: bigint;
  contract_address: string;
}
export interface MultiChainUpdate {
  nft: MultiChainNFTRequest;
  owner: [] | [Principal];
}
export type MultiChainUpdateResponse =
  | { Ok: null }
  | { Err: NFTConversionError };
export interface NFT {
  id: bigint;
  kind: NFTKind;
  meta: string;
  created_at: bigint;
}
export type NFTChainType =
  | { InternetComputer: null }
  | { Ethereum: null }
  | { Solana: null }
  | { Polygon: null }
  | { Optimism: null }
  | { Arbitrum: null };
export type NFTConversionError =
  | { MissingChainType: null }
  | { InvalidChainType: string }
  | { MissingMetaType: null };
export interface NFTKind {
  nft_id: string;
  canister_id: Principal;
}
export type NFTKindV2 =
  | { InternetComputer: InternetComputerNFT }
  | { MultiChain: MultiChainNFTRequest };
export interface NFTUpdateView {
  kind: [] | [NFTKindV2];
  meta: [] | [string];
}
export interface NFTView {
  chain: [] | [NFTChainType];
  meta: string;
  is_owner: boolean;
}
export interface NonceDetail {
  app_id: string;
  amount: bigint;
}
export type NonceDetailResult =
  | { Ok: NonceDetail }
  | { Err: [] | [SocietyRsError] };
export type NonceStatus = { Failed: FailureStatus } | { Successful: bigint };
export interface NotificationPageQuery {
  include_types: [] | [Array<AppNotificationType>];
  page_size: bigint;
  page: bigint;
  grouping_enabled: [] | [boolean];
}
export type NotificationResult = { Ok: UserNotifications } | { Err: string };
export type OptionalBytesResult =
  | { Ok: [] | [Uint8Array | number[]] }
  | { Err: string };
export interface PagedQuery {
  page_size: bigint;
  lang: string;
  page: bigint;
  sort: Sort;
  query: [] | [string];
  filter: string;
  chain_filter: [] | [ChainType];
  max_age: [] | [bigint];
}
export type PasswordResetEmptyResult =
  | { Ok: null }
  | { Err: [] | [PasswordResetError] };
export type PasswordResetError =
  | { EmailNotVerified: null }
  | { SocietyRsError: SocietyRsError }
  | { TokenError: TokenError };
export interface PersonalizedFeedV1Parameters {
  max_comment_depth: bigint;
  upvote_weight: number;
  include_top_users: [] | [boolean];
  following_upvote_weight: number;
  following_upvote_degree_penalty: number;
  award_age_multiplier: [] | [number];
  profile_posts_weight: [] | [number];
  following_comment_degree_penalty: number;
  following_comment_weight: number;
  include_portals: boolean;
  freshness_weight: [] | [number];
  relevant_comment_count: number;
  portal_admin_posts_weight: [] | [number];
  max_follower_degrees: bigint;
  show_caller_posts: [] | [boolean];
  award_upvote_multiplier: [] | [bigint];
}
export interface PersonalizedFeedV1Query {
  parameters: PersonalizedFeedV1Parameters;
  query: PagedQuery;
}
export interface PhantomClaimRequest {
  signature: string;
  wallet_public_key: string;
}
export interface PhantomReward {
  id: bigint;
  reward: [] | [bigint];
  loss_message: [] | [number];
  timestamp: bigint;
}
export type PhantomRewardResult =
  | { Ok: PhantomReward }
  | { Err: [] | [SocietyRsError] };
export interface PollChoiceView {
  id: bigint;
  text: string;
  ordinal: bigint;
  total_votes: bigint;
}
export interface PollEvent {
  portal_id: bigint;
  content_id: bigint;
}
export type PollKind =
  | { NFT: null }
  | { Text: null }
  | { Traditional: null }
  | { Quadratic: null };
export interface PollView {
  id: bigint;
  is_public: boolean;
  title: string;
  cost: bigint;
  content_id: bigint;
  kind: PollKind;
  vote_choice_ids: BigUint64Array | bigint[];
  created_at: bigint;
  voting_tokens: bigint;
  total_votes: bigint;
  choices: Array<PollChoiceView>;
  expires_at: bigint;
}
export interface PortalHiglights {
  ordinals: Array<UserPortalHighlight>;
  portals: Array<PortalView>;
}
export interface PortalInfo {
  cover_photo: [] | [string];
  links: Array<Link>;
  rules: [] | [Array<PortalRule>];
}
export interface PortalInfoView {
  id: bigint;
  is_nsfw: boolean;
  owner: [] | [UserView];
  name: string;
  perm: [] | [bigint];
  slug: string;
  icon_url: string;
  portal_type: PortalType;
}
export interface PortalInvite {
  slug: string;
  referral_code: string;
}
export type PortalMemberAddResult =
  | { Ok: MemberListItemView }
  | { Err: string };
export interface PortalMemberQuery {
  filter_order: [] | [MemberFilterOrder];
  includes_roles: boolean;
  page_size: bigint;
  role_ids: BigUint64Array | bigint[];
  portal_id: bigint;
  username_filter: [] | [string];
  page_start: bigint;
}
export interface PortalMemberView {
  member: MemberView;
  portal: PortalView;
}
export interface PortalModerationView {
  id: bigint;
  post_queue_auto_approve_default_time: bigint;
  post_queue_enabled: boolean;
  post_queue_auto_approve_enabled: boolean;
}
export type PortalModerationViewResult =
  | { Ok: PortalModerationView }
  | { Err: [] | [SocietyRsError] };
export interface PortalRule {
  desc: string;
  name: string;
}
export interface PortalSearchQuery {
  sort_by: [] | [PortalSortBy];
  page_size: bigint;
  page: bigint;
  query: string;
  chain_filter: [] | [ChainType];
  sort_direction: [] | [SortDirection];
}
export interface PortalSearchResult {
  page_size: bigint;
  page: bigint;
  total_pages: bigint;
  items: Array<PortalView>;
}
export type PortalSortBy =
  | { MemberCount: null }
  | { Name: null }
  | { Levenshtein: null }
  | { ContentCount: null };
export type PortalType = { Portal: null } | { User: null };
export interface PortalView {
  id: bigint;
  is_following: boolean;
  is_highlighted: boolean;
  is_nsfw: boolean;
  owner: UserView;
  info: [] | [PortalInfo];
  name: string;
  perm: bigint;
  slug: string;
  description: string;
  created_at: bigint;
  is_mod: boolean;
  icon_url: string;
  portal_type: [] | [PortalType];
  owner_id: Principal;
  member_count: bigint;
  content_count: bigint;
  requires_phone: boolean;
}
export interface PortalViewPaged {
  page_size: bigint;
  views: Array<PortalView>;
  page: bigint;
  total_pages: bigint;
}
export interface PortalViewPagedQuery {
  page_size: bigint;
  page: bigint;
  sort: ExplorePortalSort;
  highlighted: boolean;
}
export interface PostAwardView {
  award_view: AwardView;
  count: bigint;
}
export type PostQueueAction = { Approve: null } | { Deny: null };
export type PostQueueActionResult =
  | { Ok: ContentView }
  | { Err: [] | [SocietyRsError] };
export interface PostQueuePagedQuery {
  page_size: bigint;
  portal_id: bigint;
  status_filter: [] | [ContentStatusFilter];
  page: bigint;
}
export type PreUpgradeFailureStatus = { Unauthorized: null };
export type PreUpgradeSuccessStatus = { Finished: null } | { InProgress: null };
export type ProcessedNonceFilter =
  | { SucceededOnOrAfter: bigint }
  | { CreatedOnOrAfter: bigint }
  | { Unprocessed: null }
  | { FailedOnOrAfter: bigint };
export interface RandomizedRecommendationQuery {
  filter_tags: [] | [Array<string>];
  count: number;
  content_preset: [] | [ChainType];
}
export interface Reaction {
  title: string;
  content_id: bigint;
  root_parent_id: [] | [bigint];
  reaction: ContentReaction;
}
export type ReadNotificationsResult =
  | { Ok: BigUint64Array | bigint[] }
  | { Err: string };
export interface ReferralCapacitorView {
  next_token_tier: bigint;
  tokens_earned: bigint;
  multiplier_count: bigint;
}
export interface ReferralCommunityPaged {
  page_size: bigint;
  page: bigint;
  total_pages: bigint;
  referrals: Array<ReferralRewardView>;
  capacitor: ReferralCapacitorView;
}
export interface ReferralCommunityQuery {
  page_size: bigint;
  page: bigint;
  sort: [] | [ReferralCommunitySort];
}
export type ReferralCommunitySort = { Name: null } | { Rewards: null };
export type ReferralResult = { Ok: string } | { Err: string };
export interface ReferralRewardView {
  points_earned_from: bigint;
  referral: UserView;
}
export type RegisterNonceResult =
  | { Ok: string }
  | { Err: [] | [SocietyRsError] };
export interface ReportView {
  id: bigint;
  read_at: bigint;
  action: string;
  content: ContentView;
  actor: [] | [UserView];
  report_type: string;
  content_id: bigint;
  actor_id: Principal;
  created_at: bigint;
  message: string;
  actioned_at: bigint;
  reporter_id: Principal;
  reader_id: Principal;
  reporter: UserView;
  reader: [] | [UserView];
}
export type ReportedTransactionReason =
  | { Custom: string }
  | { Malicious: string };
export type ReverseContentActionResult =
  | { Ok: ContentActionView }
  | { Err: [] | [SocietyRsError] };
export interface RevocableToken {
  token: string;
  expiration: bigint;
  nonce: Uint8Array | number[];
}
export type RewardReason =
  | { Ubi: null }
  | { ContentVote: RewardReasonVoteType }
  | { TokenGift: null }
  | { DailyStreak: null }
  | { ReferralReward: null };
export type RewardReasonVoteType =
  | { PostCreator: null }
  | { CommentParent: null }
  | { PostPortalOwner: null }
  | { CommentCreator: null }
  | { CommentPortalOwner: null }
  | { CommentRootParent: null };
export type RoleKind =
  | { Default: null }
  | { Custom: null }
  | { Everyone: null };
export interface RoleListItemView {
  id: bigint;
  kind: RoleKind;
  name: string;
  color: number;
  ordinal: bigint;
}
export interface RoleListMicroItemView {
  id: bigint;
  name: string;
}
export interface RoleView {
  id: bigint;
  permissions: bigint;
  kind: RoleKind;
  name: string;
  color: number;
  ordinal: bigint;
  icon_url: string;
  member_count: bigint;
  is_locked: boolean;
}
export interface RootParentContentView {
  id: bigint;
  title: string;
  owner: UserView;
  owner_id: Principal;
  portal: PortalInfoView;
}
export interface ScanIdentity {
  id: Principal;
  auth_type: string;
}
export interface ServiceController {
  kind: ServiceControllerKind;
  created_at: bigint;
}
export type ServiceControllerKind =
  | { Mod: null }
  | { EventRouter: null }
  | { Analytics: null }
  | { Upgrade: null }
  | { Restore: null }
  | { ServiceControllerManager: null }
  | { SuperAdmin: null }
  | { Backup: null }
  | { Gating: null }
  | { Comptroller: null }
  | { Identity: null }
  | { PhoneVerify: null }
  | { TxLogConsumer: null }
  | { Owner: null }
  | { EventProducer: null }
  | { HCaptchaVerify: null }
  | { TxLogProducer: null };
export type ServiceControllers = Array<[Principal, Array<ServiceController>]>;
export type SetUserSettingsResult = { Ok: UserSettingsView } | { Err: string };
export type SocialProfile =
  | { Pinterest: string }
  | { DRiP: string }
  | { Reddit: string }
  | { Website: string }
  | { TikTok: string }
  | { Twitch: string }
  | { Facebook: string }
  | { YouTube: string }
  | { Spotify: string }
  | { Discord: string }
  | { OpenChat: string }
  | { Telegram: string }
  | { Vimeo: string }
  | { LinkedIn: string }
  | { Instagram: string }
  | { Twitter: string };
export type SocialProfileDeprecated =
  | { Website: string }
  | { TikTok: string }
  | { Twitch: string }
  | { Facebook: string }
  | { YouTube: string }
  | { Discord: string }
  | { OpenChat: string }
  | { Telegram: string }
  | { Instagram: string }
  | { Twitter: string };
export type SocietyRsError =
  | { NotFound: string }
  | { Unauthorized: string }
  | { InternalError: string }
  | { BadRequest: string }
  | { InsufficientFunds: string };
export type Sort = { Hot: null } | { New: null } | { Top: null };
export type SortDirection = { Descending: null } | { Ascending: null };
export interface SparkApp {
  id: string;
  webhook_url: [] | [string];
  owner: Principal;
  name: string;
  email: string;
}
export interface SparkBurnNonce {
  meta: [] | [Array<[string, string]>];
  user: Principal;
  created_at: bigint;
  app_id: string;
  nonce: string;
  processed: [] | [NonceStatus];
  amount: bigint;
  expires_at: bigint;
}
export interface SparkNoncePage {
  page_size: bigint;
  nonces: Array<SparkBurnNonce>;
  page: bigint;
  total_pages: bigint;
  app_id: string;
}
export interface SparkNoncePageRequest {
  page_size: bigint;
  filter: [] | [ProcessedNonceFilter];
  app_id: string;
  page_start: bigint;
}
export type SparkNoncePageResult =
  | { Ok: SparkNoncePage }
  | { Err: [] | [SocietyRsError] };
export interface SparksNonceRequest {
  meta: [] | [Array<[string, string]>];
  user_id: Principal;
  app_id: string;
  nonce: string;
  amount: bigint;
}
export interface StableStorageHeader {
  content_format: DataFormatType;
  content_length: bigint;
  content_schema_version: bigint;
  pre_upgrade_instruction_count: bigint;
  header_length: bigint;
}
export interface StableStorageTransient {
  skip_next_save: boolean;
  post_upgrade_instruction_count: bigint;
}
export interface Stats {
  user_count: bigint;
  now: bigint;
  last_upgraded: bigint;
  portal_count: bigint;
  stable_storage_usage_bytes: bigint;
  version: string;
  cycles: bigint;
  tx_log_usage_bytes: bigint;
  content_count: bigint;
  memory_usage: bigint;
}
export type StringResult = { Ok: string } | { Err: [] | [SocietyRsError] };
export interface Tag {
  id: bigint;
  total: bigint;
  name: string;
  is_archived: boolean;
}
export interface TagSearch {
  total: bigint;
  name: string;
}
export type TokenError =
  | { TokenGenerationError: null }
  | { EncryptionError: EncryptionError }
  | { TokenNotFound: string }
  | { VerificationFailed: null }
  | { TokenExpired: null };
export type TokenRewardError =
  | { MissingReason: null }
  | { SocietyRsError: SocietyRsError };
export type TokenRewardResult = { Ok: null } | { Err: [] | [TokenRewardError] };
export interface TxLogEntryChunk {
  data: Uint8Array | number[];
  offset: number;
  request_number: bigint;
  total_length: number;
}
export type TxLogEntryChunkResult =
  | { Ok: Array<TxLogEntryChunk> }
  | { Err: string };
export type TxLogSerializedEntry = [[bigint, Uint8Array | number[]]];
export interface UpdateAwardRequest {
  id: bigint;
  weight: bigint;
  cost: bigint;
  name: string;
  purchasable: boolean;
  icon_url: string;
}
export interface UpdatePoll {
  days: bigint;
  kind: PollKind;
  choices: Array<PollChoiceView>;
}
export interface UpdatePortal {
  id: bigint;
  description: string;
}
export interface UpdatePortalIcon {
  id: bigint;
  icon_url: string;
}
export interface UpdatePortalRole {
  id: bigint;
  permissions: bigint;
  name: string;
  color: number;
  ordinal: bigint;
  icon_url: string;
}
export interface UpdateUserEmail {
  email: [] | [string];
}
export type UpdateUserProfileIcon = { Nft: NFTUpdateView } | { Url: string };
export interface UpdateUserProfileV2 {
  bio: string;
}
export interface UpdateUsername {
  username: string;
}
export interface UserBan {
  id: bigint;
  portal_id: bigint;
  created_at: bigint;
  user_id: Principal;
  banner_id: Principal;
  expires_at: bigint;
  reason: string;
}
export interface UserFollowPaged {
  page_size: bigint;
  page: bigint;
  total_pages: bigint;
  follow_status: Array<[Principal, boolean]>;
  users: Array<UserView>;
}
export interface UserListItemView {
  id: Principal;
  user_type: bigint;
  username: string;
  display_nft: [] | [NFTView];
  rights: bigint;
  created_at: bigint;
  icon_url: string;
}
export interface UserListPaged {
  page_size: bigint;
  page: bigint;
}
export interface UserListWalletView {
  id: Principal;
  user_type: bigint;
  username: string;
  wallets: Array<UserWallet>;
}
export interface UserNotifications {
  notification_page: AppNotificationPage;
}
export interface UserPlatformController {
  kind: UserPlatformPairKind;
  created_at: bigint;
  controller_id: Principal;
}
export interface UserPlatformPair {
  id: bigint;
  platform_meta: string;
  kind: UserPlatformPairKind;
  created_at: bigint;
  platform_user_id: string;
  is_paired: boolean;
  platform_username: string;
}
export interface UserPlatformPairCode {
  code: string;
  kind: UserPlatformPairKind;
  expires_at: bigint;
}
export type UserPlatformPairKind =
  | { Discord: null }
  | { OpenChat: null }
  | { Telegram: null }
  | { Twitter: null };
export interface UserPlatformPairListItem {
  platform_meta: string;
  user: UserListWalletView;
  user_id: Principal;
  platform_user_id: string;
  platform_username: string;
}
export interface UserPortalHighlight {
  portal_id: bigint;
  ordinal: bigint;
}
export interface UserRecommendation {
  is_following: boolean;
  user: UserView;
}
export interface UserSearchQuery {
  sort_by: [] | [UserSortBy];
  page_size: bigint;
  page: bigint;
  query: string;
  chain_filter: [] | [ChainType];
  sort_direction: [] | [SortDirection];
}
export interface UserSearchResult {
  page_size: bigint;
  page: bigint;
  total_pages: bigint;
  items: Array<UserView>;
}
export interface UserSelfView {
  id: Principal;
  bio: string;
  igc: [] | [bigint];
  is_phone_verified: boolean;
  user_type: bigint;
  username: string;
  is_provisional: boolean;
  display_nft: [] | [NFTView];
  num_posts: bigint;
  cover_photo: [] | [string];
  rights: bigint;
  referrals: bigint;
  created_at: bigint;
  active_streak: bigint;
  email: [] | [string];
  icon_url: string;
  has_membership: boolean;
  user_settings: UserSettingsView;
  identity: [] | [Identity];
  email_verified: boolean;
  followers: bigint;
  following: bigint;
  onboarding_state: string;
  social_presence: [] | [Array<SocialProfileDeprecated>];
  social_presence_2: [] | [Array<[] | [SocialProfile]>];
}
export interface UserSettingsView {
  preferred_chain: [] | [ChainType];
  app_notification: [] | [AppNotificationSettings];
  blockchains: Array<string>;
  preferred_language: string;
  interests: Array<string>;
  user_id: Principal;
  allow_nsfw: boolean;
  use_cases: Array<string>;
  email_messaging: [] | [EmailMessagingSettings];
  app_notification_grouping: [] | [Array<GroupAppNotificationType>];
}
export type UserSortBy =
  | { PointCount: null }
  | { Name: null }
  | { ActiveStreak: null }
  | { FollowingCount: null }
  | { Levenshtein: null };
export interface UserView {
  id: Principal;
  bio: string;
  is_phone_verified: boolean;
  user_type: bigint;
  username: string;
  display_nft: [] | [NFTView];
  num_posts: bigint;
  cover_photo: [] | [string];
  rights: bigint;
  created_at: bigint;
  active_streak: bigint;
  icon_url: string;
  followers: bigint;
  following: bigint;
  social_presence: [] | [Array<SocialProfileDeprecated>];
  social_presence_2: [] | [Array<[] | [SocialProfile]>];
}
export interface UserWallet {
  kind: UserWalletKind;
  created_at: bigint;
  is_paired: boolean;
  wallet_id: Principal;
}
export type UserWalletKind =
  | { Stoic: null }
  | { InfinitySwap: null }
  | { Plug: null }
  | { Origyn: null }
  | { Earth: null };
export interface ValidationErrors {
  field: string;
  errors: Array<string>;
}
export type VerifyAppTransactionError =
  | { InvalidChainId: string }
  | { SocietyRsError: [] | [SocietyRsError] };
export interface VerifyAppTransactionRequest {
  tx: string;
  app_url: string;
  chain_id: string;
}
export type VerifyAppTransactionResult =
  | {
      Ok: [] | [VerifyAppTransactionSuccess];
    }
  | { Err: [] | [VerifyAppTransactionError] };
export type VerifyAppTransactionSuccess =
  | { Blowfish: string }
  | { Validator: string };
export interface VerifyIdentityResponse {
  user: Principal;
  nonce: Uint8Array | number[];
}
export interface _SERVICE {
  accept_portal_invite: ActorMethod<[PortalInvite], ActionResultPortal>;
  accept_user_invite: ActorMethod<[string], ActionResultUser>;
  add_member_role: ActorMethod<
    [bigint, Array<[bigint, bigint]>],
    Array<MemberView>
  >;
  add_platform_controller: ActorMethod<
    [UserPlatformPairKind, Principal],
    Array<UserPlatformController>
  >;
  add_portal_role: ActorMethod<
    [bigint, CreatePortalRole],
    ActionResultPortalRole
  >;
  add_service_controller: ActorMethod<
    [ServiceControllerKind, Principal],
    ServiceControllers
  >;
  admin_add_new_award: ActorMethod<[CreateAwardRequest], AwardView>;
  admin_add_registered_app: ActorMethod<[SparkApp], EmptySocietyRsResult>;
  admin_audit_referral_data: ActorMethod<[], EmptySocietyRsResult>;
  admin_convert_banned_users: ActorMethod<[], undefined>;
  admin_enable_award_notifications: ActorMethod<[], undefined>;
  admin_prune_limit_entries: ActorMethod<[], undefined>;
  admin_referral_backfill: ActorMethod<[], EmptyResult>;
  admin_remove_provisional_user: ActorMethod<[Principal], undefined>;
  admin_remove_self_followers: ActorMethod<[], EmptySocietyRsResult>;
  admin_remove_unverified_email_streak_reminders: ActorMethod<
    [],
    EmptySocietyRsResult
  >;
  admin_reset_single_user_streak: ActorMethod<[Principal, number], undefined>;
  admin_set_email_verified: ActorMethod<[Principal], EmptySocietyRsResult>;
  admin_set_nonce_delay: ActorMethod<[bigint], undefined>;
  admin_set_phantom_reward_amounts: ActorMethod<
    [Uint8Array | number[]],
    undefined
  >;
  admin_set_phantom_reward_claim_delay: ActorMethod<[bigint], undefined>;
  admin_set_phantom_reward_number_of_losing_messages: ActorMethod<
    [number],
    undefined
  >;
  admin_set_phantom_reward_odds_of_winning: ActorMethod<[number], undefined>;
  admin_set_referral_capacitor_threshold: ActorMethod<
    [bigint],
    EmptySocietyRsResult
  >;
  admin_token_deduct_user: ActorMethod<[Principal, bigint], undefined>;
  admin_token_reward_user: ActorMethod<
    [Principal, bigint, [] | [RewardReason]],
    TokenRewardResult
  >;
  admin_update_award: ActorMethod<[UpdateAwardRequest], [] | [AwardView]>;
  admin_update_currency_to_point_ratio: ActorMethod<[bigint], undefined>;
  admin_update_daily_reward_amounts: ActorMethod<
    [BigUint64Array | bigint[]],
    AdminUpdateDailyRewardAmountsResult
  >;
  admin_update_onboarding_state: ActorMethod<
    [string, [] | [Array<Principal>]],
    EmptySocietyRsResult
  >;
  admin_update_password_reset_token_expiration: ActorMethod<
    [bigint],
    EmptySocietyRsResult
  >;
  admin_update_portal_name: ActorMethod<
    [bigint, string, string],
    ActionResultPortal
  >;
  admin_update_portal_owner: ActorMethod<
    [bigint, Principal],
    ActionResultPortal
  >;
  admin_update_referred_by: ActorMethod<[], EmptySocietyRsResult>;
  admin_update_username: ActorMethod<
    [string, string, boolean],
    ActionResultUser
  >;
  admin_update_verify_email_token_expiration: ActorMethod<
    [bigint],
    EmptySocietyRsResult
  >;
  admin_user_set_profile: ActorMethod<
    [Principal, UpdateUserProfileV2],
    [] | [UserSelfView]
  >;
  admin_user_set_profile_icon: ActorMethod<
    [Principal, [] | [UpdateUserProfileIcon]],
    [] | [UserSelfView]
  >;
  approve_all_pending_posts: ActorMethod<[bigint], EmptySocietyRsResult>;
  approve_deny_pending_post: ActorMethod<
    [bigint, [] | [PostQueueAction]],
    PostQueueActionResult
  >;
  archive_portal: ActorMethod<[bigint], ActionResultPortal>;
  audit_missing_principals: ActorMethod<[Array<Principal>], Array<Principal>>;
  award_post: ActorMethod<[bigint, bigint], PostQueueActionResult>;
  backdoor_clear_password_reset_token: ActorMethod<[Principal], undefined>;
  backdoor_clear_self_as_admin: ActorMethod<[], undefined>;
  backdoor_clear_verify_email_token: ActorMethod<[Principal], undefined>;
  backdoor_query_panic: ActorMethod<[], undefined>;
  backdoor_reset_streak: ActorMethod<[], undefined>;
  backdoor_set_self_as_admin: ActorMethod<[], undefined>;
  backdoor_setup_phantom_rewards: ActorMethod<
    [BackdoorPhantomSetupDataParams],
    undefined
  >;
  backdoor_streak_setup_data: ActorMethod<[BackdoorSetupDataParams], undefined>;
  backdoor_token_reward_user: ActorMethod<
    [Principal, bigint, [] | [RewardReason]],
    TokenRewardResult
  >;
  backdoor_update_panic: ActorMethod<[], undefined>;
  backup_stable_storage: ActorMethod<[bigint, bigint], Uint8Array | number[]>;
  ban_user: ActorMethod<[Principal, bigint, string], ActionResultBanUser>;
  ban_user_api: ActorMethod<
    [string, Principal, bigint, string],
    ActionResultBanUser
  >;
  block_user_toggle: ActorMethod<[Principal], [] | [boolean]>;
  burn_sparks_nonce: ActorMethod<[string], EmptySocietyRsResult>;
  claim_daily_streak: ActorMethod<[], ActiveStreakWindowResult>;
  claim_onboarding_reward: ActorMethod<[], boolean>;
  claim_phantom_reward: ActorMethod<
    [[] | [PhantomClaimRequest]],
    PhantomRewardResult
  >;
  claim_reward: ActorMethod<[], boolean>;
  clean_empty_portals: ActorMethod<[string], undefined>;
  clear_low_rank_index: ActorMethod<[], undefined>;
  content_nsfw_set: ActorMethod<[bigint, boolean], ActionResultContent>;
  content_pin_set: ActorMethod<[bigint, boolean], ActionResultContent>;
  content_poll_quadratic_vote: ActorMethod<
    [bigint, Array<[bigint, bigint]>],
    [] | [PollView]
  >;
  content_poll_vote: ActorMethod<[bigint, bigint], [] | [PollView]>;
  create_auth_token: ActorMethod<[string, string, string], undefined>;
  create_canister: ActorMethod<[Principal, string], [] | [Canister]>;
  create_content: ActorMethod<[CreateContent], ActionResultContent>;
  create_currency_payment_link: ActorMethod<
    [CreatePaymentLinkRequest],
    StringResult
  >;
  create_icp_user: ActorMethod<[CreateICPUser], ActionResultUserSelf>;
  create_platform_pairing: ActorMethod<
    [UserPlatformPairKind],
    [] | [UserPlatformPair]
  >;
  create_portal: ActorMethod<[CreatePortal], ActionResultPortal>;
  create_provisional_user: ActorMethod<
    [CreateProvisionalUser],
    CreateProvisionalUserResult
  >;
  create_referred_user: ActorMethod<[CreateICPUser], ActionResultUserSelf>;
  create_report: ActorMethod<[CreateReport], ActionResultReport>;
  delete_canister: ActorMethod<[Principal], undefined>;
  delete_content: ActorMethod<[bigint], ActionResultContent>;
  delete_portal_role: ActorMethod<[bigint], ActionResultPortalRole>;
  discard_until: ActorMethod<[bigint], undefined>;
  follow_portal_multi: ActorMethod<
    [BigUint64Array | bigint[]],
    EmptySocietyRsResult
  >;
  follow_portal_toggle: ActorMethod<[bigint], ActionResultPortal>;
  follow_user: ActorMethod<[Principal], ActionResultUser>;
  follow_user_multi: ActorMethod<[Array<Principal>], EmptySocietyRsResult>;
  follow_user_toggle: ActorMethod<[Principal], ActionResultUser>;
  generate_referral_code: ActorMethod<[], ReferralResult>;
  get_account_agents: ActorMethod<[], Array<Principal>>;
  get_active_streak_window: ActorMethod<[], ActiveStreakWindowResult>;
  get_all_dscvr_principals: ActorMethod<
    [],
    [Array<ScanIdentity>, Array<ScanIdentity>]
  >;
  get_analytics_table: ActorMethod<[[] | [AnalyticsTable]], CsvResult>;
  get_app_sparks_nonces: ActorMethod<
    [SparkNoncePageRequest],
    SparkNoncePageResult
  >;
  get_argon2_hash: ActorMethod<[string], string>;
  get_argon2_user: ActorMethod<[string], [] | [UserView]>;
  get_assignable_portal_roles: ActorMethod<
    [bigint],
    [] | [[MemberView, Array<RoleView>]]
  >;
  get_banned_users: ActorMethod<[], Array<UserBan>>;
  get_can_id: ActorMethod<[], Principal>;
  get_canister: ActorMethod<[Principal], [] | [Canister]>;
  get_chunked_tx_log_entries_from: ActorMethod<
    [bigint, number, [] | [number]],
    TxLogEntryChunkResult
  >;
  get_content: ActorMethod<[bigint], ActionResultContent>;
  get_content_children: ActorMethod<[ContentQuery], Array<ContentTreeView>>;
  get_content_children_page: ActorMethod<
    [ContentQuery],
    ContentTreeViewPageResult
  >;
  get_content_ranks: ActorMethod<[bigint], [] | [[bigint, bigint]]>;
  get_content_since: ActorMethod<[bigint, bigint], Array<ContentTreeView>>;
  get_content_view_counts: ActorMethod<
    [BigUint64Array | bigint[]],
    Array<[bigint, bigint]>
  >;
  get_enabled_beta_features: ActorMethod<[], Array<string>>;
  get_global_live_data: ActorMethod<[[] | [boolean]], GetGlobalLiveDataResult>;
  get_governance_polls: ActorMethod<[], Array<GovernancePoll>>;
  get_identity_for_principal: ActorMethod<[Principal], [] | [Identity]>;
  get_memory_usage: ActorMethod<[], bigint>;
  get_next_reward: ActorMethod<[], [] | [bigint]>;
  get_nft_pfps: ActorMethod<
    [[] | [boolean], [] | [NFTChainType]],
    Array<MultiChainUpdate>
  >;
  get_notification_page: ActorMethod<
    [NotificationPageQuery],
    NotificationResult
  >;
  get_onboarding_interests: ActorMethod<[], Array<string>>;
  get_onboarding_portal_recommendations: ActorMethod<[], Array<PortalView>>;
  get_onboarding_state: ActorMethod<[], string>;
  get_onboarding_user_recommendations: ActorMethod<[], Array<UserView>>;
  get_onboarding_user_recommendations_v2: ActorMethod<
    [],
    Array<UserRecommendation>
  >;
  get_own_id: ActorMethod<[], Principal>;
  get_paired_platforms: ActorMethod<[], Array<UserPlatformPair>>;
  get_paired_platforms_by_user: ActorMethod<
    [Principal],
    Array<UserPlatformPair>
  >;
  get_paired_user_by_platform: ActorMethod<
    [UserPlatformPairKind],
    Array<UserPlatformPairListItem>
  >;
  get_paired_wallets: ActorMethod<[], Array<UserWallet>>;
  get_platform_controllers: ActorMethod<[], Array<UserPlatformController>>;
  get_platform_pair_code: ActorMethod<[UserPlatformPairKind], [] | [string]>;
  get_portal: ActorMethod<[string], ActionResultPortal>;
  get_portal_chain_type: ActorMethod<[bigint], ChainTypeResult>;
  get_portal_content: ActorMethod<
    [string, PagedQuery],
    ActionResultGetContentPaged
  >;
  get_portal_content_action_feed: ActorMethod<
    [ContentActionFeedQuery],
    ContentActionHistoryFeedResult
  >;
  get_portal_content_action_feed_page: ActorMethod<
    [ContentActionPagedQuery],
    ContentActionPageViewResult
  >;
  get_portal_info: ActorMethod<[bigint], [] | [PortalInfo]>;
  get_portal_member_memos: ActorMethod<[bigint, bigint], Array<string>>;
  get_portal_member_wallets: ActorMethod<[bigint], Array<MemberListWalletView>>;
  get_portal_members: ActorMethod<
    [PortalMemberQuery],
    Array<MemberListItemView>
  >;
  get_portal_members_by_status: ActorMethod<
    [bigint, MemberKind],
    Array<MemberListItemView>
  >;
  get_portal_members_v2: ActorMethod<
    [PortalMemberQuery],
    GetPortalMemberV2Result
  >;
  get_portal_ranks: ActorMethod<[bigint], [] | [[bigint, bigint]]>;
  get_portal_roles: ActorMethod<[bigint], Array<RoleView>>;
  get_portals: ActorMethod<[Array<string>], ActionResultPortals>;
  get_post_queue_feed_page: ActorMethod<
    [PostQueuePagedQuery],
    ContentViewPagedResult
  >;
  get_principal_for_user_name: ActorMethod<[string], [] | [Principal]>;
  get_purchasable_awards: ActorMethod<[], Array<AwardView>>;
  get_randomized_recommended_portals: ActorMethod<
    [RandomizedRecommendationQuery],
    Array<PortalView>
  >;
  get_randomized_recommended_users: ActorMethod<
    [RandomizedRecommendationQuery],
    Array<UserView>
  >;
  get_referral_community: ActorMethod<
    [ReferralCommunityQuery],
    ReferralCommunityPaged
  >;
  get_referral_promo_shown: ActorMethod<[], boolean>;
  get_registry_controller: ActorMethod<[], [] | [Principal]>;
  get_role_members: ActorMethod<[bigint], Array<MemberListItemView>>;
  get_self: ActorMethod<[], ActionResultUserSelf>;
  get_self_portals: ActorMethod<[], Array<PortalView>>;
  get_service_controllers: ActorMethod<[], ServiceControllers>;
  get_streak_decay: ActorMethod<[], number>;
  get_streak_promo_shown: ActorMethod<[], boolean>;
  get_user: ActorMethod<[string], ActionResultUser>;
  get_user_blocked: ActorMethod<[UserListPaged], UserFollowPaged>;
  get_user_by_principal: ActorMethod<[Principal], ActionResultUser>;
  get_user_content: ActorMethod<
    [string, PagedQuery],
    ActionResultGetContentPaged
  >;
  get_user_followers: ActorMethod<[string, UserListPaged], UserFollowPaged>;
  get_user_following: ActorMethod<[string, UserListPaged], UserFollowPaged>;
  get_user_follows: ActorMethod<[], Array<PortalView>>;
  get_user_interests: ActorMethod<[], Array<string>>;
  get_user_phantom_reward: ActorMethod<
    [Principal, bigint],
    PhantomRewardResult
  >;
  get_user_portal_roles: ActorMethod<
    [bigint, Principal],
    [] | [PortalMemberView]
  >;
  get_user_portals: ActorMethod<[Principal], Array<PortalView>>;
  get_user_ranks: ActorMethod<[Principal], [] | [[bigint, bigint]]>;
  get_user_referral_code: ActorMethod<[], ReferralResult>;
  increment_content_view_counts: ActorMethod<
    [BigUint64Array | bigint[]],
    EmptyResult
  >;
  init_stable_storage: ActorMethod<[bigint], undefined>;
  is_email_verification_pending: ActorMethod<[], boolean>;
  is_phone_paried: ActorMethod<[], { Ok: boolean } | { Err: string }>;
  is_phone_verified: ActorMethod<[string], { Ok: boolean } | { Err: string }>;
  is_user_following: ActorMethod<[Principal], boolean>;
  join_portal: ActorMethod<[bigint], ActionResultPortal>;
  join_portal_multi: ActorMethod<
    [BigUint64Array | bigint[]],
    EmptySocietyRsResult
  >;
  leave_portal: ActorMethod<[bigint], ActionResultPortal>;
  list_canisters: ActorMethod<[], Array<Principal>>;
  list_content: ActorMethod<[PagedQuery], ContentViewPage>;
  list_highlighed_portals: ActorMethod<
    [[] | [ChainType]],
    [] | [PortalHiglights]
  >;
  list_portals: ActorMethod<[PortalViewPagedQuery], PortalViewPaged>;
  list_reports: ActorMethod<[], Array<ReportView>>;
  log_app_transaction: ActorMethod<
    [LogAppTransactionRequest],
    LogAppTransactionResponse
  >;
  log_canvas_interaction: ActorMethod<
    [string, bigint],
    CanvasInteractionResult
  >;
  log_frame_interaction: ActorMethod<[string], FrameInteractionResult>;
  mark_all_notifications_read: ActorMethod<[], EmptyResult>;
  mark_notifications_read: ActorMethod<
    [BigUint64Array | bigint[]],
    ReadNotificationsResult
  >;
  member_search: ActorMethod<[string], Array<MemberSearchResult>>;
  migrate_user_portal_pinned_content: ActorMethod<[], undefined>;
  next_request_number: ActorMethod<[], bigint>;
  pair_platform: ActorMethod<
    [UserPlatformPairKind, Principal, string, string, string, string],
    ActionResultPairPlatform
  >;
  personalized_feed_v1: ActorMethod<
    [PersonalizedFeedV1Query],
    { Ok: ContentViewPage } | { Err: string }
  >;
  pin_user_content: ActorMethod<[bigint, boolean], EmptyResult>;
  populate_low_rank_index: ActorMethod<[], undefined>;
  portal_member_add: ActorMethod<[bigint, Principal], PortalMemberAddResult>;
  portal_nsfw_toggle: ActorMethod<[bigint], ActionResultPortal>;
  portal_requires_phone: ActorMethod<[bigint, boolean], ActionResultPortal>;
  portal_root_toggle: ActorMethod<[bigint], ActionResultPortal>;
  pre_upgrade: ActorMethod<[], ActionResultPreUpgrade>;
  process_single_payment: ActorMethod<[string], EmptySocietyRsResult>;
  purge_contents: ActorMethod<[BigUint64Array | bigint[]], undefined>;
  react_to_content: ActorMethod<
    [bigint, [] | [ContentReaction]],
    ActionResultContent
  >;
  read_notifications: ActorMethod<
    [BigUint64Array | bigint[]],
    ReadNotificationsResult
  >;
  register_sparks_burn_nonce: ActorMethod<
    [GenerateSparksNonceRequest],
    RegisterNonceResult
  >;
  remove_account_agent: ActorMethod<[Principal], EmptySocietyRsResult>;
  remove_content: ActorMethod<[bigint], ActionResultContent>;
  remove_follower: ActorMethod<[Principal], ActionResultUser>;
  remove_member_role: ActorMethod<
    [bigint, Array<[bigint, bigint]>],
    Array<MemberView>
  >;
  remove_platform_controller: ActorMethod<
    [UserPlatformPairKind],
    Array<UserPlatformController>
  >;
  remove_portal: ActorMethod<[bigint], undefined>;
  remove_registry_controller: ActorMethod<[], undefined>;
  remove_service_controller: ActorMethod<
    [ServiceControllerKind, Principal],
    ServiceControllers
  >;
  reset_phone_table: ActorMethod<[], undefined>;
  restore_limits: ActorMethod<[ActionLimits], undefined>;
  restore_stable_storage: ActorMethod<
    [bigint, Uint8Array | number[]],
    undefined
  >;
  restore_stable_storage_compressed: ActorMethod<
    [bigint, Array<Uint8Array | number[]>],
    undefined
  >;
  retrieve_nonce_details: ActorMethod<[string], NonceDetailResult>;
  reverse_content_action: ActorMethod<[bigint], ReverseContentActionResult>;
  reverse_portal_content_action: ActorMethod<[bigint], EmptyResult>;
  save_snapshot: ActorMethod<[boolean], ActionResultSaveSnapshot>;
  search_portals: ActorMethod<[PortalSearchQuery], ActionResultPortalSearch>;
  search_tags: ActorMethod<[string], Array<Tag>>;
  search_users: ActorMethod<[UserSearchQuery], ActionResultUserSearch>;
  send_password_reset_email: ActorMethod<[Principal], PasswordResetEmptyResult>;
  send_verification_email: ActorMethod<[], EmailVerificationEmptyResult>;
  set_account_agent: ActorMethod<[Principal], EmptySocietyRsResult>;
  set_action: ActorMethod<[bigint, string], ActionResultReport>;
  set_content_rank: ActorMethod<[Array<[bigint, bigint]>], undefined>;
  set_content_rank_modifier: ActorMethod<[Array<[bigint, bigint]>], undefined>;
  set_highlighted_portals: ActorMethod<
    [Array<UserPortalHighlight>],
    [] | [PortalHiglights]
  >;
  set_nft_pfps: ActorMethod<
    [Array<MultiChainUpdate>],
    MultiChainUpdateResponse
  >;
  set_onboarding_state: ActorMethod<[string], EmptySocietyRsResult>;
  set_portal_members_status: ActorMethod<
    [bigint, bigint, MemberKind, string],
    [] | [MemberListItemView]
  >;
  set_portal_rank: ActorMethod<[Array<[bigint, bigint]>], undefined>;
  set_portal_rank_modifier: ActorMethod<[Array<[bigint, bigint]>], undefined>;
  set_read: ActorMethod<[bigint], Array<ActionResultReport>>;
  set_referral_promo_shown: ActorMethod<[], undefined>;
  set_registry_controller: ActorMethod<[Principal], [] | [Principal]>;
  set_restore_from_stable_storage: ActorMethod<[boolean], undefined>;
  set_streak_decay: ActorMethod<[number], undefined>;
  set_streak_promo_shown: ActorMethod<[], undefined>;
  set_user_interests: ActorMethod<[Array<string>], EmptyResult>;
  set_user_rank: ActorMethod<[Array<[Principal, bigint]>], undefined>;
  set_user_rank_modifier: ActorMethod<[Array<[Principal, bigint]>], undefined>;
  stable_storage_info: ActorMethod<
    [],
    [StableStorageHeader, StableStorageTransient]
  >;
  stats: ActorMethod<[], Stats>;
  test_endpoint: ActorMethod<[string], bigint>;
  test_hash: ActorMethod<[Principal, bigint], Principal>;
  test_register_event: ActorMethod<[], undefined>;
  test_resolve_event: ActorMethod<[PollEvent], undefined>;
  token_gift_user: ActorMethod<[Principal, bigint], undefined>;
  tx_log_discard_until: ActorMethod<[bigint], undefined>;
  tx_log_get_chunked_entries_from: ActorMethod<
    [bigint, number, [] | [number]],
    TxLogEntryChunkResult
  >;
  tx_log_next_request_number: ActorMethod<[], bigint>;
  unban_user: ActorMethod<[Principal], undefined>;
  unfollow_user: ActorMethod<[Principal], ActionResultUser>;
  unpair_phone: ActorMethod<[], { Ok: boolean } | { Err: string }>;
  unpair_platform: ActorMethod<[UserPlatformPairKind], Array<UserPlatformPair>>;
  unpair_wallet: ActorMethod<[UserWalletKind], undefined>;
  unverify_phone: ActorMethod<[string], { Ok: boolean } | { Err: string }>;
  update_content: ActorMethod<
    [
      bigint,
      string,
      Array<string>,
      [] | [boolean],
      [] | [boolean],
      [] | [UpdatePoll],
    ],
    ActionResultContent
  >;
  update_email_identities: ActorMethod<
    [Array<[Principal, Identity]>],
    EmptySocietyRsResult
  >;
  update_global_root_store: ActorMethod<[string, bigint, bigint], undefined>;
  update_portal: ActorMethod<[UpdatePortal], ActionResultPortal>;
  update_portal_icon: ActorMethod<[UpdatePortalIcon], ActionResultPortal>;
  update_portal_info_cover_photo: ActorMethod<
    [bigint, [] | [string]],
    ActionResultPortal
  >;
  update_portal_info_links: ActorMethod<
    [bigint, Array<Link>],
    ActionResultPortal
  >;
  update_portal_info_rules: ActorMethod<
    [bigint, [] | [Array<PortalRule>]],
    ActionResultPortal
  >;
  update_portal_pinned_posts: ActorMethod<
    [bigint, BigUint64Array | bigint[]],
    EmptySocietyRsResult
  >;
  update_portal_role: ActorMethod<[UpdatePortalRole], ActionResultPortalRole>;
  update_portal_role_ordinals: ActorMethod<
    [bigint, Array<[bigint, bigint]>],
    ActionResultUpdatePortalRoleOrdinal
  >;
  update_post_queue: ActorMethod<[bigint, boolean], PortalModerationViewResult>;
  update_post_queue_auto_approve: ActorMethod<
    [bigint, boolean, [] | [bigint]],
    PortalModerationViewResult
  >;
  update_registry: ActorMethod<
    [Principal, Array<[string, BigUint64Array | bigint[]]>],
    undefined
  >;
  update_social_presence: ActorMethod<
    [Array<SocialProfile>],
    ActionResultUserSelf
  >;
  update_user_cover_photo: ActorMethod<[[] | [string]], ActionResultUserSelf>;
  update_user_email: ActorMethod<[UpdateUserEmail], ActionResultUserSelf>;
  update_user_pinned_posts: ActorMethod<
    [BigUint64Array | bigint[]],
    EmptySocietyRsResult
  >;
  update_username: ActorMethod<[UpdateUsername], ActionResultUserSelf>;
  update_wallet_type: ActorMethod<[Principal, IdentityWalletType], undefined>;
  user_search: ActorMethod<[string], Array<UserListItemView>>;
  user_set_profile_icon: ActorMethod<
    [[] | [UpdateUserProfileIcon]],
    [] | [UserSelfView]
  >;
  user_set_profile_v2: ActorMethod<[UpdateUserProfileV2], [] | [UserSelfView]>;
  user_set_settings_v2: ActorMethod<[UserSettingsView], SetUserSettingsResult>;
  user_wallet_pair_dscvr: ActorMethod<[Principal], [] | [UserWallet]>;
  user_wallet_pair_foreign: ActorMethod<
    [UserWalletKind, Principal],
    [] | [UserWallet]
  >;
  verify_app_transaction: ActorMethod<
    [VerifyAppTransactionRequest],
    VerifyAppTransactionResult
  >;
  verify_email_token: ActorMethod<[string], EmailVerificationEmptyResult>;
  verify_identity: ActorMethod<[Uint8Array | number[]], VerifyIdentityResponse>;
  verify_password_reset_token: ActorMethod<
    [Principal, string],
    PasswordResetEmptyResult
  >;
  verify_phone: ActorMethod<
    [Principal, string],
    { Ok: boolean } | { Err: string }
  >;
  vote_content: ActorMethod<[bigint, bigint], ActionResultContent>;
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];