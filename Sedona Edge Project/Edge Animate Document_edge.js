/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'dog',
            type:'image',
            rect:['66px','722px','216px','194px','auto','auto'],
            clip:['rect(0px 180pxpx 330pxpx 0px)'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"dog.png",'0px','0px']
         },
         {
            id:'girl',
            type:'image',
            rect:['273px','602px','175px','312px','auto','auto'],
            clip:['rect(0px 175pxpx 312pxpx 0px)'],
            fill:["rgba(0,0,0,0)",im+"girl_neighborhood.png",'0px','0px']
         },
         {
            id:'girl_residences',
            type:'image',
            rect:['430px','-383px','137px','467px','auto','auto'],
            clip:['rect(0px 137pxpx 467pxpx 0px)'],
            fill:["rgba(0,0,0,0)",im+"girl_residences.png",'0px','0px']
         },
         {
            id:'guy_contact',
            type:'image',
            rect:['597px','426px','238px','762px','auto','auto'],
            clip:['rect(0px 238pxpx 762pxpx 0px)'],
            fill:["rgba(0,0,0,0)",im+"guy_contact.png",'0px','0px']
         },
         {
            id:'guys_gallery',
            type:'image',
            rect:['885px','-32px','140px','482px','auto','auto'],
            clip:['rect(0px 140px 241px 0px)'],
            fill:["rgba(0,0,0,0)",im+"guys_gallery.png",'0px','0px']
         },
         {
            id:'eco-centric',
            type:'image',
            rect:['36px','590px','166px','60px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"eco-centric.png",'0px','0px']
         },
         {
            id:'floor-plans',
            type:'image',
            rect:['627px','291px','166px','60px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"floor-plans.png",'0px','0px']
         },
         {
            id:'sedona',
            type:'image',
            rect:['-299px','19px','182px','135px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"sedona.png",'0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_sedona}": [
            ["style", "left", '-300px'],
            ["style", "top", '52px']
         ],
         "${_girl}": [
            ["style", "top", '804.57px'],
            ["style", "left", '273px'],
            ["style", "height", '312px'],
            ["style", "clip", [0,175,156,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '175px']
         ],
         "${_dog}": [
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.99444'],
            ["style", "left", '127.5px'],
            ["style", "width", '180px'],
            ["style", "top", '-30px'],
            ["transform", "scaleY", '1.10909'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '330px'],
            ["style", "cursor", 'pointer'],
            ["style", "background-position", [0,-180], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "clip", [0,180,165,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_guys_gallery}": [
            ["style", "top", '-261px'],
            ["style", "background-position", [0,-251], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '835.42px'],
            ["style", "clip", [0,140,241,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_guy_contact}": [
            ["style", "top", '781.13px'],
            ["style", "left", '580.12px'],
            ["style", "clip", [0,238,381,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "width", '1100px'],
            ["style", "height", '800px'],
            ["style", "overflow", 'hidden']
         ],
         "${_eco-centric}": [
            ["style", "left", '36.1px'],
            ["style", "top", '589.65px']
         ],
         "${_floor-plans}": [
            ["style", "left", '627.02px'],
            ["style", "top", '291px']
         ],
         "${_girl_residences}": [
            ["style", "top", '-383.21px'],
            ["style", "background-position", [0,-233], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '430.24px'],
            ["style", "clip", [0,137,233,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2839,
         autoPlay: true,
         timeline: [
            { id: "eid277", tween: [ "style", "${_dog}", "background-position", [0,-180], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-180]}], position: 252, duration: 0 },
            { id: "eid271", tween: [ "style", "${_guy_contact}", "left", '580.12px', { fromValue: '580.12px'}], position: 1190, duration: 0 },
            { id: "eid151", tween: [ "style", "${_girl_residences}", "top", '191px', { fromValue: '-383.21px'}], position: 1045, duration: 559 },
            { id: "eid137", tween: [ "style", "${_girl}", "top", '483px', { fromValue: '804.57px'}], position: 609, duration: 621 },
            { id: "eid261", tween: [ "style", "${_guys_gallery}", "background-position", [0,-251], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-251]}], position: 0, duration: 0 },
            { id: "eid177", tween: [ "style", "${_sedona}", "left", '197.81px', { fromValue: '-300px'}], position: 1880, duration: 959 },
            { id: "eid155", tween: [ "style", "${_guy_contact}", "top", '424.72px', { fromValue: '781.13px'}], position: 1190, duration: 752 },
            { id: "eid181", tween: [ "style", "${_girl}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid215", tween: [ "style", "${_girl_residences}", "background-position", [0,-233], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-233]}], position: 0, duration: 0 },
            { id: "eid168", tween: [ "style", "${_guys_gallery}", "top", '300px', { fromValue: '-261px'}], position: 1454, duration: 1148 },
            { id: "eid161", tween: [ "style", "${_dog}", "top", '270px', { fromValue: '-30px'}], position: 252, duration: 626 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-74367318");
