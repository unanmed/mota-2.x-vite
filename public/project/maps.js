var maps_90f36752_8815_4be8_b32b_d7fad1d0542e = 
{
	"1": {"cls":"animates","id":"yellowWall","canBreak":true,"animate":1,"doorInfo":{"time":160,"openSound":"door.mp3","closeSound":"door.mp3","keys":{}},"canPass":true},
	"2": {"cls":"animates","id":"whiteWall","canBreak":true,"animate":1,"doorInfo":{"time":160,"openSound":"door.mp3","closeSound":"door.mp3","keys":{}}},
	"3": {"cls":"animates","id":"blueWall","canBreak":true,"animate":1,"doorInfo":{"time":160,"openSound":"door.mp3","closeSound":"door.mp3","keys":{}}},
	"4": {"cls":"animates","id":"star","name":"星空"},
	"5": {"cls":"animates","id":"lava","name":"岩浆"},
	"6": {"cls":"animates","id":"ice","doorInfo":{"time":160,"openSound":"破冰镐","closeSound":"door.mp3","keys":{"icePickaxe":1}},"animate":1},
	"7": {"cls":"terrains","id":"blueShopLeft"},
	"8": {"cls":"terrains","id":"blueShopRight"},
	"9": {"cls":"terrains","id":"pinkShopLeft"},
	"10": {"cls":"terrains","id":"pinkShopRight"},
	"11": {"cls":"animates","id":"lavaNet","canPass":true,"trigger":"null","script":"(function () {\n\t// 血网的伤害效果移动到 checkBlock 中处理\n\n\t// 如果要做一次性血网，可直接注释掉下面这句话：\n\t// core.removeBlock(core.getHeroLoc('x'), core.getHeroLoc('y'));\n})();","name":"血网"},
	"12": {"cls":"animates","id":"poisonNet","canPass":true,"trigger":"null","script":"(function () {\n\tif (!core.hasItem('amulet')) {\n\t\tcore.triggerDebuff('get', 'poison');\n\t\tcore.updateStatusBar();\n\t}\n\n\t// 如果要做一次性毒网，可直接注释掉下面这句话：\n\t// core.removeBlock(core.getHeroLoc('x'), core.getHeroLoc('y'));\n})()","name":"毒网"},
	"13": {"cls":"animates","id":"weakNet","canPass":true,"trigger":"null","script":"(function () {\n\tif (!core.hasItem('amulet')) {\n\t\tcore.triggerDebuff('get', 'weak');\n\t\tcore.updateStatusBar();\n\t}\n\n\t// 如果要做一次性衰网，可直接注释掉下面这句话：\n\t// core.removeBlock(core.getHeroLoc('x'), core.getHeroLoc('y'));\n})()","name":"衰网"},
	"14": {"cls":"animates","id":"curseNet","canPass":true,"trigger":"null","script":"(function () {\n\tif (!core.hasItem('amulet')) {\n\t\tcore.triggerDebuff('get', 'curse');\n\t\tcore.updateStatusBar();\n\t}\n\n\t// 如果要做一次性咒网，可直接注释掉下面这句话：\n\t// core.removeBlock(core.getHeroLoc('x'), core.getHeroLoc('y'));\n})()","name":"咒网"},
	"15": {"cls":"animates","id":"blueLava"},
	"16": {"cls":"animates","id":"water"},
	"20": {"cls":"autotile","id":"autotile"},
	"21": {"cls":"items","id":"yellowKey"},
	"22": {"cls":"items","id":"blueKey"},
	"23": {"cls":"items","id":"redKey"},
	"24": {"cls":"items","id":"greenKey"},
	"25": {"cls":"items","id":"steelKey"},
	"26": {"cls":"items","id":"bigKey"},
	"27": {"cls":"items","id":"redGem"},
	"28": {"cls":"items","id":"blueGem"},
	"29": {"cls":"items","id":"greenGem"},
	"30": {"cls":"items","id":"yellowGem"},
	"31": {"cls":"items","id":"redPotion"},
	"32": {"cls":"items","id":"bluePotion"},
	"33": {"cls":"items","id":"greenPotion"},
	"34": {"cls":"items","id":"yellowPotion"},
	"35": {"cls":"items","id":"sword1"},
	"36": {"cls":"items","id":"shield1"},
	"37": {"cls":"items","id":"sword2"},
	"38": {"cls":"items","id":"shield2"},
	"39": {"cls":"items","id":"sword3"},
	"40": {"cls":"items","id":"shield3"},
	"41": {"cls":"items","id":"sword4"},
	"42": {"cls":"items","id":"shield4"},
	"43": {"cls":"items","id":"sword5"},
	"44": {"cls":"items","id":"shield5"},
	"45": {"cls":"items","id":"book"},
	"46": {"cls":"items","id":"fly"},
	"47": {"cls":"items","id":"pickaxe"},
	"48": {"cls":"items","id":"icePickaxe"},
	"49": {"cls":"items","id":"bomb"},
	"50": {"cls":"items","id":"centerFly"},
	"51": {"cls":"items","id":"upFly"},
	"52": {"cls":"items","id":"downFly"},
	"53": {"cls":"items","id":"coin"},
	"54": {"cls":"items","id":"freezeBadge"},
	"55": {"cls":"items","id":"cross"},
	"56": {"cls":"items","id":"superPotion"},
	"57": {"cls":"items","id":"earthquake"},
	"58": {"cls":"items","id":"poisonWine"},
	"59": {"cls":"items","id":"weakWine"},
	"60": {"cls":"items","id":"curseWine"},
	"61": {"cls":"items","id":"superWine"},
	"62": {"cls":"items","id":"dagger"},
	"63": {"cls":"items","id":"pack"},
	"64": {"cls":"items","id":"amulet"},
	"65": {"cls":"items","id":"hammer"},
	"68": {"cls":"items","id":"lifeWand"},
	"69": {"cls":"items","id":"jumpShoes"},
	"70": {"cls":"items","id":"sword0"},
	"71": {"cls":"items","id":"shield0"},
	"72": {"cls":"items","id":"skill1"},
	"73": {"cls":"items","id":"wand"},
	"81": {"cls":"animates","id":"yellowDoor","trigger":"openDoor","animate":1,"doorInfo":{"time":160,"openSound":"door.mp3","closeSound":"door.mp3","keys":{"yellowKey":1}},"name":"黄门"},
	"82": {"cls":"animates","id":"blueDoor","trigger":"openDoor","animate":1,"doorInfo":{"time":160,"openSound":"door.mp3","closeSound":"door.mp3","keys":{"blueKey":1}},"name":"蓝门"},
	"83": {"cls":"animates","id":"redDoor","trigger":"openDoor","animate":1,"doorInfo":{"time":160,"openSound":"door.mp3","closeSound":"door.mp3","keys":{"redKey":1}},"name":"红门"},
	"84": {"cls":"animates","id":"greenDoor","trigger":"openDoor","animate":1,"doorInfo":{"time":160,"openSound":"door.mp3","closeSound":"door.mp3","keys":{"greenKey":1}},"name":"绿门"},
	"85": {"cls":"animates","id":"specialDoor","trigger":"openDoor","animate":1,"doorInfo":{"time":160,"openSound":"door.mp3","closeSound":"door.mp3","keys":{"specialKey":1}},"name":"机关门"},
	"86": {"cls":"animates","id":"steelDoor","trigger":"openDoor","animate":1,"doorInfo":{"time":160,"openSound":"door.mp3","closeSound":"door.mp3","keys":{"steelKey":1}},"name":"铁门"},
	"87": {"cls":"terrains","id":"upFloor","canPass":true},
	"88": {"cls":"terrains","id":"downFloor","canPass":true},
	"89": {"cls":"animates","id":"portal","canPass":true},
	"90": {"cls":"animates","id":"starPortal","canPass":true},
	"91": {"cls":"animates","id":"upPortal","canPass":true},
	"92": {"cls":"animates","id":"leftPortal","canPass":true},
	"93": {"cls":"animates","id":"downPortal","canPass":true},
	"94": {"cls":"animates","id":"rightPortal","canPass":true},
	"101": {"cls":"animates","id":"crystalUp"},
	"102": {"cls":"animates","id":"crystalBottom"},
	"103": {"cls":"animates","id":"fire"},
	"104": {"cls":"animates","id":"switch"},
	"109": {"cls":"animates","id":"magentaWall","canBreak":true,"animate":1,"doorInfo":{"time":160,"openSound":"door.mp3","closeSound":"door.mp3","keys":{}}},
	"121": {"cls":"npcs","id":"man"},
	"122": {"cls":"npcs","id":"trader"},
	"123": {"cls":"npcs","id":"thief"},
	"124": {"cls":"npcs","id":"fairy"},
	"125": {"cls":"npcs","id":"wizard"},
	"126": {"cls":"npcs","id":"recluse"},
	"127": {"cls":"npcs","id":"king"},
	"128": {"cls":"npcs","id":"youngMan"},
	"129": {"cls":"npcs","id":"sign"},
	"130": {"cls":"npcs","id":"expShop"},
	"131": {"cls":"npcs","id":"moneyShop"},
	"132": {"cls":"npcs","id":"princess"},
	"133": {"cls":"npc48","id":"npc0","faceIds":{"down":"npc0","left":"npc1","right":"npc2","up":"npc3"},"animate":1},
	"134": {"cls":"npc48","id":"npc1","faceIds":{"down":"npc0","left":"npc1","right":"npc2","up":"npc3"},"animate":1},
	"135": {"cls":"npc48","id":"npc2","faceIds":{"down":"npc0","left":"npc1","right":"npc2","up":"npc3"},"animate":1},
	"136": {"cls":"npc48","id":"npc3","faceIds":{"down":"npc0","left":"npc1","right":"npc2","up":"npc3"},"animate":1},
	"137": {"cls":"npcs","id":"greenMan"},
	"138": {"cls":"npcs","id":"blueTrader"},
	"151": {"cls":"autotile","id":"autotile1"},
	"152": {"cls":"autotile","id":"autotile2"},
	"153": {"cls":"autotile","id":"autotile3"},
	"161": {"cls":"terrains","id":"arrowUp","canPass":true,"cannotOut":["left","right","down"],"cannotIn":["up"]},
	"162": {"cls":"terrains","id":"arrowDown","canPass":true,"cannotOut":["left","right","up"],"cannotIn":["down"]},
	"163": {"cls":"terrains","id":"arrowLeft","canPass":true,"cannotOut":["up","down","right"],"cannotIn":["left"]},
	"164": {"cls":"terrains","id":"arrowRight","canPass":true,"cannotOut":["up","down","left"],"cannotIn":["right"]},
	"165": {"cls":"terrains","id":"light","trigger":"null","canPass":true,"script":"(function () {\n\tcore.setBlock(core.getNumberById('darkLight'), core.getHeroLoc('x'), core.getHeroLoc('y'));\n})();"},
	"166": {"cls":"terrains","id":"darkLight"},
	"167": {"cls":"terrains","id":"ski","trigger":"ski","canPass":true},
	"168": {"cls":"terrains","id":"flower","canPass":true},
	"169": {"cls":"terrains","id":"box","trigger":"pushBox"},
	"170": {"cls":"terrains","id":"boxed","trigger":"pushBox"},
	"201": {"cls":"enemys","id":"greenSlime"},
	"202": {"cls":"enemys","id":"redSlime"},
	"203": {"cls":"enemys","id":"blackSlime"},
	"204": {"cls":"enemys","id":"slimelord"},
	"205": {"cls":"enemys","id":"bat"},
	"206": {"cls":"enemys","id":"bigBat"},
	"207": {"cls":"enemys","id":"redBat"},
	"208": {"cls":"enemys","id":"vampire"},
	"209": {"cls":"enemys","id":"skeleton"},
	"210": {"cls":"enemys","id":"skeletonWarrior"},
	"211": {"cls":"enemys","id":"skeletonCaptain"},
	"212": {"cls":"enemys","id":"ghostSoldier"},
	"213": {"cls":"enemys","id":"zombie"},
	"214": {"cls":"enemys","id":"zombieKnight"},
	"215": {"cls":"enemys","id":"rock"},
	"216": {"cls":"enemys","id":"slimeman"},
	"217": {"cls":"enemys","id":"bluePriest"},
	"218": {"cls":"enemys","id":"redPriest"},
	"219": {"cls":"enemys","id":"brownWizard"},
	"220": {"cls":"enemys","id":"redWizard"},
	"221": {"cls":"enemys","id":"yellowGateKeeper"},
	"222": {"cls":"enemys","id":"blueGateKeeper"},
	"223": {"cls":"enemys","id":"redGateKeeper"},
	"224": {"cls":"enemys","id":"swordsman"},
	"225": {"cls":"enemys","id":"soldier"},
	"226": {"cls":"enemys","id":"yellowKnight"},
	"227": {"cls":"enemys","id":"redKnight"},
	"228": {"cls":"enemys","id":"darkKnight"},
	"229": {"cls":"enemys","id":"blackKing"},
	"230": {"cls":"enemys","id":"yellowKing"},
	"231": {"cls":"enemys","id":"greenKing"},
	"232": {"cls":"enemys","id":"blueKnight"},
	"233": {"cls":"enemys","id":"goldSlime"},
	"234": {"cls":"enemys","id":"poisonSkeleton"},
	"235": {"cls":"enemys","id":"poisonBat"},
	"236": {"cls":"enemys","id":"ironRock"},
	"237": {"cls":"enemys","id":"skeletonPriest"},
	"238": {"cls":"enemys","id":"skeletonKing"},
	"239": {"cls":"enemys","id":"skeletonPresbyter"},
	"240": {"cls":"enemys","id":"skeletonKnight"},
	"241": {"cls":"enemys","id":"evilHero"},
	"242": {"cls":"enemys","id":"devilWarrior"},
	"243": {"cls":"enemys","id":"demonPriest"},
	"244": {"cls":"enemys","id":"goldHornSlime"},
	"245": {"cls":"enemys","id":"redKing"},
	"246": {"cls":"enemys","id":"blueKing"},
	"247": {"cls":"enemys","id":"magicMaster"},
	"248": {"cls":"enemys","id":"silverSlime"},
	"249": {"cls":"enemys","id":"blademaster"},
	"250": {"cls":"enemys","id":"whiteHornSlime"},
	"251": {"cls":"enemys","id":"evilPrincess"},
	"252": {"cls":"enemys","id":"evilFairy"},
	"253": {"cls":"enemys","id":"yellowPriest"},
	"254": {"cls":"enemys","id":"redSwordsman"},
	"255": {"cls":"enemys","id":"whiteSlimeman"},
	"256": {"cls":"enemys","id":"poisonZombie"},
	"257": {"cls":"enemys","id":"dragon"},
	"258": {"cls":"enemys","id":"octopus"},
	"259": {"cls":"enemys","id":"fairyEnemy"},
	"260": {"cls":"enemys","id":"princessEnemy"},
	"261": {"cls":"enemy48","id":"angel"},
	"262": {"cls":"enemy48","id":"elemental"},
	"263": {"cls":"enemy48","id":"steelGuard"},
	"264": {"cls":"enemy48","id":"evilBat"},
	"265": {"cls":"enemys","id":"silverSlimelord"},
	"266": {"cls":"enemys","id":"goldSlimelord"},
	"267": {"cls":"enemys","id":"grayRock"},
	"270": {"cls":"enemys","id":"greenKnight"},
	"271": {"cls":"enemys","id":"bowman"},
	"272": {"cls":"enemys","id":"purpleBowman"},
	"275": {"cls":"enemys","id":"watcherSlime"},
	"277": {"cls":"enemys","id":"frostBat"},
	"278": {"cls":"enemys","id":"devilKnight"},
	"279": {"cls":"enemys","id":"grayPriest"},
	"280": {"cls":"enemys","id":"greenGateKeeper"},
	"300": {"cls":"terrains","id":"ground"},
	"301": {"cls":"terrains","id":"sWallT","name":"薄墙-上","cannotOut":["up"],"cannotIn":["up"]},
	"302": {"cls":"terrains","id":"sWallL","name":"薄墙-左","cannotOut":["left"],"cannotIn":["left"]},
	"303": {"cls":"terrains","id":"sWallR","name":"薄墙-右","cannotOut":["right"],"cannotIn":["right"]},
	"304": {"cls":"terrains","id":"sWallB","name":"薄墙-下","cannotOut":["down"],"cannotIn":["down"]},
	"305": {"cls":"terrains","id":"grass"},
	"306": {"cls":"terrains","id":"sWallTL","name":"薄墙-上左","cannotOut":["up","left"],"cannotIn":["up","left"]},
	"307": {"cls":"terrains","id":"sWallBR","name":"薄墙-下右","cannotOut":["down","right"],"cannotIn":["down","right"]},
	"308": {"cls":"terrains","id":"grass2"},
	"309": {"cls":"terrains","id":"sWallTR","name":"薄墙-上右","cannotOut":["up","right"],"cannotIn":["up","right"]},
	"310": {"cls":"terrains","id":"sWallBL","name":"薄墙-下左","cannotOut":["down","left"],"cannotIn":["down","left"]},
	"311": {"cls":"terrains","id":"ground2"},
	"312": {"cls":"terrains","id":"sWallTB","name":"薄墙-上下","cannotOut":["up","down"],"cannotIn":["up","down"]},
	"313": {"cls":"terrains","id":"ground3"},
	"314": {"cls":"terrains","id":"sWallLR","name":"薄墙-左右","cannotOut":["left","right"],"cannotIn":["left","right"]},
	"315": {"cls":"terrains","id":"sWallBLR","name":"薄墙-下左右","cannotOut":["down","left","right"],"cannotIn":["down","left","right"]},
	"316": {"cls":"terrains","id":"sWallTLR","name":"薄墙-上左右","cannotOut":["up","left","right"],"cannotIn":["up","left","right"]},
	"317": {"cls":"terrains","id":"sWallTBR","name":"薄墙-上下右","cannotOut":["up","down","right"],"cannotIn":["up","down","right"]},
	"318": {"cls":"terrains","id":"sWallTBL","name":"薄墙-上下左","cannotOut":["up","down","left"],"cannotIn":["up","down","left"]},
	"319": {"cls":"npc48","id":"tallYellowDoor","trigger":"openDoor","name":"高黄门","animate":1,"doorInfo":{"time":160,"openSound":"door.mp3","closeSound":"door.mp3","keys":{"yellowKey":1}}},
	"320": {"cls":"npc48","id":"tallBlueDoor","trigger":"openDoor","name":"高蓝门","animate":1,"doorInfo":{"time":160,"openSound":"door.mp3","closeSound":"door.mp3","keys":{"blueKey":1}}},
	"321": {"cls":"npc48","id":"tallRedDoor","trigger":"openDoor","name":"高红门","animate":1,"doorInfo":{"time":160,"openSound":"door.mp3","closeSound":"door.mp3","keys":{"redKey":1}}},
	"322": {"cls":"npc48","id":"tallGreenDoor","trigger":"openDoor","name":"高绿门","animate":1,"doorInfo":{"time":160,"openSound":"door.mp3","closeSound":"door.mp3","keys":{"greenKey":1}}},
	"323": {"cls":"npc48","id":"tallSpecialDoor","trigger":"openDoor","name":"高机关门","animate":1,"doorInfo":{"time":160,"openSound":"door.mp3","closeSound":"door.mp3","keys":{"specialKey":1}}},
	"324": {"cls":"npc48","id":"tallSteelDoor","trigger":"openDoor","name":"高铁门","animate":1,"doorInfo":{"time":160,"openSound":"door.mp3","closeSound":"door.mp3","keys":{"steelKey":1}}},
	"325": {"cls":"enemys","id":"keiskeiFairy"},
	"326": {"cls":"enemys","id":"tulipFairy"},
	"327": {"cls":"enemy48","id":"bearDown"},
	"328": {"cls":"enemy48","id":"bearLeft"},
	"329": {"cls":"enemy48","id":"bearRight"},
	"330": {"cls":"enemy48","id":"bearUp"}
}