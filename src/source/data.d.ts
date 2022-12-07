
type FloorIds =
    | 'sample0'
    | 'sample1'
    | 'sample2'
    | 'MT0'

type ImageIds =
    | 'bear.png'
    | 'bg.jpg'
    | 'brave.png'
    | 'dragon.png'
    | 'hero.png'
    | 'winskin.png'

type AnimationIds =
    | 'hand'
    | 'jianji'
    | 'sword'
    | 'thunder'

type SoundIds =
    | 'attack.mp3'
    | 'bomb.mp3'
    | 'cancel.mp3'
    | 'centerFly.mp3'
    | 'confirm.mp3'
    | 'cursor.mp3'
    | 'door.mp3'
    | 'equip.mp3'
    | 'error.mp3'
    | 'floor.mp3'
    | 'gem.mp3'
    | 'icePickaxe.mp3'
    | 'item.mp3'
    | 'jump.mp3'
    | 'load.mp3'
    | 'open_ui.mp3'
    | 'pickaxe.mp3'
    | 'recovery.mp3'
    | 'save.mp3'
    | 'shop.mp3'
    | 'zone.mp3'

type BgmIds =
    | 'bgm.mp3'

type FontIds = never

interface NameMap {
    '确定': 'confirm.mp3';
    '取消': 'cancel.mp3';
    '操作失败': 'error.mp3';
    '光标移动': 'cursor.mp3';
    '打开界面': 'open_ui.mp3';
    '读档': 'load.mp3';
    '存档': 'save.mp3';
    '获得道具': 'item.mp3';
    '回血': 'recovery.mp3';
    '炸弹': 'bomb.mp3';
    '飞行器': 'centerFly.mp3';
    '开关门': 'door.mp3';
    '上下楼': 'floor.mp3';
    '跳跃': 'jump.mp3';
    '破墙镐': 'pickaxe.mp3';
    '破冰镐': 'icePickaxe.mp3';
    '宝石': 'gem.mp3';
    '阻激夹域': 'zone.mp3';
    '穿脱装备': 'equip.mp3';
    '背景音乐': 'bgm.mp3';
    '攻击': 'attack.mp3';
    '背景图': 'bg.jpg';
    '商店': 'shop.mp3';
    '领域': 'zone';
}
