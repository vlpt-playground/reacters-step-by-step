import { format, distanceInWordsToNow } from 'date-fns';
import koLocale from 'date-fns/locale/ko';

export function formatDate(date) {
  const now = new Date();
  const d = new Date(date);
  const diff = now.getTime() - d.getTime();

  if (diff < 1000 * 60) {
    return '방금 전';
  }
  if (diff < 1000 * 60 * 60 * 24 * 7) {
    return distanceInWordsToNow(d, {
      locale: koLocale,
      addSuffix: true
    });
  }
  return format(d, 'YYYY-MM-DD');
}
