gdjs._547Code = {};
gdjs._547Code.localVariables = [];
gdjs._547Code.GDNewSpriteObjects1= [];
gdjs._547Code.GDNewSpriteObjects2= [];
gdjs._547Code.GD_951610_951587_951575_951585Objects1= [];
gdjs._547Code.GD_951610_951587_951575_951585Objects2= [];
gdjs._547Code.GD_951610_951605_951610_951606Objects1= [];
gdjs._547Code.GD_951610_951605_951610_951606Objects2= [];
gdjs._547Code.GD_951593_951608_951583_951577Objects1= [];
gdjs._547Code.GD_951593_951608_951583_951577Objects2= [];
gdjs._547Code.GDCircleObjects1= [];
gdjs._547Code.GDCircleObjects2= [];
gdjs._547Code.GDNewTextObjects1= [];
gdjs._547Code.GDNewTextObjects2= [];
gdjs._547Code.GDSoundButtonObjects1= [];
gdjs._547Code.GDSoundButtonObjects2= [];
gdjs._547Code.GDNewVideoObjects1= [];
gdjs._547Code.GDNewVideoObjects2= [];


gdjs._547Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("يمين"), gdjs._547Code.GD_951610_951605_951610_951606Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._547Code.GD_951610_951605_951610_951606Objects1.length;i<l;++i) {
    if ( gdjs._547Code.GD_951610_951605_951610_951606Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._547Code.GD_951610_951605_951610_951606Objects1[k] = gdjs._547Code.GD_951610_951605_951610_951606Objects1[i];
        ++k;
    }
}
gdjs._547Code.GD_951610_951605_951610_951606Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "66", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("يسار"), gdjs._547Code.GD_951610_951587_951575_951585Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._547Code.GD_951610_951587_951575_951585Objects1.length;i<l;++i) {
    if ( gdjs._547Code.GD_951610_951587_951575_951585Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._547Code.GD_951610_951587_951575_951585Objects1[k] = gdjs._547Code.GD_951610_951587_951575_951585Objects1[i];
        ++k;
    }
}
gdjs._547Code.GD_951610_951587_951575_951585Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "68", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("عودة"), gdjs._547Code.GD_951593_951608_951583_951577Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._547Code.GD_951593_951608_951583_951577Objects1.length;i<l;++i) {
    if ( gdjs._547Code.GD_951593_951608_951583_951577Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._547Code.GD_951593_951608_951583_951577Objects1[k] = gdjs._547Code.GD_951593_951608_951583_951577Objects1[i];
        ++k;
    }
}
gdjs._547Code.GD_951593_951608_951583_951577Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "الابواب", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SoundButton"), gdjs._547Code.GDSoundButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._547Code.GDSoundButtonObjects1.length;i<l;++i) {
    if ( gdjs._547Code.GDSoundButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._547Code.GDSoundButtonObjects1[k] = gdjs._547Code.GDSoundButtonObjects1[i];
        ++k;
    }
}
gdjs._547Code.GDSoundButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs._547Code.GDNewVideoObjects1);
{for(var i = 0, len = gdjs._547Code.GDNewVideoObjects1.length ;i < len;++i) {
    gdjs._547Code.GDNewVideoObjects1[i].play();
}
}}

}


};

gdjs._547Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._547Code.GDNewSpriteObjects1.length = 0;
gdjs._547Code.GDNewSpriteObjects2.length = 0;
gdjs._547Code.GD_951610_951587_951575_951585Objects1.length = 0;
gdjs._547Code.GD_951610_951587_951575_951585Objects2.length = 0;
gdjs._547Code.GD_951610_951605_951610_951606Objects1.length = 0;
gdjs._547Code.GD_951610_951605_951610_951606Objects2.length = 0;
gdjs._547Code.GD_951593_951608_951583_951577Objects1.length = 0;
gdjs._547Code.GD_951593_951608_951583_951577Objects2.length = 0;
gdjs._547Code.GDCircleObjects1.length = 0;
gdjs._547Code.GDCircleObjects2.length = 0;
gdjs._547Code.GDNewTextObjects1.length = 0;
gdjs._547Code.GDNewTextObjects2.length = 0;
gdjs._547Code.GDSoundButtonObjects1.length = 0;
gdjs._547Code.GDSoundButtonObjects2.length = 0;
gdjs._547Code.GDNewVideoObjects1.length = 0;
gdjs._547Code.GDNewVideoObjects2.length = 0;

gdjs._547Code.eventsList0(runtimeScene);
gdjs._547Code.GDNewSpriteObjects1.length = 0;
gdjs._547Code.GDNewSpriteObjects2.length = 0;
gdjs._547Code.GD_951610_951587_951575_951585Objects1.length = 0;
gdjs._547Code.GD_951610_951587_951575_951585Objects2.length = 0;
gdjs._547Code.GD_951610_951605_951610_951606Objects1.length = 0;
gdjs._547Code.GD_951610_951605_951610_951606Objects2.length = 0;
gdjs._547Code.GD_951593_951608_951583_951577Objects1.length = 0;
gdjs._547Code.GD_951593_951608_951583_951577Objects2.length = 0;
gdjs._547Code.GDCircleObjects1.length = 0;
gdjs._547Code.GDCircleObjects2.length = 0;
gdjs._547Code.GDNewTextObjects1.length = 0;
gdjs._547Code.GDNewTextObjects2.length = 0;
gdjs._547Code.GDSoundButtonObjects1.length = 0;
gdjs._547Code.GDSoundButtonObjects2.length = 0;
gdjs._547Code.GDNewVideoObjects1.length = 0;
gdjs._547Code.GDNewVideoObjects2.length = 0;


return;

}

gdjs['_547Code'] = gdjs._547Code;
