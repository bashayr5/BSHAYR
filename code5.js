gdjs._560Code = {};
gdjs._560Code.localVariables = [];
gdjs._560Code.GDNewSpriteObjects1= [];
gdjs._560Code.GDNewSpriteObjects2= [];
gdjs._560Code.GD_951610_951587_951575_951585Objects1= [];
gdjs._560Code.GD_951610_951587_951575_951585Objects2= [];
gdjs._560Code.GD_951610_951605_951610_951606Objects1= [];
gdjs._560Code.GD_951610_951605_951610_951606Objects2= [];
gdjs._560Code.GD_951593_951608_951583_951577Objects1= [];
gdjs._560Code.GD_951593_951608_951583_951577Objects2= [];
gdjs._560Code.GDCircleObjects1= [];
gdjs._560Code.GDCircleObjects2= [];
gdjs._560Code.GDNewTextObjects1= [];
gdjs._560Code.GDNewTextObjects2= [];
gdjs._560Code.GDSoundButtonObjects1= [];
gdjs._560Code.GDSoundButtonObjects2= [];
gdjs._560Code.GDNewVideoObjects1= [];
gdjs._560Code.GDNewVideoObjects2= [];


gdjs._560Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("يمين"), gdjs._560Code.GD_951610_951605_951610_951606Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._560Code.GD_951610_951605_951610_951606Objects1.length;i<l;++i) {
    if ( gdjs._560Code.GD_951610_951605_951610_951606Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._560Code.GD_951610_951605_951610_951606Objects1[k] = gdjs._560Code.GD_951610_951605_951610_951606Objects1[i];
        ++k;
    }
}
gdjs._560Code.GD_951610_951605_951610_951606Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "79", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("يسار"), gdjs._560Code.GD_951610_951587_951575_951585Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._560Code.GD_951610_951587_951575_951585Objects1.length;i<l;++i) {
    if ( gdjs._560Code.GD_951610_951587_951575_951585Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._560Code.GD_951610_951587_951575_951585Objects1[k] = gdjs._560Code.GD_951610_951587_951575_951585Objects1[i];
        ++k;
    }
}
gdjs._560Code.GD_951610_951587_951575_951585Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "81", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("عودة"), gdjs._560Code.GD_951593_951608_951583_951577Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._560Code.GD_951593_951608_951583_951577Objects1.length;i<l;++i) {
    if ( gdjs._560Code.GD_951593_951608_951583_951577Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._560Code.GD_951593_951608_951583_951577Objects1[k] = gdjs._560Code.GD_951593_951608_951583_951577Objects1[i];
        ++k;
    }
}
gdjs._560Code.GD_951593_951608_951583_951577Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "الابواب", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SoundButton"), gdjs._560Code.GDSoundButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._560Code.GDSoundButtonObjects1.length;i<l;++i) {
    if ( gdjs._560Code.GDSoundButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._560Code.GDSoundButtonObjects1[k] = gdjs._560Code.GDSoundButtonObjects1[i];
        ++k;
    }
}
gdjs._560Code.GDSoundButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs._560Code.GDNewVideoObjects1);
{for(var i = 0, len = gdjs._560Code.GDNewVideoObjects1.length ;i < len;++i) {
    gdjs._560Code.GDNewVideoObjects1[i].play();
}
}}

}


};

gdjs._560Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._560Code.GDNewSpriteObjects1.length = 0;
gdjs._560Code.GDNewSpriteObjects2.length = 0;
gdjs._560Code.GD_951610_951587_951575_951585Objects1.length = 0;
gdjs._560Code.GD_951610_951587_951575_951585Objects2.length = 0;
gdjs._560Code.GD_951610_951605_951610_951606Objects1.length = 0;
gdjs._560Code.GD_951610_951605_951610_951606Objects2.length = 0;
gdjs._560Code.GD_951593_951608_951583_951577Objects1.length = 0;
gdjs._560Code.GD_951593_951608_951583_951577Objects2.length = 0;
gdjs._560Code.GDCircleObjects1.length = 0;
gdjs._560Code.GDCircleObjects2.length = 0;
gdjs._560Code.GDNewTextObjects1.length = 0;
gdjs._560Code.GDNewTextObjects2.length = 0;
gdjs._560Code.GDSoundButtonObjects1.length = 0;
gdjs._560Code.GDSoundButtonObjects2.length = 0;
gdjs._560Code.GDNewVideoObjects1.length = 0;
gdjs._560Code.GDNewVideoObjects2.length = 0;

gdjs._560Code.eventsList0(runtimeScene);
gdjs._560Code.GDNewSpriteObjects1.length = 0;
gdjs._560Code.GDNewSpriteObjects2.length = 0;
gdjs._560Code.GD_951610_951587_951575_951585Objects1.length = 0;
gdjs._560Code.GD_951610_951587_951575_951585Objects2.length = 0;
gdjs._560Code.GD_951610_951605_951610_951606Objects1.length = 0;
gdjs._560Code.GD_951610_951605_951610_951606Objects2.length = 0;
gdjs._560Code.GD_951593_951608_951583_951577Objects1.length = 0;
gdjs._560Code.GD_951593_951608_951583_951577Objects2.length = 0;
gdjs._560Code.GDCircleObjects1.length = 0;
gdjs._560Code.GDCircleObjects2.length = 0;
gdjs._560Code.GDNewTextObjects1.length = 0;
gdjs._560Code.GDNewTextObjects2.length = 0;
gdjs._560Code.GDSoundButtonObjects1.length = 0;
gdjs._560Code.GDSoundButtonObjects2.length = 0;
gdjs._560Code.GDNewVideoObjects1.length = 0;
gdjs._560Code.GDNewVideoObjects2.length = 0;


return;

}

gdjs['_560Code'] = gdjs._560Code;
