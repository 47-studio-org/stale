import {IIssuesProcessorOptions} from '../../src/interfaces/issues-processor-options';

// Default options for use in tests.
// Mirrors the defaults defined in action.yml
export const DefaultProcessorOptions: IIssuesProcessorOptions = Object.freeze({
  repoToken: 'none',
  staleIssueMessage: 'This issue is stale',
  stalePrMessage: 'This PR is stale',
  closeIssueMessage: 'This issue is being closed',
  closePrMessage: 'This PR is being closed',
  daysBeforeStale: 1,
  daysBeforeIssueStale: NaN,
  daysBeforePrStale: NaN,
  daysBeforeClose: 30,
  daysBeforeIssueClose: NaN,
  daysBeforePrClose: NaN,
  staleIssueLabel: 'Stale',
  closeIssueLabel: '',
  exemptIssueLabels: '',
  stalePrLabel: 'Stale',
  closePrLabel: '',
  exemptPrLabels: '',
  onlyLabels: '',
  onlyIssueLabels: '',
  onlyPrLabels: '',
  anyOfLabels: '',
  anyOfIssueLabels: '',
  anyOfPrLabels: '',
  operationsPerRun: 100,
  debugOnly: true,
  removeStaleWhenUpdated: false,
  removeIssueStaleWhenUpdated: undefined,
  removePrStaleWhenUpdated: undefined,
  ascending: false,
  deleteBranch: false,
  startDate: '',
  exemptMilestones: '',
  exemptIssueMilestones: '',
  exemptPrMilestones: '',
  exemptAllMilestones: false,
  exemptAllIssueMilestones: undefined,
  exemptAllPrMilestones: undefined,
  exemptAssignees: '',
  exemptIssueAssignees: '',
  exemptPrAssignees: '',
  exemptAllAssignees: false,
  exemptAllIssueAssignees: undefined,
  exemptAllPrAssignees: undefined,
  enableStatistics: true,
  labelsToRemoveWhenUnstale: '',
  labelsToAddWhenUnstale: '',
  ignoreUpdates: false,
  ignoreIssueUpdates: undefined,
  ignorePrUpdates: undefined,
  exemptDraftPr: false,
  closeIssueReason: 'not_planned',
  includeOnlyAssigned: false,
  removeStaleFromExemptItems: false
});
