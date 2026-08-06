import * as migration_20260805_043229_initial from './20260805_043229_initial';
import * as migration_20260805_053215_code_snippets_show_on_paths from './20260805_053215_code_snippets_show_on_paths';
import * as migration_20260805_063943_popups_page_select from './20260805_063943_popups_page_select';
import * as migration_20260805_070444_floating_cta from './20260805_070444_floating_cta';
import * as migration_20260805_074547_popups_size from './20260805_074547_popups_size';
import * as migration_20260806_120000_procedures_cling_fields from './20260806_120000_procedures_cling_fields';
import * as migration_20260806_121000_channels_direct_links from './20260806_121000_channels_direct_links';
import * as migration_20260806_150000_procedures_design_fields from './20260806_150000_procedures_design_fields';

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
  {
    up: migration_20260806_120000_procedures_cling_fields.up,
    down: migration_20260806_120000_procedures_cling_fields.down,
    name: '20260806_120000_procedures_cling_fields',
  },
  {
    up: migration_20260806_121000_channels_direct_links.up,
    down: migration_20260806_121000_channels_direct_links.down,
    name: '20260806_121000_channels_direct_links',
  },
  {
    up: migration_20260806_150000_procedures_design_fields.up,
    down: migration_20260806_150000_procedures_design_fields.down,
    name: '20260806_150000_procedures_design_fields',
  },
];
