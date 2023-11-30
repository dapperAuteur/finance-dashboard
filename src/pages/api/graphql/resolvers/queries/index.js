import { ActivityQueries } from './activityQueries';
import { AffixQueries } from './affixQueries';
import { VerboQueries } from './verboQueries';
import { WordQueries } from './wordQueries';

export const Query = {
  ...ActivityQueries,
  ...AffixQueries,
  ...VerboQueries,
  ...WordQueries
}