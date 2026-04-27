function createPlane(width,height,x,y,z,rotX,rotY,rotZ,scene,color,texture,tilingScale,transparent,tag,name)
{
    if (name!=undefined)
    {
        plane_name = "plane"
    }
    else
    {
        plane_name = name
    }
    var plane = BABYLON.MeshBuilder.CreateGround(name, {width: width, height: height}, scene);
    plane.material = new BABYLON.StandardMaterial("groundMat", scene);
    plane.material.diffuseTexture = new BABYLON.Texture(texture, scene);
    if (tilingScale != undefined) {
    plane.material.diffuseTexture.uScale=width*tilingScale;
    plane.material.diffuseTexture.vScale=height*tilingScale;
    }
    if (transparent==true)
    {
    plane.material.diffuseTexture.hasAlpha=true
    plane.material.useAlphaFromDiffuseTexture = true;
    }
    if (tag != undefined)
    {
        BABYLON.Tags.AddTagsTo(plane, tag);
    }
    plane.material.diffuseColor = color;
    plane.position.x=x
    plane.position.y=y
    plane.position.z=z
    plane.rotation.x=BABYLON.Tools.ToRadians(rotX)
    plane.rotation.y=BABYLON.Tools.ToRadians(rotY)
    plane.rotation.z=BABYLON.Tools.ToRadians(rotZ)
    plane.checkCollisions = true;
    return plane
}

function createBox(width,height,depth,x,y,z,scene,color,texture)
{
    var box = new BABYLON.MeshBuilder.CreateBox("box", {width: width,height:height,depth:depth}, scene);
    box.material = new BABYLON.StandardMaterial("Mat", scene);
    box.material.diffuseTexture = new BABYLON.Texture(texture, scene);
    box.material.diffuseTexture.uScale=2.0;
    box.material.diffuseTexture.vScale=2.0;
    box.material.diffuseColor = color;
    box.position.x=x
    box.position.y=y
    box.position.z=z
    box.checkCollisions = true;
}

function createCube(size,x,y,z,scene,color,texture)
{
    var cube = new BABYLON.MeshBuilder.CreateBox("cube", {size:size}, scene);
    cube.material = new BABYLON.StandardMaterial("Mat", scene);
    cube.material.diffuseTexture = new BABYLON.Texture(texture, scene);
    cube.material.diffuseTexture.uScale=size;
    cube.material.diffuseTexture.vScale=size;
    cube.material.diffuseColor = color;
    cube.position.x=x
    cube.position.y=y
    cube.position.z=z
    cube.checkCollisions = true;
}

function createDoor(width,height,x,y,z,rotX,rotY,rotZ,scene,color,texture,tilingScale,transparent,destX,destY,destZ,destScene)
{
    var door = createPlane(width,height,x,y,z,rotX,rotY,rotZ,scene,color,texture,tilingScale,transparent,"door")
    door.destination = new BABYLON.Vector3(destX,destY,destZ)
    if (destScene!=undefined)
    {
        door.destinationScene = destScene
    }
}

var randomNumber = function (min, max) {
    if (min == max) {
        return (min);
    }
    var random = Math.random();
    return ((random * (max - min)) + min);
};

function createPointLight(x,y,z,range,scene)
{
    const light = new BABYLON.PointLight("pointLight", new BABYLON.Vector3(x, y, z), scene);
    light.range = range
}

function createHemisphericLight(x,y,z,intensity,scene)
{
    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(x, y, z), scene);
    light.shadowEnabled = false;
    light.intensity = intensity;
}

function createDirectionalLight(x,y,z,intensity,scene)
{
    const light = new BABYLON.DirectionalLight("DirectionalLight", new BABYLON.Vector3(x, y, z), scene);
    light.intensity = intensity;
}

function createText(string,scene,size,resolution,depth,x,y,z,rotX,rotY,rotZ)
{
    const fontData = fetch("fonts/Droid Sans_Regular.json").then(response => response.json().then(data => {
        const text = new BABYLON.MeshBuilder.CreateText("text",string,data,{size:size,resolution:resolution,depth:depth},scene)
        text.checkCollisions = false;
        BABYLON.Tags.AddTagsTo(text, "billboard");
        text.position.x=x
        text.position.y=y
        text.position.z=z
        text.rotation.x=BABYLON.Tools.ToRadians(rotX)
        text.rotation.y=BABYLON.Tools.ToRadians(rotY)
        text.rotation.z=BABYLON.Tools.ToRadians(rotZ)
    }))
    
}

function createNPC(width,height,x,y,z,rotX,rotY,rotZ,scene,color,texture,tilingScale,transparent,tag,dialogue,name,nameoffset)
{
    var npc = createPlane(width,height,x,y,z,rotX,rotY,rotZ,scene,color,texture,tilingScale,transparent,tag+" npc",name)
    createText(name,scene,0.2,8,0.001,x,y+nameoffset,z,0,rotY,0)
    npc.dialogue = dialogue
}

function generateForest(scene, x, y, depth, width, offset)
{
    for (let i = x; i < x+(depth*offset); i+=offset) {
        for (let j = y; j < y+(width*offset); j+=offset) {
            createPlane(2,2,i,1,j,270,45,0,scene,new BABYLON.Color3.White(),"img/tree.png",undefined,true,"billboard")
        }    
    }
    
}
