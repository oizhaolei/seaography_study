/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Baker = {
  __typename?: 'Baker';
  bakery?: Maybe<Bakery>;
  bakeryId?: Maybe<Scalars['Int']['output']>;
  cake: CakeConnection;
  cakeBaker: CakeBakerConnection;
  contact: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};


export type BakerCakeArgs = {
  filters?: InputMaybe<CakeFilterInput>;
  orderBy?: InputMaybe<CakeOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type BakerCakeBakerArgs = {
  filters?: InputMaybe<CakeBakerFilterInput>;
  orderBy?: InputMaybe<CakeBakerOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
};

export type BakerBasic = {
  __typename?: 'BakerBasic';
  bakeryId?: Maybe<Scalars['Int']['output']>;
  contact: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type BakerConnection = {
  __typename?: 'BakerConnection';
  edges: Array<BakerEdge>;
  nodes: Array<Baker>;
  pageInfo: PageInfo;
  paginationInfo?: Maybe<PaginationInfo>;
};

export type BakerEdge = {
  __typename?: 'BakerEdge';
  cursor: Scalars['String']['output'];
  node: Baker;
};

export type BakerFilterInput = {
  and?: InputMaybe<Array<BakerFilterInput>>;
  bakeryId?: InputMaybe<IntegerFilterInput>;
  contact?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IntegerFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  or?: InputMaybe<Array<BakerFilterInput>>;
};

export type BakerInsertInput = {
  bakeryId?: InputMaybe<Scalars['Int']['input']>;
  contact: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
};

export type BakerOrderInput = {
  bakeryId?: InputMaybe<OrderByEnum>;
  contact?: InputMaybe<OrderByEnum>;
  id?: InputMaybe<OrderByEnum>;
  name?: InputMaybe<OrderByEnum>;
};

export type BakerUpdateInput = {
  bakeryId?: InputMaybe<Scalars['Int']['input']>;
  contact?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Bakery = {
  __typename?: 'Bakery';
  baker: BakerConnection;
  cake: CakeConnection;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  profitMargin: Scalars['Float']['output'];
};


export type BakeryBakerArgs = {
  filters?: InputMaybe<BakerFilterInput>;
  orderBy?: InputMaybe<BakerOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type BakeryCakeArgs = {
  filters?: InputMaybe<CakeFilterInput>;
  orderBy?: InputMaybe<CakeOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
};

export type BakeryBasic = {
  __typename?: 'BakeryBasic';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  profitMargin: Scalars['Float']['output'];
};

export type BakeryConnection = {
  __typename?: 'BakeryConnection';
  edges: Array<BakeryEdge>;
  nodes: Array<Bakery>;
  pageInfo: PageInfo;
  paginationInfo?: Maybe<PaginationInfo>;
};

export type BakeryEdge = {
  __typename?: 'BakeryEdge';
  cursor: Scalars['String']['output'];
  node: Bakery;
};

export type BakeryFilterInput = {
  and?: InputMaybe<Array<BakeryFilterInput>>;
  id?: InputMaybe<IntegerFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  or?: InputMaybe<Array<BakeryFilterInput>>;
  profitMargin?: InputMaybe<FloatFilterInput>;
};

export type BakeryInsertInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  profitMargin: Scalars['Float']['input'];
};

export type BakeryOrderInput = {
  id?: InputMaybe<OrderByEnum>;
  name?: InputMaybe<OrderByEnum>;
  profitMargin?: InputMaybe<OrderByEnum>;
};

export type BakeryUpdateInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  profitMargin?: InputMaybe<Scalars['Float']['input']>;
};

export type BooleanFilterInput = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  is_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  is_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  is_not_null?: InputMaybe<Scalars['Boolean']['input']>;
  is_null?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Cake = {
  __typename?: 'Cake';
  baker: BakerConnection;
  bakery?: Maybe<Bakery>;
  bakeryId: Scalars['Int']['output'];
  cakeBaker: CakeBakerConnection;
  glutenFree: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  price: Scalars['String']['output'];
};


export type CakeBakerArgs = {
  filters?: InputMaybe<BakerFilterInput>;
  orderBy?: InputMaybe<BakerOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type CakeCakeBakerArgs = {
  filters?: InputMaybe<CakeBakerFilterInput>;
  orderBy?: InputMaybe<CakeBakerOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
};

export type CakeBaker = {
  __typename?: 'CakeBaker';
  baker?: Maybe<Baker>;
  bakerId: Scalars['Int']['output'];
  cake?: Maybe<Cake>;
  cakeId: Scalars['Int']['output'];
};

export type CakeBakerBasic = {
  __typename?: 'CakeBakerBasic';
  bakerId: Scalars['Int']['output'];
  cakeId: Scalars['Int']['output'];
};

export type CakeBakerConnection = {
  __typename?: 'CakeBakerConnection';
  edges: Array<CakeBakerEdge>;
  nodes: Array<CakeBaker>;
  pageInfo: PageInfo;
  paginationInfo?: Maybe<PaginationInfo>;
};

export type CakeBakerEdge = {
  __typename?: 'CakeBakerEdge';
  cursor: Scalars['String']['output'];
  node: CakeBaker;
};

export type CakeBakerFilterInput = {
  and?: InputMaybe<Array<CakeBakerFilterInput>>;
  bakerId?: InputMaybe<IntegerFilterInput>;
  cakeId?: InputMaybe<IntegerFilterInput>;
  or?: InputMaybe<Array<CakeBakerFilterInput>>;
};

export type CakeBakerInsertInput = {
  bakerId: Scalars['Int']['input'];
  cakeId: Scalars['Int']['input'];
};

export type CakeBakerOrderInput = {
  bakerId?: InputMaybe<OrderByEnum>;
  cakeId?: InputMaybe<OrderByEnum>;
};

export type CakeBakerUpdateInput = {
  bakerId?: InputMaybe<Scalars['Int']['input']>;
  cakeId?: InputMaybe<Scalars['Int']['input']>;
};

export type CakeBasic = {
  __typename?: 'CakeBasic';
  bakeryId: Scalars['Int']['output'];
  glutenFree: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  price: Scalars['String']['output'];
};

export type CakeConnection = {
  __typename?: 'CakeConnection';
  edges: Array<CakeEdge>;
  nodes: Array<Cake>;
  pageInfo: PageInfo;
  paginationInfo?: Maybe<PaginationInfo>;
};

export type CakeEdge = {
  __typename?: 'CakeEdge';
  cursor: Scalars['String']['output'];
  node: Cake;
};

export type CakeFilterInput = {
  and?: InputMaybe<Array<CakeFilterInput>>;
  bakeryId?: InputMaybe<IntegerFilterInput>;
  glutenFree?: InputMaybe<BooleanFilterInput>;
  id?: InputMaybe<IntegerFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  or?: InputMaybe<Array<CakeFilterInput>>;
  price?: InputMaybe<TextFilterInput>;
};

export type CakeInsertInput = {
  bakeryId: Scalars['Int']['input'];
  glutenFree: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  price: Scalars['String']['input'];
};

export type CakeOrderInput = {
  bakeryId?: InputMaybe<OrderByEnum>;
  glutenFree?: InputMaybe<OrderByEnum>;
  id?: InputMaybe<OrderByEnum>;
  name?: InputMaybe<OrderByEnum>;
  price?: InputMaybe<OrderByEnum>;
};

export type CakeUpdateInput = {
  bakeryId?: InputMaybe<Scalars['Int']['input']>;
  glutenFree?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['String']['input']>;
};

export type CursorInput = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit: Scalars['Int']['input'];
};

export type FloatFilterInput = {
  between?: InputMaybe<Array<Scalars['Float']['input']>>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  is_in?: InputMaybe<Array<Scalars['Float']['input']>>;
  is_not_in?: InputMaybe<Array<Scalars['Float']['input']>>;
  is_not_null?: InputMaybe<Scalars['Float']['input']>;
  is_null?: InputMaybe<Scalars['Float']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  not_between?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type IntegerFilterInput = {
  between?: InputMaybe<Array<Scalars['Int']['input']>>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  is_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  is_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  is_not_null?: InputMaybe<Scalars['Int']['input']>;
  is_null?: InputMaybe<Scalars['Int']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  not_between?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  _ping?: Maybe<Scalars['String']['output']>;
  bakerCreateBatch: Array<BakerBasic>;
  bakerCreateOne: BakerBasic;
  bakerDelete: Scalars['Int']['output'];
  bakerUpdate: Array<BakerBasic>;
  bakeryCreateBatch: Array<BakeryBasic>;
  bakeryCreateOne: BakeryBasic;
  bakeryDelete: Scalars['Int']['output'];
  bakeryUpdate: Array<BakeryBasic>;
  cakeBakerCreateBatch: Array<CakeBakerBasic>;
  cakeBakerCreateOne: CakeBakerBasic;
  cakeBakerDelete: Scalars['Int']['output'];
  cakeBakerUpdate: Array<CakeBakerBasic>;
  cakeCreateBatch: Array<CakeBasic>;
  cakeCreateOne: CakeBasic;
  cakeDelete: Scalars['Int']['output'];
  cakeUpdate: Array<CakeBasic>;
};


export type MutationBakerCreateBatchArgs = {
  data: Array<BakerInsertInput>;
};


export type MutationBakerCreateOneArgs = {
  data: BakerInsertInput;
};


export type MutationBakerDeleteArgs = {
  filter?: InputMaybe<BakerFilterInput>;
};


export type MutationBakerUpdateArgs = {
  data: BakerUpdateInput;
  filter?: InputMaybe<BakerFilterInput>;
};


export type MutationBakeryCreateBatchArgs = {
  data: Array<BakeryInsertInput>;
};


export type MutationBakeryCreateOneArgs = {
  data: BakeryInsertInput;
};


export type MutationBakeryDeleteArgs = {
  filter?: InputMaybe<BakeryFilterInput>;
};


export type MutationBakeryUpdateArgs = {
  data: BakeryUpdateInput;
  filter?: InputMaybe<BakeryFilterInput>;
};


export type MutationCakeBakerCreateBatchArgs = {
  data: Array<CakeBakerInsertInput>;
};


export type MutationCakeBakerCreateOneArgs = {
  data: CakeBakerInsertInput;
};


export type MutationCakeBakerDeleteArgs = {
  filter?: InputMaybe<CakeBakerFilterInput>;
};


export type MutationCakeBakerUpdateArgs = {
  data: CakeBakerUpdateInput;
  filter?: InputMaybe<CakeBakerFilterInput>;
};


export type MutationCakeCreateBatchArgs = {
  data: Array<CakeInsertInput>;
};


export type MutationCakeCreateOneArgs = {
  data: CakeInsertInput;
};


export type MutationCakeDeleteArgs = {
  filter?: InputMaybe<CakeFilterInput>;
};


export type MutationCakeUpdateArgs = {
  data: CakeUpdateInput;
  filter?: InputMaybe<CakeFilterInput>;
};

export type OffsetInput = {
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
};

export enum OrderByEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type PageInput = {
  limit: Scalars['Int']['input'];
  page: Scalars['Int']['input'];
};

export type PaginationInfo = {
  __typename?: 'PaginationInfo';
  current: Scalars['Int']['output'];
  offset: Scalars['Int']['output'];
  pages: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationInput = {
  cursor?: InputMaybe<CursorInput>;
  offset?: InputMaybe<OffsetInput>;
  page?: InputMaybe<PageInput>;
};

export type Query = {
  __typename?: 'Query';
  baker: BakerConnection;
  bakery: BakeryConnection;
  cake: CakeConnection;
  cakeBaker: CakeBakerConnection;
};


export type QueryBakerArgs = {
  filters?: InputMaybe<BakerFilterInput>;
  orderBy?: InputMaybe<BakerOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryBakeryArgs = {
  filters?: InputMaybe<BakeryFilterInput>;
  orderBy?: InputMaybe<BakeryOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryCakeArgs = {
  filters?: InputMaybe<CakeFilterInput>;
  orderBy?: InputMaybe<CakeOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryCakeBakerArgs = {
  filters?: InputMaybe<CakeBakerFilterInput>;
  orderBy?: InputMaybe<CakeBakerOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
};

export type StringFilterInput = {
  between?: InputMaybe<Array<Scalars['String']['input']>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  ends_with?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  is_in?: InputMaybe<Array<Scalars['String']['input']>>;
  is_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  is_not_null?: InputMaybe<Scalars['String']['input']>;
  is_null?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  not_between?: InputMaybe<Array<Scalars['String']['input']>>;
  not_like?: InputMaybe<Scalars['String']['input']>;
  starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type TextFilterInput = {
  between?: InputMaybe<Array<Scalars['String']['input']>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  is_in?: InputMaybe<Array<Scalars['String']['input']>>;
  is_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  is_not_null?: InputMaybe<Scalars['String']['input']>;
  is_null?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  not_between?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type GetCakesQueryVariables = Exact<{
  glutenFree: Scalars['Boolean']['input'];
}>;


export type GetCakesQuery = { __typename?: 'Query', cake: { __typename?: 'CakeConnection', nodes: Array<{ __typename?: 'Cake', id: number, name: string, price: string, glutenFree: boolean, bakery?: { __typename?: 'Bakery', name: string } | null }> } };

export type GetBakeriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBakeriesQuery = { __typename?: 'Query', bakery: { __typename?: 'BakeryConnection', nodes: Array<{ __typename?: 'Bakery', name: string, cake: { __typename?: 'CakeConnection', nodes: Array<{ __typename?: 'Cake', name: string, price: string, baker: { __typename?: 'BakerConnection', nodes: Array<{ __typename?: 'Baker', name: string }> } }> } }> } };


export const GetCakesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCakes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"glutenFree"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cake"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"glutenFree"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"glutenFree"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"glutenFree"}},{"kind":"Field","name":{"kind":"Name","value":"bakery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCakesQuery, GetCakesQueryVariables>;
export const GetBakeriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBakeries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bakery"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"page"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"10"}},{"kind":"ObjectField","name":{"kind":"Name","value":"page"},"value":{"kind":"IntValue","value":"0"}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"EnumValue","value":"ASC"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"cake"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"baker"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetBakeriesQuery, GetBakeriesQueryVariables>;