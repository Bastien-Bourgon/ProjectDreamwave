function createLevel(scene)
{
    createPlane(999,999,0,0,0,0,0,0,scene,new BABYLON.Color3.White(),"img/grass.png",2.0)
    createPlane(40,40,0,0.01,0,0,0,0,scene,new BABYLON.Color3.White(),"img/stone_tile.png",2.0)

    createPlane(15,10,-12.5,1,19,90,180,0,scene,new BABYLON.Color3.White(),"img/brick_wall.png",1.0)
    createPlane(10,3,0,4.5,19,90,180,0,scene,new BABYLON.Color3.White(),"img/brick_wall.png",1.0)
    createPlane(15,10,12.5,1,19,90,180,0,scene,new BABYLON.Color3.White(),"img/brick_wall.png",1.0)
    createPlane(15,10,-12.5,1,20,90,0,0,scene,new BABYLON.Color3.White(),"img/brick_wall.png",1.0)
    createPlane(10,3,0,4.5,20,90,0,0,scene,new BABYLON.Color3.White(),"img/brick_wall.png",1.0)
    createPlane(15,10,12.5,1,20,90,0,0,scene,new BABYLON.Color3.White(),"img/brick_wall.png",1.0)
    createPlane(1,10,5,1,19.5,90,90,180,scene,new BABYLON.Color3.White(),"img/brick_wall.png",1.0)
    createPlane(1,10,-5,1,19.5,90,-90,180,scene,new BABYLON.Color3.White(),"img/brick_wall.png",1.0)
    createPlane(10,1,0,3,19.5,0,0,180,scene,new BABYLON.Color3.White(),"img/brick_wall.png",1.0)

    createPlane(15,10,-12.5,1,-19,90,0,0,scene,new BABYLON.Color3.White(),"img/brick_wall.png",1.0)
    createPlane(10,3,0,4.5,-19,90,0,0,scene,new BABYLON.Color3.White(),"img/brick_wall.png",1.0)
    createPlane(15,10,12.5,1,-19,90,0,0,scene,new BABYLON.Color3.White(),"img/brick_wall.png",1.0)
    createPlane(15,10,-12.5,1,-20,90,180,0,scene,new BABYLON.Color3.White(),"img/brick_wall.png",1.0)
    createPlane(10,3,0,4.5,-20,90,180,0,scene,new BABYLON.Color3.White(),"img/brick_wall.png",1.0)
    createPlane(15,10,12.5,1,-20,90,180,0,scene,new BABYLON.Color3.White(),"img/brick_wall.png",1.0)
    createPlane(1,10,5,1,-19.5,90,90,180,scene,new BABYLON.Color3.White(),"img/brick_wall.png",1.0)
    createPlane(1,10,-5,1,-19.5,90,-90,180,scene,new BABYLON.Color3.White(),"img/brick_wall.png",1.0)
    createPlane(10,1,0,3,-19.5,0,0,180,scene,new BABYLON.Color3.White(),"img/brick_wall.png",1.0)

    createPlane(40,10,-19,1,0,90,180,90,scene,new BABYLON.Color3.White(),"img/brick_wall.png",1.0)
    createPlane(40,10,-20,1,0,90,180,270,scene,new BABYLON.Color3.White(),"img/brick_wall.png",1.0)

    createPlane(40,10,19,1,0,90,180,270,scene,new BABYLON.Color3.White(),"img/brick_wall.png",1.0)
    createPlane(40,10,20,1,0,90,180,90,scene,new BABYLON.Color3.White(),"img/brick_wall.png",1.0)

    createPlane(40,40,0,6,0,0,0,0,scene,new BABYLON.Color3.White(),"img/brick_wall.png",1.0)
    createPlane(40,40,0,5,0,0,0,180,scene,new BABYLON.Color3.White(),"img/brick_wall.png",1.0)

    createPlane(1,2,0,1,150,270,0,0,scene,new BABYLON.Color3.White(),"img/door_metal.png",undefined,false,"billboard door")
    //createPlane(1,2,0,1,50,270,180,0,scene,new BABYLON.Color3.White(),"img/door_metal.png",undefined)

    createPlane(0.66,(159/52)*0.66,15,1.1,15,270,0,0,scene,new BABYLON.Color3.White(),"img/senora.png",undefined,true,"billboard")

    generateForest(scene,25,25,20,20,10)
    generateForest(scene,-25-190,25,20,20,10)
    generateForest(scene,-25-190,-25-190,20,20,10)
    generateForest(scene,25,-25-190,20,20,10)

    createHemisphericLight(0,1,0,1,scene)
    createHemisphericLight(0,-1,0,1,scene)
}

function createPlane(width,height,x,y,z,rotX,rotY,rotZ,scene,color,texture,tilingScale,transparent,tag)
{
    var plane = BABYLON.MeshBuilder.CreateGround("plane", {width: width, height: height}, scene);
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

function generateForest(scene, x, y, depth, width, offset)
{
    for (let i = x; i < x+(depth*offset); i+=offset) {
        for (let j = y; j < y+(width*offset); j+=offset) {
            createPlane(2,2,i,1,j,270,45,0,scene,new BABYLON.Color3.White(),"img/tree.png",undefined,true,"billboard")
        }    
    }
    
}
