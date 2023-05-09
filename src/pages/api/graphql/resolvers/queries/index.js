import { AffixQueries } from './affixQueries';
import { VerboQueries } from './verboQueries';
import { WordQueries } from './wordQueries';

export const Query = {
  ...AffixQueries,
  ...VerboQueries,
  ...WordQueries
}