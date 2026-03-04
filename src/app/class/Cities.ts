import {Color} from './Color';

export const BlueCities: string[] = [
  'アトランタ',
  'シカゴ',
  'モントリオール',
  'ニューヨーク',
  'ワシントン',
  'サンフランシスコ',
  'ロンドン',
  'エッセン',
  'パリ',
  'マドリード',
  'ミラノ',
  'サンクトペテルブルク',
];

export const YellowCities: string[] = [
  'ロサンゼルス',
  'メキシコシティ',
  'マイアミ',
  'ボゴタ',
  'リマ',
  'サンティアゴ',
  'ブエノスアイレス',
  'サンパウロ',
  'ラゴス',
  'カイロ',
  'キンシャサ',
  'ヨハネスブルグ',
];

export const BlackCities: string[] = [
  'アルジェ',
  'イスタンブール',
  'カイロ',
  'リヤド',
  'バグダッド',
  'テヘラン',
  'カラチ',
  'デリー',
  'ムンバイ',
  'チェンナイ',
  'コルカタ',
  'モスクワ',
];

export const RedCities: string[] = [
  '北京',
  '上海',
  'ソウル',
  '東京',
  '大阪',
  '台北',
  '香港',
  'バンコク',
  'ホーチミン',
  'マニラ',
  'ジャカルタ',
  'シドニー',
];

export const CITY_CONFIG: Record<Color, { cities: string[]; uiColor: string }> = {
  blue: { cities: BlueCities, uiColor: 'bg-blue-500' },
  yellow: { cities: YellowCities, uiColor: 'bg-yellow-400' },
  black: { cities: BlackCities, uiColor: 'bg-black' },
  red: { cities: RedCities, uiColor: 'bg-red-500' },
};
