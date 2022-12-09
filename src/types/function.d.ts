interface ActionData {
    /**
     * 当按键弹起时
     * @param keyCode 按键的keyCode
     * @param altKey 当前是否按下了alt键
     */
    onKeyUp(keyCode: number, altKey: boolean): boolean;

    /**
     * 当点击状态栏时
     * @param px 点击的横坐标
     * @param py 点击的纵坐标
     * @param vertical 当前是否是竖屏
     */
    onClickStatusBar(px: number, py: number, vertical: boolean): boolean;
}

interface ControlData {
    /**
     * 获取保存信息
     */
    saveData(): Save;

    /**
     * 读取一个存档
     * @param data 存档信息
     * @param callback 读取完毕后的回调函数
     */
    loadData(data: Save, callback?: () => void): void;

    /**
     * 获取一个属性对应的中文名
     * @param name 要获取的状态名称
     */
    getStatusLabel(name: string): string;

    /**
     * 变更勇士的debuff
     * @param action 触发的类型，get表示获得debuff，remove表示移除debuff
     * @param type 获取的debuff列表
     */
    triggerDebuff(action: 'get' | 'remove', type: string | string[]): void;

    /**
     * 立即仅更新状态栏
     */
    updateStatusBar(): void;

    /**
     * 更新一个地图的地图伤害
     * @param floorId 要更新的楼层id
     */
    updateCheckBlock(floorId: FloorIds): void;

    /**
     * 每步移动后执行的函数
     * @param callback 回调函数（好像没什么必要吧
     */
    moveOneStep(callback?: () => void): void;

    /**
     * 瞬移到某一点
     * @param x 瞬移至的横坐标
     * @param y 瞬移至的纵坐标
     * @param ignoreSteps 忽略的步数，不填则会自动计算
     */
    moveDirectly(x: number, y: number, ignoreSteps?: number): boolean;

    /**
     * 并行脚本
     * @param time 距离游戏加载完毕经过的时间
     */
    parallelDo(time: number): void;
}
