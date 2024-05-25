import { createClient, LiveList, LiveMap, LiveObject } from "@liveblocks/client";
import { createRoomContext, createLiveblocksContext } from "@liveblocks/react";
import { Color, Layer } from "./app/types/canvas";

const client = createClient({
  authEndpoint: "/api/liveblocks-auth",
  throttle: 16,
  async resolveUsers({ userIds }) {
    return [];
  },
  async resolveMentionSuggestions({ text }) {
    return [];
  },
  async resolveRoomsInfo({ roomIds }) {
    return [];
  },
});

type Presence = {
  cursor: { x: number; y: number } | null;
  selection: string[];
  pencilDraft: [x: number, y: number, pressure: number][] | null;
  pencilColor: Color | null;
};

type Storage = {
  layers: LiveMap<string, LiveObject<Layer>>;
  layerIds: LiveList<string>;
};

type UserMeta = {
  id?: string;
  info?: {
    name?: string;
    picture?: string;
  };
};

type RoomEvent = {};

export type ThreadMetadata = {};

// Room-level hooks, use inside `RoomProvider`
export const {
  suspense: {
    RoomProvider,
    useRoom,
    useMyPresence,
    useUpdateMyPresence,
    useSelf,
    useOthers,
    useOthersMapped,
    useOthersListener,
    useOthersConnectionIds,
    useOther,
    useBroadcastEvent,
    useEventListener,
    useErrorListener,
    useStorage,
    useObject,
    useMap,
    useList,
    useBatch,
    useHistory,
    useUndo,
    useRedo,
    useCanUndo,
    useCanRedo,
    useMutation,
    useStatus,
    useLostConnectionListener,
    useThreads,
    useCreateThread,
    useEditThreadMetadata,
    useCreateComment,
    useEditComment,
    useDeleteComment,
    useAddReaction,
    useRemoveReaction,
    useThreadSubscription,
    useMarkThreadAsRead,
    useRoomNotificationSettings,
    useUpdateRoomNotificationSettings,

    // These hooks can be exported from either context
    // useUser,
    // useRoomInfo
  },
} = createRoomContext<Presence, Storage, UserMeta, RoomEvent, ThreadMetadata>(
  client
);

// Project-level hooks, use inside `LiveblocksProvider`
export const {
  suspense: {
    LiveblocksProvider,
    useMarkInboxNotificationAsRead,
    useMarkAllInboxNotificationsAsRead,
    useInboxNotifications,
    useUnreadInboxNotificationsCount,

    // These hooks can be exported from either context
    useUser,
    useRoomInfo,
  },
} = createLiveblocksContext<UserMeta, ThreadMetadata>(client);
