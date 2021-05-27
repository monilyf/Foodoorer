// internal app notifications key
const notificationKey = {
  LOGOUT: 'LOGOUT',
};

const Permissions = {
  PHOTO: 'photo',
  CAMERA: 'camera',
  LOCATION: 'location',
  MICROPHONE: 'microphone',
  CONTACTS: 'contacts',
  EVENTS: 'event',
  STORAGE: 'storage',
  PHONE_CALL: 'callPhone',
  READ_SMS: 'readSms',
  RECEIVE_SMS: 'receiveSms',

  // support only IOS
  MOTION: 'motion',
  MEDIA_LIBRARY: 'mediaLibrary',
  SPEECH_RECOGNITAION: 'speechRecognition',
  PUSH_NOTIFICATION: 'notification',

  // Android Permission
  READ_EXTERNAL_STORAGE: 'READ_EXTERNAL_STORAGE',
  WRITE_EXTERNAL_STORAGE: 'WRITE_EXTERNAL_STORAGE',
};

// API response codes
const ResponseCode = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  UNPROCESSABLE_REQUEST: 422,
  INTERNAL_SERVER_ERROR: 500,
  TOKEN_INVALID: 503,
  NO_INTERNET: 522,
  BAD_GATEWAY: 502,
};

export default {
  notificationKey,
  ResponseCode,
  Permissions,
};
