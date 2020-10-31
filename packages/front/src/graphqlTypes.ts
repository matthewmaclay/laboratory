import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
};

export type Query = {
  __typename?: 'Query';
  argument?: Maybe<Argument>;
  comment?: Maybe<Comment>;
  comments?: Maybe<Array<Maybe<Comment>>>;
  commentsConnection?: Maybe<CommentConnection>;
  exercise?: Maybe<Exercise>;
  exercises?: Maybe<Array<Maybe<Exercise>>>;
  exercisesConnection?: Maybe<ExerciseConnection>;
  group?: Maybe<Group>;
  groups?: Maybe<Array<Maybe<Group>>>;
  groupsConnection?: Maybe<GroupConnection>;
  lesson?: Maybe<Lesson>;
  lessons?: Maybe<Array<Maybe<Lesson>>>;
  lessonsConnection?: Maybe<LessonConnection>;
  project?: Maybe<Project>;
  projects?: Maybe<Array<Maybe<Project>>>;
  projectsConnection?: Maybe<ProjectConnection>;
  stage?: Maybe<Stage>;
  stages?: Maybe<Array<Maybe<Stage>>>;
  stagesConnection?: Maybe<StageConnection>;
  task?: Maybe<Task>;
  tasks?: Maybe<Array<Maybe<Task>>>;
  tasksConnection?: Maybe<TaskConnection>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
  me?: Maybe<UsersPermissionsMe>;
};


export type QueryCommentArgs = {
  id: Scalars['ID'];
};


export type QueryCommentsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryCommentsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryExerciseArgs = {
  id: Scalars['ID'];
};


export type QueryExercisesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryExercisesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryGroupArgs = {
  id: Scalars['ID'];
};


export type QueryGroupsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryGroupsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryLessonArgs = {
  id: Scalars['ID'];
};


export type QueryLessonsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryLessonsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryProjectArgs = {
  id: Scalars['ID'];
};


export type QueryProjectsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryProjectsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryStageArgs = {
  id: Scalars['ID'];
};


export type QueryStagesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryStagesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryTaskArgs = {
  id: Scalars['ID'];
};


export type QueryTasksArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryTasksConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryFilesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryFilesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
};


export type QueryRolesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRolesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUsersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type Argument = {
  __typename?: 'Argument';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  arg?: Maybe<Scalars['String']>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
};


export type AdminUser = {
  __typename?: 'AdminUser';
  id: Scalars['ID'];
  username?: Maybe<Scalars['String']>;
};

export type Comment = {
  __typename?: 'Comment';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  topOffset?: Maybe<Scalars['Int']>;
  messages?: Maybe<Array<Maybe<ComponentNewMessage>>>;
  content?: Maybe<Scalars['String']>;
  lesson?: Maybe<Lesson>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
};

export type ComponentNewMessage = {
  __typename?: 'ComponentNewMessage';
  id: Scalars['ID'];
  author?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type Lesson = {
  __typename?: 'Lesson';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  status?: Maybe<Enum_Lesson_Status>;
  time?: Maybe<Scalars['String']>;
  uniq?: Maybe<Scalars['JSON']>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
  comments?: Maybe<Array<Maybe<Comment>>>;
};


export type LessonCommentsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export enum Enum_Lesson_Status {
  Draft = 'draft',
  Fix = 'fix',
  Check = 'check',
  Complete = 'complete'
}


export type CommentConnection = {
  __typename?: 'CommentConnection';
  values?: Maybe<Array<Maybe<Comment>>>;
  groupBy?: Maybe<CommentGroupBy>;
  aggregate?: Maybe<CommentAggregator>;
};

export type CommentGroupBy = {
  __typename?: 'CommentGroupBy';
  id?: Maybe<Array<Maybe<CommentConnectionId>>>;
  created_at?: Maybe<Array<Maybe<CommentConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<CommentConnectionUpdated_At>>>;
  topOffset?: Maybe<Array<Maybe<CommentConnectionTopOffset>>>;
  content?: Maybe<Array<Maybe<CommentConnectionContent>>>;
  lesson?: Maybe<Array<Maybe<CommentConnectionLesson>>>;
  created_by?: Maybe<Array<Maybe<CommentConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<CommentConnectionUpdated_By>>>;
};

export type CommentConnectionId = {
  __typename?: 'CommentConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CommentConnection>;
};

export type CommentConnectionCreated_At = {
  __typename?: 'CommentConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CommentConnection>;
};

export type CommentConnectionUpdated_At = {
  __typename?: 'CommentConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CommentConnection>;
};

export type CommentConnectionTopOffset = {
  __typename?: 'CommentConnectionTopOffset';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<CommentConnection>;
};

export type CommentConnectionContent = {
  __typename?: 'CommentConnectionContent';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CommentConnection>;
};

export type CommentConnectionLesson = {
  __typename?: 'CommentConnectionLesson';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CommentConnection>;
};

export type CommentConnectionCreated_By = {
  __typename?: 'CommentConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CommentConnection>;
};

export type CommentConnectionUpdated_By = {
  __typename?: 'CommentConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CommentConnection>;
};

export type CommentAggregator = {
  __typename?: 'CommentAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<CommentAggregatorSum>;
  avg?: Maybe<CommentAggregatorAvg>;
  min?: Maybe<CommentAggregatorMin>;
  max?: Maybe<CommentAggregatorMax>;
};

export type CommentAggregatorSum = {
  __typename?: 'CommentAggregatorSum';
  topOffset?: Maybe<Scalars['Float']>;
};

export type CommentAggregatorAvg = {
  __typename?: 'CommentAggregatorAvg';
  topOffset?: Maybe<Scalars['Float']>;
};

export type CommentAggregatorMin = {
  __typename?: 'CommentAggregatorMin';
  topOffset?: Maybe<Scalars['Float']>;
};

export type CommentAggregatorMax = {
  __typename?: 'CommentAggregatorMax';
  topOffset?: Maybe<Scalars['Float']>;
};

export type Exercise = {
  __typename?: 'Exercise';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  tests?: Maybe<Array<Maybe<ComponentNewTest>>>;
  task?: Maybe<Task>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
};

export type ComponentNewTest = {
  __typename?: 'ComponentNewTest';
  id: Scalars['ID'];
  open?: Maybe<Scalars['Boolean']>;
  language?: Maybe<Scalars['String']>;
  args?: Maybe<Array<Maybe<ComponentNewArg>>>;
  result?: Maybe<Scalars['String']>;
};

export type ComponentNewArg = {
  __typename?: 'ComponentNewArg';
  id: Scalars['ID'];
  value?: Maybe<Scalars['String']>;
};

export type Task = {
  __typename?: 'Task';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  group?: Maybe<Group>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
  exercises?: Maybe<Array<Maybe<Exercise>>>;
};


export type TaskExercisesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type Group = {
  __typename?: 'Group';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  title?: Maybe<Scalars['String']>;
  teacherId?: Maybe<Scalars['String']>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
  students?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  tasks?: Maybe<Array<Maybe<Task>>>;
};


export type GroupStudentsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type GroupTasksArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsRole>;
  teacher?: Maybe<Scalars['Boolean']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['String']>;
  organization?: Maybe<Scalars['String']>;
  patronymic?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
  groups?: Maybe<Array<Maybe<Group>>>;
};


export type UsersPermissionsUserGroupsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type UsersPermissionsRolePermissionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type UsersPermissionsRoleUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  id: Scalars['ID'];
  type: Scalars['String'];
  controller: Scalars['String'];
  action: Scalars['String'];
  enabled: Scalars['Boolean'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
};

export type ExerciseConnection = {
  __typename?: 'ExerciseConnection';
  values?: Maybe<Array<Maybe<Exercise>>>;
  groupBy?: Maybe<ExerciseGroupBy>;
  aggregate?: Maybe<ExerciseAggregator>;
};

export type ExerciseGroupBy = {
  __typename?: 'ExerciseGroupBy';
  id?: Maybe<Array<Maybe<ExerciseConnectionId>>>;
  created_at?: Maybe<Array<Maybe<ExerciseConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<ExerciseConnectionUpdated_At>>>;
  description?: Maybe<Array<Maybe<ExerciseConnectionDescription>>>;
  task?: Maybe<Array<Maybe<ExerciseConnectionTask>>>;
  created_by?: Maybe<Array<Maybe<ExerciseConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<ExerciseConnectionUpdated_By>>>;
};

export type ExerciseConnectionId = {
  __typename?: 'ExerciseConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ExerciseConnection>;
};

export type ExerciseConnectionCreated_At = {
  __typename?: 'ExerciseConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ExerciseConnection>;
};

export type ExerciseConnectionUpdated_At = {
  __typename?: 'ExerciseConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ExerciseConnection>;
};

export type ExerciseConnectionDescription = {
  __typename?: 'ExerciseConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ExerciseConnection>;
};

export type ExerciseConnectionTask = {
  __typename?: 'ExerciseConnectionTask';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ExerciseConnection>;
};

export type ExerciseConnectionCreated_By = {
  __typename?: 'ExerciseConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ExerciseConnection>;
};

export type ExerciseConnectionUpdated_By = {
  __typename?: 'ExerciseConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ExerciseConnection>;
};

export type ExerciseAggregator = {
  __typename?: 'ExerciseAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type GroupConnection = {
  __typename?: 'GroupConnection';
  values?: Maybe<Array<Maybe<Group>>>;
  groupBy?: Maybe<GroupGroupBy>;
  aggregate?: Maybe<GroupAggregator>;
};

export type GroupGroupBy = {
  __typename?: 'GroupGroupBy';
  id?: Maybe<Array<Maybe<GroupConnectionId>>>;
  created_at?: Maybe<Array<Maybe<GroupConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<GroupConnectionUpdated_At>>>;
  title?: Maybe<Array<Maybe<GroupConnectionTitle>>>;
  teacherId?: Maybe<Array<Maybe<GroupConnectionTeacherId>>>;
  created_by?: Maybe<Array<Maybe<GroupConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<GroupConnectionUpdated_By>>>;
};

export type GroupConnectionId = {
  __typename?: 'GroupConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<GroupConnection>;
};

export type GroupConnectionCreated_At = {
  __typename?: 'GroupConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<GroupConnection>;
};

export type GroupConnectionUpdated_At = {
  __typename?: 'GroupConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<GroupConnection>;
};

export type GroupConnectionTitle = {
  __typename?: 'GroupConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<GroupConnection>;
};

export type GroupConnectionTeacherId = {
  __typename?: 'GroupConnectionTeacherId';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<GroupConnection>;
};

export type GroupConnectionCreated_By = {
  __typename?: 'GroupConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<GroupConnection>;
};

export type GroupConnectionUpdated_By = {
  __typename?: 'GroupConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<GroupConnection>;
};

export type GroupAggregator = {
  __typename?: 'GroupAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type LessonConnection = {
  __typename?: 'LessonConnection';
  values?: Maybe<Array<Maybe<Lesson>>>;
  groupBy?: Maybe<LessonGroupBy>;
  aggregate?: Maybe<LessonAggregator>;
};

export type LessonGroupBy = {
  __typename?: 'LessonGroupBy';
  id?: Maybe<Array<Maybe<LessonConnectionId>>>;
  created_at?: Maybe<Array<Maybe<LessonConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<LessonConnectionUpdated_At>>>;
  title?: Maybe<Array<Maybe<LessonConnectionTitle>>>;
  content?: Maybe<Array<Maybe<LessonConnectionContent>>>;
  status?: Maybe<Array<Maybe<LessonConnectionStatus>>>;
  time?: Maybe<Array<Maybe<LessonConnectionTime>>>;
  uniq?: Maybe<Array<Maybe<LessonConnectionUniq>>>;
  created_by?: Maybe<Array<Maybe<LessonConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<LessonConnectionUpdated_By>>>;
};

export type LessonConnectionId = {
  __typename?: 'LessonConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<LessonConnection>;
};

export type LessonConnectionCreated_At = {
  __typename?: 'LessonConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<LessonConnection>;
};

export type LessonConnectionUpdated_At = {
  __typename?: 'LessonConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<LessonConnection>;
};

export type LessonConnectionTitle = {
  __typename?: 'LessonConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<LessonConnection>;
};

export type LessonConnectionContent = {
  __typename?: 'LessonConnectionContent';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<LessonConnection>;
};

export type LessonConnectionStatus = {
  __typename?: 'LessonConnectionStatus';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<LessonConnection>;
};

export type LessonConnectionTime = {
  __typename?: 'LessonConnectionTime';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<LessonConnection>;
};

export type LessonConnectionUniq = {
  __typename?: 'LessonConnectionUniq';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<LessonConnection>;
};

export type LessonConnectionCreated_By = {
  __typename?: 'LessonConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<LessonConnection>;
};

export type LessonConnectionUpdated_By = {
  __typename?: 'LessonConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<LessonConnection>;
};

export type LessonAggregator = {
  __typename?: 'LessonAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type Project = {
  __typename?: 'Project';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  metrics?: Maybe<Array<Maybe<ComponentNewMetrics>>>;
  name?: Maybe<Scalars['String']>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
  stages?: Maybe<Array<Maybe<Stage>>>;
};


export type ProjectStagesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ComponentNewMetrics = {
  __typename?: 'ComponentNewMetrics';
  id: Scalars['ID'];
  data?: Maybe<Scalars['JSON']>;
};

export type Stage = {
  __typename?: 'Stage';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  number?: Maybe<Scalars['String']>;
  project?: Maybe<Project>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
};

export type ProjectConnection = {
  __typename?: 'ProjectConnection';
  values?: Maybe<Array<Maybe<Project>>>;
  groupBy?: Maybe<ProjectGroupBy>;
  aggregate?: Maybe<ProjectAggregator>;
};

export type ProjectGroupBy = {
  __typename?: 'ProjectGroupBy';
  id?: Maybe<Array<Maybe<ProjectConnectionId>>>;
  created_at?: Maybe<Array<Maybe<ProjectConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<ProjectConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<ProjectConnectionName>>>;
  created_by?: Maybe<Array<Maybe<ProjectConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<ProjectConnectionUpdated_By>>>;
};

export type ProjectConnectionId = {
  __typename?: 'ProjectConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProjectConnection>;
};

export type ProjectConnectionCreated_At = {
  __typename?: 'ProjectConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ProjectConnection>;
};

export type ProjectConnectionUpdated_At = {
  __typename?: 'ProjectConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ProjectConnection>;
};

export type ProjectConnectionName = {
  __typename?: 'ProjectConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ProjectConnection>;
};

export type ProjectConnectionCreated_By = {
  __typename?: 'ProjectConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProjectConnection>;
};

export type ProjectConnectionUpdated_By = {
  __typename?: 'ProjectConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProjectConnection>;
};

export type ProjectAggregator = {
  __typename?: 'ProjectAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type StageConnection = {
  __typename?: 'StageConnection';
  values?: Maybe<Array<Maybe<Stage>>>;
  groupBy?: Maybe<StageGroupBy>;
  aggregate?: Maybe<StageAggregator>;
};

export type StageGroupBy = {
  __typename?: 'StageGroupBy';
  id?: Maybe<Array<Maybe<StageConnectionId>>>;
  created_at?: Maybe<Array<Maybe<StageConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<StageConnectionUpdated_At>>>;
  number?: Maybe<Array<Maybe<StageConnectionNumber>>>;
  project?: Maybe<Array<Maybe<StageConnectionProject>>>;
  created_by?: Maybe<Array<Maybe<StageConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<StageConnectionUpdated_By>>>;
};

export type StageConnectionId = {
  __typename?: 'StageConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<StageConnection>;
};

export type StageConnectionCreated_At = {
  __typename?: 'StageConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<StageConnection>;
};

export type StageConnectionUpdated_At = {
  __typename?: 'StageConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<StageConnection>;
};

export type StageConnectionNumber = {
  __typename?: 'StageConnectionNumber';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StageConnection>;
};

export type StageConnectionProject = {
  __typename?: 'StageConnectionProject';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<StageConnection>;
};

export type StageConnectionCreated_By = {
  __typename?: 'StageConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<StageConnection>;
};

export type StageConnectionUpdated_By = {
  __typename?: 'StageConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<StageConnection>;
};

export type StageAggregator = {
  __typename?: 'StageAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type TaskConnection = {
  __typename?: 'TaskConnection';
  values?: Maybe<Array<Maybe<Task>>>;
  groupBy?: Maybe<TaskGroupBy>;
  aggregate?: Maybe<TaskAggregator>;
};

export type TaskGroupBy = {
  __typename?: 'TaskGroupBy';
  id?: Maybe<Array<Maybe<TaskConnectionId>>>;
  created_at?: Maybe<Array<Maybe<TaskConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<TaskConnectionUpdated_At>>>;
  group?: Maybe<Array<Maybe<TaskConnectionGroup>>>;
  created_by?: Maybe<Array<Maybe<TaskConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<TaskConnectionUpdated_By>>>;
};

export type TaskConnectionId = {
  __typename?: 'TaskConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<TaskConnection>;
};

export type TaskConnectionCreated_At = {
  __typename?: 'TaskConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<TaskConnection>;
};

export type TaskConnectionUpdated_At = {
  __typename?: 'TaskConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<TaskConnection>;
};

export type TaskConnectionGroup = {
  __typename?: 'TaskConnectionGroup';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<TaskConnection>;
};

export type TaskConnectionCreated_By = {
  __typename?: 'TaskConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<TaskConnection>;
};

export type TaskConnectionUpdated_By = {
  __typename?: 'TaskConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<TaskConnection>;
};

export type TaskAggregator = {
  __typename?: 'TaskAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
  related?: Maybe<Array<Maybe<Morph>>>;
};


export type UploadFileRelatedArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type Morph = UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsLoginPayload | UserPermissionsPasswordPayload | Argument | UpdateArgumentPayload | DeleteArgumentPayload | Comment | CommentConnection | CommentAggregator | CommentAggregatorSum | CommentAggregatorAvg | CommentAggregatorMin | CommentAggregatorMax | CommentGroupBy | CommentConnectionId | CommentConnectionCreated_At | CommentConnectionUpdated_At | CommentConnectionTopOffset | CommentConnectionContent | CommentConnectionLesson | CommentConnectionCreated_By | CommentConnectionUpdated_By | CreateCommentPayload | UpdateCommentPayload | DeleteCommentPayload | Exercise | ExerciseConnection | ExerciseAggregator | ExerciseGroupBy | ExerciseConnectionId | ExerciseConnectionCreated_At | ExerciseConnectionUpdated_At | ExerciseConnectionDescription | ExerciseConnectionTask | ExerciseConnectionCreated_By | ExerciseConnectionUpdated_By | CreateExercisePayload | UpdateExercisePayload | DeleteExercisePayload | Group | GroupConnection | GroupAggregator | GroupGroupBy | GroupConnectionId | GroupConnectionCreated_At | GroupConnectionUpdated_At | GroupConnectionTitle | GroupConnectionTeacherId | GroupConnectionCreated_By | GroupConnectionUpdated_By | CreateGroupPayload | UpdateGroupPayload | DeleteGroupPayload | Lesson | LessonConnection | LessonAggregator | LessonGroupBy | LessonConnectionId | LessonConnectionCreated_At | LessonConnectionUpdated_At | LessonConnectionTitle | LessonConnectionContent | LessonConnectionStatus | LessonConnectionTime | LessonConnectionUniq | LessonConnectionCreated_By | LessonConnectionUpdated_By | CreateLessonPayload | UpdateLessonPayload | DeleteLessonPayload | Project | ProjectConnection | ProjectAggregator | ProjectGroupBy | ProjectConnectionId | ProjectConnectionCreated_At | ProjectConnectionUpdated_At | ProjectConnectionName | ProjectConnectionCreated_By | ProjectConnectionUpdated_By | CreateProjectPayload | UpdateProjectPayload | DeleteProjectPayload | Stage | StageConnection | StageAggregator | StageGroupBy | StageConnectionId | StageConnectionCreated_At | StageConnectionUpdated_At | StageConnectionNumber | StageConnectionProject | StageConnectionCreated_By | StageConnectionUpdated_By | CreateStagePayload | UpdateStagePayload | DeleteStagePayload | Task | TaskConnection | TaskAggregator | TaskGroupBy | TaskConnectionId | TaskConnectionCreated_At | TaskConnectionUpdated_At | TaskConnectionGroup | TaskConnectionCreated_By | TaskConnectionUpdated_By | CreateTaskPayload | UpdateTaskPayload | DeleteTaskPayload | UploadFile | UploadFileConnection | UploadFileAggregator | UploadFileAggregatorSum | UploadFileAggregatorAvg | UploadFileAggregatorMin | UploadFileAggregatorMax | UploadFileGroupBy | UploadFileConnectionId | UploadFileConnectionCreated_At | UploadFileConnectionUpdated_At | UploadFileConnectionName | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionWidth | UploadFileConnectionHeight | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionExt | UploadFileConnectionMime | UploadFileConnectionSize | UploadFileConnectionUrl | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | UploadFileConnectionCreated_By | UploadFileConnectionUpdated_By | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleConnection | UsersPermissionsRoleAggregator | UsersPermissionsRoleGroupBy | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionType | UsersPermissionsRoleConnectionCreated_By | UsersPermissionsRoleConnectionUpdated_By | CreateRolePayload | UpdateRolePayload | DeleteRolePayload | UsersPermissionsUser | UsersPermissionsUserConnection | UsersPermissionsUserAggregator | UsersPermissionsUserGroupBy | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionCreated_At | UsersPermissionsUserConnectionUpdated_At | UsersPermissionsUserConnectionUsername | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionRole | UsersPermissionsUserConnectionTeacher | UsersPermissionsUserConnectionFirstName | UsersPermissionsUserConnectionLastName | UsersPermissionsUserConnectionBirthday | UsersPermissionsUserConnectionOrganization | UsersPermissionsUserConnectionPatronymic | UsersPermissionsUserConnectionAvatar | UsersPermissionsUserConnectionCreated_By | UsersPermissionsUserConnectionUpdated_By | CreateUserPayload | UpdateUserPayload | DeleteUserPayload | ComponentNewArg | ComponentNewMessage | ComponentNewMetrics | ComponentNewTest;

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsMeRole>;
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UpdateArgumentPayload = {
  __typename?: 'updateArgumentPayload';
  argument?: Maybe<Argument>;
};

export type DeleteArgumentPayload = {
  __typename?: 'deleteArgumentPayload';
  argument?: Maybe<Argument>;
};

export type CreateCommentPayload = {
  __typename?: 'createCommentPayload';
  comment?: Maybe<Comment>;
};

export type UpdateCommentPayload = {
  __typename?: 'updateCommentPayload';
  comment?: Maybe<Comment>;
};

export type DeleteCommentPayload = {
  __typename?: 'deleteCommentPayload';
  comment?: Maybe<Comment>;
};

export type CreateExercisePayload = {
  __typename?: 'createExercisePayload';
  exercise?: Maybe<Exercise>;
};

export type UpdateExercisePayload = {
  __typename?: 'updateExercisePayload';
  exercise?: Maybe<Exercise>;
};

export type DeleteExercisePayload = {
  __typename?: 'deleteExercisePayload';
  exercise?: Maybe<Exercise>;
};

export type CreateGroupPayload = {
  __typename?: 'createGroupPayload';
  group?: Maybe<Group>;
};

export type UpdateGroupPayload = {
  __typename?: 'updateGroupPayload';
  group?: Maybe<Group>;
};

export type DeleteGroupPayload = {
  __typename?: 'deleteGroupPayload';
  group?: Maybe<Group>;
};

export type CreateLessonPayload = {
  __typename?: 'createLessonPayload';
  lesson?: Maybe<Lesson>;
};

export type UpdateLessonPayload = {
  __typename?: 'updateLessonPayload';
  lesson?: Maybe<Lesson>;
};

export type DeleteLessonPayload = {
  __typename?: 'deleteLessonPayload';
  lesson?: Maybe<Lesson>;
};

export type CreateProjectPayload = {
  __typename?: 'createProjectPayload';
  project?: Maybe<Project>;
};

export type UpdateProjectPayload = {
  __typename?: 'updateProjectPayload';
  project?: Maybe<Project>;
};

export type DeleteProjectPayload = {
  __typename?: 'deleteProjectPayload';
  project?: Maybe<Project>;
};

export type CreateStagePayload = {
  __typename?: 'createStagePayload';
  stage?: Maybe<Stage>;
};

export type UpdateStagePayload = {
  __typename?: 'updateStagePayload';
  stage?: Maybe<Stage>;
};

export type DeleteStagePayload = {
  __typename?: 'deleteStagePayload';
  stage?: Maybe<Stage>;
};

export type CreateTaskPayload = {
  __typename?: 'createTaskPayload';
  task?: Maybe<Task>;
};

export type UpdateTaskPayload = {
  __typename?: 'updateTaskPayload';
  task?: Maybe<Task>;
};

export type DeleteTaskPayload = {
  __typename?: 'deleteTaskPayload';
  task?: Maybe<Task>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  values?: Maybe<Array<Maybe<UploadFile>>>;
  groupBy?: Maybe<UploadFileGroupBy>;
  aggregate?: Maybe<UploadFileAggregator>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
  created_by?: Maybe<Array<Maybe<UploadFileConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<UploadFileConnectionUpdated_By>>>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCreated_At = {
  __typename?: 'UploadFileConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUpdated_At = {
  __typename?: 'UploadFileConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCreated_By = {
  __typename?: 'UploadFileConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUpdated_By = {
  __typename?: 'UploadFileConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<UploadFileAggregatorSum>;
  avg?: Maybe<UploadFileAggregatorAvg>;
  min?: Maybe<UploadFileAggregatorMin>;
  max?: Maybe<UploadFileAggregatorMax>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
  created_by?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionUpdated_By>>>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionCreated_By = {
  __typename?: 'UsersPermissionsRoleConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionUpdated_By = {
  __typename?: 'UsersPermissionsRoleConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
  teacher?: Maybe<Array<Maybe<UsersPermissionsUserConnectionTeacher>>>;
  firstName?: Maybe<Array<Maybe<UsersPermissionsUserConnectionFirstName>>>;
  lastName?: Maybe<Array<Maybe<UsersPermissionsUserConnectionLastName>>>;
  birthday?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBirthday>>>;
  organization?: Maybe<Array<Maybe<UsersPermissionsUserConnectionOrganization>>>;
  patronymic?: Maybe<Array<Maybe<UsersPermissionsUserConnectionPatronymic>>>;
  avatar?: Maybe<Array<Maybe<UsersPermissionsUserConnectionAvatar>>>;
  created_by?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_By>>>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: 'UsersPermissionsUserConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionTeacher = {
  __typename?: 'UsersPermissionsUserConnectionTeacher';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionFirstName = {
  __typename?: 'UsersPermissionsUserConnectionFirstName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionLastName = {
  __typename?: 'UsersPermissionsUserConnectionLastName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionBirthday = {
  __typename?: 'UsersPermissionsUserConnectionBirthday';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionOrganization = {
  __typename?: 'UsersPermissionsUserConnectionOrganization';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionPatronymic = {
  __typename?: 'UsersPermissionsUserConnectionPatronymic';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionAvatar = {
  __typename?: 'UsersPermissionsUserConnectionAvatar';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionCreated_By = {
  __typename?: 'UsersPermissionsUserConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUpdated_By = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type Mutation = {
  __typename?: 'Mutation';
  updateArgument?: Maybe<UpdateArgumentPayload>;
  deleteArgument?: Maybe<DeleteArgumentPayload>;
  createComment?: Maybe<CreateCommentPayload>;
  updateComment?: Maybe<UpdateCommentPayload>;
  deleteComment?: Maybe<DeleteCommentPayload>;
  createExercise?: Maybe<CreateExercisePayload>;
  updateExercise?: Maybe<UpdateExercisePayload>;
  deleteExercise?: Maybe<DeleteExercisePayload>;
  createGroup?: Maybe<CreateGroupPayload>;
  updateGroup?: Maybe<UpdateGroupPayload>;
  deleteGroup?: Maybe<DeleteGroupPayload>;
  createLesson?: Maybe<CreateLessonPayload>;
  updateLesson?: Maybe<UpdateLessonPayload>;
  deleteLesson?: Maybe<DeleteLessonPayload>;
  createProject?: Maybe<CreateProjectPayload>;
  updateProject?: Maybe<UpdateProjectPayload>;
  deleteProject?: Maybe<DeleteProjectPayload>;
  createStage?: Maybe<CreateStagePayload>;
  updateStage?: Maybe<UpdateStagePayload>;
  deleteStage?: Maybe<DeleteStagePayload>;
  createTask?: Maybe<CreateTaskPayload>;
  updateTask?: Maybe<UpdateTaskPayload>;
  deleteTask?: Maybe<DeleteTaskPayload>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  upload: UploadFile;
  multipleUpload: Array<Maybe<UploadFile>>;
  updateFileInfo: UploadFile;
  login: UsersPermissionsLoginPayload;
  register: UsersPermissionsLoginPayload;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
};


export type MutationUpdateArgumentArgs = {
  input?: Maybe<UpdateArgumentInput>;
};


export type MutationCreateCommentArgs = {
  input?: Maybe<CreateCommentInput>;
};


export type MutationUpdateCommentArgs = {
  input?: Maybe<UpdateCommentInput>;
};


export type MutationDeleteCommentArgs = {
  input?: Maybe<DeleteCommentInput>;
};


export type MutationCreateExerciseArgs = {
  input?: Maybe<CreateExerciseInput>;
};


export type MutationUpdateExerciseArgs = {
  input?: Maybe<UpdateExerciseInput>;
};


export type MutationDeleteExerciseArgs = {
  input?: Maybe<DeleteExerciseInput>;
};


export type MutationCreateGroupArgs = {
  input?: Maybe<CreateGroupInput>;
};


export type MutationUpdateGroupArgs = {
  input?: Maybe<UpdateGroupInput>;
};


export type MutationDeleteGroupArgs = {
  input?: Maybe<DeleteGroupInput>;
};


export type MutationCreateLessonArgs = {
  input?: Maybe<CreateLessonInput>;
};


export type MutationUpdateLessonArgs = {
  input?: Maybe<UpdateLessonInput>;
};


export type MutationDeleteLessonArgs = {
  input?: Maybe<DeleteLessonInput>;
};


export type MutationCreateProjectArgs = {
  input?: Maybe<CreateProjectInput>;
};


export type MutationUpdateProjectArgs = {
  input?: Maybe<UpdateProjectInput>;
};


export type MutationDeleteProjectArgs = {
  input?: Maybe<DeleteProjectInput>;
};


export type MutationCreateStageArgs = {
  input?: Maybe<CreateStageInput>;
};


export type MutationUpdateStageArgs = {
  input?: Maybe<UpdateStageInput>;
};


export type MutationDeleteStageArgs = {
  input?: Maybe<DeleteStageInput>;
};


export type MutationCreateTaskArgs = {
  input?: Maybe<CreateTaskInput>;
};


export type MutationUpdateTaskArgs = {
  input?: Maybe<UpdateTaskInput>;
};


export type MutationDeleteTaskArgs = {
  input?: Maybe<DeleteTaskInput>;
};


export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>;
};


export type MutationUpdateRoleArgs = {
  input?: Maybe<UpdateRoleInput>;
};


export type MutationDeleteRoleArgs = {
  input?: Maybe<DeleteRoleInput>;
};


export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>;
};


export type MutationUpdateUserArgs = {
  input?: Maybe<UpdateUserInput>;
};


export type MutationDeleteUserArgs = {
  input?: Maybe<DeleteUserInput>;
};


export type MutationUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  file: Scalars['Upload'];
};


export type MutationMultipleUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  files: Array<Maybe<Scalars['Upload']>>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: FileInfoInput;
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  code: Scalars['String'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};

export type UpdateArgumentInput = {
  data?: Maybe<EditArgumentInput>;
};

export type EditArgumentInput = {
  arg?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateCommentInput = {
  data?: Maybe<CommentInput>;
};

export type CommentInput = {
  topOffset?: Maybe<Scalars['Int']>;
  messages?: Maybe<Array<Maybe<ComponentNewMessageInput>>>;
  content?: Maybe<Scalars['String']>;
  lesson?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type ComponentNewMessageInput = {
  author?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type UpdateCommentInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditCommentInput>;
};

export type InputId = {
  id: Scalars['ID'];
};

export type EditCommentInput = {
  topOffset?: Maybe<Scalars['Int']>;
  messages?: Maybe<Array<Maybe<EditComponentNewMessageInput>>>;
  content?: Maybe<Scalars['String']>;
  lesson?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditComponentNewMessageInput = {
  id?: Maybe<Scalars['ID']>;
  author?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type DeleteCommentInput = {
  where?: Maybe<InputId>;
};

export type CreateExerciseInput = {
  data?: Maybe<ExerciseInput>;
};

export type ExerciseInput = {
  description?: Maybe<Scalars['String']>;
  tests?: Maybe<Array<Maybe<ComponentNewTestInput>>>;
  task?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type ComponentNewTestInput = {
  open?: Maybe<Scalars['Boolean']>;
  language?: Maybe<Scalars['String']>;
  args?: Maybe<Array<Maybe<ComponentNewArgInput>>>;
  result?: Maybe<Scalars['String']>;
};

export type ComponentNewArgInput = {
  value?: Maybe<Scalars['String']>;
};

export type UpdateExerciseInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditExerciseInput>;
};

export type EditExerciseInput = {
  description?: Maybe<Scalars['String']>;
  tests?: Maybe<Array<Maybe<EditComponentNewTestInput>>>;
  task?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditComponentNewTestInput = {
  id?: Maybe<Scalars['ID']>;
  open?: Maybe<Scalars['Boolean']>;
  language?: Maybe<Scalars['String']>;
  args?: Maybe<Array<Maybe<EditComponentNewArgInput>>>;
  result?: Maybe<Scalars['String']>;
};

export type EditComponentNewArgInput = {
  id?: Maybe<Scalars['ID']>;
  value?: Maybe<Scalars['String']>;
};

export type DeleteExerciseInput = {
  where?: Maybe<InputId>;
};

export type CreateGroupInput = {
  data?: Maybe<GroupInput>;
};

export type GroupInput = {
  title?: Maybe<Scalars['String']>;
  students?: Maybe<Array<Maybe<Scalars['ID']>>>;
  tasks?: Maybe<Array<Maybe<Scalars['ID']>>>;
  teacherId?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateGroupInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditGroupInput>;
};

export type EditGroupInput = {
  title?: Maybe<Scalars['String']>;
  students?: Maybe<Array<Maybe<Scalars['ID']>>>;
  tasks?: Maybe<Array<Maybe<Scalars['ID']>>>;
  teacherId?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteGroupInput = {
  where?: Maybe<InputId>;
};

export type CreateLessonInput = {
  data?: Maybe<LessonInput>;
};

export type LessonInput = {
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  comments?: Maybe<Array<Maybe<Scalars['ID']>>>;
  status?: Maybe<Enum_Lesson_Status>;
  time?: Maybe<Scalars['String']>;
  uniq?: Maybe<Scalars['JSON']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateLessonInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditLessonInput>;
};

export type EditLessonInput = {
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  comments?: Maybe<Array<Maybe<Scalars['ID']>>>;
  status?: Maybe<Enum_Lesson_Status>;
  time?: Maybe<Scalars['String']>;
  uniq?: Maybe<Scalars['JSON']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteLessonInput = {
  where?: Maybe<InputId>;
};

export type CreateProjectInput = {
  data?: Maybe<ProjectInput>;
};

export type ProjectInput = {
  metrics?: Maybe<Array<Maybe<ComponentNewMetricInput>>>;
  name?: Maybe<Scalars['String']>;
  stages?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type ComponentNewMetricInput = {
  data?: Maybe<Scalars['JSON']>;
};

export type UpdateProjectInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditProjectInput>;
};

export type EditProjectInput = {
  metrics?: Maybe<Array<Maybe<EditComponentNewMetricInput>>>;
  name?: Maybe<Scalars['String']>;
  stages?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditComponentNewMetricInput = {
  id?: Maybe<Scalars['ID']>;
  data?: Maybe<Scalars['JSON']>;
};

export type DeleteProjectInput = {
  where?: Maybe<InputId>;
};

export type CreateStageInput = {
  data?: Maybe<StageInput>;
};

export type StageInput = {
  number?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateStageInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditStageInput>;
};

export type EditStageInput = {
  number?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteStageInput = {
  where?: Maybe<InputId>;
};

export type CreateTaskInput = {
  data?: Maybe<TaskInput>;
};

export type TaskInput = {
  exercises?: Maybe<Array<Maybe<Scalars['ID']>>>;
  group?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateTaskInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditTaskInput>;
};

export type EditTaskInput = {
  exercises?: Maybe<Array<Maybe<Scalars['ID']>>>;
  group?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteTaskInput = {
  where?: Maybe<InputId>;
};

export type CreateRoleInput = {
  data?: Maybe<RoleInput>;
};

export type RoleInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateRoleInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditRoleInput>;
};

export type EditRoleInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteRoleInput = {
  where?: Maybe<InputId>;
};

export type CreateUserInput = {
  data?: Maybe<UserInput>;
};

export type UserInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  teacher?: Maybe<Scalars['Boolean']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['String']>;
  organization?: Maybe<Scalars['String']>;
  patronymic?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  groups?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateUserInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditUserInput>;
};

export type EditUserInput = {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  teacher?: Maybe<Scalars['Boolean']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['String']>;
  organization?: Maybe<Scalars['String']>;
  patronymic?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  groups?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteUserInput = {
  where?: Maybe<InputId>;
};


export type FileInfoInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRegisterInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type ArgumentInput = {
  arg?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type FileInput = {
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditFileInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};




export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type GetLessonsQueryVariables = Exact<{
  status?: Maybe<Enum_Lesson_Status>;
}>;


export type GetLessonsQuery = (
  { __typename?: 'Query' }
  & { lessons?: Maybe<Array<Maybe<(
    { __typename?: 'Lesson' }
    & Pick<Lesson, 'status' | 'id' | 'title' | 'time'>
  )>>> }
);

export type GetLessonQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetLessonQuery = (
  { __typename?: 'Query' }
  & { lesson?: Maybe<(
    { __typename?: 'Lesson' }
    & Pick<Lesson, 'status' | 'content' | 'title'>
  )> }
);

export type UpdateLessonContentMutationVariables = Exact<{
  id: Scalars['ID'];
  content?: Maybe<Scalars['String']>;
}>;


export type UpdateLessonContentMutation = (
  { __typename?: 'Mutation' }
  & { updateLesson?: Maybe<(
    { __typename?: 'updateLessonPayload' }
    & { lesson?: Maybe<(
      { __typename?: 'Lesson' }
      & Pick<Lesson, 'id'>
    )> }
  )> }
);

export type UpdateLessonStatusMutationVariables = Exact<{
  id: Scalars['ID'];
  status?: Maybe<Enum_Lesson_Status>;
}>;


export type UpdateLessonStatusMutation = (
  { __typename?: 'Mutation' }
  & { updateLesson?: Maybe<(
    { __typename?: 'updateLessonPayload' }
    & { lesson?: Maybe<(
      { __typename?: 'Lesson' }
      & Pick<Lesson, 'id'>
    )> }
  )> }
);

export type CreateLessonMutationVariables = Exact<{
  title?: Maybe<Scalars['String']>;
}>;


export type CreateLessonMutation = (
  { __typename?: 'Mutation' }
  & { createLesson?: Maybe<(
    { __typename?: 'createLessonPayload' }
    & { lesson?: Maybe<(
      { __typename?: 'Lesson' }
      & Pick<Lesson, 'id'>
    )> }
  )> }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'UsersPermissionsMe' }
    & Pick<UsersPermissionsMe, 'id' | 'username' | 'email' | 'confirmed'>
  )> }
);

export type RolesAndMeQueryVariables = Exact<{ [key: string]: never; }>;


export type RolesAndMeQuery = (
  { __typename?: 'Query' }
  & { roles?: Maybe<Array<Maybe<(
    { __typename?: 'UsersPermissionsRole' }
    & Pick<UsersPermissionsRole, 'id' | 'name'>
  )>>>, me?: Maybe<(
    { __typename?: 'UsersPermissionsMe' }
    & Pick<UsersPermissionsMe, 'id' | 'username' | 'email' | 'confirmed'>
  )> }
);

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = (
  { __typename?: 'Query' }
  & { users?: Maybe<Array<Maybe<(
    { __typename?: 'UsersPermissionsUser' }
    & Pick<UsersPermissionsUser, 'id' | 'email'>
  )>>> }
);

export type GetUserQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetUserQuery = (
  { __typename?: 'Query' }
  & { user?: Maybe<(
    { __typename?: 'UsersPermissionsUser' }
    & Pick<UsersPermissionsUser, 'patronymic' | 'lastName' | 'firstName' | 'birthday' | 'organization' | 'avatar' | 'teacher' | 'id'>
  )> }
);

export type GetStudentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStudentsQuery = (
  { __typename?: 'Query' }
  & { users?: Maybe<Array<Maybe<(
    { __typename?: 'UsersPermissionsUser' }
    & Pick<UsersPermissionsUser, 'id' | 'firstName' | 'lastName' | 'patronymic'>
  )>>> }
);

export type MakeMeTeacherMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type MakeMeTeacherMutation = (
  { __typename?: 'Mutation' }
  & { updateUser?: Maybe<(
    { __typename?: 'updateUserPayload' }
    & { user?: Maybe<(
      { __typename?: 'UsersPermissionsUser' }
      & Pick<UsersPermissionsUser, 'id'>
    )> }
  )> }
);

export type MakeMeStudentMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type MakeMeStudentMutation = (
  { __typename?: 'Mutation' }
  & { updateUser?: Maybe<(
    { __typename?: 'updateUserPayload' }
    & { user?: Maybe<(
      { __typename?: 'UsersPermissionsUser' }
      & Pick<UsersPermissionsUser, 'id'>
    )> }
  )> }
);

export type RegisterMutationVariables = Exact<{
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'UsersPermissionsLoginPayload' }
    & Pick<UsersPermissionsLoginPayload, 'jwt'>
  ) }
);

export type LoginMutationVariables = Exact<{
  password: Scalars['String'];
  identifier: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UsersPermissionsLoginPayload' }
    & Pick<UsersPermissionsLoginPayload, 'jwt'>
    & { user: (
      { __typename?: 'UsersPermissionsMe' }
      & Pick<UsersPermissionsMe, 'id'>
    ) }
  ) }
);

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['ID'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  patronymic?: Maybe<Scalars['String']>;
  organization?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  teacher?: Maybe<Scalars['Boolean']>;
}>;


export type UpdateUserMutation = (
  { __typename?: 'Mutation' }
  & { updateUser?: Maybe<(
    { __typename?: 'updateUserPayload' }
    & { user?: Maybe<(
      { __typename?: 'UsersPermissionsUser' }
      & Pick<UsersPermissionsUser, 'id'>
    )> }
  )> }
);

export type GetGroupsWhereIamTeacherQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetGroupsWhereIamTeacherQuery = (
  { __typename?: 'Query' }
  & { groups?: Maybe<Array<Maybe<(
    { __typename?: 'Group' }
    & Pick<Group, 'title' | 'id'>
  )>>> }
);

export type CreateGroupMutationVariables = Exact<{
  students?: Maybe<Array<Maybe<Scalars['ID']>>>;
  title?: Maybe<Scalars['String']>;
  teacherId?: Maybe<Scalars['String']>;
}>;


export type CreateGroupMutation = (
  { __typename?: 'Mutation' }
  & { createGroup?: Maybe<(
    { __typename?: 'createGroupPayload' }
    & { group?: Maybe<(
      { __typename?: 'Group' }
      & Pick<Group, 'id'>
    )> }
  )> }
);


export const GetLessonsDocument = gql`
    query getLessons($status: ENUM_LESSON_STATUS) {
  lessons(where: {status: $status}) {
    status
    id
    title
    time
  }
}
    `;

/**
 * __useGetLessonsQuery__
 *
 * To run a query within a React component, call `useGetLessonsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLessonsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLessonsQuery({
 *   variables: {
 *      status: // value for 'status'
 *   },
 * });
 */
export function useGetLessonsQuery(baseOptions?: Apollo.QueryHookOptions<GetLessonsQuery, GetLessonsQueryVariables>) {
        return Apollo.useQuery<GetLessonsQuery, GetLessonsQueryVariables>(GetLessonsDocument, baseOptions);
      }
export function useGetLessonsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLessonsQuery, GetLessonsQueryVariables>) {
          return Apollo.useLazyQuery<GetLessonsQuery, GetLessonsQueryVariables>(GetLessonsDocument, baseOptions);
        }
export type GetLessonsQueryHookResult = ReturnType<typeof useGetLessonsQuery>;
export type GetLessonsLazyQueryHookResult = ReturnType<typeof useGetLessonsLazyQuery>;
export type GetLessonsQueryResult = Apollo.QueryResult<GetLessonsQuery, GetLessonsQueryVariables>;
export const GetLessonDocument = gql`
    query getLesson($id: ID!) {
  lesson(id: $id) {
    status
    content
    title
  }
}
    `;

/**
 * __useGetLessonQuery__
 *
 * To run a query within a React component, call `useGetLessonQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLessonQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLessonQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetLessonQuery(baseOptions?: Apollo.QueryHookOptions<GetLessonQuery, GetLessonQueryVariables>) {
        return Apollo.useQuery<GetLessonQuery, GetLessonQueryVariables>(GetLessonDocument, baseOptions);
      }
export function useGetLessonLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLessonQuery, GetLessonQueryVariables>) {
          return Apollo.useLazyQuery<GetLessonQuery, GetLessonQueryVariables>(GetLessonDocument, baseOptions);
        }
export type GetLessonQueryHookResult = ReturnType<typeof useGetLessonQuery>;
export type GetLessonLazyQueryHookResult = ReturnType<typeof useGetLessonLazyQuery>;
export type GetLessonQueryResult = Apollo.QueryResult<GetLessonQuery, GetLessonQueryVariables>;
export const UpdateLessonContentDocument = gql`
    mutation updateLessonContent($id: ID!, $content: String) {
  updateLesson(input: {where: {id: $id}, data: {content: $content}}) {
    lesson {
      id
    }
  }
}
    `;
export type UpdateLessonContentMutationFn = Apollo.MutationFunction<UpdateLessonContentMutation, UpdateLessonContentMutationVariables>;

/**
 * __useUpdateLessonContentMutation__
 *
 * To run a mutation, you first call `useUpdateLessonContentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLessonContentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLessonContentMutation, { data, loading, error }] = useUpdateLessonContentMutation({
 *   variables: {
 *      id: // value for 'id'
 *      content: // value for 'content'
 *   },
 * });
 */
export function useUpdateLessonContentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateLessonContentMutation, UpdateLessonContentMutationVariables>) {
        return Apollo.useMutation<UpdateLessonContentMutation, UpdateLessonContentMutationVariables>(UpdateLessonContentDocument, baseOptions);
      }
export type UpdateLessonContentMutationHookResult = ReturnType<typeof useUpdateLessonContentMutation>;
export type UpdateLessonContentMutationResult = Apollo.MutationResult<UpdateLessonContentMutation>;
export type UpdateLessonContentMutationOptions = Apollo.BaseMutationOptions<UpdateLessonContentMutation, UpdateLessonContentMutationVariables>;
export const UpdateLessonStatusDocument = gql`
    mutation updateLessonStatus($id: ID!, $status: ENUM_LESSON_STATUS) {
  updateLesson(input: {where: {id: $id}, data: {status: $status}}) {
    lesson {
      id
    }
  }
}
    `;
export type UpdateLessonStatusMutationFn = Apollo.MutationFunction<UpdateLessonStatusMutation, UpdateLessonStatusMutationVariables>;

/**
 * __useUpdateLessonStatusMutation__
 *
 * To run a mutation, you first call `useUpdateLessonStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLessonStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLessonStatusMutation, { data, loading, error }] = useUpdateLessonStatusMutation({
 *   variables: {
 *      id: // value for 'id'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useUpdateLessonStatusMutation(baseOptions?: Apollo.MutationHookOptions<UpdateLessonStatusMutation, UpdateLessonStatusMutationVariables>) {
        return Apollo.useMutation<UpdateLessonStatusMutation, UpdateLessonStatusMutationVariables>(UpdateLessonStatusDocument, baseOptions);
      }
export type UpdateLessonStatusMutationHookResult = ReturnType<typeof useUpdateLessonStatusMutation>;
export type UpdateLessonStatusMutationResult = Apollo.MutationResult<UpdateLessonStatusMutation>;
export type UpdateLessonStatusMutationOptions = Apollo.BaseMutationOptions<UpdateLessonStatusMutation, UpdateLessonStatusMutationVariables>;
export const CreateLessonDocument = gql`
    mutation createLesson($title: String) {
  createLesson(input: {data: {title: $title}}) {
    lesson {
      id
    }
  }
}
    `;
export type CreateLessonMutationFn = Apollo.MutationFunction<CreateLessonMutation, CreateLessonMutationVariables>;

/**
 * __useCreateLessonMutation__
 *
 * To run a mutation, you first call `useCreateLessonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLessonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLessonMutation, { data, loading, error }] = useCreateLessonMutation({
 *   variables: {
 *      title: // value for 'title'
 *   },
 * });
 */
export function useCreateLessonMutation(baseOptions?: Apollo.MutationHookOptions<CreateLessonMutation, CreateLessonMutationVariables>) {
        return Apollo.useMutation<CreateLessonMutation, CreateLessonMutationVariables>(CreateLessonDocument, baseOptions);
      }
export type CreateLessonMutationHookResult = ReturnType<typeof useCreateLessonMutation>;
export type CreateLessonMutationResult = Apollo.MutationResult<CreateLessonMutation>;
export type CreateLessonMutationOptions = Apollo.BaseMutationOptions<CreateLessonMutation, CreateLessonMutationVariables>;
export const MeDocument = gql`
    query me {
  me {
    id
    username
    email
    confirmed
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const RolesAndMeDocument = gql`
    query rolesAndMe {
  roles {
    id
    name
  }
  me {
    id
    username
    email
    confirmed
  }
}
    `;

/**
 * __useRolesAndMeQuery__
 *
 * To run a query within a React component, call `useRolesAndMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useRolesAndMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRolesAndMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useRolesAndMeQuery(baseOptions?: Apollo.QueryHookOptions<RolesAndMeQuery, RolesAndMeQueryVariables>) {
        return Apollo.useQuery<RolesAndMeQuery, RolesAndMeQueryVariables>(RolesAndMeDocument, baseOptions);
      }
export function useRolesAndMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RolesAndMeQuery, RolesAndMeQueryVariables>) {
          return Apollo.useLazyQuery<RolesAndMeQuery, RolesAndMeQueryVariables>(RolesAndMeDocument, baseOptions);
        }
export type RolesAndMeQueryHookResult = ReturnType<typeof useRolesAndMeQuery>;
export type RolesAndMeLazyQueryHookResult = ReturnType<typeof useRolesAndMeLazyQuery>;
export type RolesAndMeQueryResult = Apollo.QueryResult<RolesAndMeQuery, RolesAndMeQueryVariables>;
export const UsersDocument = gql`
    query users {
  users {
    id
    email
  }
}
    `;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, baseOptions);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, baseOptions);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;
export const GetUserDocument = gql`
    query getUser($id: ID!) {
  user(id: $id) {
    patronymic
    lastName
    firstName
    birthday
    organization
    avatar
    teacher
    id
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions?: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, baseOptions);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, baseOptions);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const GetStudentsDocument = gql`
    query getStudents {
  users(where: {teacher: false}) {
    id
    firstName
    lastName
    patronymic
  }
}
    `;

/**
 * __useGetStudentsQuery__
 *
 * To run a query within a React component, call `useGetStudentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStudentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStudentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetStudentsQuery(baseOptions?: Apollo.QueryHookOptions<GetStudentsQuery, GetStudentsQueryVariables>) {
        return Apollo.useQuery<GetStudentsQuery, GetStudentsQueryVariables>(GetStudentsDocument, baseOptions);
      }
export function useGetStudentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStudentsQuery, GetStudentsQueryVariables>) {
          return Apollo.useLazyQuery<GetStudentsQuery, GetStudentsQueryVariables>(GetStudentsDocument, baseOptions);
        }
export type GetStudentsQueryHookResult = ReturnType<typeof useGetStudentsQuery>;
export type GetStudentsLazyQueryHookResult = ReturnType<typeof useGetStudentsLazyQuery>;
export type GetStudentsQueryResult = Apollo.QueryResult<GetStudentsQuery, GetStudentsQueryVariables>;
export const MakeMeTeacherDocument = gql`
    mutation makeMeTeacher($id: ID!) {
  updateUser(input: {where: {id: $id}, data: {teacher: true}}) {
    user {
      id
    }
  }
}
    `;
export type MakeMeTeacherMutationFn = Apollo.MutationFunction<MakeMeTeacherMutation, MakeMeTeacherMutationVariables>;

/**
 * __useMakeMeTeacherMutation__
 *
 * To run a mutation, you first call `useMakeMeTeacherMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMakeMeTeacherMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [makeMeTeacherMutation, { data, loading, error }] = useMakeMeTeacherMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMakeMeTeacherMutation(baseOptions?: Apollo.MutationHookOptions<MakeMeTeacherMutation, MakeMeTeacherMutationVariables>) {
        return Apollo.useMutation<MakeMeTeacherMutation, MakeMeTeacherMutationVariables>(MakeMeTeacherDocument, baseOptions);
      }
export type MakeMeTeacherMutationHookResult = ReturnType<typeof useMakeMeTeacherMutation>;
export type MakeMeTeacherMutationResult = Apollo.MutationResult<MakeMeTeacherMutation>;
export type MakeMeTeacherMutationOptions = Apollo.BaseMutationOptions<MakeMeTeacherMutation, MakeMeTeacherMutationVariables>;
export const MakeMeStudentDocument = gql`
    mutation makeMeStudent($id: ID!) {
  updateUser(input: {where: {id: $id}, data: {teacher: false}}) {
    user {
      id
    }
  }
}
    `;
export type MakeMeStudentMutationFn = Apollo.MutationFunction<MakeMeStudentMutation, MakeMeStudentMutationVariables>;

/**
 * __useMakeMeStudentMutation__
 *
 * To run a mutation, you first call `useMakeMeStudentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMakeMeStudentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [makeMeStudentMutation, { data, loading, error }] = useMakeMeStudentMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMakeMeStudentMutation(baseOptions?: Apollo.MutationHookOptions<MakeMeStudentMutation, MakeMeStudentMutationVariables>) {
        return Apollo.useMutation<MakeMeStudentMutation, MakeMeStudentMutationVariables>(MakeMeStudentDocument, baseOptions);
      }
export type MakeMeStudentMutationHookResult = ReturnType<typeof useMakeMeStudentMutation>;
export type MakeMeStudentMutationResult = Apollo.MutationResult<MakeMeStudentMutation>;
export type MakeMeStudentMutationOptions = Apollo.BaseMutationOptions<MakeMeStudentMutation, MakeMeStudentMutationVariables>;
export const RegisterDocument = gql`
    mutation register($username: String!, $email: String!, $password: String!) {
  register(input: {username: $username, email: $email, password: $password}) {
    jwt
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      username: // value for 'username'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const LoginDocument = gql`
    mutation login($password: String!, $identifier: String!) {
  login(input: {password: $password, identifier: $identifier}) {
    jwt
    user {
      id
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      password: // value for 'password'
 *      identifier: // value for 'identifier'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const UpdateUserDocument = gql`
    mutation updateUser($id: ID!, $firstName: String, $lastName: String, $patronymic: String, $organization: String, $birthday: String, $avatar: String, $teacher: Boolean) {
  updateUser(input: {where: {id: $id}, data: {firstName: $firstName, lastName: $lastName, patronymic: $patronymic, organization: $organization, birthday: $birthday, avatar: $avatar, teacher: $teacher}}) {
    user {
      id
    }
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      patronymic: // value for 'patronymic'
 *      organization: // value for 'organization'
 *      birthday: // value for 'birthday'
 *      avatar: // value for 'avatar'
 *      teacher: // value for 'teacher'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, baseOptions);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const GetGroupsWhereIamTeacherDocument = gql`
    query getGroupsWhereIamTeacher($id: ID!) {
  groups(where: {teacherId: $id}) {
    title
    id
  }
}
    `;

/**
 * __useGetGroupsWhereIamTeacherQuery__
 *
 * To run a query within a React component, call `useGetGroupsWhereIamTeacherQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGroupsWhereIamTeacherQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGroupsWhereIamTeacherQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetGroupsWhereIamTeacherQuery(baseOptions?: Apollo.QueryHookOptions<GetGroupsWhereIamTeacherQuery, GetGroupsWhereIamTeacherQueryVariables>) {
        return Apollo.useQuery<GetGroupsWhereIamTeacherQuery, GetGroupsWhereIamTeacherQueryVariables>(GetGroupsWhereIamTeacherDocument, baseOptions);
      }
export function useGetGroupsWhereIamTeacherLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGroupsWhereIamTeacherQuery, GetGroupsWhereIamTeacherQueryVariables>) {
          return Apollo.useLazyQuery<GetGroupsWhereIamTeacherQuery, GetGroupsWhereIamTeacherQueryVariables>(GetGroupsWhereIamTeacherDocument, baseOptions);
        }
export type GetGroupsWhereIamTeacherQueryHookResult = ReturnType<typeof useGetGroupsWhereIamTeacherQuery>;
export type GetGroupsWhereIamTeacherLazyQueryHookResult = ReturnType<typeof useGetGroupsWhereIamTeacherLazyQuery>;
export type GetGroupsWhereIamTeacherQueryResult = Apollo.QueryResult<GetGroupsWhereIamTeacherQuery, GetGroupsWhereIamTeacherQueryVariables>;
export const CreateGroupDocument = gql`
    mutation createGroup($students: [ID], $title: String, $teacherId: String) {
  createGroup(input: {data: {students: $students, title: $title, teacherId: $teacherId}}) {
    group {
      id
    }
  }
}
    `;
export type CreateGroupMutationFn = Apollo.MutationFunction<CreateGroupMutation, CreateGroupMutationVariables>;

/**
 * __useCreateGroupMutation__
 *
 * To run a mutation, you first call `useCreateGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createGroupMutation, { data, loading, error }] = useCreateGroupMutation({
 *   variables: {
 *      students: // value for 'students'
 *      title: // value for 'title'
 *      teacherId: // value for 'teacherId'
 *   },
 * });
 */
export function useCreateGroupMutation(baseOptions?: Apollo.MutationHookOptions<CreateGroupMutation, CreateGroupMutationVariables>) {
        return Apollo.useMutation<CreateGroupMutation, CreateGroupMutationVariables>(CreateGroupDocument, baseOptions);
      }
export type CreateGroupMutationHookResult = ReturnType<typeof useCreateGroupMutation>;
export type CreateGroupMutationResult = Apollo.MutationResult<CreateGroupMutation>;
export type CreateGroupMutationOptions = Apollo.BaseMutationOptions<CreateGroupMutation, CreateGroupMutationVariables>;