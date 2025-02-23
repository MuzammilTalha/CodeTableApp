export type Project = {
  id: number;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  status: Project_Status;
  type: Project_Type;
  test_phase_status: Test_Phase_Status;
  code_tables: CodeTable[]
};

export type CodeTable = {
  rowCount: number;
  tableName: string;
  newUpdateFlag: boolean;
  pk1: string;
  pk2: string;
  pk3: string;
}

export enum Project_Type {
  WORKINPROGRESS = 'workinprogress',
  TESTPHASES = 'Testphases',
  ARCHIVED = 'archived',
  DELETED = 'deleted'
}

export enum Project_Status {
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  PENDING = 'pending',
  ACTIVE = 'active'
}

export enum Test_Phase_Status {
  BEFORE_TMHP = 'before_tmhp',
  TMHP_TEST = 'tmhp_test',
  TESTED = 'tested'
}
