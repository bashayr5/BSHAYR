gdjs._1601_1607_1585_15873Code = {};
gdjs._1601_1607_1585_15873Code.localVariables = [];
gdjs._1601_1607_1585_15873Code.GDNewSpriteObjects1= [];
gdjs._1601_1607_1585_15873Code.GDNewSpriteObjects2= [];
gdjs._1601_1607_1585_15873Code.GDRightArrowObjects1= [];
gdjs._1601_1607_1585_15873Code.GDRightArrowObjects2= [];
gdjs._1601_1607_1585_15873Code.GDLeftArrowObjects1= [];
gdjs._1601_1607_1585_15873Code.GDLeftArrowObjects2= [];
gdjs._1601_1607_1585_15873Code.GDLeftArrowRoundButtonObjects1= [];
gdjs._1601_1607_1585_15873Code.GDLeftArrowRoundButtonObjects2= [];
gdjs._1601_1607_1585_15873Code.GDRightArrowRoundButtonObjects1= [];
gdjs._1601_1607_1585_15873Code.GDRightArrowRoundButtonObjects2= [];
gdjs._1601_1607_1585_15873Code.GD_951585_951575_951610_951578Objects1= [];
gdjs._1601_1607_1585_15873Code.GD_951585_951575_951610_951578Objects2= [];
gdjs._1601_1607_1585_15873Code.GD_951604_951610_951601_951578Objects1= [];
gdjs._1601_1607_1585_15873Code.GD_951604_951610_951601_951578Objects2= [];
gdjs._1601_1607_1585_15873Code.GDRightArrowRoundButton2Objects1= [];
gdjs._1601_1607_1585_15873Code.GDRightArrowRoundButton2Objects2= [];


gdjs._1601_1607_1585_15873Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("رايت"), gdjs._1601_1607_1585_15873Code.GD_951585_951575_951610_951578Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1601_1607_1585_15873Code.GD_951585_951575_951610_951578Objects1.length;i<l;++i) {
    if ( gdjs._1601_1607_1585_15873Code.GD_951585_951575_951610_951578Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._1601_1607_1585_15873Code.GD_951585_951575_951610_951578Objects1[k] = gdjs._1601_1607_1585_15873Code.GD_951585_951575_951610_951578Objects1[i];
        ++k;
    }
}
gdjs._1601_1607_1585_15873Code.GD_951585_951575_951610_951578Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "مشهد بلا عنوان", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ليفت"), gdjs._1601_1607_1585_15873Code.GD_951604_951610_951601_951578Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1601_1607_1585_15873Code.GD_951604_951610_951601_951578Objects1.length;i<l;++i) {
    if ( gdjs._1601_1607_1585_15873Code.GD_951604_951610_951601_951578Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._1601_1607_1585_15873Code.GD_951604_951610_951601_951578Objects1[k] = gdjs._1601_1607_1585_15873Code.GD_951604_951610_951601_951578Objects1[i];
        ++k;
    }
}
gdjs._1601_1607_1585_15873Code.GD_951604_951610_951601_951578Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "فهرس 2", false);
}}

}


};

gdjs._1601_1607_1585_15873Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._1601_1607_1585_15873Code.GDNewSpriteObjects1.length = 0;
gdjs._1601_1607_1585_15873Code.GDNewSpriteObjects2.length = 0;
gdjs._1601_1607_1585_15873Code.GDRightArrowObjects1.length = 0;
gdjs._1601_1607_1585_15873Code.GDRightArrowObjects2.length = 0;
gdjs._1601_1607_1585_15873Code.GDLeftArrowObjects1.length = 0;
gdjs._1601_1607_1585_15873Code.GDLeftArrowObjects2.length = 0;
gdjs._1601_1607_1585_15873Code.GDLeftArrowRoundButtonObjects1.length = 0;
gdjs._1601_1607_1585_15873Code.GDLeftArrowRoundButtonObjects2.length = 0;
gdjs._1601_1607_1585_15873Code.GDRightArrowRoundButtonObjects1.length = 0;
gdjs._1601_1607_1585_15873Code.GDRightArrowRoundButtonObjects2.length = 0;
gdjs._1601_1607_1585_15873Code.GD_951585_951575_951610_951578Objects1.length = 0;
gdjs._1601_1607_1585_15873Code.GD_951585_951575_951610_951578Objects2.length = 0;
gdjs._1601_1607_1585_15873Code.GD_951604_951610_951601_951578Objects1.length = 0;
gdjs._1601_1607_1585_15873Code.GD_951604_951610_951601_951578Objects2.length = 0;
gdjs._1601_1607_1585_15873Code.GDRightArrowRoundButton2Objects1.length = 0;
gdjs._1601_1607_1585_15873Code.GDRightArrowRoundButton2Objects2.length = 0;

gdjs._1601_1607_1585_15873Code.eventsList0(runtimeScene);
gdjs._1601_1607_1585_15873Code.GDNewSpriteObjects1.length = 0;
gdjs._1601_1607_1585_15873Code.GDNewSpriteObjects2.length = 0;
gdjs._1601_1607_1585_15873Code.GDRightArrowObjects1.length = 0;
gdjs._1601_1607_1585_15873Code.GDRightArrowObjects2.length = 0;
gdjs._1601_1607_1585_15873Code.GDLeftArrowObjects1.length = 0;
gdjs._1601_1607_1585_15873Code.GDLeftArrowObjects2.length = 0;
gdjs._1601_1607_1585_15873Code.GDLeftArrowRoundButtonObjects1.length = 0;
gdjs._1601_1607_1585_15873Code.GDLeftArrowRoundButtonObjects2.length = 0;
gdjs._1601_1607_1585_15873Code.GDRightArrowRoundButtonObjects1.length = 0;
gdjs._1601_1607_1585_15873Code.GDRightArrowRoundButtonObjects2.length = 0;
gdjs._1601_1607_1585_15873Code.GD_951585_951575_951610_951578Objects1.length = 0;
gdjs._1601_1607_1585_15873Code.GD_951585_951575_951610_951578Objects2.length = 0;
gdjs._1601_1607_1585_15873Code.GD_951604_951610_951601_951578Objects1.length = 0;
gdjs._1601_1607_1585_15873Code.GD_951604_951610_951601_951578Objects2.length = 0;
gdjs._1601_1607_1585_15873Code.GDRightArrowRoundButton2Objects1.length = 0;
gdjs._1601_1607_1585_15873Code.GDRightArrowRoundButton2Objects2.length = 0;


return;

}

gdjs['_1601_1607_1585_15873Code'] = gdjs._1601_1607_1585_15873Code;
