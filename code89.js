gdjs._1575_1604_1575_1576_1608_1575_1576Code = {};
gdjs._1575_1604_1575_1576_1608_1575_1576Code.localVariables = [];
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GDNewSpriteObjects1= [];
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GDNewSpriteObjects2= [];
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GDNewTextObjects1= [];
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GDNewTextObjects2= [];
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GDWhiteSleekButtonObjects1= [];
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GDWhiteSleekButtonObjects2= [];
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GDBlueButtonWithShadowObjects1= [];
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GDBlueButtonWithShadowObjects2= [];
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GDNewSprite2Objects1= [];
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GDNewSprite2Objects2= [];
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95951Objects1= [];
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95951Objects2= [];
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95952Objects1= [];
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95952Objects2= [];
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95953Objects1= [];
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95953Objects2= [];
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95954Objects1= [];
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95954Objects2= [];
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95955Objects1= [];
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95955Objects2= [];
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95956Objects1= [];
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95956Objects2= [];
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95957Objects1= [];
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95957Objects2= [];
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95958Objects1= [];
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95958Objects2= [];
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GDNewSprite3Objects1= [];
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GDNewSprite3Objects2= [];
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GDNewText2Objects1= [];
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GDNewText2Objects2= [];
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GDRemoteBackObjects1= [];
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GDRemoteBackObjects2= [];
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GDNewSprite4Objects1= [];
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GDNewSprite4Objects2= [];
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95959Objects1= [];
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95959Objects2= [];


gdjs._1575_1604_1575_1576_1608_1575_1576Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("باب_1"), gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95951Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95951Objects1.length;i<l;++i) {
    if ( gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95951Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95951Objects1[k] = gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95951Objects1[i];
        ++k;
    }
}
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95951Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("باب_2"), gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95952Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95952Objects1.length;i<l;++i) {
    if ( gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95952Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95952Objects1[k] = gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95952Objects1[i];
        ++k;
    }
}
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95952Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "22", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("باب_3"), gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95953Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95953Objects1.length;i<l;++i) {
    if ( gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95953Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95953Objects1[k] = gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95953Objects1[i];
        ++k;
    }
}
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95953Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "32", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("باب_4"), gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95954Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95954Objects1.length;i<l;++i) {
    if ( gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95954Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95954Objects1[k] = gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95954Objects1[i];
        ++k;
    }
}
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95954Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "39", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("باب_5"), gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95955Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95955Objects1.length;i<l;++i) {
    if ( gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95955Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95955Objects1[k] = gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95955Objects1[i];
        ++k;
    }
}
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95955Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "47", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("باب_6"), gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95956Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95956Objects1.length;i<l;++i) {
    if ( gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95956Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95956Objects1[k] = gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95956Objects1[i];
        ++k;
    }
}
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95956Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "55", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("باب_7"), gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95957Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95957Objects1.length;i<l;++i) {
    if ( gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95957Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95957Objects1[k] = gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95957Objects1[i];
        ++k;
    }
}
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95957Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "63", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("باب_8"), gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95958Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95958Objects1.length;i<l;++i) {
    if ( gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95958Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95958Objects1[k] = gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95958Objects1[i];
        ++k;
    }
}
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95958Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "76", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("باب_9"), gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95959Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95959Objects1.length;i<l;++i) {
    if ( gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95959Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95959Objects1[k] = gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95959Objects1[i];
        ++k;
    }
}
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95959Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "58", false);
}}

}


};

gdjs._1575_1604_1575_1576_1608_1575_1576Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._1575_1604_1575_1576_1608_1575_1576Code.GDNewSpriteObjects1.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GDNewSpriteObjects2.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GDNewTextObjects1.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GDNewTextObjects2.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GDWhiteSleekButtonObjects1.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GDWhiteSleekButtonObjects2.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GDBlueButtonWithShadowObjects1.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GDBlueButtonWithShadowObjects2.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GDNewSprite2Objects1.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GDNewSprite2Objects2.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95951Objects1.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95951Objects2.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95952Objects1.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95952Objects2.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95953Objects1.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95953Objects2.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95954Objects1.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95954Objects2.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95955Objects1.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95955Objects2.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95956Objects1.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95956Objects2.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95957Objects1.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95957Objects2.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95958Objects1.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95958Objects2.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GDNewSprite3Objects1.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GDNewSprite3Objects2.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GDNewText2Objects1.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GDNewText2Objects2.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GDRemoteBackObjects1.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GDRemoteBackObjects2.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GDNewSprite4Objects1.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GDNewSprite4Objects2.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95959Objects1.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95959Objects2.length = 0;

gdjs._1575_1604_1575_1576_1608_1575_1576Code.eventsList0(runtimeScene);
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GDNewSpriteObjects1.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GDNewSpriteObjects2.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GDNewTextObjects1.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GDNewTextObjects2.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GDWhiteSleekButtonObjects1.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GDWhiteSleekButtonObjects2.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GDBlueButtonWithShadowObjects1.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GDBlueButtonWithShadowObjects2.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GDNewSprite2Objects1.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GDNewSprite2Objects2.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95951Objects1.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95951Objects2.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95952Objects1.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95952Objects2.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95953Objects1.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95953Objects2.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95954Objects1.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95954Objects2.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95955Objects1.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95955Objects2.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95956Objects1.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95956Objects2.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95957Objects1.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95957Objects2.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95958Objects1.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95958Objects2.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GDNewSprite3Objects1.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GDNewSprite3Objects2.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GDNewText2Objects1.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GDNewText2Objects2.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GDRemoteBackObjects1.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GDRemoteBackObjects2.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GDNewSprite4Objects1.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GDNewSprite4Objects2.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95959Objects1.length = 0;
gdjs._1575_1604_1575_1576_1608_1575_1576Code.GD_951576_951575_951576_95959Objects2.length = 0;


return;

}

gdjs['_1575_1604_1575_1576_1608_1575_1576Code'] = gdjs._1575_1604_1575_1576_1608_1575_1576Code;
