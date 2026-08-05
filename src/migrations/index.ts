import * as migration_20260805_043229_initial from './20260805_043229_initial';
import * as migration_20260805_053215_code_snippets_show_on_paths from './20260805_053215_code_snippets_show_on_paths';
import * as migration_20260805_063943_popups_page_select from './20260805_063943_popups_page_select';
import * as migration_20260805_070444_floating_cta from './20260805_070444_floating_cta';
import * as migration_20260805_074547_popups_size from './20260805_074547_popups_size';

export const migrations = [
  {
    up: migration_20260805_043229_initial.up,
    down: migration_20260805_043229_initial.down,
    name: '20260805_043229_initial',
  },
  {
    up: migration_20260805_053215_code_snippets_show_on_paths.up,
    down: migration_20260805_053215_code_snippets_show_on_paths.down,
    name: '20260805_053215_code_snippets_show_on_paths',
  },
  {
    up: migration_20260805_063943_popups_page_select.up,
    down: migration_20260805_063943_popups_page_select.down,
    name: '20260805_063943_popups_page_select',
  },
  {
    up: migration_20260805_070444_floating_cta.up,
    down: migration_20260805_070444_floating_cta.down,
    name: '20260805_070444_floating_cta',
  },
  {
    up: migration_20260805_074547_popups_size.up,
    down: migration_20260805_074547_popups_size.down,
    name: '20260805_074547_popups_size'
  },
];
