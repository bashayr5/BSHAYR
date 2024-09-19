gdjs._1605_1588_1607_1583_32_1576_1604_1575_32_1593_1606_1608_1575_1606Code = {};
gdjs._1605_1588_1607_1583_32_1576_1604_1575_32_1593_1606_1608_1575_1606Code.localVariables = [];
gdjs._1605_1588_1607_1583_32_1576_1604_1575_32_1593_1606_1608_1575_1606Code.GDNewSpriteObjects1= [];
gdjs._1605_1588_1607_1583_32_1576_1604_1575_32_1593_1606_1608_1575_1606Code.GDNewSpriteObjects2= [];
gdjs._1605_1588_1607_1583_32_1576_1604_1575_32_1593_1606_1608_1575_1606Code.GDGreenButtonObjects1= [];
gdjs._1605_1588_1607_1583_32_1576_1604_1575_32_1593_1606_1608_1575_1606Code.GDGreenButtonObjects2= [];
gdjs._1605_1588_1607_1583_32_1576_1604_1575_32_1593_1606_1608_1575_1606Code.GDGreenButton2Objects1= [];
gdjs._1605_1588_1607_1583_32_1576_1604_1575_32_1593_1606_1608_1575_1606Code.GDGreenButton2Objects2= [];
gdjs._1605_1588_1607_1583_32_1576_1604_1575_32_1593_1606_1608_1575_1606Code.GDNewTextObjects1= [];
gdjs._1605_1588_1607_1583_32_1576_1604_1575_32_1593_1606_1608_1575_1606Code.GDNewTextObjects2= [];


gdjs._1605_1588_1607_1583_32_1576_1604_1575_32_1593_1606_1608_1575_1606Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs._1605_1588_1607_1583_32_1576_1604_1575_32_1593_1606_1608_1575_1606Code.GDGreenButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1605_1588_1607_1583_32_1576_1604_1575_32_1593_1606_1608_1575_1606Code.GDGreenButtonObjects1.length;i<l;++i) {
    if ( gdjs._1605_1588_1607_1583_32_1576_1604_1575_32_1593_1606_1608_1575_1606Code.GDGreenButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._1605_1588_1607_1583_32_1576_1604_1575_32_1593_1606_1608_1575_1606Code.GDGreenButtonObjects1[k] = gdjs._1605_1588_1607_1583_32_1576_1604_1575_32_1593_1606_1608_1575_1606Code.GDGreenButtonObjects1[i];
        ++k;
    }
}
gdjs._1605_1588_1607_1583_32_1576_1604_1575_32_1593_1606_1608_1575_1606Code.GDGreenButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "الابواب", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenButton2"), gdjs._1605_1588_1607_1583_32_1576_1604_1575_32_1593_1606_1608_1575_1606Code.GDGreenButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1605_1588_1607_1583_32_1576_1604_1575_32_1593_1606_1608_1575_1606Code.GDGreenButton2Objects1.length;i<l;++i) {
    if ( gdjs._1605_1588_1607_1583_32_1576_1604_1575_32_1593_1606_1608_1575_1606Code.GDGreenButton2Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._1605_1588_1607_1583_32_1576_1604_1575_32_1593_1606_1608_1575_1606Code.GDGreenButton2Objects1[k] = gdjs._1605_1588_1607_1583_32_1576_1604_1575_32_1593_1606_1608_1575_1606Code.GDGreenButton2Objects1[i];
        ++k;
    }
}
gdjs._1605_1588_1607_1583_32_1576_1604_1575_32_1593_1606_1608_1575_1606Code.GDGreenButton2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "1 فهرس", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs._1605_1588_1607_1583_32_1576_1604_1575_32_1593_1606_1608_1575_1606Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._1605_1588_1607_1583_32_1576_1604_1575_32_1593_1606_1608_1575_1606Code.GDNewSpriteObjects1.length = 0;
gdjs._1605_1588_1607_1583_32_1576_1604_1575_32_1593_1606_1608_1575_1606Code.GDNewSpriteObjects2.length = 0;
gdjs._1605_1588_1607_1583_32_1576_1604_1575_32_1593_1606_1608_1575_1606Code.GDGreenButtonObjects1.length = 0;
gdjs._1605_1588_1607_1583_32_1576_1604_1575_32_1593_1606_1608_1575_1606Code.GDGreenButtonObjects2.length = 0;
gdjs._1605_1588_1607_1583_32_1576_1604_1575_32_1593_1606_1608_1575_1606Code.GDGreenButton2Objects1.length = 0;
gdjs._1605_1588_1607_1583_32_1576_1604_1575_32_1593_1606_1608_1575_1606Code.GDGreenButton2Objects2.length = 0;
gdjs._1605_1588_1607_1583_32_1576_1604_1575_32_1593_1606_1608_1575_1606Code.GDNewTextObjects1.length = 0;
gdjs._1605_1588_1607_1583_32_1576_1604_1575_32_1593_1606_1608_1575_1606Code.GDNewTextObjects2.length = 0;

gdjs._1605_1588_1607_1583_32_1576_1604_1575_32_1593_1606_1608_1575_1606Code.eventsList0(runtimeScene);
gdjs._1605_1588_1607_1583_32_1576_1604_1575_32_1593_1606_1608_1575_1606Code.GDNewSpriteObjects1.length = 0;
gdjs._1605_1588_1607_1583_32_1576_1604_1575_32_1593_1606_1608_1575_1606Code.GDNewSpriteObjects2.length = 0;
gdjs._1605_1588_1607_1583_32_1576_1604_1575_32_1593_1606_1608_1575_1606Code.GDGreenButtonObjects1.length = 0;
gdjs._1605_1588_1607_1583_32_1576_1604_1575_32_1593_1606_1608_1575_1606Code.GDGreenButtonObjects2.length = 0;
gdjs._1605_1588_1607_1583_32_1576_1604_1575_32_1593_1606_1608_1575_1606Code.GDGreenButton2Objects1.length = 0;
gdjs._1605_1588_1607_1583_32_1576_1604_1575_32_1593_1606_1608_1575_1606Code.GDGreenButton2Objects2.length = 0;
gdjs._1605_1588_1607_1583_32_1576_1604_1575_32_1593_1606_1608_1575_1606Code.GDNewTextObjects1.length = 0;
gdjs._1605_1588_1607_1583_32_1576_1604_1575_32_1593_1606_1608_1575_1606Code.GDNewTextObjects2.length = 0;


return;

}

gdjs['_1605_1588_1607_1583_32_1576_1604_1575_32_1593_1606_1608_1575_1606Code'] = gdjs._1605_1588_1607_1583_32_1576_1604_1575_32_1593_1606_1608_1575_1606Code;
