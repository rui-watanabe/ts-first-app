export {};

interface Profile {
  name: string;
  underTwenty: boolean;
  [ index: string ]: string | number | boolean;
}

let profile: Profile = { name: 'max', underTwenty: false };

// How to write index signatures
// { [ index: typeForIndex ]: typeForValue }

// profile.name = 'max';
profile.age = 44;
profile.nationality = 'Japan';