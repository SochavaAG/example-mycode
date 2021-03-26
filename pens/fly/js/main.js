(function() {
  var lastTime = 0;
  var vendors = ['ms', 'moz', 'webkit', 'o'];
  for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
    window.cancelRequestAnimationFrame = window[vendors[x]+
    'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame)
    window.requestAnimationFrame = function(callback, element) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(function() { callback(currTime + timeToCall); },
        timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };

  if (!window.cancelAnimationFrame)
    window.cancelAnimationFrame = function(id) {
      clearTimeout(id);
    };
}())

var layers = [],
  objects = [],
  textures = [],

  world = document.getElementById( 'world' ),
  viewport = document.getElementById( 'viewport' ),

  d = 0,
  p = 400,
  worldXAngle = 0,
  worldYAngle = 0,
  computedWeights = [];

var links = document.querySelectorAll( 'a[rel=external]' );
for( var j = 0; j < links.length; j++ ) {
  var a = links[ j ];
  a.addEventListener( 'click', function( e ) {
    window.open( this.href, '_blank' );
    e.preventDefault();
  }, false );
}

viewport.style.webkitPerspective = p;
viewport.style.MozPerspective = p;
viewport.style.oPerspective = p;

textures = [
  { name: 'white cloud', 	file: 'https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/clouds/images/cloud.png'		, opacity: 1, weight: 0 },
  { name: 'dark cloud', 	file: 'https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/clouds/images/darkCloud.png'	, opacity: 1, weight: 0 },
  { name: 'smoke cloud', 	file: 'https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/clouds/images/smoke.png'		, opacity: 1, weight: 0 },
  { name: 'explosion', 	file: 'https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/clouds/images/explosion.png'	, opacity: 1, weight: 0 },
  { name: 'explosion 2', 	file: 'https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/clouds/images/explosion2.png'	, opacity: 1, weight: 0 },
  { name: 'box', 			file: 'https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/clouds/images/box.png'			, opacity: 1, weight: 0 }
];

var el = document.getElementById( 'textureList' );
for( var j = 0; j < textures.length; j++ ) {
  var li = document.createElement( 'li' );
  var span = document.createElement( 'span' );
  span.textContent = textures[ j ].name;
  var div = document.createElement( 'div' );
  div.className = 'buttons';
  var btnNone = document.createElement( 'a' );
  btnNone.setAttribute( 'id', 'btnNone' + j );
  btnNone.setAttribute( 'href', '#' );
  btnNone.textContent = 'None';
  btnNone.className = 'left button';
  var btnFew = document.createElement( 'a' );
  btnFew.setAttribute( 'id', 'btnFew' + j );
  btnFew.setAttribute( 'href', '#' );
  btnFew.textContent = 'A few';
  btnFew.className = 'middle button';
  var btnNormal = document.createElement( 'a' );
  btnNormal.setAttribute( 'id', 'btnNormal' + j );
  btnNormal.setAttribute( 'href', '#' );
  btnNormal.textContent = 'Some';
  btnNormal.className = 'middle button';
  var btnLot = document.createElement( 'a' );
  btnLot.setAttribute( 'id', 'btnLot' + j );
  btnLot.setAttribute( 'href', '#' );
  btnLot.textContent = 'A lot';
  btnLot.className = 'right button';

  ( function( id ) {
    btnNone.addEventListener( 'click', function() { setTextureUsage( id, 'None' ); } );
    btnFew.addEventListener( 'click', function() { setTextureUsage( id, 'Few' ); } );
    btnNormal.addEventListener( 'click', function() { setTextureUsage( id, 'Normal' ); } );
    btnLot.addEventListener( 'click', function() { setTextureUsage( id, 'Lot' ); } );
  } )( j );

  li.appendChild( span );
  div.appendChild( btnNone );
  div.appendChild( btnFew );
  div.appendChild( btnNormal );
  div.appendChild( btnLot );
  li.appendChild( div );
  el.appendChild( li );

  setTextureUsage( j, 'None' );
}

setTextureUsage( 0, 'Lot' );
generate();

document.getElementById( 'cloudsPreset' ).addEventListener( 'click', function( e ) {
  setTextureUsage( 0, 'Lot' );
  setTextureUsage( 1, 'None' );
  setTextureUsage( 2, 'None' );
  setTextureUsage( 3, 'None' );
  setTextureUsage( 4, 'None' );
  setTextureUsage( 5, 'None' );
  generate();
  e.preventDefault();
} );

document.getElementById( 'stormPreset' ).addEventListener( 'click', function( e ) {
  setTextureUsage( 0, 'None' );
  setTextureUsage( 1, 'None' );
  setTextureUsage( 2, 'Lot' );
  setTextureUsage( 3, 'None' );
  setTextureUsage( 4, 'None' );
  setTextureUsage( 5, 'None' );
  generate();
  e.preventDefault();
} );

document.getElementById( 'boomPreset' ).addEventListener( 'click', function( e ) {
  setTextureUsage( 0, 'None' );
  setTextureUsage( 1, 'None' );
  setTextureUsage( 2, 'Lot' );
  setTextureUsage( 3, 'Few' );
  setTextureUsage( 4, 'None' );
  setTextureUsage( 5, 'None' );
  generate();
  e.preventDefault();
} );

document.getElementById( 'bayPreset' ).addEventListener( 'click', function( e ) {
  setTextureUsage( 0, 'None' );
  setTextureUsage( 1, 'None' );
  setTextureUsage( 2, 'Normal' );
  setTextureUsage( 3, 'Lot' );
  setTextureUsage( 4, 'Lot' );
  setTextureUsage( 5, 'None' );
  generate();
  e.preventDefault();
} );

function setTextureUsage( id, mode ) {
  var modes = [ 'None', 'Few', 'Normal', 'Lot' ];
  var weights = { 'None': 0, 'Few': .3, 'Normal': .7, 'Lot': 1 };
  for( var j = 0; j < modes.length; j++ ) {
    var el = document.getElementById( 'btn' + modes[ j ] + id );
    el.className = el.className.replace( ' active', '' );
    if( modes[ j ] == mode ) {
      el.className += ' active';
      textures[ id ].weight = weights[ mode ];
    }
  }
}

var optionsContent = document.getElementById( 'optionsContent' );
var el = document.getElementById( 'closeBtn' ).addEventListener( 'click', function( e ) {
  if( optionsContent.style.display != 'block' ) {
    optionsContent.style.display = 'block';
  } else {
    optionsContent.style.display = 'none';
  }
  e.preventDefault();
} );

var textureControls = document.getElementById( 'textureControls' );
var el = document.getElementById( 'showTextureControlsBtn' ).addEventListener( 'click', function( e ) {
  if( textureControls.style.display != 'block' ) {
    textureControls.style.display = 'block';
  } else {
    textureControls.style.display = 'none';
  }
  e.preventDefault();
} );

var el = document.getElementById( 'fullscreenBtn' );
if( el ) {
  var options = document.getElementById( 'options' );
  el.addEventListener( 'click', function( e ) {
    if( document.body.webkitRequestFullScreen ) {
      document.body.onwebkitfullscreenchange = function(e) {
        //	options.style.display = 'none';
        document.body.style.width = window.innerWidth + 'px';
        document.body.style.height = window.innerHeight + 'px';
        document.body.onwebkitfullscreenchange = function() {
          //		options.style.display = 'block';
        };
      };
      document.body.webkitRequestFullScreen();
    }
    if( document.body.mozRequestFullScreen ) {
      /*document.body.onmozfullscreenchange = function( e ) {
       options.style.display = 'none';
       document.body.onmozfullscreenchange = function( e ) {
       options.style.display = 'block';
       };
       };*/
      document.body.mozRequestFullScreen();
    }
    e.preventDefault();
  }, false );
}

function createCloud() {

  var div = document.createElement( 'div'  );
  div.className = 'cloudBase';
  var x = 256 - ( Math.random() * 512 );
  var y = 256 - ( Math.random() * 512 );
  var z = 256 - ( Math.random() * 512 );
  var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px )';
  div.style.webkitTransform = t;
  div.style.MozTransform = t;
  div.style.oTransform = t;
  world.appendChild( div );

  for( var j = 0; j < 5 + Math.round( Math.random() * 10 ); j++ ) {
    var cloud = document.createElement( 'img' );
    cloud.style.opacity = 0;
    var r = Math.random();
    var src = 'troll.png';
    for( var k = 0; k < computedWeights.length; k++ ) {
      if( r >= computedWeights[ k ].min && r <= computedWeights[ k ].max ) {
        ( function( img ) { img.addEventListener( 'load', function() {
          img.style.opacity = .8;
        } ) } )( cloud );
        src = computedWeights[ k ].src;
      }
    }
    cloud.setAttribute( 'src', src );
    cloud.className = 'cloudLayer';

    var x = 256 - ( Math.random() * 512 );
    var y = 256 - ( Math.random() * 512 );
    var z = 100 - ( Math.random() * 200 );
    var a = Math.random() * 360;
    var s = .25 + Math.random();
    x *= .2; y *= .2;
    cloud.data = {
      x: x,
      y: y,
      z: z,
      a: a,
      s: s,
      speed: .1 * Math.random()
    };
    var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px ) rotateZ( ' + a + 'deg ) scale( ' + s + ' )';
    cloud.style.webkitTransform = t;
    cloud.style.MozTransform = t;
    cloud.style.oTransform = t;

    div.appendChild( cloud );
    layers.push( cloud );
  }

  return div;
}

window.addEventListener( 'mousewheel', onContainerMouseWheel );
window.addEventListener( 'DOMMouseScroll', onContainerMouseWheel );
//window.addEventListener( 'deviceorientation', orientationhandler, false );
//window.addEventListener( 'MozOrientation', orientationhandler, false );

document.getElementById( 'generateBtn' ).addEventListener( 'click', function( e ) {
  generate();
  e.preventDefault();
} );

window.addEventListener( 'keydown', function( e ) {
  if( e.keyCode == 32 ) generate();
} );

window.addEventListener( 'mousemove', function( e ) {
  worldYAngle = -( .5 - ( e.clientX / window.innerWidth ) ) * 180;
  worldXAngle = ( .5 - ( e.clientY / window.innerHeight ) ) * 180;
  //worldXAngle = .1 * ( e.clientY - .5 * window.innerHeight );
  //worldYAngle = .1 * ( e.clientX - .5 * window.innerWidth );
  updateView();
} );

window.addEventListener( 'touchmove', function( e ) {
  //if( e.targetTouches.length == 1) {
  var touch = e.targetTouches[ 0 ];
  worldYAngle = Math.random() * 200; //( - .1 * ( touch.pageX - .5 * window.innerWidth ) );
  worldXAngle = Math.random() * 200; //(   .1 * ( touch.pageY - .5 * window.innerHeight ) );
  //}
} );

function generate() {
  objects = [];
  if ( world.hasChildNodes() ) {
    while ( world.childNodes.length >= 1 ) {
      world.removeChild( world.firstChild );
    }
  }
  computedWeights = [];
  var total = 0;
  for( var j = 0; j < textures.length; j++ ) {
    if( textures[ j ].weight > 0 ) {
      total += textures[ j ].weight;
    }
  }
  var accum = 0;
  for( var j = 0; j < textures.length; j++ ) {
    if( textures[ j ].weight > 0 ) {
      var w = textures[ j ].weight / total;
      computedWeights.push( {
        src: textures[ j ].file,
        min: accum,
        max: accum + w
      } );
      accum += w;
    }
  }
  for( var j = 0; j < 5; j++ ) {
    objects.push( createCloud() );
  }
}

function updateView() {
  var t = 'translateZ( ' + d + 'px ) rotateX( ' + worldXAngle + 'deg) rotateY( ' + worldYAngle + 'deg)';
  world.style.webkitTransform = t;
  world.style.MozTransform = t;
  world.style.oTransform = t;
}

function onContainerMouseWheel( event ) {

  event = event ? event : window.event;
  d = d - ( event.detail ? event.detail * -5 : event.wheelDelta / 8 );
  updateView();

}

function orientationhandler( e ){

  if( !e.gamma && !e.beta ) {
    e.gamma = -( e.x * ( 180 / Math.PI ) );
    e.beta = -( e.y * ( 180 / Math.PI ) );
  }

  var x = e.gamma;
  var y = e.beta;

  worldXAngle = y;
  worldYAngle = x;
  updateView();

}

function update (){

  for( var j = 0; j < layers.length; j++ ) {
    var layer = layers[ j ];
    layer.data.a += layer.data.speed;
    var t = 'translateX( ' + layer.data.x + 'px ) translateY( ' + layer.data.y + 'px ) translateZ( ' + layer.data.z + 'px ) rotateY( ' + ( - worldYAngle ) + 'deg ) rotateX( ' + ( - worldXAngle ) + 'deg ) rotateZ( ' + layer.data.a + 'deg ) scale( ' + layer.data.s + ')';
    layer.style.webkitTransform = t;
    layer.style.MozTransform = t;
    layer.style.oTransform = t;
  }

  requestAnimationFrame( update );

}

update();