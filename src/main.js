const canvas = document.getElementById("renderCanvas"); // Get the canvas element
const engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine
var scenes = {}
var dialogue_box;
scenes["flatgrass"] = loadScene1(dialogue_box);
scenes["hallway"] = loadScene2(dialogue_box);
var activeScene = scenes["flatgrass"];
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
            if (distance<2)
            {
                if (doors[index].destinationScene!=undefined)
                activeScene=scenes[doors[index].destinationScene]
            }
        }
        for (let index = 0; index < npcs.length; index++) {
            const distance = BABYLON.Vector3.Distance(activeScene.activeCameras[0].position, npcs[index].position);
            if (distance<4)
            {
                //console.log(activeScene.getTextureByName("UI").getControlByName())
                activeScene.getTextureByName("UI").getControlByName("DialogueText").text = npcs[index].dialogue
                activeScene.getTextureByName("UI").getControlByName("Speaker").text = npcs[index].name
                activeScene.getTextureByName("UI").getControlByName("DialogueBox").isVisible=true
                activeScene.getTextureByName("UI").getControlByName("DialogueText").isVisible=true
                activeScene.getTextureByName("UI").getControlByName("SpeakerBox").isVisible=true
                activeScene.getTextureByName("UI").getControlByName("Speaker").isVisible=true
                //console.log(npcs[index].dialogue)
            }
            else
            {
                activeScene.getTextureByName("UI").getControlByName("DialogueBox").isVisible=false
                activeScene.getTextureByName("UI").getControlByName("DialogueText").isVisible=false
                activeScene.getTextureByName("UI").getControlByName("SpeakerBox").isVisible=false
                activeScene.getTextureByName("UI").getControlByName("Speaker").isVisible=false
            }
        }
        
        if(activeScene==scenes["hallway"])
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
