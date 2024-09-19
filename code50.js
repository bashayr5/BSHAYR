gdjs._515Code = {};
gdjs._515Code.localVariables = [];
gdjs._515Code.GDNewSpriteObjects1= [];
gdjs._515Code.GDNewSpriteObjects2= [];
gdjs._515Code.GD_951610_951587_951575_951585Objects1= [];
gdjs._515Code.GD_951610_951587_951575_951585Objects2= [];
gdjs._515Code.GD_951610_951605_951610_951606Objects1= [];
gdjs._515Code.GD_951610_951605_951610_951606Objects2= [];
gdjs._515Code.GD_951593_951608_951583_951577Objects1= [];
gdjs._515Code.GD_951593_951608_951583_951577Objects2= [];
gdjs._515Code.GDCircleObjects1= [];
gdjs._515Code.GDCircleObjects2= [];
gdjs._515Code.GDNewTextObjects1= [];
gdjs._515Code.GDNewTextObjects2= [];
gdjs._515Code.GDSoundButtonObjects1= [];
gdjs._515Code.GDSoundButtonObjects2= [];
gdjs._515Code.GDNewVideoObjects1= [];
gdjs._515Code.GDNewVideoObjects2= [];


gdjs._515Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("يمين"), gdjs._515Code.GD_951610_951605_951610_951606Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._515Code.GD_951610_951605_951610_951606Objects1.length;i<l;++i) {
    if ( gdjs._515Code.GD_951610_951605_951610_951606Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._515Code.GD_951610_951605_951610_951606Objects1[k] = gdjs._515Code.GD_951610_951605_951610_951606Objects1[i];
        ++k;
    }
}
gdjs._515Code.GD_951610_951605_951610_951606Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "34", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("يسار"), gdjs._515Code.GD_951610_951587_951575_951585Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._515Code.GD_951610_951587_951575_951585Objects1.length;i<l;++i) {
    if ( gdjs._515Code.GD_951610_951587_951575_951585Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._515Code.GD_951610_951587_951575_951585Objects1[k] = gdjs._515Code.GD_951610_951587_951575_951585Objects1[i];
        ++k;
    }
}
gdjs._515Code.GD_951610_951587_951575_951585Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "36", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("عودة"), gdjs._515Code.GD_951593_951608_951583_951577Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._515Code.GD_951593_951608_951583_951577Objects1.length;i<l;++i) {
    if ( gdjs._515Code.GD_951593_951608_951583_951577Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._515Code.GD_951593_951608_951583_951577Objects1[k] = gdjs._515Code.GD_951593_951608_951583_951577Objects1[i];
        ++k;
    }
}
gdjs._515Code.GD_951593_951608_951583_951577Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "الابواب", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SoundButton"), gdjs._515Code.GDSoundButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._515Code.GDSoundButtonObjects1.length;i<l;++i) {
    if ( gdjs._515Code.GDSoundButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._515Code.GDSoundButtonObjects1[k] = gdjs._515Code.GDSoundButtonObjects1[i];
        ++k;
    }
}
gdjs._515Code.GDSoundButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs._515Code.GDNewVideoObjects1);
{for(var i = 0, len = gdjs._515Code.GDNewVideoObjects1.length ;i < len;++i) {
    gdjs._515Code.GDNewVideoObjects1[i].play();
}
}}

}


};

gdjs._515Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._515Code.GDNewSpriteObjects1.length = 0;
gdjs._515Code.GDNewSpriteObjects2.length = 0;
gdjs._515Code.GD_951610_951587_951575_951585Objects1.length = 0;
gdjs._515Code.GD_951610_951587_951575_951585Objects2.length = 0;
gdjs._515Code.GD_951610_951605_951610_951606Objects1.length = 0;
gdjs._515Code.GD_951610_951605_951610_951606Objects2.length = 0;
gdjs._515Code.GD_951593_951608_951583_951577Objects1.length = 0;
gdjs._515Code.GD_951593_951608_951583_951577Objects2.length = 0;
gdjs._515Code.GDCircleObjects1.length = 0;
gdjs._515Code.GDCircleObjects2.length = 0;
gdjs._515Code.GDNewTextObjects1.length = 0;
gdjs._515Code.GDNewTextObjects2.length = 0;
gdjs._515Code.GDSoundButtonObjects1.length = 0;
gdjs._515Code.GDSoundButtonObjects2.length = 0;
gdjs._515Code.GDNewVideoObjects1.length = 0;
gdjs._515Code.GDNewVideoObjects2.length = 0;

gdjs._515Code.eventsList0(runtimeScene);
gdjs._515Code.GDNewSpriteObjects1.length = 0;
gdjs._515Code.GDNewSpriteObjects2.length = 0;
gdjs._515Code.GD_951610_951587_951575_951585Objects1.length = 0;
gdjs._515Code.GD_951610_951587_951575_951585Objects2.length = 0;
gdjs._515Code.GD_951610_951605_951610_951606Objects1.length = 0;
gdjs._515Code.GD_951610_951605_951610_951606Objects2.length = 0;
gdjs._515Code.GD_951593_951608_951583_951577Objects1.length = 0;
gdjs._515Code.GD_951593_951608_951583_951577Objects2.length = 0;
gdjs._515Code.GDCircleObjects1.length = 0;
gdjs._515Code.GDCircleObjects2.length = 0;
gdjs._515Code.GDNewTextObjects1.length = 0;
gdjs._515Code.GDNewTextObjects2.length = 0;
gdjs._515Code.GDSoundButtonObjects1.length = 0;
gdjs._515Code.GDSoundButtonObjects2.length = 0;
gdjs._515Code.GDNewVideoObjects1.length = 0;
gdjs._515Code.GDNewVideoObjects2.length = 0;


return;

}

gdjs['_515Code'] = gdjs._515Code;
