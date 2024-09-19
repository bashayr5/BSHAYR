gdjs._496Code = {};
gdjs._496Code.localVariables = [];
gdjs._496Code.GDNewSpriteObjects1= [];
gdjs._496Code.GDNewSpriteObjects2= [];
gdjs._496Code.GD_951610_951587_951575_951585Objects1= [];
gdjs._496Code.GD_951610_951587_951575_951585Objects2= [];
gdjs._496Code.GD_951610_951605_951610_951606Objects1= [];
gdjs._496Code.GD_951610_951605_951610_951606Objects2= [];
gdjs._496Code.GD_951593_951608_951583_951577Objects1= [];
gdjs._496Code.GD_951593_951608_951583_951577Objects2= [];
gdjs._496Code.GDCircleObjects1= [];
gdjs._496Code.GDCircleObjects2= [];
gdjs._496Code.GDNewTextObjects1= [];
gdjs._496Code.GDNewTextObjects2= [];
gdjs._496Code.GDSoundButtonObjects1= [];
gdjs._496Code.GDSoundButtonObjects2= [];
gdjs._496Code.GDNewVideoObjects1= [];
gdjs._496Code.GDNewVideoObjects2= [];


gdjs._496Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("يمين"), gdjs._496Code.GD_951610_951605_951610_951606Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._496Code.GD_951610_951605_951610_951606Objects1.length;i<l;++i) {
    if ( gdjs._496Code.GD_951610_951605_951610_951606Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._496Code.GD_951610_951605_951610_951606Objects1[k] = gdjs._496Code.GD_951610_951605_951610_951606Objects1[i];
        ++k;
    }
}
gdjs._496Code.GD_951610_951605_951610_951606Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "15", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("يسار"), gdjs._496Code.GD_951610_951587_951575_951585Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._496Code.GD_951610_951587_951575_951585Objects1.length;i<l;++i) {
    if ( gdjs._496Code.GD_951610_951587_951575_951585Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._496Code.GD_951610_951587_951575_951585Objects1[k] = gdjs._496Code.GD_951610_951587_951575_951585Objects1[i];
        ++k;
    }
}
gdjs._496Code.GD_951610_951587_951575_951585Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "17", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("عودة"), gdjs._496Code.GD_951593_951608_951583_951577Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._496Code.GD_951593_951608_951583_951577Objects1.length;i<l;++i) {
    if ( gdjs._496Code.GD_951593_951608_951583_951577Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._496Code.GD_951593_951608_951583_951577Objects1[k] = gdjs._496Code.GD_951593_951608_951583_951577Objects1[i];
        ++k;
    }
}
gdjs._496Code.GD_951593_951608_951583_951577Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "الابواب", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SoundButton"), gdjs._496Code.GDSoundButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._496Code.GDSoundButtonObjects1.length;i<l;++i) {
    if ( gdjs._496Code.GDSoundButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._496Code.GDSoundButtonObjects1[k] = gdjs._496Code.GDSoundButtonObjects1[i];
        ++k;
    }
}
gdjs._496Code.GDSoundButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs._496Code.GDNewVideoObjects1);
{for(var i = 0, len = gdjs._496Code.GDNewVideoObjects1.length ;i < len;++i) {
    gdjs._496Code.GDNewVideoObjects1[i].play();
}
}}

}


};

gdjs._496Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._496Code.GDNewSpriteObjects1.length = 0;
gdjs._496Code.GDNewSpriteObjects2.length = 0;
gdjs._496Code.GD_951610_951587_951575_951585Objects1.length = 0;
gdjs._496Code.GD_951610_951587_951575_951585Objects2.length = 0;
gdjs._496Code.GD_951610_951605_951610_951606Objects1.length = 0;
gdjs._496Code.GD_951610_951605_951610_951606Objects2.length = 0;
gdjs._496Code.GD_951593_951608_951583_951577Objects1.length = 0;
gdjs._496Code.GD_951593_951608_951583_951577Objects2.length = 0;
gdjs._496Code.GDCircleObjects1.length = 0;
gdjs._496Code.GDCircleObjects2.length = 0;
gdjs._496Code.GDNewTextObjects1.length = 0;
gdjs._496Code.GDNewTextObjects2.length = 0;
gdjs._496Code.GDSoundButtonObjects1.length = 0;
gdjs._496Code.GDSoundButtonObjects2.length = 0;
gdjs._496Code.GDNewVideoObjects1.length = 0;
gdjs._496Code.GDNewVideoObjects2.length = 0;

gdjs._496Code.eventsList0(runtimeScene);
gdjs._496Code.GDNewSpriteObjects1.length = 0;
gdjs._496Code.GDNewSpriteObjects2.length = 0;
gdjs._496Code.GD_951610_951587_951575_951585Objects1.length = 0;
gdjs._496Code.GD_951610_951587_951575_951585Objects2.length = 0;
gdjs._496Code.GD_951610_951605_951610_951606Objects1.length = 0;
gdjs._496Code.GD_951610_951605_951610_951606Objects2.length = 0;
gdjs._496Code.GD_951593_951608_951583_951577Objects1.length = 0;
gdjs._496Code.GD_951593_951608_951583_951577Objects2.length = 0;
gdjs._496Code.GDCircleObjects1.length = 0;
gdjs._496Code.GDCircleObjects2.length = 0;
gdjs._496Code.GDNewTextObjects1.length = 0;
gdjs._496Code.GDNewTextObjects2.length = 0;
gdjs._496Code.GDSoundButtonObjects1.length = 0;
gdjs._496Code.GDSoundButtonObjects2.length = 0;
gdjs._496Code.GDNewVideoObjects1.length = 0;
gdjs._496Code.GDNewVideoObjects2.length = 0;


return;

}

gdjs['_496Code'] = gdjs._496Code;
