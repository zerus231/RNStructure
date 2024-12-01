import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Session redirect url storage key
 */
const sessionStorageKey = 'fuseRedirectUrl';

/**
 * Get session redirect url
 */
export const getSessionRedirectUrl = async (): Promise<string | null> => {
  try {
    return await AsyncStorage.getItem(sessionStorageKey);
  } catch (error) {
    console.error('Error getting session redirect URL:', error);
    return null;
  }
};

/**
 * Set session redirect url
 */
export const setSessionRedirectUrl = async (url: string): Promise<void> => {
  try {
    await AsyncStorage.setItem(sessionStorageKey, url);
  } catch (error) {
    console.error('Error setting session redirect URL:', error);
  }
};

/**
 * Reset session redirect url
 */
export const resetSessionRedirectUrl = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem(sessionStorageKey);
  } catch (error) {
    console.error('Error resetting session redirect URL:', error);
  }
};
