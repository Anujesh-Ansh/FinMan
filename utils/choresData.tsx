import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@chores';

export interface ChoreItem {
  text: string;
  points: number;
  completed: boolean;
}

export const saveChores = async (chores: ChoreItem[]) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(chores));
  } catch (error) {
    console.error('Failed to save chores:', error);
  }
};

export const loadChores = async (): Promise<ChoreItem[]> => {
  try {
    const storedChores = await AsyncStorage.getItem(STORAGE_KEY);
    if (storedChores) {
      return JSON.parse(storedChores);
    }
    return [];
  } catch (error) {
    console.error('Failed to load chores:', error);
    return [];
  }
};
