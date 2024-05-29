import { ActivityQueries } from './activityQueries';
import { AffixQueries } from './affixQueries';
import { FinancialAccountQueries } from './financialAccountQueries';
import { FraseQueries } from './fraseQueries';
import { MediaQueries } from './mediaQueries';
import { VerboQueries } from './verboQueries';
import { WordQueries } from './wordQueries';

export const Query = {
  ...ActivityQueries,
  ...AffixQueries,
  ...FinancialAccountQueries,
  ...FraseQueries,
  ...MediaQueries,
  ...VerboQueries,
  ...WordQueries
}