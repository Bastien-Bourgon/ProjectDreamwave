class Player {
    constructor(x,y,z){
        this.mesh = BABYLON.MeshBuilder.CreateCapsule("ribbon",{height:1,radius:0.25})
        this.mesh.position.x=x
        this.mesh.position.y=y
        this.mesh.position.z=z
    }
}