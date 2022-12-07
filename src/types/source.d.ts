/**
 * 图块类型
 */
type Cls =
    | 'autotile'
    | 'animates'
    | 'enemys'
    | 'items'
    | 'npcs'
    | 'terrains'
    | 'enemy48'
    | 'npc48'
    | 'tilesets';

/**
 * 所有的可动画图块类型
 */
type AnimatableCls = Exclude<Cls, 'items' | 'terrains' | 'tilesets'>;

/**
 * 道具类型
 */
type ItemCls = 'tools' | 'items' | 'equips' | 'constants';

/**
 * 所有的道具id
 */
type AllIds = keyof IdToNumber;

/**
 * 所有的道具数字
 */
type AllNumbers = keyof NumberToId;

/**
 * 某种类型的图块的id
 */
type AllIdsOf<T extends Cls> = keyof {
    [P in keyof IdToCls as IdToCls[P] extends T ? P : never]: P;
};

/**
 * 某种类型的道具的id
 */
type ItemIdOf<T extends ItemCls> = keyof {
    [P in keyof ItemDeclaration as ItemDeclaration[P] extends T ? P : never]: P;
};

/**
 * 获取某个图块的类型
 */
type ClsOf<T extends AllIds> = IdToCls[T];

/**
 * 某种类型的图块数字
 */
type AllNumbersOf<T extends Cls> = IdToNumber[AllIdsOf<T>];