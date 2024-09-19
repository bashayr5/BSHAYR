gdjs._541Code = {};
gdjs._541Code.localVariables = [];
gdjs._541Code.GDNewSpriteObjects1= [];
gdjs._541Code.GDNewSpriteObjects2= [];
gdjs._541Code.GD_951610_951587_951575_951585Objects1= [];
gdjs._541Code.GD_951610_951587_951575_951585Objects2= [];
gdjs._541Code.GD_951610_951605_951610_951606Objects1= [];
gdjs._541Code.GD_951610_951605_951610_951606Objects2= [];
gdjs._541Code.GD_951593_951608_951583_951577Objects1= [];
gdjs._541Code.GD_951593_951608_951583_951577Objects2= [];
gdjs._541Code.GDCircleObjects1= [];
gdjs._541Code.GDCircleObjects2= [];
gdjs._541Code.GDNewTextObjects1= [];
gdjs._541Code.GDNewTextObjects2= [];
gdjs._541Code.GDSoundButtonObjects1= [];
gdjs._541Code.GDSoundButtonObjects2= [];
gdjs._541Code.GDNewVideoObjects1= [];
gdjs._541Code.GDNewVideoObjects2= [];


gdjs._541Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("يمين"), gdjs._541Code.GD_951610_951605_951610_951606Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._541Code.GD_951610_951605_951610_951606Objects1.length;i<l;++i) {
    if ( gdjs._541Code.GD_951610_951605_951610_951606Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._541Code.GD_951610_951605_951610_951606Objects1[k] = gdjs._541Code.GD_951610_951605_951610_951606Objects1[i];
        ++k;
    }
}
gdjs._541Code.GD_951610_951605_951610_951606Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "60", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("يسار"), gdjs._541Code.GD_951610_951587_951575_951585Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._541Code.GD_951610_951587_951575_951585Objects1.length;i<l;++i) {
    if ( gdjs._541Code.GD_951610_951587_951575_951585Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._541Code.GD_951610_951587_951575_951585Objects1[k] = gdjs._541Code.GD_951610_951587_951575_951585Objects1[i];
        ++k;
    }
}
gdjs._541Code.GD_951610_951587_951575_951585Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "62", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("عودة"), gdjs._541Code.GD_951593_951608_951583_951577Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._541Code.GD_951593_951608_951583_951577Objects1.length;i<l;++i) {
    if ( gdjs._541Code.GD_951593_951608_951583_951577Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._541Code.GD_951593_951608_951583_951577Objects1[k] = gdjs._541Code.GD_951593_951608_951583_951577Objects1[i];
        ++k;
    }
}
gdjs._541Code.GD_951593_951608_951583_951577Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "الابواب", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SoundButton"), gdjs._541Code.GDSoundButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._541Code.GDSoundButtonObjects1.length;i<l;++i) {
    if ( gdjs._541Code.GDSoundButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._541Code.GDSoundButtonObjects1[k] = gdjs._541Code.GDSoundButtonObjects1[i];
        ++k;
    }
}
gdjs._541Code.GDSoundButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs._541Code.GDNewVideoObjects1);
{for(var i = 0, len = gdjs._541Code.GDNewVideoObjects1.length ;i < len;++i) {
    gdjs._541Code.GDNewVideoObjects1[i].play();
}
}}

}


};

gdjs._541Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._541Code.GDNewSpriteObjects1.length = 0;
gdjs._541Code.GDNewSpriteObjects2.length = 0;
gdjs._541Code.GD_951610_951587_951575_951585Objects1.length = 0;
gdjs._541Code.GD_951610_951587_951575_951585Objects2.length = 0;
gdjs._541Code.GD_951610_951605_951610_951606Objects1.length = 0;
gdjs._541Code.GD_951610_951605_951610_951606Objects2.length = 0;
gdjs._541Code.GD_951593_951608_951583_951577Objects1.length = 0;
gdjs._541Code.GD_951593_951608_951583_951577Objects2.length = 0;
gdjs._541Code.GDCircleObjects1.length = 0;
gdjs._541Code.GDCircleObjects2.length = 0;
gdjs._541Code.GDNewTextObjects1.length = 0;
gdjs._541Code.GDNewTextObjects2.length = 0;
gdjs._541Code.GDSoundButtonObjects1.length = 0;
gdjs._541Code.GDSoundButtonObjects2.length = 0;
gdjs._541Code.GDNewVideoObjects1.length = 0;
gdjs._541Code.GDNewVideoObjects2.length = 0;

gdjs._541Code.eventsList0(runtimeScene);
gdjs._541Code.GDNewSpriteObjects1.length = 0;
gdjs._541Code.GDNewSpriteObjects2.length = 0;
gdjs._541Code.GD_951610_951587_951575_951585Objects1.length = 0;
gdjs._541Code.GD_951610_951587_951575_951585Objects2.length = 0;
gdjs._541Code.GD_951610_951605_951610_951606Objects1.length = 0;
gdjs._541Code.GD_951610_951605_951610_951606Objects2.length = 0;
gdjs._541Code.GD_951593_951608_951583_951577Objects1.length = 0;
gdjs._541Code.GD_951593_951608_951583_951577Objects2.length = 0;
gdjs._541Code.GDCircleObjects1.length = 0;
gdjs._541Code.GDCircleObjects2.length = 0;
gdjs._541Code.GDNewTextObjects1.length = 0;
gdjs._541Code.GDNewTextObjects2.length = 0;
gdjs._541Code.GDSoundButtonObjects1.length = 0;
gdjs._541Code.GDSoundButtonObjects2.length = 0;
gdjs._541Code.GDNewVideoObjects1.length = 0;
gdjs._541Code.GDNewVideoObjects2.length = 0;


return;

}

gdjs['_541Code'] = gdjs._541Code;
