import { Manual } from './Manual';
import { CallTree } from './CallTree';

export class CallTreeEntry {
  static readonly active = 1;
  static readonly inactive = 0;
  callTreeEntryId = -1;
  callTree = new CallTree();
  division = '';
  location = '';
  logRecipients = '';
  manuals: Manual[] = [];
  missionCritical = '';
  serviceLevel: number;
  systemName = '';
  status = CallTreeEntry.inactive;
  timeToStartProcedure = '';
  timeToEscalate = '';
  version: number;

}
