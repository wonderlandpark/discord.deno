interface Guild {
    id: string
    name: string
    icon: string | undefined
    icon_hash?: string | undefined
    splash: string | undefined
    discovery_splash: string | undefined
    owner?: boolean
    owner_id: string
    permissions?: string
    region: string
    afk_channel_id: string | undefined
    afk_timeout: number
    widget_enabled?: boolean
    widge_channel_id?: string | undefined
    verification_level: string
    default_message_notifications: string
    explicit_content_filter: string
    roles: Role[]
    emojis: Emoji[]
    features: GuildFeatures[]
    mfa_level: string
    application_id: string | undefined
    system_channel_id: string | undefined
    system_channel_flags: string
    rules_channel_id: string | undefined 
    joined_at?: string
    large?: boolean
    unavailable: boolean
    member_count?: number
    voice_states?: VoiceState[]
    members?: GuildMember[]
    channels?: Channel[]
    presences?: PresenceUpdate[] 
    max_presences?: number | undefined
    max_members?: number
    vanity_url_code: string | undefined
    description: string | undefined
    banner: string | undefined
    premium_tier: number
    premium_subscription_count?: number
    preferred_locale: string
    public_updates_channel_id: string | undefined
    max_video_channel_users?: number
    approximate_number_count?: number
    approximate_presence_count?: number
}

interface GuildMember {
    user?: User
    nick: string | undefined
    roles: Role[]
    joined_at: string
    premium_since?: string | undefined
    deaf: boolean
    mute: boolean
}

enum MessageNotification {
    ALL_MESSAGES = 0,
    ONLY_MENTIONS = 1
}

enum ContentFilter {
    DISABLED = 0,
    MEMBERS_WITHOUT_ROLES = 1,
    ALL_MEMBERS = 3,
}

enum MFA {
    NONE = 0,
    ELEVATED = 1
}

enum Verification {
    NONE = 0,
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3,
    VERY_HIGH = 4
}

enum PremiumTier {
    NONE = 0,
    TIER_1 = 1,
    TIER_2 = 2,
    TIER_3 = 3
}

enum SystemChannelFlags {
    SUPPRESS_JOIN_NOTIFICATIONS = 1 << 0,
    SUPPRESS_PREMIUM_SUBSCRIPTIONS = 1 << 1
}

type GuildFeatures =
  | "INVITE_SPLASH"
  | "VIP_REGIONS"
  | "VANITY_URL"
  | "VERIFIED"
  | "PARTNERED"
  | "PUBLIC"
  | "COMMERCE"
  | "NEWS"
  | "DISCOVERABLE"
  | "FEATURABLE"
  | "ANIMATED_ICON"
  | "BANNER"