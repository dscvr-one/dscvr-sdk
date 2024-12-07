import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface ActionResultContent {
  'status' : string,
  'result' : [] | [ContentView],
  'errors' : [] | [Array<ValidationErrors>],
  'message' : string,
  'error_code' : [] | [SocietyRsError],
}
export interface ActionResultGetContent {
  'status' : string,
  'result' : [] | [Array<ContentView>],
  'message' : string,
  'error_code' : [] | [SocietyRsError],
}
export interface ActionResultGetContentPaged {
  'status' : string,
  'result' : [] | [ContentViewPage],
  'message' : string,
  'error_code' : [] | [SocietyRsError],
}
export interface ActionResultPairPlatform {
  'status' : string,
  'result' : [] | [UserPlatformPair],
  'errors' : [] | [Array<ValidationErrors>],
  'message' : string,
  'error_code' : [] | [SocietyRsError],
}
export interface ActionResultPortal {
  'status' : string,
  'result' : [] | [PortalView],
  'errors' : [] | [Array<ValidationErrors>],
  'message' : string,
  'error_code' : [] | [SocietyRsError],
}
export interface ActionResultPortalRole {
  'status' : string,
  'result' : [] | [RoleView],
  'errors' : [] | [Array<ValidationErrors>],
  'message' : string,
  'error_code' : [] | [SocietyRsError],
}
export interface ActionResultPortalSearch {
  'status' : string,
  'result' : [] | [PortalSearchResult],
  'errors' : [] | [Array<ValidationErrors>],
  'message' : string,
}
export interface ActionResultPortals {
  'status' : string,
  'result' : [] | [Array<PortalView>],
  'errors' : [] | [Array<ValidationErrors>],
  'message' : string,
  'error_code' : [] | [SocietyRsError],
}
export interface ActionResultReport {
  'status' : string,
  'result' : [] | [ReportView],
  'errors' : [] | [Array<ValidationErrors>],
  'message' : string,
  'error_code' : [] | [SocietyRsError],
}
export interface ActionResultUpdatePortalRoleOrdinal {
  'status' : string,
  'result' : [] | [Array<RoleView>],
  'errors' : [] | [Array<ValidationErrors>],
  'message' : string,
  'error_code' : [] | [SocietyRsError],
}
export interface ActionResultUser {
  'status' : string,
  'result' : [] | [UserView],
  'errors' : [] | [Array<ValidationErrors>],
  'message' : string,
  'error_code' : [] | [SocietyRsError],
}
export interface ActionResultUserSearch {
  'status' : string,
  'result' : [] | [UserSearchResult],
  'errors' : [] | [Array<ValidationErrors>],
  'message' : string,
}
export interface ActionResultUserSelf {
  'status' : string,
  'result' : [] | [UserSelfView],
  'errors' : [] | [Array<ValidationErrors>],
  'message' : string,
  'error_code' : [] | [SocietyRsError],
}
export type ApiNotificationType = { 'CommentMention' : ContentMention } |
  { 'CommentReply' : ContentReply } |
  { 'PostReaction' : Reaction } |
  { 'PostReply' : ContentReply } |
  { 'CommentAward' : ContentAward } |
  { 'Follower' : null } |
  { 'PostAward' : ContentAward } |
  { 'PostMention' : ContentMention } |
  { 'CommentReaction' : Reaction };
export interface AppGroupNotificationPayload {
  'ids' : [] | [BigUint64Array | bigint[]],
  'total_notifiers' : [] | [bigint],
  'recent_notifiers' : [] | [Array<GroupNotificationRecentNotifier>],
}
export type AppNotificationChannel = { 'App' : null } |
  { 'Email' : null } |
  { 'Push' : null };
export interface AppNotificationPage {
  'page_size' : bigint,
  'notifications' : Array<AppNotificationPayload>,
  'num_pages' : bigint,
  'page' : bigint,
}
export interface AppNotificationPayload {
  'notifier_icon_url' : [] | [string],
  'read_at' : [] | [bigint],
  'body' : [] | [string],
  'notification_group' : [] | [AppGroupNotificationPayload],
  'created_at' : bigint,
  'notification_id' : bigint,
  'notification_type' : ApiNotificationType,
  'notifier' : [] | [string],
  'notifier_nft' : [] | [NFTView],
}
export interface AppNotificationSettings {
  'streak_reminders' : Array<AppNotificationChannel>,
  'comments_replies' : Array<AppNotificationChannel>,
  'awards' : Array<AppNotificationChannel>,
  'shares_reposts' : Array<AppNotificationChannel>,
  'mentions' : Array<AppNotificationChannel>,
  'likes_reactions' : Array<AppNotificationChannel>,
  'new_followers' : Array<AppNotificationChannel>,
}
export type AppNotificationType = { 'CommentMention' : null } |
  { 'CommentReply' : null } |
  { 'PostReaction' : null } |
  { 'PostReply' : null } |
  { 'CommentAward' : null } |
  { 'Follower' : null } |
  { 'PostAward' : null } |
  { 'PostMention' : null } |
  { 'CommentReaction' : null };
export interface AppReport {
  'reported_other' : bigint,
  'rejected' : bigint,
  'proceeded' : bigint,
  'reported_malicious' : bigint,
}
export interface AppReportView { 'url' : string, 'report' : AppReport }
export interface AwardMeta { 'name' : string, 'icon_url' : string }
export interface AwardView {
  'id' : bigint,
  'cost' : bigint,
  'name' : string,
  'icon_url' : string,
}
export type ChainType = { 'InternetComputer' : null } |
  { 'Solana' : null };
export type ContentAction = { 'ContentRemoved' : null } |
  { 'ContentReinstated' : null } |
  { 'ContentEdited' : ContentEditedAction } |
  { 'ContentDenied' : null } |
  { 'ContentApproved' : null } |
  { 'ContentReQueued' : null };
export interface ContentActionFeedQuery {
  'page_size' : bigint,
  'moderator_filter' : [] | [Array<Principal>],
  'action_filter' : [] | [Array<ContentActionType>],
  'portal_id' : number,
  'page' : bigint,
}
export type ContentActionFilter = { 'Moderator' : Array<Principal> };
export type ContentActionHistoryFeedResult = {
    'Ok' : ContentActionHistoryPage
  } |
  { 'Err' : SocietyRsError };
export interface ContentActionHistoryPage {
  'page' : bigint,
  'total_pages' : bigint,
  'actions' : Array<ContentActionHistoryView>,
}
export interface ContentActionHistoryView {
  'action_id' : bigint,
  'action' : [] | [ContentActionType],
  'content' : ContentView,
  'moderator' : [] | [UserView],
  'timestamp' : bigint,
}
export interface ContentActionPageView {
  'page_size' : bigint,
  'page' : bigint,
  'total_pages' : bigint,
  'actions' : Array<ContentActionView>,
}
export type ContentActionPageViewResult = { 'Ok' : ContentActionPageView } |
  { 'Err' : [] | [SocietyRsError] };
export interface ContentActionPagedQuery {
  'page_size' : bigint,
  'portal_id' : bigint,
  'page' : bigint,
  'filter' : [] | [ContentActionFilter],
}
export type ContentActionType = { 'Reinstated' : null } |
  { 'Approved' : null } |
  { 'Denied' : null } |
  { 'ReQueued' : null } |
  { 'Removed' : null };
export interface ContentActionView {
  'id' : bigint,
  'action' : [] | [ContentAction],
  'content' : [] | [ContentView],
  'moderator' : [] | [UserView],
  'timestamp' : bigint,
}
export interface ContentAward {
  'title' : string,
  'award' : AwardMeta,
  'content_id' : bigint,
  'root_parent_id' : [] | [bigint],
}
export interface ContentEditPayload {
  'title' : string,
  'body' : string,
  'nsfw' : boolean,
  'tags' : Array<string>,
  'comments_disabled' : boolean,
}
export interface ContentEditedAction {
  'post_edit' : ContentEditPayload,
  'pre_edit' : ContentEditPayload,
}
export interface ContentMention {
  'title' : string,
  'content_id' : bigint,
  'root_parent_id' : [] | [bigint],
}
export interface ContentQuery {
  'max_grand_children_per_level' : [] | [number],
  'content_id' : bigint,
  'sort' : ContentSort,
  'thread_start' : bigint,
  'since' : [] | [bigint],
  'thread_size' : bigint,
  'max_grand_child_depth' : [] | [number],
}
export type ContentReaction = { 'Sad' : null } |
  { 'Wow' : null } |
  { 'Care' : null } |
  { 'Clap' : null } |
  { 'Fire' : null } |
  { 'HaHa' : null } |
  { 'Like' : null } |
  { 'Dislike' : null } |
  { 'Angry' : null };
export interface ContentReply {
  'title' : string,
  'content_id' : bigint,
  'root_parent_id' : [] | [bigint],
  'comment_id' : bigint,
}
export type ContentSort = { 'OP' : null } |
  { 'New' : null } |
  { 'Old' : null } |
  { 'Live' : null } |
  { 'Default' : null } |
  { 'VerifiedPfp' : null };
export type ContentStatus = { 'Approved' : null } |
  { 'Denied' : null } |
  { 'Pending' : null };
export type ContentStatusFilter = { 'Denied' : null } |
  { 'Pending' : null };
export interface ContentTreeView {
  'id' : bigint,
  'url' : string,
  'upvotes' : bigint,
  'is_nsfw' : boolean,
  'status' : [] | [ContentStatus],
  'title' : string,
  'updated_at' : bigint,
  'deleted' : [] | [boolean],
  'is_pinned' : boolean,
  'owner' : UserView,
  'disable_comments' : [] | [boolean],
  'body' : string,
  'owner_color' : number,
  'lang' : string,
  'perm' : bigint,
  'tags' : Array<Tag>,
  'content_type' : string,
  'created_at' : bigint,
  'children' : Array<ContentTreeView>,
  'is_mod' : boolean,
  'parent_id' : [] | [bigint],
  'icon_url' : string,
  'reaction_counts' : Array<[ContentReaction, bigint]>,
  'owner_id' : Principal,
  'children_count' : bigint,
  'downvotes' : bigint,
  'is_author_pinned' : boolean,
  'is_reactor' : [] | [ContentReaction],
  'is_upvoter' : boolean,
  'owner_roles' : BigUint64Array | bigint[],
  'removed' : [] | [boolean],
  'is_downvoter' : boolean,
  'portal' : PortalInfoView,
}
export interface ContentTreeViewPage {
  'page_size' : bigint,
  'views' : Array<ContentTreeView>,
  'page' : bigint,
  'total_pages' : bigint,
}
export type ContentTreeViewPageResult = { 'Ok' : ContentTreeViewPage } |
  { 'Err' : [] | [SocietyRsError] };
export interface ContentView {
  'id' : bigint,
  'url' : string,
  'upvotes' : bigint,
  'is_nsfw' : boolean,
  'status' : [] | [ContentStatus],
  'title' : string,
  'deleted' : [] | [boolean],
  'app_reports' : [] | [Array<AppReportView>],
  'is_pinned' : boolean,
  'owner' : UserView,
  'disable_comments' : [] | [boolean],
  'body' : string,
  'parent_content' : [] | [ContentView],
  'owner_color' : number,
  'lang' : string,
  'frame_interaction_friends' : Array<UserView>,
  'perm' : bigint,
  'poll' : [] | [PollView],
  'tags' : Array<Tag>,
  'content_type' : string,
  'created_at' : bigint,
  'post_awards' : Array<PostAwardView>,
  'is_mod' : boolean,
  'parent_id' : [] | [bigint],
  'icon_url' : string,
  'reaction_counts' : Array<[ContentReaction, bigint]>,
  'owner_id' : Principal,
  'children_count' : bigint,
  'downvotes' : bigint,
  'is_author_pinned' : boolean,
  'frame_interaction_count' : bigint,
  'root_parent_content' : [] | [ContentView],
  'relevant_children' : Array<ContentView>,
  'is_reactor' : [] | [ContentReaction],
  'friends' : Array<UserView>,
  'is_upvoter' : boolean,
  'owner_roles' : BigUint64Array | bigint[],
  'removed' : [] | [boolean],
  'is_downvoter' : boolean,
  'portal' : PortalInfoView,
}
export interface ContentViewPage {
  'page_size' : bigint,
  'contents' : Array<ContentView>,
  'page' : bigint,
  'total_pages' : bigint,
}
export type ContentViewPagedResult = { 'Ok' : ContentViewPage } |
  { 'Err' : [] | [SocietyRsError] };
export interface CreateAwardRequest {
  'weight' : bigint,
  'cost' : bigint,
  'name' : string,
  'purchasable' : boolean,
  'icon_url' : string,
}
export interface CreateContent {
  'url' : string,
  'is_nsfw' : boolean,
  'title' : string,
  'portal_id' : [] | [bigint],
  'disable_comments' : [] | [boolean],
  'body' : string,
  'lang' : string,
  'poll' : [] | [CreatePoll],
  'tags' : Array<string>,
  'content_type' : string,
  'parent_id' : [] | [bigint],
  'icon_url' : string,
}
export interface CreatePoll {
  'days' : bigint,
  'kind' : PollKind,
  'choices' : Array<string>,
}
export interface CreatePortal {
  'is_nsfw' : boolean,
  'name' : string,
  'slug' : string,
  'description' : string,
  'icon_url' : string,
}
export interface CreatePortalRole {
  'permissions' : bigint,
  'name' : string,
  'color' : number,
  'ordinal' : bigint,
  'icon_url' : string,
}
export interface CreditInfo {
  'payload_id' : string,
  'award_reason' : CurrencyAwardReason,
  'payload_version' : number,
  'payload' : Uint8Array | number[],
}
export interface CreditTransactionRequest {
  'payload_id' : string,
  'award_reason' : [] | [CurrencyAwardReason],
  'user_id' : Principal,
  'payload_version' : number,
  'amount' : bigint,
  'payload' : Uint8Array | number[],
}
export type CurrencyAwardReason = { 'SpherePay' : null };
export interface CurrencyTransaction {
  'request_id' : bigint,
  'user_id' : Principal,
  'tx_type' : CurrencyTransactionType,
  'amount' : bigint,
}
export type CurrencyTransactionType = { 'Debit' : DebitInfo } |
  { 'Credit' : CreditInfo };
export interface DebitInfo { 'reason' : DebitReason }
export type DebitReason = { 'PostBoost' : null };
export interface EmailMessagingSettings { 'marketing' : boolean }
export type EmailVerificationEmptyResult = { 'Ok' : null } |
  { 'Err' : [] | [EmailVerificationError] };
export type EmailVerificationError = { 'SocietyRsError' : SocietyRsError } |
  { 'TokenError' : TokenError } |
  { 'EmailNotSet' : null } |
  { 'EmailAlreadyVerified' : null };
export type EmptyResult = { 'Ok' : null } |
  { 'Err' : string };
export type EmptySocietyRsResult = { 'Ok' : null } |
  { 'Err' : [] | [SocietyRsError] };
export type EncryptionError = { 'NonceError' : null } |
  { 'EncryptionError' : null } |
  { 'DecryptionError' : null };
export type ExplorePortalSort = { 'NameAscending' : null } |
  { 'NameDescending' : null } |
  { 'MemberCountAscending' : null } |
  { 'MemberCountDescending' : null };
export interface GetPortalMemberPage {
  'members' : Array<MemberListItemView>,
  'page' : bigint,
  'total_members' : bigint,
  'pages' : bigint,
}
export type GetPortalMemberV2Result = { 'Ok' : GetPortalMemberPage } |
  { 'Err' : [] | [SocietyRsError] };
export type GroupAppNotificationType = { 'CommentReply' : null } |
  { 'PostReaction' : null } |
  { 'PostReply' : null } |
  { 'CommentReaction' : null };
export interface GroupNotificationRecentNotifier {
  'nft' : [] | [NFTView],
  'name' : [] | [string],
  'icon_url' : [] | [string],
}
export type Identity = { 'Email' : IdentityEmail } |
  { 'OAuth' : IdentityOAuth } |
  { 'Wallet' : IdentityWallet } |
  { 'Username' : string };
export interface IdentityEmail {
  'verified' : boolean,
  'provider' : [] | [string],
  'email' : string,
}
export type IdentityOAuth = { 'WorldCoin' : string };
export interface IdentityWallet {
  'key' : Uint8Array | number[],
  'networks' : Array<[] | [IdentityWalletNetworkType]>,
  'chain' : [] | [IdentityWalletChainType],
  'kind' : [] | [IdentityWalletType],
}
export type IdentityWalletChainType = { 'Evm' : null } |
  { 'Solana' : null } |
  { 'Bitcoin' : null };
export type IdentityWalletNetworkType = { 'Ethereum' : null } |
  { 'Solana' : null } |
  { 'Bitcoin' : null } |
  { 'Polygon' : null };
export type IdentityWalletType = { 'Metamask' : null } |
  { 'Sollet' : null } |
  { 'SolletExtension' : null } |
  { 'Trustwallet' : null } |
  { 'Coinbase' : null } |
  { 'Phantom' : null } |
  { 'Solflare' : null } |
  { 'Backpack' : null };
export interface InternetComputerNFT {
  'nft_id' : string,
  'canister_id' : Principal,
}
export interface Link { 'href' : string }
export type MemberFilterOrder = { 'Descending' : null } |
  { 'Ascending' : null };
export type MemberKind = { 'Left' : null } |
  { 'Approved' : null } |
  { 'Banned' : null } |
  { 'Kicked' : null } |
  { 'Pending' : null };
export interface MemberListItemView {
  'id' : bigint,
  'status' : MemberKind,
  'user' : UserListItemView,
  'created_at' : bigint,
  'user_id' : Principal,
  'roles' : Array<RoleListItemView>,
}
export interface MemberListWalletView {
  'id' : bigint,
  'status' : MemberKind,
  'user' : UserListWalletView,
  'created_at' : bigint,
  'user_id' : Principal,
  'roles' : Array<RoleListMicroItemView>,
}
export interface MemberSearchResult {
  'id' : Principal,
  'username' : string,
  'display_nft' : [] | [NFTView],
  'rights' : bigint,
}
export interface MemberView {
  'id' : bigint,
  'status' : MemberKind,
  'portal_id' : bigint,
  'user' : UserListItemView,
  'created_at' : bigint,
  'user_id' : Principal,
  'roles' : Array<RoleView>,
}
export type MetaType = { 'Image' : string } |
  { 'Model' : string } |
  { 'Audio' : string } |
  { 'Other' : string } |
  { 'Video' : string };
export interface MultiChainNFTRequest {
  'meta_type' : [] | [MetaType],
  'nft_id' : [] | [string],
  'token_id' : [] | [string],
  'chain' : [] | [NFTChainType],
  'last_verified' : bigint,
  'contract_address' : string,
}
export interface MultiChainUpdate {
  'nft' : MultiChainNFTRequest,
  'owner' : [] | [Principal],
}
export type MultiChainUpdateResponse = { 'Ok' : null } |
  { 'Err' : NFTConversionError };
export interface NFT {
  'id' : bigint,
  'kind' : NFTKind,
  'meta' : string,
  'created_at' : bigint,
}
export type NFTChainType = { 'InternetComputer' : null } |
  { 'Ethereum' : null } |
  { 'Solana' : null } |
  { 'Polygon' : null } |
  { 'Optimism' : null } |
  { 'Arbitrum' : null };
export type NFTConversionError = { 'MissingChainType' : null } |
  { 'InvalidChainType' : string } |
  { 'MissingMetaType' : null };
export interface NFTKind { 'nft_id' : string, 'canister_id' : Principal }
export type NFTKindV2 = { 'InternetComputer' : InternetComputerNFT } |
  { 'MultiChain' : MultiChainNFTRequest };
export interface NFTUpdateView {
  'kind' : [] | [NFTKindV2],
  'meta' : [] | [string],
}
export interface NFTView {
  'chain' : [] | [NFTChainType],
  'meta' : string,
  'is_owner' : boolean,
}
export interface NonceDetail { 'app_id' : string, 'amount' : bigint }
export type NonceDetailResult = { 'Ok' : NonceDetail } |
  { 'Err' : [] | [SocietyRsError] };
export interface NotificationPageQuery {
  'include_types' : [] | [Array<AppNotificationType>],
  'page_size' : bigint,
  'page' : bigint,
  'grouping_enabled' : [] | [boolean],
}
export type NotificationResult = { 'Ok' : UserNotifications } |
  { 'Err' : string };
export interface PagedQuery {
  'page_size' : bigint,
  'lang' : string,
  'page' : bigint,
  'sort' : Sort,
  'query' : [] | [string],
  'filter' : string,
  'chain_filter' : [] | [ChainType],
  'max_age' : [] | [bigint],
}
export interface PersonalizedFeedV1Parameters {
  'max_comment_depth' : bigint,
  'upvote_weight' : number,
  'include_top_users' : [] | [boolean],
  'following_upvote_weight' : number,
  'following_upvote_degree_penalty' : number,
  'award_age_multiplier' : [] | [number],
  'profile_posts_weight' : [] | [number],
  'following_comment_degree_penalty' : number,
  'following_comment_weight' : number,
  'include_portals' : boolean,
  'freshness_weight' : [] | [number],
  'relevant_comment_count' : number,
  'portal_admin_posts_weight' : [] | [number],
  'max_follower_degrees' : bigint,
  'show_caller_posts' : [] | [boolean],
  'award_upvote_multiplier' : [] | [bigint],
}
export interface PersonalizedFeedV1Query {
  'parameters' : PersonalizedFeedV1Parameters,
  'query' : PagedQuery,
}
export interface PollChoiceView {
  'id' : bigint,
  'text' : string,
  'ordinal' : bigint,
  'total_votes' : bigint,
}
export type PollKind = { 'NFT' : null } |
  { 'Text' : null } |
  { 'Traditional' : null } |
  { 'Quadratic' : null };
export interface PollView {
  'id' : bigint,
  'is_public' : boolean,
  'title' : string,
  'cost' : bigint,
  'content_id' : bigint,
  'kind' : PollKind,
  'vote_choice_ids' : BigUint64Array | bigint[],
  'created_at' : bigint,
  'voting_tokens' : bigint,
  'total_votes' : bigint,
  'choices' : Array<PollChoiceView>,
  'expires_at' : bigint,
}
export interface PortalHiglights {
  'ordinals' : Array<UserPortalHighlight>,
  'portals' : Array<PortalView>,
}
export interface PortalInfo {
  'cover_photo' : [] | [string],
  'links' : Array<Link>,
  'rules' : [] | [Array<PortalRule>],
}
export interface PortalInfoView {
  'id' : bigint,
  'is_nsfw' : boolean,
  'owner' : [] | [UserView],
  'name' : string,
  'perm' : [] | [bigint],
  'slug' : string,
  'icon_url' : string,
  'portal_type' : PortalType,
}
export interface PortalInvite { 'slug' : string, 'referral_code' : string }
export type PortalMemberAddResult = { 'Ok' : MemberListItemView } |
  { 'Err' : string };
export interface PortalMemberQuery {
  'filter_order' : [] | [MemberFilterOrder],
  'includes_roles' : boolean,
  'page_size' : bigint,
  'role_ids' : BigUint64Array | bigint[],
  'portal_id' : bigint,
  'username_filter' : [] | [string],
  'page_start' : bigint,
}
export interface PortalMemberView {
  'member' : MemberView,
  'portal' : PortalView,
}
export interface PortalRule { 'desc' : string, 'name' : string }
export interface PortalSearchQuery {
  'sort_by' : [] | [PortalSortBy],
  'page_size' : bigint,
  'page' : bigint,
  'query' : string,
  'chain_filter' : [] | [ChainType],
  'sort_direction' : [] | [SortDirection],
}
export interface PortalSearchResult {
  'page_size' : bigint,
  'page' : bigint,
  'total_pages' : bigint,
  'items' : Array<PortalView>,
}
export type PortalSortBy = { 'MemberCount' : null } |
  { 'Name' : null } |
  { 'Levenshtein' : null } |
  { 'ContentCount' : null };
export type PortalType = { 'Portal' : null } |
  { 'User' : null };
export interface PortalView {
  'id' : bigint,
  'is_following' : boolean,
  'is_highlighted' : boolean,
  'is_nsfw' : boolean,
  'owner' : UserView,
  'info' : [] | [PortalInfo],
  'name' : string,
  'perm' : bigint,
  'slug' : string,
  'description' : string,
  'created_at' : bigint,
  'is_mod' : boolean,
  'icon_url' : string,
  'portal_type' : [] | [PortalType],
  'owner_id' : Principal,
  'member_count' : bigint,
  'content_count' : bigint,
  'requires_phone' : boolean,
}
export interface PortalViewPaged {
  'page_size' : bigint,
  'views' : Array<PortalView>,
  'page' : bigint,
  'total_pages' : bigint,
}
export interface PortalViewPagedQuery {
  'page_size' : bigint,
  'page' : bigint,
  'sort' : ExplorePortalSort,
  'highlighted' : boolean,
}
export interface PostAwardView { 'award_view' : AwardView, 'count' : bigint }
export type PostQueueAction = { 'Approve' : null } |
  { 'Deny' : null };
export type PostQueueActionResult = { 'Ok' : ContentView } |
  { 'Err' : [] | [SocietyRsError] };
export interface PostQueuePagedQuery {
  'page_size' : bigint,
  'portal_id' : bigint,
  'status_filter' : [] | [ContentStatusFilter],
  'page' : bigint,
}
export type ProcessedNonceFilter = { 'CreatedOnOrAfter' : bigint } |
  { 'Unprocessed' : null } |
  { 'ProcessedOnOrAfter' : bigint };
export interface Reaction {
  'title' : string,
  'content_id' : bigint,
  'root_parent_id' : [] | [bigint],
  'reaction' : ContentReaction,
}
export type ReadNotificationsResult = { 'Ok' : BigUint64Array | bigint[] } |
  { 'Err' : string };
export type ReferralResult = { 'Ok' : string } |
  { 'Err' : string };
export type RegisterNonceResult = { 'Ok' : string } |
  { 'Err' : [] | [SocietyRsError] };
export interface ReportView {
  'id' : bigint,
  'read_at' : bigint,
  'action' : string,
  'content' : ContentView,
  'actor' : [] | [UserView],
  'report_type' : string,
  'content_id' : bigint,
  'actor_id' : Principal,
  'created_at' : bigint,
  'message' : string,
  'actioned_at' : bigint,
  'reporter_id' : Principal,
  'reader_id' : Principal,
  'reporter' : UserView,
  'reader' : [] | [UserView],
}
export type ReverseContentActionResult = { 'Ok' : ContentActionView } |
  { 'Err' : [] | [SocietyRsError] };
export type RoleKind = { 'Default' : null } |
  { 'Custom' : null } |
  { 'Everyone' : null };
export interface RoleListItemView {
  'id' : bigint,
  'kind' : RoleKind,
  'name' : string,
  'color' : number,
  'ordinal' : bigint,
}
export interface RoleListMicroItemView { 'id' : bigint, 'name' : string }
export interface RoleView {
  'id' : bigint,
  'permissions' : bigint,
  'kind' : RoleKind,
  'name' : string,
  'color' : number,
  'ordinal' : bigint,
  'icon_url' : string,
  'member_count' : bigint,
  'is_locked' : boolean,
}
export type SetUserSettingsResult = { 'Ok' : UserSettingsView } |
  { 'Err' : string };
export type SocialProfile = { 'Pinterest' : string } |
  { 'Reddit' : string } |
  { 'Website' : string } |
  { 'TikTok' : string } |
  { 'Twitch' : string } |
  { 'Facebook' : string } |
  { 'YouTube' : string } |
  { 'Spotify' : string } |
  { 'Discord' : string } |
  { 'OpenChat' : string } |
  { 'Telegram' : string } |
  { 'Vimeo' : string } |
  { 'LinkedIn' : string } |
  { 'Instagram' : string } |
  { 'Twitter' : string };
export type SocialProfileDeprecated = { 'Website' : string } |
  { 'TikTok' : string } |
  { 'Twitch' : string } |
  { 'Facebook' : string } |
  { 'YouTube' : string } |
  { 'Discord' : string } |
  { 'OpenChat' : string } |
  { 'Telegram' : string } |
  { 'Instagram' : string } |
  { 'Twitter' : string };
export type SocietyRsError = { 'NotFound' : string } |
  { 'Unauthorized' : string } |
  { 'InternalError' : string } |
  { 'BadRequest' : string } |
  { 'InsufficientFunds' : string };
export type Sort = { 'Hot' : null } |
  { 'New' : null } |
  { 'Top' : null };
export type SortDirection = { 'Descending' : null } |
  { 'Ascending' : null };
export type StringResult = { 'Ok' : string } |
  { 'Err' : [] | [SocietyRsError] };
export interface Tag {
  'id' : bigint,
  'total' : bigint,
  'name' : string,
  'is_archived' : boolean,
}
export type TokenError = { 'TokenGenerationError' : null } |
  { 'EncryptionError' : EncryptionError } |
  { 'TokenNotFound' : string } |
  { 'VerificationFailed' : null } |
  { 'TokenExpired' : null };
export interface UpdateAwardRequest {
  'id' : bigint,
  'weight' : bigint,
  'cost' : bigint,
  'name' : string,
  'purchasable' : boolean,
  'icon_url' : string,
}
export interface UpdatePoll {
  'days' : bigint,
  'kind' : PollKind,
  'choices' : Array<PollChoiceView>,
}
export interface UpdatePortal { 'id' : bigint, 'description' : string }
export interface UpdatePortalIcon { 'id' : bigint, 'icon_url' : string }
export interface UpdatePortalRole {
  'id' : bigint,
  'permissions' : bigint,
  'name' : string,
  'color' : number,
  'ordinal' : bigint,
  'icon_url' : string,
}
export interface UpdateUserEmail { 'email' : [] | [string] }
export type UpdateUserProfileIcon = { 'Nft' : NFTUpdateView } |
  { 'Url' : string };
export interface UpdateUserProfileV2 { 'bio' : string }
export interface UpdateUsername { 'username' : string }
export interface UserBan {
  'id' : bigint,
  'portal_id' : bigint,
  'created_at' : bigint,
  'user_id' : Principal,
  'banner_id' : Principal,
  'expires_at' : bigint,
  'reason' : string,
}
export interface UserFollowPaged {
  'page_size' : bigint,
  'page' : bigint,
  'total_pages' : bigint,
  'follow_status' : Array<[Principal, boolean]>,
  'users' : Array<UserView>,
}
export interface UserListItemView {
  'id' : Principal,
  'user_type' : bigint,
  'username' : string,
  'display_nft' : [] | [NFTView],
  'rights' : bigint,
  'created_at' : bigint,
  'icon_url' : string,
}
export interface UserListPaged { 'page_size' : bigint, 'page' : bigint }
export interface UserListWalletView {
  'id' : Principal,
  'user_type' : bigint,
  'username' : string,
  'wallets' : Array<UserWallet>,
}
export interface UserNotifications { 'notification_page' : AppNotificationPage }
export interface UserPlatformController {
  'kind' : UserPlatformPairKind,
  'created_at' : bigint,
  'controller_id' : Principal,
}
export interface UserPlatformPair {
  'id' : bigint,
  'platform_meta' : string,
  'kind' : UserPlatformPairKind,
  'created_at' : bigint,
  'platform_user_id' : string,
  'is_paired' : boolean,
  'platform_username' : string,
}
export type UserPlatformPairKind = { 'Discord' : null } |
  { 'OpenChat' : null } |
  { 'Telegram' : null } |
  { 'Twitter' : null };
export interface UserPlatformPairListItem {
  'platform_meta' : string,
  'user' : UserListWalletView,
  'user_id' : Principal,
  'platform_user_id' : string,
  'platform_username' : string,
}
export interface UserPortalHighlight {
  'portal_id' : bigint,
  'ordinal' : bigint,
}
export interface UserSearchQuery {
  'sort_by' : [] | [UserSortBy],
  'page_size' : bigint,
  'page' : bigint,
  'query' : string,
  'chain_filter' : [] | [ChainType],
  'sort_direction' : [] | [SortDirection],
}
export interface UserSearchResult {
  'page_size' : bigint,
  'page' : bigint,
  'total_pages' : bigint,
  'items' : Array<UserView>,
}
export interface UserSelfView {
  'id' : Principal,
  'bio' : string,
  'igc' : [] | [bigint],
  'is_phone_verified' : boolean,
  'user_type' : bigint,
  'username' : string,
  'is_provisional' : boolean,
  'display_nft' : [] | [NFTView],
  'num_posts' : bigint,
  'cover_photo' : [] | [string],
  'rights' : bigint,
  'referrals' : bigint,
  'created_at' : bigint,
  'active_streak' : bigint,
  'email' : [] | [string],
  'icon_url' : string,
  'has_membership' : boolean,
  'user_settings' : UserSettingsView,
  'identity' : [] | [Identity],
  'email_verified' : boolean,
  'followers' : bigint,
  'following' : bigint,
  'onboarding_state' : string,
  'social_presence' : [] | [Array<SocialProfileDeprecated>],
  'social_presence_2' : [] | [Array<[] | [SocialProfile]>],
}
export interface UserSettingsView {
  'preferred_chain' : [] | [ChainType],
  'app_notification' : [] | [AppNotificationSettings],
  'blockchains' : Array<string>,
  'preferred_language' : string,
  'interests' : Array<string>,
  'user_id' : Principal,
  'allow_nsfw' : boolean,
  'use_cases' : Array<string>,
  'email_messaging' : [] | [EmailMessagingSettings],
  'app_notification_grouping' : [] | [Array<GroupAppNotificationType>],
}
export type UserSortBy = { 'PointCount' : null } |
  { 'Name' : null } |
  { 'ActiveStreak' : null } |
  { 'FollowingCount' : null } |
  { 'Levenshtein' : null };
export interface UserView {
  'id' : Principal,
  'bio' : string,
  'is_phone_verified' : boolean,
  'user_type' : bigint,
  'username' : string,
  'display_nft' : [] | [NFTView],
  'num_posts' : bigint,
  'cover_photo' : [] | [string],
  'rights' : bigint,
  'created_at' : bigint,
  'active_streak' : bigint,
  'icon_url' : string,
  'followers' : bigint,
  'following' : bigint,
  'social_presence' : [] | [Array<SocialProfileDeprecated>],
  'social_presence_2' : [] | [Array<[] | [SocialProfile]>],
}
export interface UserWallet {
  'kind' : UserWalletKind,
  'created_at' : bigint,
  'is_paired' : boolean,
  'wallet_id' : Principal,
}
export type UserWalletKind = { 'Stoic' : null } |
  { 'InfinitySwap' : null } |
  { 'Plug' : null } |
  { 'Origyn' : null } |
  { 'Earth' : null };
export interface ValidationErrors { 'field' : string, 'errors' : Array<string> }
export interface _SERVICE {
  'accept_portal_invite' : ActorMethod<[PortalInvite], ActionResultPortal>,
  'accept_user_invite' : ActorMethod<[string], ActionResultUser>,
  'add_member_role' : ActorMethod<
    [bigint, Array<[bigint, bigint]>],
    Array<MemberView>
  >,
  'add_platform_controller' : ActorMethod<
    [UserPlatformPairKind, Principal],
    Array<UserPlatformController>
  >,
  'add_portal_role' : ActorMethod<
    [bigint, CreatePortalRole],
    ActionResultPortalRole
  >,
  'approve_all_pending_posts' : ActorMethod<[bigint], EmptySocietyRsResult>,
  'approve_deny_pending_post' : ActorMethod<
    [bigint, [] | [PostQueueAction]],
    PostQueueActionResult
  >,
  'award_post' : ActorMethod<[bigint, bigint], PostQueueActionResult>,
  'block_user_toggle' : ActorMethod<[Principal], [] | [boolean]>,
  'content_nsfw_set' : ActorMethod<[bigint, boolean], ActionResultContent>,
  'content_pin_set' : ActorMethod<[bigint, boolean], ActionResultContent>,
  'content_poll_quadratic_vote' : ActorMethod<
    [bigint, Array<[bigint, bigint]>],
    [] | [PollView]
  >,
  'content_poll_vote' : ActorMethod<[bigint, bigint], [] | [PollView]>,
  'create_content' : ActorMethod<[CreateContent], ActionResultContent>,
  'create_platform_pairing' : ActorMethod<
    [UserPlatformPairKind],
    [] | [UserPlatformPair]
  >,
  'create_portal' : ActorMethod<[CreatePortal], ActionResultPortal>,
  'delete_content' : ActorMethod<[bigint], ActionResultContent>,
  'delete_portal_role' : ActorMethod<[bigint], ActionResultPortalRole>,
  'follow_portal_toggle' : ActorMethod<[bigint], ActionResultPortal>,
  'follow_user' : ActorMethod<[Principal], ActionResultUser>,
  'follow_user_toggle' : ActorMethod<[Principal], ActionResultUser>,
  'get_assignable_portal_roles' : ActorMethod<
    [bigint],
    [] | [[MemberView, Array<RoleView>]]
  >,
  'get_content' : ActorMethod<[bigint], ActionResultContent>,
  'get_content_children' : ActorMethod<[ContentQuery], Array<ContentTreeView>>,
  'get_content_children_page' : ActorMethod<
    [ContentQuery],
    ContentTreeViewPageResult
  >,
  'get_content_since' : ActorMethod<[bigint, bigint], Array<ContentTreeView>>,
  'get_content_view_counts' : ActorMethod<
    [BigUint64Array | bigint[]],
    Array<[bigint, bigint]>
  >,
  'get_identity_for_principal' : ActorMethod<[Principal], [] | [Identity]>,
  'get_nft_pfps' : ActorMethod<
    [[] | [boolean], [] | [NFTChainType]],
    Array<MultiChainUpdate>
  >,
  'get_notification_page' : ActorMethod<
    [NotificationPageQuery],
    NotificationResult
  >,
  'get_own_id' : ActorMethod<[], Principal>,
  'get_paired_platforms' : ActorMethod<[], Array<UserPlatformPair>>,
  'get_paired_platforms_by_user' : ActorMethod<
    [Principal],
    Array<UserPlatformPair>
  >,
  'get_paired_user_by_platform' : ActorMethod<
    [UserPlatformPairKind],
    Array<UserPlatformPairListItem>
  >,
  'get_paired_wallets' : ActorMethod<[], Array<UserWallet>>,
  'get_platform_controllers' : ActorMethod<[], Array<UserPlatformController>>,
  'get_platform_pair_code' : ActorMethod<[UserPlatformPairKind], [] | [string]>,
  'get_portal' : ActorMethod<[string], ActionResultPortal>,
  'get_portal_content' : ActorMethod<
    [string, PagedQuery],
    ActionResultGetContentPaged
  >,
  'get_portal_content_action_feed' : ActorMethod<
    [ContentActionFeedQuery],
    ContentActionHistoryFeedResult
  >,
  'get_portal_content_action_feed_page' : ActorMethod<
    [ContentActionPagedQuery],
    ContentActionPageViewResult
  >,
  'get_portal_info' : ActorMethod<[bigint], [] | [PortalInfo]>,
  'get_portal_member_memos' : ActorMethod<[bigint, bigint], Array<string>>,
  'get_portal_member_wallets' : ActorMethod<
    [bigint],
    Array<MemberListWalletView>
  >,
  'get_portal_members' : ActorMethod<
    [PortalMemberQuery],
    Array<MemberListItemView>
  >,
  'get_portal_members_by_status' : ActorMethod<
    [bigint, MemberKind],
    Array<MemberListItemView>
  >,
  'get_portal_members_v2' : ActorMethod<
    [PortalMemberQuery],
    GetPortalMemberV2Result
  >,
  'get_portal_roles' : ActorMethod<[bigint], Array<RoleView>>,
  'get_portals' : ActorMethod<[Array<string>], ActionResultPortals>,
  'get_post_queue_feed_page' : ActorMethod<
    [PostQueuePagedQuery],
    ContentViewPagedResult
  >,
  'get_principal_for_user_name' : ActorMethod<[string], [] | [Principal]>,
  'get_role_members' : ActorMethod<[bigint], Array<MemberListItemView>>,
  'get_self' : ActorMethod<[], ActionResultUserSelf>,
  'get_self_portals' : ActorMethod<[], Array<PortalView>>,
  'get_user' : ActorMethod<[string], ActionResultUser>,
  'get_user_blocked' : ActorMethod<[UserListPaged], UserFollowPaged>,
  'get_user_by_principal' : ActorMethod<[Principal], ActionResultUser>,
  'get_user_content' : ActorMethod<
    [string, PagedQuery],
    ActionResultGetContentPaged
  >,
  'get_user_followers' : ActorMethod<[string, UserListPaged], UserFollowPaged>,
  'get_user_following' : ActorMethod<[string, UserListPaged], UserFollowPaged>,
  'get_user_follows' : ActorMethod<[], Array<PortalView>>,
  'get_user_portal_roles' : ActorMethod<
    [bigint, Principal],
    [] | [PortalMemberView]
  >,
  'get_user_portals' : ActorMethod<[Principal], Array<PortalView>>,
  'get_user_referral_code' : ActorMethod<[], ReferralResult>,
  'is_phone_paried' : ActorMethod<[], { 'Ok' : boolean } | { 'Err' : string }>,
  'is_phone_verified' : ActorMethod<
    [string],
    { 'Ok' : boolean } |
      { 'Err' : string }
  >,
  'is_user_following' : ActorMethod<[Principal], boolean>,
  'join_portal' : ActorMethod<[bigint], ActionResultPortal>,
  'leave_portal' : ActorMethod<[bigint], ActionResultPortal>,
  'list_content' : ActorMethod<[PagedQuery], ContentViewPage>,
  'list_portals' : ActorMethod<[PortalViewPagedQuery], PortalViewPaged>,
  'mark_all_notifications_read' : ActorMethod<[], EmptyResult>,
  'mark_notifications_read' : ActorMethod<
    [BigUint64Array | bigint[]],
    ReadNotificationsResult
  >,
  'member_search' : ActorMethod<[string], Array<MemberSearchResult>>,
  'pair_platform' : ActorMethod<
    [UserPlatformPairKind, Principal, string, string, string, string],
    ActionResultPairPlatform
  >,
  'personalized_feed_v1' : ActorMethod<
    [PersonalizedFeedV1Query],
    { 'Ok' : ContentViewPage } |
      { 'Err' : string }
  >,
  'pin_user_content' : ActorMethod<[bigint, boolean], EmptyResult>,
  'portal_member_add' : ActorMethod<[bigint, Principal], PortalMemberAddResult>,
  'portal_nsfw_toggle' : ActorMethod<[bigint], ActionResultPortal>,
  'portal_requires_phone' : ActorMethod<[bigint, boolean], ActionResultPortal>,
  'react_to_content' : ActorMethod<
    [bigint, [] | [ContentReaction]],
    ActionResultContent
  >,
  'read_notifications' : ActorMethod<
    [BigUint64Array | bigint[]],
    ReadNotificationsResult
  >,
  'remove_content' : ActorMethod<[bigint], ActionResultContent>,
  'remove_follower' : ActorMethod<[Principal], ActionResultUser>,
  'remove_member_role' : ActorMethod<
    [bigint, Array<[bigint, bigint]>],
    Array<MemberView>
  >,
  'remove_portal' : ActorMethod<[bigint], undefined>,
  'reverse_content_action' : ActorMethod<[bigint], ReverseContentActionResult>,
  'reverse_portal_content_action' : ActorMethod<[bigint], EmptyResult>,
  'search_portals' : ActorMethod<[PortalSearchQuery], ActionResultPortalSearch>,
  'search_tags' : ActorMethod<[string], Array<Tag>>,
  'search_users' : ActorMethod<[UserSearchQuery], ActionResultUserSearch>,
  'set_action' : ActorMethod<[bigint, string], ActionResultReport>,
  'set_nft_pfps' : ActorMethod<
    [Array<MultiChainUpdate>],
    MultiChainUpdateResponse
  >,
  'set_portal_members_status' : ActorMethod<
    [bigint, bigint, MemberKind, string],
    [] | [MemberListItemView]
  >,
  'set_read' : ActorMethod<[bigint], Array<ActionResultReport>>,
  'unfollow_user' : ActorMethod<[Principal], ActionResultUser>,
  'unpair_phone' : ActorMethod<[], { 'Ok' : boolean } | { 'Err' : string }>,
  'unpair_platform' : ActorMethod<
    [UserPlatformPairKind],
    Array<UserPlatformPair>
  >,
  'unpair_wallet' : ActorMethod<[UserWalletKind], undefined>,
  'unverify_phone' : ActorMethod<
    [string],
    { 'Ok' : boolean } |
      { 'Err' : string }
  >,
  'update_content' : ActorMethod<
    [
      bigint,
      string,
      Array<string>,
      [] | [boolean],
      [] | [boolean],
      [] | [UpdatePoll],
    ],
    ActionResultContent
  >,
  'update_portal' : ActorMethod<[UpdatePortal], ActionResultPortal>,
  'update_portal_icon' : ActorMethod<[UpdatePortalIcon], ActionResultPortal>,
  'update_portal_info_cover_photo' : ActorMethod<
    [bigint, [] | [string]],
    ActionResultPortal
  >,
  'update_portal_info_links' : ActorMethod<
    [bigint, Array<Link>],
    ActionResultPortal
  >,
  'update_portal_info_rules' : ActorMethod<
    [bigint, [] | [Array<PortalRule>]],
    ActionResultPortal
  >,
  'update_portal_pinned_posts' : ActorMethod<
    [bigint, BigUint64Array | bigint[]],
    EmptySocietyRsResult
  >,
  'update_portal_role' : ActorMethod<
    [UpdatePortalRole],
    ActionResultPortalRole
  >,
  'update_portal_role_ordinals' : ActorMethod<
    [bigint, Array<[bigint, bigint]>],
    ActionResultUpdatePortalRoleOrdinal
  >,
  'update_social_presence' : ActorMethod<
    [Array<SocialProfile>],
    ActionResultUserSelf
  >,
  'update_user_cover_photo' : ActorMethod<
    [[] | [string]],
    ActionResultUserSelf
  >,
  'update_user_email' : ActorMethod<[UpdateUserEmail], ActionResultUserSelf>,
  'update_user_pinned_posts' : ActorMethod<
    [BigUint64Array | bigint[]],
    EmptySocietyRsResult
  >,
  'update_username' : ActorMethod<[UpdateUsername], ActionResultUserSelf>,
  'update_wallet_type' : ActorMethod<
    [Principal, IdentityWalletType],
    undefined
  >,
  'user_search' : ActorMethod<[string], Array<UserListItemView>>,
  'user_set_profile_icon' : ActorMethod<
    [[] | [UpdateUserProfileIcon]],
    [] | [UserSelfView]
  >,
  'user_set_profile_v2' : ActorMethod<
    [UpdateUserProfileV2],
    [] | [UserSelfView]
  >,
  'user_set_settings_v2' : ActorMethod<
    [UserSettingsView],
    SetUserSettingsResult
  >,
  'user_wallet_pair_dscvr' : ActorMethod<[Principal], [] | [UserWallet]>,
  'user_wallet_pair_foreign' : ActorMethod<
    [UserWalletKind, Principal],
    [] | [UserWallet]
  >,
  'verify_email_token' : ActorMethod<[string], EmailVerificationEmptyResult>,
  'verify_phone' : ActorMethod<
    [Principal, string],
    { 'Ok' : boolean } |
      { 'Err' : string }
  >,
  'vote_content' : ActorMethod<[bigint, bigint], ActionResultContent>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
