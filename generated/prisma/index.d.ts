
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Poder
 * 
 */
export type Poder = $Result.DefaultSelection<Prisma.$PoderPayload>
/**
 * Model PoderDivindade
 * 
 */
export type PoderDivindade = $Result.DefaultSelection<Prisma.$PoderDivindadePayload>
/**
 * Model ArtefatoPoder
 * 
 */
export type ArtefatoPoder = $Result.DefaultSelection<Prisma.$ArtefatoPoderPayload>
/**
 * Model Artefato
 * 
 */
export type Artefato = $Result.DefaultSelection<Prisma.$ArtefatoPayload>
/**
 * Model SerSer
 * 
 */
export type SerSer = $Result.DefaultSelection<Prisma.$SerSerPayload>
/**
 * Model Ser
 * 
 */
export type Ser = $Result.DefaultSelection<Prisma.$SerPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TipoSer: {
  SER: 'SER',
  MORTAL: 'MORTAL',
  DIVINDADE: 'DIVINDADE'
};

export type TipoSer = (typeof TipoSer)[keyof typeof TipoSer]

}

export type TipoSer = $Enums.TipoSer

export const TipoSer: typeof $Enums.TipoSer

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Poders
 * const poders = await prisma.poder.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Poders
   * const poders = await prisma.poder.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.poder`: Exposes CRUD operations for the **Poder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Poders
    * const poders = await prisma.poder.findMany()
    * ```
    */
  get poder(): Prisma.PoderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.poderDivindade`: Exposes CRUD operations for the **PoderDivindade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PoderDivindades
    * const poderDivindades = await prisma.poderDivindade.findMany()
    * ```
    */
  get poderDivindade(): Prisma.PoderDivindadeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.artefatoPoder`: Exposes CRUD operations for the **ArtefatoPoder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArtefatoPoders
    * const artefatoPoders = await prisma.artefatoPoder.findMany()
    * ```
    */
  get artefatoPoder(): Prisma.ArtefatoPoderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.artefato`: Exposes CRUD operations for the **Artefato** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Artefatoes
    * const artefatoes = await prisma.artefato.findMany()
    * ```
    */
  get artefato(): Prisma.ArtefatoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.serSer`: Exposes CRUD operations for the **SerSer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SerSers
    * const serSers = await prisma.serSer.findMany()
    * ```
    */
  get serSer(): Prisma.SerSerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ser`: Exposes CRUD operations for the **Ser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sers
    * const sers = await prisma.ser.findMany()
    * ```
    */
  get ser(): Prisma.SerDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Poder: 'Poder',
    PoderDivindade: 'PoderDivindade',
    ArtefatoPoder: 'ArtefatoPoder',
    Artefato: 'Artefato',
    SerSer: 'SerSer',
    Ser: 'Ser'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "poder" | "poderDivindade" | "artefatoPoder" | "artefato" | "serSer" | "ser"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Poder: {
        payload: Prisma.$PoderPayload<ExtArgs>
        fields: Prisma.PoderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PoderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PoderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoderPayload>
          }
          findFirst: {
            args: Prisma.PoderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PoderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoderPayload>
          }
          findMany: {
            args: Prisma.PoderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoderPayload>[]
          }
          create: {
            args: Prisma.PoderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoderPayload>
          }
          createMany: {
            args: Prisma.PoderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PoderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoderPayload>[]
          }
          delete: {
            args: Prisma.PoderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoderPayload>
          }
          update: {
            args: Prisma.PoderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoderPayload>
          }
          deleteMany: {
            args: Prisma.PoderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PoderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PoderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoderPayload>[]
          }
          upsert: {
            args: Prisma.PoderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoderPayload>
          }
          aggregate: {
            args: Prisma.PoderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePoder>
          }
          groupBy: {
            args: Prisma.PoderGroupByArgs<ExtArgs>
            result: $Utils.Optional<PoderGroupByOutputType>[]
          }
          count: {
            args: Prisma.PoderCountArgs<ExtArgs>
            result: $Utils.Optional<PoderCountAggregateOutputType> | number
          }
        }
      }
      PoderDivindade: {
        payload: Prisma.$PoderDivindadePayload<ExtArgs>
        fields: Prisma.PoderDivindadeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PoderDivindadeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoderDivindadePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PoderDivindadeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoderDivindadePayload>
          }
          findFirst: {
            args: Prisma.PoderDivindadeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoderDivindadePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PoderDivindadeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoderDivindadePayload>
          }
          findMany: {
            args: Prisma.PoderDivindadeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoderDivindadePayload>[]
          }
          create: {
            args: Prisma.PoderDivindadeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoderDivindadePayload>
          }
          createMany: {
            args: Prisma.PoderDivindadeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PoderDivindadeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoderDivindadePayload>[]
          }
          delete: {
            args: Prisma.PoderDivindadeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoderDivindadePayload>
          }
          update: {
            args: Prisma.PoderDivindadeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoderDivindadePayload>
          }
          deleteMany: {
            args: Prisma.PoderDivindadeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PoderDivindadeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PoderDivindadeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoderDivindadePayload>[]
          }
          upsert: {
            args: Prisma.PoderDivindadeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoderDivindadePayload>
          }
          aggregate: {
            args: Prisma.PoderDivindadeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePoderDivindade>
          }
          groupBy: {
            args: Prisma.PoderDivindadeGroupByArgs<ExtArgs>
            result: $Utils.Optional<PoderDivindadeGroupByOutputType>[]
          }
          count: {
            args: Prisma.PoderDivindadeCountArgs<ExtArgs>
            result: $Utils.Optional<PoderDivindadeCountAggregateOutputType> | number
          }
        }
      }
      ArtefatoPoder: {
        payload: Prisma.$ArtefatoPoderPayload<ExtArgs>
        fields: Prisma.ArtefatoPoderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArtefatoPoderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtefatoPoderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArtefatoPoderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtefatoPoderPayload>
          }
          findFirst: {
            args: Prisma.ArtefatoPoderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtefatoPoderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArtefatoPoderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtefatoPoderPayload>
          }
          findMany: {
            args: Prisma.ArtefatoPoderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtefatoPoderPayload>[]
          }
          create: {
            args: Prisma.ArtefatoPoderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtefatoPoderPayload>
          }
          createMany: {
            args: Prisma.ArtefatoPoderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArtefatoPoderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtefatoPoderPayload>[]
          }
          delete: {
            args: Prisma.ArtefatoPoderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtefatoPoderPayload>
          }
          update: {
            args: Prisma.ArtefatoPoderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtefatoPoderPayload>
          }
          deleteMany: {
            args: Prisma.ArtefatoPoderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArtefatoPoderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArtefatoPoderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtefatoPoderPayload>[]
          }
          upsert: {
            args: Prisma.ArtefatoPoderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtefatoPoderPayload>
          }
          aggregate: {
            args: Prisma.ArtefatoPoderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArtefatoPoder>
          }
          groupBy: {
            args: Prisma.ArtefatoPoderGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArtefatoPoderGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArtefatoPoderCountArgs<ExtArgs>
            result: $Utils.Optional<ArtefatoPoderCountAggregateOutputType> | number
          }
        }
      }
      Artefato: {
        payload: Prisma.$ArtefatoPayload<ExtArgs>
        fields: Prisma.ArtefatoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArtefatoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtefatoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArtefatoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtefatoPayload>
          }
          findFirst: {
            args: Prisma.ArtefatoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtefatoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArtefatoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtefatoPayload>
          }
          findMany: {
            args: Prisma.ArtefatoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtefatoPayload>[]
          }
          create: {
            args: Prisma.ArtefatoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtefatoPayload>
          }
          createMany: {
            args: Prisma.ArtefatoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArtefatoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtefatoPayload>[]
          }
          delete: {
            args: Prisma.ArtefatoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtefatoPayload>
          }
          update: {
            args: Prisma.ArtefatoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtefatoPayload>
          }
          deleteMany: {
            args: Prisma.ArtefatoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArtefatoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArtefatoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtefatoPayload>[]
          }
          upsert: {
            args: Prisma.ArtefatoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtefatoPayload>
          }
          aggregate: {
            args: Prisma.ArtefatoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArtefato>
          }
          groupBy: {
            args: Prisma.ArtefatoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArtefatoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArtefatoCountArgs<ExtArgs>
            result: $Utils.Optional<ArtefatoCountAggregateOutputType> | number
          }
        }
      }
      SerSer: {
        payload: Prisma.$SerSerPayload<ExtArgs>
        fields: Prisma.SerSerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SerSerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SerSerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SerSerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SerSerPayload>
          }
          findFirst: {
            args: Prisma.SerSerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SerSerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SerSerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SerSerPayload>
          }
          findMany: {
            args: Prisma.SerSerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SerSerPayload>[]
          }
          create: {
            args: Prisma.SerSerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SerSerPayload>
          }
          createMany: {
            args: Prisma.SerSerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SerSerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SerSerPayload>[]
          }
          delete: {
            args: Prisma.SerSerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SerSerPayload>
          }
          update: {
            args: Prisma.SerSerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SerSerPayload>
          }
          deleteMany: {
            args: Prisma.SerSerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SerSerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SerSerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SerSerPayload>[]
          }
          upsert: {
            args: Prisma.SerSerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SerSerPayload>
          }
          aggregate: {
            args: Prisma.SerSerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSerSer>
          }
          groupBy: {
            args: Prisma.SerSerGroupByArgs<ExtArgs>
            result: $Utils.Optional<SerSerGroupByOutputType>[]
          }
          count: {
            args: Prisma.SerSerCountArgs<ExtArgs>
            result: $Utils.Optional<SerSerCountAggregateOutputType> | number
          }
        }
      }
      Ser: {
        payload: Prisma.$SerPayload<ExtArgs>
        fields: Prisma.SerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SerPayload>
          }
          findFirst: {
            args: Prisma.SerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SerPayload>
          }
          findMany: {
            args: Prisma.SerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SerPayload>[]
          }
          create: {
            args: Prisma.SerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SerPayload>
          }
          createMany: {
            args: Prisma.SerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SerPayload>[]
          }
          delete: {
            args: Prisma.SerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SerPayload>
          }
          update: {
            args: Prisma.SerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SerPayload>
          }
          deleteMany: {
            args: Prisma.SerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SerPayload>[]
          }
          upsert: {
            args: Prisma.SerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SerPayload>
          }
          aggregate: {
            args: Prisma.SerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSer>
          }
          groupBy: {
            args: Prisma.SerGroupByArgs<ExtArgs>
            result: $Utils.Optional<SerGroupByOutputType>[]
          }
          count: {
            args: Prisma.SerCountArgs<ExtArgs>
            result: $Utils.Optional<SerCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    poder?: PoderOmit
    poderDivindade?: PoderDivindadeOmit
    artefatoPoder?: ArtefatoPoderOmit
    artefato?: ArtefatoOmit
    serSer?: SerSerOmit
    ser?: SerOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PoderCountOutputType
   */

  export type PoderCountOutputType = {
    poderes: number
    divindades: number
  }

  export type PoderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poderes?: boolean | PoderCountOutputTypeCountPoderesArgs
    divindades?: boolean | PoderCountOutputTypeCountDivindadesArgs
  }

  // Custom InputTypes
  /**
   * PoderCountOutputType without action
   */
  export type PoderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoderCountOutputType
     */
    select?: PoderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PoderCountOutputType without action
   */
  export type PoderCountOutputTypeCountPoderesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtefatoPoderWhereInput
  }

  /**
   * PoderCountOutputType without action
   */
  export type PoderCountOutputTypeCountDivindadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PoderDivindadeWhereInput
  }


  /**
   * Count Type ArtefatoCountOutputType
   */

  export type ArtefatoCountOutputType = {
    artefatos: number
  }

  export type ArtefatoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artefatos?: boolean | ArtefatoCountOutputTypeCountArtefatosArgs
  }

  // Custom InputTypes
  /**
   * ArtefatoCountOutputType without action
   */
  export type ArtefatoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtefatoCountOutputType
     */
    select?: ArtefatoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArtefatoCountOutputType without action
   */
  export type ArtefatoCountOutputTypeCountArtefatosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtefatoPoderWhereInput
  }


  /**
   * Count Type SerCountOutputType
   */

  export type SerCountOutputType = {
    poderes: number
    artefatos: number
    responsaveis: number
    filhos: number
  }

  export type SerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poderes?: boolean | SerCountOutputTypeCountPoderesArgs
    artefatos?: boolean | SerCountOutputTypeCountArtefatosArgs
    responsaveis?: boolean | SerCountOutputTypeCountResponsaveisArgs
    filhos?: boolean | SerCountOutputTypeCountFilhosArgs
  }

  // Custom InputTypes
  /**
   * SerCountOutputType without action
   */
  export type SerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SerCountOutputType
     */
    select?: SerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SerCountOutputType without action
   */
  export type SerCountOutputTypeCountPoderesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PoderDivindadeWhereInput
  }

  /**
   * SerCountOutputType without action
   */
  export type SerCountOutputTypeCountArtefatosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtefatoWhereInput
  }

  /**
   * SerCountOutputType without action
   */
  export type SerCountOutputTypeCountResponsaveisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SerSerWhereInput
  }

  /**
   * SerCountOutputType without action
   */
  export type SerCountOutputTypeCountFilhosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SerSerWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Poder
   */

  export type AggregatePoder = {
    _count: PoderCountAggregateOutputType | null
    _avg: PoderAvgAggregateOutputType | null
    _sum: PoderSumAggregateOutputType | null
    _min: PoderMinAggregateOutputType | null
    _max: PoderMaxAggregateOutputType | null
  }

  export type PoderAvgAggregateOutputType = {
    idPoder: number | null
  }

  export type PoderSumAggregateOutputType = {
    idPoder: number | null
  }

  export type PoderMinAggregateOutputType = {
    idPoder: number | null
    nome: string | null
    descricao: string | null
  }

  export type PoderMaxAggregateOutputType = {
    idPoder: number | null
    nome: string | null
    descricao: string | null
  }

  export type PoderCountAggregateOutputType = {
    idPoder: number
    nome: number
    descricao: number
    _all: number
  }


  export type PoderAvgAggregateInputType = {
    idPoder?: true
  }

  export type PoderSumAggregateInputType = {
    idPoder?: true
  }

  export type PoderMinAggregateInputType = {
    idPoder?: true
    nome?: true
    descricao?: true
  }

  export type PoderMaxAggregateInputType = {
    idPoder?: true
    nome?: true
    descricao?: true
  }

  export type PoderCountAggregateInputType = {
    idPoder?: true
    nome?: true
    descricao?: true
    _all?: true
  }

  export type PoderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Poder to aggregate.
     */
    where?: PoderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Poders to fetch.
     */
    orderBy?: PoderOrderByWithRelationInput | PoderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PoderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Poders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Poders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Poders
    **/
    _count?: true | PoderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PoderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PoderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PoderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PoderMaxAggregateInputType
  }

  export type GetPoderAggregateType<T extends PoderAggregateArgs> = {
        [P in keyof T & keyof AggregatePoder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePoder[P]>
      : GetScalarType<T[P], AggregatePoder[P]>
  }




  export type PoderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PoderWhereInput
    orderBy?: PoderOrderByWithAggregationInput | PoderOrderByWithAggregationInput[]
    by: PoderScalarFieldEnum[] | PoderScalarFieldEnum
    having?: PoderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PoderCountAggregateInputType | true
    _avg?: PoderAvgAggregateInputType
    _sum?: PoderSumAggregateInputType
    _min?: PoderMinAggregateInputType
    _max?: PoderMaxAggregateInputType
  }

  export type PoderGroupByOutputType = {
    idPoder: number
    nome: string
    descricao: string
    _count: PoderCountAggregateOutputType | null
    _avg: PoderAvgAggregateOutputType | null
    _sum: PoderSumAggregateOutputType | null
    _min: PoderMinAggregateOutputType | null
    _max: PoderMaxAggregateOutputType | null
  }

  type GetPoderGroupByPayload<T extends PoderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PoderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PoderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PoderGroupByOutputType[P]>
            : GetScalarType<T[P], PoderGroupByOutputType[P]>
        }
      >
    >


  export type PoderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idPoder?: boolean
    nome?: boolean
    descricao?: boolean
    poderes?: boolean | Poder$poderesArgs<ExtArgs>
    divindades?: boolean | Poder$divindadesArgs<ExtArgs>
    _count?: boolean | PoderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["poder"]>

  export type PoderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idPoder?: boolean
    nome?: boolean
    descricao?: boolean
  }, ExtArgs["result"]["poder"]>

  export type PoderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idPoder?: boolean
    nome?: boolean
    descricao?: boolean
  }, ExtArgs["result"]["poder"]>

  export type PoderSelectScalar = {
    idPoder?: boolean
    nome?: boolean
    descricao?: boolean
  }

  export type PoderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idPoder" | "nome" | "descricao", ExtArgs["result"]["poder"]>
  export type PoderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poderes?: boolean | Poder$poderesArgs<ExtArgs>
    divindades?: boolean | Poder$divindadesArgs<ExtArgs>
    _count?: boolean | PoderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PoderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PoderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PoderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Poder"
    objects: {
      poderes: Prisma.$ArtefatoPoderPayload<ExtArgs>[]
      divindades: Prisma.$PoderDivindadePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idPoder: number
      nome: string
      descricao: string
    }, ExtArgs["result"]["poder"]>
    composites: {}
  }

  type PoderGetPayload<S extends boolean | null | undefined | PoderDefaultArgs> = $Result.GetResult<Prisma.$PoderPayload, S>

  type PoderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PoderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PoderCountAggregateInputType | true
    }

  export interface PoderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Poder'], meta: { name: 'Poder' } }
    /**
     * Find zero or one Poder that matches the filter.
     * @param {PoderFindUniqueArgs} args - Arguments to find a Poder
     * @example
     * // Get one Poder
     * const poder = await prisma.poder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PoderFindUniqueArgs>(args: SelectSubset<T, PoderFindUniqueArgs<ExtArgs>>): Prisma__PoderClient<$Result.GetResult<Prisma.$PoderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Poder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PoderFindUniqueOrThrowArgs} args - Arguments to find a Poder
     * @example
     * // Get one Poder
     * const poder = await prisma.poder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PoderFindUniqueOrThrowArgs>(args: SelectSubset<T, PoderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PoderClient<$Result.GetResult<Prisma.$PoderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Poder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoderFindFirstArgs} args - Arguments to find a Poder
     * @example
     * // Get one Poder
     * const poder = await prisma.poder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PoderFindFirstArgs>(args?: SelectSubset<T, PoderFindFirstArgs<ExtArgs>>): Prisma__PoderClient<$Result.GetResult<Prisma.$PoderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Poder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoderFindFirstOrThrowArgs} args - Arguments to find a Poder
     * @example
     * // Get one Poder
     * const poder = await prisma.poder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PoderFindFirstOrThrowArgs>(args?: SelectSubset<T, PoderFindFirstOrThrowArgs<ExtArgs>>): Prisma__PoderClient<$Result.GetResult<Prisma.$PoderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Poders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Poders
     * const poders = await prisma.poder.findMany()
     * 
     * // Get first 10 Poders
     * const poders = await prisma.poder.findMany({ take: 10 })
     * 
     * // Only select the `idPoder`
     * const poderWithIdPoderOnly = await prisma.poder.findMany({ select: { idPoder: true } })
     * 
     */
    findMany<T extends PoderFindManyArgs>(args?: SelectSubset<T, PoderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Poder.
     * @param {PoderCreateArgs} args - Arguments to create a Poder.
     * @example
     * // Create one Poder
     * const Poder = await prisma.poder.create({
     *   data: {
     *     // ... data to create a Poder
     *   }
     * })
     * 
     */
    create<T extends PoderCreateArgs>(args: SelectSubset<T, PoderCreateArgs<ExtArgs>>): Prisma__PoderClient<$Result.GetResult<Prisma.$PoderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Poders.
     * @param {PoderCreateManyArgs} args - Arguments to create many Poders.
     * @example
     * // Create many Poders
     * const poder = await prisma.poder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PoderCreateManyArgs>(args?: SelectSubset<T, PoderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Poders and returns the data saved in the database.
     * @param {PoderCreateManyAndReturnArgs} args - Arguments to create many Poders.
     * @example
     * // Create many Poders
     * const poder = await prisma.poder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Poders and only return the `idPoder`
     * const poderWithIdPoderOnly = await prisma.poder.createManyAndReturn({
     *   select: { idPoder: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PoderCreateManyAndReturnArgs>(args?: SelectSubset<T, PoderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Poder.
     * @param {PoderDeleteArgs} args - Arguments to delete one Poder.
     * @example
     * // Delete one Poder
     * const Poder = await prisma.poder.delete({
     *   where: {
     *     // ... filter to delete one Poder
     *   }
     * })
     * 
     */
    delete<T extends PoderDeleteArgs>(args: SelectSubset<T, PoderDeleteArgs<ExtArgs>>): Prisma__PoderClient<$Result.GetResult<Prisma.$PoderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Poder.
     * @param {PoderUpdateArgs} args - Arguments to update one Poder.
     * @example
     * // Update one Poder
     * const poder = await prisma.poder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PoderUpdateArgs>(args: SelectSubset<T, PoderUpdateArgs<ExtArgs>>): Prisma__PoderClient<$Result.GetResult<Prisma.$PoderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Poders.
     * @param {PoderDeleteManyArgs} args - Arguments to filter Poders to delete.
     * @example
     * // Delete a few Poders
     * const { count } = await prisma.poder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PoderDeleteManyArgs>(args?: SelectSubset<T, PoderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Poders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Poders
     * const poder = await prisma.poder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PoderUpdateManyArgs>(args: SelectSubset<T, PoderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Poders and returns the data updated in the database.
     * @param {PoderUpdateManyAndReturnArgs} args - Arguments to update many Poders.
     * @example
     * // Update many Poders
     * const poder = await prisma.poder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Poders and only return the `idPoder`
     * const poderWithIdPoderOnly = await prisma.poder.updateManyAndReturn({
     *   select: { idPoder: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PoderUpdateManyAndReturnArgs>(args: SelectSubset<T, PoderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Poder.
     * @param {PoderUpsertArgs} args - Arguments to update or create a Poder.
     * @example
     * // Update or create a Poder
     * const poder = await prisma.poder.upsert({
     *   create: {
     *     // ... data to create a Poder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Poder we want to update
     *   }
     * })
     */
    upsert<T extends PoderUpsertArgs>(args: SelectSubset<T, PoderUpsertArgs<ExtArgs>>): Prisma__PoderClient<$Result.GetResult<Prisma.$PoderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Poders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoderCountArgs} args - Arguments to filter Poders to count.
     * @example
     * // Count the number of Poders
     * const count = await prisma.poder.count({
     *   where: {
     *     // ... the filter for the Poders we want to count
     *   }
     * })
    **/
    count<T extends PoderCountArgs>(
      args?: Subset<T, PoderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PoderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Poder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PoderAggregateArgs>(args: Subset<T, PoderAggregateArgs>): Prisma.PrismaPromise<GetPoderAggregateType<T>>

    /**
     * Group by Poder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PoderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PoderGroupByArgs['orderBy'] }
        : { orderBy?: PoderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PoderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPoderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Poder model
   */
  readonly fields: PoderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Poder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PoderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    poderes<T extends Poder$poderesArgs<ExtArgs> = {}>(args?: Subset<T, Poder$poderesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtefatoPoderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    divindades<T extends Poder$divindadesArgs<ExtArgs> = {}>(args?: Subset<T, Poder$divindadesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoderDivindadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Poder model
   */
  interface PoderFieldRefs {
    readonly idPoder: FieldRef<"Poder", 'Int'>
    readonly nome: FieldRef<"Poder", 'String'>
    readonly descricao: FieldRef<"Poder", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Poder findUnique
   */
  export type PoderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poder
     */
    select?: PoderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poder
     */
    omit?: PoderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoderInclude<ExtArgs> | null
    /**
     * Filter, which Poder to fetch.
     */
    where: PoderWhereUniqueInput
  }

  /**
   * Poder findUniqueOrThrow
   */
  export type PoderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poder
     */
    select?: PoderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poder
     */
    omit?: PoderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoderInclude<ExtArgs> | null
    /**
     * Filter, which Poder to fetch.
     */
    where: PoderWhereUniqueInput
  }

  /**
   * Poder findFirst
   */
  export type PoderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poder
     */
    select?: PoderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poder
     */
    omit?: PoderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoderInclude<ExtArgs> | null
    /**
     * Filter, which Poder to fetch.
     */
    where?: PoderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Poders to fetch.
     */
    orderBy?: PoderOrderByWithRelationInput | PoderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Poders.
     */
    cursor?: PoderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Poders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Poders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Poders.
     */
    distinct?: PoderScalarFieldEnum | PoderScalarFieldEnum[]
  }

  /**
   * Poder findFirstOrThrow
   */
  export type PoderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poder
     */
    select?: PoderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poder
     */
    omit?: PoderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoderInclude<ExtArgs> | null
    /**
     * Filter, which Poder to fetch.
     */
    where?: PoderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Poders to fetch.
     */
    orderBy?: PoderOrderByWithRelationInput | PoderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Poders.
     */
    cursor?: PoderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Poders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Poders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Poders.
     */
    distinct?: PoderScalarFieldEnum | PoderScalarFieldEnum[]
  }

  /**
   * Poder findMany
   */
  export type PoderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poder
     */
    select?: PoderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poder
     */
    omit?: PoderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoderInclude<ExtArgs> | null
    /**
     * Filter, which Poders to fetch.
     */
    where?: PoderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Poders to fetch.
     */
    orderBy?: PoderOrderByWithRelationInput | PoderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Poders.
     */
    cursor?: PoderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Poders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Poders.
     */
    skip?: number
    distinct?: PoderScalarFieldEnum | PoderScalarFieldEnum[]
  }

  /**
   * Poder create
   */
  export type PoderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poder
     */
    select?: PoderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poder
     */
    omit?: PoderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoderInclude<ExtArgs> | null
    /**
     * The data needed to create a Poder.
     */
    data: XOR<PoderCreateInput, PoderUncheckedCreateInput>
  }

  /**
   * Poder createMany
   */
  export type PoderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Poders.
     */
    data: PoderCreateManyInput | PoderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Poder createManyAndReturn
   */
  export type PoderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poder
     */
    select?: PoderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Poder
     */
    omit?: PoderOmit<ExtArgs> | null
    /**
     * The data used to create many Poders.
     */
    data: PoderCreateManyInput | PoderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Poder update
   */
  export type PoderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poder
     */
    select?: PoderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poder
     */
    omit?: PoderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoderInclude<ExtArgs> | null
    /**
     * The data needed to update a Poder.
     */
    data: XOR<PoderUpdateInput, PoderUncheckedUpdateInput>
    /**
     * Choose, which Poder to update.
     */
    where: PoderWhereUniqueInput
  }

  /**
   * Poder updateMany
   */
  export type PoderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Poders.
     */
    data: XOR<PoderUpdateManyMutationInput, PoderUncheckedUpdateManyInput>
    /**
     * Filter which Poders to update
     */
    where?: PoderWhereInput
    /**
     * Limit how many Poders to update.
     */
    limit?: number
  }

  /**
   * Poder updateManyAndReturn
   */
  export type PoderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poder
     */
    select?: PoderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Poder
     */
    omit?: PoderOmit<ExtArgs> | null
    /**
     * The data used to update Poders.
     */
    data: XOR<PoderUpdateManyMutationInput, PoderUncheckedUpdateManyInput>
    /**
     * Filter which Poders to update
     */
    where?: PoderWhereInput
    /**
     * Limit how many Poders to update.
     */
    limit?: number
  }

  /**
   * Poder upsert
   */
  export type PoderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poder
     */
    select?: PoderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poder
     */
    omit?: PoderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoderInclude<ExtArgs> | null
    /**
     * The filter to search for the Poder to update in case it exists.
     */
    where: PoderWhereUniqueInput
    /**
     * In case the Poder found by the `where` argument doesn't exist, create a new Poder with this data.
     */
    create: XOR<PoderCreateInput, PoderUncheckedCreateInput>
    /**
     * In case the Poder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PoderUpdateInput, PoderUncheckedUpdateInput>
  }

  /**
   * Poder delete
   */
  export type PoderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poder
     */
    select?: PoderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poder
     */
    omit?: PoderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoderInclude<ExtArgs> | null
    /**
     * Filter which Poder to delete.
     */
    where: PoderWhereUniqueInput
  }

  /**
   * Poder deleteMany
   */
  export type PoderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Poders to delete
     */
    where?: PoderWhereInput
    /**
     * Limit how many Poders to delete.
     */
    limit?: number
  }

  /**
   * Poder.poderes
   */
  export type Poder$poderesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtefatoPoder
     */
    select?: ArtefatoPoderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtefatoPoder
     */
    omit?: ArtefatoPoderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtefatoPoderInclude<ExtArgs> | null
    where?: ArtefatoPoderWhereInput
    orderBy?: ArtefatoPoderOrderByWithRelationInput | ArtefatoPoderOrderByWithRelationInput[]
    cursor?: ArtefatoPoderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArtefatoPoderScalarFieldEnum | ArtefatoPoderScalarFieldEnum[]
  }

  /**
   * Poder.divindades
   */
  export type Poder$divindadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoderDivindade
     */
    select?: PoderDivindadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoderDivindade
     */
    omit?: PoderDivindadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoderDivindadeInclude<ExtArgs> | null
    where?: PoderDivindadeWhereInput
    orderBy?: PoderDivindadeOrderByWithRelationInput | PoderDivindadeOrderByWithRelationInput[]
    cursor?: PoderDivindadeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PoderDivindadeScalarFieldEnum | PoderDivindadeScalarFieldEnum[]
  }

  /**
   * Poder without action
   */
  export type PoderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poder
     */
    select?: PoderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poder
     */
    omit?: PoderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoderInclude<ExtArgs> | null
  }


  /**
   * Model PoderDivindade
   */

  export type AggregatePoderDivindade = {
    _count: PoderDivindadeCountAggregateOutputType | null
    _avg: PoderDivindadeAvgAggregateOutputType | null
    _sum: PoderDivindadeSumAggregateOutputType | null
    _min: PoderDivindadeMinAggregateOutputType | null
    _max: PoderDivindadeMaxAggregateOutputType | null
  }

  export type PoderDivindadeAvgAggregateOutputType = {
    poderId: number | null
  }

  export type PoderDivindadeSumAggregateOutputType = {
    poderId: number | null
  }

  export type PoderDivindadeMinAggregateOutputType = {
    serNome: string | null
    poderId: number | null
  }

  export type PoderDivindadeMaxAggregateOutputType = {
    serNome: string | null
    poderId: number | null
  }

  export type PoderDivindadeCountAggregateOutputType = {
    serNome: number
    poderId: number
    _all: number
  }


  export type PoderDivindadeAvgAggregateInputType = {
    poderId?: true
  }

  export type PoderDivindadeSumAggregateInputType = {
    poderId?: true
  }

  export type PoderDivindadeMinAggregateInputType = {
    serNome?: true
    poderId?: true
  }

  export type PoderDivindadeMaxAggregateInputType = {
    serNome?: true
    poderId?: true
  }

  export type PoderDivindadeCountAggregateInputType = {
    serNome?: true
    poderId?: true
    _all?: true
  }

  export type PoderDivindadeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PoderDivindade to aggregate.
     */
    where?: PoderDivindadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PoderDivindades to fetch.
     */
    orderBy?: PoderDivindadeOrderByWithRelationInput | PoderDivindadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PoderDivindadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PoderDivindades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PoderDivindades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PoderDivindades
    **/
    _count?: true | PoderDivindadeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PoderDivindadeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PoderDivindadeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PoderDivindadeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PoderDivindadeMaxAggregateInputType
  }

  export type GetPoderDivindadeAggregateType<T extends PoderDivindadeAggregateArgs> = {
        [P in keyof T & keyof AggregatePoderDivindade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePoderDivindade[P]>
      : GetScalarType<T[P], AggregatePoderDivindade[P]>
  }




  export type PoderDivindadeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PoderDivindadeWhereInput
    orderBy?: PoderDivindadeOrderByWithAggregationInput | PoderDivindadeOrderByWithAggregationInput[]
    by: PoderDivindadeScalarFieldEnum[] | PoderDivindadeScalarFieldEnum
    having?: PoderDivindadeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PoderDivindadeCountAggregateInputType | true
    _avg?: PoderDivindadeAvgAggregateInputType
    _sum?: PoderDivindadeSumAggregateInputType
    _min?: PoderDivindadeMinAggregateInputType
    _max?: PoderDivindadeMaxAggregateInputType
  }

  export type PoderDivindadeGroupByOutputType = {
    serNome: string
    poderId: number
    _count: PoderDivindadeCountAggregateOutputType | null
    _avg: PoderDivindadeAvgAggregateOutputType | null
    _sum: PoderDivindadeSumAggregateOutputType | null
    _min: PoderDivindadeMinAggregateOutputType | null
    _max: PoderDivindadeMaxAggregateOutputType | null
  }

  type GetPoderDivindadeGroupByPayload<T extends PoderDivindadeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PoderDivindadeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PoderDivindadeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PoderDivindadeGroupByOutputType[P]>
            : GetScalarType<T[P], PoderDivindadeGroupByOutputType[P]>
        }
      >
    >


  export type PoderDivindadeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    serNome?: boolean
    poderId?: boolean
    divindade?: boolean | SerDefaultArgs<ExtArgs>
    poder?: boolean | PoderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["poderDivindade"]>

  export type PoderDivindadeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    serNome?: boolean
    poderId?: boolean
    divindade?: boolean | SerDefaultArgs<ExtArgs>
    poder?: boolean | PoderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["poderDivindade"]>

  export type PoderDivindadeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    serNome?: boolean
    poderId?: boolean
    divindade?: boolean | SerDefaultArgs<ExtArgs>
    poder?: boolean | PoderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["poderDivindade"]>

  export type PoderDivindadeSelectScalar = {
    serNome?: boolean
    poderId?: boolean
  }

  export type PoderDivindadeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"serNome" | "poderId", ExtArgs["result"]["poderDivindade"]>
  export type PoderDivindadeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    divindade?: boolean | SerDefaultArgs<ExtArgs>
    poder?: boolean | PoderDefaultArgs<ExtArgs>
  }
  export type PoderDivindadeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    divindade?: boolean | SerDefaultArgs<ExtArgs>
    poder?: boolean | PoderDefaultArgs<ExtArgs>
  }
  export type PoderDivindadeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    divindade?: boolean | SerDefaultArgs<ExtArgs>
    poder?: boolean | PoderDefaultArgs<ExtArgs>
  }

  export type $PoderDivindadePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PoderDivindade"
    objects: {
      divindade: Prisma.$SerPayload<ExtArgs>
      poder: Prisma.$PoderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      serNome: string
      poderId: number
    }, ExtArgs["result"]["poderDivindade"]>
    composites: {}
  }

  type PoderDivindadeGetPayload<S extends boolean | null | undefined | PoderDivindadeDefaultArgs> = $Result.GetResult<Prisma.$PoderDivindadePayload, S>

  type PoderDivindadeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PoderDivindadeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PoderDivindadeCountAggregateInputType | true
    }

  export interface PoderDivindadeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PoderDivindade'], meta: { name: 'PoderDivindade' } }
    /**
     * Find zero or one PoderDivindade that matches the filter.
     * @param {PoderDivindadeFindUniqueArgs} args - Arguments to find a PoderDivindade
     * @example
     * // Get one PoderDivindade
     * const poderDivindade = await prisma.poderDivindade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PoderDivindadeFindUniqueArgs>(args: SelectSubset<T, PoderDivindadeFindUniqueArgs<ExtArgs>>): Prisma__PoderDivindadeClient<$Result.GetResult<Prisma.$PoderDivindadePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PoderDivindade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PoderDivindadeFindUniqueOrThrowArgs} args - Arguments to find a PoderDivindade
     * @example
     * // Get one PoderDivindade
     * const poderDivindade = await prisma.poderDivindade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PoderDivindadeFindUniqueOrThrowArgs>(args: SelectSubset<T, PoderDivindadeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PoderDivindadeClient<$Result.GetResult<Prisma.$PoderDivindadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PoderDivindade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoderDivindadeFindFirstArgs} args - Arguments to find a PoderDivindade
     * @example
     * // Get one PoderDivindade
     * const poderDivindade = await prisma.poderDivindade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PoderDivindadeFindFirstArgs>(args?: SelectSubset<T, PoderDivindadeFindFirstArgs<ExtArgs>>): Prisma__PoderDivindadeClient<$Result.GetResult<Prisma.$PoderDivindadePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PoderDivindade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoderDivindadeFindFirstOrThrowArgs} args - Arguments to find a PoderDivindade
     * @example
     * // Get one PoderDivindade
     * const poderDivindade = await prisma.poderDivindade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PoderDivindadeFindFirstOrThrowArgs>(args?: SelectSubset<T, PoderDivindadeFindFirstOrThrowArgs<ExtArgs>>): Prisma__PoderDivindadeClient<$Result.GetResult<Prisma.$PoderDivindadePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PoderDivindades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoderDivindadeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PoderDivindades
     * const poderDivindades = await prisma.poderDivindade.findMany()
     * 
     * // Get first 10 PoderDivindades
     * const poderDivindades = await prisma.poderDivindade.findMany({ take: 10 })
     * 
     * // Only select the `serNome`
     * const poderDivindadeWithSerNomeOnly = await prisma.poderDivindade.findMany({ select: { serNome: true } })
     * 
     */
    findMany<T extends PoderDivindadeFindManyArgs>(args?: SelectSubset<T, PoderDivindadeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoderDivindadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PoderDivindade.
     * @param {PoderDivindadeCreateArgs} args - Arguments to create a PoderDivindade.
     * @example
     * // Create one PoderDivindade
     * const PoderDivindade = await prisma.poderDivindade.create({
     *   data: {
     *     // ... data to create a PoderDivindade
     *   }
     * })
     * 
     */
    create<T extends PoderDivindadeCreateArgs>(args: SelectSubset<T, PoderDivindadeCreateArgs<ExtArgs>>): Prisma__PoderDivindadeClient<$Result.GetResult<Prisma.$PoderDivindadePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PoderDivindades.
     * @param {PoderDivindadeCreateManyArgs} args - Arguments to create many PoderDivindades.
     * @example
     * // Create many PoderDivindades
     * const poderDivindade = await prisma.poderDivindade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PoderDivindadeCreateManyArgs>(args?: SelectSubset<T, PoderDivindadeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PoderDivindades and returns the data saved in the database.
     * @param {PoderDivindadeCreateManyAndReturnArgs} args - Arguments to create many PoderDivindades.
     * @example
     * // Create many PoderDivindades
     * const poderDivindade = await prisma.poderDivindade.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PoderDivindades and only return the `serNome`
     * const poderDivindadeWithSerNomeOnly = await prisma.poderDivindade.createManyAndReturn({
     *   select: { serNome: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PoderDivindadeCreateManyAndReturnArgs>(args?: SelectSubset<T, PoderDivindadeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoderDivindadePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PoderDivindade.
     * @param {PoderDivindadeDeleteArgs} args - Arguments to delete one PoderDivindade.
     * @example
     * // Delete one PoderDivindade
     * const PoderDivindade = await prisma.poderDivindade.delete({
     *   where: {
     *     // ... filter to delete one PoderDivindade
     *   }
     * })
     * 
     */
    delete<T extends PoderDivindadeDeleteArgs>(args: SelectSubset<T, PoderDivindadeDeleteArgs<ExtArgs>>): Prisma__PoderDivindadeClient<$Result.GetResult<Prisma.$PoderDivindadePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PoderDivindade.
     * @param {PoderDivindadeUpdateArgs} args - Arguments to update one PoderDivindade.
     * @example
     * // Update one PoderDivindade
     * const poderDivindade = await prisma.poderDivindade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PoderDivindadeUpdateArgs>(args: SelectSubset<T, PoderDivindadeUpdateArgs<ExtArgs>>): Prisma__PoderDivindadeClient<$Result.GetResult<Prisma.$PoderDivindadePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PoderDivindades.
     * @param {PoderDivindadeDeleteManyArgs} args - Arguments to filter PoderDivindades to delete.
     * @example
     * // Delete a few PoderDivindades
     * const { count } = await prisma.poderDivindade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PoderDivindadeDeleteManyArgs>(args?: SelectSubset<T, PoderDivindadeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PoderDivindades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoderDivindadeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PoderDivindades
     * const poderDivindade = await prisma.poderDivindade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PoderDivindadeUpdateManyArgs>(args: SelectSubset<T, PoderDivindadeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PoderDivindades and returns the data updated in the database.
     * @param {PoderDivindadeUpdateManyAndReturnArgs} args - Arguments to update many PoderDivindades.
     * @example
     * // Update many PoderDivindades
     * const poderDivindade = await prisma.poderDivindade.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PoderDivindades and only return the `serNome`
     * const poderDivindadeWithSerNomeOnly = await prisma.poderDivindade.updateManyAndReturn({
     *   select: { serNome: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PoderDivindadeUpdateManyAndReturnArgs>(args: SelectSubset<T, PoderDivindadeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoderDivindadePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PoderDivindade.
     * @param {PoderDivindadeUpsertArgs} args - Arguments to update or create a PoderDivindade.
     * @example
     * // Update or create a PoderDivindade
     * const poderDivindade = await prisma.poderDivindade.upsert({
     *   create: {
     *     // ... data to create a PoderDivindade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PoderDivindade we want to update
     *   }
     * })
     */
    upsert<T extends PoderDivindadeUpsertArgs>(args: SelectSubset<T, PoderDivindadeUpsertArgs<ExtArgs>>): Prisma__PoderDivindadeClient<$Result.GetResult<Prisma.$PoderDivindadePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PoderDivindades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoderDivindadeCountArgs} args - Arguments to filter PoderDivindades to count.
     * @example
     * // Count the number of PoderDivindades
     * const count = await prisma.poderDivindade.count({
     *   where: {
     *     // ... the filter for the PoderDivindades we want to count
     *   }
     * })
    **/
    count<T extends PoderDivindadeCountArgs>(
      args?: Subset<T, PoderDivindadeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PoderDivindadeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PoderDivindade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoderDivindadeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PoderDivindadeAggregateArgs>(args: Subset<T, PoderDivindadeAggregateArgs>): Prisma.PrismaPromise<GetPoderDivindadeAggregateType<T>>

    /**
     * Group by PoderDivindade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoderDivindadeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PoderDivindadeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PoderDivindadeGroupByArgs['orderBy'] }
        : { orderBy?: PoderDivindadeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PoderDivindadeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPoderDivindadeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PoderDivindade model
   */
  readonly fields: PoderDivindadeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PoderDivindade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PoderDivindadeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    divindade<T extends SerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SerDefaultArgs<ExtArgs>>): Prisma__SerClient<$Result.GetResult<Prisma.$SerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    poder<T extends PoderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PoderDefaultArgs<ExtArgs>>): Prisma__PoderClient<$Result.GetResult<Prisma.$PoderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PoderDivindade model
   */
  interface PoderDivindadeFieldRefs {
    readonly serNome: FieldRef<"PoderDivindade", 'String'>
    readonly poderId: FieldRef<"PoderDivindade", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PoderDivindade findUnique
   */
  export type PoderDivindadeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoderDivindade
     */
    select?: PoderDivindadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoderDivindade
     */
    omit?: PoderDivindadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoderDivindadeInclude<ExtArgs> | null
    /**
     * Filter, which PoderDivindade to fetch.
     */
    where: PoderDivindadeWhereUniqueInput
  }

  /**
   * PoderDivindade findUniqueOrThrow
   */
  export type PoderDivindadeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoderDivindade
     */
    select?: PoderDivindadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoderDivindade
     */
    omit?: PoderDivindadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoderDivindadeInclude<ExtArgs> | null
    /**
     * Filter, which PoderDivindade to fetch.
     */
    where: PoderDivindadeWhereUniqueInput
  }

  /**
   * PoderDivindade findFirst
   */
  export type PoderDivindadeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoderDivindade
     */
    select?: PoderDivindadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoderDivindade
     */
    omit?: PoderDivindadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoderDivindadeInclude<ExtArgs> | null
    /**
     * Filter, which PoderDivindade to fetch.
     */
    where?: PoderDivindadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PoderDivindades to fetch.
     */
    orderBy?: PoderDivindadeOrderByWithRelationInput | PoderDivindadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PoderDivindades.
     */
    cursor?: PoderDivindadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PoderDivindades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PoderDivindades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PoderDivindades.
     */
    distinct?: PoderDivindadeScalarFieldEnum | PoderDivindadeScalarFieldEnum[]
  }

  /**
   * PoderDivindade findFirstOrThrow
   */
  export type PoderDivindadeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoderDivindade
     */
    select?: PoderDivindadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoderDivindade
     */
    omit?: PoderDivindadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoderDivindadeInclude<ExtArgs> | null
    /**
     * Filter, which PoderDivindade to fetch.
     */
    where?: PoderDivindadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PoderDivindades to fetch.
     */
    orderBy?: PoderDivindadeOrderByWithRelationInput | PoderDivindadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PoderDivindades.
     */
    cursor?: PoderDivindadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PoderDivindades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PoderDivindades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PoderDivindades.
     */
    distinct?: PoderDivindadeScalarFieldEnum | PoderDivindadeScalarFieldEnum[]
  }

  /**
   * PoderDivindade findMany
   */
  export type PoderDivindadeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoderDivindade
     */
    select?: PoderDivindadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoderDivindade
     */
    omit?: PoderDivindadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoderDivindadeInclude<ExtArgs> | null
    /**
     * Filter, which PoderDivindades to fetch.
     */
    where?: PoderDivindadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PoderDivindades to fetch.
     */
    orderBy?: PoderDivindadeOrderByWithRelationInput | PoderDivindadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PoderDivindades.
     */
    cursor?: PoderDivindadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PoderDivindades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PoderDivindades.
     */
    skip?: number
    distinct?: PoderDivindadeScalarFieldEnum | PoderDivindadeScalarFieldEnum[]
  }

  /**
   * PoderDivindade create
   */
  export type PoderDivindadeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoderDivindade
     */
    select?: PoderDivindadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoderDivindade
     */
    omit?: PoderDivindadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoderDivindadeInclude<ExtArgs> | null
    /**
     * The data needed to create a PoderDivindade.
     */
    data: XOR<PoderDivindadeCreateInput, PoderDivindadeUncheckedCreateInput>
  }

  /**
   * PoderDivindade createMany
   */
  export type PoderDivindadeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PoderDivindades.
     */
    data: PoderDivindadeCreateManyInput | PoderDivindadeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PoderDivindade createManyAndReturn
   */
  export type PoderDivindadeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoderDivindade
     */
    select?: PoderDivindadeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PoderDivindade
     */
    omit?: PoderDivindadeOmit<ExtArgs> | null
    /**
     * The data used to create many PoderDivindades.
     */
    data: PoderDivindadeCreateManyInput | PoderDivindadeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoderDivindadeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PoderDivindade update
   */
  export type PoderDivindadeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoderDivindade
     */
    select?: PoderDivindadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoderDivindade
     */
    omit?: PoderDivindadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoderDivindadeInclude<ExtArgs> | null
    /**
     * The data needed to update a PoderDivindade.
     */
    data: XOR<PoderDivindadeUpdateInput, PoderDivindadeUncheckedUpdateInput>
    /**
     * Choose, which PoderDivindade to update.
     */
    where: PoderDivindadeWhereUniqueInput
  }

  /**
   * PoderDivindade updateMany
   */
  export type PoderDivindadeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PoderDivindades.
     */
    data: XOR<PoderDivindadeUpdateManyMutationInput, PoderDivindadeUncheckedUpdateManyInput>
    /**
     * Filter which PoderDivindades to update
     */
    where?: PoderDivindadeWhereInput
    /**
     * Limit how many PoderDivindades to update.
     */
    limit?: number
  }

  /**
   * PoderDivindade updateManyAndReturn
   */
  export type PoderDivindadeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoderDivindade
     */
    select?: PoderDivindadeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PoderDivindade
     */
    omit?: PoderDivindadeOmit<ExtArgs> | null
    /**
     * The data used to update PoderDivindades.
     */
    data: XOR<PoderDivindadeUpdateManyMutationInput, PoderDivindadeUncheckedUpdateManyInput>
    /**
     * Filter which PoderDivindades to update
     */
    where?: PoderDivindadeWhereInput
    /**
     * Limit how many PoderDivindades to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoderDivindadeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PoderDivindade upsert
   */
  export type PoderDivindadeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoderDivindade
     */
    select?: PoderDivindadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoderDivindade
     */
    omit?: PoderDivindadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoderDivindadeInclude<ExtArgs> | null
    /**
     * The filter to search for the PoderDivindade to update in case it exists.
     */
    where: PoderDivindadeWhereUniqueInput
    /**
     * In case the PoderDivindade found by the `where` argument doesn't exist, create a new PoderDivindade with this data.
     */
    create: XOR<PoderDivindadeCreateInput, PoderDivindadeUncheckedCreateInput>
    /**
     * In case the PoderDivindade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PoderDivindadeUpdateInput, PoderDivindadeUncheckedUpdateInput>
  }

  /**
   * PoderDivindade delete
   */
  export type PoderDivindadeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoderDivindade
     */
    select?: PoderDivindadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoderDivindade
     */
    omit?: PoderDivindadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoderDivindadeInclude<ExtArgs> | null
    /**
     * Filter which PoderDivindade to delete.
     */
    where: PoderDivindadeWhereUniqueInput
  }

  /**
   * PoderDivindade deleteMany
   */
  export type PoderDivindadeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PoderDivindades to delete
     */
    where?: PoderDivindadeWhereInput
    /**
     * Limit how many PoderDivindades to delete.
     */
    limit?: number
  }

  /**
   * PoderDivindade without action
   */
  export type PoderDivindadeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoderDivindade
     */
    select?: PoderDivindadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoderDivindade
     */
    omit?: PoderDivindadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoderDivindadeInclude<ExtArgs> | null
  }


  /**
   * Model ArtefatoPoder
   */

  export type AggregateArtefatoPoder = {
    _count: ArtefatoPoderCountAggregateOutputType | null
    _avg: ArtefatoPoderAvgAggregateOutputType | null
    _sum: ArtefatoPoderSumAggregateOutputType | null
    _min: ArtefatoPoderMinAggregateOutputType | null
    _max: ArtefatoPoderMaxAggregateOutputType | null
  }

  export type ArtefatoPoderAvgAggregateOutputType = {
    poderId: number | null
  }

  export type ArtefatoPoderSumAggregateOutputType = {
    poderId: number | null
  }

  export type ArtefatoPoderMinAggregateOutputType = {
    artefatoNome: string | null
    poderId: number | null
  }

  export type ArtefatoPoderMaxAggregateOutputType = {
    artefatoNome: string | null
    poderId: number | null
  }

  export type ArtefatoPoderCountAggregateOutputType = {
    artefatoNome: number
    poderId: number
    _all: number
  }


  export type ArtefatoPoderAvgAggregateInputType = {
    poderId?: true
  }

  export type ArtefatoPoderSumAggregateInputType = {
    poderId?: true
  }

  export type ArtefatoPoderMinAggregateInputType = {
    artefatoNome?: true
    poderId?: true
  }

  export type ArtefatoPoderMaxAggregateInputType = {
    artefatoNome?: true
    poderId?: true
  }

  export type ArtefatoPoderCountAggregateInputType = {
    artefatoNome?: true
    poderId?: true
    _all?: true
  }

  export type ArtefatoPoderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArtefatoPoder to aggregate.
     */
    where?: ArtefatoPoderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtefatoPoders to fetch.
     */
    orderBy?: ArtefatoPoderOrderByWithRelationInput | ArtefatoPoderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArtefatoPoderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtefatoPoders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtefatoPoders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArtefatoPoders
    **/
    _count?: true | ArtefatoPoderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArtefatoPoderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArtefatoPoderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtefatoPoderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtefatoPoderMaxAggregateInputType
  }

  export type GetArtefatoPoderAggregateType<T extends ArtefatoPoderAggregateArgs> = {
        [P in keyof T & keyof AggregateArtefatoPoder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtefatoPoder[P]>
      : GetScalarType<T[P], AggregateArtefatoPoder[P]>
  }




  export type ArtefatoPoderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtefatoPoderWhereInput
    orderBy?: ArtefatoPoderOrderByWithAggregationInput | ArtefatoPoderOrderByWithAggregationInput[]
    by: ArtefatoPoderScalarFieldEnum[] | ArtefatoPoderScalarFieldEnum
    having?: ArtefatoPoderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtefatoPoderCountAggregateInputType | true
    _avg?: ArtefatoPoderAvgAggregateInputType
    _sum?: ArtefatoPoderSumAggregateInputType
    _min?: ArtefatoPoderMinAggregateInputType
    _max?: ArtefatoPoderMaxAggregateInputType
  }

  export type ArtefatoPoderGroupByOutputType = {
    artefatoNome: string
    poderId: number
    _count: ArtefatoPoderCountAggregateOutputType | null
    _avg: ArtefatoPoderAvgAggregateOutputType | null
    _sum: ArtefatoPoderSumAggregateOutputType | null
    _min: ArtefatoPoderMinAggregateOutputType | null
    _max: ArtefatoPoderMaxAggregateOutputType | null
  }

  type GetArtefatoPoderGroupByPayload<T extends ArtefatoPoderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArtefatoPoderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtefatoPoderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtefatoPoderGroupByOutputType[P]>
            : GetScalarType<T[P], ArtefatoPoderGroupByOutputType[P]>
        }
      >
    >


  export type ArtefatoPoderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    artefatoNome?: boolean
    poderId?: boolean
    artefato?: boolean | ArtefatoDefaultArgs<ExtArgs>
    poder?: boolean | PoderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artefatoPoder"]>

  export type ArtefatoPoderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    artefatoNome?: boolean
    poderId?: boolean
    artefato?: boolean | ArtefatoDefaultArgs<ExtArgs>
    poder?: boolean | PoderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artefatoPoder"]>

  export type ArtefatoPoderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    artefatoNome?: boolean
    poderId?: boolean
    artefato?: boolean | ArtefatoDefaultArgs<ExtArgs>
    poder?: boolean | PoderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artefatoPoder"]>

  export type ArtefatoPoderSelectScalar = {
    artefatoNome?: boolean
    poderId?: boolean
  }

  export type ArtefatoPoderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"artefatoNome" | "poderId", ExtArgs["result"]["artefatoPoder"]>
  export type ArtefatoPoderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artefato?: boolean | ArtefatoDefaultArgs<ExtArgs>
    poder?: boolean | PoderDefaultArgs<ExtArgs>
  }
  export type ArtefatoPoderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artefato?: boolean | ArtefatoDefaultArgs<ExtArgs>
    poder?: boolean | PoderDefaultArgs<ExtArgs>
  }
  export type ArtefatoPoderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artefato?: boolean | ArtefatoDefaultArgs<ExtArgs>
    poder?: boolean | PoderDefaultArgs<ExtArgs>
  }

  export type $ArtefatoPoderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArtefatoPoder"
    objects: {
      artefato: Prisma.$ArtefatoPayload<ExtArgs>
      poder: Prisma.$PoderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      artefatoNome: string
      poderId: number
    }, ExtArgs["result"]["artefatoPoder"]>
    composites: {}
  }

  type ArtefatoPoderGetPayload<S extends boolean | null | undefined | ArtefatoPoderDefaultArgs> = $Result.GetResult<Prisma.$ArtefatoPoderPayload, S>

  type ArtefatoPoderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArtefatoPoderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArtefatoPoderCountAggregateInputType | true
    }

  export interface ArtefatoPoderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArtefatoPoder'], meta: { name: 'ArtefatoPoder' } }
    /**
     * Find zero or one ArtefatoPoder that matches the filter.
     * @param {ArtefatoPoderFindUniqueArgs} args - Arguments to find a ArtefatoPoder
     * @example
     * // Get one ArtefatoPoder
     * const artefatoPoder = await prisma.artefatoPoder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArtefatoPoderFindUniqueArgs>(args: SelectSubset<T, ArtefatoPoderFindUniqueArgs<ExtArgs>>): Prisma__ArtefatoPoderClient<$Result.GetResult<Prisma.$ArtefatoPoderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ArtefatoPoder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArtefatoPoderFindUniqueOrThrowArgs} args - Arguments to find a ArtefatoPoder
     * @example
     * // Get one ArtefatoPoder
     * const artefatoPoder = await prisma.artefatoPoder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArtefatoPoderFindUniqueOrThrowArgs>(args: SelectSubset<T, ArtefatoPoderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArtefatoPoderClient<$Result.GetResult<Prisma.$ArtefatoPoderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArtefatoPoder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtefatoPoderFindFirstArgs} args - Arguments to find a ArtefatoPoder
     * @example
     * // Get one ArtefatoPoder
     * const artefatoPoder = await prisma.artefatoPoder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArtefatoPoderFindFirstArgs>(args?: SelectSubset<T, ArtefatoPoderFindFirstArgs<ExtArgs>>): Prisma__ArtefatoPoderClient<$Result.GetResult<Prisma.$ArtefatoPoderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArtefatoPoder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtefatoPoderFindFirstOrThrowArgs} args - Arguments to find a ArtefatoPoder
     * @example
     * // Get one ArtefatoPoder
     * const artefatoPoder = await prisma.artefatoPoder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArtefatoPoderFindFirstOrThrowArgs>(args?: SelectSubset<T, ArtefatoPoderFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArtefatoPoderClient<$Result.GetResult<Prisma.$ArtefatoPoderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ArtefatoPoders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtefatoPoderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArtefatoPoders
     * const artefatoPoders = await prisma.artefatoPoder.findMany()
     * 
     * // Get first 10 ArtefatoPoders
     * const artefatoPoders = await prisma.artefatoPoder.findMany({ take: 10 })
     * 
     * // Only select the `artefatoNome`
     * const artefatoPoderWithArtefatoNomeOnly = await prisma.artefatoPoder.findMany({ select: { artefatoNome: true } })
     * 
     */
    findMany<T extends ArtefatoPoderFindManyArgs>(args?: SelectSubset<T, ArtefatoPoderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtefatoPoderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ArtefatoPoder.
     * @param {ArtefatoPoderCreateArgs} args - Arguments to create a ArtefatoPoder.
     * @example
     * // Create one ArtefatoPoder
     * const ArtefatoPoder = await prisma.artefatoPoder.create({
     *   data: {
     *     // ... data to create a ArtefatoPoder
     *   }
     * })
     * 
     */
    create<T extends ArtefatoPoderCreateArgs>(args: SelectSubset<T, ArtefatoPoderCreateArgs<ExtArgs>>): Prisma__ArtefatoPoderClient<$Result.GetResult<Prisma.$ArtefatoPoderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ArtefatoPoders.
     * @param {ArtefatoPoderCreateManyArgs} args - Arguments to create many ArtefatoPoders.
     * @example
     * // Create many ArtefatoPoders
     * const artefatoPoder = await prisma.artefatoPoder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArtefatoPoderCreateManyArgs>(args?: SelectSubset<T, ArtefatoPoderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ArtefatoPoders and returns the data saved in the database.
     * @param {ArtefatoPoderCreateManyAndReturnArgs} args - Arguments to create many ArtefatoPoders.
     * @example
     * // Create many ArtefatoPoders
     * const artefatoPoder = await prisma.artefatoPoder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ArtefatoPoders and only return the `artefatoNome`
     * const artefatoPoderWithArtefatoNomeOnly = await prisma.artefatoPoder.createManyAndReturn({
     *   select: { artefatoNome: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArtefatoPoderCreateManyAndReturnArgs>(args?: SelectSubset<T, ArtefatoPoderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtefatoPoderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ArtefatoPoder.
     * @param {ArtefatoPoderDeleteArgs} args - Arguments to delete one ArtefatoPoder.
     * @example
     * // Delete one ArtefatoPoder
     * const ArtefatoPoder = await prisma.artefatoPoder.delete({
     *   where: {
     *     // ... filter to delete one ArtefatoPoder
     *   }
     * })
     * 
     */
    delete<T extends ArtefatoPoderDeleteArgs>(args: SelectSubset<T, ArtefatoPoderDeleteArgs<ExtArgs>>): Prisma__ArtefatoPoderClient<$Result.GetResult<Prisma.$ArtefatoPoderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ArtefatoPoder.
     * @param {ArtefatoPoderUpdateArgs} args - Arguments to update one ArtefatoPoder.
     * @example
     * // Update one ArtefatoPoder
     * const artefatoPoder = await prisma.artefatoPoder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArtefatoPoderUpdateArgs>(args: SelectSubset<T, ArtefatoPoderUpdateArgs<ExtArgs>>): Prisma__ArtefatoPoderClient<$Result.GetResult<Prisma.$ArtefatoPoderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ArtefatoPoders.
     * @param {ArtefatoPoderDeleteManyArgs} args - Arguments to filter ArtefatoPoders to delete.
     * @example
     * // Delete a few ArtefatoPoders
     * const { count } = await prisma.artefatoPoder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArtefatoPoderDeleteManyArgs>(args?: SelectSubset<T, ArtefatoPoderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArtefatoPoders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtefatoPoderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArtefatoPoders
     * const artefatoPoder = await prisma.artefatoPoder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArtefatoPoderUpdateManyArgs>(args: SelectSubset<T, ArtefatoPoderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArtefatoPoders and returns the data updated in the database.
     * @param {ArtefatoPoderUpdateManyAndReturnArgs} args - Arguments to update many ArtefatoPoders.
     * @example
     * // Update many ArtefatoPoders
     * const artefatoPoder = await prisma.artefatoPoder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ArtefatoPoders and only return the `artefatoNome`
     * const artefatoPoderWithArtefatoNomeOnly = await prisma.artefatoPoder.updateManyAndReturn({
     *   select: { artefatoNome: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArtefatoPoderUpdateManyAndReturnArgs>(args: SelectSubset<T, ArtefatoPoderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtefatoPoderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ArtefatoPoder.
     * @param {ArtefatoPoderUpsertArgs} args - Arguments to update or create a ArtefatoPoder.
     * @example
     * // Update or create a ArtefatoPoder
     * const artefatoPoder = await prisma.artefatoPoder.upsert({
     *   create: {
     *     // ... data to create a ArtefatoPoder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArtefatoPoder we want to update
     *   }
     * })
     */
    upsert<T extends ArtefatoPoderUpsertArgs>(args: SelectSubset<T, ArtefatoPoderUpsertArgs<ExtArgs>>): Prisma__ArtefatoPoderClient<$Result.GetResult<Prisma.$ArtefatoPoderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ArtefatoPoders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtefatoPoderCountArgs} args - Arguments to filter ArtefatoPoders to count.
     * @example
     * // Count the number of ArtefatoPoders
     * const count = await prisma.artefatoPoder.count({
     *   where: {
     *     // ... the filter for the ArtefatoPoders we want to count
     *   }
     * })
    **/
    count<T extends ArtefatoPoderCountArgs>(
      args?: Subset<T, ArtefatoPoderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtefatoPoderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArtefatoPoder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtefatoPoderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArtefatoPoderAggregateArgs>(args: Subset<T, ArtefatoPoderAggregateArgs>): Prisma.PrismaPromise<GetArtefatoPoderAggregateType<T>>

    /**
     * Group by ArtefatoPoder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtefatoPoderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArtefatoPoderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArtefatoPoderGroupByArgs['orderBy'] }
        : { orderBy?: ArtefatoPoderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArtefatoPoderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtefatoPoderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArtefatoPoder model
   */
  readonly fields: ArtefatoPoderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArtefatoPoder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArtefatoPoderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    artefato<T extends ArtefatoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArtefatoDefaultArgs<ExtArgs>>): Prisma__ArtefatoClient<$Result.GetResult<Prisma.$ArtefatoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    poder<T extends PoderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PoderDefaultArgs<ExtArgs>>): Prisma__PoderClient<$Result.GetResult<Prisma.$PoderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ArtefatoPoder model
   */
  interface ArtefatoPoderFieldRefs {
    readonly artefatoNome: FieldRef<"ArtefatoPoder", 'String'>
    readonly poderId: FieldRef<"ArtefatoPoder", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ArtefatoPoder findUnique
   */
  export type ArtefatoPoderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtefatoPoder
     */
    select?: ArtefatoPoderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtefatoPoder
     */
    omit?: ArtefatoPoderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtefatoPoderInclude<ExtArgs> | null
    /**
     * Filter, which ArtefatoPoder to fetch.
     */
    where: ArtefatoPoderWhereUniqueInput
  }

  /**
   * ArtefatoPoder findUniqueOrThrow
   */
  export type ArtefatoPoderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtefatoPoder
     */
    select?: ArtefatoPoderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtefatoPoder
     */
    omit?: ArtefatoPoderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtefatoPoderInclude<ExtArgs> | null
    /**
     * Filter, which ArtefatoPoder to fetch.
     */
    where: ArtefatoPoderWhereUniqueInput
  }

  /**
   * ArtefatoPoder findFirst
   */
  export type ArtefatoPoderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtefatoPoder
     */
    select?: ArtefatoPoderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtefatoPoder
     */
    omit?: ArtefatoPoderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtefatoPoderInclude<ExtArgs> | null
    /**
     * Filter, which ArtefatoPoder to fetch.
     */
    where?: ArtefatoPoderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtefatoPoders to fetch.
     */
    orderBy?: ArtefatoPoderOrderByWithRelationInput | ArtefatoPoderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArtefatoPoders.
     */
    cursor?: ArtefatoPoderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtefatoPoders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtefatoPoders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArtefatoPoders.
     */
    distinct?: ArtefatoPoderScalarFieldEnum | ArtefatoPoderScalarFieldEnum[]
  }

  /**
   * ArtefatoPoder findFirstOrThrow
   */
  export type ArtefatoPoderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtefatoPoder
     */
    select?: ArtefatoPoderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtefatoPoder
     */
    omit?: ArtefatoPoderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtefatoPoderInclude<ExtArgs> | null
    /**
     * Filter, which ArtefatoPoder to fetch.
     */
    where?: ArtefatoPoderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtefatoPoders to fetch.
     */
    orderBy?: ArtefatoPoderOrderByWithRelationInput | ArtefatoPoderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArtefatoPoders.
     */
    cursor?: ArtefatoPoderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtefatoPoders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtefatoPoders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArtefatoPoders.
     */
    distinct?: ArtefatoPoderScalarFieldEnum | ArtefatoPoderScalarFieldEnum[]
  }

  /**
   * ArtefatoPoder findMany
   */
  export type ArtefatoPoderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtefatoPoder
     */
    select?: ArtefatoPoderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtefatoPoder
     */
    omit?: ArtefatoPoderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtefatoPoderInclude<ExtArgs> | null
    /**
     * Filter, which ArtefatoPoders to fetch.
     */
    where?: ArtefatoPoderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtefatoPoders to fetch.
     */
    orderBy?: ArtefatoPoderOrderByWithRelationInput | ArtefatoPoderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArtefatoPoders.
     */
    cursor?: ArtefatoPoderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtefatoPoders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtefatoPoders.
     */
    skip?: number
    distinct?: ArtefatoPoderScalarFieldEnum | ArtefatoPoderScalarFieldEnum[]
  }

  /**
   * ArtefatoPoder create
   */
  export type ArtefatoPoderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtefatoPoder
     */
    select?: ArtefatoPoderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtefatoPoder
     */
    omit?: ArtefatoPoderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtefatoPoderInclude<ExtArgs> | null
    /**
     * The data needed to create a ArtefatoPoder.
     */
    data: XOR<ArtefatoPoderCreateInput, ArtefatoPoderUncheckedCreateInput>
  }

  /**
   * ArtefatoPoder createMany
   */
  export type ArtefatoPoderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArtefatoPoders.
     */
    data: ArtefatoPoderCreateManyInput | ArtefatoPoderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArtefatoPoder createManyAndReturn
   */
  export type ArtefatoPoderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtefatoPoder
     */
    select?: ArtefatoPoderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArtefatoPoder
     */
    omit?: ArtefatoPoderOmit<ExtArgs> | null
    /**
     * The data used to create many ArtefatoPoders.
     */
    data: ArtefatoPoderCreateManyInput | ArtefatoPoderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtefatoPoderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArtefatoPoder update
   */
  export type ArtefatoPoderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtefatoPoder
     */
    select?: ArtefatoPoderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtefatoPoder
     */
    omit?: ArtefatoPoderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtefatoPoderInclude<ExtArgs> | null
    /**
     * The data needed to update a ArtefatoPoder.
     */
    data: XOR<ArtefatoPoderUpdateInput, ArtefatoPoderUncheckedUpdateInput>
    /**
     * Choose, which ArtefatoPoder to update.
     */
    where: ArtefatoPoderWhereUniqueInput
  }

  /**
   * ArtefatoPoder updateMany
   */
  export type ArtefatoPoderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArtefatoPoders.
     */
    data: XOR<ArtefatoPoderUpdateManyMutationInput, ArtefatoPoderUncheckedUpdateManyInput>
    /**
     * Filter which ArtefatoPoders to update
     */
    where?: ArtefatoPoderWhereInput
    /**
     * Limit how many ArtefatoPoders to update.
     */
    limit?: number
  }

  /**
   * ArtefatoPoder updateManyAndReturn
   */
  export type ArtefatoPoderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtefatoPoder
     */
    select?: ArtefatoPoderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArtefatoPoder
     */
    omit?: ArtefatoPoderOmit<ExtArgs> | null
    /**
     * The data used to update ArtefatoPoders.
     */
    data: XOR<ArtefatoPoderUpdateManyMutationInput, ArtefatoPoderUncheckedUpdateManyInput>
    /**
     * Filter which ArtefatoPoders to update
     */
    where?: ArtefatoPoderWhereInput
    /**
     * Limit how many ArtefatoPoders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtefatoPoderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArtefatoPoder upsert
   */
  export type ArtefatoPoderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtefatoPoder
     */
    select?: ArtefatoPoderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtefatoPoder
     */
    omit?: ArtefatoPoderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtefatoPoderInclude<ExtArgs> | null
    /**
     * The filter to search for the ArtefatoPoder to update in case it exists.
     */
    where: ArtefatoPoderWhereUniqueInput
    /**
     * In case the ArtefatoPoder found by the `where` argument doesn't exist, create a new ArtefatoPoder with this data.
     */
    create: XOR<ArtefatoPoderCreateInput, ArtefatoPoderUncheckedCreateInput>
    /**
     * In case the ArtefatoPoder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArtefatoPoderUpdateInput, ArtefatoPoderUncheckedUpdateInput>
  }

  /**
   * ArtefatoPoder delete
   */
  export type ArtefatoPoderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtefatoPoder
     */
    select?: ArtefatoPoderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtefatoPoder
     */
    omit?: ArtefatoPoderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtefatoPoderInclude<ExtArgs> | null
    /**
     * Filter which ArtefatoPoder to delete.
     */
    where: ArtefatoPoderWhereUniqueInput
  }

  /**
   * ArtefatoPoder deleteMany
   */
  export type ArtefatoPoderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArtefatoPoders to delete
     */
    where?: ArtefatoPoderWhereInput
    /**
     * Limit how many ArtefatoPoders to delete.
     */
    limit?: number
  }

  /**
   * ArtefatoPoder without action
   */
  export type ArtefatoPoderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtefatoPoder
     */
    select?: ArtefatoPoderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtefatoPoder
     */
    omit?: ArtefatoPoderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtefatoPoderInclude<ExtArgs> | null
  }


  /**
   * Model Artefato
   */

  export type AggregateArtefato = {
    _count: ArtefatoCountAggregateOutputType | null
    _min: ArtefatoMinAggregateOutputType | null
    _max: ArtefatoMaxAggregateOutputType | null
  }

  export type ArtefatoMinAggregateOutputType = {
    nome: string | null
    objeto: string | null
    material: string | null
    destruido: boolean | null
    nomeSer: string | null
  }

  export type ArtefatoMaxAggregateOutputType = {
    nome: string | null
    objeto: string | null
    material: string | null
    destruido: boolean | null
    nomeSer: string | null
  }

  export type ArtefatoCountAggregateOutputType = {
    nome: number
    objeto: number
    material: number
    destruido: number
    nomeSer: number
    _all: number
  }


  export type ArtefatoMinAggregateInputType = {
    nome?: true
    objeto?: true
    material?: true
    destruido?: true
    nomeSer?: true
  }

  export type ArtefatoMaxAggregateInputType = {
    nome?: true
    objeto?: true
    material?: true
    destruido?: true
    nomeSer?: true
  }

  export type ArtefatoCountAggregateInputType = {
    nome?: true
    objeto?: true
    material?: true
    destruido?: true
    nomeSer?: true
    _all?: true
  }

  export type ArtefatoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artefato to aggregate.
     */
    where?: ArtefatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artefatoes to fetch.
     */
    orderBy?: ArtefatoOrderByWithRelationInput | ArtefatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArtefatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artefatoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artefatoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Artefatoes
    **/
    _count?: true | ArtefatoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtefatoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtefatoMaxAggregateInputType
  }

  export type GetArtefatoAggregateType<T extends ArtefatoAggregateArgs> = {
        [P in keyof T & keyof AggregateArtefato]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtefato[P]>
      : GetScalarType<T[P], AggregateArtefato[P]>
  }




  export type ArtefatoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtefatoWhereInput
    orderBy?: ArtefatoOrderByWithAggregationInput | ArtefatoOrderByWithAggregationInput[]
    by: ArtefatoScalarFieldEnum[] | ArtefatoScalarFieldEnum
    having?: ArtefatoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtefatoCountAggregateInputType | true
    _min?: ArtefatoMinAggregateInputType
    _max?: ArtefatoMaxAggregateInputType
  }

  export type ArtefatoGroupByOutputType = {
    nome: string
    objeto: string
    material: string
    destruido: boolean
    nomeSer: string
    _count: ArtefatoCountAggregateOutputType | null
    _min: ArtefatoMinAggregateOutputType | null
    _max: ArtefatoMaxAggregateOutputType | null
  }

  type GetArtefatoGroupByPayload<T extends ArtefatoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArtefatoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtefatoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtefatoGroupByOutputType[P]>
            : GetScalarType<T[P], ArtefatoGroupByOutputType[P]>
        }
      >
    >


  export type ArtefatoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome?: boolean
    objeto?: boolean
    material?: boolean
    destruido?: boolean
    nomeSer?: boolean
    ser?: boolean | SerDefaultArgs<ExtArgs>
    artefatos?: boolean | Artefato$artefatosArgs<ExtArgs>
    _count?: boolean | ArtefatoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artefato"]>

  export type ArtefatoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome?: boolean
    objeto?: boolean
    material?: boolean
    destruido?: boolean
    nomeSer?: boolean
    ser?: boolean | SerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artefato"]>

  export type ArtefatoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome?: boolean
    objeto?: boolean
    material?: boolean
    destruido?: boolean
    nomeSer?: boolean
    ser?: boolean | SerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artefato"]>

  export type ArtefatoSelectScalar = {
    nome?: boolean
    objeto?: boolean
    material?: boolean
    destruido?: boolean
    nomeSer?: boolean
  }

  export type ArtefatoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"nome" | "objeto" | "material" | "destruido" | "nomeSer", ExtArgs["result"]["artefato"]>
  export type ArtefatoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ser?: boolean | SerDefaultArgs<ExtArgs>
    artefatos?: boolean | Artefato$artefatosArgs<ExtArgs>
    _count?: boolean | ArtefatoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ArtefatoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ser?: boolean | SerDefaultArgs<ExtArgs>
  }
  export type ArtefatoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ser?: boolean | SerDefaultArgs<ExtArgs>
  }

  export type $ArtefatoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Artefato"
    objects: {
      ser: Prisma.$SerPayload<ExtArgs>
      artefatos: Prisma.$ArtefatoPoderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      nome: string
      objeto: string
      material: string
      destruido: boolean
      nomeSer: string
    }, ExtArgs["result"]["artefato"]>
    composites: {}
  }

  type ArtefatoGetPayload<S extends boolean | null | undefined | ArtefatoDefaultArgs> = $Result.GetResult<Prisma.$ArtefatoPayload, S>

  type ArtefatoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArtefatoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArtefatoCountAggregateInputType | true
    }

  export interface ArtefatoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Artefato'], meta: { name: 'Artefato' } }
    /**
     * Find zero or one Artefato that matches the filter.
     * @param {ArtefatoFindUniqueArgs} args - Arguments to find a Artefato
     * @example
     * // Get one Artefato
     * const artefato = await prisma.artefato.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArtefatoFindUniqueArgs>(args: SelectSubset<T, ArtefatoFindUniqueArgs<ExtArgs>>): Prisma__ArtefatoClient<$Result.GetResult<Prisma.$ArtefatoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Artefato that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArtefatoFindUniqueOrThrowArgs} args - Arguments to find a Artefato
     * @example
     * // Get one Artefato
     * const artefato = await prisma.artefato.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArtefatoFindUniqueOrThrowArgs>(args: SelectSubset<T, ArtefatoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArtefatoClient<$Result.GetResult<Prisma.$ArtefatoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Artefato that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtefatoFindFirstArgs} args - Arguments to find a Artefato
     * @example
     * // Get one Artefato
     * const artefato = await prisma.artefato.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArtefatoFindFirstArgs>(args?: SelectSubset<T, ArtefatoFindFirstArgs<ExtArgs>>): Prisma__ArtefatoClient<$Result.GetResult<Prisma.$ArtefatoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Artefato that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtefatoFindFirstOrThrowArgs} args - Arguments to find a Artefato
     * @example
     * // Get one Artefato
     * const artefato = await prisma.artefato.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArtefatoFindFirstOrThrowArgs>(args?: SelectSubset<T, ArtefatoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArtefatoClient<$Result.GetResult<Prisma.$ArtefatoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Artefatoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtefatoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Artefatoes
     * const artefatoes = await prisma.artefato.findMany()
     * 
     * // Get first 10 Artefatoes
     * const artefatoes = await prisma.artefato.findMany({ take: 10 })
     * 
     * // Only select the `nome`
     * const artefatoWithNomeOnly = await prisma.artefato.findMany({ select: { nome: true } })
     * 
     */
    findMany<T extends ArtefatoFindManyArgs>(args?: SelectSubset<T, ArtefatoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtefatoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Artefato.
     * @param {ArtefatoCreateArgs} args - Arguments to create a Artefato.
     * @example
     * // Create one Artefato
     * const Artefato = await prisma.artefato.create({
     *   data: {
     *     // ... data to create a Artefato
     *   }
     * })
     * 
     */
    create<T extends ArtefatoCreateArgs>(args: SelectSubset<T, ArtefatoCreateArgs<ExtArgs>>): Prisma__ArtefatoClient<$Result.GetResult<Prisma.$ArtefatoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Artefatoes.
     * @param {ArtefatoCreateManyArgs} args - Arguments to create many Artefatoes.
     * @example
     * // Create many Artefatoes
     * const artefato = await prisma.artefato.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArtefatoCreateManyArgs>(args?: SelectSubset<T, ArtefatoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Artefatoes and returns the data saved in the database.
     * @param {ArtefatoCreateManyAndReturnArgs} args - Arguments to create many Artefatoes.
     * @example
     * // Create many Artefatoes
     * const artefato = await prisma.artefato.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Artefatoes and only return the `nome`
     * const artefatoWithNomeOnly = await prisma.artefato.createManyAndReturn({
     *   select: { nome: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArtefatoCreateManyAndReturnArgs>(args?: SelectSubset<T, ArtefatoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtefatoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Artefato.
     * @param {ArtefatoDeleteArgs} args - Arguments to delete one Artefato.
     * @example
     * // Delete one Artefato
     * const Artefato = await prisma.artefato.delete({
     *   where: {
     *     // ... filter to delete one Artefato
     *   }
     * })
     * 
     */
    delete<T extends ArtefatoDeleteArgs>(args: SelectSubset<T, ArtefatoDeleteArgs<ExtArgs>>): Prisma__ArtefatoClient<$Result.GetResult<Prisma.$ArtefatoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Artefato.
     * @param {ArtefatoUpdateArgs} args - Arguments to update one Artefato.
     * @example
     * // Update one Artefato
     * const artefato = await prisma.artefato.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArtefatoUpdateArgs>(args: SelectSubset<T, ArtefatoUpdateArgs<ExtArgs>>): Prisma__ArtefatoClient<$Result.GetResult<Prisma.$ArtefatoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Artefatoes.
     * @param {ArtefatoDeleteManyArgs} args - Arguments to filter Artefatoes to delete.
     * @example
     * // Delete a few Artefatoes
     * const { count } = await prisma.artefato.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArtefatoDeleteManyArgs>(args?: SelectSubset<T, ArtefatoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artefatoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtefatoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Artefatoes
     * const artefato = await prisma.artefato.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArtefatoUpdateManyArgs>(args: SelectSubset<T, ArtefatoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artefatoes and returns the data updated in the database.
     * @param {ArtefatoUpdateManyAndReturnArgs} args - Arguments to update many Artefatoes.
     * @example
     * // Update many Artefatoes
     * const artefato = await prisma.artefato.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Artefatoes and only return the `nome`
     * const artefatoWithNomeOnly = await prisma.artefato.updateManyAndReturn({
     *   select: { nome: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArtefatoUpdateManyAndReturnArgs>(args: SelectSubset<T, ArtefatoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtefatoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Artefato.
     * @param {ArtefatoUpsertArgs} args - Arguments to update or create a Artefato.
     * @example
     * // Update or create a Artefato
     * const artefato = await prisma.artefato.upsert({
     *   create: {
     *     // ... data to create a Artefato
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Artefato we want to update
     *   }
     * })
     */
    upsert<T extends ArtefatoUpsertArgs>(args: SelectSubset<T, ArtefatoUpsertArgs<ExtArgs>>): Prisma__ArtefatoClient<$Result.GetResult<Prisma.$ArtefatoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Artefatoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtefatoCountArgs} args - Arguments to filter Artefatoes to count.
     * @example
     * // Count the number of Artefatoes
     * const count = await prisma.artefato.count({
     *   where: {
     *     // ... the filter for the Artefatoes we want to count
     *   }
     * })
    **/
    count<T extends ArtefatoCountArgs>(
      args?: Subset<T, ArtefatoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtefatoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Artefato.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtefatoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArtefatoAggregateArgs>(args: Subset<T, ArtefatoAggregateArgs>): Prisma.PrismaPromise<GetArtefatoAggregateType<T>>

    /**
     * Group by Artefato.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtefatoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArtefatoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArtefatoGroupByArgs['orderBy'] }
        : { orderBy?: ArtefatoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArtefatoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtefatoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Artefato model
   */
  readonly fields: ArtefatoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Artefato.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArtefatoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ser<T extends SerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SerDefaultArgs<ExtArgs>>): Prisma__SerClient<$Result.GetResult<Prisma.$SerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    artefatos<T extends Artefato$artefatosArgs<ExtArgs> = {}>(args?: Subset<T, Artefato$artefatosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtefatoPoderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Artefato model
   */
  interface ArtefatoFieldRefs {
    readonly nome: FieldRef<"Artefato", 'String'>
    readonly objeto: FieldRef<"Artefato", 'String'>
    readonly material: FieldRef<"Artefato", 'String'>
    readonly destruido: FieldRef<"Artefato", 'Boolean'>
    readonly nomeSer: FieldRef<"Artefato", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Artefato findUnique
   */
  export type ArtefatoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artefato
     */
    select?: ArtefatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artefato
     */
    omit?: ArtefatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtefatoInclude<ExtArgs> | null
    /**
     * Filter, which Artefato to fetch.
     */
    where: ArtefatoWhereUniqueInput
  }

  /**
   * Artefato findUniqueOrThrow
   */
  export type ArtefatoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artefato
     */
    select?: ArtefatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artefato
     */
    omit?: ArtefatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtefatoInclude<ExtArgs> | null
    /**
     * Filter, which Artefato to fetch.
     */
    where: ArtefatoWhereUniqueInput
  }

  /**
   * Artefato findFirst
   */
  export type ArtefatoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artefato
     */
    select?: ArtefatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artefato
     */
    omit?: ArtefatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtefatoInclude<ExtArgs> | null
    /**
     * Filter, which Artefato to fetch.
     */
    where?: ArtefatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artefatoes to fetch.
     */
    orderBy?: ArtefatoOrderByWithRelationInput | ArtefatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artefatoes.
     */
    cursor?: ArtefatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artefatoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artefatoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artefatoes.
     */
    distinct?: ArtefatoScalarFieldEnum | ArtefatoScalarFieldEnum[]
  }

  /**
   * Artefato findFirstOrThrow
   */
  export type ArtefatoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artefato
     */
    select?: ArtefatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artefato
     */
    omit?: ArtefatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtefatoInclude<ExtArgs> | null
    /**
     * Filter, which Artefato to fetch.
     */
    where?: ArtefatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artefatoes to fetch.
     */
    orderBy?: ArtefatoOrderByWithRelationInput | ArtefatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artefatoes.
     */
    cursor?: ArtefatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artefatoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artefatoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artefatoes.
     */
    distinct?: ArtefatoScalarFieldEnum | ArtefatoScalarFieldEnum[]
  }

  /**
   * Artefato findMany
   */
  export type ArtefatoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artefato
     */
    select?: ArtefatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artefato
     */
    omit?: ArtefatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtefatoInclude<ExtArgs> | null
    /**
     * Filter, which Artefatoes to fetch.
     */
    where?: ArtefatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artefatoes to fetch.
     */
    orderBy?: ArtefatoOrderByWithRelationInput | ArtefatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Artefatoes.
     */
    cursor?: ArtefatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artefatoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artefatoes.
     */
    skip?: number
    distinct?: ArtefatoScalarFieldEnum | ArtefatoScalarFieldEnum[]
  }

  /**
   * Artefato create
   */
  export type ArtefatoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artefato
     */
    select?: ArtefatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artefato
     */
    omit?: ArtefatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtefatoInclude<ExtArgs> | null
    /**
     * The data needed to create a Artefato.
     */
    data: XOR<ArtefatoCreateInput, ArtefatoUncheckedCreateInput>
  }

  /**
   * Artefato createMany
   */
  export type ArtefatoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Artefatoes.
     */
    data: ArtefatoCreateManyInput | ArtefatoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Artefato createManyAndReturn
   */
  export type ArtefatoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artefato
     */
    select?: ArtefatoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Artefato
     */
    omit?: ArtefatoOmit<ExtArgs> | null
    /**
     * The data used to create many Artefatoes.
     */
    data: ArtefatoCreateManyInput | ArtefatoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtefatoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Artefato update
   */
  export type ArtefatoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artefato
     */
    select?: ArtefatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artefato
     */
    omit?: ArtefatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtefatoInclude<ExtArgs> | null
    /**
     * The data needed to update a Artefato.
     */
    data: XOR<ArtefatoUpdateInput, ArtefatoUncheckedUpdateInput>
    /**
     * Choose, which Artefato to update.
     */
    where: ArtefatoWhereUniqueInput
  }

  /**
   * Artefato updateMany
   */
  export type ArtefatoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Artefatoes.
     */
    data: XOR<ArtefatoUpdateManyMutationInput, ArtefatoUncheckedUpdateManyInput>
    /**
     * Filter which Artefatoes to update
     */
    where?: ArtefatoWhereInput
    /**
     * Limit how many Artefatoes to update.
     */
    limit?: number
  }

  /**
   * Artefato updateManyAndReturn
   */
  export type ArtefatoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artefato
     */
    select?: ArtefatoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Artefato
     */
    omit?: ArtefatoOmit<ExtArgs> | null
    /**
     * The data used to update Artefatoes.
     */
    data: XOR<ArtefatoUpdateManyMutationInput, ArtefatoUncheckedUpdateManyInput>
    /**
     * Filter which Artefatoes to update
     */
    where?: ArtefatoWhereInput
    /**
     * Limit how many Artefatoes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtefatoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Artefato upsert
   */
  export type ArtefatoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artefato
     */
    select?: ArtefatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artefato
     */
    omit?: ArtefatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtefatoInclude<ExtArgs> | null
    /**
     * The filter to search for the Artefato to update in case it exists.
     */
    where: ArtefatoWhereUniqueInput
    /**
     * In case the Artefato found by the `where` argument doesn't exist, create a new Artefato with this data.
     */
    create: XOR<ArtefatoCreateInput, ArtefatoUncheckedCreateInput>
    /**
     * In case the Artefato was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArtefatoUpdateInput, ArtefatoUncheckedUpdateInput>
  }

  /**
   * Artefato delete
   */
  export type ArtefatoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artefato
     */
    select?: ArtefatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artefato
     */
    omit?: ArtefatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtefatoInclude<ExtArgs> | null
    /**
     * Filter which Artefato to delete.
     */
    where: ArtefatoWhereUniqueInput
  }

  /**
   * Artefato deleteMany
   */
  export type ArtefatoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artefatoes to delete
     */
    where?: ArtefatoWhereInput
    /**
     * Limit how many Artefatoes to delete.
     */
    limit?: number
  }

  /**
   * Artefato.artefatos
   */
  export type Artefato$artefatosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtefatoPoder
     */
    select?: ArtefatoPoderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtefatoPoder
     */
    omit?: ArtefatoPoderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtefatoPoderInclude<ExtArgs> | null
    where?: ArtefatoPoderWhereInput
    orderBy?: ArtefatoPoderOrderByWithRelationInput | ArtefatoPoderOrderByWithRelationInput[]
    cursor?: ArtefatoPoderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArtefatoPoderScalarFieldEnum | ArtefatoPoderScalarFieldEnum[]
  }

  /**
   * Artefato without action
   */
  export type ArtefatoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artefato
     */
    select?: ArtefatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artefato
     */
    omit?: ArtefatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtefatoInclude<ExtArgs> | null
  }


  /**
   * Model SerSer
   */

  export type AggregateSerSer = {
    _count: SerSerCountAggregateOutputType | null
    _min: SerSerMinAggregateOutputType | null
    _max: SerSerMaxAggregateOutputType | null
  }

  export type SerSerMinAggregateOutputType = {
    nomeResponsavel: string | null
    nomeFilho: string | null
  }

  export type SerSerMaxAggregateOutputType = {
    nomeResponsavel: string | null
    nomeFilho: string | null
  }

  export type SerSerCountAggregateOutputType = {
    nomeResponsavel: number
    nomeFilho: number
    _all: number
  }


  export type SerSerMinAggregateInputType = {
    nomeResponsavel?: true
    nomeFilho?: true
  }

  export type SerSerMaxAggregateInputType = {
    nomeResponsavel?: true
    nomeFilho?: true
  }

  export type SerSerCountAggregateInputType = {
    nomeResponsavel?: true
    nomeFilho?: true
    _all?: true
  }

  export type SerSerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SerSer to aggregate.
     */
    where?: SerSerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SerSers to fetch.
     */
    orderBy?: SerSerOrderByWithRelationInput | SerSerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SerSerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SerSers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SerSers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SerSers
    **/
    _count?: true | SerSerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SerSerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SerSerMaxAggregateInputType
  }

  export type GetSerSerAggregateType<T extends SerSerAggregateArgs> = {
        [P in keyof T & keyof AggregateSerSer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSerSer[P]>
      : GetScalarType<T[P], AggregateSerSer[P]>
  }




  export type SerSerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SerSerWhereInput
    orderBy?: SerSerOrderByWithAggregationInput | SerSerOrderByWithAggregationInput[]
    by: SerSerScalarFieldEnum[] | SerSerScalarFieldEnum
    having?: SerSerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SerSerCountAggregateInputType | true
    _min?: SerSerMinAggregateInputType
    _max?: SerSerMaxAggregateInputType
  }

  export type SerSerGroupByOutputType = {
    nomeResponsavel: string
    nomeFilho: string
    _count: SerSerCountAggregateOutputType | null
    _min: SerSerMinAggregateOutputType | null
    _max: SerSerMaxAggregateOutputType | null
  }

  type GetSerSerGroupByPayload<T extends SerSerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SerSerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SerSerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SerSerGroupByOutputType[P]>
            : GetScalarType<T[P], SerSerGroupByOutputType[P]>
        }
      >
    >


  export type SerSerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nomeResponsavel?: boolean
    nomeFilho?: boolean
    responsavel?: boolean | SerDefaultArgs<ExtArgs>
    filho?: boolean | SerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serSer"]>

  export type SerSerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nomeResponsavel?: boolean
    nomeFilho?: boolean
    responsavel?: boolean | SerDefaultArgs<ExtArgs>
    filho?: boolean | SerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serSer"]>

  export type SerSerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nomeResponsavel?: boolean
    nomeFilho?: boolean
    responsavel?: boolean | SerDefaultArgs<ExtArgs>
    filho?: boolean | SerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serSer"]>

  export type SerSerSelectScalar = {
    nomeResponsavel?: boolean
    nomeFilho?: boolean
  }

  export type SerSerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"nomeResponsavel" | "nomeFilho", ExtArgs["result"]["serSer"]>
  export type SerSerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responsavel?: boolean | SerDefaultArgs<ExtArgs>
    filho?: boolean | SerDefaultArgs<ExtArgs>
  }
  export type SerSerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responsavel?: boolean | SerDefaultArgs<ExtArgs>
    filho?: boolean | SerDefaultArgs<ExtArgs>
  }
  export type SerSerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responsavel?: boolean | SerDefaultArgs<ExtArgs>
    filho?: boolean | SerDefaultArgs<ExtArgs>
  }

  export type $SerSerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SerSer"
    objects: {
      responsavel: Prisma.$SerPayload<ExtArgs>
      filho: Prisma.$SerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      nomeResponsavel: string
      nomeFilho: string
    }, ExtArgs["result"]["serSer"]>
    composites: {}
  }

  type SerSerGetPayload<S extends boolean | null | undefined | SerSerDefaultArgs> = $Result.GetResult<Prisma.$SerSerPayload, S>

  type SerSerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SerSerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SerSerCountAggregateInputType | true
    }

  export interface SerSerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SerSer'], meta: { name: 'SerSer' } }
    /**
     * Find zero or one SerSer that matches the filter.
     * @param {SerSerFindUniqueArgs} args - Arguments to find a SerSer
     * @example
     * // Get one SerSer
     * const serSer = await prisma.serSer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SerSerFindUniqueArgs>(args: SelectSubset<T, SerSerFindUniqueArgs<ExtArgs>>): Prisma__SerSerClient<$Result.GetResult<Prisma.$SerSerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SerSer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SerSerFindUniqueOrThrowArgs} args - Arguments to find a SerSer
     * @example
     * // Get one SerSer
     * const serSer = await prisma.serSer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SerSerFindUniqueOrThrowArgs>(args: SelectSubset<T, SerSerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SerSerClient<$Result.GetResult<Prisma.$SerSerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SerSer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SerSerFindFirstArgs} args - Arguments to find a SerSer
     * @example
     * // Get one SerSer
     * const serSer = await prisma.serSer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SerSerFindFirstArgs>(args?: SelectSubset<T, SerSerFindFirstArgs<ExtArgs>>): Prisma__SerSerClient<$Result.GetResult<Prisma.$SerSerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SerSer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SerSerFindFirstOrThrowArgs} args - Arguments to find a SerSer
     * @example
     * // Get one SerSer
     * const serSer = await prisma.serSer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SerSerFindFirstOrThrowArgs>(args?: SelectSubset<T, SerSerFindFirstOrThrowArgs<ExtArgs>>): Prisma__SerSerClient<$Result.GetResult<Prisma.$SerSerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SerSers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SerSerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SerSers
     * const serSers = await prisma.serSer.findMany()
     * 
     * // Get first 10 SerSers
     * const serSers = await prisma.serSer.findMany({ take: 10 })
     * 
     * // Only select the `nomeResponsavel`
     * const serSerWithNomeResponsavelOnly = await prisma.serSer.findMany({ select: { nomeResponsavel: true } })
     * 
     */
    findMany<T extends SerSerFindManyArgs>(args?: SelectSubset<T, SerSerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SerSerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SerSer.
     * @param {SerSerCreateArgs} args - Arguments to create a SerSer.
     * @example
     * // Create one SerSer
     * const SerSer = await prisma.serSer.create({
     *   data: {
     *     // ... data to create a SerSer
     *   }
     * })
     * 
     */
    create<T extends SerSerCreateArgs>(args: SelectSubset<T, SerSerCreateArgs<ExtArgs>>): Prisma__SerSerClient<$Result.GetResult<Prisma.$SerSerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SerSers.
     * @param {SerSerCreateManyArgs} args - Arguments to create many SerSers.
     * @example
     * // Create many SerSers
     * const serSer = await prisma.serSer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SerSerCreateManyArgs>(args?: SelectSubset<T, SerSerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SerSers and returns the data saved in the database.
     * @param {SerSerCreateManyAndReturnArgs} args - Arguments to create many SerSers.
     * @example
     * // Create many SerSers
     * const serSer = await prisma.serSer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SerSers and only return the `nomeResponsavel`
     * const serSerWithNomeResponsavelOnly = await prisma.serSer.createManyAndReturn({
     *   select: { nomeResponsavel: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SerSerCreateManyAndReturnArgs>(args?: SelectSubset<T, SerSerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SerSerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SerSer.
     * @param {SerSerDeleteArgs} args - Arguments to delete one SerSer.
     * @example
     * // Delete one SerSer
     * const SerSer = await prisma.serSer.delete({
     *   where: {
     *     // ... filter to delete one SerSer
     *   }
     * })
     * 
     */
    delete<T extends SerSerDeleteArgs>(args: SelectSubset<T, SerSerDeleteArgs<ExtArgs>>): Prisma__SerSerClient<$Result.GetResult<Prisma.$SerSerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SerSer.
     * @param {SerSerUpdateArgs} args - Arguments to update one SerSer.
     * @example
     * // Update one SerSer
     * const serSer = await prisma.serSer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SerSerUpdateArgs>(args: SelectSubset<T, SerSerUpdateArgs<ExtArgs>>): Prisma__SerSerClient<$Result.GetResult<Prisma.$SerSerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SerSers.
     * @param {SerSerDeleteManyArgs} args - Arguments to filter SerSers to delete.
     * @example
     * // Delete a few SerSers
     * const { count } = await prisma.serSer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SerSerDeleteManyArgs>(args?: SelectSubset<T, SerSerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SerSers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SerSerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SerSers
     * const serSer = await prisma.serSer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SerSerUpdateManyArgs>(args: SelectSubset<T, SerSerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SerSers and returns the data updated in the database.
     * @param {SerSerUpdateManyAndReturnArgs} args - Arguments to update many SerSers.
     * @example
     * // Update many SerSers
     * const serSer = await prisma.serSer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SerSers and only return the `nomeResponsavel`
     * const serSerWithNomeResponsavelOnly = await prisma.serSer.updateManyAndReturn({
     *   select: { nomeResponsavel: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SerSerUpdateManyAndReturnArgs>(args: SelectSubset<T, SerSerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SerSerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SerSer.
     * @param {SerSerUpsertArgs} args - Arguments to update or create a SerSer.
     * @example
     * // Update or create a SerSer
     * const serSer = await prisma.serSer.upsert({
     *   create: {
     *     // ... data to create a SerSer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SerSer we want to update
     *   }
     * })
     */
    upsert<T extends SerSerUpsertArgs>(args: SelectSubset<T, SerSerUpsertArgs<ExtArgs>>): Prisma__SerSerClient<$Result.GetResult<Prisma.$SerSerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SerSers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SerSerCountArgs} args - Arguments to filter SerSers to count.
     * @example
     * // Count the number of SerSers
     * const count = await prisma.serSer.count({
     *   where: {
     *     // ... the filter for the SerSers we want to count
     *   }
     * })
    **/
    count<T extends SerSerCountArgs>(
      args?: Subset<T, SerSerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SerSerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SerSer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SerSerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SerSerAggregateArgs>(args: Subset<T, SerSerAggregateArgs>): Prisma.PrismaPromise<GetSerSerAggregateType<T>>

    /**
     * Group by SerSer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SerSerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SerSerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SerSerGroupByArgs['orderBy'] }
        : { orderBy?: SerSerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SerSerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSerSerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SerSer model
   */
  readonly fields: SerSerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SerSer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SerSerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    responsavel<T extends SerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SerDefaultArgs<ExtArgs>>): Prisma__SerClient<$Result.GetResult<Prisma.$SerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    filho<T extends SerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SerDefaultArgs<ExtArgs>>): Prisma__SerClient<$Result.GetResult<Prisma.$SerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SerSer model
   */
  interface SerSerFieldRefs {
    readonly nomeResponsavel: FieldRef<"SerSer", 'String'>
    readonly nomeFilho: FieldRef<"SerSer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SerSer findUnique
   */
  export type SerSerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SerSer
     */
    select?: SerSerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SerSer
     */
    omit?: SerSerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SerSerInclude<ExtArgs> | null
    /**
     * Filter, which SerSer to fetch.
     */
    where: SerSerWhereUniqueInput
  }

  /**
   * SerSer findUniqueOrThrow
   */
  export type SerSerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SerSer
     */
    select?: SerSerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SerSer
     */
    omit?: SerSerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SerSerInclude<ExtArgs> | null
    /**
     * Filter, which SerSer to fetch.
     */
    where: SerSerWhereUniqueInput
  }

  /**
   * SerSer findFirst
   */
  export type SerSerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SerSer
     */
    select?: SerSerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SerSer
     */
    omit?: SerSerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SerSerInclude<ExtArgs> | null
    /**
     * Filter, which SerSer to fetch.
     */
    where?: SerSerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SerSers to fetch.
     */
    orderBy?: SerSerOrderByWithRelationInput | SerSerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SerSers.
     */
    cursor?: SerSerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SerSers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SerSers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SerSers.
     */
    distinct?: SerSerScalarFieldEnum | SerSerScalarFieldEnum[]
  }

  /**
   * SerSer findFirstOrThrow
   */
  export type SerSerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SerSer
     */
    select?: SerSerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SerSer
     */
    omit?: SerSerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SerSerInclude<ExtArgs> | null
    /**
     * Filter, which SerSer to fetch.
     */
    where?: SerSerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SerSers to fetch.
     */
    orderBy?: SerSerOrderByWithRelationInput | SerSerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SerSers.
     */
    cursor?: SerSerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SerSers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SerSers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SerSers.
     */
    distinct?: SerSerScalarFieldEnum | SerSerScalarFieldEnum[]
  }

  /**
   * SerSer findMany
   */
  export type SerSerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SerSer
     */
    select?: SerSerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SerSer
     */
    omit?: SerSerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SerSerInclude<ExtArgs> | null
    /**
     * Filter, which SerSers to fetch.
     */
    where?: SerSerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SerSers to fetch.
     */
    orderBy?: SerSerOrderByWithRelationInput | SerSerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SerSers.
     */
    cursor?: SerSerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SerSers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SerSers.
     */
    skip?: number
    distinct?: SerSerScalarFieldEnum | SerSerScalarFieldEnum[]
  }

  /**
   * SerSer create
   */
  export type SerSerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SerSer
     */
    select?: SerSerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SerSer
     */
    omit?: SerSerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SerSerInclude<ExtArgs> | null
    /**
     * The data needed to create a SerSer.
     */
    data: XOR<SerSerCreateInput, SerSerUncheckedCreateInput>
  }

  /**
   * SerSer createMany
   */
  export type SerSerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SerSers.
     */
    data: SerSerCreateManyInput | SerSerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SerSer createManyAndReturn
   */
  export type SerSerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SerSer
     */
    select?: SerSerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SerSer
     */
    omit?: SerSerOmit<ExtArgs> | null
    /**
     * The data used to create many SerSers.
     */
    data: SerSerCreateManyInput | SerSerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SerSerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SerSer update
   */
  export type SerSerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SerSer
     */
    select?: SerSerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SerSer
     */
    omit?: SerSerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SerSerInclude<ExtArgs> | null
    /**
     * The data needed to update a SerSer.
     */
    data: XOR<SerSerUpdateInput, SerSerUncheckedUpdateInput>
    /**
     * Choose, which SerSer to update.
     */
    where: SerSerWhereUniqueInput
  }

  /**
   * SerSer updateMany
   */
  export type SerSerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SerSers.
     */
    data: XOR<SerSerUpdateManyMutationInput, SerSerUncheckedUpdateManyInput>
    /**
     * Filter which SerSers to update
     */
    where?: SerSerWhereInput
    /**
     * Limit how many SerSers to update.
     */
    limit?: number
  }

  /**
   * SerSer updateManyAndReturn
   */
  export type SerSerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SerSer
     */
    select?: SerSerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SerSer
     */
    omit?: SerSerOmit<ExtArgs> | null
    /**
     * The data used to update SerSers.
     */
    data: XOR<SerSerUpdateManyMutationInput, SerSerUncheckedUpdateManyInput>
    /**
     * Filter which SerSers to update
     */
    where?: SerSerWhereInput
    /**
     * Limit how many SerSers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SerSerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SerSer upsert
   */
  export type SerSerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SerSer
     */
    select?: SerSerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SerSer
     */
    omit?: SerSerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SerSerInclude<ExtArgs> | null
    /**
     * The filter to search for the SerSer to update in case it exists.
     */
    where: SerSerWhereUniqueInput
    /**
     * In case the SerSer found by the `where` argument doesn't exist, create a new SerSer with this data.
     */
    create: XOR<SerSerCreateInput, SerSerUncheckedCreateInput>
    /**
     * In case the SerSer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SerSerUpdateInput, SerSerUncheckedUpdateInput>
  }

  /**
   * SerSer delete
   */
  export type SerSerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SerSer
     */
    select?: SerSerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SerSer
     */
    omit?: SerSerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SerSerInclude<ExtArgs> | null
    /**
     * Filter which SerSer to delete.
     */
    where: SerSerWhereUniqueInput
  }

  /**
   * SerSer deleteMany
   */
  export type SerSerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SerSers to delete
     */
    where?: SerSerWhereInput
    /**
     * Limit how many SerSers to delete.
     */
    limit?: number
  }

  /**
   * SerSer without action
   */
  export type SerSerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SerSer
     */
    select?: SerSerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SerSer
     */
    omit?: SerSerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SerSerInclude<ExtArgs> | null
  }


  /**
   * Model Ser
   */

  export type AggregateSer = {
    _count: SerCountAggregateOutputType | null
    _min: SerMinAggregateOutputType | null
    _max: SerMaxAggregateOutputType | null
  }

  export type SerMinAggregateOutputType = {
    nome: string | null
    sexo: string | null
    morto: boolean | null
    tipo: $Enums.TipoSer | null
    fraqueza: string | null
    designacao: string | null
    restituirVita: boolean | null
    nascimento: Date | null
    raca: string | null
    profissao: string | null
    nomeMortal: string | null
  }

  export type SerMaxAggregateOutputType = {
    nome: string | null
    sexo: string | null
    morto: boolean | null
    tipo: $Enums.TipoSer | null
    fraqueza: string | null
    designacao: string | null
    restituirVita: boolean | null
    nascimento: Date | null
    raca: string | null
    profissao: string | null
    nomeMortal: string | null
  }

  export type SerCountAggregateOutputType = {
    nome: number
    sexo: number
    morto: number
    tipo: number
    fraqueza: number
    designacao: number
    restituirVita: number
    nascimento: number
    raca: number
    profissao: number
    nomeMortal: number
    _all: number
  }


  export type SerMinAggregateInputType = {
    nome?: true
    sexo?: true
    morto?: true
    tipo?: true
    fraqueza?: true
    designacao?: true
    restituirVita?: true
    nascimento?: true
    raca?: true
    profissao?: true
    nomeMortal?: true
  }

  export type SerMaxAggregateInputType = {
    nome?: true
    sexo?: true
    morto?: true
    tipo?: true
    fraqueza?: true
    designacao?: true
    restituirVita?: true
    nascimento?: true
    raca?: true
    profissao?: true
    nomeMortal?: true
  }

  export type SerCountAggregateInputType = {
    nome?: true
    sexo?: true
    morto?: true
    tipo?: true
    fraqueza?: true
    designacao?: true
    restituirVita?: true
    nascimento?: true
    raca?: true
    profissao?: true
    nomeMortal?: true
    _all?: true
  }

  export type SerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ser to aggregate.
     */
    where?: SerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sers to fetch.
     */
    orderBy?: SerOrderByWithRelationInput | SerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sers
    **/
    _count?: true | SerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SerMaxAggregateInputType
  }

  export type GetSerAggregateType<T extends SerAggregateArgs> = {
        [P in keyof T & keyof AggregateSer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSer[P]>
      : GetScalarType<T[P], AggregateSer[P]>
  }




  export type SerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SerWhereInput
    orderBy?: SerOrderByWithAggregationInput | SerOrderByWithAggregationInput[]
    by: SerScalarFieldEnum[] | SerScalarFieldEnum
    having?: SerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SerCountAggregateInputType | true
    _min?: SerMinAggregateInputType
    _max?: SerMaxAggregateInputType
  }

  export type SerGroupByOutputType = {
    nome: string
    sexo: string
    morto: boolean
    tipo: $Enums.TipoSer
    fraqueza: string | null
    designacao: string | null
    restituirVita: boolean | null
    nascimento: Date | null
    raca: string | null
    profissao: string | null
    nomeMortal: string | null
    _count: SerCountAggregateOutputType | null
    _min: SerMinAggregateOutputType | null
    _max: SerMaxAggregateOutputType | null
  }

  type GetSerGroupByPayload<T extends SerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SerGroupByOutputType[P]>
            : GetScalarType<T[P], SerGroupByOutputType[P]>
        }
      >
    >


  export type SerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome?: boolean
    sexo?: boolean
    morto?: boolean
    tipo?: boolean
    fraqueza?: boolean
    designacao?: boolean
    restituirVita?: boolean
    nascimento?: boolean
    raca?: boolean
    profissao?: boolean
    nomeMortal?: boolean
    poderes?: boolean | Ser$poderesArgs<ExtArgs>
    artefatos?: boolean | Ser$artefatosArgs<ExtArgs>
    responsaveis?: boolean | Ser$responsaveisArgs<ExtArgs>
    filhos?: boolean | Ser$filhosArgs<ExtArgs>
    hospedeiro?: boolean | Ser$hospedeiroArgs<ExtArgs>
    divino?: boolean | Ser$divinoArgs<ExtArgs>
    _count?: boolean | SerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ser"]>

  export type SerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome?: boolean
    sexo?: boolean
    morto?: boolean
    tipo?: boolean
    fraqueza?: boolean
    designacao?: boolean
    restituirVita?: boolean
    nascimento?: boolean
    raca?: boolean
    profissao?: boolean
    nomeMortal?: boolean
    hospedeiro?: boolean | Ser$hospedeiroArgs<ExtArgs>
  }, ExtArgs["result"]["ser"]>

  export type SerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome?: boolean
    sexo?: boolean
    morto?: boolean
    tipo?: boolean
    fraqueza?: boolean
    designacao?: boolean
    restituirVita?: boolean
    nascimento?: boolean
    raca?: boolean
    profissao?: boolean
    nomeMortal?: boolean
    hospedeiro?: boolean | Ser$hospedeiroArgs<ExtArgs>
  }, ExtArgs["result"]["ser"]>

  export type SerSelectScalar = {
    nome?: boolean
    sexo?: boolean
    morto?: boolean
    tipo?: boolean
    fraqueza?: boolean
    designacao?: boolean
    restituirVita?: boolean
    nascimento?: boolean
    raca?: boolean
    profissao?: boolean
    nomeMortal?: boolean
  }

  export type SerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"nome" | "sexo" | "morto" | "tipo" | "fraqueza" | "designacao" | "restituirVita" | "nascimento" | "raca" | "profissao" | "nomeMortal", ExtArgs["result"]["ser"]>
  export type SerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poderes?: boolean | Ser$poderesArgs<ExtArgs>
    artefatos?: boolean | Ser$artefatosArgs<ExtArgs>
    responsaveis?: boolean | Ser$responsaveisArgs<ExtArgs>
    filhos?: boolean | Ser$filhosArgs<ExtArgs>
    hospedeiro?: boolean | Ser$hospedeiroArgs<ExtArgs>
    divino?: boolean | Ser$divinoArgs<ExtArgs>
    _count?: boolean | SerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hospedeiro?: boolean | Ser$hospedeiroArgs<ExtArgs>
  }
  export type SerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hospedeiro?: boolean | Ser$hospedeiroArgs<ExtArgs>
  }

  export type $SerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ser"
    objects: {
      poderes: Prisma.$PoderDivindadePayload<ExtArgs>[]
      artefatos: Prisma.$ArtefatoPayload<ExtArgs>[]
      responsaveis: Prisma.$SerSerPayload<ExtArgs>[]
      filhos: Prisma.$SerSerPayload<ExtArgs>[]
      hospedeiro: Prisma.$SerPayload<ExtArgs> | null
      divino: Prisma.$SerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      nome: string
      sexo: string
      morto: boolean
      tipo: $Enums.TipoSer
      fraqueza: string | null
      designacao: string | null
      restituirVita: boolean | null
      nascimento: Date | null
      raca: string | null
      profissao: string | null
      nomeMortal: string | null
    }, ExtArgs["result"]["ser"]>
    composites: {}
  }

  type SerGetPayload<S extends boolean | null | undefined | SerDefaultArgs> = $Result.GetResult<Prisma.$SerPayload, S>

  type SerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SerCountAggregateInputType | true
    }

  export interface SerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ser'], meta: { name: 'Ser' } }
    /**
     * Find zero or one Ser that matches the filter.
     * @param {SerFindUniqueArgs} args - Arguments to find a Ser
     * @example
     * // Get one Ser
     * const ser = await prisma.ser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SerFindUniqueArgs>(args: SelectSubset<T, SerFindUniqueArgs<ExtArgs>>): Prisma__SerClient<$Result.GetResult<Prisma.$SerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SerFindUniqueOrThrowArgs} args - Arguments to find a Ser
     * @example
     * // Get one Ser
     * const ser = await prisma.ser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SerFindUniqueOrThrowArgs>(args: SelectSubset<T, SerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SerClient<$Result.GetResult<Prisma.$SerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SerFindFirstArgs} args - Arguments to find a Ser
     * @example
     * // Get one Ser
     * const ser = await prisma.ser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SerFindFirstArgs>(args?: SelectSubset<T, SerFindFirstArgs<ExtArgs>>): Prisma__SerClient<$Result.GetResult<Prisma.$SerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SerFindFirstOrThrowArgs} args - Arguments to find a Ser
     * @example
     * // Get one Ser
     * const ser = await prisma.ser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SerFindFirstOrThrowArgs>(args?: SelectSubset<T, SerFindFirstOrThrowArgs<ExtArgs>>): Prisma__SerClient<$Result.GetResult<Prisma.$SerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sers
     * const sers = await prisma.ser.findMany()
     * 
     * // Get first 10 Sers
     * const sers = await prisma.ser.findMany({ take: 10 })
     * 
     * // Only select the `nome`
     * const serWithNomeOnly = await prisma.ser.findMany({ select: { nome: true } })
     * 
     */
    findMany<T extends SerFindManyArgs>(args?: SelectSubset<T, SerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ser.
     * @param {SerCreateArgs} args - Arguments to create a Ser.
     * @example
     * // Create one Ser
     * const Ser = await prisma.ser.create({
     *   data: {
     *     // ... data to create a Ser
     *   }
     * })
     * 
     */
    create<T extends SerCreateArgs>(args: SelectSubset<T, SerCreateArgs<ExtArgs>>): Prisma__SerClient<$Result.GetResult<Prisma.$SerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sers.
     * @param {SerCreateManyArgs} args - Arguments to create many Sers.
     * @example
     * // Create many Sers
     * const ser = await prisma.ser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SerCreateManyArgs>(args?: SelectSubset<T, SerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sers and returns the data saved in the database.
     * @param {SerCreateManyAndReturnArgs} args - Arguments to create many Sers.
     * @example
     * // Create many Sers
     * const ser = await prisma.ser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sers and only return the `nome`
     * const serWithNomeOnly = await prisma.ser.createManyAndReturn({
     *   select: { nome: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SerCreateManyAndReturnArgs>(args?: SelectSubset<T, SerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ser.
     * @param {SerDeleteArgs} args - Arguments to delete one Ser.
     * @example
     * // Delete one Ser
     * const Ser = await prisma.ser.delete({
     *   where: {
     *     // ... filter to delete one Ser
     *   }
     * })
     * 
     */
    delete<T extends SerDeleteArgs>(args: SelectSubset<T, SerDeleteArgs<ExtArgs>>): Prisma__SerClient<$Result.GetResult<Prisma.$SerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ser.
     * @param {SerUpdateArgs} args - Arguments to update one Ser.
     * @example
     * // Update one Ser
     * const ser = await prisma.ser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SerUpdateArgs>(args: SelectSubset<T, SerUpdateArgs<ExtArgs>>): Prisma__SerClient<$Result.GetResult<Prisma.$SerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sers.
     * @param {SerDeleteManyArgs} args - Arguments to filter Sers to delete.
     * @example
     * // Delete a few Sers
     * const { count } = await prisma.ser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SerDeleteManyArgs>(args?: SelectSubset<T, SerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sers
     * const ser = await prisma.ser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SerUpdateManyArgs>(args: SelectSubset<T, SerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sers and returns the data updated in the database.
     * @param {SerUpdateManyAndReturnArgs} args - Arguments to update many Sers.
     * @example
     * // Update many Sers
     * const ser = await prisma.ser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sers and only return the `nome`
     * const serWithNomeOnly = await prisma.ser.updateManyAndReturn({
     *   select: { nome: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SerUpdateManyAndReturnArgs>(args: SelectSubset<T, SerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ser.
     * @param {SerUpsertArgs} args - Arguments to update or create a Ser.
     * @example
     * // Update or create a Ser
     * const ser = await prisma.ser.upsert({
     *   create: {
     *     // ... data to create a Ser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ser we want to update
     *   }
     * })
     */
    upsert<T extends SerUpsertArgs>(args: SelectSubset<T, SerUpsertArgs<ExtArgs>>): Prisma__SerClient<$Result.GetResult<Prisma.$SerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SerCountArgs} args - Arguments to filter Sers to count.
     * @example
     * // Count the number of Sers
     * const count = await prisma.ser.count({
     *   where: {
     *     // ... the filter for the Sers we want to count
     *   }
     * })
    **/
    count<T extends SerCountArgs>(
      args?: Subset<T, SerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SerAggregateArgs>(args: Subset<T, SerAggregateArgs>): Prisma.PrismaPromise<GetSerAggregateType<T>>

    /**
     * Group by Ser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SerGroupByArgs['orderBy'] }
        : { orderBy?: SerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ser model
   */
  readonly fields: SerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    poderes<T extends Ser$poderesArgs<ExtArgs> = {}>(args?: Subset<T, Ser$poderesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoderDivindadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    artefatos<T extends Ser$artefatosArgs<ExtArgs> = {}>(args?: Subset<T, Ser$artefatosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtefatoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    responsaveis<T extends Ser$responsaveisArgs<ExtArgs> = {}>(args?: Subset<T, Ser$responsaveisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SerSerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    filhos<T extends Ser$filhosArgs<ExtArgs> = {}>(args?: Subset<T, Ser$filhosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SerSerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    hospedeiro<T extends Ser$hospedeiroArgs<ExtArgs> = {}>(args?: Subset<T, Ser$hospedeiroArgs<ExtArgs>>): Prisma__SerClient<$Result.GetResult<Prisma.$SerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    divino<T extends Ser$divinoArgs<ExtArgs> = {}>(args?: Subset<T, Ser$divinoArgs<ExtArgs>>): Prisma__SerClient<$Result.GetResult<Prisma.$SerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ser model
   */
  interface SerFieldRefs {
    readonly nome: FieldRef<"Ser", 'String'>
    readonly sexo: FieldRef<"Ser", 'String'>
    readonly morto: FieldRef<"Ser", 'Boolean'>
    readonly tipo: FieldRef<"Ser", 'TipoSer'>
    readonly fraqueza: FieldRef<"Ser", 'String'>
    readonly designacao: FieldRef<"Ser", 'String'>
    readonly restituirVita: FieldRef<"Ser", 'Boolean'>
    readonly nascimento: FieldRef<"Ser", 'DateTime'>
    readonly raca: FieldRef<"Ser", 'String'>
    readonly profissao: FieldRef<"Ser", 'String'>
    readonly nomeMortal: FieldRef<"Ser", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Ser findUnique
   */
  export type SerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ser
     */
    select?: SerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ser
     */
    omit?: SerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SerInclude<ExtArgs> | null
    /**
     * Filter, which Ser to fetch.
     */
    where: SerWhereUniqueInput
  }

  /**
   * Ser findUniqueOrThrow
   */
  export type SerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ser
     */
    select?: SerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ser
     */
    omit?: SerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SerInclude<ExtArgs> | null
    /**
     * Filter, which Ser to fetch.
     */
    where: SerWhereUniqueInput
  }

  /**
   * Ser findFirst
   */
  export type SerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ser
     */
    select?: SerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ser
     */
    omit?: SerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SerInclude<ExtArgs> | null
    /**
     * Filter, which Ser to fetch.
     */
    where?: SerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sers to fetch.
     */
    orderBy?: SerOrderByWithRelationInput | SerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sers.
     */
    cursor?: SerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sers.
     */
    distinct?: SerScalarFieldEnum | SerScalarFieldEnum[]
  }

  /**
   * Ser findFirstOrThrow
   */
  export type SerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ser
     */
    select?: SerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ser
     */
    omit?: SerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SerInclude<ExtArgs> | null
    /**
     * Filter, which Ser to fetch.
     */
    where?: SerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sers to fetch.
     */
    orderBy?: SerOrderByWithRelationInput | SerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sers.
     */
    cursor?: SerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sers.
     */
    distinct?: SerScalarFieldEnum | SerScalarFieldEnum[]
  }

  /**
   * Ser findMany
   */
  export type SerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ser
     */
    select?: SerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ser
     */
    omit?: SerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SerInclude<ExtArgs> | null
    /**
     * Filter, which Sers to fetch.
     */
    where?: SerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sers to fetch.
     */
    orderBy?: SerOrderByWithRelationInput | SerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sers.
     */
    cursor?: SerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sers.
     */
    skip?: number
    distinct?: SerScalarFieldEnum | SerScalarFieldEnum[]
  }

  /**
   * Ser create
   */
  export type SerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ser
     */
    select?: SerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ser
     */
    omit?: SerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SerInclude<ExtArgs> | null
    /**
     * The data needed to create a Ser.
     */
    data: XOR<SerCreateInput, SerUncheckedCreateInput>
  }

  /**
   * Ser createMany
   */
  export type SerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sers.
     */
    data: SerCreateManyInput | SerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ser createManyAndReturn
   */
  export type SerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ser
     */
    select?: SerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ser
     */
    omit?: SerOmit<ExtArgs> | null
    /**
     * The data used to create many Sers.
     */
    data: SerCreateManyInput | SerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ser update
   */
  export type SerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ser
     */
    select?: SerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ser
     */
    omit?: SerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SerInclude<ExtArgs> | null
    /**
     * The data needed to update a Ser.
     */
    data: XOR<SerUpdateInput, SerUncheckedUpdateInput>
    /**
     * Choose, which Ser to update.
     */
    where: SerWhereUniqueInput
  }

  /**
   * Ser updateMany
   */
  export type SerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sers.
     */
    data: XOR<SerUpdateManyMutationInput, SerUncheckedUpdateManyInput>
    /**
     * Filter which Sers to update
     */
    where?: SerWhereInput
    /**
     * Limit how many Sers to update.
     */
    limit?: number
  }

  /**
   * Ser updateManyAndReturn
   */
  export type SerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ser
     */
    select?: SerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ser
     */
    omit?: SerOmit<ExtArgs> | null
    /**
     * The data used to update Sers.
     */
    data: XOR<SerUpdateManyMutationInput, SerUncheckedUpdateManyInput>
    /**
     * Filter which Sers to update
     */
    where?: SerWhereInput
    /**
     * Limit how many Sers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ser upsert
   */
  export type SerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ser
     */
    select?: SerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ser
     */
    omit?: SerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SerInclude<ExtArgs> | null
    /**
     * The filter to search for the Ser to update in case it exists.
     */
    where: SerWhereUniqueInput
    /**
     * In case the Ser found by the `where` argument doesn't exist, create a new Ser with this data.
     */
    create: XOR<SerCreateInput, SerUncheckedCreateInput>
    /**
     * In case the Ser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SerUpdateInput, SerUncheckedUpdateInput>
  }

  /**
   * Ser delete
   */
  export type SerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ser
     */
    select?: SerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ser
     */
    omit?: SerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SerInclude<ExtArgs> | null
    /**
     * Filter which Ser to delete.
     */
    where: SerWhereUniqueInput
  }

  /**
   * Ser deleteMany
   */
  export type SerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sers to delete
     */
    where?: SerWhereInput
    /**
     * Limit how many Sers to delete.
     */
    limit?: number
  }

  /**
   * Ser.poderes
   */
  export type Ser$poderesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoderDivindade
     */
    select?: PoderDivindadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoderDivindade
     */
    omit?: PoderDivindadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoderDivindadeInclude<ExtArgs> | null
    where?: PoderDivindadeWhereInput
    orderBy?: PoderDivindadeOrderByWithRelationInput | PoderDivindadeOrderByWithRelationInput[]
    cursor?: PoderDivindadeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PoderDivindadeScalarFieldEnum | PoderDivindadeScalarFieldEnum[]
  }

  /**
   * Ser.artefatos
   */
  export type Ser$artefatosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artefato
     */
    select?: ArtefatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artefato
     */
    omit?: ArtefatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtefatoInclude<ExtArgs> | null
    where?: ArtefatoWhereInput
    orderBy?: ArtefatoOrderByWithRelationInput | ArtefatoOrderByWithRelationInput[]
    cursor?: ArtefatoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArtefatoScalarFieldEnum | ArtefatoScalarFieldEnum[]
  }

  /**
   * Ser.responsaveis
   */
  export type Ser$responsaveisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SerSer
     */
    select?: SerSerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SerSer
     */
    omit?: SerSerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SerSerInclude<ExtArgs> | null
    where?: SerSerWhereInput
    orderBy?: SerSerOrderByWithRelationInput | SerSerOrderByWithRelationInput[]
    cursor?: SerSerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SerSerScalarFieldEnum | SerSerScalarFieldEnum[]
  }

  /**
   * Ser.filhos
   */
  export type Ser$filhosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SerSer
     */
    select?: SerSerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SerSer
     */
    omit?: SerSerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SerSerInclude<ExtArgs> | null
    where?: SerSerWhereInput
    orderBy?: SerSerOrderByWithRelationInput | SerSerOrderByWithRelationInput[]
    cursor?: SerSerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SerSerScalarFieldEnum | SerSerScalarFieldEnum[]
  }

  /**
   * Ser.hospedeiro
   */
  export type Ser$hospedeiroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ser
     */
    select?: SerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ser
     */
    omit?: SerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SerInclude<ExtArgs> | null
    where?: SerWhereInput
  }

  /**
   * Ser.divino
   */
  export type Ser$divinoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ser
     */
    select?: SerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ser
     */
    omit?: SerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SerInclude<ExtArgs> | null
    where?: SerWhereInput
  }

  /**
   * Ser without action
   */
  export type SerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ser
     */
    select?: SerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ser
     */
    omit?: SerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SerInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PoderScalarFieldEnum: {
    idPoder: 'idPoder',
    nome: 'nome',
    descricao: 'descricao'
  };

  export type PoderScalarFieldEnum = (typeof PoderScalarFieldEnum)[keyof typeof PoderScalarFieldEnum]


  export const PoderDivindadeScalarFieldEnum: {
    serNome: 'serNome',
    poderId: 'poderId'
  };

  export type PoderDivindadeScalarFieldEnum = (typeof PoderDivindadeScalarFieldEnum)[keyof typeof PoderDivindadeScalarFieldEnum]


  export const ArtefatoPoderScalarFieldEnum: {
    artefatoNome: 'artefatoNome',
    poderId: 'poderId'
  };

  export type ArtefatoPoderScalarFieldEnum = (typeof ArtefatoPoderScalarFieldEnum)[keyof typeof ArtefatoPoderScalarFieldEnum]


  export const ArtefatoScalarFieldEnum: {
    nome: 'nome',
    objeto: 'objeto',
    material: 'material',
    destruido: 'destruido',
    nomeSer: 'nomeSer'
  };

  export type ArtefatoScalarFieldEnum = (typeof ArtefatoScalarFieldEnum)[keyof typeof ArtefatoScalarFieldEnum]


  export const SerSerScalarFieldEnum: {
    nomeResponsavel: 'nomeResponsavel',
    nomeFilho: 'nomeFilho'
  };

  export type SerSerScalarFieldEnum = (typeof SerSerScalarFieldEnum)[keyof typeof SerSerScalarFieldEnum]


  export const SerScalarFieldEnum: {
    nome: 'nome',
    sexo: 'sexo',
    morto: 'morto',
    tipo: 'tipo',
    fraqueza: 'fraqueza',
    designacao: 'designacao',
    restituirVita: 'restituirVita',
    nascimento: 'nascimento',
    raca: 'raca',
    profissao: 'profissao',
    nomeMortal: 'nomeMortal'
  };

  export type SerScalarFieldEnum = (typeof SerScalarFieldEnum)[keyof typeof SerScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'TipoSer'
   */
  export type EnumTipoSerFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoSer'>
    


  /**
   * Reference to a field of type 'TipoSer[]'
   */
  export type ListEnumTipoSerFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoSer[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type PoderWhereInput = {
    AND?: PoderWhereInput | PoderWhereInput[]
    OR?: PoderWhereInput[]
    NOT?: PoderWhereInput | PoderWhereInput[]
    idPoder?: IntFilter<"Poder"> | number
    nome?: StringFilter<"Poder"> | string
    descricao?: StringFilter<"Poder"> | string
    poderes?: ArtefatoPoderListRelationFilter
    divindades?: PoderDivindadeListRelationFilter
  }

  export type PoderOrderByWithRelationInput = {
    idPoder?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    poderes?: ArtefatoPoderOrderByRelationAggregateInput
    divindades?: PoderDivindadeOrderByRelationAggregateInput
  }

  export type PoderWhereUniqueInput = Prisma.AtLeast<{
    idPoder?: number
    nome?: string
    AND?: PoderWhereInput | PoderWhereInput[]
    OR?: PoderWhereInput[]
    NOT?: PoderWhereInput | PoderWhereInput[]
    descricao?: StringFilter<"Poder"> | string
    poderes?: ArtefatoPoderListRelationFilter
    divindades?: PoderDivindadeListRelationFilter
  }, "idPoder" | "nome">

  export type PoderOrderByWithAggregationInput = {
    idPoder?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    _count?: PoderCountOrderByAggregateInput
    _avg?: PoderAvgOrderByAggregateInput
    _max?: PoderMaxOrderByAggregateInput
    _min?: PoderMinOrderByAggregateInput
    _sum?: PoderSumOrderByAggregateInput
  }

  export type PoderScalarWhereWithAggregatesInput = {
    AND?: PoderScalarWhereWithAggregatesInput | PoderScalarWhereWithAggregatesInput[]
    OR?: PoderScalarWhereWithAggregatesInput[]
    NOT?: PoderScalarWhereWithAggregatesInput | PoderScalarWhereWithAggregatesInput[]
    idPoder?: IntWithAggregatesFilter<"Poder"> | number
    nome?: StringWithAggregatesFilter<"Poder"> | string
    descricao?: StringWithAggregatesFilter<"Poder"> | string
  }

  export type PoderDivindadeWhereInput = {
    AND?: PoderDivindadeWhereInput | PoderDivindadeWhereInput[]
    OR?: PoderDivindadeWhereInput[]
    NOT?: PoderDivindadeWhereInput | PoderDivindadeWhereInput[]
    serNome?: StringFilter<"PoderDivindade"> | string
    poderId?: IntFilter<"PoderDivindade"> | number
    divindade?: XOR<SerScalarRelationFilter, SerWhereInput>
    poder?: XOR<PoderScalarRelationFilter, PoderWhereInput>
  }

  export type PoderDivindadeOrderByWithRelationInput = {
    serNome?: SortOrder
    poderId?: SortOrder
    divindade?: SerOrderByWithRelationInput
    poder?: PoderOrderByWithRelationInput
  }

  export type PoderDivindadeWhereUniqueInput = Prisma.AtLeast<{
    serNome_poderId?: PoderDivindadeSerNomePoderIdCompoundUniqueInput
    AND?: PoderDivindadeWhereInput | PoderDivindadeWhereInput[]
    OR?: PoderDivindadeWhereInput[]
    NOT?: PoderDivindadeWhereInput | PoderDivindadeWhereInput[]
    serNome?: StringFilter<"PoderDivindade"> | string
    poderId?: IntFilter<"PoderDivindade"> | number
    divindade?: XOR<SerScalarRelationFilter, SerWhereInput>
    poder?: XOR<PoderScalarRelationFilter, PoderWhereInput>
  }, "serNome_poderId">

  export type PoderDivindadeOrderByWithAggregationInput = {
    serNome?: SortOrder
    poderId?: SortOrder
    _count?: PoderDivindadeCountOrderByAggregateInput
    _avg?: PoderDivindadeAvgOrderByAggregateInput
    _max?: PoderDivindadeMaxOrderByAggregateInput
    _min?: PoderDivindadeMinOrderByAggregateInput
    _sum?: PoderDivindadeSumOrderByAggregateInput
  }

  export type PoderDivindadeScalarWhereWithAggregatesInput = {
    AND?: PoderDivindadeScalarWhereWithAggregatesInput | PoderDivindadeScalarWhereWithAggregatesInput[]
    OR?: PoderDivindadeScalarWhereWithAggregatesInput[]
    NOT?: PoderDivindadeScalarWhereWithAggregatesInput | PoderDivindadeScalarWhereWithAggregatesInput[]
    serNome?: StringWithAggregatesFilter<"PoderDivindade"> | string
    poderId?: IntWithAggregatesFilter<"PoderDivindade"> | number
  }

  export type ArtefatoPoderWhereInput = {
    AND?: ArtefatoPoderWhereInput | ArtefatoPoderWhereInput[]
    OR?: ArtefatoPoderWhereInput[]
    NOT?: ArtefatoPoderWhereInput | ArtefatoPoderWhereInput[]
    artefatoNome?: StringFilter<"ArtefatoPoder"> | string
    poderId?: IntFilter<"ArtefatoPoder"> | number
    artefato?: XOR<ArtefatoScalarRelationFilter, ArtefatoWhereInput>
    poder?: XOR<PoderScalarRelationFilter, PoderWhereInput>
  }

  export type ArtefatoPoderOrderByWithRelationInput = {
    artefatoNome?: SortOrder
    poderId?: SortOrder
    artefato?: ArtefatoOrderByWithRelationInput
    poder?: PoderOrderByWithRelationInput
  }

  export type ArtefatoPoderWhereUniqueInput = Prisma.AtLeast<{
    artefatoNome_poderId?: ArtefatoPoderArtefatoNomePoderIdCompoundUniqueInput
    AND?: ArtefatoPoderWhereInput | ArtefatoPoderWhereInput[]
    OR?: ArtefatoPoderWhereInput[]
    NOT?: ArtefatoPoderWhereInput | ArtefatoPoderWhereInput[]
    artefatoNome?: StringFilter<"ArtefatoPoder"> | string
    poderId?: IntFilter<"ArtefatoPoder"> | number
    artefato?: XOR<ArtefatoScalarRelationFilter, ArtefatoWhereInput>
    poder?: XOR<PoderScalarRelationFilter, PoderWhereInput>
  }, "artefatoNome_poderId">

  export type ArtefatoPoderOrderByWithAggregationInput = {
    artefatoNome?: SortOrder
    poderId?: SortOrder
    _count?: ArtefatoPoderCountOrderByAggregateInput
    _avg?: ArtefatoPoderAvgOrderByAggregateInput
    _max?: ArtefatoPoderMaxOrderByAggregateInput
    _min?: ArtefatoPoderMinOrderByAggregateInput
    _sum?: ArtefatoPoderSumOrderByAggregateInput
  }

  export type ArtefatoPoderScalarWhereWithAggregatesInput = {
    AND?: ArtefatoPoderScalarWhereWithAggregatesInput | ArtefatoPoderScalarWhereWithAggregatesInput[]
    OR?: ArtefatoPoderScalarWhereWithAggregatesInput[]
    NOT?: ArtefatoPoderScalarWhereWithAggregatesInput | ArtefatoPoderScalarWhereWithAggregatesInput[]
    artefatoNome?: StringWithAggregatesFilter<"ArtefatoPoder"> | string
    poderId?: IntWithAggregatesFilter<"ArtefatoPoder"> | number
  }

  export type ArtefatoWhereInput = {
    AND?: ArtefatoWhereInput | ArtefatoWhereInput[]
    OR?: ArtefatoWhereInput[]
    NOT?: ArtefatoWhereInput | ArtefatoWhereInput[]
    nome?: StringFilter<"Artefato"> | string
    objeto?: StringFilter<"Artefato"> | string
    material?: StringFilter<"Artefato"> | string
    destruido?: BoolFilter<"Artefato"> | boolean
    nomeSer?: StringFilter<"Artefato"> | string
    ser?: XOR<SerScalarRelationFilter, SerWhereInput>
    artefatos?: ArtefatoPoderListRelationFilter
  }

  export type ArtefatoOrderByWithRelationInput = {
    nome?: SortOrder
    objeto?: SortOrder
    material?: SortOrder
    destruido?: SortOrder
    nomeSer?: SortOrder
    ser?: SerOrderByWithRelationInput
    artefatos?: ArtefatoPoderOrderByRelationAggregateInput
  }

  export type ArtefatoWhereUniqueInput = Prisma.AtLeast<{
    nome?: string
    AND?: ArtefatoWhereInput | ArtefatoWhereInput[]
    OR?: ArtefatoWhereInput[]
    NOT?: ArtefatoWhereInput | ArtefatoWhereInput[]
    objeto?: StringFilter<"Artefato"> | string
    material?: StringFilter<"Artefato"> | string
    destruido?: BoolFilter<"Artefato"> | boolean
    nomeSer?: StringFilter<"Artefato"> | string
    ser?: XOR<SerScalarRelationFilter, SerWhereInput>
    artefatos?: ArtefatoPoderListRelationFilter
  }, "nome">

  export type ArtefatoOrderByWithAggregationInput = {
    nome?: SortOrder
    objeto?: SortOrder
    material?: SortOrder
    destruido?: SortOrder
    nomeSer?: SortOrder
    _count?: ArtefatoCountOrderByAggregateInput
    _max?: ArtefatoMaxOrderByAggregateInput
    _min?: ArtefatoMinOrderByAggregateInput
  }

  export type ArtefatoScalarWhereWithAggregatesInput = {
    AND?: ArtefatoScalarWhereWithAggregatesInput | ArtefatoScalarWhereWithAggregatesInput[]
    OR?: ArtefatoScalarWhereWithAggregatesInput[]
    NOT?: ArtefatoScalarWhereWithAggregatesInput | ArtefatoScalarWhereWithAggregatesInput[]
    nome?: StringWithAggregatesFilter<"Artefato"> | string
    objeto?: StringWithAggregatesFilter<"Artefato"> | string
    material?: StringWithAggregatesFilter<"Artefato"> | string
    destruido?: BoolWithAggregatesFilter<"Artefato"> | boolean
    nomeSer?: StringWithAggregatesFilter<"Artefato"> | string
  }

  export type SerSerWhereInput = {
    AND?: SerSerWhereInput | SerSerWhereInput[]
    OR?: SerSerWhereInput[]
    NOT?: SerSerWhereInput | SerSerWhereInput[]
    nomeResponsavel?: StringFilter<"SerSer"> | string
    nomeFilho?: StringFilter<"SerSer"> | string
    responsavel?: XOR<SerScalarRelationFilter, SerWhereInput>
    filho?: XOR<SerScalarRelationFilter, SerWhereInput>
  }

  export type SerSerOrderByWithRelationInput = {
    nomeResponsavel?: SortOrder
    nomeFilho?: SortOrder
    responsavel?: SerOrderByWithRelationInput
    filho?: SerOrderByWithRelationInput
  }

  export type SerSerWhereUniqueInput = Prisma.AtLeast<{
    nomeResponsavel_nomeFilho?: SerSerNomeResponsavelNomeFilhoCompoundUniqueInput
    AND?: SerSerWhereInput | SerSerWhereInput[]
    OR?: SerSerWhereInput[]
    NOT?: SerSerWhereInput | SerSerWhereInput[]
    nomeResponsavel?: StringFilter<"SerSer"> | string
    nomeFilho?: StringFilter<"SerSer"> | string
    responsavel?: XOR<SerScalarRelationFilter, SerWhereInput>
    filho?: XOR<SerScalarRelationFilter, SerWhereInput>
  }, "nomeResponsavel_nomeFilho">

  export type SerSerOrderByWithAggregationInput = {
    nomeResponsavel?: SortOrder
    nomeFilho?: SortOrder
    _count?: SerSerCountOrderByAggregateInput
    _max?: SerSerMaxOrderByAggregateInput
    _min?: SerSerMinOrderByAggregateInput
  }

  export type SerSerScalarWhereWithAggregatesInput = {
    AND?: SerSerScalarWhereWithAggregatesInput | SerSerScalarWhereWithAggregatesInput[]
    OR?: SerSerScalarWhereWithAggregatesInput[]
    NOT?: SerSerScalarWhereWithAggregatesInput | SerSerScalarWhereWithAggregatesInput[]
    nomeResponsavel?: StringWithAggregatesFilter<"SerSer"> | string
    nomeFilho?: StringWithAggregatesFilter<"SerSer"> | string
  }

  export type SerWhereInput = {
    AND?: SerWhereInput | SerWhereInput[]
    OR?: SerWhereInput[]
    NOT?: SerWhereInput | SerWhereInput[]
    nome?: StringFilter<"Ser"> | string
    sexo?: StringFilter<"Ser"> | string
    morto?: BoolFilter<"Ser"> | boolean
    tipo?: EnumTipoSerFilter<"Ser"> | $Enums.TipoSer
    fraqueza?: StringNullableFilter<"Ser"> | string | null
    designacao?: StringNullableFilter<"Ser"> | string | null
    restituirVita?: BoolNullableFilter<"Ser"> | boolean | null
    nascimento?: DateTimeNullableFilter<"Ser"> | Date | string | null
    raca?: StringNullableFilter<"Ser"> | string | null
    profissao?: StringNullableFilter<"Ser"> | string | null
    nomeMortal?: StringNullableFilter<"Ser"> | string | null
    poderes?: PoderDivindadeListRelationFilter
    artefatos?: ArtefatoListRelationFilter
    responsaveis?: SerSerListRelationFilter
    filhos?: SerSerListRelationFilter
    hospedeiro?: XOR<SerNullableScalarRelationFilter, SerWhereInput> | null
    divino?: XOR<SerNullableScalarRelationFilter, SerWhereInput> | null
  }

  export type SerOrderByWithRelationInput = {
    nome?: SortOrder
    sexo?: SortOrder
    morto?: SortOrder
    tipo?: SortOrder
    fraqueza?: SortOrderInput | SortOrder
    designacao?: SortOrderInput | SortOrder
    restituirVita?: SortOrderInput | SortOrder
    nascimento?: SortOrderInput | SortOrder
    raca?: SortOrderInput | SortOrder
    profissao?: SortOrderInput | SortOrder
    nomeMortal?: SortOrderInput | SortOrder
    poderes?: PoderDivindadeOrderByRelationAggregateInput
    artefatos?: ArtefatoOrderByRelationAggregateInput
    responsaveis?: SerSerOrderByRelationAggregateInput
    filhos?: SerSerOrderByRelationAggregateInput
    hospedeiro?: SerOrderByWithRelationInput
    divino?: SerOrderByWithRelationInput
  }

  export type SerWhereUniqueInput = Prisma.AtLeast<{
    nome?: string
    nomeMortal?: string
    AND?: SerWhereInput | SerWhereInput[]
    OR?: SerWhereInput[]
    NOT?: SerWhereInput | SerWhereInput[]
    sexo?: StringFilter<"Ser"> | string
    morto?: BoolFilter<"Ser"> | boolean
    tipo?: EnumTipoSerFilter<"Ser"> | $Enums.TipoSer
    fraqueza?: StringNullableFilter<"Ser"> | string | null
    designacao?: StringNullableFilter<"Ser"> | string | null
    restituirVita?: BoolNullableFilter<"Ser"> | boolean | null
    nascimento?: DateTimeNullableFilter<"Ser"> | Date | string | null
    raca?: StringNullableFilter<"Ser"> | string | null
    profissao?: StringNullableFilter<"Ser"> | string | null
    poderes?: PoderDivindadeListRelationFilter
    artefatos?: ArtefatoListRelationFilter
    responsaveis?: SerSerListRelationFilter
    filhos?: SerSerListRelationFilter
    hospedeiro?: XOR<SerNullableScalarRelationFilter, SerWhereInput> | null
    divino?: XOR<SerNullableScalarRelationFilter, SerWhereInput> | null
  }, "nome" | "nomeMortal">

  export type SerOrderByWithAggregationInput = {
    nome?: SortOrder
    sexo?: SortOrder
    morto?: SortOrder
    tipo?: SortOrder
    fraqueza?: SortOrderInput | SortOrder
    designacao?: SortOrderInput | SortOrder
    restituirVita?: SortOrderInput | SortOrder
    nascimento?: SortOrderInput | SortOrder
    raca?: SortOrderInput | SortOrder
    profissao?: SortOrderInput | SortOrder
    nomeMortal?: SortOrderInput | SortOrder
    _count?: SerCountOrderByAggregateInput
    _max?: SerMaxOrderByAggregateInput
    _min?: SerMinOrderByAggregateInput
  }

  export type SerScalarWhereWithAggregatesInput = {
    AND?: SerScalarWhereWithAggregatesInput | SerScalarWhereWithAggregatesInput[]
    OR?: SerScalarWhereWithAggregatesInput[]
    NOT?: SerScalarWhereWithAggregatesInput | SerScalarWhereWithAggregatesInput[]
    nome?: StringWithAggregatesFilter<"Ser"> | string
    sexo?: StringWithAggregatesFilter<"Ser"> | string
    morto?: BoolWithAggregatesFilter<"Ser"> | boolean
    tipo?: EnumTipoSerWithAggregatesFilter<"Ser"> | $Enums.TipoSer
    fraqueza?: StringNullableWithAggregatesFilter<"Ser"> | string | null
    designacao?: StringNullableWithAggregatesFilter<"Ser"> | string | null
    restituirVita?: BoolNullableWithAggregatesFilter<"Ser"> | boolean | null
    nascimento?: DateTimeNullableWithAggregatesFilter<"Ser"> | Date | string | null
    raca?: StringNullableWithAggregatesFilter<"Ser"> | string | null
    profissao?: StringNullableWithAggregatesFilter<"Ser"> | string | null
    nomeMortal?: StringNullableWithAggregatesFilter<"Ser"> | string | null
  }

  export type PoderCreateInput = {
    nome: string
    descricao: string
    poderes?: ArtefatoPoderCreateNestedManyWithoutPoderInput
    divindades?: PoderDivindadeCreateNestedManyWithoutPoderInput
  }

  export type PoderUncheckedCreateInput = {
    idPoder?: number
    nome: string
    descricao: string
    poderes?: ArtefatoPoderUncheckedCreateNestedManyWithoutPoderInput
    divindades?: PoderDivindadeUncheckedCreateNestedManyWithoutPoderInput
  }

  export type PoderUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    poderes?: ArtefatoPoderUpdateManyWithoutPoderNestedInput
    divindades?: PoderDivindadeUpdateManyWithoutPoderNestedInput
  }

  export type PoderUncheckedUpdateInput = {
    idPoder?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    poderes?: ArtefatoPoderUncheckedUpdateManyWithoutPoderNestedInput
    divindades?: PoderDivindadeUncheckedUpdateManyWithoutPoderNestedInput
  }

  export type PoderCreateManyInput = {
    idPoder?: number
    nome: string
    descricao: string
  }

  export type PoderUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type PoderUncheckedUpdateManyInput = {
    idPoder?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type PoderDivindadeCreateInput = {
    divindade: SerCreateNestedOneWithoutPoderesInput
    poder: PoderCreateNestedOneWithoutDivindadesInput
  }

  export type PoderDivindadeUncheckedCreateInput = {
    serNome: string
    poderId: number
  }

  export type PoderDivindadeUpdateInput = {
    divindade?: SerUpdateOneRequiredWithoutPoderesNestedInput
    poder?: PoderUpdateOneRequiredWithoutDivindadesNestedInput
  }

  export type PoderDivindadeUncheckedUpdateInput = {
    serNome?: StringFieldUpdateOperationsInput | string
    poderId?: IntFieldUpdateOperationsInput | number
  }

  export type PoderDivindadeCreateManyInput = {
    serNome: string
    poderId: number
  }

  export type PoderDivindadeUpdateManyMutationInput = {

  }

  export type PoderDivindadeUncheckedUpdateManyInput = {
    serNome?: StringFieldUpdateOperationsInput | string
    poderId?: IntFieldUpdateOperationsInput | number
  }

  export type ArtefatoPoderCreateInput = {
    artefato: ArtefatoCreateNestedOneWithoutArtefatosInput
    poder: PoderCreateNestedOneWithoutPoderesInput
  }

  export type ArtefatoPoderUncheckedCreateInput = {
    artefatoNome: string
    poderId: number
  }

  export type ArtefatoPoderUpdateInput = {
    artefato?: ArtefatoUpdateOneRequiredWithoutArtefatosNestedInput
    poder?: PoderUpdateOneRequiredWithoutPoderesNestedInput
  }

  export type ArtefatoPoderUncheckedUpdateInput = {
    artefatoNome?: StringFieldUpdateOperationsInput | string
    poderId?: IntFieldUpdateOperationsInput | number
  }

  export type ArtefatoPoderCreateManyInput = {
    artefatoNome: string
    poderId: number
  }

  export type ArtefatoPoderUpdateManyMutationInput = {

  }

  export type ArtefatoPoderUncheckedUpdateManyInput = {
    artefatoNome?: StringFieldUpdateOperationsInput | string
    poderId?: IntFieldUpdateOperationsInput | number
  }

  export type ArtefatoCreateInput = {
    nome: string
    objeto: string
    material: string
    destruido: boolean
    ser: SerCreateNestedOneWithoutArtefatosInput
    artefatos?: ArtefatoPoderCreateNestedManyWithoutArtefatoInput
  }

  export type ArtefatoUncheckedCreateInput = {
    nome: string
    objeto: string
    material: string
    destruido: boolean
    nomeSer: string
    artefatos?: ArtefatoPoderUncheckedCreateNestedManyWithoutArtefatoInput
  }

  export type ArtefatoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    objeto?: StringFieldUpdateOperationsInput | string
    material?: StringFieldUpdateOperationsInput | string
    destruido?: BoolFieldUpdateOperationsInput | boolean
    ser?: SerUpdateOneRequiredWithoutArtefatosNestedInput
    artefatos?: ArtefatoPoderUpdateManyWithoutArtefatoNestedInput
  }

  export type ArtefatoUncheckedUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    objeto?: StringFieldUpdateOperationsInput | string
    material?: StringFieldUpdateOperationsInput | string
    destruido?: BoolFieldUpdateOperationsInput | boolean
    nomeSer?: StringFieldUpdateOperationsInput | string
    artefatos?: ArtefatoPoderUncheckedUpdateManyWithoutArtefatoNestedInput
  }

  export type ArtefatoCreateManyInput = {
    nome: string
    objeto: string
    material: string
    destruido: boolean
    nomeSer: string
  }

  export type ArtefatoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    objeto?: StringFieldUpdateOperationsInput | string
    material?: StringFieldUpdateOperationsInput | string
    destruido?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ArtefatoUncheckedUpdateManyInput = {
    nome?: StringFieldUpdateOperationsInput | string
    objeto?: StringFieldUpdateOperationsInput | string
    material?: StringFieldUpdateOperationsInput | string
    destruido?: BoolFieldUpdateOperationsInput | boolean
    nomeSer?: StringFieldUpdateOperationsInput | string
  }

  export type SerSerCreateInput = {
    responsavel: SerCreateNestedOneWithoutResponsaveisInput
    filho: SerCreateNestedOneWithoutFilhosInput
  }

  export type SerSerUncheckedCreateInput = {
    nomeResponsavel: string
    nomeFilho: string
  }

  export type SerSerUpdateInput = {
    responsavel?: SerUpdateOneRequiredWithoutResponsaveisNestedInput
    filho?: SerUpdateOneRequiredWithoutFilhosNestedInput
  }

  export type SerSerUncheckedUpdateInput = {
    nomeResponsavel?: StringFieldUpdateOperationsInput | string
    nomeFilho?: StringFieldUpdateOperationsInput | string
  }

  export type SerSerCreateManyInput = {
    nomeResponsavel: string
    nomeFilho: string
  }

  export type SerSerUpdateManyMutationInput = {

  }

  export type SerSerUncheckedUpdateManyInput = {
    nomeResponsavel?: StringFieldUpdateOperationsInput | string
    nomeFilho?: StringFieldUpdateOperationsInput | string
  }

  export type SerCreateInput = {
    nome: string
    sexo: string
    morto: boolean
    tipo: $Enums.TipoSer
    fraqueza?: string | null
    designacao?: string | null
    restituirVita?: boolean | null
    nascimento?: Date | string | null
    raca?: string | null
    profissao?: string | null
    poderes?: PoderDivindadeCreateNestedManyWithoutDivindadeInput
    artefatos?: ArtefatoCreateNestedManyWithoutSerInput
    responsaveis?: SerSerCreateNestedManyWithoutResponsavelInput
    filhos?: SerSerCreateNestedManyWithoutFilhoInput
    hospedeiro?: SerCreateNestedOneWithoutDivinoInput
    divino?: SerCreateNestedOneWithoutHospedeiroInput
  }

  export type SerUncheckedCreateInput = {
    nome: string
    sexo: string
    morto: boolean
    tipo: $Enums.TipoSer
    fraqueza?: string | null
    designacao?: string | null
    restituirVita?: boolean | null
    nascimento?: Date | string | null
    raca?: string | null
    profissao?: string | null
    nomeMortal?: string | null
    poderes?: PoderDivindadeUncheckedCreateNestedManyWithoutDivindadeInput
    artefatos?: ArtefatoUncheckedCreateNestedManyWithoutSerInput
    responsaveis?: SerSerUncheckedCreateNestedManyWithoutResponsavelInput
    filhos?: SerSerUncheckedCreateNestedManyWithoutFilhoInput
    divino?: SerUncheckedCreateNestedOneWithoutHospedeiroInput
  }

  export type SerUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sexo?: StringFieldUpdateOperationsInput | string
    morto?: BoolFieldUpdateOperationsInput | boolean
    tipo?: EnumTipoSerFieldUpdateOperationsInput | $Enums.TipoSer
    fraqueza?: NullableStringFieldUpdateOperationsInput | string | null
    designacao?: NullableStringFieldUpdateOperationsInput | string | null
    restituirVita?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    raca?: NullableStringFieldUpdateOperationsInput | string | null
    profissao?: NullableStringFieldUpdateOperationsInput | string | null
    poderes?: PoderDivindadeUpdateManyWithoutDivindadeNestedInput
    artefatos?: ArtefatoUpdateManyWithoutSerNestedInput
    responsaveis?: SerSerUpdateManyWithoutResponsavelNestedInput
    filhos?: SerSerUpdateManyWithoutFilhoNestedInput
    hospedeiro?: SerUpdateOneWithoutDivinoNestedInput
    divino?: SerUpdateOneWithoutHospedeiroNestedInput
  }

  export type SerUncheckedUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sexo?: StringFieldUpdateOperationsInput | string
    morto?: BoolFieldUpdateOperationsInput | boolean
    tipo?: EnumTipoSerFieldUpdateOperationsInput | $Enums.TipoSer
    fraqueza?: NullableStringFieldUpdateOperationsInput | string | null
    designacao?: NullableStringFieldUpdateOperationsInput | string | null
    restituirVita?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    raca?: NullableStringFieldUpdateOperationsInput | string | null
    profissao?: NullableStringFieldUpdateOperationsInput | string | null
    nomeMortal?: NullableStringFieldUpdateOperationsInput | string | null
    poderes?: PoderDivindadeUncheckedUpdateManyWithoutDivindadeNestedInput
    artefatos?: ArtefatoUncheckedUpdateManyWithoutSerNestedInput
    responsaveis?: SerSerUncheckedUpdateManyWithoutResponsavelNestedInput
    filhos?: SerSerUncheckedUpdateManyWithoutFilhoNestedInput
    divino?: SerUncheckedUpdateOneWithoutHospedeiroNestedInput
  }

  export type SerCreateManyInput = {
    nome: string
    sexo: string
    morto: boolean
    tipo: $Enums.TipoSer
    fraqueza?: string | null
    designacao?: string | null
    restituirVita?: boolean | null
    nascimento?: Date | string | null
    raca?: string | null
    profissao?: string | null
    nomeMortal?: string | null
  }

  export type SerUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sexo?: StringFieldUpdateOperationsInput | string
    morto?: BoolFieldUpdateOperationsInput | boolean
    tipo?: EnumTipoSerFieldUpdateOperationsInput | $Enums.TipoSer
    fraqueza?: NullableStringFieldUpdateOperationsInput | string | null
    designacao?: NullableStringFieldUpdateOperationsInput | string | null
    restituirVita?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    raca?: NullableStringFieldUpdateOperationsInput | string | null
    profissao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SerUncheckedUpdateManyInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sexo?: StringFieldUpdateOperationsInput | string
    morto?: BoolFieldUpdateOperationsInput | boolean
    tipo?: EnumTipoSerFieldUpdateOperationsInput | $Enums.TipoSer
    fraqueza?: NullableStringFieldUpdateOperationsInput | string | null
    designacao?: NullableStringFieldUpdateOperationsInput | string | null
    restituirVita?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    raca?: NullableStringFieldUpdateOperationsInput | string | null
    profissao?: NullableStringFieldUpdateOperationsInput | string | null
    nomeMortal?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ArtefatoPoderListRelationFilter = {
    every?: ArtefatoPoderWhereInput
    some?: ArtefatoPoderWhereInput
    none?: ArtefatoPoderWhereInput
  }

  export type PoderDivindadeListRelationFilter = {
    every?: PoderDivindadeWhereInput
    some?: PoderDivindadeWhereInput
    none?: PoderDivindadeWhereInput
  }

  export type ArtefatoPoderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PoderDivindadeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PoderCountOrderByAggregateInput = {
    idPoder?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
  }

  export type PoderAvgOrderByAggregateInput = {
    idPoder?: SortOrder
  }

  export type PoderMaxOrderByAggregateInput = {
    idPoder?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
  }

  export type PoderMinOrderByAggregateInput = {
    idPoder?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
  }

  export type PoderSumOrderByAggregateInput = {
    idPoder?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type SerScalarRelationFilter = {
    is?: SerWhereInput
    isNot?: SerWhereInput
  }

  export type PoderScalarRelationFilter = {
    is?: PoderWhereInput
    isNot?: PoderWhereInput
  }

  export type PoderDivindadeSerNomePoderIdCompoundUniqueInput = {
    serNome: string
    poderId: number
  }

  export type PoderDivindadeCountOrderByAggregateInput = {
    serNome?: SortOrder
    poderId?: SortOrder
  }

  export type PoderDivindadeAvgOrderByAggregateInput = {
    poderId?: SortOrder
  }

  export type PoderDivindadeMaxOrderByAggregateInput = {
    serNome?: SortOrder
    poderId?: SortOrder
  }

  export type PoderDivindadeMinOrderByAggregateInput = {
    serNome?: SortOrder
    poderId?: SortOrder
  }

  export type PoderDivindadeSumOrderByAggregateInput = {
    poderId?: SortOrder
  }

  export type ArtefatoScalarRelationFilter = {
    is?: ArtefatoWhereInput
    isNot?: ArtefatoWhereInput
  }

  export type ArtefatoPoderArtefatoNomePoderIdCompoundUniqueInput = {
    artefatoNome: string
    poderId: number
  }

  export type ArtefatoPoderCountOrderByAggregateInput = {
    artefatoNome?: SortOrder
    poderId?: SortOrder
  }

  export type ArtefatoPoderAvgOrderByAggregateInput = {
    poderId?: SortOrder
  }

  export type ArtefatoPoderMaxOrderByAggregateInput = {
    artefatoNome?: SortOrder
    poderId?: SortOrder
  }

  export type ArtefatoPoderMinOrderByAggregateInput = {
    artefatoNome?: SortOrder
    poderId?: SortOrder
  }

  export type ArtefatoPoderSumOrderByAggregateInput = {
    poderId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ArtefatoCountOrderByAggregateInput = {
    nome?: SortOrder
    objeto?: SortOrder
    material?: SortOrder
    destruido?: SortOrder
    nomeSer?: SortOrder
  }

  export type ArtefatoMaxOrderByAggregateInput = {
    nome?: SortOrder
    objeto?: SortOrder
    material?: SortOrder
    destruido?: SortOrder
    nomeSer?: SortOrder
  }

  export type ArtefatoMinOrderByAggregateInput = {
    nome?: SortOrder
    objeto?: SortOrder
    material?: SortOrder
    destruido?: SortOrder
    nomeSer?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type SerSerNomeResponsavelNomeFilhoCompoundUniqueInput = {
    nomeResponsavel: string
    nomeFilho: string
  }

  export type SerSerCountOrderByAggregateInput = {
    nomeResponsavel?: SortOrder
    nomeFilho?: SortOrder
  }

  export type SerSerMaxOrderByAggregateInput = {
    nomeResponsavel?: SortOrder
    nomeFilho?: SortOrder
  }

  export type SerSerMinOrderByAggregateInput = {
    nomeResponsavel?: SortOrder
    nomeFilho?: SortOrder
  }

  export type EnumTipoSerFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoSer | EnumTipoSerFieldRefInput<$PrismaModel>
    in?: $Enums.TipoSer[] | ListEnumTipoSerFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoSer[] | ListEnumTipoSerFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoSerFilter<$PrismaModel> | $Enums.TipoSer
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ArtefatoListRelationFilter = {
    every?: ArtefatoWhereInput
    some?: ArtefatoWhereInput
    none?: ArtefatoWhereInput
  }

  export type SerSerListRelationFilter = {
    every?: SerSerWhereInput
    some?: SerSerWhereInput
    none?: SerSerWhereInput
  }

  export type SerNullableScalarRelationFilter = {
    is?: SerWhereInput | null
    isNot?: SerWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ArtefatoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SerSerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SerCountOrderByAggregateInput = {
    nome?: SortOrder
    sexo?: SortOrder
    morto?: SortOrder
    tipo?: SortOrder
    fraqueza?: SortOrder
    designacao?: SortOrder
    restituirVita?: SortOrder
    nascimento?: SortOrder
    raca?: SortOrder
    profissao?: SortOrder
    nomeMortal?: SortOrder
  }

  export type SerMaxOrderByAggregateInput = {
    nome?: SortOrder
    sexo?: SortOrder
    morto?: SortOrder
    tipo?: SortOrder
    fraqueza?: SortOrder
    designacao?: SortOrder
    restituirVita?: SortOrder
    nascimento?: SortOrder
    raca?: SortOrder
    profissao?: SortOrder
    nomeMortal?: SortOrder
  }

  export type SerMinOrderByAggregateInput = {
    nome?: SortOrder
    sexo?: SortOrder
    morto?: SortOrder
    tipo?: SortOrder
    fraqueza?: SortOrder
    designacao?: SortOrder
    restituirVita?: SortOrder
    nascimento?: SortOrder
    raca?: SortOrder
    profissao?: SortOrder
    nomeMortal?: SortOrder
  }

  export type EnumTipoSerWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoSer | EnumTipoSerFieldRefInput<$PrismaModel>
    in?: $Enums.TipoSer[] | ListEnumTipoSerFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoSer[] | ListEnumTipoSerFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoSerWithAggregatesFilter<$PrismaModel> | $Enums.TipoSer
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoSerFilter<$PrismaModel>
    _max?: NestedEnumTipoSerFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ArtefatoPoderCreateNestedManyWithoutPoderInput = {
    create?: XOR<ArtefatoPoderCreateWithoutPoderInput, ArtefatoPoderUncheckedCreateWithoutPoderInput> | ArtefatoPoderCreateWithoutPoderInput[] | ArtefatoPoderUncheckedCreateWithoutPoderInput[]
    connectOrCreate?: ArtefatoPoderCreateOrConnectWithoutPoderInput | ArtefatoPoderCreateOrConnectWithoutPoderInput[]
    createMany?: ArtefatoPoderCreateManyPoderInputEnvelope
    connect?: ArtefatoPoderWhereUniqueInput | ArtefatoPoderWhereUniqueInput[]
  }

  export type PoderDivindadeCreateNestedManyWithoutPoderInput = {
    create?: XOR<PoderDivindadeCreateWithoutPoderInput, PoderDivindadeUncheckedCreateWithoutPoderInput> | PoderDivindadeCreateWithoutPoderInput[] | PoderDivindadeUncheckedCreateWithoutPoderInput[]
    connectOrCreate?: PoderDivindadeCreateOrConnectWithoutPoderInput | PoderDivindadeCreateOrConnectWithoutPoderInput[]
    createMany?: PoderDivindadeCreateManyPoderInputEnvelope
    connect?: PoderDivindadeWhereUniqueInput | PoderDivindadeWhereUniqueInput[]
  }

  export type ArtefatoPoderUncheckedCreateNestedManyWithoutPoderInput = {
    create?: XOR<ArtefatoPoderCreateWithoutPoderInput, ArtefatoPoderUncheckedCreateWithoutPoderInput> | ArtefatoPoderCreateWithoutPoderInput[] | ArtefatoPoderUncheckedCreateWithoutPoderInput[]
    connectOrCreate?: ArtefatoPoderCreateOrConnectWithoutPoderInput | ArtefatoPoderCreateOrConnectWithoutPoderInput[]
    createMany?: ArtefatoPoderCreateManyPoderInputEnvelope
    connect?: ArtefatoPoderWhereUniqueInput | ArtefatoPoderWhereUniqueInput[]
  }

  export type PoderDivindadeUncheckedCreateNestedManyWithoutPoderInput = {
    create?: XOR<PoderDivindadeCreateWithoutPoderInput, PoderDivindadeUncheckedCreateWithoutPoderInput> | PoderDivindadeCreateWithoutPoderInput[] | PoderDivindadeUncheckedCreateWithoutPoderInput[]
    connectOrCreate?: PoderDivindadeCreateOrConnectWithoutPoderInput | PoderDivindadeCreateOrConnectWithoutPoderInput[]
    createMany?: PoderDivindadeCreateManyPoderInputEnvelope
    connect?: PoderDivindadeWhereUniqueInput | PoderDivindadeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ArtefatoPoderUpdateManyWithoutPoderNestedInput = {
    create?: XOR<ArtefatoPoderCreateWithoutPoderInput, ArtefatoPoderUncheckedCreateWithoutPoderInput> | ArtefatoPoderCreateWithoutPoderInput[] | ArtefatoPoderUncheckedCreateWithoutPoderInput[]
    connectOrCreate?: ArtefatoPoderCreateOrConnectWithoutPoderInput | ArtefatoPoderCreateOrConnectWithoutPoderInput[]
    upsert?: ArtefatoPoderUpsertWithWhereUniqueWithoutPoderInput | ArtefatoPoderUpsertWithWhereUniqueWithoutPoderInput[]
    createMany?: ArtefatoPoderCreateManyPoderInputEnvelope
    set?: ArtefatoPoderWhereUniqueInput | ArtefatoPoderWhereUniqueInput[]
    disconnect?: ArtefatoPoderWhereUniqueInput | ArtefatoPoderWhereUniqueInput[]
    delete?: ArtefatoPoderWhereUniqueInput | ArtefatoPoderWhereUniqueInput[]
    connect?: ArtefatoPoderWhereUniqueInput | ArtefatoPoderWhereUniqueInput[]
    update?: ArtefatoPoderUpdateWithWhereUniqueWithoutPoderInput | ArtefatoPoderUpdateWithWhereUniqueWithoutPoderInput[]
    updateMany?: ArtefatoPoderUpdateManyWithWhereWithoutPoderInput | ArtefatoPoderUpdateManyWithWhereWithoutPoderInput[]
    deleteMany?: ArtefatoPoderScalarWhereInput | ArtefatoPoderScalarWhereInput[]
  }

  export type PoderDivindadeUpdateManyWithoutPoderNestedInput = {
    create?: XOR<PoderDivindadeCreateWithoutPoderInput, PoderDivindadeUncheckedCreateWithoutPoderInput> | PoderDivindadeCreateWithoutPoderInput[] | PoderDivindadeUncheckedCreateWithoutPoderInput[]
    connectOrCreate?: PoderDivindadeCreateOrConnectWithoutPoderInput | PoderDivindadeCreateOrConnectWithoutPoderInput[]
    upsert?: PoderDivindadeUpsertWithWhereUniqueWithoutPoderInput | PoderDivindadeUpsertWithWhereUniqueWithoutPoderInput[]
    createMany?: PoderDivindadeCreateManyPoderInputEnvelope
    set?: PoderDivindadeWhereUniqueInput | PoderDivindadeWhereUniqueInput[]
    disconnect?: PoderDivindadeWhereUniqueInput | PoderDivindadeWhereUniqueInput[]
    delete?: PoderDivindadeWhereUniqueInput | PoderDivindadeWhereUniqueInput[]
    connect?: PoderDivindadeWhereUniqueInput | PoderDivindadeWhereUniqueInput[]
    update?: PoderDivindadeUpdateWithWhereUniqueWithoutPoderInput | PoderDivindadeUpdateWithWhereUniqueWithoutPoderInput[]
    updateMany?: PoderDivindadeUpdateManyWithWhereWithoutPoderInput | PoderDivindadeUpdateManyWithWhereWithoutPoderInput[]
    deleteMany?: PoderDivindadeScalarWhereInput | PoderDivindadeScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ArtefatoPoderUncheckedUpdateManyWithoutPoderNestedInput = {
    create?: XOR<ArtefatoPoderCreateWithoutPoderInput, ArtefatoPoderUncheckedCreateWithoutPoderInput> | ArtefatoPoderCreateWithoutPoderInput[] | ArtefatoPoderUncheckedCreateWithoutPoderInput[]
    connectOrCreate?: ArtefatoPoderCreateOrConnectWithoutPoderInput | ArtefatoPoderCreateOrConnectWithoutPoderInput[]
    upsert?: ArtefatoPoderUpsertWithWhereUniqueWithoutPoderInput | ArtefatoPoderUpsertWithWhereUniqueWithoutPoderInput[]
    createMany?: ArtefatoPoderCreateManyPoderInputEnvelope
    set?: ArtefatoPoderWhereUniqueInput | ArtefatoPoderWhereUniqueInput[]
    disconnect?: ArtefatoPoderWhereUniqueInput | ArtefatoPoderWhereUniqueInput[]
    delete?: ArtefatoPoderWhereUniqueInput | ArtefatoPoderWhereUniqueInput[]
    connect?: ArtefatoPoderWhereUniqueInput | ArtefatoPoderWhereUniqueInput[]
    update?: ArtefatoPoderUpdateWithWhereUniqueWithoutPoderInput | ArtefatoPoderUpdateWithWhereUniqueWithoutPoderInput[]
    updateMany?: ArtefatoPoderUpdateManyWithWhereWithoutPoderInput | ArtefatoPoderUpdateManyWithWhereWithoutPoderInput[]
    deleteMany?: ArtefatoPoderScalarWhereInput | ArtefatoPoderScalarWhereInput[]
  }

  export type PoderDivindadeUncheckedUpdateManyWithoutPoderNestedInput = {
    create?: XOR<PoderDivindadeCreateWithoutPoderInput, PoderDivindadeUncheckedCreateWithoutPoderInput> | PoderDivindadeCreateWithoutPoderInput[] | PoderDivindadeUncheckedCreateWithoutPoderInput[]
    connectOrCreate?: PoderDivindadeCreateOrConnectWithoutPoderInput | PoderDivindadeCreateOrConnectWithoutPoderInput[]
    upsert?: PoderDivindadeUpsertWithWhereUniqueWithoutPoderInput | PoderDivindadeUpsertWithWhereUniqueWithoutPoderInput[]
    createMany?: PoderDivindadeCreateManyPoderInputEnvelope
    set?: PoderDivindadeWhereUniqueInput | PoderDivindadeWhereUniqueInput[]
    disconnect?: PoderDivindadeWhereUniqueInput | PoderDivindadeWhereUniqueInput[]
    delete?: PoderDivindadeWhereUniqueInput | PoderDivindadeWhereUniqueInput[]
    connect?: PoderDivindadeWhereUniqueInput | PoderDivindadeWhereUniqueInput[]
    update?: PoderDivindadeUpdateWithWhereUniqueWithoutPoderInput | PoderDivindadeUpdateWithWhereUniqueWithoutPoderInput[]
    updateMany?: PoderDivindadeUpdateManyWithWhereWithoutPoderInput | PoderDivindadeUpdateManyWithWhereWithoutPoderInput[]
    deleteMany?: PoderDivindadeScalarWhereInput | PoderDivindadeScalarWhereInput[]
  }

  export type SerCreateNestedOneWithoutPoderesInput = {
    create?: XOR<SerCreateWithoutPoderesInput, SerUncheckedCreateWithoutPoderesInput>
    connectOrCreate?: SerCreateOrConnectWithoutPoderesInput
    connect?: SerWhereUniqueInput
  }

  export type PoderCreateNestedOneWithoutDivindadesInput = {
    create?: XOR<PoderCreateWithoutDivindadesInput, PoderUncheckedCreateWithoutDivindadesInput>
    connectOrCreate?: PoderCreateOrConnectWithoutDivindadesInput
    connect?: PoderWhereUniqueInput
  }

  export type SerUpdateOneRequiredWithoutPoderesNestedInput = {
    create?: XOR<SerCreateWithoutPoderesInput, SerUncheckedCreateWithoutPoderesInput>
    connectOrCreate?: SerCreateOrConnectWithoutPoderesInput
    upsert?: SerUpsertWithoutPoderesInput
    connect?: SerWhereUniqueInput
    update?: XOR<XOR<SerUpdateToOneWithWhereWithoutPoderesInput, SerUpdateWithoutPoderesInput>, SerUncheckedUpdateWithoutPoderesInput>
  }

  export type PoderUpdateOneRequiredWithoutDivindadesNestedInput = {
    create?: XOR<PoderCreateWithoutDivindadesInput, PoderUncheckedCreateWithoutDivindadesInput>
    connectOrCreate?: PoderCreateOrConnectWithoutDivindadesInput
    upsert?: PoderUpsertWithoutDivindadesInput
    connect?: PoderWhereUniqueInput
    update?: XOR<XOR<PoderUpdateToOneWithWhereWithoutDivindadesInput, PoderUpdateWithoutDivindadesInput>, PoderUncheckedUpdateWithoutDivindadesInput>
  }

  export type ArtefatoCreateNestedOneWithoutArtefatosInput = {
    create?: XOR<ArtefatoCreateWithoutArtefatosInput, ArtefatoUncheckedCreateWithoutArtefatosInput>
    connectOrCreate?: ArtefatoCreateOrConnectWithoutArtefatosInput
    connect?: ArtefatoWhereUniqueInput
  }

  export type PoderCreateNestedOneWithoutPoderesInput = {
    create?: XOR<PoderCreateWithoutPoderesInput, PoderUncheckedCreateWithoutPoderesInput>
    connectOrCreate?: PoderCreateOrConnectWithoutPoderesInput
    connect?: PoderWhereUniqueInput
  }

  export type ArtefatoUpdateOneRequiredWithoutArtefatosNestedInput = {
    create?: XOR<ArtefatoCreateWithoutArtefatosInput, ArtefatoUncheckedCreateWithoutArtefatosInput>
    connectOrCreate?: ArtefatoCreateOrConnectWithoutArtefatosInput
    upsert?: ArtefatoUpsertWithoutArtefatosInput
    connect?: ArtefatoWhereUniqueInput
    update?: XOR<XOR<ArtefatoUpdateToOneWithWhereWithoutArtefatosInput, ArtefatoUpdateWithoutArtefatosInput>, ArtefatoUncheckedUpdateWithoutArtefatosInput>
  }

  export type PoderUpdateOneRequiredWithoutPoderesNestedInput = {
    create?: XOR<PoderCreateWithoutPoderesInput, PoderUncheckedCreateWithoutPoderesInput>
    connectOrCreate?: PoderCreateOrConnectWithoutPoderesInput
    upsert?: PoderUpsertWithoutPoderesInput
    connect?: PoderWhereUniqueInput
    update?: XOR<XOR<PoderUpdateToOneWithWhereWithoutPoderesInput, PoderUpdateWithoutPoderesInput>, PoderUncheckedUpdateWithoutPoderesInput>
  }

  export type SerCreateNestedOneWithoutArtefatosInput = {
    create?: XOR<SerCreateWithoutArtefatosInput, SerUncheckedCreateWithoutArtefatosInput>
    connectOrCreate?: SerCreateOrConnectWithoutArtefatosInput
    connect?: SerWhereUniqueInput
  }

  export type ArtefatoPoderCreateNestedManyWithoutArtefatoInput = {
    create?: XOR<ArtefatoPoderCreateWithoutArtefatoInput, ArtefatoPoderUncheckedCreateWithoutArtefatoInput> | ArtefatoPoderCreateWithoutArtefatoInput[] | ArtefatoPoderUncheckedCreateWithoutArtefatoInput[]
    connectOrCreate?: ArtefatoPoderCreateOrConnectWithoutArtefatoInput | ArtefatoPoderCreateOrConnectWithoutArtefatoInput[]
    createMany?: ArtefatoPoderCreateManyArtefatoInputEnvelope
    connect?: ArtefatoPoderWhereUniqueInput | ArtefatoPoderWhereUniqueInput[]
  }

  export type ArtefatoPoderUncheckedCreateNestedManyWithoutArtefatoInput = {
    create?: XOR<ArtefatoPoderCreateWithoutArtefatoInput, ArtefatoPoderUncheckedCreateWithoutArtefatoInput> | ArtefatoPoderCreateWithoutArtefatoInput[] | ArtefatoPoderUncheckedCreateWithoutArtefatoInput[]
    connectOrCreate?: ArtefatoPoderCreateOrConnectWithoutArtefatoInput | ArtefatoPoderCreateOrConnectWithoutArtefatoInput[]
    createMany?: ArtefatoPoderCreateManyArtefatoInputEnvelope
    connect?: ArtefatoPoderWhereUniqueInput | ArtefatoPoderWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type SerUpdateOneRequiredWithoutArtefatosNestedInput = {
    create?: XOR<SerCreateWithoutArtefatosInput, SerUncheckedCreateWithoutArtefatosInput>
    connectOrCreate?: SerCreateOrConnectWithoutArtefatosInput
    upsert?: SerUpsertWithoutArtefatosInput
    connect?: SerWhereUniqueInput
    update?: XOR<XOR<SerUpdateToOneWithWhereWithoutArtefatosInput, SerUpdateWithoutArtefatosInput>, SerUncheckedUpdateWithoutArtefatosInput>
  }

  export type ArtefatoPoderUpdateManyWithoutArtefatoNestedInput = {
    create?: XOR<ArtefatoPoderCreateWithoutArtefatoInput, ArtefatoPoderUncheckedCreateWithoutArtefatoInput> | ArtefatoPoderCreateWithoutArtefatoInput[] | ArtefatoPoderUncheckedCreateWithoutArtefatoInput[]
    connectOrCreate?: ArtefatoPoderCreateOrConnectWithoutArtefatoInput | ArtefatoPoderCreateOrConnectWithoutArtefatoInput[]
    upsert?: ArtefatoPoderUpsertWithWhereUniqueWithoutArtefatoInput | ArtefatoPoderUpsertWithWhereUniqueWithoutArtefatoInput[]
    createMany?: ArtefatoPoderCreateManyArtefatoInputEnvelope
    set?: ArtefatoPoderWhereUniqueInput | ArtefatoPoderWhereUniqueInput[]
    disconnect?: ArtefatoPoderWhereUniqueInput | ArtefatoPoderWhereUniqueInput[]
    delete?: ArtefatoPoderWhereUniqueInput | ArtefatoPoderWhereUniqueInput[]
    connect?: ArtefatoPoderWhereUniqueInput | ArtefatoPoderWhereUniqueInput[]
    update?: ArtefatoPoderUpdateWithWhereUniqueWithoutArtefatoInput | ArtefatoPoderUpdateWithWhereUniqueWithoutArtefatoInput[]
    updateMany?: ArtefatoPoderUpdateManyWithWhereWithoutArtefatoInput | ArtefatoPoderUpdateManyWithWhereWithoutArtefatoInput[]
    deleteMany?: ArtefatoPoderScalarWhereInput | ArtefatoPoderScalarWhereInput[]
  }

  export type ArtefatoPoderUncheckedUpdateManyWithoutArtefatoNestedInput = {
    create?: XOR<ArtefatoPoderCreateWithoutArtefatoInput, ArtefatoPoderUncheckedCreateWithoutArtefatoInput> | ArtefatoPoderCreateWithoutArtefatoInput[] | ArtefatoPoderUncheckedCreateWithoutArtefatoInput[]
    connectOrCreate?: ArtefatoPoderCreateOrConnectWithoutArtefatoInput | ArtefatoPoderCreateOrConnectWithoutArtefatoInput[]
    upsert?: ArtefatoPoderUpsertWithWhereUniqueWithoutArtefatoInput | ArtefatoPoderUpsertWithWhereUniqueWithoutArtefatoInput[]
    createMany?: ArtefatoPoderCreateManyArtefatoInputEnvelope
    set?: ArtefatoPoderWhereUniqueInput | ArtefatoPoderWhereUniqueInput[]
    disconnect?: ArtefatoPoderWhereUniqueInput | ArtefatoPoderWhereUniqueInput[]
    delete?: ArtefatoPoderWhereUniqueInput | ArtefatoPoderWhereUniqueInput[]
    connect?: ArtefatoPoderWhereUniqueInput | ArtefatoPoderWhereUniqueInput[]
    update?: ArtefatoPoderUpdateWithWhereUniqueWithoutArtefatoInput | ArtefatoPoderUpdateWithWhereUniqueWithoutArtefatoInput[]
    updateMany?: ArtefatoPoderUpdateManyWithWhereWithoutArtefatoInput | ArtefatoPoderUpdateManyWithWhereWithoutArtefatoInput[]
    deleteMany?: ArtefatoPoderScalarWhereInput | ArtefatoPoderScalarWhereInput[]
  }

  export type SerCreateNestedOneWithoutResponsaveisInput = {
    create?: XOR<SerCreateWithoutResponsaveisInput, SerUncheckedCreateWithoutResponsaveisInput>
    connectOrCreate?: SerCreateOrConnectWithoutResponsaveisInput
    connect?: SerWhereUniqueInput
  }

  export type SerCreateNestedOneWithoutFilhosInput = {
    create?: XOR<SerCreateWithoutFilhosInput, SerUncheckedCreateWithoutFilhosInput>
    connectOrCreate?: SerCreateOrConnectWithoutFilhosInput
    connect?: SerWhereUniqueInput
  }

  export type SerUpdateOneRequiredWithoutResponsaveisNestedInput = {
    create?: XOR<SerCreateWithoutResponsaveisInput, SerUncheckedCreateWithoutResponsaveisInput>
    connectOrCreate?: SerCreateOrConnectWithoutResponsaveisInput
    upsert?: SerUpsertWithoutResponsaveisInput
    connect?: SerWhereUniqueInput
    update?: XOR<XOR<SerUpdateToOneWithWhereWithoutResponsaveisInput, SerUpdateWithoutResponsaveisInput>, SerUncheckedUpdateWithoutResponsaveisInput>
  }

  export type SerUpdateOneRequiredWithoutFilhosNestedInput = {
    create?: XOR<SerCreateWithoutFilhosInput, SerUncheckedCreateWithoutFilhosInput>
    connectOrCreate?: SerCreateOrConnectWithoutFilhosInput
    upsert?: SerUpsertWithoutFilhosInput
    connect?: SerWhereUniqueInput
    update?: XOR<XOR<SerUpdateToOneWithWhereWithoutFilhosInput, SerUpdateWithoutFilhosInput>, SerUncheckedUpdateWithoutFilhosInput>
  }

  export type PoderDivindadeCreateNestedManyWithoutDivindadeInput = {
    create?: XOR<PoderDivindadeCreateWithoutDivindadeInput, PoderDivindadeUncheckedCreateWithoutDivindadeInput> | PoderDivindadeCreateWithoutDivindadeInput[] | PoderDivindadeUncheckedCreateWithoutDivindadeInput[]
    connectOrCreate?: PoderDivindadeCreateOrConnectWithoutDivindadeInput | PoderDivindadeCreateOrConnectWithoutDivindadeInput[]
    createMany?: PoderDivindadeCreateManyDivindadeInputEnvelope
    connect?: PoderDivindadeWhereUniqueInput | PoderDivindadeWhereUniqueInput[]
  }

  export type ArtefatoCreateNestedManyWithoutSerInput = {
    create?: XOR<ArtefatoCreateWithoutSerInput, ArtefatoUncheckedCreateWithoutSerInput> | ArtefatoCreateWithoutSerInput[] | ArtefatoUncheckedCreateWithoutSerInput[]
    connectOrCreate?: ArtefatoCreateOrConnectWithoutSerInput | ArtefatoCreateOrConnectWithoutSerInput[]
    createMany?: ArtefatoCreateManySerInputEnvelope
    connect?: ArtefatoWhereUniqueInput | ArtefatoWhereUniqueInput[]
  }

  export type SerSerCreateNestedManyWithoutResponsavelInput = {
    create?: XOR<SerSerCreateWithoutResponsavelInput, SerSerUncheckedCreateWithoutResponsavelInput> | SerSerCreateWithoutResponsavelInput[] | SerSerUncheckedCreateWithoutResponsavelInput[]
    connectOrCreate?: SerSerCreateOrConnectWithoutResponsavelInput | SerSerCreateOrConnectWithoutResponsavelInput[]
    createMany?: SerSerCreateManyResponsavelInputEnvelope
    connect?: SerSerWhereUniqueInput | SerSerWhereUniqueInput[]
  }

  export type SerSerCreateNestedManyWithoutFilhoInput = {
    create?: XOR<SerSerCreateWithoutFilhoInput, SerSerUncheckedCreateWithoutFilhoInput> | SerSerCreateWithoutFilhoInput[] | SerSerUncheckedCreateWithoutFilhoInput[]
    connectOrCreate?: SerSerCreateOrConnectWithoutFilhoInput | SerSerCreateOrConnectWithoutFilhoInput[]
    createMany?: SerSerCreateManyFilhoInputEnvelope
    connect?: SerSerWhereUniqueInput | SerSerWhereUniqueInput[]
  }

  export type SerCreateNestedOneWithoutDivinoInput = {
    create?: XOR<SerCreateWithoutDivinoInput, SerUncheckedCreateWithoutDivinoInput>
    connectOrCreate?: SerCreateOrConnectWithoutDivinoInput
    connect?: SerWhereUniqueInput
  }

  export type SerCreateNestedOneWithoutHospedeiroInput = {
    create?: XOR<SerCreateWithoutHospedeiroInput, SerUncheckedCreateWithoutHospedeiroInput>
    connectOrCreate?: SerCreateOrConnectWithoutHospedeiroInput
    connect?: SerWhereUniqueInput
  }

  export type PoderDivindadeUncheckedCreateNestedManyWithoutDivindadeInput = {
    create?: XOR<PoderDivindadeCreateWithoutDivindadeInput, PoderDivindadeUncheckedCreateWithoutDivindadeInput> | PoderDivindadeCreateWithoutDivindadeInput[] | PoderDivindadeUncheckedCreateWithoutDivindadeInput[]
    connectOrCreate?: PoderDivindadeCreateOrConnectWithoutDivindadeInput | PoderDivindadeCreateOrConnectWithoutDivindadeInput[]
    createMany?: PoderDivindadeCreateManyDivindadeInputEnvelope
    connect?: PoderDivindadeWhereUniqueInput | PoderDivindadeWhereUniqueInput[]
  }

  export type ArtefatoUncheckedCreateNestedManyWithoutSerInput = {
    create?: XOR<ArtefatoCreateWithoutSerInput, ArtefatoUncheckedCreateWithoutSerInput> | ArtefatoCreateWithoutSerInput[] | ArtefatoUncheckedCreateWithoutSerInput[]
    connectOrCreate?: ArtefatoCreateOrConnectWithoutSerInput | ArtefatoCreateOrConnectWithoutSerInput[]
    createMany?: ArtefatoCreateManySerInputEnvelope
    connect?: ArtefatoWhereUniqueInput | ArtefatoWhereUniqueInput[]
  }

  export type SerSerUncheckedCreateNestedManyWithoutResponsavelInput = {
    create?: XOR<SerSerCreateWithoutResponsavelInput, SerSerUncheckedCreateWithoutResponsavelInput> | SerSerCreateWithoutResponsavelInput[] | SerSerUncheckedCreateWithoutResponsavelInput[]
    connectOrCreate?: SerSerCreateOrConnectWithoutResponsavelInput | SerSerCreateOrConnectWithoutResponsavelInput[]
    createMany?: SerSerCreateManyResponsavelInputEnvelope
    connect?: SerSerWhereUniqueInput | SerSerWhereUniqueInput[]
  }

  export type SerSerUncheckedCreateNestedManyWithoutFilhoInput = {
    create?: XOR<SerSerCreateWithoutFilhoInput, SerSerUncheckedCreateWithoutFilhoInput> | SerSerCreateWithoutFilhoInput[] | SerSerUncheckedCreateWithoutFilhoInput[]
    connectOrCreate?: SerSerCreateOrConnectWithoutFilhoInput | SerSerCreateOrConnectWithoutFilhoInput[]
    createMany?: SerSerCreateManyFilhoInputEnvelope
    connect?: SerSerWhereUniqueInput | SerSerWhereUniqueInput[]
  }

  export type SerUncheckedCreateNestedOneWithoutHospedeiroInput = {
    create?: XOR<SerCreateWithoutHospedeiroInput, SerUncheckedCreateWithoutHospedeiroInput>
    connectOrCreate?: SerCreateOrConnectWithoutHospedeiroInput
    connect?: SerWhereUniqueInput
  }

  export type EnumTipoSerFieldUpdateOperationsInput = {
    set?: $Enums.TipoSer
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PoderDivindadeUpdateManyWithoutDivindadeNestedInput = {
    create?: XOR<PoderDivindadeCreateWithoutDivindadeInput, PoderDivindadeUncheckedCreateWithoutDivindadeInput> | PoderDivindadeCreateWithoutDivindadeInput[] | PoderDivindadeUncheckedCreateWithoutDivindadeInput[]
    connectOrCreate?: PoderDivindadeCreateOrConnectWithoutDivindadeInput | PoderDivindadeCreateOrConnectWithoutDivindadeInput[]
    upsert?: PoderDivindadeUpsertWithWhereUniqueWithoutDivindadeInput | PoderDivindadeUpsertWithWhereUniqueWithoutDivindadeInput[]
    createMany?: PoderDivindadeCreateManyDivindadeInputEnvelope
    set?: PoderDivindadeWhereUniqueInput | PoderDivindadeWhereUniqueInput[]
    disconnect?: PoderDivindadeWhereUniqueInput | PoderDivindadeWhereUniqueInput[]
    delete?: PoderDivindadeWhereUniqueInput | PoderDivindadeWhereUniqueInput[]
    connect?: PoderDivindadeWhereUniqueInput | PoderDivindadeWhereUniqueInput[]
    update?: PoderDivindadeUpdateWithWhereUniqueWithoutDivindadeInput | PoderDivindadeUpdateWithWhereUniqueWithoutDivindadeInput[]
    updateMany?: PoderDivindadeUpdateManyWithWhereWithoutDivindadeInput | PoderDivindadeUpdateManyWithWhereWithoutDivindadeInput[]
    deleteMany?: PoderDivindadeScalarWhereInput | PoderDivindadeScalarWhereInput[]
  }

  export type ArtefatoUpdateManyWithoutSerNestedInput = {
    create?: XOR<ArtefatoCreateWithoutSerInput, ArtefatoUncheckedCreateWithoutSerInput> | ArtefatoCreateWithoutSerInput[] | ArtefatoUncheckedCreateWithoutSerInput[]
    connectOrCreate?: ArtefatoCreateOrConnectWithoutSerInput | ArtefatoCreateOrConnectWithoutSerInput[]
    upsert?: ArtefatoUpsertWithWhereUniqueWithoutSerInput | ArtefatoUpsertWithWhereUniqueWithoutSerInput[]
    createMany?: ArtefatoCreateManySerInputEnvelope
    set?: ArtefatoWhereUniqueInput | ArtefatoWhereUniqueInput[]
    disconnect?: ArtefatoWhereUniqueInput | ArtefatoWhereUniqueInput[]
    delete?: ArtefatoWhereUniqueInput | ArtefatoWhereUniqueInput[]
    connect?: ArtefatoWhereUniqueInput | ArtefatoWhereUniqueInput[]
    update?: ArtefatoUpdateWithWhereUniqueWithoutSerInput | ArtefatoUpdateWithWhereUniqueWithoutSerInput[]
    updateMany?: ArtefatoUpdateManyWithWhereWithoutSerInput | ArtefatoUpdateManyWithWhereWithoutSerInput[]
    deleteMany?: ArtefatoScalarWhereInput | ArtefatoScalarWhereInput[]
  }

  export type SerSerUpdateManyWithoutResponsavelNestedInput = {
    create?: XOR<SerSerCreateWithoutResponsavelInput, SerSerUncheckedCreateWithoutResponsavelInput> | SerSerCreateWithoutResponsavelInput[] | SerSerUncheckedCreateWithoutResponsavelInput[]
    connectOrCreate?: SerSerCreateOrConnectWithoutResponsavelInput | SerSerCreateOrConnectWithoutResponsavelInput[]
    upsert?: SerSerUpsertWithWhereUniqueWithoutResponsavelInput | SerSerUpsertWithWhereUniqueWithoutResponsavelInput[]
    createMany?: SerSerCreateManyResponsavelInputEnvelope
    set?: SerSerWhereUniqueInput | SerSerWhereUniqueInput[]
    disconnect?: SerSerWhereUniqueInput | SerSerWhereUniqueInput[]
    delete?: SerSerWhereUniqueInput | SerSerWhereUniqueInput[]
    connect?: SerSerWhereUniqueInput | SerSerWhereUniqueInput[]
    update?: SerSerUpdateWithWhereUniqueWithoutResponsavelInput | SerSerUpdateWithWhereUniqueWithoutResponsavelInput[]
    updateMany?: SerSerUpdateManyWithWhereWithoutResponsavelInput | SerSerUpdateManyWithWhereWithoutResponsavelInput[]
    deleteMany?: SerSerScalarWhereInput | SerSerScalarWhereInput[]
  }

  export type SerSerUpdateManyWithoutFilhoNestedInput = {
    create?: XOR<SerSerCreateWithoutFilhoInput, SerSerUncheckedCreateWithoutFilhoInput> | SerSerCreateWithoutFilhoInput[] | SerSerUncheckedCreateWithoutFilhoInput[]
    connectOrCreate?: SerSerCreateOrConnectWithoutFilhoInput | SerSerCreateOrConnectWithoutFilhoInput[]
    upsert?: SerSerUpsertWithWhereUniqueWithoutFilhoInput | SerSerUpsertWithWhereUniqueWithoutFilhoInput[]
    createMany?: SerSerCreateManyFilhoInputEnvelope
    set?: SerSerWhereUniqueInput | SerSerWhereUniqueInput[]
    disconnect?: SerSerWhereUniqueInput | SerSerWhereUniqueInput[]
    delete?: SerSerWhereUniqueInput | SerSerWhereUniqueInput[]
    connect?: SerSerWhereUniqueInput | SerSerWhereUniqueInput[]
    update?: SerSerUpdateWithWhereUniqueWithoutFilhoInput | SerSerUpdateWithWhereUniqueWithoutFilhoInput[]
    updateMany?: SerSerUpdateManyWithWhereWithoutFilhoInput | SerSerUpdateManyWithWhereWithoutFilhoInput[]
    deleteMany?: SerSerScalarWhereInput | SerSerScalarWhereInput[]
  }

  export type SerUpdateOneWithoutDivinoNestedInput = {
    create?: XOR<SerCreateWithoutDivinoInput, SerUncheckedCreateWithoutDivinoInput>
    connectOrCreate?: SerCreateOrConnectWithoutDivinoInput
    upsert?: SerUpsertWithoutDivinoInput
    disconnect?: SerWhereInput | boolean
    delete?: SerWhereInput | boolean
    connect?: SerWhereUniqueInput
    update?: XOR<XOR<SerUpdateToOneWithWhereWithoutDivinoInput, SerUpdateWithoutDivinoInput>, SerUncheckedUpdateWithoutDivinoInput>
  }

  export type SerUpdateOneWithoutHospedeiroNestedInput = {
    create?: XOR<SerCreateWithoutHospedeiroInput, SerUncheckedCreateWithoutHospedeiroInput>
    connectOrCreate?: SerCreateOrConnectWithoutHospedeiroInput
    upsert?: SerUpsertWithoutHospedeiroInput
    disconnect?: SerWhereInput | boolean
    delete?: SerWhereInput | boolean
    connect?: SerWhereUniqueInput
    update?: XOR<XOR<SerUpdateToOneWithWhereWithoutHospedeiroInput, SerUpdateWithoutHospedeiroInput>, SerUncheckedUpdateWithoutHospedeiroInput>
  }

  export type PoderDivindadeUncheckedUpdateManyWithoutDivindadeNestedInput = {
    create?: XOR<PoderDivindadeCreateWithoutDivindadeInput, PoderDivindadeUncheckedCreateWithoutDivindadeInput> | PoderDivindadeCreateWithoutDivindadeInput[] | PoderDivindadeUncheckedCreateWithoutDivindadeInput[]
    connectOrCreate?: PoderDivindadeCreateOrConnectWithoutDivindadeInput | PoderDivindadeCreateOrConnectWithoutDivindadeInput[]
    upsert?: PoderDivindadeUpsertWithWhereUniqueWithoutDivindadeInput | PoderDivindadeUpsertWithWhereUniqueWithoutDivindadeInput[]
    createMany?: PoderDivindadeCreateManyDivindadeInputEnvelope
    set?: PoderDivindadeWhereUniqueInput | PoderDivindadeWhereUniqueInput[]
    disconnect?: PoderDivindadeWhereUniqueInput | PoderDivindadeWhereUniqueInput[]
    delete?: PoderDivindadeWhereUniqueInput | PoderDivindadeWhereUniqueInput[]
    connect?: PoderDivindadeWhereUniqueInput | PoderDivindadeWhereUniqueInput[]
    update?: PoderDivindadeUpdateWithWhereUniqueWithoutDivindadeInput | PoderDivindadeUpdateWithWhereUniqueWithoutDivindadeInput[]
    updateMany?: PoderDivindadeUpdateManyWithWhereWithoutDivindadeInput | PoderDivindadeUpdateManyWithWhereWithoutDivindadeInput[]
    deleteMany?: PoderDivindadeScalarWhereInput | PoderDivindadeScalarWhereInput[]
  }

  export type ArtefatoUncheckedUpdateManyWithoutSerNestedInput = {
    create?: XOR<ArtefatoCreateWithoutSerInput, ArtefatoUncheckedCreateWithoutSerInput> | ArtefatoCreateWithoutSerInput[] | ArtefatoUncheckedCreateWithoutSerInput[]
    connectOrCreate?: ArtefatoCreateOrConnectWithoutSerInput | ArtefatoCreateOrConnectWithoutSerInput[]
    upsert?: ArtefatoUpsertWithWhereUniqueWithoutSerInput | ArtefatoUpsertWithWhereUniqueWithoutSerInput[]
    createMany?: ArtefatoCreateManySerInputEnvelope
    set?: ArtefatoWhereUniqueInput | ArtefatoWhereUniqueInput[]
    disconnect?: ArtefatoWhereUniqueInput | ArtefatoWhereUniqueInput[]
    delete?: ArtefatoWhereUniqueInput | ArtefatoWhereUniqueInput[]
    connect?: ArtefatoWhereUniqueInput | ArtefatoWhereUniqueInput[]
    update?: ArtefatoUpdateWithWhereUniqueWithoutSerInput | ArtefatoUpdateWithWhereUniqueWithoutSerInput[]
    updateMany?: ArtefatoUpdateManyWithWhereWithoutSerInput | ArtefatoUpdateManyWithWhereWithoutSerInput[]
    deleteMany?: ArtefatoScalarWhereInput | ArtefatoScalarWhereInput[]
  }

  export type SerSerUncheckedUpdateManyWithoutResponsavelNestedInput = {
    create?: XOR<SerSerCreateWithoutResponsavelInput, SerSerUncheckedCreateWithoutResponsavelInput> | SerSerCreateWithoutResponsavelInput[] | SerSerUncheckedCreateWithoutResponsavelInput[]
    connectOrCreate?: SerSerCreateOrConnectWithoutResponsavelInput | SerSerCreateOrConnectWithoutResponsavelInput[]
    upsert?: SerSerUpsertWithWhereUniqueWithoutResponsavelInput | SerSerUpsertWithWhereUniqueWithoutResponsavelInput[]
    createMany?: SerSerCreateManyResponsavelInputEnvelope
    set?: SerSerWhereUniqueInput | SerSerWhereUniqueInput[]
    disconnect?: SerSerWhereUniqueInput | SerSerWhereUniqueInput[]
    delete?: SerSerWhereUniqueInput | SerSerWhereUniqueInput[]
    connect?: SerSerWhereUniqueInput | SerSerWhereUniqueInput[]
    update?: SerSerUpdateWithWhereUniqueWithoutResponsavelInput | SerSerUpdateWithWhereUniqueWithoutResponsavelInput[]
    updateMany?: SerSerUpdateManyWithWhereWithoutResponsavelInput | SerSerUpdateManyWithWhereWithoutResponsavelInput[]
    deleteMany?: SerSerScalarWhereInput | SerSerScalarWhereInput[]
  }

  export type SerSerUncheckedUpdateManyWithoutFilhoNestedInput = {
    create?: XOR<SerSerCreateWithoutFilhoInput, SerSerUncheckedCreateWithoutFilhoInput> | SerSerCreateWithoutFilhoInput[] | SerSerUncheckedCreateWithoutFilhoInput[]
    connectOrCreate?: SerSerCreateOrConnectWithoutFilhoInput | SerSerCreateOrConnectWithoutFilhoInput[]
    upsert?: SerSerUpsertWithWhereUniqueWithoutFilhoInput | SerSerUpsertWithWhereUniqueWithoutFilhoInput[]
    createMany?: SerSerCreateManyFilhoInputEnvelope
    set?: SerSerWhereUniqueInput | SerSerWhereUniqueInput[]
    disconnect?: SerSerWhereUniqueInput | SerSerWhereUniqueInput[]
    delete?: SerSerWhereUniqueInput | SerSerWhereUniqueInput[]
    connect?: SerSerWhereUniqueInput | SerSerWhereUniqueInput[]
    update?: SerSerUpdateWithWhereUniqueWithoutFilhoInput | SerSerUpdateWithWhereUniqueWithoutFilhoInput[]
    updateMany?: SerSerUpdateManyWithWhereWithoutFilhoInput | SerSerUpdateManyWithWhereWithoutFilhoInput[]
    deleteMany?: SerSerScalarWhereInput | SerSerScalarWhereInput[]
  }

  export type SerUncheckedUpdateOneWithoutHospedeiroNestedInput = {
    create?: XOR<SerCreateWithoutHospedeiroInput, SerUncheckedCreateWithoutHospedeiroInput>
    connectOrCreate?: SerCreateOrConnectWithoutHospedeiroInput
    upsert?: SerUpsertWithoutHospedeiroInput
    disconnect?: SerWhereInput | boolean
    delete?: SerWhereInput | boolean
    connect?: SerWhereUniqueInput
    update?: XOR<XOR<SerUpdateToOneWithWhereWithoutHospedeiroInput, SerUpdateWithoutHospedeiroInput>, SerUncheckedUpdateWithoutHospedeiroInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumTipoSerFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoSer | EnumTipoSerFieldRefInput<$PrismaModel>
    in?: $Enums.TipoSer[] | ListEnumTipoSerFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoSer[] | ListEnumTipoSerFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoSerFilter<$PrismaModel> | $Enums.TipoSer
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumTipoSerWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoSer | EnumTipoSerFieldRefInput<$PrismaModel>
    in?: $Enums.TipoSer[] | ListEnumTipoSerFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoSer[] | ListEnumTipoSerFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoSerWithAggregatesFilter<$PrismaModel> | $Enums.TipoSer
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoSerFilter<$PrismaModel>
    _max?: NestedEnumTipoSerFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ArtefatoPoderCreateWithoutPoderInput = {
    artefato: ArtefatoCreateNestedOneWithoutArtefatosInput
  }

  export type ArtefatoPoderUncheckedCreateWithoutPoderInput = {
    artefatoNome: string
  }

  export type ArtefatoPoderCreateOrConnectWithoutPoderInput = {
    where: ArtefatoPoderWhereUniqueInput
    create: XOR<ArtefatoPoderCreateWithoutPoderInput, ArtefatoPoderUncheckedCreateWithoutPoderInput>
  }

  export type ArtefatoPoderCreateManyPoderInputEnvelope = {
    data: ArtefatoPoderCreateManyPoderInput | ArtefatoPoderCreateManyPoderInput[]
    skipDuplicates?: boolean
  }

  export type PoderDivindadeCreateWithoutPoderInput = {
    divindade: SerCreateNestedOneWithoutPoderesInput
  }

  export type PoderDivindadeUncheckedCreateWithoutPoderInput = {
    serNome: string
  }

  export type PoderDivindadeCreateOrConnectWithoutPoderInput = {
    where: PoderDivindadeWhereUniqueInput
    create: XOR<PoderDivindadeCreateWithoutPoderInput, PoderDivindadeUncheckedCreateWithoutPoderInput>
  }

  export type PoderDivindadeCreateManyPoderInputEnvelope = {
    data: PoderDivindadeCreateManyPoderInput | PoderDivindadeCreateManyPoderInput[]
    skipDuplicates?: boolean
  }

  export type ArtefatoPoderUpsertWithWhereUniqueWithoutPoderInput = {
    where: ArtefatoPoderWhereUniqueInput
    update: XOR<ArtefatoPoderUpdateWithoutPoderInput, ArtefatoPoderUncheckedUpdateWithoutPoderInput>
    create: XOR<ArtefatoPoderCreateWithoutPoderInput, ArtefatoPoderUncheckedCreateWithoutPoderInput>
  }

  export type ArtefatoPoderUpdateWithWhereUniqueWithoutPoderInput = {
    where: ArtefatoPoderWhereUniqueInput
    data: XOR<ArtefatoPoderUpdateWithoutPoderInput, ArtefatoPoderUncheckedUpdateWithoutPoderInput>
  }

  export type ArtefatoPoderUpdateManyWithWhereWithoutPoderInput = {
    where: ArtefatoPoderScalarWhereInput
    data: XOR<ArtefatoPoderUpdateManyMutationInput, ArtefatoPoderUncheckedUpdateManyWithoutPoderInput>
  }

  export type ArtefatoPoderScalarWhereInput = {
    AND?: ArtefatoPoderScalarWhereInput | ArtefatoPoderScalarWhereInput[]
    OR?: ArtefatoPoderScalarWhereInput[]
    NOT?: ArtefatoPoderScalarWhereInput | ArtefatoPoderScalarWhereInput[]
    artefatoNome?: StringFilter<"ArtefatoPoder"> | string
    poderId?: IntFilter<"ArtefatoPoder"> | number
  }

  export type PoderDivindadeUpsertWithWhereUniqueWithoutPoderInput = {
    where: PoderDivindadeWhereUniqueInput
    update: XOR<PoderDivindadeUpdateWithoutPoderInput, PoderDivindadeUncheckedUpdateWithoutPoderInput>
    create: XOR<PoderDivindadeCreateWithoutPoderInput, PoderDivindadeUncheckedCreateWithoutPoderInput>
  }

  export type PoderDivindadeUpdateWithWhereUniqueWithoutPoderInput = {
    where: PoderDivindadeWhereUniqueInput
    data: XOR<PoderDivindadeUpdateWithoutPoderInput, PoderDivindadeUncheckedUpdateWithoutPoderInput>
  }

  export type PoderDivindadeUpdateManyWithWhereWithoutPoderInput = {
    where: PoderDivindadeScalarWhereInput
    data: XOR<PoderDivindadeUpdateManyMutationInput, PoderDivindadeUncheckedUpdateManyWithoutPoderInput>
  }

  export type PoderDivindadeScalarWhereInput = {
    AND?: PoderDivindadeScalarWhereInput | PoderDivindadeScalarWhereInput[]
    OR?: PoderDivindadeScalarWhereInput[]
    NOT?: PoderDivindadeScalarWhereInput | PoderDivindadeScalarWhereInput[]
    serNome?: StringFilter<"PoderDivindade"> | string
    poderId?: IntFilter<"PoderDivindade"> | number
  }

  export type SerCreateWithoutPoderesInput = {
    nome: string
    sexo: string
    morto: boolean
    tipo: $Enums.TipoSer
    fraqueza?: string | null
    designacao?: string | null
    restituirVita?: boolean | null
    nascimento?: Date | string | null
    raca?: string | null
    profissao?: string | null
    artefatos?: ArtefatoCreateNestedManyWithoutSerInput
    responsaveis?: SerSerCreateNestedManyWithoutResponsavelInput
    filhos?: SerSerCreateNestedManyWithoutFilhoInput
    hospedeiro?: SerCreateNestedOneWithoutDivinoInput
    divino?: SerCreateNestedOneWithoutHospedeiroInput
  }

  export type SerUncheckedCreateWithoutPoderesInput = {
    nome: string
    sexo: string
    morto: boolean
    tipo: $Enums.TipoSer
    fraqueza?: string | null
    designacao?: string | null
    restituirVita?: boolean | null
    nascimento?: Date | string | null
    raca?: string | null
    profissao?: string | null
    nomeMortal?: string | null
    artefatos?: ArtefatoUncheckedCreateNestedManyWithoutSerInput
    responsaveis?: SerSerUncheckedCreateNestedManyWithoutResponsavelInput
    filhos?: SerSerUncheckedCreateNestedManyWithoutFilhoInput
    divino?: SerUncheckedCreateNestedOneWithoutHospedeiroInput
  }

  export type SerCreateOrConnectWithoutPoderesInput = {
    where: SerWhereUniqueInput
    create: XOR<SerCreateWithoutPoderesInput, SerUncheckedCreateWithoutPoderesInput>
  }

  export type PoderCreateWithoutDivindadesInput = {
    nome: string
    descricao: string
    poderes?: ArtefatoPoderCreateNestedManyWithoutPoderInput
  }

  export type PoderUncheckedCreateWithoutDivindadesInput = {
    idPoder?: number
    nome: string
    descricao: string
    poderes?: ArtefatoPoderUncheckedCreateNestedManyWithoutPoderInput
  }

  export type PoderCreateOrConnectWithoutDivindadesInput = {
    where: PoderWhereUniqueInput
    create: XOR<PoderCreateWithoutDivindadesInput, PoderUncheckedCreateWithoutDivindadesInput>
  }

  export type SerUpsertWithoutPoderesInput = {
    update: XOR<SerUpdateWithoutPoderesInput, SerUncheckedUpdateWithoutPoderesInput>
    create: XOR<SerCreateWithoutPoderesInput, SerUncheckedCreateWithoutPoderesInput>
    where?: SerWhereInput
  }

  export type SerUpdateToOneWithWhereWithoutPoderesInput = {
    where?: SerWhereInput
    data: XOR<SerUpdateWithoutPoderesInput, SerUncheckedUpdateWithoutPoderesInput>
  }

  export type SerUpdateWithoutPoderesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sexo?: StringFieldUpdateOperationsInput | string
    morto?: BoolFieldUpdateOperationsInput | boolean
    tipo?: EnumTipoSerFieldUpdateOperationsInput | $Enums.TipoSer
    fraqueza?: NullableStringFieldUpdateOperationsInput | string | null
    designacao?: NullableStringFieldUpdateOperationsInput | string | null
    restituirVita?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    raca?: NullableStringFieldUpdateOperationsInput | string | null
    profissao?: NullableStringFieldUpdateOperationsInput | string | null
    artefatos?: ArtefatoUpdateManyWithoutSerNestedInput
    responsaveis?: SerSerUpdateManyWithoutResponsavelNestedInput
    filhos?: SerSerUpdateManyWithoutFilhoNestedInput
    hospedeiro?: SerUpdateOneWithoutDivinoNestedInput
    divino?: SerUpdateOneWithoutHospedeiroNestedInput
  }

  export type SerUncheckedUpdateWithoutPoderesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sexo?: StringFieldUpdateOperationsInput | string
    morto?: BoolFieldUpdateOperationsInput | boolean
    tipo?: EnumTipoSerFieldUpdateOperationsInput | $Enums.TipoSer
    fraqueza?: NullableStringFieldUpdateOperationsInput | string | null
    designacao?: NullableStringFieldUpdateOperationsInput | string | null
    restituirVita?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    raca?: NullableStringFieldUpdateOperationsInput | string | null
    profissao?: NullableStringFieldUpdateOperationsInput | string | null
    nomeMortal?: NullableStringFieldUpdateOperationsInput | string | null
    artefatos?: ArtefatoUncheckedUpdateManyWithoutSerNestedInput
    responsaveis?: SerSerUncheckedUpdateManyWithoutResponsavelNestedInput
    filhos?: SerSerUncheckedUpdateManyWithoutFilhoNestedInput
    divino?: SerUncheckedUpdateOneWithoutHospedeiroNestedInput
  }

  export type PoderUpsertWithoutDivindadesInput = {
    update: XOR<PoderUpdateWithoutDivindadesInput, PoderUncheckedUpdateWithoutDivindadesInput>
    create: XOR<PoderCreateWithoutDivindadesInput, PoderUncheckedCreateWithoutDivindadesInput>
    where?: PoderWhereInput
  }

  export type PoderUpdateToOneWithWhereWithoutDivindadesInput = {
    where?: PoderWhereInput
    data: XOR<PoderUpdateWithoutDivindadesInput, PoderUncheckedUpdateWithoutDivindadesInput>
  }

  export type PoderUpdateWithoutDivindadesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    poderes?: ArtefatoPoderUpdateManyWithoutPoderNestedInput
  }

  export type PoderUncheckedUpdateWithoutDivindadesInput = {
    idPoder?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    poderes?: ArtefatoPoderUncheckedUpdateManyWithoutPoderNestedInput
  }

  export type ArtefatoCreateWithoutArtefatosInput = {
    nome: string
    objeto: string
    material: string
    destruido: boolean
    ser: SerCreateNestedOneWithoutArtefatosInput
  }

  export type ArtefatoUncheckedCreateWithoutArtefatosInput = {
    nome: string
    objeto: string
    material: string
    destruido: boolean
    nomeSer: string
  }

  export type ArtefatoCreateOrConnectWithoutArtefatosInput = {
    where: ArtefatoWhereUniqueInput
    create: XOR<ArtefatoCreateWithoutArtefatosInput, ArtefatoUncheckedCreateWithoutArtefatosInput>
  }

  export type PoderCreateWithoutPoderesInput = {
    nome: string
    descricao: string
    divindades?: PoderDivindadeCreateNestedManyWithoutPoderInput
  }

  export type PoderUncheckedCreateWithoutPoderesInput = {
    idPoder?: number
    nome: string
    descricao: string
    divindades?: PoderDivindadeUncheckedCreateNestedManyWithoutPoderInput
  }

  export type PoderCreateOrConnectWithoutPoderesInput = {
    where: PoderWhereUniqueInput
    create: XOR<PoderCreateWithoutPoderesInput, PoderUncheckedCreateWithoutPoderesInput>
  }

  export type ArtefatoUpsertWithoutArtefatosInput = {
    update: XOR<ArtefatoUpdateWithoutArtefatosInput, ArtefatoUncheckedUpdateWithoutArtefatosInput>
    create: XOR<ArtefatoCreateWithoutArtefatosInput, ArtefatoUncheckedCreateWithoutArtefatosInput>
    where?: ArtefatoWhereInput
  }

  export type ArtefatoUpdateToOneWithWhereWithoutArtefatosInput = {
    where?: ArtefatoWhereInput
    data: XOR<ArtefatoUpdateWithoutArtefatosInput, ArtefatoUncheckedUpdateWithoutArtefatosInput>
  }

  export type ArtefatoUpdateWithoutArtefatosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    objeto?: StringFieldUpdateOperationsInput | string
    material?: StringFieldUpdateOperationsInput | string
    destruido?: BoolFieldUpdateOperationsInput | boolean
    ser?: SerUpdateOneRequiredWithoutArtefatosNestedInput
  }

  export type ArtefatoUncheckedUpdateWithoutArtefatosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    objeto?: StringFieldUpdateOperationsInput | string
    material?: StringFieldUpdateOperationsInput | string
    destruido?: BoolFieldUpdateOperationsInput | boolean
    nomeSer?: StringFieldUpdateOperationsInput | string
  }

  export type PoderUpsertWithoutPoderesInput = {
    update: XOR<PoderUpdateWithoutPoderesInput, PoderUncheckedUpdateWithoutPoderesInput>
    create: XOR<PoderCreateWithoutPoderesInput, PoderUncheckedCreateWithoutPoderesInput>
    where?: PoderWhereInput
  }

  export type PoderUpdateToOneWithWhereWithoutPoderesInput = {
    where?: PoderWhereInput
    data: XOR<PoderUpdateWithoutPoderesInput, PoderUncheckedUpdateWithoutPoderesInput>
  }

  export type PoderUpdateWithoutPoderesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    divindades?: PoderDivindadeUpdateManyWithoutPoderNestedInput
  }

  export type PoderUncheckedUpdateWithoutPoderesInput = {
    idPoder?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    divindades?: PoderDivindadeUncheckedUpdateManyWithoutPoderNestedInput
  }

  export type SerCreateWithoutArtefatosInput = {
    nome: string
    sexo: string
    morto: boolean
    tipo: $Enums.TipoSer
    fraqueza?: string | null
    designacao?: string | null
    restituirVita?: boolean | null
    nascimento?: Date | string | null
    raca?: string | null
    profissao?: string | null
    poderes?: PoderDivindadeCreateNestedManyWithoutDivindadeInput
    responsaveis?: SerSerCreateNestedManyWithoutResponsavelInput
    filhos?: SerSerCreateNestedManyWithoutFilhoInput
    hospedeiro?: SerCreateNestedOneWithoutDivinoInput
    divino?: SerCreateNestedOneWithoutHospedeiroInput
  }

  export type SerUncheckedCreateWithoutArtefatosInput = {
    nome: string
    sexo: string
    morto: boolean
    tipo: $Enums.TipoSer
    fraqueza?: string | null
    designacao?: string | null
    restituirVita?: boolean | null
    nascimento?: Date | string | null
    raca?: string | null
    profissao?: string | null
    nomeMortal?: string | null
    poderes?: PoderDivindadeUncheckedCreateNestedManyWithoutDivindadeInput
    responsaveis?: SerSerUncheckedCreateNestedManyWithoutResponsavelInput
    filhos?: SerSerUncheckedCreateNestedManyWithoutFilhoInput
    divino?: SerUncheckedCreateNestedOneWithoutHospedeiroInput
  }

  export type SerCreateOrConnectWithoutArtefatosInput = {
    where: SerWhereUniqueInput
    create: XOR<SerCreateWithoutArtefatosInput, SerUncheckedCreateWithoutArtefatosInput>
  }

  export type ArtefatoPoderCreateWithoutArtefatoInput = {
    poder: PoderCreateNestedOneWithoutPoderesInput
  }

  export type ArtefatoPoderUncheckedCreateWithoutArtefatoInput = {
    poderId: number
  }

  export type ArtefatoPoderCreateOrConnectWithoutArtefatoInput = {
    where: ArtefatoPoderWhereUniqueInput
    create: XOR<ArtefatoPoderCreateWithoutArtefatoInput, ArtefatoPoderUncheckedCreateWithoutArtefatoInput>
  }

  export type ArtefatoPoderCreateManyArtefatoInputEnvelope = {
    data: ArtefatoPoderCreateManyArtefatoInput | ArtefatoPoderCreateManyArtefatoInput[]
    skipDuplicates?: boolean
  }

  export type SerUpsertWithoutArtefatosInput = {
    update: XOR<SerUpdateWithoutArtefatosInput, SerUncheckedUpdateWithoutArtefatosInput>
    create: XOR<SerCreateWithoutArtefatosInput, SerUncheckedCreateWithoutArtefatosInput>
    where?: SerWhereInput
  }

  export type SerUpdateToOneWithWhereWithoutArtefatosInput = {
    where?: SerWhereInput
    data: XOR<SerUpdateWithoutArtefatosInput, SerUncheckedUpdateWithoutArtefatosInput>
  }

  export type SerUpdateWithoutArtefatosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sexo?: StringFieldUpdateOperationsInput | string
    morto?: BoolFieldUpdateOperationsInput | boolean
    tipo?: EnumTipoSerFieldUpdateOperationsInput | $Enums.TipoSer
    fraqueza?: NullableStringFieldUpdateOperationsInput | string | null
    designacao?: NullableStringFieldUpdateOperationsInput | string | null
    restituirVita?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    raca?: NullableStringFieldUpdateOperationsInput | string | null
    profissao?: NullableStringFieldUpdateOperationsInput | string | null
    poderes?: PoderDivindadeUpdateManyWithoutDivindadeNestedInput
    responsaveis?: SerSerUpdateManyWithoutResponsavelNestedInput
    filhos?: SerSerUpdateManyWithoutFilhoNestedInput
    hospedeiro?: SerUpdateOneWithoutDivinoNestedInput
    divino?: SerUpdateOneWithoutHospedeiroNestedInput
  }

  export type SerUncheckedUpdateWithoutArtefatosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sexo?: StringFieldUpdateOperationsInput | string
    morto?: BoolFieldUpdateOperationsInput | boolean
    tipo?: EnumTipoSerFieldUpdateOperationsInput | $Enums.TipoSer
    fraqueza?: NullableStringFieldUpdateOperationsInput | string | null
    designacao?: NullableStringFieldUpdateOperationsInput | string | null
    restituirVita?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    raca?: NullableStringFieldUpdateOperationsInput | string | null
    profissao?: NullableStringFieldUpdateOperationsInput | string | null
    nomeMortal?: NullableStringFieldUpdateOperationsInput | string | null
    poderes?: PoderDivindadeUncheckedUpdateManyWithoutDivindadeNestedInput
    responsaveis?: SerSerUncheckedUpdateManyWithoutResponsavelNestedInput
    filhos?: SerSerUncheckedUpdateManyWithoutFilhoNestedInput
    divino?: SerUncheckedUpdateOneWithoutHospedeiroNestedInput
  }

  export type ArtefatoPoderUpsertWithWhereUniqueWithoutArtefatoInput = {
    where: ArtefatoPoderWhereUniqueInput
    update: XOR<ArtefatoPoderUpdateWithoutArtefatoInput, ArtefatoPoderUncheckedUpdateWithoutArtefatoInput>
    create: XOR<ArtefatoPoderCreateWithoutArtefatoInput, ArtefatoPoderUncheckedCreateWithoutArtefatoInput>
  }

  export type ArtefatoPoderUpdateWithWhereUniqueWithoutArtefatoInput = {
    where: ArtefatoPoderWhereUniqueInput
    data: XOR<ArtefatoPoderUpdateWithoutArtefatoInput, ArtefatoPoderUncheckedUpdateWithoutArtefatoInput>
  }

  export type ArtefatoPoderUpdateManyWithWhereWithoutArtefatoInput = {
    where: ArtefatoPoderScalarWhereInput
    data: XOR<ArtefatoPoderUpdateManyMutationInput, ArtefatoPoderUncheckedUpdateManyWithoutArtefatoInput>
  }

  export type SerCreateWithoutResponsaveisInput = {
    nome: string
    sexo: string
    morto: boolean
    tipo: $Enums.TipoSer
    fraqueza?: string | null
    designacao?: string | null
    restituirVita?: boolean | null
    nascimento?: Date | string | null
    raca?: string | null
    profissao?: string | null
    poderes?: PoderDivindadeCreateNestedManyWithoutDivindadeInput
    artefatos?: ArtefatoCreateNestedManyWithoutSerInput
    filhos?: SerSerCreateNestedManyWithoutFilhoInput
    hospedeiro?: SerCreateNestedOneWithoutDivinoInput
    divino?: SerCreateNestedOneWithoutHospedeiroInput
  }

  export type SerUncheckedCreateWithoutResponsaveisInput = {
    nome: string
    sexo: string
    morto: boolean
    tipo: $Enums.TipoSer
    fraqueza?: string | null
    designacao?: string | null
    restituirVita?: boolean | null
    nascimento?: Date | string | null
    raca?: string | null
    profissao?: string | null
    nomeMortal?: string | null
    poderes?: PoderDivindadeUncheckedCreateNestedManyWithoutDivindadeInput
    artefatos?: ArtefatoUncheckedCreateNestedManyWithoutSerInput
    filhos?: SerSerUncheckedCreateNestedManyWithoutFilhoInput
    divino?: SerUncheckedCreateNestedOneWithoutHospedeiroInput
  }

  export type SerCreateOrConnectWithoutResponsaveisInput = {
    where: SerWhereUniqueInput
    create: XOR<SerCreateWithoutResponsaveisInput, SerUncheckedCreateWithoutResponsaveisInput>
  }

  export type SerCreateWithoutFilhosInput = {
    nome: string
    sexo: string
    morto: boolean
    tipo: $Enums.TipoSer
    fraqueza?: string | null
    designacao?: string | null
    restituirVita?: boolean | null
    nascimento?: Date | string | null
    raca?: string | null
    profissao?: string | null
    poderes?: PoderDivindadeCreateNestedManyWithoutDivindadeInput
    artefatos?: ArtefatoCreateNestedManyWithoutSerInput
    responsaveis?: SerSerCreateNestedManyWithoutResponsavelInput
    hospedeiro?: SerCreateNestedOneWithoutDivinoInput
    divino?: SerCreateNestedOneWithoutHospedeiroInput
  }

  export type SerUncheckedCreateWithoutFilhosInput = {
    nome: string
    sexo: string
    morto: boolean
    tipo: $Enums.TipoSer
    fraqueza?: string | null
    designacao?: string | null
    restituirVita?: boolean | null
    nascimento?: Date | string | null
    raca?: string | null
    profissao?: string | null
    nomeMortal?: string | null
    poderes?: PoderDivindadeUncheckedCreateNestedManyWithoutDivindadeInput
    artefatos?: ArtefatoUncheckedCreateNestedManyWithoutSerInput
    responsaveis?: SerSerUncheckedCreateNestedManyWithoutResponsavelInput
    divino?: SerUncheckedCreateNestedOneWithoutHospedeiroInput
  }

  export type SerCreateOrConnectWithoutFilhosInput = {
    where: SerWhereUniqueInput
    create: XOR<SerCreateWithoutFilhosInput, SerUncheckedCreateWithoutFilhosInput>
  }

  export type SerUpsertWithoutResponsaveisInput = {
    update: XOR<SerUpdateWithoutResponsaveisInput, SerUncheckedUpdateWithoutResponsaveisInput>
    create: XOR<SerCreateWithoutResponsaveisInput, SerUncheckedCreateWithoutResponsaveisInput>
    where?: SerWhereInput
  }

  export type SerUpdateToOneWithWhereWithoutResponsaveisInput = {
    where?: SerWhereInput
    data: XOR<SerUpdateWithoutResponsaveisInput, SerUncheckedUpdateWithoutResponsaveisInput>
  }

  export type SerUpdateWithoutResponsaveisInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sexo?: StringFieldUpdateOperationsInput | string
    morto?: BoolFieldUpdateOperationsInput | boolean
    tipo?: EnumTipoSerFieldUpdateOperationsInput | $Enums.TipoSer
    fraqueza?: NullableStringFieldUpdateOperationsInput | string | null
    designacao?: NullableStringFieldUpdateOperationsInput | string | null
    restituirVita?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    raca?: NullableStringFieldUpdateOperationsInput | string | null
    profissao?: NullableStringFieldUpdateOperationsInput | string | null
    poderes?: PoderDivindadeUpdateManyWithoutDivindadeNestedInput
    artefatos?: ArtefatoUpdateManyWithoutSerNestedInput
    filhos?: SerSerUpdateManyWithoutFilhoNestedInput
    hospedeiro?: SerUpdateOneWithoutDivinoNestedInput
    divino?: SerUpdateOneWithoutHospedeiroNestedInput
  }

  export type SerUncheckedUpdateWithoutResponsaveisInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sexo?: StringFieldUpdateOperationsInput | string
    morto?: BoolFieldUpdateOperationsInput | boolean
    tipo?: EnumTipoSerFieldUpdateOperationsInput | $Enums.TipoSer
    fraqueza?: NullableStringFieldUpdateOperationsInput | string | null
    designacao?: NullableStringFieldUpdateOperationsInput | string | null
    restituirVita?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    raca?: NullableStringFieldUpdateOperationsInput | string | null
    profissao?: NullableStringFieldUpdateOperationsInput | string | null
    nomeMortal?: NullableStringFieldUpdateOperationsInput | string | null
    poderes?: PoderDivindadeUncheckedUpdateManyWithoutDivindadeNestedInput
    artefatos?: ArtefatoUncheckedUpdateManyWithoutSerNestedInput
    filhos?: SerSerUncheckedUpdateManyWithoutFilhoNestedInput
    divino?: SerUncheckedUpdateOneWithoutHospedeiroNestedInput
  }

  export type SerUpsertWithoutFilhosInput = {
    update: XOR<SerUpdateWithoutFilhosInput, SerUncheckedUpdateWithoutFilhosInput>
    create: XOR<SerCreateWithoutFilhosInput, SerUncheckedCreateWithoutFilhosInput>
    where?: SerWhereInput
  }

  export type SerUpdateToOneWithWhereWithoutFilhosInput = {
    where?: SerWhereInput
    data: XOR<SerUpdateWithoutFilhosInput, SerUncheckedUpdateWithoutFilhosInput>
  }

  export type SerUpdateWithoutFilhosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sexo?: StringFieldUpdateOperationsInput | string
    morto?: BoolFieldUpdateOperationsInput | boolean
    tipo?: EnumTipoSerFieldUpdateOperationsInput | $Enums.TipoSer
    fraqueza?: NullableStringFieldUpdateOperationsInput | string | null
    designacao?: NullableStringFieldUpdateOperationsInput | string | null
    restituirVita?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    raca?: NullableStringFieldUpdateOperationsInput | string | null
    profissao?: NullableStringFieldUpdateOperationsInput | string | null
    poderes?: PoderDivindadeUpdateManyWithoutDivindadeNestedInput
    artefatos?: ArtefatoUpdateManyWithoutSerNestedInput
    responsaveis?: SerSerUpdateManyWithoutResponsavelNestedInput
    hospedeiro?: SerUpdateOneWithoutDivinoNestedInput
    divino?: SerUpdateOneWithoutHospedeiroNestedInput
  }

  export type SerUncheckedUpdateWithoutFilhosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sexo?: StringFieldUpdateOperationsInput | string
    morto?: BoolFieldUpdateOperationsInput | boolean
    tipo?: EnumTipoSerFieldUpdateOperationsInput | $Enums.TipoSer
    fraqueza?: NullableStringFieldUpdateOperationsInput | string | null
    designacao?: NullableStringFieldUpdateOperationsInput | string | null
    restituirVita?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    raca?: NullableStringFieldUpdateOperationsInput | string | null
    profissao?: NullableStringFieldUpdateOperationsInput | string | null
    nomeMortal?: NullableStringFieldUpdateOperationsInput | string | null
    poderes?: PoderDivindadeUncheckedUpdateManyWithoutDivindadeNestedInput
    artefatos?: ArtefatoUncheckedUpdateManyWithoutSerNestedInput
    responsaveis?: SerSerUncheckedUpdateManyWithoutResponsavelNestedInput
    divino?: SerUncheckedUpdateOneWithoutHospedeiroNestedInput
  }

  export type PoderDivindadeCreateWithoutDivindadeInput = {
    poder: PoderCreateNestedOneWithoutDivindadesInput
  }

  export type PoderDivindadeUncheckedCreateWithoutDivindadeInput = {
    poderId: number
  }

  export type PoderDivindadeCreateOrConnectWithoutDivindadeInput = {
    where: PoderDivindadeWhereUniqueInput
    create: XOR<PoderDivindadeCreateWithoutDivindadeInput, PoderDivindadeUncheckedCreateWithoutDivindadeInput>
  }

  export type PoderDivindadeCreateManyDivindadeInputEnvelope = {
    data: PoderDivindadeCreateManyDivindadeInput | PoderDivindadeCreateManyDivindadeInput[]
    skipDuplicates?: boolean
  }

  export type ArtefatoCreateWithoutSerInput = {
    nome: string
    objeto: string
    material: string
    destruido: boolean
    artefatos?: ArtefatoPoderCreateNestedManyWithoutArtefatoInput
  }

  export type ArtefatoUncheckedCreateWithoutSerInput = {
    nome: string
    objeto: string
    material: string
    destruido: boolean
    artefatos?: ArtefatoPoderUncheckedCreateNestedManyWithoutArtefatoInput
  }

  export type ArtefatoCreateOrConnectWithoutSerInput = {
    where: ArtefatoWhereUniqueInput
    create: XOR<ArtefatoCreateWithoutSerInput, ArtefatoUncheckedCreateWithoutSerInput>
  }

  export type ArtefatoCreateManySerInputEnvelope = {
    data: ArtefatoCreateManySerInput | ArtefatoCreateManySerInput[]
    skipDuplicates?: boolean
  }

  export type SerSerCreateWithoutResponsavelInput = {
    filho: SerCreateNestedOneWithoutFilhosInput
  }

  export type SerSerUncheckedCreateWithoutResponsavelInput = {
    nomeFilho: string
  }

  export type SerSerCreateOrConnectWithoutResponsavelInput = {
    where: SerSerWhereUniqueInput
    create: XOR<SerSerCreateWithoutResponsavelInput, SerSerUncheckedCreateWithoutResponsavelInput>
  }

  export type SerSerCreateManyResponsavelInputEnvelope = {
    data: SerSerCreateManyResponsavelInput | SerSerCreateManyResponsavelInput[]
    skipDuplicates?: boolean
  }

  export type SerSerCreateWithoutFilhoInput = {
    responsavel: SerCreateNestedOneWithoutResponsaveisInput
  }

  export type SerSerUncheckedCreateWithoutFilhoInput = {
    nomeResponsavel: string
  }

  export type SerSerCreateOrConnectWithoutFilhoInput = {
    where: SerSerWhereUniqueInput
    create: XOR<SerSerCreateWithoutFilhoInput, SerSerUncheckedCreateWithoutFilhoInput>
  }

  export type SerSerCreateManyFilhoInputEnvelope = {
    data: SerSerCreateManyFilhoInput | SerSerCreateManyFilhoInput[]
    skipDuplicates?: boolean
  }

  export type SerCreateWithoutDivinoInput = {
    nome: string
    sexo: string
    morto: boolean
    tipo: $Enums.TipoSer
    fraqueza?: string | null
    designacao?: string | null
    restituirVita?: boolean | null
    nascimento?: Date | string | null
    raca?: string | null
    profissao?: string | null
    poderes?: PoderDivindadeCreateNestedManyWithoutDivindadeInput
    artefatos?: ArtefatoCreateNestedManyWithoutSerInput
    responsaveis?: SerSerCreateNestedManyWithoutResponsavelInput
    filhos?: SerSerCreateNestedManyWithoutFilhoInput
    hospedeiro?: SerCreateNestedOneWithoutDivinoInput
  }

  export type SerUncheckedCreateWithoutDivinoInput = {
    nome: string
    sexo: string
    morto: boolean
    tipo: $Enums.TipoSer
    fraqueza?: string | null
    designacao?: string | null
    restituirVita?: boolean | null
    nascimento?: Date | string | null
    raca?: string | null
    profissao?: string | null
    nomeMortal?: string | null
    poderes?: PoderDivindadeUncheckedCreateNestedManyWithoutDivindadeInput
    artefatos?: ArtefatoUncheckedCreateNestedManyWithoutSerInput
    responsaveis?: SerSerUncheckedCreateNestedManyWithoutResponsavelInput
    filhos?: SerSerUncheckedCreateNestedManyWithoutFilhoInput
  }

  export type SerCreateOrConnectWithoutDivinoInput = {
    where: SerWhereUniqueInput
    create: XOR<SerCreateWithoutDivinoInput, SerUncheckedCreateWithoutDivinoInput>
  }

  export type SerCreateWithoutHospedeiroInput = {
    nome: string
    sexo: string
    morto: boolean
    tipo: $Enums.TipoSer
    fraqueza?: string | null
    designacao?: string | null
    restituirVita?: boolean | null
    nascimento?: Date | string | null
    raca?: string | null
    profissao?: string | null
    poderes?: PoderDivindadeCreateNestedManyWithoutDivindadeInput
    artefatos?: ArtefatoCreateNestedManyWithoutSerInput
    responsaveis?: SerSerCreateNestedManyWithoutResponsavelInput
    filhos?: SerSerCreateNestedManyWithoutFilhoInput
    divino?: SerCreateNestedOneWithoutHospedeiroInput
  }

  export type SerUncheckedCreateWithoutHospedeiroInput = {
    nome: string
    sexo: string
    morto: boolean
    tipo: $Enums.TipoSer
    fraqueza?: string | null
    designacao?: string | null
    restituirVita?: boolean | null
    nascimento?: Date | string | null
    raca?: string | null
    profissao?: string | null
    poderes?: PoderDivindadeUncheckedCreateNestedManyWithoutDivindadeInput
    artefatos?: ArtefatoUncheckedCreateNestedManyWithoutSerInput
    responsaveis?: SerSerUncheckedCreateNestedManyWithoutResponsavelInput
    filhos?: SerSerUncheckedCreateNestedManyWithoutFilhoInput
    divino?: SerUncheckedCreateNestedOneWithoutHospedeiroInput
  }

  export type SerCreateOrConnectWithoutHospedeiroInput = {
    where: SerWhereUniqueInput
    create: XOR<SerCreateWithoutHospedeiroInput, SerUncheckedCreateWithoutHospedeiroInput>
  }

  export type PoderDivindadeUpsertWithWhereUniqueWithoutDivindadeInput = {
    where: PoderDivindadeWhereUniqueInput
    update: XOR<PoderDivindadeUpdateWithoutDivindadeInput, PoderDivindadeUncheckedUpdateWithoutDivindadeInput>
    create: XOR<PoderDivindadeCreateWithoutDivindadeInput, PoderDivindadeUncheckedCreateWithoutDivindadeInput>
  }

  export type PoderDivindadeUpdateWithWhereUniqueWithoutDivindadeInput = {
    where: PoderDivindadeWhereUniqueInput
    data: XOR<PoderDivindadeUpdateWithoutDivindadeInput, PoderDivindadeUncheckedUpdateWithoutDivindadeInput>
  }

  export type PoderDivindadeUpdateManyWithWhereWithoutDivindadeInput = {
    where: PoderDivindadeScalarWhereInput
    data: XOR<PoderDivindadeUpdateManyMutationInput, PoderDivindadeUncheckedUpdateManyWithoutDivindadeInput>
  }

  export type ArtefatoUpsertWithWhereUniqueWithoutSerInput = {
    where: ArtefatoWhereUniqueInput
    update: XOR<ArtefatoUpdateWithoutSerInput, ArtefatoUncheckedUpdateWithoutSerInput>
    create: XOR<ArtefatoCreateWithoutSerInput, ArtefatoUncheckedCreateWithoutSerInput>
  }

  export type ArtefatoUpdateWithWhereUniqueWithoutSerInput = {
    where: ArtefatoWhereUniqueInput
    data: XOR<ArtefatoUpdateWithoutSerInput, ArtefatoUncheckedUpdateWithoutSerInput>
  }

  export type ArtefatoUpdateManyWithWhereWithoutSerInput = {
    where: ArtefatoScalarWhereInput
    data: XOR<ArtefatoUpdateManyMutationInput, ArtefatoUncheckedUpdateManyWithoutSerInput>
  }

  export type ArtefatoScalarWhereInput = {
    AND?: ArtefatoScalarWhereInput | ArtefatoScalarWhereInput[]
    OR?: ArtefatoScalarWhereInput[]
    NOT?: ArtefatoScalarWhereInput | ArtefatoScalarWhereInput[]
    nome?: StringFilter<"Artefato"> | string
    objeto?: StringFilter<"Artefato"> | string
    material?: StringFilter<"Artefato"> | string
    destruido?: BoolFilter<"Artefato"> | boolean
    nomeSer?: StringFilter<"Artefato"> | string
  }

  export type SerSerUpsertWithWhereUniqueWithoutResponsavelInput = {
    where: SerSerWhereUniqueInput
    update: XOR<SerSerUpdateWithoutResponsavelInput, SerSerUncheckedUpdateWithoutResponsavelInput>
    create: XOR<SerSerCreateWithoutResponsavelInput, SerSerUncheckedCreateWithoutResponsavelInput>
  }

  export type SerSerUpdateWithWhereUniqueWithoutResponsavelInput = {
    where: SerSerWhereUniqueInput
    data: XOR<SerSerUpdateWithoutResponsavelInput, SerSerUncheckedUpdateWithoutResponsavelInput>
  }

  export type SerSerUpdateManyWithWhereWithoutResponsavelInput = {
    where: SerSerScalarWhereInput
    data: XOR<SerSerUpdateManyMutationInput, SerSerUncheckedUpdateManyWithoutResponsavelInput>
  }

  export type SerSerScalarWhereInput = {
    AND?: SerSerScalarWhereInput | SerSerScalarWhereInput[]
    OR?: SerSerScalarWhereInput[]
    NOT?: SerSerScalarWhereInput | SerSerScalarWhereInput[]
    nomeResponsavel?: StringFilter<"SerSer"> | string
    nomeFilho?: StringFilter<"SerSer"> | string
  }

  export type SerSerUpsertWithWhereUniqueWithoutFilhoInput = {
    where: SerSerWhereUniqueInput
    update: XOR<SerSerUpdateWithoutFilhoInput, SerSerUncheckedUpdateWithoutFilhoInput>
    create: XOR<SerSerCreateWithoutFilhoInput, SerSerUncheckedCreateWithoutFilhoInput>
  }

  export type SerSerUpdateWithWhereUniqueWithoutFilhoInput = {
    where: SerSerWhereUniqueInput
    data: XOR<SerSerUpdateWithoutFilhoInput, SerSerUncheckedUpdateWithoutFilhoInput>
  }

  export type SerSerUpdateManyWithWhereWithoutFilhoInput = {
    where: SerSerScalarWhereInput
    data: XOR<SerSerUpdateManyMutationInput, SerSerUncheckedUpdateManyWithoutFilhoInput>
  }

  export type SerUpsertWithoutDivinoInput = {
    update: XOR<SerUpdateWithoutDivinoInput, SerUncheckedUpdateWithoutDivinoInput>
    create: XOR<SerCreateWithoutDivinoInput, SerUncheckedCreateWithoutDivinoInput>
    where?: SerWhereInput
  }

  export type SerUpdateToOneWithWhereWithoutDivinoInput = {
    where?: SerWhereInput
    data: XOR<SerUpdateWithoutDivinoInput, SerUncheckedUpdateWithoutDivinoInput>
  }

  export type SerUpdateWithoutDivinoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sexo?: StringFieldUpdateOperationsInput | string
    morto?: BoolFieldUpdateOperationsInput | boolean
    tipo?: EnumTipoSerFieldUpdateOperationsInput | $Enums.TipoSer
    fraqueza?: NullableStringFieldUpdateOperationsInput | string | null
    designacao?: NullableStringFieldUpdateOperationsInput | string | null
    restituirVita?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    raca?: NullableStringFieldUpdateOperationsInput | string | null
    profissao?: NullableStringFieldUpdateOperationsInput | string | null
    poderes?: PoderDivindadeUpdateManyWithoutDivindadeNestedInput
    artefatos?: ArtefatoUpdateManyWithoutSerNestedInput
    responsaveis?: SerSerUpdateManyWithoutResponsavelNestedInput
    filhos?: SerSerUpdateManyWithoutFilhoNestedInput
    hospedeiro?: SerUpdateOneWithoutDivinoNestedInput
  }

  export type SerUncheckedUpdateWithoutDivinoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sexo?: StringFieldUpdateOperationsInput | string
    morto?: BoolFieldUpdateOperationsInput | boolean
    tipo?: EnumTipoSerFieldUpdateOperationsInput | $Enums.TipoSer
    fraqueza?: NullableStringFieldUpdateOperationsInput | string | null
    designacao?: NullableStringFieldUpdateOperationsInput | string | null
    restituirVita?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    raca?: NullableStringFieldUpdateOperationsInput | string | null
    profissao?: NullableStringFieldUpdateOperationsInput | string | null
    nomeMortal?: NullableStringFieldUpdateOperationsInput | string | null
    poderes?: PoderDivindadeUncheckedUpdateManyWithoutDivindadeNestedInput
    artefatos?: ArtefatoUncheckedUpdateManyWithoutSerNestedInput
    responsaveis?: SerSerUncheckedUpdateManyWithoutResponsavelNestedInput
    filhos?: SerSerUncheckedUpdateManyWithoutFilhoNestedInput
  }

  export type SerUpsertWithoutHospedeiroInput = {
    update: XOR<SerUpdateWithoutHospedeiroInput, SerUncheckedUpdateWithoutHospedeiroInput>
    create: XOR<SerCreateWithoutHospedeiroInput, SerUncheckedCreateWithoutHospedeiroInput>
    where?: SerWhereInput
  }

  export type SerUpdateToOneWithWhereWithoutHospedeiroInput = {
    where?: SerWhereInput
    data: XOR<SerUpdateWithoutHospedeiroInput, SerUncheckedUpdateWithoutHospedeiroInput>
  }

  export type SerUpdateWithoutHospedeiroInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sexo?: StringFieldUpdateOperationsInput | string
    morto?: BoolFieldUpdateOperationsInput | boolean
    tipo?: EnumTipoSerFieldUpdateOperationsInput | $Enums.TipoSer
    fraqueza?: NullableStringFieldUpdateOperationsInput | string | null
    designacao?: NullableStringFieldUpdateOperationsInput | string | null
    restituirVita?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    raca?: NullableStringFieldUpdateOperationsInput | string | null
    profissao?: NullableStringFieldUpdateOperationsInput | string | null
    poderes?: PoderDivindadeUpdateManyWithoutDivindadeNestedInput
    artefatos?: ArtefatoUpdateManyWithoutSerNestedInput
    responsaveis?: SerSerUpdateManyWithoutResponsavelNestedInput
    filhos?: SerSerUpdateManyWithoutFilhoNestedInput
    divino?: SerUpdateOneWithoutHospedeiroNestedInput
  }

  export type SerUncheckedUpdateWithoutHospedeiroInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sexo?: StringFieldUpdateOperationsInput | string
    morto?: BoolFieldUpdateOperationsInput | boolean
    tipo?: EnumTipoSerFieldUpdateOperationsInput | $Enums.TipoSer
    fraqueza?: NullableStringFieldUpdateOperationsInput | string | null
    designacao?: NullableStringFieldUpdateOperationsInput | string | null
    restituirVita?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    raca?: NullableStringFieldUpdateOperationsInput | string | null
    profissao?: NullableStringFieldUpdateOperationsInput | string | null
    poderes?: PoderDivindadeUncheckedUpdateManyWithoutDivindadeNestedInput
    artefatos?: ArtefatoUncheckedUpdateManyWithoutSerNestedInput
    responsaveis?: SerSerUncheckedUpdateManyWithoutResponsavelNestedInput
    filhos?: SerSerUncheckedUpdateManyWithoutFilhoNestedInput
    divino?: SerUncheckedUpdateOneWithoutHospedeiroNestedInput
  }

  export type ArtefatoPoderCreateManyPoderInput = {
    artefatoNome: string
  }

  export type PoderDivindadeCreateManyPoderInput = {
    serNome: string
  }

  export type ArtefatoPoderUpdateWithoutPoderInput = {
    artefato?: ArtefatoUpdateOneRequiredWithoutArtefatosNestedInput
  }

  export type ArtefatoPoderUncheckedUpdateWithoutPoderInput = {
    artefatoNome?: StringFieldUpdateOperationsInput | string
  }

  export type ArtefatoPoderUncheckedUpdateManyWithoutPoderInput = {
    artefatoNome?: StringFieldUpdateOperationsInput | string
  }

  export type PoderDivindadeUpdateWithoutPoderInput = {
    divindade?: SerUpdateOneRequiredWithoutPoderesNestedInput
  }

  export type PoderDivindadeUncheckedUpdateWithoutPoderInput = {
    serNome?: StringFieldUpdateOperationsInput | string
  }

  export type PoderDivindadeUncheckedUpdateManyWithoutPoderInput = {
    serNome?: StringFieldUpdateOperationsInput | string
  }

  export type ArtefatoPoderCreateManyArtefatoInput = {
    poderId: number
  }

  export type ArtefatoPoderUpdateWithoutArtefatoInput = {
    poder?: PoderUpdateOneRequiredWithoutPoderesNestedInput
  }

  export type ArtefatoPoderUncheckedUpdateWithoutArtefatoInput = {
    poderId?: IntFieldUpdateOperationsInput | number
  }

  export type ArtefatoPoderUncheckedUpdateManyWithoutArtefatoInput = {
    poderId?: IntFieldUpdateOperationsInput | number
  }

  export type PoderDivindadeCreateManyDivindadeInput = {
    poderId: number
  }

  export type ArtefatoCreateManySerInput = {
    nome: string
    objeto: string
    material: string
    destruido: boolean
  }

  export type SerSerCreateManyResponsavelInput = {
    nomeFilho: string
  }

  export type SerSerCreateManyFilhoInput = {
    nomeResponsavel: string
  }

  export type PoderDivindadeUpdateWithoutDivindadeInput = {
    poder?: PoderUpdateOneRequiredWithoutDivindadesNestedInput
  }

  export type PoderDivindadeUncheckedUpdateWithoutDivindadeInput = {
    poderId?: IntFieldUpdateOperationsInput | number
  }

  export type PoderDivindadeUncheckedUpdateManyWithoutDivindadeInput = {
    poderId?: IntFieldUpdateOperationsInput | number
  }

  export type ArtefatoUpdateWithoutSerInput = {
    nome?: StringFieldUpdateOperationsInput | string
    objeto?: StringFieldUpdateOperationsInput | string
    material?: StringFieldUpdateOperationsInput | string
    destruido?: BoolFieldUpdateOperationsInput | boolean
    artefatos?: ArtefatoPoderUpdateManyWithoutArtefatoNestedInput
  }

  export type ArtefatoUncheckedUpdateWithoutSerInput = {
    nome?: StringFieldUpdateOperationsInput | string
    objeto?: StringFieldUpdateOperationsInput | string
    material?: StringFieldUpdateOperationsInput | string
    destruido?: BoolFieldUpdateOperationsInput | boolean
    artefatos?: ArtefatoPoderUncheckedUpdateManyWithoutArtefatoNestedInput
  }

  export type ArtefatoUncheckedUpdateManyWithoutSerInput = {
    nome?: StringFieldUpdateOperationsInput | string
    objeto?: StringFieldUpdateOperationsInput | string
    material?: StringFieldUpdateOperationsInput | string
    destruido?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SerSerUpdateWithoutResponsavelInput = {
    filho?: SerUpdateOneRequiredWithoutFilhosNestedInput
  }

  export type SerSerUncheckedUpdateWithoutResponsavelInput = {
    nomeFilho?: StringFieldUpdateOperationsInput | string
  }

  export type SerSerUncheckedUpdateManyWithoutResponsavelInput = {
    nomeFilho?: StringFieldUpdateOperationsInput | string
  }

  export type SerSerUpdateWithoutFilhoInput = {
    responsavel?: SerUpdateOneRequiredWithoutResponsaveisNestedInput
  }

  export type SerSerUncheckedUpdateWithoutFilhoInput = {
    nomeResponsavel?: StringFieldUpdateOperationsInput | string
  }

  export type SerSerUncheckedUpdateManyWithoutFilhoInput = {
    nomeResponsavel?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}