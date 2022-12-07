/** 和图标相关的函数 */
interface Icons {
    /** 获得所有图标类型 */
    getIcons(): void;

    /**
     * 根据ID获得图块类型
     */
    getClsFromId<T extends AllIds>(id: T): ClsOf<T>;

    /** 获得所有图标的ID */
    getAllIconIds(): void;

    /** 根据图块数字或ID获得所在的tileset和坐标信息 */
    getTilesetOffset(id?: string): void;
}

declare const icons: new () => Icons;
