import { Manual } from './Manual';
import { CallTree } from './CallTree';

export class CallTreeInfo {
  static readonly active = 1;
  static readonly inactive = 0;
  callTreeInfoId = -1;
  callTree = new CallTree();
  division = '';
  location = '';
  logRecipients = '';
  manuals: Manual[] = [];
  missionCritical = '';
  serviceLevel: number;
  systemName = '';
  status = CallTreeInfo.inactive;
  timeToStartProcedure = '';
  timeToEscalate = '';
  version: number;

}
