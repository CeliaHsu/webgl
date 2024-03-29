function setLoadMessage(what)
{
    $('#loadBoxValue').html(what);
}

function initializeLoad(description)
{

    $("#info").html(

        '<a href="https://www.3dflow.net" target="_blank" style="vertical-align:middle;" rel="noopener"><img style="vertical-align:middle;width:32px;height:32px;padding-right:10px;" src="data:image/png;base64,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" /></a> ' + description


    ).slideDown();


    $.blockUI({ message: '<div id="loadBox" style="padding:30px;text-align:center;"><div id="loadLogo"><img src="data:image/gif;base64,R0lGODlhQABAAPcAAAAAAA4CA3cRGccbKdIdK9cdLNcdLNcdLNcdLNcdLNcdLNcdLNcdLNcdLNcdLNcdLNcdLNcdLNceLNceLdceLdgeLdgeLdgeLdgeLdgeLdgeLdgeLdgeLdgeLdgeLdgeLdgfLtggL9ghMNgiMdgkMtglM9gmNNgnNNkpNtkrONotO9owPdoyP9s0Qds2Q9w5Rdw7R9w8Sd0/S91ATd1CTt5EUN5GUt5HUt5IVN9JVd9LVt9MWOBPW+BTXuBUX+FVYOFXYeBVYOBUX+BSXd9RXN1OWdtNWNZMV8pLVbxLVK5MU6NMU5ZMUoxOU4ZPU4BPU3lQU3NRU2xRU2RSVFxTVFVVVVZWVldXV1hYWFlZWVpaWltbW1xcXF1dXV5eXl9fX2BgYGFhYWJiYmNjY2RkZGVlZWZmZmdnZ2hoaGlpaWpqamtra2xsbG1tbW5ubm9vb3BwcHFxcXJycnNzc3R0dHV1dXZ2dnd3d3h4eHl5eXp6ent7e3x8fH19fX5+fn9/f4CAgIGBgYKCgoODg4SEhIWFhYaGhoeHh4iIiImJiYqKiouLi4yMjI2NjY6Ojo+Pj5CQkJaSkp2UlaOWl6mXma6Zm7Obnbicnr2doMGeocWfosmgo86fo9Ofo9eeo9yboeCXneOVm+WTmeeSmOiPlumUmumYnuqco+ugpuyhp+yiqOyjqe2lq+2nrO6pr+6rse6us+6wte+yt++1uvC4vPG7v/G9wfG/w/HBxfLCxvLEyPLFyfLHy/LKzfPN0PTQ0/TS1fXU1/XW2fbX2vfZ3Pfb3vfd4Pjf4fjh4/ji5Pnk5vnm6Pro6vrp6/rq7Prr7Pvs7fvt7/vv8Pzy8/z09fz19v339/34+P35+f36+v36+/77+/77/P77/P78/P78/P78/P78/P79/f79/f79/f7+/v7+/v7+/v///////////////////////////////////////////////////////////////////////////////////////////////yH/C05FVFNDQVBFMi4wAwEAAAAh+QQJAwDoACwAAAAAQABAAAAI/gDRCRxIsKDBgwgTKlzIsKHDhxAjSpxIsaLFixgzatzIsaPHjyBDihxJsqTJkyhTNvRGipRKidCAVKjg8mXDbalSzJxZ0ybCaal67Byqyie6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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=" /></div><div id="loadBoxValue" style="margin-top:20px;margin-bottom:40px;>" ...initializing...</div></div>' });

}


if (WEBGL.isWebGLAvailable() === false)
{
    document.body.appendChild(WEBGL.getWebGLErrorMessage());
}

var camera, controls, scene, renderer;

var endPosition = new THREE.Vector3(0, 0, 0);
var targetPosition = new THREE.Vector3(0, 0, 0);

var introAnimation = true;


function init(file, iMinDistance, iMaxDistance, camX, camY, camZ, startX, startY, startZ, subjX, subjY, subjZ) {

    document.addEventListener('mousedown', onDocumentMouseDown, false);

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    //scene.fog = new THREE.FogExp2( 0xcccccc, 0.002 );

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 2500);
    document.body.appendChild(renderer.domElement);
    camera.up.set(0, 0, 1);

    camera.position.set(startX, startY, startZ);
    endPosition.set(camX, camY, camZ);
    targetPosition.set(subjX, subjY, subjZ);

    // controls
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    //controls.addEventListener( 'change', render ); // call this only in static scenes (i.e., if there is no animation loop)
    controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = true;
    controls.minDistance = iMinDistance;
    controls.maxDistance = iMaxDistance;
    controls.maxPolarAngle = Math.PI;


    var onProgress = function (xhr) {
        if (xhr.lengthComputable) {
            var percentComplete = xhr.loaded / xhr.total * 100;

            if (Math.round(percentComplete, 2) < 99) {
                setLoadMessage('... downloading ' + Math.round(percentComplete, 2) + '% ...');
            }
            else {
                $('#loadLogo').slideUp();
                setLoadMessage('... rendering ...');
            }
        }
    };

    var onError = function () { };

    //world

    new THREE.MTLLoader()
        .setPath('./')
        .load(file + '.mtl', function (materials) {
            materials.preload();
            new THREE.OBJLoader()
                .setMaterials(materials)
                .setPath('./')
                .load(file + '.obj', function (object) {

                    scene.add(object);

                    $.unblockUI();

                    //targetPosition = object.position;

                }, onProgress, onError);
        });


    //Enable different lights if you wish

    // lights
    //var light = new THREE.DirectionalLight( 0xffffff );
    //light.position.set( 10, 10, 10 );
    //scene.add( light );
    //var light = new THREE.DirectionalLight( 0x002288 );
    //light.position.set( - 10, - 10, - 10 );
    //scene.add( light );

    var light = new THREE.AmbientLight(0xffffff);
    scene.add(light);

    window.addEventListener('resize', onWindowResize, false);

}
function onWindowResize()
{
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}


function autoZoomIn()
{

    if (introAnimation)
    {
        camera.position.lerp(endPosition, 0.02);
        camera.lookAt(targetPosition);
   
        if (camera.position.distanceTo(endPosition) < 10)
            introAnimation = false;
    }

}

function onDocumentMouseDown(e)
{
    introAnimation = false;
}

function animate()
{

    requestAnimationFrame(animate);

    controls.update(); // only required if controls.enableDamping = true, or if controls.autoRotate = true

    autoZoomIn();

    render();
}

function render() {
    renderer.render(scene, camera);
}
