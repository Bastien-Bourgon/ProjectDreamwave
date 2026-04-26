const canvas = document.getElementById("renderCanvas"); // Get the canvas element
const engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine
const scene1 = loadScene1();
const scene2 = loadScene2();
var activeScene = scene1;
// Register a render loop to repeatedly render the scene
engine.runRenderLoop(function () {
        const billboard_sprites = activeScene.getMeshesByTags("billboard")
        const doors = activeScene.getMeshesByTags("door")
        const npcs = activeScene.getMeshesByTags("npc")
        for (let index = 0; index < billboard_sprites.length; index++) {
            billboard_sprites[index].rotation.y = activeScene.activeCameras[0].rotation.y
        }
        for (let index = 0; index < doors.length; index++) {
            const distance = BABYLON.Vector3.Distance(activeScene.activeCameras[0].position, doors[index].position);
            if (distance<4)
            {
                activeScene=scene2
            }
        }
        for (let index = 0; index < npcs.length; index++) {
            const distance = BABYLON.Vector3.Distance(activeScene.activeCameras[0].position, npcs[index].position);
            if (distance<4)
            {
                console.log(npcs[index].dialogue)
            }
        }
        
        if(activeScene==scene2)
        {
            if(activeScene.activeCameras[0].position.z>100 || activeScene.activeCameras[0].position.z<-100)
            {
                activeScene.activeCameras[0].position.z=0
                console.log("warping you back")
            }
        }
        activeScene.render();
});
// Watch for browser/canvas resize events
window.addEventListener("resize", function () {
        engine.resize();
});
