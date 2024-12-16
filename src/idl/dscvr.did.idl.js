export const idlFactory = ({ IDL }) => {
  const ContentTreeView = IDL.Rec();
  const ContentView = IDL.Rec();
  const PortalInvite = IDL.Record({
    'slug' : IDL.Text,
    'referral_code' : IDL.Text,
  });
  const NFTChainType = IDL.Variant({
    'InternetComputer' : IDL.Null,
    'Ethereum' : IDL.Null,
    'Solana' : IDL.Null,
    'Polygon' : IDL.Null,
    'Optimism' : IDL.Null,
    'Arbitrum' : IDL.Null,
  });
  const NFTView = IDL.Record({
    'chain' : IDL.Opt(NFTChainType),
    'meta' : IDL.Text,
    'is_owner' : IDL.Bool,
  });
  const SocialProfileDeprecated = IDL.Variant({
    'Website' : IDL.Text,
    'TikTok' : IDL.Text,
    'Twitch' : IDL.Text,
    'Facebook' : IDL.Text,
    'YouTube' : IDL.Text,
    'Discord' : IDL.Text,
    'OpenChat' : IDL.Text,
    'Telegram' : IDL.Text,
    'Instagram' : IDL.Text,
    'Twitter' : IDL.Text,
  });
  const SocialProfile = IDL.Variant({
    'Pinterest' : IDL.Text,
    'Reddit' : IDL.Text,
    'Website' : IDL.Text,
    'TikTok' : IDL.Text,
    'Twitch' : IDL.Text,
    'Facebook' : IDL.Text,
    'YouTube' : IDL.Text,
    'Spotify' : IDL.Text,
    'Discord' : IDL.Text,
    'OpenChat' : IDL.Text,
    'Telegram' : IDL.Text,
    'Vimeo' : IDL.Text,
    'LinkedIn' : IDL.Text,
    'Instagram' : IDL.Text,
    'Twitter' : IDL.Text,
  });
  const UserView = IDL.Record({
    'id' : IDL.Principal,
    'bio' : IDL.Text,
    'is_phone_verified' : IDL.Bool,
    'user_type' : IDL.Nat64,
    'username' : IDL.Text,
    'display_nft' : IDL.Opt(NFTView),
    'num_posts' : IDL.Nat64,
    'cover_photo' : IDL.Opt(IDL.Text),
    'rights' : IDL.Nat64,
    'created_at' : IDL.Nat64,
    'active_streak' : IDL.Nat64,
    'icon_url' : IDL.Text,
    'followers' : IDL.Nat64,
    'following' : IDL.Nat64,
    'social_presence' : IDL.Opt(IDL.Vec(SocialProfileDeprecated)),
    'social_presence_2' : IDL.Opt(IDL.Vec(IDL.Opt(SocialProfile))),
  });
  const Link = IDL.Record({ 'href' : IDL.Text });
  const PortalRule = IDL.Record({ 'desc' : IDL.Text, 'name' : IDL.Text });
  const PortalInfo = IDL.Record({
    'cover_photo' : IDL.Opt(IDL.Text),
    'links' : IDL.Vec(Link),
    'rules' : IDL.Opt(IDL.Vec(PortalRule)),
  });
  const PortalType = IDL.Variant({ 'Portal' : IDL.Null, 'User' : IDL.Null });
  const PortalView = IDL.Record({
    'id' : IDL.Nat64,
    'is_following' : IDL.Bool,
    'is_highlighted' : IDL.Bool,
    'is_nsfw' : IDL.Bool,
    'owner' : UserView,
    'info' : IDL.Opt(PortalInfo),
    'name' : IDL.Text,
    'perm' : IDL.Nat64,
    'slug' : IDL.Text,
    'description' : IDL.Text,
    'created_at' : IDL.Nat64,
    'is_mod' : IDL.Bool,
    'icon_url' : IDL.Text,
    'portal_type' : IDL.Opt(PortalType),
    'owner_id' : IDL.Principal,
    'member_count' : IDL.Nat64,
    'content_count' : IDL.Nat64,
    'requires_phone' : IDL.Bool,
  });
  const ValidationErrors = IDL.Record({
    'field' : IDL.Text,
    'errors' : IDL.Vec(IDL.Text),
  });
  const SocietyRsError = IDL.Variant({
    'NotFound' : IDL.Text,
    'Unauthorized' : IDL.Text,
    'InternalError' : IDL.Text,
    'BadRequest' : IDL.Text,
    'InsufficientFunds' : IDL.Text,
  });
  const ActionResultPortal = IDL.Record({
    'status' : IDL.Text,
    'result' : IDL.Opt(PortalView),
    'errors' : IDL.Opt(IDL.Vec(ValidationErrors)),
    'message' : IDL.Text,
    'error_code' : IDL.Opt(SocietyRsError),
  });
  const ActionResultUser = IDL.Record({
    'status' : IDL.Text,
    'result' : IDL.Opt(UserView),
    'errors' : IDL.Opt(IDL.Vec(ValidationErrors)),
    'message' : IDL.Text,
    'error_code' : IDL.Opt(SocietyRsError),
  });
  const MemberKind = IDL.Variant({
    'Left' : IDL.Null,
    'Approved' : IDL.Null,
    'Banned' : IDL.Null,
    'Kicked' : IDL.Null,
    'Pending' : IDL.Null,
  });
  const UserListItemView = IDL.Record({
    'id' : IDL.Principal,
    'user_type' : IDL.Nat64,
    'username' : IDL.Text,
    'display_nft' : IDL.Opt(NFTView),
    'rights' : IDL.Nat64,
    'created_at' : IDL.Nat64,
    'icon_url' : IDL.Text,
  });
  const RoleKind = IDL.Variant({
    'Default' : IDL.Null,
    'Custom' : IDL.Null,
    'Everyone' : IDL.Null,
  });
  const RoleView = IDL.Record({
    'id' : IDL.Nat64,
    'permissions' : IDL.Nat64,
    'kind' : RoleKind,
    'name' : IDL.Text,
    'color' : IDL.Nat32,
    'ordinal' : IDL.Nat64,
    'icon_url' : IDL.Text,
    'member_count' : IDL.Nat64,
    'is_locked' : IDL.Bool,
  });
  const MemberView = IDL.Record({
    'id' : IDL.Nat64,
    'status' : MemberKind,
    'portal_id' : IDL.Nat64,
    'user' : UserListItemView,
    'created_at' : IDL.Nat64,
    'user_id' : IDL.Principal,
    'roles' : IDL.Vec(RoleView),
  });
  const CreatePortalRole = IDL.Record({
    'permissions' : IDL.Nat64,
    'name' : IDL.Text,
    'color' : IDL.Nat32,
    'ordinal' : IDL.Nat64,
    'icon_url' : IDL.Text,
  });
  const ActionResultPortalRole = IDL.Record({
    'status' : IDL.Text,
    'result' : IDL.Opt(RoleView),
    'errors' : IDL.Opt(IDL.Vec(ValidationErrors)),
    'message' : IDL.Text,
    'error_code' : IDL.Opt(SocietyRsError),
  });
  const EmptySocietyRsResult = IDL.Variant({
    'Ok' : IDL.Null,
    'Err' : IDL.Opt(SocietyRsError),
  });
  const PostQueueAction = IDL.Variant({
    'Approve' : IDL.Null,
    'Deny' : IDL.Null,
  });
  const ContentStatus = IDL.Variant({
    'Approved' : IDL.Null,
    'Denied' : IDL.Null,
    'Pending' : IDL.Null,
  });
  const AppReport = IDL.Record({
    'reported_other' : IDL.Nat64,
    'rejected' : IDL.Nat64,
    'proceeded' : IDL.Nat64,
    'reported_malicious' : IDL.Nat64,
  });
  const AppReportView = IDL.Record({ 'url' : IDL.Text, 'report' : AppReport });
  const PollKind = IDL.Variant({
    'NFT' : IDL.Null,
    'Text' : IDL.Null,
    'Traditional' : IDL.Null,
    'Quadratic' : IDL.Null,
  });
  const PollChoiceView = IDL.Record({
    'id' : IDL.Nat64,
    'text' : IDL.Text,
    'ordinal' : IDL.Nat64,
    'total_votes' : IDL.Nat64,
  });
  const PollView = IDL.Record({
    'id' : IDL.Nat64,
    'is_public' : IDL.Bool,
    'title' : IDL.Text,
    'cost' : IDL.Nat64,
    'content_id' : IDL.Nat64,
    'kind' : PollKind,
    'vote_choice_ids' : IDL.Vec(IDL.Nat64),
    'created_at' : IDL.Nat64,
    'voting_tokens' : IDL.Nat64,
    'total_votes' : IDL.Nat64,
    'choices' : IDL.Vec(PollChoiceView),
    'expires_at' : IDL.Nat64,
  });
  const Tag = IDL.Record({
    'id' : IDL.Nat64,
    'total' : IDL.Nat64,
    'name' : IDL.Text,
    'is_archived' : IDL.Bool,
  });
  const AwardView = IDL.Record({
    'id' : IDL.Nat64,
    'cost' : IDL.Nat64,
    'name' : IDL.Text,
    'icon_url' : IDL.Text,
  });
  const PostAwardView = IDL.Record({
    'award_view' : AwardView,
    'count' : IDL.Nat64,
  });
  const ContentReaction = IDL.Variant({
    'Sad' : IDL.Null,
    'Wow' : IDL.Null,
    'Care' : IDL.Null,
    'Clap' : IDL.Null,
    'Fire' : IDL.Null,
    'HaHa' : IDL.Null,
    'Like' : IDL.Null,
    'Dislike' : IDL.Null,
    'Angry' : IDL.Null,
  });
  const PortalInfoView = IDL.Record({
    'id' : IDL.Nat64,
    'is_nsfw' : IDL.Bool,
    'owner' : IDL.Opt(UserView),
    'name' : IDL.Text,
    'perm' : IDL.Opt(IDL.Nat64),
    'slug' : IDL.Text,
    'icon_url' : IDL.Text,
    'portal_type' : PortalType,
  });
  ContentView.fill(
    IDL.Record({
      'id' : IDL.Nat64,
      'url' : IDL.Text,
      'upvotes' : IDL.Int64,
      'is_nsfw' : IDL.Bool,
      'status' : IDL.Opt(ContentStatus),
      'title' : IDL.Text,
      'deleted' : IDL.Opt(IDL.Bool),
      'app_reports' : IDL.Opt(IDL.Vec(AppReportView)),
      'is_pinned' : IDL.Bool,
      'owner' : UserView,
      'disable_comments' : IDL.Opt(IDL.Bool),
      'body' : IDL.Text,
      'parent_content' : IDL.Opt(ContentView),
      'owner_color' : IDL.Nat32,
      'lang' : IDL.Text,
      'frame_interaction_friends' : IDL.Vec(UserView),
      'perm' : IDL.Nat64,
      'poll' : IDL.Opt(PollView),
      'tags' : IDL.Vec(Tag),
      'content_type' : IDL.Text,
      'created_at' : IDL.Nat64,
      'post_awards' : IDL.Vec(PostAwardView),
      'is_mod' : IDL.Bool,
      'parent_id' : IDL.Opt(IDL.Nat64),
      'icon_url' : IDL.Text,
      'reaction_counts' : IDL.Vec(IDL.Tuple(ContentReaction, IDL.Nat64)),
      'owner_id' : IDL.Principal,
      'children_count' : IDL.Nat64,
      'downvotes' : IDL.Int64,
      'is_author_pinned' : IDL.Bool,
      'frame_interaction_count' : IDL.Nat64,
      'root_parent_content' : IDL.Opt(ContentView),
      'relevant_children' : IDL.Vec(ContentView),
      'is_reactor' : IDL.Opt(ContentReaction),
      'friends' : IDL.Vec(UserView),
      'is_upvoter' : IDL.Bool,
      'owner_roles' : IDL.Vec(IDL.Nat64),
      'removed' : IDL.Opt(IDL.Bool),
      'is_downvoter' : IDL.Bool,
      'portal' : PortalInfoView,
    })
  );
  const PostQueueActionResult = IDL.Variant({
    'Ok' : ContentView,
    'Err' : IDL.Opt(SocietyRsError),
  });
  const ActionResultContent = IDL.Record({
    'status' : IDL.Text,
    'result' : IDL.Opt(ContentView),
    'errors' : IDL.Opt(IDL.Vec(ValidationErrors)),
    'message' : IDL.Text,
    'error_code' : IDL.Opt(SocietyRsError),
  });
  const CreatePoll = IDL.Record({
    'days' : IDL.Nat64,
    'kind' : PollKind,
    'choices' : IDL.Vec(IDL.Text),
  });
  const CreateContent = IDL.Record({
    'url' : IDL.Text,
    'is_nsfw' : IDL.Bool,
    'title' : IDL.Text,
    'portal_id' : IDL.Opt(IDL.Nat64),
    'disable_comments' : IDL.Opt(IDL.Bool),
    'body' : IDL.Text,
    'lang' : IDL.Text,
    'poll' : IDL.Opt(CreatePoll),
    'tags' : IDL.Vec(IDL.Text),
    'content_type' : IDL.Text,
    'parent_id' : IDL.Opt(IDL.Nat64),
    'icon_url' : IDL.Text,
  });
  const UserPlatformPairKind = IDL.Variant({
    'Discord' : IDL.Null,
    'OpenChat' : IDL.Null,
    'Telegram' : IDL.Null,
    'Twitter' : IDL.Null,
  });
  const UserPlatformPair = IDL.Record({
    'id' : IDL.Nat64,
    'platform_meta' : IDL.Text,
    'kind' : UserPlatformPairKind,
    'created_at' : IDL.Nat64,
    'platform_user_id' : IDL.Text,
    'is_paired' : IDL.Bool,
    'platform_username' : IDL.Text,
  });
  const CreatePortal = IDL.Record({
    'is_nsfw' : IDL.Bool,
    'name' : IDL.Text,
    'slug' : IDL.Text,
    'description' : IDL.Text,
    'icon_url' : IDL.Text,
  });
  const ContentSort = IDL.Variant({
    'OP' : IDL.Null,
    'New' : IDL.Null,
    'Old' : IDL.Null,
    'Live' : IDL.Null,
    'Default' : IDL.Null,
    'VerifiedPfp' : IDL.Null,
  });
  const ContentQuery = IDL.Record({
    'max_grand_children_per_level' : IDL.Opt(IDL.Nat16),
    'content_id' : IDL.Nat64,
    'sort' : ContentSort,
    'thread_start' : IDL.Nat64,
    'since' : IDL.Opt(IDL.Nat64),
    'thread_size' : IDL.Nat64,
    'max_grand_child_depth' : IDL.Opt(IDL.Nat16),
  });
  ContentTreeView.fill(
    IDL.Record({
      'id' : IDL.Nat64,
      'url' : IDL.Text,
      'upvotes' : IDL.Int64,
      'is_nsfw' : IDL.Bool,
      'status' : IDL.Opt(ContentStatus),
      'title' : IDL.Text,
      'updated_at' : IDL.Nat64,
      'deleted' : IDL.Opt(IDL.Bool),
      'is_pinned' : IDL.Bool,
      'owner' : UserView,
      'disable_comments' : IDL.Opt(IDL.Bool),
      'body' : IDL.Text,
      'owner_color' : IDL.Nat32,
      'lang' : IDL.Text,
      'perm' : IDL.Nat64,
      'tags' : IDL.Vec(Tag),
      'content_type' : IDL.Text,
      'created_at' : IDL.Nat64,
      'children' : IDL.Vec(ContentTreeView),
      'is_mod' : IDL.Bool,
      'parent_id' : IDL.Opt(IDL.Nat64),
      'icon_url' : IDL.Text,
      'reaction_counts' : IDL.Vec(IDL.Tuple(ContentReaction, IDL.Nat64)),
      'owner_id' : IDL.Principal,
      'children_count' : IDL.Nat64,
      'downvotes' : IDL.Int64,
      'is_author_pinned' : IDL.Bool,
      'is_reactor' : IDL.Opt(ContentReaction),
      'is_upvoter' : IDL.Bool,
      'owner_roles' : IDL.Vec(IDL.Nat64),
      'removed' : IDL.Opt(IDL.Bool),
      'is_downvoter' : IDL.Bool,
      'portal' : PortalInfoView,
    })
  );
  const ContentTreeViewPage = IDL.Record({
    'page_size' : IDL.Nat64,
    'views' : IDL.Vec(ContentTreeView),
    'page' : IDL.Nat64,
    'total_pages' : IDL.Nat64,
  });
  const ContentTreeViewPageResult = IDL.Variant({
    'Ok' : ContentTreeViewPage,
    'Err' : IDL.Opt(SocietyRsError),
  });
  const IdentityEmail = IDL.Record({
    'verified' : IDL.Bool,
    'provider' : IDL.Opt(IDL.Text),
    'email' : IDL.Text,
  });
  const IdentityOAuth = IDL.Variant({ 'WorldCoin' : IDL.Text });
  const IdentityWalletNetworkType = IDL.Variant({
    'Ethereum' : IDL.Null,
    'Solana' : IDL.Null,
    'Bitcoin' : IDL.Null,
    'Polygon' : IDL.Null,
  });
  const IdentityWalletChainType = IDL.Variant({
    'Evm' : IDL.Null,
    'Solana' : IDL.Null,
    'Bitcoin' : IDL.Null,
  });
  const IdentityWalletType = IDL.Variant({
    'Metamask' : IDL.Null,
    'Sollet' : IDL.Null,
    'SolletExtension' : IDL.Null,
    'Trustwallet' : IDL.Null,
    'Coinbase' : IDL.Null,
    'Phantom' : IDL.Null,
    'Solflare' : IDL.Null,
    'Backpack' : IDL.Null,
  });
  const IdentityWallet = IDL.Record({
    'key' : IDL.Vec(IDL.Nat8),
    'networks' : IDL.Vec(IDL.Opt(IdentityWalletNetworkType)),
    'chain' : IDL.Opt(IdentityWalletChainType),
    'kind' : IDL.Opt(IdentityWalletType),
  });
  const Identity = IDL.Variant({
    'Email' : IdentityEmail,
    'OAuth' : IdentityOAuth,
    'Wallet' : IdentityWallet,
    'Username' : IDL.Text,
  });
  const MetaType = IDL.Variant({
    'Image' : IDL.Text,
    'Model' : IDL.Text,
    'Audio' : IDL.Text,
    'Other' : IDL.Text,
    'Video' : IDL.Text,
  });
  const MultiChainNFTRequest = IDL.Record({
    'meta_type' : IDL.Opt(MetaType),
    'nft_id' : IDL.Opt(IDL.Text),
    'token_id' : IDL.Opt(IDL.Text),
    'chain' : IDL.Opt(NFTChainType),
    'last_verified' : IDL.Nat64,
    'contract_address' : IDL.Text,
  });
  const MultiChainUpdate = IDL.Record({
    'nft' : MultiChainNFTRequest,
    'owner' : IDL.Opt(IDL.Principal),
  });
  const AppNotificationType = IDL.Variant({
    'CommentMention' : IDL.Null,
    'CommentReply' : IDL.Null,
    'PostReaction' : IDL.Null,
    'PostReply' : IDL.Null,
    'CommentAward' : IDL.Null,
    'Follower' : IDL.Null,
    'PostAward' : IDL.Null,
    'PostMention' : IDL.Null,
    'CommentReaction' : IDL.Null,
  });
  const NotificationPageQuery = IDL.Record({
    'include_types' : IDL.Opt(IDL.Vec(AppNotificationType)),
    'page_size' : IDL.Nat64,
    'page' : IDL.Nat64,
    'grouping_enabled' : IDL.Opt(IDL.Bool),
  });
  const GroupNotificationRecentNotifier = IDL.Record({
    'nft' : IDL.Opt(NFTView),
    'name' : IDL.Opt(IDL.Text),
    'icon_url' : IDL.Opt(IDL.Text),
  });
  const AppGroupNotificationPayload = IDL.Record({
    'ids' : IDL.Opt(IDL.Vec(IDL.Nat64)),
    'total_notifiers' : IDL.Opt(IDL.Nat64),
    'recent_notifiers' : IDL.Opt(IDL.Vec(GroupNotificationRecentNotifier)),
  });
  const ContentMention = IDL.Record({
    'title' : IDL.Text,
    'content_id' : IDL.Nat64,
    'root_parent_id' : IDL.Opt(IDL.Nat64),
  });
  const ContentReply = IDL.Record({
    'title' : IDL.Text,
    'content_id' : IDL.Nat64,
    'root_parent_id' : IDL.Opt(IDL.Nat64),
    'comment_id' : IDL.Nat64,
  });
  const Reaction = IDL.Record({
    'title' : IDL.Text,
    'content_id' : IDL.Nat64,
    'root_parent_id' : IDL.Opt(IDL.Nat64),
    'reaction' : ContentReaction,
  });
  const AwardMeta = IDL.Record({ 'name' : IDL.Text, 'icon_url' : IDL.Text });
  const ContentAward = IDL.Record({
    'title' : IDL.Text,
    'award' : AwardMeta,
    'content_id' : IDL.Nat64,
    'root_parent_id' : IDL.Opt(IDL.Nat64),
  });
  const ApiNotificationType = IDL.Variant({
    'CommentMention' : ContentMention,
    'CommentReply' : ContentReply,
    'PostReaction' : Reaction,
    'PostReply' : ContentReply,
    'CommentAward' : ContentAward,
    'Follower' : IDL.Null,
    'PostAward' : ContentAward,
    'PostMention' : ContentMention,
    'CommentReaction' : Reaction,
  });
  const AppNotificationPayload = IDL.Record({
    'notifier_icon_url' : IDL.Opt(IDL.Text),
    'read_at' : IDL.Opt(IDL.Nat64),
    'body' : IDL.Opt(IDL.Text),
    'notification_group' : IDL.Opt(AppGroupNotificationPayload),
    'created_at' : IDL.Nat64,
    'notification_id' : IDL.Nat64,
    'notification_type' : ApiNotificationType,
    'notifier' : IDL.Opt(IDL.Text),
    'notifier_nft' : IDL.Opt(NFTView),
  });
  const AppNotificationPage = IDL.Record({
    'page_size' : IDL.Nat64,
    'notifications' : IDL.Vec(AppNotificationPayload),
    'num_pages' : IDL.Nat64,
    'page' : IDL.Nat64,
  });
  const UserNotifications = IDL.Record({
    'notification_page' : AppNotificationPage,
  });
  const NotificationResult = IDL.Variant({
    'Ok' : UserNotifications,
    'Err' : IDL.Text,
  });
  const UserWalletKind = IDL.Variant({
    'Stoic' : IDL.Null,
    'InfinitySwap' : IDL.Null,
    'Plug' : IDL.Null,
    'Origyn' : IDL.Null,
    'Earth' : IDL.Null,
  });
  const UserWallet = IDL.Record({
    'kind' : UserWalletKind,
    'created_at' : IDL.Nat64,
    'is_paired' : IDL.Bool,
    'wallet_id' : IDL.Principal,
  });
  const UserListWalletView = IDL.Record({
    'id' : IDL.Principal,
    'user_type' : IDL.Nat64,
    'username' : IDL.Text,
    'wallets' : IDL.Vec(UserWallet),
  });
  const UserPlatformPairListItem = IDL.Record({
    'platform_meta' : IDL.Text,
    'user' : UserListWalletView,
    'user_id' : IDL.Principal,
    'platform_user_id' : IDL.Text,
    'platform_username' : IDL.Text,
  });
  const Sort = IDL.Variant({
    'Hot' : IDL.Null,
    'New' : IDL.Null,
    'Top' : IDL.Null,
  });
  const ChainType = IDL.Variant({
    'InternetComputer' : IDL.Null,
    'Solana' : IDL.Null,
  });
  const PagedQuery = IDL.Record({
    'page_size' : IDL.Nat64,
    'lang' : IDL.Text,
    'page' : IDL.Nat64,
    'sort' : Sort,
    'query' : IDL.Opt(IDL.Text),
    'filter' : IDL.Text,
    'chain_filter' : IDL.Opt(ChainType),
    'max_age' : IDL.Opt(IDL.Nat64),
  });
  const ContentViewPage = IDL.Record({
    'page_size' : IDL.Nat64,
    'contents' : IDL.Vec(ContentView),
    'page' : IDL.Nat64,
    'total_pages' : IDL.Nat64,
  });
  const ActionResultGetContentPaged = IDL.Record({
    'status' : IDL.Text,
    'result' : IDL.Opt(ContentViewPage),
    'message' : IDL.Text,
    'error_code' : IDL.Opt(SocietyRsError),
  });
  const ContentActionType = IDL.Variant({
    'Reinstated' : IDL.Null,
    'Approved' : IDL.Null,
    'Denied' : IDL.Null,
    'ReQueued' : IDL.Null,
    'Removed' : IDL.Null,
  });
  const ContentActionFeedQuery = IDL.Record({
    'page_size' : IDL.Nat64,
    'moderator_filter' : IDL.Opt(IDL.Vec(IDL.Principal)),
    'action_filter' : IDL.Opt(IDL.Vec(ContentActionType)),
    'portal_id' : IDL.Nat32,
    'page' : IDL.Nat64,
  });
  const ContentActionHistoryView = IDL.Record({
    'action_id' : IDL.Nat64,
    'action' : IDL.Opt(ContentActionType),
    'content' : ContentView,
    'moderator' : IDL.Opt(UserView),
    'timestamp' : IDL.Nat64,
  });
  const ContentActionHistoryPage = IDL.Record({
    'page' : IDL.Nat64,
    'total_pages' : IDL.Nat64,
    'actions' : IDL.Vec(ContentActionHistoryView),
  });
  const ContentActionHistoryFeedResult = IDL.Variant({
    'Ok' : ContentActionHistoryPage,
    'Err' : SocietyRsError,
  });
  const ContentActionFilter = IDL.Variant({
    'Moderator' : IDL.Vec(IDL.Principal),
  });
  const ContentActionPagedQuery = IDL.Record({
    'page_size' : IDL.Nat64,
    'portal_id' : IDL.Nat64,
    'page' : IDL.Nat64,
    'filter' : IDL.Opt(ContentActionFilter),
  });
  const ContentEditPayload = IDL.Record({
    'title' : IDL.Text,
    'body' : IDL.Text,
    'nsfw' : IDL.Bool,
    'tags' : IDL.Vec(IDL.Text),
    'comments_disabled' : IDL.Bool,
  });
  const ContentEditedAction = IDL.Record({
    'post_edit' : ContentEditPayload,
    'pre_edit' : ContentEditPayload,
  });
  const ContentAction = IDL.Variant({
    'ContentRemoved' : IDL.Null,
    'ContentReinstated' : IDL.Null,
    'ContentEdited' : ContentEditedAction,
    'ContentDenied' : IDL.Null,
    'ContentApproved' : IDL.Null,
    'ContentReQueued' : IDL.Null,
  });
  const ContentActionView = IDL.Record({
    'id' : IDL.Nat64,
    'action' : IDL.Opt(ContentAction),
    'content' : IDL.Opt(ContentView),
    'moderator' : IDL.Opt(UserView),
    'timestamp' : IDL.Nat64,
  });
  const ContentActionPageView = IDL.Record({
    'page_size' : IDL.Nat64,
    'page' : IDL.Nat64,
    'total_pages' : IDL.Nat64,
    'actions' : IDL.Vec(ContentActionView),
  });
  const ContentActionPageViewResult = IDL.Variant({
    'Ok' : ContentActionPageView,
    'Err' : IDL.Opt(SocietyRsError),
  });
  const RoleListMicroItemView = IDL.Record({
    'id' : IDL.Nat64,
    'name' : IDL.Text,
  });
  const MemberListWalletView = IDL.Record({
    'id' : IDL.Nat64,
    'status' : MemberKind,
    'user' : UserListWalletView,
    'created_at' : IDL.Nat64,
    'user_id' : IDL.Principal,
    'roles' : IDL.Vec(RoleListMicroItemView),
  });
  const MemberFilterOrder = IDL.Variant({
    'Descending' : IDL.Null,
    'Ascending' : IDL.Null,
  });
  const PortalMemberQuery = IDL.Record({
    'filter_order' : IDL.Opt(MemberFilterOrder),
    'includes_roles' : IDL.Bool,
    'page_size' : IDL.Nat64,
    'role_ids' : IDL.Vec(IDL.Nat64),
    'portal_id' : IDL.Nat64,
    'username_filter' : IDL.Opt(IDL.Text),
    'page_start' : IDL.Nat64,
  });
  const RoleListItemView = IDL.Record({
    'id' : IDL.Nat64,
    'kind' : RoleKind,
    'name' : IDL.Text,
    'color' : IDL.Nat32,
    'ordinal' : IDL.Nat64,
  });
  const MemberListItemView = IDL.Record({
    'id' : IDL.Nat64,
    'status' : MemberKind,
    'user' : UserListItemView,
    'created_at' : IDL.Nat64,
    'user_id' : IDL.Principal,
    'roles' : IDL.Vec(RoleListItemView),
  });
  const GetPortalMemberPage = IDL.Record({
    'members' : IDL.Vec(MemberListItemView),
    'page' : IDL.Nat64,
    'total_members' : IDL.Nat64,
    'pages' : IDL.Nat64,
  });
  const GetPortalMemberV2Result = IDL.Variant({
    'Ok' : GetPortalMemberPage,
    'Err' : IDL.Opt(SocietyRsError),
  });
  const ActionResultPortals = IDL.Record({
    'status' : IDL.Text,
    'result' : IDL.Opt(IDL.Vec(PortalView)),
    'errors' : IDL.Opt(IDL.Vec(ValidationErrors)),
    'message' : IDL.Text,
    'error_code' : IDL.Opt(SocietyRsError),
  });
  const ContentStatusFilter = IDL.Variant({
    'Denied' : IDL.Null,
    'Pending' : IDL.Null,
  });
  const PostQueuePagedQuery = IDL.Record({
    'page_size' : IDL.Nat64,
    'portal_id' : IDL.Nat64,
    'status_filter' : IDL.Opt(ContentStatusFilter),
    'page' : IDL.Nat64,
  });
  const ContentViewPagedResult = IDL.Variant({
    'Ok' : ContentViewPage,
    'Err' : IDL.Opt(SocietyRsError),
  });
  const AppNotificationChannel = IDL.Variant({
    'App' : IDL.Null,
    'Email' : IDL.Null,
    'Push' : IDL.Null,
  });
  const AppNotificationSettings = IDL.Record({
    'streak_reminders' : IDL.Vec(AppNotificationChannel),
    'comments_replies' : IDL.Vec(AppNotificationChannel),
    'awards' : IDL.Vec(AppNotificationChannel),
    'shares_reposts' : IDL.Vec(AppNotificationChannel),
    'mentions' : IDL.Vec(AppNotificationChannel),
    'likes_reactions' : IDL.Vec(AppNotificationChannel),
    'new_followers' : IDL.Vec(AppNotificationChannel),
  });
  const EmailMessagingSettings = IDL.Record({ 'marketing' : IDL.Bool });
  const GroupAppNotificationType = IDL.Variant({
    'CommentReply' : IDL.Null,
    'PostReaction' : IDL.Null,
    'PostReply' : IDL.Null,
    'CommentReaction' : IDL.Null,
  });
  const UserSettingsView = IDL.Record({
    'preferred_chain' : IDL.Opt(ChainType),
    'app_notification' : IDL.Opt(AppNotificationSettings),
    'blockchains' : IDL.Vec(IDL.Text),
    'preferred_language' : IDL.Text,
    'interests' : IDL.Vec(IDL.Text),
    'user_id' : IDL.Principal,
    'allow_nsfw' : IDL.Bool,
    'use_cases' : IDL.Vec(IDL.Text),
    'email_messaging' : IDL.Opt(EmailMessagingSettings),
    'app_notification_grouping' : IDL.Opt(IDL.Vec(GroupAppNotificationType)),
  });
  const UserSelfView = IDL.Record({
    'id' : IDL.Principal,
    'bio' : IDL.Text,
    'igc' : IDL.Opt(IDL.Nat64),
    'is_phone_verified' : IDL.Bool,
    'user_type' : IDL.Nat64,
    'username' : IDL.Text,
    'is_provisional' : IDL.Bool,
    'display_nft' : IDL.Opt(NFTView),
    'num_posts' : IDL.Nat64,
    'cover_photo' : IDL.Opt(IDL.Text),
    'rights' : IDL.Nat64,
    'referrals' : IDL.Nat64,
    'created_at' : IDL.Nat64,
    'active_streak' : IDL.Nat64,
    'email' : IDL.Opt(IDL.Text),
    'icon_url' : IDL.Text,
    'has_membership' : IDL.Bool,
    'user_settings' : UserSettingsView,
    'identity' : IDL.Opt(Identity),
    'email_verified' : IDL.Bool,
    'followers' : IDL.Nat64,
    'following' : IDL.Nat64,
    'onboarding_state' : IDL.Text,
    'social_presence' : IDL.Opt(IDL.Vec(SocialProfileDeprecated)),
    'social_presence_2' : IDL.Opt(IDL.Vec(IDL.Opt(SocialProfile))),
  });
  const ActionResultUserSelf = IDL.Record({
    'status' : IDL.Text,
    'result' : IDL.Opt(UserSelfView),
    'errors' : IDL.Opt(IDL.Vec(ValidationErrors)),
    'message' : IDL.Text,
    'error_code' : IDL.Opt(SocietyRsError),
  });
  const UserListPaged = IDL.Record({
    'page_size' : IDL.Nat64,
    'page' : IDL.Nat64,
  });
  const UserFollowPaged = IDL.Record({
    'page_size' : IDL.Nat64,
    'page' : IDL.Nat64,
    'total_pages' : IDL.Nat64,
    'follow_status' : IDL.Vec(IDL.Tuple(IDL.Principal, IDL.Bool)),
    'users' : IDL.Vec(UserView),
  });
  const PortalMemberView = IDL.Record({
    'member' : MemberView,
    'portal' : PortalView,
  });
  const ReferralResult = IDL.Variant({ 'Ok' : IDL.Text, 'Err' : IDL.Text });
  const ExplorePortalSort = IDL.Variant({
    'NameAscending' : IDL.Null,
    'NameDescending' : IDL.Null,
    'MemberCountAscending' : IDL.Null,
    'MemberCountDescending' : IDL.Null,
  });
  const PortalViewPagedQuery = IDL.Record({
    'page_size' : IDL.Nat64,
    'page' : IDL.Nat64,
    'sort' : ExplorePortalSort,
    'highlighted' : IDL.Bool,
  });
  const PortalViewPaged = IDL.Record({
    'page_size' : IDL.Nat64,
    'views' : IDL.Vec(PortalView),
    'page' : IDL.Nat64,
    'total_pages' : IDL.Nat64,
  });
  const EmptyResult = IDL.Variant({ 'Ok' : IDL.Null, 'Err' : IDL.Text });
  const ReadNotificationsResult = IDL.Variant({
    'Ok' : IDL.Vec(IDL.Nat64),
    'Err' : IDL.Text,
  });
  const MemberSearchResult = IDL.Record({
    'id' : IDL.Principal,
    'username' : IDL.Text,
    'display_nft' : IDL.Opt(NFTView),
    'rights' : IDL.Nat64,
  });
  const ActionResultPairPlatform = IDL.Record({
    'status' : IDL.Text,
    'result' : IDL.Opt(UserPlatformPair),
    'errors' : IDL.Opt(IDL.Vec(ValidationErrors)),
    'message' : IDL.Text,
    'error_code' : IDL.Opt(SocietyRsError),
  });
  const PersonalizedFeedV1Parameters = IDL.Record({
    'max_comment_depth' : IDL.Nat64,
    'upvote_weight' : IDL.Float32,
    'include_top_users' : IDL.Opt(IDL.Bool),
    'following_upvote_weight' : IDL.Float32,
    'following_upvote_degree_penalty' : IDL.Float32,
    'award_age_multiplier' : IDL.Opt(IDL.Float32),
    'profile_posts_weight' : IDL.Opt(IDL.Float32),
    'following_comment_degree_penalty' : IDL.Float32,
    'following_comment_weight' : IDL.Float32,
    'include_portals' : IDL.Bool,
    'freshness_weight' : IDL.Opt(IDL.Float32),
    'relevant_comment_count' : IDL.Nat32,
    'portal_admin_posts_weight' : IDL.Opt(IDL.Float32),
    'max_follower_degrees' : IDL.Nat64,
    'show_caller_posts' : IDL.Opt(IDL.Bool),
    'award_upvote_multiplier' : IDL.Opt(IDL.Nat64),
  });
  const PersonalizedFeedV1Query = IDL.Record({
    'parameters' : PersonalizedFeedV1Parameters,
    'query' : PagedQuery,
  });
  const ReverseContentActionResult = IDL.Variant({
    'Ok' : ContentActionView,
    'Err' : IDL.Opt(SocietyRsError),
  });
  const PortalSortBy = IDL.Variant({
    'MemberCount' : IDL.Null,
    'Name' : IDL.Null,
    'Levenshtein' : IDL.Null,
    'ContentCount' : IDL.Null,
  });
  const SortDirection = IDL.Variant({
    'Descending' : IDL.Null,
    'Ascending' : IDL.Null,
  });
  const PortalSearchQuery = IDL.Record({
    'sort_by' : IDL.Opt(PortalSortBy),
    'page_size' : IDL.Nat64,
    'page' : IDL.Nat64,
    'query' : IDL.Text,
    'chain_filter' : IDL.Opt(ChainType),
    'sort_direction' : IDL.Opt(SortDirection),
  });
  const PortalSearchResult = IDL.Record({
    'page_size' : IDL.Nat64,
    'page' : IDL.Nat64,
    'total_pages' : IDL.Nat64,
    'items' : IDL.Vec(PortalView),
  });
  const ActionResultPortalSearch = IDL.Record({
    'status' : IDL.Text,
    'result' : IDL.Opt(PortalSearchResult),
    'errors' : IDL.Opt(IDL.Vec(ValidationErrors)),
    'message' : IDL.Text,
  });
  const UserSortBy = IDL.Variant({
    'PointCount' : IDL.Null,
    'Name' : IDL.Null,
    'ActiveStreak' : IDL.Null,
    'FollowingCount' : IDL.Null,
    'Levenshtein' : IDL.Null,
  });
  const UserSearchQuery = IDL.Record({
    'sort_by' : IDL.Opt(UserSortBy),
    'page_size' : IDL.Nat64,
    'page' : IDL.Nat64,
    'query' : IDL.Text,
    'chain_filter' : IDL.Opt(ChainType),
    'sort_direction' : IDL.Opt(SortDirection),
  });
  const UserSearchResult = IDL.Record({
    'page_size' : IDL.Nat64,
    'page' : IDL.Nat64,
    'total_pages' : IDL.Nat64,
    'items' : IDL.Vec(UserView),
  });
  const ActionResultUserSearch = IDL.Record({
    'status' : IDL.Text,
    'result' : IDL.Opt(UserSearchResult),
    'errors' : IDL.Opt(IDL.Vec(ValidationErrors)),
    'message' : IDL.Text,
  });
  const NFTConversionError = IDL.Variant({
    'MissingChainType' : IDL.Null,
    'InvalidChainType' : IDL.Text,
    'MissingMetaType' : IDL.Null,
  });
  const MultiChainUpdateResponse = IDL.Variant({
    'Ok' : IDL.Null,
    'Err' : NFTConversionError,
  });
  const ReportView = IDL.Record({
    'id' : IDL.Nat64,
    'read_at' : IDL.Nat64,
    'action' : IDL.Text,
    'content' : ContentView,
    'actor' : IDL.Opt(UserView),
    'report_type' : IDL.Text,
    'content_id' : IDL.Nat64,
    'actor_id' : IDL.Principal,
    'created_at' : IDL.Nat64,
    'message' : IDL.Text,
    'actioned_at' : IDL.Nat64,
    'reporter_id' : IDL.Principal,
    'reader_id' : IDL.Principal,
    'reporter' : UserView,
    'reader' : IDL.Opt(UserView),
  });
  const ActionResultReport = IDL.Record({
    'status' : IDL.Text,
    'result' : IDL.Opt(ReportView),
    'errors' : IDL.Opt(IDL.Vec(ValidationErrors)),
    'message' : IDL.Text,
    'error_code' : IDL.Opt(SocietyRsError),
  });
  const UpdatePoll = IDL.Record({
    'days' : IDL.Nat64,
    'kind' : PollKind,
    'choices' : IDL.Vec(PollChoiceView),
  });
  const UpdatePortal = IDL.Record({
    'id' : IDL.Nat64,
    'description' : IDL.Text,
  });
  const UpdatePortalIcon = IDL.Record({
    'id' : IDL.Nat64,
    'icon_url' : IDL.Text,
  });
  const UpdatePortalRole = IDL.Record({
    'id' : IDL.Nat64,
    'permissions' : IDL.Nat64,
    'name' : IDL.Text,
    'color' : IDL.Nat32,
    'ordinal' : IDL.Nat64,
    'icon_url' : IDL.Text,
  });
  const ActionResultUpdatePortalRoleOrdinal = IDL.Record({
    'status' : IDL.Text,
    'result' : IDL.Opt(IDL.Vec(RoleView)),
    'errors' : IDL.Opt(IDL.Vec(ValidationErrors)),
    'message' : IDL.Text,
    'error_code' : IDL.Opt(SocietyRsError),
  });
  const UpdateUserEmail = IDL.Record({ 'email' : IDL.Opt(IDL.Text) });
  const UpdateUsername = IDL.Record({ 'username' : IDL.Text });
  const InternetComputerNFT = IDL.Record({
    'nft_id' : IDL.Text,
    'canister_id' : IDL.Principal,
  });
  const NFTKindV2 = IDL.Variant({
    'InternetComputer' : InternetComputerNFT,
    'MultiChain' : MultiChainNFTRequest,
  });
  const NFTUpdateView = IDL.Record({
    'kind' : IDL.Opt(NFTKindV2),
    'meta' : IDL.Opt(IDL.Text),
  });
  const UpdateUserProfileIcon = IDL.Variant({
    'Nft' : NFTUpdateView,
    'Url' : IDL.Text,
  });
  const UpdateUserProfileV2 = IDL.Record({ 'bio' : IDL.Text });
  const SetUserSettingsResult = IDL.Variant({
    'Ok' : UserSettingsView,
    'Err' : IDL.Text,
  });
  const EncryptionError = IDL.Variant({
    'NonceError' : IDL.Null,
    'EncryptionError' : IDL.Null,
    'DecryptionError' : IDL.Null,
  });
  const TokenError = IDL.Variant({
    'TokenGenerationError' : IDL.Null,
    'EncryptionError' : EncryptionError,
    'TokenNotFound' : IDL.Text,
    'VerificationFailed' : IDL.Null,
    'TokenExpired' : IDL.Null,
  });
  const EmailVerificationError = IDL.Variant({
    'SocietyRsError' : SocietyRsError,
    'TokenError' : TokenError,
    'EmailNotSet' : IDL.Null,
    'EmailAlreadyVerified' : IDL.Null,
  });
  const EmailVerificationEmptyResult = IDL.Variant({
    'Ok' : IDL.Null,
    'Err' : IDL.Opt(EmailVerificationError),
  });
  return IDL.Service({
    'accept_portal_invite' : IDL.Func(
        [PortalInvite],
        [ActionResultPortal],
        ['query'],
      ),
    'accept_user_invite' : IDL.Func([IDL.Text], [ActionResultUser], ['query']),
    'add_member_role' : IDL.Func(
        [IDL.Nat64, IDL.Vec(IDL.Tuple(IDL.Nat64, IDL.Nat64))],
        [IDL.Vec(MemberView)],
        ['query'],
      ),
    'add_portal_role' : IDL.Func(
        [IDL.Nat64, CreatePortalRole],
        [ActionResultPortalRole],
        ['query'],
      ),
    'approve_all_pending_posts' : IDL.Func(
        [IDL.Nat64],
        [EmptySocietyRsResult],
        ['query'],
      ),
    'approve_deny_pending_post' : IDL.Func(
        [IDL.Nat64, IDL.Opt(PostQueueAction)],
        [PostQueueActionResult],
        ['query'],
      ),
    'award_post' : IDL.Func(
        [IDL.Nat64, IDL.Nat64],
        [PostQueueActionResult],
        ['query'],
      ),
    'block_user_toggle' : IDL.Func(
        [IDL.Principal],
        [IDL.Opt(IDL.Bool)],
        ['query'],
      ),
    'content_nsfw_set' : IDL.Func(
        [IDL.Nat64, IDL.Bool],
        [ActionResultContent],
        ['query'],
      ),
    'content_pin_set' : IDL.Func(
        [IDL.Nat64, IDL.Bool],
        [ActionResultContent],
        ['query'],
      ),
    'content_poll_quadratic_vote' : IDL.Func(
        [IDL.Nat64, IDL.Vec(IDL.Tuple(IDL.Nat64, IDL.Nat64))],
        [IDL.Opt(PollView)],
        ['query'],
      ),
    'content_poll_vote' : IDL.Func(
        [IDL.Nat64, IDL.Nat64],
        [IDL.Opt(PollView)],
        ['query'],
      ),
    'create_content' : IDL.Func(
        [CreateContent],
        [ActionResultContent],
        ['query'],
      ),
    'create_platform_pairing' : IDL.Func(
        [UserPlatformPairKind],
        [IDL.Opt(UserPlatformPair)],
        ['query'],
      ),
    'create_portal' : IDL.Func([CreatePortal], [ActionResultPortal], ['query']),
    'delete_content' : IDL.Func([IDL.Nat64], [ActionResultContent], ['query']),
    'delete_portal_role' : IDL.Func(
        [IDL.Nat64],
        [ActionResultPortalRole],
        ['query'],
      ),
    'follow_portal_toggle' : IDL.Func(
        [IDL.Nat64],
        [ActionResultPortal],
        ['query'],
      ),
    'follow_user' : IDL.Func([IDL.Principal], [ActionResultUser], ['query']),
    'follow_user_toggle' : IDL.Func(
        [IDL.Principal],
        [ActionResultUser],
        ['query'],
      ),
    'get_assignable_portal_roles' : IDL.Func(
        [IDL.Nat64],
        [IDL.Opt(IDL.Tuple(MemberView, IDL.Vec(RoleView)))],
        ['query'],
      ),
    'get_content' : IDL.Func([IDL.Nat64], [ActionResultContent], ['query']),
    'get_content_children' : IDL.Func(
        [ContentQuery],
        [IDL.Vec(ContentTreeView)],
        ['query'],
      ),
    'get_content_children_page' : IDL.Func(
        [ContentQuery],
        [ContentTreeViewPageResult],
        ['query'],
      ),
    'get_content_view_counts' : IDL.Func(
        [IDL.Vec(IDL.Nat64)],
        [IDL.Vec(IDL.Tuple(IDL.Nat64, IDL.Nat64))],
        ['query'],
      ),
    'get_identity_for_principal' : IDL.Func(
        [IDL.Principal],
        [IDL.Opt(Identity)],
        ['query'],
      ),
    'get_nft_pfps' : IDL.Func(
        [IDL.Opt(IDL.Bool), IDL.Opt(NFTChainType)],
        [IDL.Vec(MultiChainUpdate)],
        ['query'],
      ),
    'get_notification_page' : IDL.Func(
        [NotificationPageQuery],
        [NotificationResult],
        ['query'],
      ),
    'get_own_id' : IDL.Func([], [IDL.Principal], ['query']),
    'get_paired_platforms' : IDL.Func(
        [],
        [IDL.Vec(UserPlatformPair)],
        ['query'],
      ),
    'get_paired_platforms_by_user' : IDL.Func(
        [IDL.Principal],
        [IDL.Vec(UserPlatformPair)],
        ['query'],
      ),
    'get_paired_user_by_platform' : IDL.Func(
        [UserPlatformPairKind],
        [IDL.Vec(UserPlatformPairListItem)],
        ['query'],
      ),
    'get_paired_wallets' : IDL.Func([], [IDL.Vec(UserWallet)], ['query']),
    'get_platform_pair_code' : IDL.Func(
        [UserPlatformPairKind],
        [IDL.Opt(IDL.Text)],
        ['query'],
      ),
    'get_portal' : IDL.Func([IDL.Text], [ActionResultPortal], ['query']),
    'get_portal_content' : IDL.Func(
        [IDL.Text, PagedQuery],
        [ActionResultGetContentPaged],
        ['query'],
      ),
    'get_portal_content_action_feed' : IDL.Func(
        [ContentActionFeedQuery],
        [ContentActionHistoryFeedResult],
        ['query'],
      ),
    'get_portal_content_action_feed_page' : IDL.Func(
        [ContentActionPagedQuery],
        [ContentActionPageViewResult],
        ['query'],
      ),
    'get_portal_info' : IDL.Func([IDL.Nat64], [IDL.Opt(PortalInfo)], ['query']),
    'get_portal_member_memos' : IDL.Func(
        [IDL.Nat64, IDL.Nat64],
        [IDL.Vec(IDL.Text)],
        ['query'],
      ),
    'get_portal_member_wallets' : IDL.Func(
        [IDL.Nat64],
        [IDL.Vec(MemberListWalletView)],
        ['query'],
      ),
    'get_portal_members' : IDL.Func(
        [PortalMemberQuery],
        [IDL.Vec(MemberListItemView)],
        ['query'],
      ),
    'get_portal_members_by_status' : IDL.Func(
        [IDL.Nat64, MemberKind],
        [IDL.Vec(MemberListItemView)],
        ['query'],
      ),
    'get_portal_members_v2' : IDL.Func(
        [PortalMemberQuery],
        [GetPortalMemberV2Result],
        ['query'],
      ),
    'get_portal_roles' : IDL.Func([IDL.Nat64], [IDL.Vec(RoleView)], ['query']),
    'get_portals' : IDL.Func(
        [IDL.Vec(IDL.Text)],
        [ActionResultPortals],
        ['query'],
      ),
    'get_post_queue_feed_page' : IDL.Func(
        [PostQueuePagedQuery],
        [ContentViewPagedResult],
        ['query'],
      ),
    'get_principal_for_user_name' : IDL.Func(
        [IDL.Text],
        [IDL.Opt(IDL.Principal)],
        ['query'],
      ),
    'get_role_members' : IDL.Func(
        [IDL.Nat64],
        [IDL.Vec(MemberListItemView)],
        ['query'],
      ),
    'get_self' : IDL.Func([], [ActionResultUserSelf], ['query']),
    'get_self_portals' : IDL.Func([], [IDL.Vec(PortalView)], ['query']),
    'get_user' : IDL.Func([IDL.Text], [ActionResultUser], ['query']),
    'get_user_blocked' : IDL.Func(
        [UserListPaged],
        [UserFollowPaged],
        ['query'],
      ),
    'get_user_by_principal' : IDL.Func(
        [IDL.Principal],
        [ActionResultUser],
        ['query'],
      ),
    'get_user_content' : IDL.Func(
        [IDL.Text, PagedQuery],
        [ActionResultGetContentPaged],
        ['query'],
      ),
    'get_user_followers' : IDL.Func(
        [IDL.Text, UserListPaged],
        [UserFollowPaged],
        ['query'],
      ),
    'get_user_following' : IDL.Func(
        [IDL.Text, UserListPaged],
        [UserFollowPaged],
        ['query'],
      ),
    'get_user_follows' : IDL.Func([], [IDL.Vec(PortalView)], ['query']),
    'get_user_portal_roles' : IDL.Func(
        [IDL.Nat64, IDL.Principal],
        [IDL.Opt(PortalMemberView)],
        ['query'],
      ),
    'get_user_portals' : IDL.Func(
        [IDL.Principal],
        [IDL.Vec(PortalView)],
        ['query'],
      ),
    'get_user_referral_code' : IDL.Func([], [ReferralResult], ['query']),
    'is_phone_paried' : IDL.Func(
        [],
        [IDL.Variant({ 'Ok' : IDL.Bool, 'Err' : IDL.Text })],
        ['query'],
      ),
    'is_phone_verified' : IDL.Func(
        [IDL.Text],
        [IDL.Variant({ 'Ok' : IDL.Bool, 'Err' : IDL.Text })],
        ['query'],
      ),
    'is_user_following' : IDL.Func([IDL.Principal], [IDL.Bool], ['query']),
    'join_portal' : IDL.Func([IDL.Nat64], [ActionResultPortal], ['query']),
    'leave_portal' : IDL.Func([IDL.Nat64], [ActionResultPortal], ['query']),
    'list_content' : IDL.Func([PagedQuery], [ContentViewPage], ['query']),
    'list_portals' : IDL.Func(
        [PortalViewPagedQuery],
        [PortalViewPaged],
        ['query'],
      ),
    'mark_all_notifications_read' : IDL.Func([], [EmptyResult], ['query']),
    'mark_notifications_read' : IDL.Func(
        [IDL.Vec(IDL.Nat64)],
        [ReadNotificationsResult],
        ['query'],
      ),
    'member_search' : IDL.Func(
        [IDL.Text],
        [IDL.Vec(MemberSearchResult)],
        ['query'],
      ),
    'pair_platform' : IDL.Func(
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
    'personalized_feed_v1' : IDL.Func(
        [PersonalizedFeedV1Query],
        [IDL.Variant({ 'Ok' : ContentViewPage, 'Err' : IDL.Text })],
        ['query'],
      ),
    'pin_user_content' : IDL.Func(
        [IDL.Nat64, IDL.Bool],
        [EmptyResult],
        ['query'],
      ),
    'portal_requires_phone' : IDL.Func(
        [IDL.Nat64, IDL.Bool],
        [ActionResultPortal],
        ['query'],
      ),
    'react_to_content' : IDL.Func(
        [IDL.Nat64, IDL.Opt(ContentReaction)],
        [ActionResultContent],
        ['query'],
      ),
    'read_notifications' : IDL.Func(
        [IDL.Vec(IDL.Nat64)],
        [ReadNotificationsResult],
        ['query'],
      ),
    'remove_content' : IDL.Func([IDL.Nat64], [ActionResultContent], ['query']),
    'remove_follower' : IDL.Func(
        [IDL.Principal],
        [ActionResultUser],
        ['query'],
      ),
    'remove_member_role' : IDL.Func(
        [IDL.Nat64, IDL.Vec(IDL.Tuple(IDL.Nat64, IDL.Nat64))],
        [IDL.Vec(MemberView)],
        ['query'],
      ),
    'reverse_content_action' : IDL.Func(
        [IDL.Nat64],
        [ReverseContentActionResult],
        ['query'],
      ),
    'reverse_portal_content_action' : IDL.Func(
        [IDL.Nat64],
        [EmptyResult],
        ['query'],
      ),
    'search_portals' : IDL.Func(
        [PortalSearchQuery],
        [ActionResultPortalSearch],
        ['query'],
      ),
    'search_tags' : IDL.Func([IDL.Text], [IDL.Vec(Tag)], ['query']),
    'search_users' : IDL.Func(
        [UserSearchQuery],
        [ActionResultUserSearch],
        ['query'],
      ),
    'set_nft_pfps' : IDL.Func(
        [IDL.Vec(MultiChainUpdate)],
        [MultiChainUpdateResponse],
        ['query'],
      ),
    'set_portal_members_status' : IDL.Func(
        [IDL.Nat64, IDL.Nat64, MemberKind, IDL.Text],
        [IDL.Opt(MemberListItemView)],
        ['query'],
      ),
    'set_read' : IDL.Func(
        [IDL.Nat64],
        [IDL.Vec(ActionResultReport)],
        ['query'],
      ),
    'unfollow_user' : IDL.Func([IDL.Principal], [ActionResultUser], ['query']),
    'unpair_phone' : IDL.Func(
        [],
        [IDL.Variant({ 'Ok' : IDL.Bool, 'Err' : IDL.Text })],
        ['query'],
      ),
    'unpair_platform' : IDL.Func(
        [UserPlatformPairKind],
        [IDL.Vec(UserPlatformPair)],
        ['query'],
      ),
    'unpair_wallet' : IDL.Func([UserWalletKind], [], ['query']),
    'unverify_phone' : IDL.Func(
        [IDL.Text],
        [IDL.Variant({ 'Ok' : IDL.Bool, 'Err' : IDL.Text })],
        ['query'],
      ),
    'update_content' : IDL.Func(
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
    'update_portal' : IDL.Func([UpdatePortal], [ActionResultPortal], ['query']),
    'update_portal_icon' : IDL.Func(
        [UpdatePortalIcon],
        [ActionResultPortal],
        ['query'],
      ),
    'update_portal_info_cover_photo' : IDL.Func(
        [IDL.Nat64, IDL.Opt(IDL.Text)],
        [ActionResultPortal],
        ['query'],
      ),
    'update_portal_info_links' : IDL.Func(
        [IDL.Nat64, IDL.Vec(Link)],
        [ActionResultPortal],
        ['query'],
      ),
    'update_portal_info_rules' : IDL.Func(
        [IDL.Nat64, IDL.Opt(IDL.Vec(PortalRule))],
        [ActionResultPortal],
        ['query'],
      ),
    'update_portal_pinned_posts' : IDL.Func(
        [IDL.Nat64, IDL.Vec(IDL.Nat64)],
        [EmptySocietyRsResult],
        ['query'],
      ),
    'update_portal_role' : IDL.Func(
        [UpdatePortalRole],
        [ActionResultPortalRole],
        ['query'],
      ),
    'update_portal_role_ordinals' : IDL.Func(
        [IDL.Nat64, IDL.Vec(IDL.Tuple(IDL.Nat64, IDL.Nat64))],
        [ActionResultUpdatePortalRoleOrdinal],
        ['query'],
      ),
    'update_social_presence' : IDL.Func(
        [IDL.Vec(SocialProfile)],
        [ActionResultUserSelf],
        ['query'],
      ),
    'update_user_cover_photo' : IDL.Func(
        [IDL.Opt(IDL.Text)],
        [ActionResultUserSelf],
        ['query'],
      ),
    'update_user_email' : IDL.Func(
        [UpdateUserEmail],
        [ActionResultUserSelf],
        ['query'],
      ),
    'update_user_pinned_posts' : IDL.Func(
        [IDL.Vec(IDL.Nat64)],
        [EmptySocietyRsResult],
        ['query'],
      ),
    'update_username' : IDL.Func(
        [UpdateUsername],
        [ActionResultUserSelf],
        ['query'],
      ),
    'update_wallet_type' : IDL.Func(
        [IDL.Principal, IdentityWalletType],
        [],
        ['query'],
      ),
    'user_search' : IDL.Func(
        [IDL.Text],
        [IDL.Vec(UserListItemView)],
        ['query'],
      ),
    'user_set_profile_icon' : IDL.Func(
        [IDL.Opt(UpdateUserProfileIcon)],
        [IDL.Opt(UserSelfView)],
        ['query'],
      ),
    'user_set_profile_v2' : IDL.Func(
        [UpdateUserProfileV2],
        [IDL.Opt(UserSelfView)],
        ['query'],
      ),
    'user_set_settings_v2' : IDL.Func(
        [UserSettingsView],
        [SetUserSettingsResult],
        ['query'],
      ),
    'user_wallet_pair_dscvr' : IDL.Func(
        [IDL.Principal],
        [IDL.Opt(UserWallet)],
        ['query'],
      ),
    'user_wallet_pair_foreign' : IDL.Func(
        [UserWalletKind, IDL.Principal],
        [IDL.Opt(UserWallet)],
        ['query'],
      ),
    'verify_email_token' : IDL.Func(
        [IDL.Text],
        [EmailVerificationEmptyResult],
        ['query'],
      ),
    'verify_phone' : IDL.Func(
        [IDL.Principal, IDL.Text],
        [IDL.Variant({ 'Ok' : IDL.Bool, 'Err' : IDL.Text })],
        ['query'],
      ),
    'vote_content' : IDL.Func(
        [IDL.Nat64, IDL.Int64],
        [ActionResultContent],
        ['query'],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
