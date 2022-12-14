type MotaAction<T extends EventType = EventType> = MotaEventMap[T];

type MotaEvent = MotaAction[];

interface MotaEventMap {
    // ---------- 显示文字
    text: TextEvent | string;
    moveTextBox: MoveTextBoxEvent;
    clearTextBox: ClearTextBoxEvent;
    comment: CommentEvent;
    autoText: AutoTextEvent;
    scrollText: ScrollTextEvent;
    setText: SetTextEvent;
    tip: TipEvent;
    confirm: ConfirmEvent;
    choices: ChoicesEvent;
    win: WinEvent;
    lose: LoseEvent;
    restart: EventBase<'restart'>;
    // ---------- 数据相关
    setValue: SetValueEvent;
    setEnemy: SetEnemyEvent;
    setEnemyOnPoint: SetEnemyOnPointEvent;
    resetEnemyOnPoint: ResetEnemyOnPointEvent;
    moveEnemyOnPoint: MoveEnemyOnPointEvent;
    setEquip: SetEquipEvent;
    setFloor: SetFloorEvent;
}

type EventType = keyof MotaEventMap;

// =======================| 普通事件 |======================= //

/**
 * 事件值的前缀
 */
type EventValuePreffix =
    | 'status'
    | 'flag'
    | 'item'
    | 'buff'
    | 'switch'
    | 'temp'
    | 'global';

interface EventBase<T extends EventType> {
    /**
     * 事件的类型
     */
    type: T;
}

/**
 * 带坐标的事件
 */
interface LocedEvent {
    loc?: LocArr[];
    floorId?: FloorIds;
}

/**
 * 可以不刷新状态栏的事件
 */
interface NoRefreshableEvent {
    norefresh?: boolean;
}

/**
 * 关于移动的事件
 */
interface MoveEventBase {
    from?: LocArr;
}

/**
 * 以绝对坐标为基础的移动事件
 */
interface LocBasedMoveEvent extends MoveEventBase {
    to?: LocArr;
}

/**
 * 以相对坐标为基础的移动事件
 */
interface DeltaBasedMoveEvent extends MoveEventBase {
    dxy?: LocArr;
}

/**
 * 显示文字
 */
interface TextEvent extends EventBase<'text'>, NoRefreshableEvent {
    text: string;
    pos?: [number, number, number?];
    code?: number;
}

/**
 * 移动对话框
 */
interface MoveTextBoxEvent extends EventBase<'moveTextBox'> {
    code: number;
    loc: [number, number];
    time: number;
    relative?: boolean;
    moveMode?: Exclude<EaseMode, 'linear'> | 'random';
    async?: boolean;
    norefresh?: boolean;
}

/**
 * 清除对话框
 */
interface ClearTextBoxEvent extends EventBase<'clearTextBox'> {
    code: number[];
}

/**
 * 注释
 */
interface CommentEvent extends EventBase<'comment'> {
    text: string;
}

/**
 * 自动剧情文本
 */
interface AutoTextEvent extends EventBase<'autoText'> {
    text: string;
    time: number;
}

/**
 * 滚动剧情文本
 */
interface ScrollTextEvent extends EventBase<'scrollText'> {
    text: string;
    lineHeight: number;
    async?: boolean;
}

/**
 * 设置文本属性
 */
interface SetTextEvent extends EventBase<'setText'>, Partial<TextAttribute> {}

/**
 * 显示提示
 */
interface TipEvent extends EventBase<'tip'> {
    text: string;
    icon?: AllIds;
}

/**
 * 确认框
 */
interface ConfirmEvent extends EventBase<'confirm'> {
    yes: MotaEvent;
    no: MotaEvent;
    text: string;
    default?: boolean;
}

/**
 * 选择事件的一个选项
 */
interface OneEventChoice {
    text: string;
    action: MotaEvent;
}

/**
 * 选择事件
 */
interface ChoicesEvent extends EventBase<'choices'> {
    text: string;
    choices: OneEventChoice[];
    timeout?: number;
    width?: number;
}

/**
 * 游戏胜利
 */
interface WinEvent extends EventBase<'win'> {
    reason: string;
    norank?: number;
    noexit?: number;
}

/**
 * 游戏失败
 */
interface LoseEvent extends EventBase<'lose'> {
    reason: string;
}

/**
 * 设置数值
 */
interface SetValueEvent extends EventBase<'setText'> {
    name: `${EventValuePreffix}:${string}`;
    value: any;
    norefresh?: boolean;
    operator?: MotaOperator;
}

/**
 * 设置怪物属性
 */
interface SetEnemyEvent extends EventBase<'setEnemy'> {
    id: EnemyIds;
    name: Exclude<keyof Enemy, 'id'>;
    norefresh?: boolean;
    operator?: MotaOperator;
}

/**
 * 设置某点的怪物属性
 */
interface SetEnemyOnPointEvent extends SetEnemyEvent, LocedEvent {
    type: 'setEnemyOnPoint';
}

/**
 * 重置某点的怪物属性
 */
interface ResetEnemyOnPointEvent
    extends EventBase<'resetEnemyOnPoint'>,
        LocedEvent,
        NoRefreshableEvent {}

/**
 * 移动某点怪物属性
 */
interface MoveEnemyOnPointEvent
    extends EventBase<'moveEnemyOnPoint'>,
        LocBasedMoveEvent,
        DeltaBasedMoveEvent,
        NoRefreshableEvent {}

/**
 * 设置装备属性
 */
interface SetEquipEvent extends EventBase<'setEquip'> {
    id: ItemIdOf<'equips'>;
    valueType: 'value' | 'percentage';
    name: keyof SelectType<HeroStatus, number>;
    value: number;
    operator?: MotaOperator;
}

/**
 * 设置楼层属性
 */
interface SetFloorEvent<
    T extends Exclude<keyof NonObjectOf<ResolvedMap>, 'floorId'>
> extends EventBase<'setFloor'> {
    name: T;
    value: ResolvedMap[T];
    floorId?: FloorIds;
}

// =======================| 其他类型的事件 |======================= //

/**
 * 某种类型的商店
 */
type ShopEventOf<T extends keyof ShopEventMap> = ShopEventMap[T];

interface ShopEventMap {
    /**
     * 普通商店
     */
    common: CommonShopEvent;

    /**
     * 道具商店
     */
    item: ItemShopEvent;

    /**
     * 公共事件商店
     */
    event: CommonEventShopEvent;
}

interface ShopEventBase {
    /**
     * 商店的id
     */
    id: string;

    /**
     * 商店快捷名称
     */
    textInList: string;

    /**
     * 是否在未开启状态下快捷商店不显示该商店
     */
    mustEnable: boolean;

    /**
     * 是否不可预览
     */
    disablePreview: boolean;
}

/**
 * 普通商店的一个商店选项
 */
interface CommonShopChoice {
    /**
     * 选项文字
     */
    text: string;

    /**
     * 选项需求，需要是一个表达式
     */
    need: string;

    /**
     * 图标
     */
    icon: AllIds;

    /**
     * 文字的颜色
     */
    color: Color;

    /**
     * 该选项被选中时执行的事件
     */
    action: MotaEvent;
}

/**
 * 普通商店
 */
interface CommonShopEvent extends ShopEventBase {
    /**
     * 商店中显示的文字
     */
    text: string;

    /**
     * 普通商店的选项
     */
    choices: CommonShopChoice[];
}

/**
 * 道具商店的一个选项
 */
interface ItemShopChoice {
    /**
     * 该选项的道具id
     */
    id: AllIdsOf<'items'>;

    /**
     * 道具存量
     */
    number: number;

    /**
     * 购买时消耗的资源数量，是字符串大概是因为这玩意可以用${}
     */
    money: string;

    /**
     * 卖出时获得的资源数量
     */
    sell: string;

    /**
     * 出现条件
     */
    condition: string;
}

/**
 * 道具商店
 */
interface ItemShopEvent extends ShopEventBase {
    /**
     * 道具商店标识
     */
    item: true;

    /**
     * 购买消耗什么东西，金币还是经验
     */
    use: 'money' | 'exp';

    /**
     * 每个选项
     */
    choices: ItemShopChoice[];
}

interface CommonEventShopEvent {
    /**
     * 使用的公共事件
     */
    commonEvent: EventDeclaration;
}

interface AutoEventBase {
    /**
     * 自动事件的触发条件
     */
    condition: string;

    /**
     * 是否只在当前层检测
     */
    currentFloor: boolean;

    /**
     * 优先级，优先级越高越优先执行
     */
    priority: number;

    /**
     * 是否在事件流中延迟执行
     */
    delayExecute: boolean;

    /**
     * 是否允许多次执行
     */
    multiExecute: boolean;

    /**
     * 当条件满足时执行的事件
     */
    data: MotaEvent;
}

interface AutoEvent extends AutoEventBase {
    /**
     * 当前的楼层id
     */
    floorId: FloorIds;

    /**
     * 自动事件的索引
     */
    index: string;

    /**
     * 事件所在的横坐标
     */
    x: number;

    /**
     * 事件所在的纵坐标
     */
    y: number;

    /**
     * 事件的唯一标识符
     */
    symbol: string;
}

interface LevelChooseEvent {
    /**
     * 难度名称
     */
    title: string;

    /**
     * 难度简称
     */
    name: string;

    /**
     * 难度的hard值
     */
    hard: number;

    /**
     * 难度的颜色
     */
    color: RGBArray;

    /**
     * 选择该难度时执行的事件
     */
    action: MotaEvent;
}

interface LevelUpEvent {
    /**
     * 升级所需经验
     */
    need: number;

    /**
     * 这个等级的等级名
     */
    title: string;

    /**
     * 升级时执行的事件
     */
    action: MotaEvent;
}
