gdjs._1601_1607_1585_1587_322Code = {};
gdjs._1601_1607_1585_1587_322Code.localVariables = [];
gdjs._1601_1607_1585_1587_322Code.GDNewSpriteObjects1= [];
gdjs._1601_1607_1585_1587_322Code.GDNewSpriteObjects2= [];
gdjs._1601_1607_1585_1587_322Code.GDRightArrowObjects1= [];
gdjs._1601_1607_1585_1587_322Code.GDRightArrowObjects2= [];
gdjs._1601_1607_1585_1587_322Code.GDLeftArrowObjects1= [];
gdjs._1601_1607_1585_1587_322Code.GDLeftArrowObjects2= [];
gdjs._1601_1607_1585_1587_322Code.GDLeftArrowRoundButtonObjects1= [];
gdjs._1601_1607_1585_1587_322Code.GDLeftArrowRoundButtonObjects2= [];
gdjs._1601_1607_1585_1587_322Code.GDRightArrowRoundButtonObjects1= [];
gdjs._1601_1607_1585_1587_322Code.GDRightArrowRoundButtonObjects2= [];
gdjs._1601_1607_1585_1587_322Code.GDRightArrowButtonObjects1= [];
gdjs._1601_1607_1585_1587_322Code.GDRightArrowButtonObjects2= [];
gdjs._1601_1607_1585_1587_322Code.GDLeftArrowRoundButton2Objects1= [];
gdjs._1601_1607_1585_1587_322Code.GDLeftArrowRoundButton2Objects2= [];
gdjs._1601_1607_1585_1587_322Code.GDRightArrowRoundButton2Objects1= [];
gdjs._1601_1607_1585_1587_322Code.GDRightArrowRoundButton2Objects2= [];


gdjs._1601_1607_1585_1587_322Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("RightArrowButton"), gdjs._1601_1607_1585_1587_322Code.GDRightArrowButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1601_1607_1585_1587_322Code.GDRightArrowButtonObjects1.length;i<l;++i) {
    if ( gdjs._1601_1607_1585_1587_322Code.GDRightArrowButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._1601_1607_1585_1587_322Code.GDRightArrowButtonObjects1[k] = gdjs._1601_1607_1585_1587_322Code.GDRightArrowButtonObjects1[i];
        ++k;
    }
}
gdjs._1601_1607_1585_1587_322Code.GDRightArrowButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "فهرس3", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LeftArrowRoundButton2"), gdjs._1601_1607_1585_1587_322Code.GDLeftArrowRoundButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1601_1607_1585_1587_322Code.GDLeftArrowRoundButton2Objects1.length;i<l;++i) {
    if ( gdjs._1601_1607_1585_1587_322Code.GDLeftArrowRoundButton2Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._1601_1607_1585_1587_322Code.GDLeftArrowRoundButton2Objects1[k] = gdjs._1601_1607_1585_1587_322Code.GDLeftArrowRoundButton2Objects1[i];
        ++k;
    }
}
gdjs._1601_1607_1585_1587_322Code.GDLeftArrowRoundButton2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "1 فهرس", false);
}}

}


};

gdjs._1601_1607_1585_1587_322Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._1601_1607_1585_1587_322Code.GDNewSpriteObjects1.length = 0;
gdjs._1601_1607_1585_1587_322Code.GDNewSpriteObjects2.length = 0;
gdjs._1601_1607_1585_1587_322Code.GDRightArrowObjects1.length = 0;
gdjs._1601_1607_1585_1587_322Code.GDRightArrowObjects2.length = 0;
gdjs._1601_1607_1585_1587_322Code.GDLeftArrowObjects1.length = 0;
gdjs._1601_1607_1585_1587_322Code.GDLeftArrowObjects2.length = 0;
gdjs._1601_1607_1585_1587_322Code.GDLeftArrowRoundButtonObjects1.length = 0;
gdjs._1601_1607_1585_1587_322Code.GDLeftArrowRoundButtonObjects2.length = 0;
gdjs._1601_1607_1585_1587_322Code.GDRightArrowRoundButtonObjects1.length = 0;
gdjs._1601_1607_1585_1587_322Code.GDRightArrowRoundButtonObjects2.length = 0;
gdjs._1601_1607_1585_1587_322Code.GDRightArrowButtonObjects1.length = 0;
gdjs._1601_1607_1585_1587_322Code.GDRightArrowButtonObjects2.length = 0;
gdjs._1601_1607_1585_1587_322Code.GDLeftArrowRoundButton2Objects1.length = 0;
gdjs._1601_1607_1585_1587_322Code.GDLeftArrowRoundButton2Objects2.length = 0;
gdjs._1601_1607_1585_1587_322Code.GDRightArrowRoundButton2Objects1.length = 0;
gdjs._1601_1607_1585_1587_322Code.GDRightArrowRoundButton2Objects2.length = 0;

gdjs._1601_1607_1585_1587_322Code.eventsList0(runtimeScene);
gdjs._1601_1607_1585_1587_322Code.GDNewSpriteObjects1.length = 0;
gdjs._1601_1607_1585_1587_322Code.GDNewSpriteObjects2.length = 0;
gdjs._1601_1607_1585_1587_322Code.GDRightArrowObjects1.length = 0;
gdjs._1601_1607_1585_1587_322Code.GDRightArrowObjects2.length = 0;
gdjs._1601_1607_1585_1587_322Code.GDLeftArrowObjects1.length = 0;
gdjs._1601_1607_1585_1587_322Code.GDLeftArrowObjects2.length = 0;
gdjs._1601_1607_1585_1587_322Code.GDLeftArrowRoundButtonObjects1.length = 0;
gdjs._1601_1607_1585_1587_322Code.GDLeftArrowRoundButtonObjects2.length = 0;
gdjs._1601_1607_1585_1587_322Code.GDRightArrowRoundButtonObjects1.length = 0;
gdjs._1601_1607_1585_1587_322Code.GDRightArrowRoundButtonObjects2.length = 0;
gdjs._1601_1607_1585_1587_322Code.GDRightArrowButtonObjects1.length = 0;
gdjs._1601_1607_1585_1587_322Code.GDRightArrowButtonObjects2.length = 0;
gdjs._1601_1607_1585_1587_322Code.GDLeftArrowRoundButton2Objects1.length = 0;
gdjs._1601_1607_1585_1587_322Code.GDLeftArrowRoundButton2Objects2.length = 0;
gdjs._1601_1607_1585_1587_322Code.GDRightArrowRoundButton2Objects1.length = 0;
gdjs._1601_1607_1585_1587_322Code.GDRightArrowRoundButton2Objects2.length = 0;


return;

}

gdjs['_1601_1607_1585_1587_322Code'] = gdjs._1601_1607_1585_1587_322Code;
