export const NFT_LIST_FILE_IMAGE_SUPPORT = [
  'image/png',
  'image/jpeg',
  'image/jpg',
  'image/svg',
  'image/gif',
  'image/svg+xml',
];
export const NFT_LIST_FILE_VIDEO_SUPPORT = ['video/mp4', 'video/webm', 'video/wav'];
export const NFT_LIST_FILE_3D_MODEL_SUPPORT = ['3d/glb', '3d/gltf'];
export const NFT_LIST_FILE_AUDIO_SUPPORT = ['audio/mpeg', 'audio/ogg', 'audio/wav', 'audio/webm', 'audio/mp3'];

export const NFT_LIST_FILE_IMAGE_TYPE_SUPPORT = ['png', 'jpeg', 'jpg', 'svg', 'gif', 'svg+xml'];
export const NFT_LIST_FILE_VIDEO_TYPE_SUPPORT = ['mp4', 'webm', 'wav'];
export const NFT_LIST_FILE_3D_MODEL_TYPE_SUPPORT = ['glb', 'gltf'];
export const NFT_LIST_FILE_AUDIO_TYPE_SUPPORT = ['mpeg', 'ogg', 'wav', 'webm', 'mp3'];

export const FILE_FORMAT = {
  IMAGE: 'image',
  AUDIO: 'audio',
  VIDEO: 'video',
  MODEL: '3d',
};

export const getType = (type: string) => {
  if (NFT_LIST_FILE_VIDEO_TYPE_SUPPORT?.includes(type)) return `video/${type}`;
  if (NFT_LIST_FILE_AUDIO_TYPE_SUPPORT?.includes(type)) return `audio/${type}`;
  if (NFT_LIST_FILE_3D_MODEL_TYPE_SUPPORT?.includes(type)) return `3d/${type}`;
  return NFT_LIST_FILE_IMAGE_SUPPORT[0];
};
