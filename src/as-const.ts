export {};

let name = 'Tanaka';

name = 'Taro';

let nickname = 'taro' as const;
nickname = 'taro';

let profile = {
  name: 'Tanaka',
  height: 173
} as const;

// profile.name = 'Suzuki';
// profile.name = 180;