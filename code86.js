gdjs._49_32_1601_1607_1585_1587Code = {};
gdjs._49_32_1601_1607_1585_1587Code.localVariables = [];
gdjs._49_32_1601_1607_1585_1587Code.GDNewSpriteObjects1= [];
gdjs._49_32_1601_1607_1585_1587Code.GDNewSpriteObjects2= [];
gdjs._49_32_1601_1607_1585_1587Code.GDRightArrowObjects1= [];
gdjs._49_32_1601_1607_1585_1587Code.GDRightArrowObjects2= [];
gdjs._49_32_1601_1607_1585_1587Code.GDLeftArrowObjects1= [];
gdjs._49_32_1601_1607_1585_1587Code.GDLeftArrowObjects2= [];
gdjs._49_32_1601_1607_1585_1587Code.GDLeftArrowRoundButtonObjects1= [];
gdjs._49_32_1601_1607_1585_1587Code.GDLeftArrowRoundButtonObjects2= [];
gdjs._49_32_1601_1607_1585_1587Code.GDRightArrowRoundButtonObjects1= [];
gdjs._49_32_1601_1607_1585_1587Code.GDRightArrowRoundButtonObjects2= [];
gdjs._49_32_1601_1607_1585_1587Code.GD_951585_951575_951610_951578Objects1= [];
gdjs._49_32_1601_1607_1585_1587Code.GD_951585_951575_951610_951578Objects2= [];
gdjs._49_32_1601_1607_1585_1587Code.GD_951604_951610_951601_951578Objects1= [];
gdjs._49_32_1601_1607_1585_1587Code.GD_951604_951610_951601_951578Objects2= [];
gdjs._49_32_1601_1607_1585_1587Code.GDRightArrowRoundButton2Objects1= [];
gdjs._49_32_1601_1607_1585_1587Code.GDRightArrowRoundButton2Objects2= [];


gdjs._49_32_1601_1607_1585_1587Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("رايت"), gdjs._49_32_1601_1607_1585_1587Code.GD_951585_951575_951610_951578Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._49_32_1601_1607_1585_1587Code.GD_951585_951575_951610_951578Objects1.length;i<l;++i) {
    if ( gdjs._49_32_1601_1607_1585_1587Code.GD_951585_951575_951610_951578Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._49_32_1601_1607_1585_1587Code.GD_951585_951575_951610_951578Objects1[k] = gdjs._49_32_1601_1607_1585_1587Code.GD_951585_951575_951610_951578Objects1[i];
        ++k;
    }
}
gdjs._49_32_1601_1607_1585_1587Code.GD_951585_951575_951610_951578Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "فهرس 2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ليفت"), gdjs._49_32_1601_1607_1585_1587Code.GD_951604_951610_951601_951578Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._49_32_1601_1607_1585_1587Code.GD_951604_951610_951601_951578Objects1.length;i<l;++i) {
    if ( gdjs._49_32_1601_1607_1585_1587Code.GD_951604_951610_951601_951578Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._49_32_1601_1607_1585_1587Code.GD_951604_951610_951601_951578Objects1[k] = gdjs._49_32_1601_1607_1585_1587Code.GD_951604_951610_951601_951578Objects1[i];
        ++k;
    }
}
gdjs._49_32_1601_1607_1585_1587Code.GD_951604_951610_951601_951578Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "مشهد بلا عنوان", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs._49_32_1601_1607_1585_1587Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._49_32_1601_1607_1585_1587Code.GDNewSpriteObjects1.length = 0;
gdjs._49_32_1601_1607_1585_1587Code.GDNewSpriteObjects2.length = 0;
gdjs._49_32_1601_1607_1585_1587Code.GDRightArrowObjects1.length = 0;
gdjs._49_32_1601_1607_1585_1587Code.GDRightArrowObjects2.length = 0;
gdjs._49_32_1601_1607_1585_1587Code.GDLeftArrowObjects1.length = 0;
gdjs._49_32_1601_1607_1585_1587Code.GDLeftArrowObjects2.length = 0;
gdjs._49_32_1601_1607_1585_1587Code.GDLeftArrowRoundButtonObjects1.length = 0;
gdjs._49_32_1601_1607_1585_1587Code.GDLeftArrowRoundButtonObjects2.length = 0;
gdjs._49_32_1601_1607_1585_1587Code.GDRightArrowRoundButtonObjects1.length = 0;
gdjs._49_32_1601_1607_1585_1587Code.GDRightArrowRoundButtonObjects2.length = 0;
gdjs._49_32_1601_1607_1585_1587Code.GD_951585_951575_951610_951578Objects1.length = 0;
gdjs._49_32_1601_1607_1585_1587Code.GD_951585_951575_951610_951578Objects2.length = 0;
gdjs._49_32_1601_1607_1585_1587Code.GD_951604_951610_951601_951578Objects1.length = 0;
gdjs._49_32_1601_1607_1585_1587Code.GD_951604_951610_951601_951578Objects2.length = 0;
gdjs._49_32_1601_1607_1585_1587Code.GDRightArrowRoundButton2Objects1.length = 0;
gdjs._49_32_1601_1607_1585_1587Code.GDRightArrowRoundButton2Objects2.length = 0;

gdjs._49_32_1601_1607_1585_1587Code.eventsList0(runtimeScene);
gdjs._49_32_1601_1607_1585_1587Code.GDNewSpriteObjects1.length = 0;
gdjs._49_32_1601_1607_1585_1587Code.GDNewSpriteObjects2.length = 0;
gdjs._49_32_1601_1607_1585_1587Code.GDRightArrowObjects1.length = 0;
gdjs._49_32_1601_1607_1585_1587Code.GDRightArrowObjects2.length = 0;
gdjs._49_32_1601_1607_1585_1587Code.GDLeftArrowObjects1.length = 0;
gdjs._49_32_1601_1607_1585_1587Code.GDLeftArrowObjects2.length = 0;
gdjs._49_32_1601_1607_1585_1587Code.GDLeftArrowRoundButtonObjects1.length = 0;
gdjs._49_32_1601_1607_1585_1587Code.GDLeftArrowRoundButtonObjects2.length = 0;
gdjs._49_32_1601_1607_1585_1587Code.GDRightArrowRoundButtonObjects1.length = 0;
gdjs._49_32_1601_1607_1585_1587Code.GDRightArrowRoundButtonObjects2.length = 0;
gdjs._49_32_1601_1607_1585_1587Code.GD_951585_951575_951610_951578Objects1.length = 0;
gdjs._49_32_1601_1607_1585_1587Code.GD_951585_951575_951610_951578Objects2.length = 0;
gdjs._49_32_1601_1607_1585_1587Code.GD_951604_951610_951601_951578Objects1.length = 0;
gdjs._49_32_1601_1607_1585_1587Code.GD_951604_951610_951601_951578Objects2.length = 0;
gdjs._49_32_1601_1607_1585_1587Code.GDRightArrowRoundButton2Objects1.length = 0;
gdjs._49_32_1601_1607_1585_1587Code.GDRightArrowRoundButton2Objects2.length = 0;


return;

}

gdjs['_49_32_1601_1607_1585_1587Code'] = gdjs._49_32_1601_1607_1585_1587Code;
