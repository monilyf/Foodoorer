import Permissions from 'react-native-permissions';
import {Platform, Alert, PermissionsAndroid} from 'react-native';
import OpenSettings from 'react-native-open-settings';
import MessageUtils from './MessageUtils';
import Constants from './Constants';

//Check Permission Request
const requestPermission = permission => {
  return Permissions.request(permission).then(response => {
    if (response === MessageUtils.PermissionMessage.authorized) {
      return true;
    }
    if (Platform.OS === 'android') {
      if (response === MessageUtils.PermissionMessage.restricted)
        showCameraPermissionAlert(permission);
    } else {
      showCameraPermissionAlert(permission);
    }
    return response;
  });
};

//Check Android Permission Request
androidCheckPermissoin = (permission, permissionName) => {
  return PermissionsAndroid.request(permission).then(response => {
    if (response === MessageUtils.PermissionMessage.granted) {
      return true;
    }
    if (Platform.OS === 'android') {
      if (response === MessageUtils.PermissionMessage.never_ask_again)
        showCameraPermissionAlert(permissionName);
    } else {
      showCameraPermissionAlert(permissionName);
    }
    return response;
  });
};

//Check Android Multiple Permission Request
//User PermissionsAndroid.PERMISSIONS.CAMERA in argument
androidRequestMultiplePermissoin = permission => {
  return Promise.resolve(
    PermissionsAndroid.requestMultiple(permission).then(response => {
      return response;
    }),
  );
};

// Request Android Permission
androidRequestPermission = permission => {
  switch (permission) {
    case Constants.Permissions.PHOTO:
      return Promise.resolve(
        androidCheckPermissoin(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          Constants.Permissions.STORAGE,
        ),
      );
    case Constants.Permissions.CAMERA:
      return Promise.resolve(
        androidCheckPermissoin(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          Constants.Permissions.CAMERA,
        ),
      );
    case Constants.Permissions.LOCATION:
      return Promise.resolve(
        androidCheckPermissoin(
          PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
          Constants.Permissions.LOCATION,
        ),
      );
    case Constants.Permissions.READ_EXTERNAL_STORAGE:
      return Promise.resolve(
        androidCheckPermissoin(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          Constants.Permissions.STORAGE,
        ),
      );
    case Constants.Permissions.WRITE_EXTERNAL_STORAGE:
      return Promise.resolve(
        androidCheckPermissoin(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          Constants.Permissions.STORAGE,
        ),
      );
    case Constants.Permissions.CONTACTS:
      return Promise.resolve(
        androidCheckPermissoin(
          PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
          Constants.Permissions.CONTACTS,
        ),
      );
    case Constants.Permissions.PHONE_CALL:
      return Promise.resolve(
        androidCheckPermissoin(
          PermissionsAndroid.PERMISSIONS.CALL_PHONE,
          Constants.Permissions.PHONE_CALL,
        ),
      );
    case Constants.Permissions.READ_SMS:
      return Promise.resolve(
        androidCheckPermissoin(
          PermissionsAndroid.PERMISSIONS.READ_SMS,
          Constants.Permissions.READ_SMS,
        ),
      );
  }
};

//Set Setting Title and MessageUtils
const openSettingDetail = (permission, isTitle) => {
  let title, message;
  switch (permission) {
    case Constants.Permissions.PHOTO:
      title = MessageUtils.PermissionMessage.photoPermissionTitle;
      message = MessageUtils.PermissionMessage.photoPermissionMessage;
      break;
    case Constants.Permissions.CAMERA:
      title = MessageUtils.PermissionMessage.cameraPermissionTitle;
      message = MessageUtils.PermissionMessage.cameraPermissionMessage;
      break;
    case Constants.Permissions.LOCATION:
      title = MessageUtils.PermissionMessage.locationPermissionTitle;
      message = MessageUtils.PermissionMessage.locationPermissionMessage;
      break;
    case Constants.Permissions.PUSH_NOTIFICATION:
      title = MessageUtils.PermissionMessage.notificationPermissionTitle;
      message = MessageUtils.PermissionMessage.notificationPermissionMessage;
      break;
    case Constants.Permissions.STORAGE:
      title = MessageUtils.PermissionMessage.storagePermissionTitle;
      message = MessageUtils.PermissionMessage.storagePermissionMessage;
      break;
    case Constants.Permissions.CONTACTS:
      title = MessageUtils.PermissionMessage.contactPermissionTitle;
      message = MessageUtils.PermissionMessage.contactPermissionMessage;
      break;
    case Constants.Permissions.PHONE_CALL:
      title = MessageUtils.PermissionMessage.phoneCallPermissionTitle;
      message = MessageUtils.PermissionMessage.phoneCallPermissionMessage;
      break;
    case Constants.Permissions.READ_SMS:
      title = MessageUtils.PermissionMessage.readSmsPermissionTitle;
      message = MessageUtils.PermissionMessage.readSmsPermissionMessage;
      break;
  }
  if (isTitle) {
    return title;
  }
  return message;
};

// Open Setting Alert
const showCameraPermissionAlert = permission => {
  Alert.alert(
    openSettingDetail(permission, true),
    openSettingDetail(permission, false),
    [
      {
        text: MessageUtils.PermissionMessage.openSetting,
        onPress:
          Platform.OS === 'ios'
            ? Linking.openURL('app-settings:')
            : OpenSettings.openSettings,
      },
      {
        text: MessageUtils.PermissionMessage.cancel,
        onPress: () => console.log(MessageUtils.PermissionMessage.cancel),
      },
    ],
    {cancelable: false},
  );
};

getLocation = () => {
  let region = null;
  navigator.geolocation.watchPosition(position => {
    region = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    };
    return region;
  });
  return region;
};

getCurruntLocation = () => {
  /*  return requestLocationPermission().then((response) => {
          if (response) {*/
  requestLocationPermission();
  return Promise.resolve(
    navigator.geolocation.getCurrentPosition(position => {
      let region = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
      return region;
    }),
  );

  /*    }
        return region;
    })*/
};

requestCameraPermission = () => {
  return Promise.resolve(requestPermission(Constants.Permissions.CAMERA));
};

requestPhotoPermission = () => {
  return Promise.resolve(requestPermission(Constants.Permissions.PHOTO));
};

requestLocationPermission = () => {
  return Promise.resolve(requestPermission(Constants.Permissions.LOCATION));
};

requestStoragePermission = () => {
  return Promise.resolve(requestPermission(Constants.Permissions.STORAGE));
};

requestNotificationPermission = () => {
  return Promise.resolve(
    requestPermission(Constants.Permissions.PUSH_NOTIFICATION),
  );
};

requestContactsPermission = () => {
  return Promise.resolve(requestPermission(Constants.Permissions.CONTACTS));
};

requestPhoneCallPermission = () => {
  return Promise.resolve(requestPermission(Constants.Permissions.PHONE_CALL));
};

requestReadSmsPermission = () => {
  return Promise.resolve(requestPermission(Constants.Permissions.READ_SMS));
};

export default {
  requestCameraPermission,
  requestPhotoPermission,
  requestLocationPermission,
  requestStoragePermission,
  requestNotificationPermission,
  requestContactsPermission,
  requestPhoneCallPermission,
  requestReadSmsPermission,
  androidRequestPermission,
  getCurruntLocation,
  androidRequestMultiplePermissoin,
};
