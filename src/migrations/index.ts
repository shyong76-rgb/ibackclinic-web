import * as migration_20260805_043229_initial from './20260805_043229_initial';

export const migrations = [
  {
    up: migration_20260805_043229_initial.up,
    down: migration_20260805_043229_initial.down,
    name: '20260805_043229_initial'
  },
];
