import { OrderedMap } from 'immutable';
import commonIndexesMigration from './20171122100800_common_indexes';
import updateRefs from './20171121153300_update_refs';
import expiration from './20180212_expiration';
import migrateIdentifiers from './20171127214900_migrate_identifiers';
import personasIndexes from './20171008104700_personas_indexes';
// import removeOldIdents from './20171128144900_remove_old_idents';
import siteSettings from './20180411160000_site_settings';
import shareableDashboards from './20180320093000_shareable_dashboards';
import oauthTokens from './20190131000000_oauth_tokens';

export default new OrderedMap()
  .set('20171122100800_common_indexes', commonIndexesMigration)
  .set('20171121153300_update_refs', updateRefs)
  .set('20171008104700_personas_indexes', personasIndexes)
  .set('20171127214900_migrate_identifiers', migrateIdentifiers)
  // .set('20171127214500_remove_unused_persona_props', removeUnusedPersonaProps)
  // .set('20171128144900_remove_old_idents', removeOldIdents)
  .set('20180320093000_shareable_dashboards', shareableDashboards)
  .set('20180411160000_site_settings', siteSettings)
  .set('20180212_expiration', expiration)
  .set('20190131000000_oauth_tokens', oauthTokens);
