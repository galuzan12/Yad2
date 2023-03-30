import translations from '../config/translations';

export const useTranslations = (path: string) => {
  const pathArray = path.split('.');
  let currentPath: any = translations;
  pathArray.forEach(p => {
    currentPath = currentPath[p];
  });

  return currentPath;
};
